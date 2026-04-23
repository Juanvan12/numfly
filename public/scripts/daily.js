// ── Seeded RNG for challenges ─────────────────────────────────────────────────
function seededRand(seed){let s=seed;return function(){s=(s*1664525+1013904223)&0xFFFFFFFF;return(s>>>0)/0x100000000;};}
function genSeededProblem(rng,level,usedSet){
  // Same 5-op pool as Speed mode — includes percentages
  const ops=['add','sub','mul','div','pct'];
  const r=RANGES[level]||RANGES.easy;
  const ri=(lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
  const rPick=(arr)=>arr[Math.floor(rng()*arr.length)];
  // Retry loop: skip zero answers
  for(let attempt=0;attempt<30;attempt++){
    const op=ops[Math.floor(rng()*ops.length)];
    if(op==='add'){const[lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);const ans=a+b;if(ans===0)continue;return{q:`${a} + ${b}`,ans,op};}
    if(op==='sub'){const[lo,hi]=r.sub;let a=ri(lo,hi),b=ri(lo,hi);if(a<b)[a,b]=[b,a];if(a===b)continue;return{q:`${a} − ${b}`,ans:a-b,op};}
    if(op==='mul'){const[lo,hi]=r.mul,a=ri(lo,hi);const bMin=level==='easy'?2:level==='medium'?3:6;const bMax=level==='easy'?9:level==='medium'?12:15;const b=ri(bMin,bMax);if(a===0||b===0)continue;return{q:`${a} × ${b}`,ans:a*b,op};}
    if(op==='pct'){
      // Use PCT_BASES_HARD for hard difficulty so seeded challenges match non-seeded genPct behaviour
      const bases=level==='hard'?PCT_BASES_HARD:(PCT_BASES[level]||PCT_BASES.easy);
      let p=rPick(PCT_NICE),base=rPick(bases),ans=p*base/100;
      if(!Number.isInteger(ans)||ans===0)continue;
      return{q:`${p}% of ${base}`,ans,op:'pct'};
    }
    // div
    const b=ri(r.divB[0],r.divB[1]),q2=ri(r.divQ[0],r.divQ[1]);if(b===0||q2===0)continue;
    return{q:`${b*q2} ÷ ${b}`,ans:q2,op:'div'};
  }
  // Safe fallback
  return{q:`10% of 50`,ans:5,op:'pct'};
}

// ── Daily Challenge ──────────────────────────────────────────────────────────────
const DAILY_TOTAL=GAME_CONFIG.DAILY_QUEST_COUNT;
let dailyState={questions:[],answers:[],startTime:0,timer:null,current:0,done:false,timeMs:0};

function getDailyDateStr(){
  // Use UTC date so everyone worldwide gets the same challenge on the same calendar day
  const now=new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth()+1).padStart(2,'0')}-${String(now.getUTCDate()).padStart(2,'0')}`;
}
function getDailySeed(dateStr){
  // Deterministic seed from the date string
  let h=0;
  for(let i=0;i<dateStr.length;i++)h=(Math.imul(31,h)+dateStr.charCodeAt(i))|0;
  return Math.abs(h)||12345;
}
function genDailyQuestions(){
  const dateStr=getDailyDateStr();
  const seed=getDailySeed(dateStr);
  const rng=seededRand(seed);

  // ── Pick today's composition using the seed ────────────────────────────────
  // Rules: 10 total, min 3 easy, max 2 pct (no pct_hard), max 1 hard
  // Pick composition index from seeded rng → deterministic per day
  const COMPOSITIONS=[
    // [easy, pct_easy, medium, pct_medium, hard]
    [4, 0, 6, 0, 0],  // classic: 4e + 6m
    [5, 0, 5, 0, 0],  // easy-heavy
    [3, 1, 6, 0, 0],  // 1 pct easy
    [3, 1, 5, 1, 0],  // 1 pct easy + 1 pct medium
    [3, 2, 5, 0, 0],  // 2 pct easy
    [3, 1, 4, 1, 1],  // 1 pct easy + 1 pct medium + 1 hard
    [3, 0, 6, 0, 1],  // 1 hard
    [4, 1, 4, 0, 1],  // 1 pct easy + 1 hard
    [3, 1, 5, 0, 1],  // 1 pct easy + 1 hard
    [4, 0, 5, 0, 1],  // 1 hard no pct
    [3, 0, 5, 1, 1],  // 1 pct medium + 1 hard
  ].filter(c=>c[4]<=1); // ensure max 1 hard (safety)
  const ci=Math.floor(rng()*COMPOSITIONS.length);
  const[nEasy,nPctEasy,nMed,nPctMed,nHard]=COMPOSITIONS[ci];

  // Build levels array and shuffle with rng
  const levels=[
    ...Array(nEasy).fill('easy'),
    ...Array(nPctEasy).fill('pct_easy'),
    ...Array(nMed).fill('medium'),
    ...Array(nPctMed).fill('pct_medium'),
    ...Array(nHard).fill('hard'),
  ];
  // Fisher-Yates shuffle with seeded rng so order is also deterministic
  for(let i=levels.length-1;i>0;i--){
    const j=Math.floor(rng()*(i+1));
    [levels[i],levels[j]]=[levels[j],levels[i]];
  }
  const questions=[];
  const usedQs=new Set();
  for(let i=0;i<DAILY_TOTAL;i++){
    const level=levels[i];
    let p=null;
    let tries=0;
    do{
      if(level==='pct_easy'){
        // Easy pct: bases excluding 100 (too trivial)
        const pctBases=[10,20,25,40,50,60,80];
        const pctNice=[5,10,20,25,50];
        let ans=0;
        let attempts2=0;
        do{
          const pv=pctNice[Math.floor(rng()*pctNice.length)];
          const base=pctBases[Math.floor(rng()*pctBases.length)];
          ans=pv*base/100;
          p={q:`${pv}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
          attempts2++;
        }while((!Number.isInteger(ans)||ans===0||usedQs.has(p.q))&&attempts2<50);
      } else if(level==='pct_medium'){
        // Generate a seeded percentage question at medium difficulty directly — no wasted RNG calls
        const pctBases=[20,25,40,50,60,75,80,120,125,150,200];
        const pctNice=[5,8,10,12,15,20,25];
        let ans=0;let attempts2=0;
        do{
          const pv=pctNice[Math.floor(rng()*pctNice.length)];
          const base=pctBases[Math.floor(rng()*pctBases.length)];
          ans=pv*base/100;
          p={q:`${pv}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
          attempts2++;
        }while((!Number.isInteger(ans)||ans===0||usedQs.has(p.q))&&attempts2<50);
      } else {
        p=genSeededProblem(rng,level);
      }
      tries++;
    }while((p.ans===0||usedQs.has(p.q))&&tries<30);
    usedQs.add(p.q);
    // Also block commutative pair (e.g. 6×5 if 5×6 was used)
    if(p.op==='mul'||p.op==='add'){
      const parts=p.q.split(p.op==='mul'?/×/:/\+/);
      if(parts.length===2){
        const flipped=p.op==='mul'?`${parts[1].trim()} × ${parts[0].trim()}`:`${parts[1].trim()} + ${parts[0].trim()}`;
        usedQs.add(flipped);
      }
    }
    questions.push({...p,level:level.replace('pct_','')});
  }
  return{questions,dateStr,seed};
}

async function checkDailyCompleted(){
  // Check localStorage first (fast, works for guests)
  const dateStr=getDailyDateStr();
  const localKey='numfly_daily_'+dateStr;
  const local=localStorage.getItem(localKey);
  if(local){try{return JSON.parse(local);}catch(e){localStorage.removeItem(localKey);}}
  // Check Supabase if logged in
  if(sb&&currentUser){
    try{
      const{data}=await sb.from('daily_challenge_entries').select('time_ms').eq('user_id',currentUser.id).eq('challenge_date',dateStr).maybeSingle();
      if(data)return data;
    }catch(e){}
  }
  return null;
}

async function openDailyChallenge(){
  const done=await checkDailyCompleted();
  if(done){
    // Already done — show result screen with leaderboard
    const ms=done.time_ms;
    document.getElementById('dc-result-time').innerHTML=formatDailyTime(ms,true);
    document.getElementById('screen-daily-result').dataset.dateStr=getDailyDateStr();
    showScreen('screen-daily-result');
    setDcTab(_dcCurrentTab, document.querySelectorAll('.dc-tab')[_dcCurrentTab==='global'?1:0]);
    const gp=document.getElementById('dc-guest-prompt');
    if(gp)gp.style.display=currentUser?'none':'flex';
    return;
  }
  // Check for in-progress session to resume
  const{questions,dateStr}=genDailyQuestions();
  let resumeFrom=0,resumeElapsed=0;
  try{
    let prog=null;try{const _raw=localStorage.getItem('numfly_daily_progress');if(_raw)prog=JSON.parse(_raw);}catch(e){localStorage.removeItem('numfly_daily_progress');}
    if(prog&&prog.dateStr===dateStr&&prog.current>0&&prog.current<DAILY_TOTAL){
      resumeFrom=prog.current;
      resumeElapsed=prog.elapsedMs||0;
    }
  }catch(e){}
  dailyState={questions,answers:[],startTime:0,timer:null,current:resumeFrom,done:false,timeMs:0,resumeElapsed};
  // Update date display
  const dateEl=document.getElementById('dc-date-display');
  if(dateEl){
    const d=new Date(dateStr+'T00:00:00Z');
    const locale=lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US';
    dateEl.textContent=d.toLocaleDateString(locale,{month:'short',day:'numeric'});
  }
  // Skip countdown if resuming mid-session
  showScreen('screen-daily-game');
  if(resumeFrom>0){
    // Resuming — load the current question first so the card isn't blank
    loadDailyQuestion(false);
    const dcAnsEl=document.getElementById('dc-answer');
    dailyState.startTime=Date.now()-(dailyState.resumeElapsed||0);
    dailyState.timer=setInterval(()=>{
      const elapsed=(Date.now()-dailyState.startTime)/1000;
      const el=document.getElementById('dc-timer');
      if(el)el.textContent=elapsed.toFixed(1)+'s';
    },100);
    dailyState.playTimeTimer=setInterval(()=>{
      stats.totalPlayTime++;stats.modePlayTime.daily=(stats.modePlayTime.daily||0)+1;
    },1000);
    if(dcAnsEl){dcAnsEl.focus();}
    return;
  }
// 1. Mijn spam-klik fix: gooi oude overlays direct weg
  const existingOverlay = document.getElementById('daily-countdown-overlay');
  if (existingOverlay) existingOverlay.remove();
  
  if (dailyState.countdownTimer) {
    clearInterval(dailyState.countdownTimer);
    dailyState.countdownTimer = null;
  }


  const dcOverlay=document.createElement('div');
  dcOverlay.id='daily-countdown-overlay';
  dcOverlay.style.cssText='position:fixed;inset:0;background:var(--bg,#0d0d0d);z-index:9999;display:flex;align-items:center;justify-content:center;';
  dcOverlay.innerHTML=`<div style="text-align:center">
    <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px">📅 ${t('mode_daily')}</div>
    <div id="daily-countdown-num" style="font-family:'Bebas Neue',sans-serif;font-size:140px;color:var(--accent);line-height:1;letter-spacing:2px">3</div>
  </div>`;
  document.body.appendChild(dcOverlay);

  loadDailyQuestion(false); 
  const dcAns=document.getElementById('dc-answer');
  if(dcAns){dcAns.disabled=true;dcAns.blur();}
  
  let dcCount=3;

  dailyState.countdownTimer = setInterval(() => {

    const liveOverlay = document.getElementById('daily-countdown-overlay');
    const liveNum = document.getElementById('daily-countdown-num');

    if (!liveOverlay) {
      clearInterval(dailyState.countdownTimer);
      dailyState.countdownTimer = null;
      return;
    }

    dcCount--;

    if (dcCount <= 0) {
      clearInterval(dailyState.countdownTimer);
      dailyState.countdownTimer = null;
      liveOverlay.remove();

      dailyState.startTime = Date.now() - (dailyState.resumeElapsed || 0);
      dailyState.timer = setInterval(() => {
        const elapsed = (Date.now() - dailyState.startTime) / 1000;
        const el = document.getElementById('dc-timer');
        if (el) el.textContent = elapsed.toFixed(1) + 's';
      }, 100);

      dailyState.playTimeTimer = setInterval(() => {
        stats.totalPlayTime++; 
        stats.modePlayTime.daily = (stats.modePlayTime.daily || 0) + 1;
      }, 1000);

      const liveAns = document.getElementById('dc-answer');
      if (liveAns) { 
        liveAns.disabled = false; 
        liveAns.style.opacity = '1'; 
        liveAns.focus(); 
      }
      
    } else {
      if (liveNum) {
        liveNum.textContent = dcCount;
        liveNum.style.transition = 'transform .15s';
        liveNum.style.transform = 'scale(1.2)';
        setTimeout(() => { 
          const n = document.getElementById('daily-countdown-num'); 
          if (n) n.style.transform = 'scale(1)'; 
        }, 150);
      }
    }
  }, 1000);
}
function loadDailyQuestion(isFirst){
  const q=dailyState.questions[dailyState.current];
  document.getElementById('dc-current').textContent=dailyState.current+1;
  document.getElementById('dc-op-type').textContent=t('op_type_'+q.op)||q.op;
  document.getElementById('dc-question').textContent=q.q;
  document.getElementById('dc-answer').value='';
  document.getElementById('dc-feedback').textContent='';
  document.getElementById('dc-feedback').className='feedback';
  // Start/resume timer on first load
  // Timer is started by the countdown overlay (or directly if resuming without countdown)
  if(isFirst&&!dailyState.timer){
    dailyState.startTime=Date.now()-(dailyState.resumeElapsed||0);
    dailyState.timer=setInterval(()=>{
      const elapsed=(Date.now()-dailyState.startTime)/1000;
      const el=document.getElementById('dc-timer');
      if(el)el.textContent=elapsed.toFixed(1)+'s';
    },100);
    dailyState.playTimeTimer=setInterval(()=>{
      stats.totalPlayTime++;stats.modePlayTime.daily=(stats.modePlayTime.daily||0)+1;
    },1000);
  }
}
function checkDailyAnswer(){
  if(dailyState.done)return;
  const val=document.getElementById('dc-answer').value.trim();
  if(val==='')return;
  const q=dailyState.questions[dailyState.current];
  const correct=checkAns(val,q.ans);
  const fb=document.getElementById('dc-feedback');
  if(correct){
    fb.textContent=t('speed_correct');fb.className='feedback ok';
    dailyState.answers.push({correct:true,time:Date.now()-dailyState.startTime});
    // Only record as correct if not already recorded wrong for this question
    if(!dailyState.recordedWrong){
      recordAnswer(q.op,true,'daily',q.level||'medium');
    }
    dailyState.recordedWrong=false; // reset for next question
    dailyState.current++;
    if(dailyState.current>=DAILY_TOTAL){
      finishDailyChallenge();
    } else {
      setTimeout(loadDailyQuestion,250);
    }
  } else {
    const disp=Number.isInteger(q.ans)?q.ans:q.ans.toFixed(2);
    fb.textContent=t('speed_wrong');fb.className='feedback bad';
    // Only record wrong once per expression (not on every retry)
    if(!dailyState.recordedWrong){
      recordAnswer(q.op,false,'daily',q.level||'medium');
      dailyState.recordedWrong=true;
    }
    document.getElementById('dc-answer').value='';
    document.getElementById('dc-answer').focus();
  }
}
async function finishDailyChallenge(){
  dailyState.done=true;
  clearInterval(dailyState.timer);dailyState.timer=null;
  clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;
  const ms=Date.now()-dailyState.startTime;
  dailyState.timeMs=ms;
  const dateStr=getDailyDateStr();
  // Clear in-progress state
  try{localStorage.removeItem('numfly_daily_progress');}catch(e){}
  // Save locally as completed
  localStorage.setItem('numfly_daily_'+dateStr,JSON.stringify({time_ms:ms}));
  // Award base 100 XP for completing daily challenge
  gainXP(100);
  // Update daily stats first so we know the new streak count
  stats.dailyCompleted=(stats.dailyCompleted||0)+1;
  const streak=updateDailyStreak(dateStr);
  // Streak XP bonus — small reward for consecutive days, scales with tier
  // Tiers: 3d→+5, 7d→+15, 14d→+25, 30d→+40, 90d→+60, 365d→+100
  if(streak.count>=2){
    const streakBonus=
      streak.count>=365?100:streak.count>=90?60:streak.count>=30?40:
      streak.count>=14?25:streak.count>=7?15:streak.count>=3?5:0;
    if(streakBonus>0){
      gainXP(streakBonus);
      // Show a brief streak bonus toast after the base XP toast clears
      setTimeout(()=>{
        const el=document.getElementById('xp-toast');
        if(el){
          el.textContent=`🔥 +${streakBonus} XP streak bonus`;
          el.classList.add('show');
          setTimeout(()=>el.classList.remove('show'),1600);
        }
      },1800);
    }
  }
  stats.dailyBestStreak=Math.max(stats.dailyBestStreak||0,streak.count);
  if(!stats.dailyBestTime||ms<stats.dailyBestTime)stats.dailyBestTime=ms;
  if(!stats.dailyWorstTime||ms>stats.dailyWorstTime)stats.dailyWorstTime=ms;
  checkAchievements();
  saveOpStats(); // persist daily stats immediately
  // Save to Supabase if logged in
  if(sb&&currentUser){
    try{
      // submit_daily_time validates time server-side (rejects impossibly fast times)
      await withTimeout(sb.rpc('submit_daily_time',{p_challenge_date:dateStr,p_time_ms:ms}));
    }catch(e){console.warn('[Numfly] daily save error:',e);}
  }
  // Update the menu card
  updateDailyCard();
  // Show result
  document.getElementById('dc-result-time').innerHTML=formatDailyTime(ms,true);
  document.getElementById('screen-daily-result').dataset.dateStr=dateStr;
  showScreen('screen-daily-result');
  setDcTab(_dcCurrentTab, document.querySelectorAll('.dc-tab')[_dcCurrentTab==='global'?1:0]);
  renderStreakOnResult();
  flushPendingLevelUps();
  // Show guest sign-in prompt if not logged in
  const guestPrompt=document.getElementById('dc-guest-prompt');
  if(guestPrompt)guestPrompt.style.display=currentUser?'none':'flex';
  // Store pending daily time so it can be claimed after sign-up
  if(!currentUser){
    try{localStorage.setItem('numfly_pending_daily',JSON.stringify({dateStr,time_ms:ms}));}catch(e){}
  }
}
function abandonDaily(){
  if(dailyState.timer){clearInterval(dailyState.timer);dailyState.timer=null;}
  if(dailyState.playTimeTimer){clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;}
  // Save in-progress state so player can resume
  if(!dailyState.done&&dailyState.current>0){
    const elapsed=dailyState.startTime>0?Date.now()-dailyState.startTime:0;
    try{
      localStorage.setItem('numfly_daily_progress',JSON.stringify({
        dateStr:getDailyDateStr(),
        current:dailyState.current,
        elapsedMs:elapsed
      }));
    }catch(e){}
  }
  dailyState.done=true;
  showScreen('screen-menu');
}
// ── Claim pending guest daily entry after sign-up ────────────────────────────
async function claimPendingDailyEntry(){
  if(!currentUser||!sb)return;
  try{
    const raw=localStorage.getItem('numfly_pending_daily');
    if(!raw)return;
    const{dateStr,time_ms}=JSON.parse(raw);
    if(!dateStr||!time_ms)return;
    // Only claim if it's today's challenge
    if(dateStr!==getDailyDateStr())return;
    const{error}=await withTimeout(sb.rpc('submit_daily_time',{p_challenge_date:dateStr,p_time_ms:time_ms}));
    if(!error){
      localStorage.removeItem('numfly_pending_daily');
      console.log('[Numfly] Pending daily entry claimed:',dateStr,time_ms+'ms');
      // Also mark the challenge as done locally (in case it wasn't)
      localStorage.setItem('numfly_daily_'+dateStr,JSON.stringify({time_ms}));
      // Refresh the daily card and the result leaderboard if visible
      updateDailyCard();
      const resultScreen=document.getElementById('screen-daily-result');
      if(resultScreen&&resultScreen.classList.contains('active')){
        loadDailyLeaderboard(_dcCurrentTab||'friends');
      }
      scheduleSync();
    }
  }catch(e){console.warn('[Numfly] claimPendingDailyEntry failed:',e);}
}
// ── Daily streak ─────────────────────────────────────────────────────────────
function getPrevDateStr(dateStr){
  const d=new Date(dateStr+'T12:00:00Z');
  d.setUTCDate(d.getUTCDate()-1);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
}
const STREAK_KEY='numfly_daily_streak';
function getDailyStreak(){
  try{
    const s=JSON.parse(localStorage.getItem(STREAK_KEY)||'null');
    if(!s||!s.count)return{count:0,lastDate:''};
    // Check if streak has expired — if lastDate is not today or yesterday, it's broken
    const today=getDailyDateStr();
    const yesterday=getPrevDateStr(today);
    if(s.lastDate!==today&&s.lastDate!==yesterday){
      // Missed a day — streak is broken, clear it
      try{localStorage.setItem(STREAK_KEY,JSON.stringify({count:0,lastDate:s.lastDate}));}catch(e){}
      return{count:0,lastDate:s.lastDate};
    }
    return s;
  }catch(e){return{count:0,lastDate:''};}
}
function updateDailyStreak(dateStr){
  const s=getDailyStreak();
  const yesterday=getPrevDateStr(dateStr);
  let newCount;
  if(s.lastDate===dateStr){
    newCount=s.count;
  } else if(s.lastDate===yesterday){
    newCount=s.count+1;
  } else {
    newCount=1;
  }
  const updated={count:newCount,lastDate:dateStr};
  try{localStorage.setItem(STREAK_KEY,JSON.stringify(updated));}catch(e){}
  // Push to Supabase immediately (don't wait for the scheduled sync)
  if(currentUser)scheduleSync();
  return updated;
}

function renderStreakOnCard(){
  const s=getDailyStreak();
  const badge=document.getElementById('daily-streak-badge');
  const countEl=document.getElementById('daily-streak-count');
  const nextHint=document.getElementById('streak-next-hint');
  const card=document.getElementById('daily-card');
  const allTiers=['tier-yellow','tier-blue','tier-purple','tier-crystal','tier-crown'];
  if(!badge)return;
  if(card)card.classList.remove(...allTiers);
  if(s.count>=2){
    badge.style.display='flex';
    if(countEl)countEl.textContent=s.count;
    const fireEl=badge.querySelector('.streak-badge-fire');
    const labelEl=badge.querySelector('.streak-badge-label');
    // Tier thresholds: [minCount, icon, tierClass, badgeBg, badgeBorder, countColor, labelColor, nextThreshold, nextLabel]
    const TIERS=[
      [365,'👑','tier-crown','rgba(232,255,71,.18)','rgba(232,255,71,.5)','#e8ff47','rgba(232,255,71,.8)',null,''],
      [90, '🔮','tier-purple','rgba(192,132,252,.18)','rgba(192,132,252,.45)','#c084fc','rgba(192,132,252,.85)',365,'👑 365'],
      [30, '💎','tier-crystal','rgba(77,255,180,.16)','rgba(77,255,180,.45)','#4dffb4','rgba(77,255,180,.8)',90,'🔮 90'],
      [2,  '🔥','','rgba(255,120,0,.13)','rgba(255,120,0,.35)','#ff8c00','rgba(255,120,0,.8)',30,'💎 30'],
    ];
    const tier=TIERS.find(([min])=>s.count>=min)||TIERS[TIERS.length-1];
    const [,icon,tierClass,bg,border,countColor,labelColor,nextAt,nextLabel]=tier;
    if(fireEl)fireEl.textContent=icon;
    badge.style.background=bg;
    badge.style.borderColor=border;
    if(countEl)countEl.style.color=countColor;
    if(labelEl)labelEl.style.color=labelColor;
    if(tierClass&&card)card.classList.add(tierClass);
    // Next-tier hint on the right
    if(nextHint){
      if(nextAt&&s.count<nextAt){
        const diff=nextAt-s.count;
        nextHint.style.color=labelColor;
        nextHint.textContent=diff===1?`1 day to
${nextLabel}`:`${diff} days
to ${nextLabel}`;
      } else {
        nextHint.textContent='';
      }
    }
  } else {
    badge.style.display='none';
    if(nextHint)nextHint.textContent='';
  }
}
function renderStreakOnResult(){
  const s=getDailyStreak();
  const el=document.getElementById('dc-result-streak');
  if(!el)return;
  if(s.count>=2){
    const key=s.count>=7?'streak_result_great':s.count>=3?'streak_result_good':'streak_result_start';
    const msg=t(key).replace('{n}',s.count);
    el.style.display='block';
    el.innerHTML=`<span style="font-family:'DM Mono',monospace;font-size:12px;color:var(--orange)">${msg}</span>`;
  } else {
    el.style.display='none';
  }
}

function formatDailyTime(ms,html=false){
  if(!html){
    if(ms<60000)return (ms/1000).toFixed(2)+'s';
    const m=Math.floor(ms/60000),s=String(((ms%60000)/1000).toFixed(2)).padStart(5,'0');
    return m+'m '+s+'s';
  }
  // HTML version: unit letter same baseline as number, with a space
  const unit=(u)=>`<span style="font-size:.6em;opacity:.7"> ${u}</span>`;
  if(ms<60000){
    const secs=(ms/1000).toFixed(2);
    return `${secs}${unit('s')}`;
  }
  const m=Math.floor(ms/60000),s=String(((ms%60000)/1000).toFixed(2)).padStart(5,'0');
  return `${m}${unit('m')} ${s}${unit('s')}`;
}
async function updateDailyCard(){
  const card=document.getElementById('daily-card');
  if(!card)return;
  const done=await checkDailyCompleted();
  const timeEl=document.getElementById('daily-your-time');
  const badgeDot=card.querySelector('.daily-badge-dot');
  if(done){
    card.classList.add('daily-card-done');
    if(timeEl){timeEl.style.display='block';timeEl.innerHTML='✓ '+formatDailyTime(done.time_ms,true);}
    if(badgeDot)badgeDot.style.animation='none';
  } else {
    card.classList.remove('daily-card-done');
    if(timeEl)timeEl.style.display='none';
    if(badgeDot)badgeDot.style.animation='';
  }
  renderStreakOnCard();
  const resetEl=document.getElementById('daily-next-reset');
  if(resetEl){
    if(done){
      resetEl.style.display='block';
      updateDailyResetCountdown();
      if(!window._dailyCountdownTimer){
        window._dailyCountdownTimer=setInterval(updateDailyResetCountdown,60000);
      }
    } else {
      resetEl.style.display='none';
      if(window._dailyCountdownTimer){clearInterval(window._dailyCountdownTimer);window._dailyCountdownTimer=null;}
    }
  }
  card.style.opacity='1';
}
function updateDailyResetCountdown(){
  const el=document.getElementById('daily-next-reset');
  if(!el)return;
  const now=new Date();
  const nextUTCMidnight=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()+1));
  const msLeft=nextUTCMidnight-now;
  const h=Math.floor(msLeft/3600000);
  const m=Math.floor((msLeft%3600000)/60000);
  const msg=h>0?t('daily_resets_in_hm').replace('{h}',h).replace('{m}',m):t('daily_resets_in_m').replace('{m}',m);
  if(msg)el.textContent=msg;
}
let _dcCurrentTab='global';
async function setDcTab(tab,btn){
  _dcCurrentTab=tab;
  document.querySelectorAll('.dc-tab').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  // Clear immediately before async fetch to prevent stale tab content flash
  const el=document.getElementById('dc-leaderboard');
  if(el)el.innerHTML='<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  await loadDailyLeaderboard(tab);
}
async function loadDailyLeaderboard(tab){
  const el=document.getElementById('dc-leaderboard');
  if(!el)return;
  const dateStr=document.getElementById('screen-daily-result').dataset.dateStr||getDailyDateStr();
  if(!sb||!currentUser){
    el.innerHTML=''; // guest prompt below handles the sign-in CTA
    return;
  }
  el.innerHTML='<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  try{
    let rows=[];
    if(tab==='friends'){
      const uid=currentUser.id;
      const{data:fs}=await sb.from('friendships').select('requester_id,addressee_id').eq('status','accepted').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`);
      const friendIds=(fs||[]).map(f=>f.requester_id===uid?f.addressee_id:f.requester_id);
      friendIds.push(uid);
      const{data}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('challenge_date',dateStr).in('user_id',friendIds).order('time_ms',{ascending:true}).limit(20);
      rows=data||[];
    } else {
      const{data}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('challenge_date',dateStr).order('time_ms',{ascending:true}).limit(10);
      rows=data||[];
    }
    // For global tab: fetch user's own rank if not in top 10
    let dcSelfRank=null;
    let dcSelfRow=null;
    const uid=currentUser.id;
    if(tab==='global'&&!rows.find(r=>r.user_id===uid)){
      const{data:myRow}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if(myRow){
        const{count}=await sb.from('daily_challenge_entries').select('user_id',{count:'exact',head:true}).eq('challenge_date',dateStr).lt('time_ms',myRow.time_ms);
        dcSelfRank=(count||0)+1;
        dcSelfRow=myRow;
      }
    }
    // Ensure current user appears in friends tab even if not in result
    if(tab==='friends'&&rows.length&&!rows.find(r=>r.user_id===uid)){
      const{data:myRow}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if(myRow)rows.push(myRow);
      rows.sort((a,b)=>a.time_ms-b.time_ms);
    }
    if(!rows.length&&!dcSelfRow){el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0;text-align:center">No entries yet today.</div>`;return;}
    const allDcIds=[...rows.map(r=>r.user_id),...(dcSelfRow?[dcSelfRow.user_id]:[])];
    const ids=[...new Set(allDcIds)];
    const{data:profiles}=await sb.from('profiles').select('id,username,avatar_color').in('id',ids);
    const{data:progRows}=await sb.from('user_progress').select('user_id,xp_level').in('user_id',ids);
    const progMap=new Map((progRows||[]).map(p=>[p.user_id,p.xp_level||1]));
    const pm=new Map((profiles||[]).map(p=>[p.id,p]));
    function buildDcRow(r,rank,isMe){
      const prof=pm.get(r.user_id)||{username:'Unknown'};
      const rankCls=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      const dcLvl=progMap.get(r.user_id)||1;
      const dcTitle=getTitleForLevel(dcLvl);
      return`<div class="dc-lb-row${isMe?' me':''}">
        <div class="dc-lb-rank ${rankCls}">${rank}</div>
        <div class="lb-avatar" style="background:${avatarColor(prof)}">${initials(prof.username)}</div>
        <div class="dc-lb-name"><div>${esc(prof.username)}${isMe?' ('+t('lb_you')+')':''}</div><div class="lb-title-badge ${dcTitle.css}">${dcTitle.badge} ${t('title_'+dcTitle.key)}</div></div>
        <div class="dc-lb-time">${formatDailyTime(r.time_ms)}</div>
      </div>`;
    }
    let html=rows.map((r,i)=>buildDcRow(r,i+1,r.user_id===uid)).join('');
    if(dcSelfRow&&dcSelfRank){
      html+=`<div style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-align:center;padding:4px 0;letter-spacing:1px">· · ·</div>`;
      html+=buildDcRow(dcSelfRow,dcSelfRank,true);
    }
    el.innerHTML=html;
  }catch(e){
    el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">Error loading ranking.</div>`;
  }
}



