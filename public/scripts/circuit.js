// ══════════════════════════════════════════════════════════════════════════════
// CIRCUIT — daily grid-path puzzle
// ══════════════════════════════════════════════════════════════════════════════
// Deterministic per UTC day (reuses the same seededRand pattern as daily.js),
// generated entirely client-side. No backend / precompute step required.

let CURRENT_CIRCUIT_SIZE = 3;
const CIRCUIT_COLORS = ['#47b3ff', '#ff4d6b', '#7ee8a2', '#f9ab00'];
const CIRCUIT_OPS = ['+', '-', '×', '÷'];
let CIRCUIT_HINT_COOLDOWN_MS = 30000;

let circuitState = {
  puzzle: null,
  currentPath: [],     // array of cell indices, in drag order
  startTime: 0,
  timer: null,
  elapsedMs: 0,
  done: false,
  lastHintAt: 0,
  hintCellIndices: [],
  hintTimer: null,
  hintTargetValue: null,
  hintStep: -1,
};

// ── Date / seed (mirrors daily.js, salted so the two daily puzzles differ) ──
function getCircuitDateStr(){
  if (typeof getDailyDateStr === 'function') return getDailyDateStr();
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth()+1).padStart(2,'0')}-${String(now.getUTCDate()).padStart(2,'0')}`;
}
function getCircuitSeed(dateStr, salt){
  const s = dateStr + '-circuit' + (salt ? '-' + salt : '');
  let h = 0;
  for (let i=0;i<s.length;i++) h = (Math.imul(31,h) + s.charCodeAt(i)) | 0;
  return Math.abs(h) || 12345;
}

// ── Cell index helpers ───────────────────────────────────────────────────────
function rc(idx){ return [Math.floor(idx/CURRENT_CIRCUIT_SIZE), idx%CURRENT_CIRCUIT_SIZE]; }
function idxOf(r,c){ return r*CURRENT_CIRCUIT_SIZE+c; }
function neighbors(idx){
  const [r,c]=rc(idx); const out=[];
  if(r>0) out.push(idxOf(r-1,c));
  if(r<CURRENT_CIRCUIT_SIZE-1) out.push(idxOf(r+1,c));
  if(c>0) out.push(idxOf(r,c-1));
  if(c<CURRENT_CIRCUIT_SIZE-1) out.push(idxOf(r,c+1));
  return out;
}
function borderKey(a,b){ return a<b ? a+'_'+b : b+'_'+a; }

// ── Generation ────────────────────────────────────────────────────────────────
function generateCircuitPuzzle(){
  const dateStr = getCircuitDateStr();
  const baseSeed = getCircuitSeed(dateStr);
  const dayIndex = Math.floor(Date.parse(dateStr+'T00:00:00Z') / 86400000);
  CURRENT_CIRCUIT_SIZE = (dayIndex % 2 === 0) ? 4 : 3;
  const isHard = CURRENT_CIRCUIT_SIZE === 3 ? (Math.floor(dayIndex / 2) % 2 === 0) : false;
  CIRCUIT_HINT_COOLDOWN_MS = CURRENT_CIRCUIT_SIZE === 4 ? 15000 : 30000;
  const total = CURRENT_CIRCUIT_SIZE*CURRENT_CIRCUIT_SIZE;

  for (let attempt=0; attempt<200; attempt++){
    const rng = seededRand(getCircuitSeed(dateStr, attempt));
    const ri = (lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
    const shuffle = (arr)=>{ const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };

    // 1) Blocked cells — scale with grid size
    const maxBlocked = Math.max(0, CURRENT_CIRCUIT_SIZE*CURRENT_CIRCUIT_SIZE - (CURRENT_CIRCUIT_SIZE === 4 ? 16 : 8));
    const blockedCount = maxBlocked > 0 ? ri(0, maxBlocked) : 0;
    const blocked = new Set();
    let order = shuffle([...Array(total).keys()]);
    for (let i=0; i<order.length && blocked.size<blockedCount; i++) blocked.add(order[i]);

    const free = [...Array(total).keys()].filter(i=>!blocked.has(i));
    if (free.length < 4) continue; // need at least 4 paths of length >= 1 (2 minimum per path)

    // Connectivity check (single connected free region keeps partitioning sane)
    if (!isConnected(free, blocked)) continue;

    // 2) Partition free cells into 4 connected regions via random growth
    const regions = growRegions(free, blocked, 4, rng);
    if (!regions || regions.some(r=>r.length<2)) continue;

    // 3) Hamiltonian path per region + arithmetic assignment
    const targets = [];
    let ok = true;
    for (let ti=0; ti<4; ti++){
      const region = regions[ti];
      const path = findHamiltonianPath(region, rng);
      if (!path){ ok=false; break; }
      const built = buildArithmeticOnPath(path, rng, isHard);
      if (!built){ ok=false; break; }
      targets.push({ value: built.value, path, nums: built.nums, ops: built.ops, color: CIRCUIT_COLORS[ti], pathLen: path.length, solved:false });
    }
    if (!ok) continue;

    // No duplicate target values
    const vals = targets.map(t=>t.value);
    if (new Set(vals).size !== vals.length) continue;
    if (vals.some(v=>v<=0 || v>999)) continue;

    // 4) Build final cells/borders/target shape from the already-built arithmetic
    const finalized = finalizeCircuitPuzzle(dateStr, blocked, targets, rng);
    if (finalized) return finalized;
  }
  return null; // extremely unlikely; caller should handle gracefully
}

function isConnected(free, blocked){
  if (!free.length) return false;
  const seen = new Set([free[0]]);
  const stack=[free[0]];
  while(stack.length){
    const cur = stack.pop();
    for (const n of neighbors(cur)){
      if (!blocked.has(n) && !seen.has(n)){ seen.add(n); stack.push(n); }
    }
  }
  return seen.size === free.length;
}

// Randomized flood-fill growth: 4 seeds claim adjacent free cells round-robin
// until all free cells are assigned. Produces 4 connected regions.
function growRegions(free, blocked, count, rng){
  const freeSet = new Set(free);
  // Fisher-Yates with seeded RNG — deterministic across all JS engines
  const shuffled = [...free];
  for (let i=shuffled.length-1;i>0;i--){
    const j=Math.floor(rng()*(i+1));
    [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
  }
  const seeds = [];
  for (const f of shuffled){
    if (seeds.length>=count) break;
    if (!seeds.includes(f)) seeds.push(f);
  }
  if (seeds.length < count) return null;

  const owner = new Map(); // idx -> region index
  seeds.forEach((s,i)=>owner.set(s,i));
  const frontier = seeds.map(s=>[s]);
  let remaining = freeSet.size - seeds.length;
  let guard = 0;
  while (remaining>0 && guard++ < 5000){
    for (let ri=0; ri<count; ri++){
      if (remaining<=0) break;
      // try to grow region ri by one cell
      const front = frontier[ri];
      let grown=false;
      const order = [...front];
      for(let i=order.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
      for (const cell of order){
        const opts = neighbors(cell).filter(n=>freeSet.has(n) && !owner.has(n));
        if (opts.length){
          const pick = opts[Math.floor(rng()*opts.length)];
          owner.set(pick, ri);
          frontier[ri].push(pick);
          remaining--; grown=true;
          break;
        }
      }
      if (!grown){
        // region ri is stuck — remove exhausted cells from its frontier
        frontier[ri] = front.filter(c=>neighbors(c).some(n=>freeSet.has(n)&&!owner.has(n)));
      }
    }
    // If every region is stuck but cells remain, fail this attempt
    if (frontier.every(f=>f.length===0) && remaining>0) return null;
  }
  if (remaining>0) return null;

  const regions = Array.from({length:count}, ()=>[]);
  owner.forEach((ri,idx)=>regions[ri].push(idx));
  return regions;
}

// DFS search for a Hamiltonian path visiting every cell in `region` exactly once,
// stepping only between orthogonal neighbors within the region.
function findHamiltonianPath(region, rng){
  const set = new Set(region);
  const starts = [...region];
  for(let i=starts.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[starts[i],starts[j]]=[starts[j],starts[i]];}
  for (const start of starts){
    const visited = new Set([start]);
    const path = [start];
    if (dfsPath(path, visited, set, region.length, rng)) return path;
  }
  return null;
}
function dfsPath(path, visited, set, target, rng){
  if (path.length === target) return true;
  const cur = path[path.length-1];
  const opts = neighbors(cur).filter(n=>set.has(n) && !visited.has(n));
  for(let i=opts.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
  for (const next of opts){
    visited.add(next); path.push(next);
    if (dfsPath(path, visited, set, target, rng)) return true;
    visited.delete(next); path.pop();
  }
  return false;
}

// Picks numbers (max 2 digits) for each cell on the path and operators between
// consecutive cells so the left-to-right result is an integer target, 1-999.
function buildArithmeticOnPath(path, rng, isHard=false){
  const ri = (lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
  // Short paths can use ×/÷; longer paths stick to +/- to keep numbers manageable
  const opPool = path.length <= 3 ? ['+','-','×','÷'] : ['+','-','+','-','+']; // bias +/-
  for (let attempt=0; attempt<400; attempt++){
    const nums = path.map(()=>ri(1,isHard?25:15)); // small numbers: 1–15 (or up to 25 if hard)
    const ops = [];
    let val = nums[0];
    let valid = true;
    for (let i=1;i<path.length;i++){
      const pool = shuffleArr(opPool, rng);
      let stepOk = false;
      for (const op of pool){
        let nv;
        if (op==='+') nv = val + nums[i];
        else if (op==='-') nv = val - nums[i];
        else if (op==='×'){ nv = val * nums[i]; if (nv > 99) continue; } // cap × results
        else {
          if (nums[i]===0 || val % nums[i] !== 0) continue;
          nv = val / nums[i];
        }
        if (!Number.isInteger(nv) || nv <= 0 || nv > 99) continue; // cap final at 99
        ops.push(op); val = nv; stepOk = true; break;
      }
      if (!stepOk){ valid=false; break; }
    }
    if (valid && Number.isInteger(val) && val>0 && val<=99){
      return { value: val, nums, ops };
    }
  }
  return null;
}
function shuffleArr(arr, rng){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

function finalizeCircuitPuzzle(dateStr, blocked, targetsRaw, rng){
  const total = CURRENT_CIRCUIT_SIZE*CURRENT_CIRCUIT_SIZE;
  const cells = Array.from({length:total}, (_,i)=>({ idx:i, blocked: blocked.has(i), num:null }));
  const targets = targetsRaw.map(tg=>{
    tg.path.forEach((cellIdx, i)=>{ cells[cellIdx].num = tg.nums[i]; });
    return { value: tg.value, path: tg.path, ops: tg.ops, color: tg.color, pathLen: tg.path.length, solved: false };
  });
  // Border symbols: canonical-path borders use their stored operator;
  // every other valid interior border gets a random symbol.
  const pathOpByBorder = {};
  targets.forEach(tg=>{
    for (let i=1;i<tg.path.length;i++){
      pathOpByBorder[borderKey(tg.path[i-1], tg.path[i])] = tg.ops[i-1];
    }
  });
  const borders = {};
  for (let r=0;r<CURRENT_CIRCUIT_SIZE;r++){
    for (let c=0;c<CURRENT_CIRCUIT_SIZE;c++){
      const a = idxOf(r,c);
      if (cells[a].blocked) continue;
      if (c<CURRENT_CIRCUIT_SIZE-1){
        const b = idxOf(r,c+1);
        if (!cells[b].blocked){
          const key = borderKey(a,b);
          borders[key] = pathOpByBorder[key] || CIRCUIT_OPS[Math.floor(rng()*4)];
        }
      }
      if (r<CURRENT_CIRCUIT_SIZE-1){
        const b = idxOf(r+1,c);
        if (!cells[b].blocked){
          const key = borderKey(a,b);
          borders[key] = pathOpByBorder[key] || CIRCUIT_OPS[Math.floor(rng()*4)];
        }
      }
    }
  }

  // Shuffle target display order so color never implies difficulty/index
  const shuffledTargets = shuffleArr(targets, rng);

  return { dateStr, size: CURRENT_CIRCUIT_SIZE, cells, borders, targets: shuffledTargets };
}

// ── Persistence ───────────────────────────────────────────────────────────────
function circuitLocalKey(dateStr){ return 'numfly_circuit_'+dateStr; }
function loadCircuitResult(dateStr){
  try{ const raw = localStorage.getItem(circuitLocalKey(dateStr)); return raw ? JSON.parse(raw) : null; }
  catch(e){ return null; }
}
function saveCircuitProgress(dateStr){
  if (!circuitState.puzzle || circuitState.done) return;
  const elapsed = circuitState.startTime > 0 ? Date.now() - circuitState.startTime : 0;
  try{
    localStorage.setItem(circuitLocalKey(dateStr)+'_progress', JSON.stringify({
      elapsedMs: elapsed,
      solved: circuitState.puzzle.targets.map(t=>t.solved)
    }));
  }catch(e){}
}
function loadCircuitProgress(dateStr){
  try{ const raw=localStorage.getItem(circuitLocalKey(dateStr)+'_progress'); return raw?JSON.parse(raw):null; }
  catch(e){ return null; }
}
function clearCircuitProgress(dateStr){
  try{ localStorage.removeItem(circuitLocalKey(dateStr)+'_progress'); }catch(e){}
}

function clearCircuitLocalState(){
  try{
    const today=getCircuitDateStr();
    const d=new Date();d.setUTCDate(d.getUTCDate()-1);
    const yesterday=`${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
    localStorage.removeItem(circuitLocalKey(today));
    localStorage.removeItem(circuitLocalKey(yesterday));
    localStorage.removeItem(circuitLocalKey(today)+'_progress');
    localStorage.removeItem(circuitLocalKey(yesterday)+'_progress');
  }catch(e){}
}

function getCircuitStreak(){
  try{
    const s=JSON.parse(localStorage.getItem('numfly_circuit_streak')||'null');
    if(!s||!s.count)return{count:0,lastDate:''};
    const today=getCircuitDateStr();
    const d=new Date(today+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()-1);
    const yesterday = `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
    if(s.lastDate!==today&&s.lastDate!==yesterday){
      try{localStorage.setItem('numfly_circuit_streak',JSON.stringify({count:0,lastDate:s.lastDate}));}catch(e){}
      return{count:0,lastDate:s.lastDate};
    }
    return s;
  }catch(e){return{count:0,lastDate:''};}
}
function updateCircuitStreak(dateStr){
  const s=getCircuitStreak();
  const d=new Date(dateStr+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()-1);
  const yesterday = `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
  let newCount;
  if(s.lastDate===dateStr){
    newCount=s.count;
  } else if(s.lastDate===yesterday){
    newCount=s.count+1;
  } else {
    newCount=1;
  }
  const updated={count:newCount,lastDate:dateStr};
  try{localStorage.setItem('numfly_circuit_streak',JSON.stringify(updated));}catch(e){}
  if(typeof currentUser !== 'undefined' && currentUser && typeof scheduleSync === 'function') scheduleSync();
  return updated;
}

async function saveCircuitResult(dateStr, timeMs){
  clearCircuitProgress(dateStr);
  try{ localStorage.setItem(circuitLocalKey(dateStr), JSON.stringify({time_ms:timeMs})); }catch(e){}

  // Streak must update unconditionally, independent of whether `stats` exists
  const streak = updateCircuitStreak(dateStr);

  // Update stats for achievements
  if(typeof stats !== 'undefined'){
    if(!stats.circuitBestTime || timeMs < stats.circuitBestTime) stats.circuitBestTime = timeMs;
    stats.circuitCurrentStreak = streak.count;
    stats.circuitBestStreak = Math.max(stats.circuitBestStreak||0, stats.circuitCurrentStreak);
    if(typeof saveGuestState==='function') saveGuestState();
  }
  if (typeof sb!=='undefined' && sb && typeof currentUser!=='undefined' && currentUser){
    try{
      await sb.from('circuit_entries').upsert({user_id:currentUser.id,challenge_date:dateStr,time_ms:timeMs},{onConflict:'user_id,challenge_date'});
    }catch(e){ console.warn('[Numfly] circuit save error:', e); }
    if(streak.count){
      try{ await sb.from('user_progress').update({circuit_streak_count:streak.count,circuit_streak_last_date:dateStr}).eq('user_id',currentUser.id); }catch(e){}
    }
  }
}

// ── Init / lifecycle ──────────────────────────────────────────────────────────
function initCircuit(){
  const dateStr = getCircuitDateStr();
  const existing = loadCircuitResult(dateStr);
  circuitState = { puzzle: null, currentPath: [], startTime:0, timer:null, elapsedMs:0, done:false, lastHintAt:0, hintCellIndices:[], hintTimer:null, hintTargetValue:null, hintStep:-1 };

  const puzzle = generateCircuitPuzzle();
  if (!puzzle){
    console.error('[Numfly] Circuit: failed to generate a valid puzzle for', dateStr);
    return;
  }
  circuitState.puzzle = puzzle;

  if (existing && existing.time_ms){
    // Already solved today — show result screen straight away
    circuitState.done = true;
    circuitState.elapsedMs = existing.time_ms;
    renderCircuitGrid(true);
    showCircuitResult(existing.time_ms, true);
    return;
  }

  // Restore in-progress state if player left mid-game
  const progress = loadCircuitProgress(dateStr);
  if (progress){
    progress.solved.forEach((s,i)=>{ if(circuitState.puzzle.targets[i]) circuitState.puzzle.targets[i].solved = s; });
  }

  renderCircuitGrid(false);
  const introTitle = document.getElementById('cc-intro');
  const introSub = document.getElementById('cc-intro-sub');
  if (introTitle) introTitle.style.display = 'none';
  if (introSub) introSub.style.display = 'none';

  if (progress && progress.elapsedMs > 0){
    // Resume — skip countdown, restore elapsed time
    circuitState.startTime = Date.now() - progress.elapsedMs;
    if (circuitState.timer) clearInterval(circuitState.timer);
    circuitState.timer = setInterval(()=>{
      const el = document.getElementById('cc-timer');
      if (el) el.textContent = fmtCircuitTime(Date.now()-circuitState.startTime);
    }, 100);
  } else {
    startCircuitCountdown();
  }
}
function startCircuitCountdown(){
  const existing = document.getElementById('circuit-countdown-overlay');
  if (existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'circuit-countdown-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:var(--bg,#0d0d0d);z-index:9999;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `<div style="text-align:center">
    <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px">🔀 ${t('circuit_card_title')}</div>
    <div id="circuit-countdown-num" style="font-family:'Bebas Neue',sans-serif;font-size:140px;color:var(--accent);line-height:1;letter-spacing:2px">3</div>
  </div>`;
  document.body.appendChild(overlay);
  let count = 3;
  const timer = setInterval(()=>{
    const liveOverlay = document.getElementById('circuit-countdown-overlay');
    const liveNum = document.getElementById('circuit-countdown-num');
    if (!liveOverlay){ clearInterval(timer); return; }
    count--;
    if (count<=0){
      clearInterval(timer);
      liveOverlay.remove();
      startCircuitTimer();
      return;
    }
    if (liveNum) liveNum.textContent = count;
  }, 1000);
}

function startCircuitTimer(){
  circuitState.startTime = Date.now();
  if (circuitState.timer) clearInterval(circuitState.timer);
  circuitState.timer = setInterval(()=>{
    const el = document.getElementById('cc-timer');
    if (el) el.textContent = fmtCircuitTime(Date.now()-circuitState.startTime);
  }, 100);
}
function fmtCircuitTime(ms){
  if (ms < 60000) return (ms/1000).toFixed(2)+'s';
  const m = Math.floor(ms/60000);
  const s = ((ms%60000)/1000).toFixed(2);
  return m+'m '+s+'s';
}

// ── Rendering ─────────────────────────────────────────────────────────────────
function renderCircuitGrid(locked){
  const puzzle = circuitState.puzzle;
  if (!puzzle) return;
  const svg = document.getElementById('cc-grid-svg');
  const targetsWrap = document.getElementById('cc-targets');
  if (!svg || !targetsWrap) return;
  const dateEl = document.getElementById('cc-date-display');
  if (dateEl){
    const d = new Date(puzzle.dateStr+'T00:00:00Z');
    const lang = (typeof currentLang!=='undefined' && currentLang) ? currentLang : (typeof getLang==='function'?getLang():'en');
    const locale = lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US';
    dateEl.textContent = d.toLocaleDateString(locale,{month:'short',day:'numeric'});
  }
  const solvedEl = document.getElementById('cc-solved-count');
  if (solvedEl) solvedEl.textContent = puzzle.targets.filter(t=>t.solved).length;

  const CELL = 100, SIZE = puzzle.size;
  svg.setAttribute('viewBox', `0 0 ${SIZE*CELL} ${SIZE*CELL}`);
  let html = '';

// Cells
  puzzle.cells.forEach(cell=>{
    const [r,c] = rc(cell.idx);
    const x=c*CELL, y=r*CELL;
    const lockedTarget = puzzle.targets.find(t=>t.solved && t.path.includes(cell.idx));
    const fill = cell.blocked ? 'var(--cc-blocked, #2a2a35)'
      : lockedTarget ? lockedTarget.color
      : 'var(--cc-cell, #14141c)';
    const isHint = circuitState.hintCellIndices && circuitState.hintCellIndices.includes(cell.idx);
    html += `<rect class="cc-cell" data-idx="${cell.idx}" x="${x+3}" y="${y+3}" width="${CELL-6}" height="${CELL-6}" rx="10"
      fill="${fill}" opacity="${cell.blocked?0.55:1}" stroke="${isHint?'#fff':'rgba(255,255,255,.08)'}" stroke-width="${isHint?3:1}"></rect>`;
    if (!cell.blocked && cell.num!==null && cell.num!==undefined){
      const textColor = lockedTarget ? '#08080e' : 'var(--text,#fff)';
      html += `<text x="${x+CELL/2}" y="${y+CELL/2+8}" text-anchor="middle" font-family="DM Mono, monospace" font-size="26" fill="${textColor}" pointer-events="none">${cell.num}</text>`;
    }
  });

  if (circuitState.hintCellIndices && circuitState.hintCellIndices.length > 1){
    html += pathPolyline(circuitState.hintCellIndices, CELL, 'rgba(255,255,255,0.7)', 5);
  }

// Border symbols — hide every border touching a locked cell (any side)
  const lockedCellSet = new Set();
  puzzle.targets.filter(t=>t.solved).forEach(t=>t.path.forEach(idx=>lockedCellSet.add(idx)));
  const solvedBorders = new Set();
  Object.keys(puzzle.borders).forEach(key=>{
    const [a,b] = key.split('_').map(Number);
    if (lockedCellSet.has(a) || lockedCellSet.has(b)) solvedBorders.add(key);
  });

  Object.keys(puzzle.borders).forEach(key=>{
    if (solvedBorders.has(key)) return;
    const [a,b] = key.split('_').map(Number);
    const [ra,ca] = rc(a), [rb,cb] = rc(b);
    const mx = ((ca+cb)/2+0.5)*CELL, my = ((ra+rb)/2+0.5)*CELL;
    html += `<text x="${mx}" y="${my+8}" text-anchor="middle" font-family="DM Mono, monospace" font-size="28" font-weight="700" fill="#e8ff47" pointer-events="none">${puzzle.borders[key]}</text>`;
  });

  // Locked path polylines
  puzzle.targets.filter(t=>t.solved).forEach(t=>{
    html += pathPolyline(t.path, CELL, t.color, 6);
  });
  // In-progress path
  if (circuitState.currentPath.length>1){
    html += pathPolyline(circuitState.currentPath, CELL, 'rgba(232,255,71,.9)', 5);
  }

  svg.innerHTML = html;
  attachCircuitPointerHandlers(svg);

// Target pills
  targetsWrap.innerHTML = puzzle.targets.map(tgt=>`
    <div class="cc-target-pill${tgt.solved?' solved':''}" style="--cc-pill-color:${tgt.color}">
      <span class="cc-target-pill-label">Target</span>
      <span class="cc-target-pill-value">${tgt.value}</span>
      <span class="cc-target-pill-sub">${tgt.pathLen} cells</span>
      <span class="cc-target-pill-check">${tgt.solved?'✓':''}</span>
    </div>`).join('');

  // Update solved count in HUD (if still present)
  const solvedEl2 = document.getElementById('cc-solved-count');
  if (solvedEl2) solvedEl2.textContent = puzzle.targets.filter(t=>t.solved).length;
}

function pathPolyline(path, CELL, color, width){
  const pts = path.map(idx=>{ const [r,c]=rc(idx); return `${c*CELL+CELL/2},${r*CELL+CELL/2}`; }).join(' ');
  return `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" pointer-events="none"></polyline>`;
}

// ── Pointer interaction ───────────────────────────────────────────────────────
let circuitDragging = false;
function _circuitOutsidePointerDown(e){
  if (circuitState.done || !circuitState.puzzle) return;
  const liveSvg = document.getElementById('cc-grid-svg');
  if (!liveSvg) return;
  if (liveSvg.contains(e.target)) return;
  if (e.target.closest('button, a')) return;
  if (circuitState.currentPath.length){
    circuitState.currentPath = [];
    updateCircuitPathVisual();
  }
}
function attachCircuitPointerHandlers(svg){
  // Remove before re-adding so only one listener ever exists, even across Astro navigations
  document.removeEventListener('pointerdown', _circuitOutsidePointerDown);
  document.addEventListener('pointerdown', _circuitOutsidePointerDown);
  svg.onpointerdown = (e)=>{
    if (circuitState.done) return;
    const idx = cellIdxFromEvent(e);
    if (idx===null) return;
    const cell = circuitState.puzzle.cells[idx];
    if (cell.blocked || isCellLocked(idx)) return;
    // Capture pointer so pointermove keeps firing even as finger slides across cells
    try { svg.setPointerCapture(e.pointerId); } catch(_){}
    
    // Clear hint if tapping
    if (circuitState.hintCellIndices && circuitState.hintCellIndices.length > 0){
      circuitState.hintCellIndices = [];
      circuitState.hintTargetValue = null;
      circuitState.hintStep = -1;
      renderCircuitGrid(false);
    }
    // Always start a fresh path from the touched cell
    circuitState.currentPath = [idx];
    circuitDragging = true;
    updateCircuitPathVisual();
  };

  svg.onpointermove = (e)=>{
    if (!circuitDragging || circuitState.done) return;
    const idx = cellIdxFromEvent(e);
    if (idx===null) return;
    handleCircuitDragOver(idx);
  };
  const finish = ()=>{
    if (!circuitDragging) return;
    circuitDragging = false;
    tryLockCurrentPath();
    circuitState.currentPath = [];
    updateCircuitPathVisual();
  };
  svg.onpointerup = finish;
  svg.onpointerleave = finish;
  window.onpointerup = finish;
}
function cellIdxFromEvent(e){
  // elementFromPoint is the reliable path for touch/captured pointer events
  // (when pointer is captured, e.target is always the capture element, not the cell)
  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el && el.classList && el.classList.contains('cc-cell')) return Number(el.dataset.idx);
  // Fallback for mouse events where target is accurate
  const t = e.target;
  if (t && t.classList && t.classList.contains('cc-cell')) return Number(t.dataset.idx);
  return null;
}
function isCellLocked(idx){
  return circuitState.puzzle.targets.some(t=>t.solved && t.path.includes(idx));
}
function handleCircuitDragOver(idx){
  const path = circuitState.currentPath;
  const cell = circuitState.puzzle.cells[idx];
  if (cell.blocked || isCellLocked(idx)) return;
  const last = path[path.length-1];
  if (idx === last) return;

  // Drag back onto the second-to-last cell = undo last step
  if (path.length>1 && idx === path[path.length-2]){
    path.pop();
    updateCircuitPathVisual();
    return;
  }
  // Reject if already in path (no repeats) or not adjacent (no diagonals)
  if (path.includes(idx)) return;
  if (!neighbors(last).includes(idx)) return;
  path.push(idx);
  updateCircuitPathVisual();
}
// Lightweight update during drag: only touches the in-progress polyline and
// cell fill classes, instead of rebuilding the whole SVG (smoother dragging).
function updateCircuitPathVisual(){
  const svg = document.getElementById('cc-grid-svg');
  if (!svg) return;
  const path = circuitState.currentPath;
  const CELL = 100;
  let poly = svg.querySelector('#cc-inprogress-path');
  if (!poly){
    poly = document.createElementNS('http://www.w3.org/2000/svg','polyline');
    poly.id = 'cc-inprogress-path';
    poly.setAttribute('fill','none');
    poly.setAttribute('stroke','rgba(232,255,71,.9)');
    poly.setAttribute('stroke-width','5');
    poly.setAttribute('stroke-linecap','round');
    poly.setAttribute('stroke-linejoin','round');
    poly.setAttribute('opacity','0.85');
    poly.setAttribute('pointer-events','none');
    svg.appendChild(poly);
  }
  if (path.length>1){
    const pts = path.map(idx=>{ const [r,c]=rc(idx); return `${c*CELL+CELL/2},${r*CELL+CELL/2}`; }).join(' ');
    poly.setAttribute('points', pts);
  } else {
    poly.setAttribute('points', '');
  }
// Highlight cells currently in path; preserve hint highlight
  svg.querySelectorAll('.cc-cell').forEach(rect=>{
    const idx = Number(rect.dataset.idx);
    if (path.includes(idx)){
      rect.setAttribute('stroke', '#e8ff47');
      rect.setAttribute('stroke-width','2');
    } else if (circuitState.hintCellIndices && circuitState.hintCellIndices.includes(idx)){
      rect.setAttribute('stroke', '#fff');
      rect.setAttribute('stroke-width','3');
    } else {
      rect.setAttribute('stroke', 'rgba(255,255,255,.08)');
      rect.setAttribute('stroke-width','1');
    }
  });
}
function tryLockCurrentPath(){
  const path = circuitState.currentPath;
  if (path.length < 2) return; // too short, just leave it
  const match = circuitState.puzzle.targets.find(t=>!t.solved && sameCellSet(t.path, path));
  if (match){
    const val = evalPathValue(path);
    if (val === match.value){
      match.solved = true;
      circuitState.currentPath = [];
      if (circuitState.hintTargetValue === match.value){ circuitState.hintCellIdx = null; circuitState.hintTargetValue = null; circuitState.hintStep = -1; }
      renderCircuitGrid(false);
      if (circuitState.puzzle.targets.every(t=>t.solved)) finishCircuit();
      return;
    }
  }
  // No match → keep path as-is, player can keep dragging
}
// True if both paths visit the same set of cells, regardless of order
function sameCellSet(a,b){
  if (a.length!==b.length) return false;
  const sa = new Set(a);
  return b.every(c=>sa.has(c));
}
// Evaluate left-to-right arithmetic for an arbitrary cell path using the grid's
// existing border symbols (so reverse/reordered drags use the correct operator
// for each pair of adjacent cells actually crossed).
function evalPathValue(path){
  const puzzle = circuitState.puzzle;
  let val = puzzle.cells[path[0]].num;
  for (let i=1;i<path.length;i++){
    const a = path[i-1], b = path[i];
    const key = borderKey(a,b);
    const op = puzzle.borders[key];
    if (op===undefined) return null; // no border between these — shouldn't happen if adjacency was enforced
    const n = puzzle.cells[b].num;
    if (op==='+') val = val + n;
    else if (op==='-') val = val - n;
    else if (op==='×') val = val * n;
    else if (op==='÷'){ if (n===0 || val % n !== 0) return null; val = val / n; }
  }
  return val;
}

// ── Hint ──────────────────────────────────────────────────────────────────────
function useCircuitHint(){
  // Add safety check: exit if puzzle is not initialized
  if (!circuitState.puzzle) return; 

  const now = Date.now();
  if (now - circuitState.lastHintAt < CIRCUIT_HINT_COOLDOWN_MS) return;
  
  const unresolved = circuitState.puzzle.targets.filter(t=>!t.solved);
  if (!unresolved.length) return;
  
  const target = unresolved[0];
  
  if (!circuitState.hintCellIndices) circuitState.hintCellIndices = [];
  
  if (circuitState.hintTargetValue === target.value && circuitState.hintStep < target.path.length-1){
    circuitState.hintStep++;
    circuitState.hintCellIndices.push(target.path[circuitState.hintStep]);
  } else {
    circuitState.hintTargetValue = target.value;
    circuitState.hintStep = 0;
    circuitState.hintCellIndices = [target.path[0]];
  }
  circuitState.lastHintAt = now;
  circuitDragging = false;
  renderCircuitGrid(false);
  startCircuitHintCooldownUI();
}
function startCircuitHintCooldownUI(){
  const btn = document.getElementById('cc-hint-btn');
  if (!btn) return;
  btn.disabled = true;
  const tick = ()=>{
    const remaining = CIRCUIT_HINT_COOLDOWN_MS - (Date.now()-circuitState.lastHintAt);
    if (remaining<=0){ btn.disabled=false; btn.textContent='💡 Hint'; return; }
    btn.innerHTML = `💡 ${Math.ceil(remaining/1000)}s`;
    setTimeout(tick, 250);
  };
  tick();
}

// ── Card on main menu (mirrors updateDailyCard) ─────────────────────────────
async function updateCircuitCard(){
  let card = document.getElementById('circuit-card');
  if (!card) return; 
  const dateStr = getCircuitDateStr();
  let done = null;
  try {
    const raw = localStorage.getItem(circuitLocalKey(dateStr));
  if (raw) done = JSON.parse(raw);
  } catch(e){}
  const timeEl = document.getElementById('circuit-your-time');
  if (done && done.time_ms){
    card.classList.add('daily-card-done');
    if (timeEl){ timeEl.style.display='block'; timeEl.innerHTML = '✓ ' + fmtCircuitTime(done.time_ms); }
  } else {
    card.classList.remove('daily-card-done');
    if (timeEl) timeEl.style.display='none';
  }
  // Render circuit streak badge with same tier logic as daily streak
  const circuitBadge = document.getElementById('circuit-streak-badge');
  const circuitStreakCount = document.getElementById('circuit-streak-count');
  const allTiers=['tier-yellow','tier-blue','tier-purple','tier-crystal','tier-crown'];
  card.classList.remove(...allTiers);
  if (circuitBadge){
    const streak = typeof getCircuitStreak==='function'?getCircuitStreak().count:0;
    if (streak>=2){
      circuitBadge.style.display='flex';
      if(circuitStreakCount) circuitStreakCount.textContent=streak;
      const TIERS=[
        [365,'👑','tier-crown','rgba(232,255,71,.18)','rgba(232,255,71,.5)','#e8ff47'],
        [90, '🔮','tier-purple','rgba(192,132,252,.18)','rgba(192,132,252,.45)','#c084fc'],
        [30, '💎','tier-crystal','rgba(77,255,180,.16)','rgba(77,255,180,.45)','#4dffb4'],
        [2,  '🔥','','rgba(255,120,0,.13)','rgba(255,120,0,.35)','#ff8c00'],
      ];
      const tier=TIERS.find(([min])=>streak>=min)||TIERS[TIERS.length-1];
      const [,icon,tierCls,bg,border,countColor]=tier;
      const fireEl=circuitBadge.querySelector('.streak-badge-fire');
      if(fireEl) fireEl.textContent=icon;
      circuitBadge.style.background=bg;
      circuitBadge.style.borderColor=border;
      if(circuitStreakCount) circuitStreakCount.style.color=countColor;
      if(tierCls) card.classList.add(tierCls);
    } else {
      circuitBadge.style.display='none';
    }
  }
  card.style.opacity='1';
  const resetEl = document.getElementById('circuit-next-reset');
  if (resetEl){
    if (done){
      resetEl.style.display='block';
      updateCircuitResetCountdown();
      if (!window._circuitCountdownTimer) window._circuitCountdownTimer = setInterval(updateCircuitResetCountdown, 60000);
    } else {
      resetEl.style.display='none';
      if (window._circuitCountdownTimer){ clearInterval(window._circuitCountdownTimer); window._circuitCountdownTimer=null; }
    }
  }
}
function updateCircuitResetCountdown(){
  const el = document.getElementById('circuit-next-reset');
  if (!el) return;
  const now = new Date();
  const nextUTCMidnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+1));
  const msLeft = nextUTCMidnight - now;
  const h = Math.floor(msLeft/3600000);
  const m = Math.floor((msLeft%3600000)/60000);
  const msg = h>0 ? t('daily_resets_in_hm').replace('{h}',h).replace('{m}',m) : t('daily_resets_in_m').replace('{m}',m);
  if (msg) el.textContent = msg;
}
document.addEventListener('DOMContentLoaded', updateCircuitCard);
document.addEventListener('astro:page-load', updateCircuitCard);
document.addEventListener('astro:after-swap', updateCircuitCard);

// ── Share ─────────────────────────────────────────────────────────────────────
function getCircuitShareText(){
  const time = document.getElementById('cr-result-time')?.textContent || '';
  const url = 'https://numfly.pro/circuit';
  const msg = t('circuit_share_msg').replace('{time}', time);
  return { text: msg, url };
}
function shareCircuitWhatsApp(){
  const {text,url} = getCircuitShareText();
  window.open(`https://wa.me/?text=${encodeURIComponent(text+' '+url)}`,'_blank');
}
function shareCircuitX(){
  const {text,url} = getCircuitShareText();
  window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text+' '+url)}`,'_blank');
}
function shareCircuitLinkedIn(){
  const {text,url} = getCircuitShareText();
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text+'\n'+url)}&title=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer,width=600,height=600');
}
function shareCircuitFacebook(){
  const {text,url} = getCircuitShareText();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank','noopener,noreferrer,width=600,height=600');
}
function copyCircuitLink(){
  const {text,url} = getCircuitShareText();
  navigator.clipboard.writeText(text+' '+url).then(()=>{
    const btn = document.getElementById('cr-copy-btn');
    if (btn){ const orig=btn.textContent; btn.textContent='✓ Copied!'; setTimeout(()=>btn.textContent=orig, 2000); }
  });
}

// ── Leaderboard ───────────────────────────────────────────────────────────────
let _crCurrentTab = 'global';
async function setCircuitTab(tab, btn){
  _crCurrentTab = tab;
  document.querySelectorAll('#screen-circuit-result .dc-tab').forEach(b=>b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const el = document.getElementById('cr-leaderboard');
  if (el) el.innerHTML = '<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  await loadCircuitLeaderboard(tab);
}
async function loadCircuitLeaderboard(tab){
  const el = document.getElementById('cr-leaderboard');
  if (!el) return;
  const dateStr = getCircuitDateStr();
  if (typeof sb === 'undefined' || !sb || typeof currentUser === 'undefined' || !currentUser){
    el.innerHTML = '';
    return;
  }
  el.innerHTML = '<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  try {
    const uid = currentUser.id;
    let rows = [];
    if (tab === 'friends'){
      const {data:fs} = await sb.from('friendships').select('requester_id,addressee_id').eq('status','accepted').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`);
      const friendIds = (fs||[]).map(f=>f.requester_id===uid?f.addressee_id:f.requester_id);
      friendIds.push(uid);
      const {data} = await sb.from('circuit_entries').select('user_id,time_ms').eq('challenge_date',dateStr).in('user_id',friendIds).order('time_ms',{ascending:true}).limit(20);
      rows = data||[];
    } else {
      const {data} = await sb.from('circuit_entries').select('user_id,time_ms').eq('challenge_date',dateStr).order('time_ms',{ascending:true}).limit(10);
      rows = data||[];
    }
    let selfRank = null, selfRow = null;
    if (tab==='global' && !rows.find(r=>r.user_id===uid)){
      const {data:myRow} = await sb.from('circuit_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if (myRow){
        const {count} = await sb.from('circuit_entries').select('user_id',{count:'exact',head:true}).eq('challenge_date',dateStr).lt('time_ms',myRow.time_ms);
        selfRank = (count||0)+1; selfRow = myRow;
      }
    }
    if (tab==='friends' && rows.length && !rows.find(r=>r.user_id===uid)){
      const {data:myRow} = await sb.from('circuit_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if (myRow){ rows.push(myRow); rows.sort((a,b)=>a.time_ms-b.time_ms); }
    }
    if (!rows.length && !selfRow){ el.innerHTML='<div style="font-family:\'DM Mono\',monospace;font-size:12px;color:var(--muted);padding:12px 0;text-align:center">No entries yet today.</div>'; return; }
    const ids = [...new Set([...rows.map(r=>r.user_id),...(selfRow ? [selfRow.user_id] : [])])];
    const {data:profiles} = await sb.from('profiles').select('id,username,avatar_color').in('id',ids);
    const {data:progRows} = await sb.from('user_progress').select('user_id,xp_level').in('user_id',ids);
    const progMap = new Map((progRows||[]).map(p=>[p.user_id,p.xp_level||1]));
    const pm = new Map((profiles||[]).map(p=>[p.id,p]));
    function buildRow(r,rank,isMe){
      const prof = pm.get(r.user_id)||{username:'Unknown'};
      const rankCls = rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      const lvl = progMap.get(r.user_id)||1;
      const title = typeof getTitleForLevel==='function'?getTitleForLevel(lvl):{badge:'',css:'',key:''};
      return `<div class="dc-lb-row${isMe?' me':''}">
        <div class="dc-lb-rank ${rankCls}">${rank}</div>
        <div class="lb-avatar" style="background:${typeof avatarColor==='function'?avatarColor(prof):'#333'}">${typeof initials==='function'?initials(prof.username):'?'}</div>
        <div class="dc-lb-name"><div>${typeof esc==='function'?esc(prof.username):prof.username}${isMe?' ('+t('lb_you')+')':''}</div><div class="lb-title-badge ${title.css}">${title.badge} ${t('title_'+title.key)}</div></div>
        <div class="dc-lb-time">${fmtCircuitTime(r.time_ms)}</div>
      </div>`;
    }
    let rank=1, html=rows.map((r,i)=>{ if(i>0&&r.time_ms>rows[i-1].time_ms)rank=i+1; return buildRow(r,rank,r.user_id===uid); }).join('');
    if (selfRow&&selfRank){ html+=`<div style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-align:center;padding:4px 0;letter-spacing:1px">· · ·</div>`+buildRow(selfRow,selfRank,true); }
    el.innerHTML = html;
  } catch(e){
    el.innerHTML='<div style="font-family:\'DM Mono\',monospace;font-size:12px;color:var(--error)">Error loading ranking.</div>';
  }
}

// ── Finish ────────────────────────────────────────────────────────────────────
async function claimPendingCircuitEntry(){
  if(!currentUser||!sb)return;
  try{
    const raw=localStorage.getItem('numfly_pending_circuit');
    if(!raw)return;
    const{dateStr,time_ms}=JSON.parse(raw);
    if(!dateStr||!time_ms)return;
    if(dateStr!==getCircuitDateStr())return;
    const{error}=await withTimeout(sb.from('circuit_entries').upsert({user_id:currentUser.id,challenge_date:dateStr,time_ms},{onConflict:'user_id,challenge_date'}));
    if(!error){
      localStorage.removeItem('numfly_pending_circuit');
      localStorage.setItem(circuitLocalKey(dateStr),JSON.stringify({time_ms}));
      if(typeof updateCircuitCard==='function') updateCircuitCard();
      const resultScreen=document.getElementById('screen-circuit-result');
      if(resultScreen&&resultScreen.classList.contains('active')){
        loadCircuitLeaderboard(_crCurrentTab||'friends');
      }
      if(typeof scheduleSync === 'function') scheduleSync();
    }
  }catch(e){}
}

async function finishCircuit(){
  circuitState.done = true;
  clearInterval(circuitState.timer);
  const ms = Date.now()-circuitState.startTime;
  circuitState.elapsedMs = ms;
  await saveCircuitResult(circuitState.puzzle.dateStr, ms);
  
  if (typeof currentUser === 'undefined' || !currentUser) {
    try { localStorage.setItem('numfly_pending_circuit', JSON.stringify({dateStr: circuitState.puzzle.dateStr, time_ms: ms})); } catch(e){}
  }

  showCircuitResult(ms, false);
  if (typeof recordAnswer === 'function'){
    // Hook into existing XP/stats pipeline if available — adjust event name
    // to whatever main.js / state.js expects for a completed mode session.
  }
}
function showCircuitResult(ms, alreadyDone){
  const timeEl = document.getElementById('cr-result-time');
  if (timeEl) timeEl.textContent = fmtCircuitTime(ms);
  // Guest prompt
  const guestPrompt = document.getElementById('cr-guest-prompt');
  if (guestPrompt){
    const isGuest = typeof currentUser === 'undefined' || !currentUser;
    guestPrompt.style.display = isGuest ? 'flex' : 'none';
  }
  if (typeof showScreen === 'function') showScreen('screen-circuit-result');
  setCircuitTab(_crCurrentTab, document.querySelectorAll('#screen-circuit-result .dc-tab')[_crCurrentTab==='friends'?0:1]);
}
function abandonCircuit(){
  clearInterval(circuitState.timer);
  if (circuitState.puzzle && !circuitState.done){
    saveCircuitProgress(circuitState.puzzle.dateStr);
  }
  if (typeof goToMainMenu === 'function') goToMainMenu();
  else window.location.href = (typeof window.getLocalizedUrl==='function') ? window.getLocalizedUrl('/') : '/';
}
