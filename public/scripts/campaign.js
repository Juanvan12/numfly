// ══════════════════════════════════════════════════════════════════════════════
// CAMPAIGN MODE
// ══════════════════════════════════════════════════════════════════════════════

const CAMPAIGN_LEVELS = [
  // ── World 1: Basics (1-10) — survival only, no question timer ────────────
  {level:1,  mode:'survival',    ops:['add'],                        diff:'easy',   target:8,  lives:3,      seed:'cmp_1'},
  {level:2,  mode:'survival',    ops:['add'],                        diff:'easy',   target:10, lives:3,      seed:'cmp_2'},
  {level:3,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_3'},
  {level:4,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_4'},
  {level:5,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:12, lives:3,      seed:'cmp_5'},
  {level:6,  mode:'survival',    ops:['add','sub','mul'],            diff:'easy',   target:10, lives:3,      seed:'cmp_6'},
  {level:7,  mode:'survival',    ops:['add','sub','mul'],            diff:'easy',   target:12, lives:3,      seed:'cmp_7'},
  {level:8,  mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:12, lives:3,      seed:'cmp_8'},
  {level:9,  mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:12, lives:3,      seed:'cmp_9'},
  {level:10, mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:14, lives:2,      seed:'cmp_10', boss:true},
  // ── World 2: Multiplication (11-20) — survival only, no question timer ───
  {level:11, mode:'survival',    ops:['mul'],                        diff:'easy',   target:10, lives:3,      seed:'cmp_11'},
  {level:12, mode:'survival',    ops:['mul'],                        diff:'easy',   target:12, lives:3,      seed:'cmp_12'},
  {level:13, mode:'survival',    ops:['mul','div'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_13'},
  {level:14, mode:'survival',    ops:['mul','div'],                  diff:'easy',   target:12, lives:3,      seed:'cmp_14'},
  {level:15, mode:'survival',    ops:['mul','div'],                  diff:'medium', target:10, lives:3,      seed:'cmp_15'},
  {level:16, mode:'survival',    ops:['add','sub','mul'],            diff:'medium', target:12, lives:3,      seed:'cmp_16'},
  {level:17, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:12, lives:3,      seed:'cmp_17'},
  {level:18, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:14, lives:3,      seed:'cmp_18'},
  {level:19, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:14, lives:3,      seed:'cmp_19'},
  {level:20, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:16, lives:2,      seed:'cmp_20', boss:true},
  // ── World 3: Speed intro (21-30) — time attack only ──────────────────────
  {level:21, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:10, timeLimit:40, seed:'cmp_21'},
  {level:22, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:12, timeLimit:45, seed:'cmp_22'},
  {level:23, mode:'time_attack', ops:['mul'],                        diff:'medium', target:10, timeLimit:40, seed:'cmp_23'},
  {level:24, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:12, timeLimit:45, seed:'cmp_24'},
  {level:25, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:14, timeLimit:50, seed:'cmp_25'},
  {level:26, mode:'time_attack', ops:['mul','div'],                  diff:'medium', target:12, timeLimit:45, seed:'cmp_26'},
  {level:27, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:12, timeLimit:45, seed:'cmp_27'},
  {level:28, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:50, seed:'cmp_28'},
  {level:29, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:50, seed:'cmp_29'},
  {level:30, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:16, timeLimit:48, seed:'cmp_30', boss:true},
  // ── World 4: Percentages (31-40) — mixed, question timer on survival ─────
  {level:31, mode:'survival',    ops:['pct'],                        diff:'easy',   target:8,  lives:2, questionTimer:true, seed:'cmp_31'},
  {level:32, mode:'time_attack', ops:['pct'],                        diff:'easy',   target:8,  timeLimit:35, seed:'cmp_32'},
  {level:33, mode:'survival',    ops:['pct'],                        diff:'medium', target:10, lives:2, questionTimer:true, seed:'cmp_33'},
  {level:34, mode:'time_attack', ops:['add','sub','pct'],            diff:'easy',   target:10, timeLimit:38, seed:'cmp_34'},
  {level:35, mode:'survival',    ops:['add','sub','pct'],            diff:'medium', target:10, lives:2, questionTimer:true, seed:'cmp_35'},
  {level:36, mode:'time_attack', ops:['mul','pct'],                  diff:'medium', target:10, timeLimit:40, seed:'cmp_36'},
  {level:37, mode:'survival',    ops:['mul','div','pct'],            diff:'medium', target:12, lives:2, questionTimer:true, seed:'cmp_37'},
  {level:38, mode:'time_attack', ops:['add','sub','mul','pct'],      diff:'medium', target:12, timeLimit:42, seed:'cmp_38'},
  {level:39, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'medium', target:12, lives:2, questionTimer:true, seed:'cmp_39'},
  {level:40, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'medium', target:14, lives:2, questionTimer:true, seed:'cmp_40', boss:true},
  // ── World 5: Medium crunch (41-50) — mixed, time attack tight limits ─────
  {level:41, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:12, timeLimit:38, seed:'cmp_41'},
  {level:42, mode:'survival',    ops:['mul'],                        diff:'medium', target:10, lives:3,      seed:'cmp_42'},
  {level:43, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:12, timeLimit:38, seed:'cmp_43'},
  {level:44, mode:'survival',    ops:['mul','div'],                  diff:'medium', target:12, lives:3,      seed:'cmp_44'},
  {level:45, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:42, seed:'cmp_45'},
  {level:46, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:12, lives:2,      seed:'cmp_46'},
  {level:47, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:10, timeLimit:38, seed:'cmp_47'},
  {level:48, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:10, lives:2,      seed:'cmp_48'},
  {level:49, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:45, seed:'cmp_49'},
  {level:50, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:42, seed:'cmp_50', boss:true},
  // ── World 6: Hard numbers (51-60) — mixed, question timer on survival ────
  {level:51, mode:'survival',    ops:['add','sub'],                  diff:'hard',   target:10, lives:2, questionTimer:true, seed:'cmp_51'},
  {level:52, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:10, timeLimit:38, seed:'cmp_52'},
  {level:53, mode:'survival',    ops:['mul'],                        diff:'hard',   target:10, lives:2, questionTimer:true, seed:'cmp_53'},
  {level:54, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:40, seed:'cmp_54'},
  {level:55, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:2, questionTimer:true, seed:'cmp_55'},
  {level:56, mode:'time_attack', ops:['mul','div'],                  diff:'hard',   target:12, timeLimit:40, seed:'cmp_56'},
  {level:57, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:2, questionTimer:true, seed:'cmp_57'},
  {level:58, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:42, seed:'cmp_58'},
  {level:59, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:14, lives:2, questionTimer:true, seed:'cmp_59'},
  {level:60, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:16, lives:2, questionTimer:true, seed:'cmp_60', boss:true},
  // ── World 7: Hard mixed (61-70) — mixed, time attack shorter limits ───────
  {level:61, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:10, timeLimit:35, seed:'cmp_61'},
  {level:62, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:10, lives:2,      seed:'cmp_62'},
  {level:63, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:38, seed:'cmp_63'},
  {level:64, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:2,      seed:'cmp_64'},
  {level:65, mode:'time_attack', ops:['mul','div'],                  diff:'hard',   target:12, timeLimit:38, seed:'cmp_65'},
  {level:66, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:2,      seed:'cmp_66'},
  {level:67, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:42, seed:'cmp_67'},
  {level:68, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:12, lives:2,      seed:'cmp_68'},
  {level:69, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:42, seed:'cmp_69'},
  {level:70, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:40, seed:'cmp_70', boss:true},
  // ── World 8: Endurance (71-80) — mixed, 1 life, question timer on survival
  {level:71, mode:'survival',    ops:['add','sub'],                  diff:'hard',   target:10, lives:1, questionTimer:true, seed:'cmp_71'},
  {level:72, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:12, timeLimit:38, seed:'cmp_72'},
  {level:73, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:10, lives:1, questionTimer:true, seed:'cmp_73'},
  {level:74, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:40, seed:'cmp_74'},
  {level:75, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_75'},
  {level:76, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:40, seed:'cmp_76'},
  {level:77, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_77'},
  {level:78, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:42, seed:'cmp_78'},
  {level:79, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_79'},
  {level:80, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, lives:1, questionTimer:true, seed:'cmp_80', boss:true},
  // ── World 9: Elite (81-90) — mixed, very tight ───────────────────────────
  {level:81, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:12, timeLimit:32, seed:'cmp_81'},
  {level:82, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_82'},
  {level:83, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:14, timeLimit:36, seed:'cmp_83'},
  {level:84, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_84'},
  {level:85, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:36, seed:'cmp_85'},
  {level:86, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_86'},
  {level:87, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:40, seed:'cmp_87'},
  {level:88, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_88'},
  {level:89, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, timeLimit:42, seed:'cmp_89'},
  {level:90, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:20, timeLimit:40, seed:'cmp_90', boss:true},
  // ── World 10: Master (91-100) — alternating, hardest configs ────────────
  {level:91, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:35, seed:'cmp_91'},
  {level:92, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_92'},
  {level:93, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:35, seed:'cmp_93'},
  {level:94, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_94'},
  {level:95, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:38, seed:'cmp_95'},
  {level:96, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, lives:1, questionTimer:true, seed:'cmp_96'},
  {level:97, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, timeLimit:40, seed:'cmp_97'},
  {level:98, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, lives:1, questionTimer:true, seed:'cmp_98'},
  {level:99, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:20, timeLimit:45, seed:'cmp_99'},
  {level:100,mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:22, lives:1, questionTimer:true, seed:'cmp_100', boss:true},
];

// World definitions — used for map headers
const CAMPAIGN_WORLDS = [
  {world:1,  firstLevel:1,  lastLevel:10,  labelKey:'campaign_world_1'},
  {world:2,  firstLevel:11, lastLevel:20,  labelKey:'campaign_world_2'},
  {world:3,  firstLevel:21, lastLevel:30,  labelKey:'campaign_world_3'},
  {world:4,  firstLevel:31, lastLevel:40,  labelKey:'campaign_world_4'},
  {world:5,  firstLevel:41, lastLevel:50,  labelKey:'campaign_world_5'},
  {world:6,  firstLevel:51, lastLevel:60,  labelKey:'campaign_world_6'},
  {world:7,  firstLevel:61, lastLevel:70,  labelKey:'campaign_world_7'},
  {world:8,  firstLevel:71, lastLevel:80,  labelKey:'campaign_world_8'},
  {world:9,  firstLevel:81, lastLevel:90,  labelKey:'campaign_world_9'},
  {world:10, firstLevel:91, lastLevel:100, labelKey:'campaign_world_10'},
];

// Campaign state
let campaignState = {
  currentLevel: null,  // level config object
  questions: [],
  current: 0,
  correct: 0,
  lives: 0,
  timeLeft: 0,
  timer: null,
  playTimeTimer: null,
  done: false,
  failed: false,
};

const CAMPAIGN_VERSION = 3; // increment this to wipe all local campaign progress

function getCampaignProgress() {
  try {
    const raw = localStorage.getItem('numfly_campaign');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.v !== CAMPAIGN_VERSION) throw new Error('stale');
      return parsed;
    }
  } catch(e) {}
  return { highestUnlocked: 1, completed: [], v: CAMPAIGN_VERSION };
}

function saveCampaignProgress(progress) {
  try { localStorage.setItem('numfly_campaign', JSON.stringify({...progress, v: CAMPAIGN_VERSION})); } catch(e) {}
}

async function pushCampaignProgress(progress) {
  if (!currentUser || !sb) return;
  try {
    await sb.from('user_progress').upsert({
      user_id: currentUser.id,
      campaign_highest_unlocked: progress.highestUnlocked,
      campaign_completed: progress.completed,
    }, { onConflict: 'user_id' });
  } catch(e) { console.warn('[Numfly] pushCampaignProgress failed:', e); }
}

function getCampaignSeed(seedStr) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) h = (Math.imul(31, h) + seedStr.charCodeAt(i)) | 0;
  return Math.abs(h) || 99999;
}

function genCampaignQuestions(levelCfg) {
  const seed = getCampaignSeed(levelCfg.seed);
  const rng = seededRand(seed);
  const ri = (lo, hi) => Math.floor(rng() * (hi - lo + 1)) + lo;
  const r = RANGES[levelCfg.diff] || RANGES.easy;
  const ops = levelCfg.ops;
  const needed = levelCfg.mode === 'time_attack'
    ? levelCfg.target + 10  // generate extra for time_attack
    : levelCfg.target + 5;
  const questions = [];
  const used = new Set();
  let attempts = 0;
  while (questions.length < needed && attempts < needed * 10) {
    attempts++;
    const op = ops[Math.floor(rng() * ops.length)];
    let p = null;
    if (op === 'add') { const [lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);const ans=a+b;if(ans===0)continue;p={q:`${a} + ${b}`,ans,op}; }
    else if (op === 'sub') { const [lo,hi]=r.sub;let a=ri(lo,hi),b=ri(lo,hi);if(a<b)[a,b]=[b,a];if(a===b)continue;p={q:`${a} − ${b}`,ans:a-b,op}; }
    else if (op === 'mul') { const [lo,hi]=r.mul,a=ri(lo,hi);const bMin=levelCfg.diff==='easy'?2:3;const bMax=levelCfg.diff==='easy'?9:12;const b=ri(bMin,bMax);if(a===0||b===0)continue;p={q:`${a} × ${b}`,ans:a*b,op}; }
    else if (op === 'div') { const b=ri(r.divB[0],r.divB[1]),q2=ri(r.divQ[0],r.divQ[1]);if(b===0||q2===0)continue;p={q:`${b*q2} ÷ ${b}`,ans:q2,op}; }
    else if (op === 'pct') {
      const bases = levelCfg.diff==='easy'?[10,20,25,50,100]:[20,25,40,50,75,100,200];
      const pcts = [5,10,20,25,50];
      const pv = pcts[Math.floor(rng()*pcts.length)];
      const base = bases[Math.floor(rng()*bases.length)];
      const ans = pv*base/100;
      if (!Number.isInteger(ans)||ans===0) continue;
      p = {q:`${pv}% of ${base}`,ans,op:'pct'};
    }
    let cKey = (p.op==='add'||p.op==='mul') ? p.q.match(/\d+/g).sort((a,b)=>a-b).join('_')+p.op : p.q;
    if (!p || used.has(cKey)) continue;
    used.add(cKey);
    used.add(p.q);
    questions.push(p);
  }
// Shuffle using a per-attempt seed so returning players face a different order
  const shuffleSeed = Date.now() ^ (Math.random() * 0xFFFFFF | 0);
  const srng = seededRand(shuffleSeed);
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(srng() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

function openCampaignMap() {
  showScreen('screen-campaign');
  renderCampaignMap();
}

function renderCampaignMap() {
  const progress = getCampaignProgress();
  const el = document.getElementById('campaign-level-grid');
  if (!el) return;
  let html = '';
  CAMPAIGN_WORLDS.forEach(world => {
    // World header — always visible, spans full grid width
    html += `<div class="campaign-world-header">
      <span class="campaign-world-label">${t(world.labelKey)}</span>
    </div>`;
    // Level buttons for this world
    html += '<div class="campaign-world-row">';
    CAMPAIGN_LEVELS.filter(lvl => lvl.level >= world.firstLevel && lvl.level <= world.lastLevel).forEach(lvl => {
      const unlocked = lvl.level <= progress.highestUnlocked;
      const completed = progress.completed.includes(lvl.level);
      const isBoss = !!lvl.boss;
      let cls = 'campaign-level-btn';
      if (isBoss) cls += ' boss';
      else cls += ' ' + lvl.mode.replace('_', '-');
      if (completed) cls += ' completed';
      else if (!unlocked) cls += ' locked';
      else cls += ' unlocked';
      const icon = completed ? '✓' : !unlocked ? '🔒' : lvl.level;
      html += `<button class="${cls}" onclick="${unlocked ? `startCampaignLevel(${lvl.level})` : ''}" ${!unlocked?'disabled':''}>
        ${isBoss && !completed && unlocked ? '<span class="campaign-boss-ring"></span>' : ''}
        <span class="campaign-level-num">${icon}</span>
      </button>`;
    });
    html += '</div>';
  });
  el.innerHTML = html;
}
function showCampaignIntro(levelCfg, onDone) {
  const isBoss = !!levelCfg.boss;
  const modeDesc = levelCfg.mode === 'time_attack'
    ? t('campaign_mode_time_attack').replace('{target}', levelCfg.target).replace('{time}', levelCfg.timeLimit)
    : t('campaign_mode_survival').replace('{target}', levelCfg.target).replace('{lives}', levelCfg.lives);

  const overlay = document.createElement('div');
  overlay.id = 'campaign-intro-overlay';
  overlay.className = isBoss ? 'campaign-intro-overlay boss' : 'campaign-intro-overlay';
  overlay.innerHTML = `
    <div class="campaign-intro-box">
      <div class="campaign-intro-level">${t('campaign_level')} ${levelCfg.level}</div>
      <div class="campaign-intro-num">${levelCfg.level}</div>
      <div class="campaign-intro-desc">${modeDesc}</div>
    </div>`;
  document.body.appendChild(overlay);

  // Animate out after 2s then call onDone
  setTimeout(() => {
    overlay.classList.add('out');
    setTimeout(() => { overlay.remove(); onDone(); }, 400);
  }, 2600);
}

function startCampaignLevel(levelNum) {
  const levelCfg = CAMPAIGN_LEVELS.find(l => l.level === levelNum);
  if (!levelCfg) return;
  // Setup state
  campaignState = {
    currentLevel: levelCfg,
    questions: genCampaignQuestions(levelCfg),
    current: 0,
    correct: 0,
    lives: levelCfg.mode === 'survival' ? levelCfg.lives : 0,
    timeLeft: levelCfg.mode === 'time_attack' ? levelCfg.timeLimit : 0,
    questionTimeLeft: 0,
    timer: null,
    questionTimer: null,
    playTimeTimer: null,
    done: false,
    failed: false,
  };
  // Update HUD labels
  const lvl = levelCfg;
  document.getElementById('cmp-level-label').textContent =
    (lvl.boss ? t('campaign_boss_label') + ' — ' : '') + t('campaign_level') + ' ' + lvl.level;
  const modeLabel = document.getElementById('cmp-mode-label');
  if (modeLabel) {
    modeLabel.textContent = t('campaign_' + lvl.mode);
    modeLabel.style.color = lvl.boss ? 'var(--orange)' : lvl.mode === 'time_attack' ? 'var(--accent)' : 'var(--info)';
  }
  // Color the q-card border by mode
  const qCard = document.querySelector('#screen-campaign-game .q-card');
  if (qCard) {
    qCard.style.borderColor = lvl.boss ? 'var(--orange)' : lvl.mode === 'time_attack' ? 'rgba(232,255,71,.3)' : 'rgba(71,179,255,.3)';
  }
  document.getElementById('cmp-target-display').textContent = lvl.target;
  document.getElementById('cmp-correct-display').textContent = '0';
  // Show/hide mode-specific HUD
  const timeHud = document.getElementById('cmp-time-hud');
  const livesHud = document.getElementById('cmp-lives-hud');
  if (lvl.mode === 'time_attack') {
    timeHud.style.display = 'flex';
    livesHud.style.display = 'none';
    document.getElementById('cmp-time-display').textContent = lvl.timeLimit;
  } else {
    timeHud.style.display = 'none';
    livesHud.style.display = 'flex';
    renderCampaignLives();
  }
  showScreen('screen-campaign-game');
  // Clear stale question text immediately to prevent flash
  const _cmpQ = document.getElementById('cmp-question');
  if (_cmpQ) _cmpQ.textContent = '';
  const _cmpFb = document.getElementById('cmp-feedback');
  if (_cmpFb) { _cmpFb.textContent = ''; _cmpFb.className = 'feedback'; }
  const _cmpAns = document.getElementById('cmp-answer');
  if (_cmpAns) _cmpAns.value = '';
  // Hide question area until intro finishes
  const _cmpGameContent = document.getElementById('cmp-game-content');
  if (_cmpGameContent) _cmpGameContent.style.visibility = 'hidden';
  showCampaignIntro(levelCfg, () => {
    if (_cmpGameContent) _cmpGameContent.style.visibility = '';
    loadCampaignQuestion();
    if (lvl.mode === 'time_attack') {
      campaignState.timer = setInterval(() => {
        campaignState.timeLeft--;
        const el = document.getElementById('cmp-time-display');
        if (el) el.textContent = campaignState.timeLeft;
        if (campaignState.timeLeft <= 0) {
          clearInterval(campaignState.timer);
          campaignState.timer = null;
          if (!campaignState.done) finishCampaignLevel(false, 'time');
        }
      }, 1000);
    }
    campaignState.playTimeTimer = setInterval(() => { stats.totalPlayTime++; }, 1000);
  });
}

function renderCampaignLives() {
  const el = document.getElementById('cmp-lives-display');
  if (!el) return;
  const total = campaignState.currentLevel.lives;
  const remaining = campaignState.lives;
  el.innerHTML = Array.from({length: total}, (_, i) =>
    `<span class="cmp-heart${i < remaining ? '' : ' lost'}">♥</span>`
  ).join('');
}

function loadCampaignQuestion() {
  const q = campaignState.questions[campaignState.current];
  if (!q) { finishCampaignLevel(false, 'time'); return; }
  document.getElementById('cmp-question').textContent = q.q;
  document.getElementById('cmp-op-type').textContent = t('op_type_' + q.op) || q.op;
  document.getElementById('cmp-answer').value = '';
  document.getElementById('cmp-feedback').textContent = '';
  document.getElementById('cmp-feedback').className = 'feedback';
  if (document.getElementById('cmp-answer')) document.getElementById('cmp-answer').focus();
  // Per-question countdown only for levels that explicitly enable it
  if (campaignState.currentLevel.mode === 'survival' && campaignState.currentLevel.questionTimer) {
    if (campaignState.questionTimer) { cancelAnimationFrame(campaignState.questionTimer); campaignState.questionTimer = null; }
    const QUESTION_TIME = 10000; // ms
    const startTime = performance.now();
    updateCampaignQuestionTimerBar(1, 1);
    function questionTimerTick(now) {
      if (campaignState.done) return;
      const elapsed = now - startTime;
      const remaining = Math.max(0, QUESTION_TIME - elapsed);
      updateCampaignQuestionTimerBar(remaining, QUESTION_TIME);
      if (remaining <= 0) {
        campaignState.questionTimer = null;
        const fb = document.getElementById('cmp-feedback');
        fb.textContent = t('campaign_fail_question_time'); fb.className = 'feedback bad';
        recordAnswer(campaignState.questions[campaignState.current]?.op || 'add', false, 'campaign', campaignState.currentLevel.diff);
        campaignState.lives--;
        renderCampaignLives();
        if (campaignState.lives <= 0) {
          setTimeout(() => finishCampaignLevel(false, 'lives'), 600);
        } else {
          setTimeout(loadCampaignQuestion, 700);
        }
        return;
      }
      campaignState.questionTimer = requestAnimationFrame(questionTimerTick);
    }
    campaignState.questionTimer = requestAnimationFrame(questionTimerTick);
  }
}

function updateCampaignQuestionTimerBar(current, total) {
  const bar = document.getElementById('cmp-question-timer-bar');
  if (!bar) return;
  const pct = Math.max(0, current / total) * 100;
  bar.style.width = pct + '%';
  bar.style.background = pct > 50 ? 'var(--info)' : pct > 25 ? 'var(--orange)' : 'var(--error)';
}

function checkCampaignAnswer() {
  if (campaignState.done) return;
  const val = document.getElementById('cmp-answer').value.trim();
  if (val === '') return;
  // Stop per-question timer immediately on any answer
  if (campaignState.questionTimer) { cancelAnimationFrame(campaignState.questionTimer); campaignState.questionTimer = null; }
  const q = campaignState.questions[campaignState.current];
  const correct = checkAns(val, q.ans);
  const fb = document.getElementById('cmp-feedback');
  if (correct) {
    sfxCorrect();
    fb.textContent = t('speed_correct'); fb.className = 'feedback ok';
    campaignState.correct++;
    campaignState.current++;
    document.getElementById('cmp-correct-display').textContent = campaignState.correct;
    recordAnswer(q.op, true, 'campaign', campaignState.currentLevel.diff);
    if (campaignState.correct >= campaignState.currentLevel.target) {
      finishCampaignLevel(true);
    } else {
      setTimeout(loadCampaignQuestion, 220);
    }
  } else {
    sfxWrong();
    fb.textContent = t('speed_wrong'); fb.className = 'feedback bad';
    recordAnswer(q.op, false, 'campaign', campaignState.currentLevel.diff);
    if (campaignState.currentLevel.mode === 'survival') {
      campaignState.lives--;
      renderCampaignLives();
      sfxLifeLost();
      if (campaignState.lives <= 0) {
        finishCampaignLevel(false, 'lives');
        return;
      }
    }
    setTimeout(() => {
      loadCampaignQuestion();
    }, 220);
  }
}

function finishCampaignLevel(success, failReason) {
  if (campaignState.done) return;
  campaignState.done = true;
  if (campaignState.timer) { clearInterval(campaignState.timer); campaignState.timer = null; }
  if (campaignState.questionTimer) { cancelAnimationFrame(campaignState.questionTimer); campaignState.questionTimer = null; }
  if (campaignState.playTimeTimer) { clearInterval(campaignState.playTimeTimer); campaignState.playTimeTimer = null; }
  setTimeout(() => { checkAchievements(); flushPendingLevelUps(); }, 600);
  const lvl = campaignState.currentLevel;
  // Award XP
  // XP scales with world (every 10 levels = 1 world), bosses give 2x, failure gives a small consolation
  const world = Math.ceil(lvl.level / 10);
  const baseXP = 20 + (world - 1) * 15; // W1=20, W2=35, W3=50 ... W10=155
  const xpReward = success ? (lvl.boss ? baseXP * 2 : baseXP) : Math.max(5, Math.round(baseXP * 0.15));
  gainXP(xpReward);
  // Update progress
  if (success) {
    // Track campaign stats for achievements
    stats.campaignCompleted = (stats.campaignCompleted || 0) + 1;
    if (lvl.boss) stats.campaignBossesBeaten = (stats.campaignBossesBeaten || 0) + 1;
    // Perfect = no lives lost (survival) or answered all within time with no wrong answers
    const isPerfect = lvl.mode === 'survival'
      ? campaignState.lives === lvl.lives
      : campaignState.correct === lvl.target && (campaignState.correct === campaignState.current);
    if (isPerfect) stats.campaignPerfectLevels = (stats.campaignPerfectLevels || 0) + 1;
    const progress = getCampaignProgress();
    if (!progress.completed.includes(lvl.level)) progress.completed.push(lvl.level);
    const next = lvl.level + 1;
    if (next <= CAMPAIGN_LEVELS.length && next > progress.highestUnlocked) {
      progress.highestUnlocked = next;
    }
     saveCampaignProgress(progress);
    saveGuestState();
    pushCampaignProgress(progress);
    if (currentUser) scheduleSync();
  }
  // Pre-render map so it's fresh when user navigates to it
  if(success){
    if(campaignState.currentLevel.boss) sfxBossComplete();
    else sfxLevelComplete();
    renderCampaignMap();
  }
  // Show result screen
  const titleEl = document.getElementById('cmp-result-title');
  const subEl = document.getElementById('cmp-result-sub');
  const nextBtn = document.getElementById('cmp-next-btn');
  titleEl.textContent = success ? t('campaign_complete_title') : t('campaign_fail_title');
  titleEl.style.color = success ? 'var(--accent)' : 'var(--error)';
  if (success) {
    subEl.textContent = t('campaign_complete_sub');
    nextBtn.style.display = lvl.level < CAMPAIGN_LEVELS.length ? 'block' : 'none';
  } else {
    subEl.textContent = failReason === 'lives' ? t('campaign_fail_lives') : t('campaign_fail_time');
    nextBtn.style.display = 'none';
  }
  document.getElementById('cmp-result-level').textContent = t('campaign_level') + ' ' + lvl.level;
  document.getElementById('cmp-result-correct').textContent = campaignState.correct + ' / ' + lvl.target;
  showScreen('screen-campaign-result');
}

function campaignNextLevel() {
  const next = campaignState.currentLevel.level + 1;
  if (next <= CAMPAIGN_LEVELS.length) startCampaignLevel(next);
  else openCampaignMap();
}

function campaignRetry() {
  startCampaignLevel(campaignState.currentLevel.level);
}

function closeLevelUp(){document.getElementById('modal-levelup').classList.remove('open');}
function openTitlesModal(){
  const lvl = xp.level;
  const currentTitle = getTitleForLevel(lvl);

  const colors = {
    'title-novice':'var(--muted)', 'title-learner':'var(--text)',
    'title-scholar':'var(--info)', 'title-theorist':'var(--success)',
    'title-master':'var(--accent)', 'title-polymath':'var(--orange)',
    'title-pythagoras':'var(--purple)', 'title-euler':'#ff6b9d',
    'title-gauss':'var(--accent)'
  };

  document.getElementById('titles-modal-sub').textContent = '';

  const listEl = document.getElementById('titles-list');
  listEl.innerHTML = '';

  TITLE_THRESHOLDS.forEach(th => {
    const unlocked = lvl >= th.level;
    const isCurrent = currentTitle.key === th.key;
    const color = colors[th.css] || 'var(--accent)';
    const badgeBg = unlocked
      ? color.replace('var(--','rgba(').replace(')',',.12)')
      : 'rgba(255,255,255,.04)';

    const item = document.createElement('div');
    item.className = 'titles-item' + (unlocked ? ' titles-item--unlocked' : '') + (isCurrent ? ' titles-item--current' : '');
    item.innerHTML = `
      <div class="titles-item-badge" style="border-color:${unlocked ? color : 'var(--border)'};background:${badgeBg}">
        <span style="font-size:22px;${unlocked ? '' : 'filter:grayscale(1);opacity:.4'}">${th.badge}</span>
      </div>
      <div class="titles-item-info">
        <div class="titles-item-name ${unlocked ? th.css : ''}">${t('title_'+th.key)}</div>
        <div class="titles-item-flavor">${t('title_flavor_'+th.key)}</div>
      </div>
      <div class="titles-item-meta" style="color:${unlocked ? color : 'var(--muted2)'}">
        ${unlocked ? '<span class="titles-check">✓</span>' : ''}
        <span class="titles-level-badge">${t('titles_lv')}${th.level}</span>
      </div>`;
    listEl.appendChild(item);
  });

  document.getElementById('modal-titles').classList.add('open');
}
function closeTitlesModal(){document.getElementById('modal-titles').classList.remove('open');}
function renderXPPanel(){
  if (!document.getElementById('xp-level-num')) return;
  const lvl=xp.level;
  const title=getTitleForLevel(lvl);
  const thisLevelXp=totalXpForLevel(lvl);
  const nextLevelXp=totalXpForLevel(lvl+1);
  const progressXp=xp.total-thisLevelXp;
  const neededXp=nextLevelXp-thisLevelXp;
  const pct=neededXp>0?Math.min(100,Math.round(progressXp/neededXp*100)):100;

  document.getElementById('xp-level-num').textContent=lvl;
  const titleEl=document.getElementById('xp-title-display');
  titleEl.textContent=t('title_'+title.key);
  titleEl.className='xp-title-display '+title.css;
  const badge=document.getElementById('xp-badge');
  badge.textContent=title.badge;
  // Badge border color matches title
  const colors={'title-novice':'var(--muted)','title-learner':'var(--text)','title-scholar':'var(--info)','title-theorist':'var(--success)','title-master':'var(--accent)','title-polymath':'var(--orange)','title-pythagoras':'var(--purple)','title-euler':'#ff6b9d','title-gauss':'var(--accent)'};
  badge.style.borderColor=colors[title.css]||'var(--accent)';
  badge.style.background=colors[title.css]?colors[title.css].replace('var(--','rgba(').replace(')',',.1)'):'rgba(232,255,71,.1)';

  document.getElementById('xp-pts-display').textContent=fmtN(xp.total);
  document.getElementById('xp-bar-fill').style.width=pct+'%';
  document.getElementById('xp-bar-cur').textContent=fmtN(progressXp)+' XP';
  document.getElementById('xp-bar-next').textContent=fmtN(neededXp-progressXp)+' '+(t('xp_to_next')||'to next');
}
const diff={lightning:'easy',speed:'easy',practice:'easy'};
let practiceOps=new Set(['add','sub','mul','div','pct']);
let lightning={numbers:[],sum:0,score:0,count:5,interval:2,abandoned:false,sessionScore:0,cumulativeScore:0};
let speed={score:0,ans:0,timer:null,remaining:120,wrongStreak:0,currentOp:'add',opBag:[],waiting:false};
let tipPractice={ans:0,waiting:false,op:'add',tipIdx:0,correct:0,wrong:0,level:'medium'};
let practice={ans:0,waiting:false,currentOp:'add',timer:null,opBag:[],wrongCount:0};

// Shuffle-bag: refills when empty so every op appears before any repeats
function pickFromBag(bag,pool){
  if(bag.length===0){
    // Refill and shuffle
    const arr=[...pool];
    for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
    bag.push(...arr);
  }
  return bag.pop();
}

