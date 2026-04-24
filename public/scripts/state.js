// ══════════════════════════════════════════════════════════════════════════════
// State
// ══════════════════════════════════════════════════════════════════════════════
const hs={
  lightning:{easy:{score:0,plays:0,bestPrecision:0},medium:{score:0,plays:0,bestPrecision:0},hard:{score:0,plays:0,bestPrecision:0}},
  speed:{easy:{score:0,plays:0},medium:{score:0,plays:0},hard:{score:0,plays:0}},
  // Per-duration speed highscores: keyed as "diff_duration" e.g. "easy_30", "medium_120"
  // Used when playing timed challenges/competitions to show accurate context-specific HS.
  speedDur:{},
};
const stats={
  // overall
  totalAnswers:0,totalCorrect:0,totalWrong:0,
  totalPlayTime:0,speedScoreHistory:[],
  longestSpeedStreak:0,currentSpeedStreak:0,
  lightningStreakHistory:[],longestLightningStreak:0,longestCorrectSequence:0,longestCorrectSequenceMedHard:0,
  lightningBestScore:{easy:0,medium:0,hard:0},
  practiceCorrect:0,practiceWrong:0,
  currentPracticeStreak:0,longestPracticeStreak:0,
  // per-op totals
  opCorrect:{add:0,sub:0,mul:0,div:0,pct:0},
  opWrong:{add:0,sub:0,mul:0,div:0,pct:0},
  // per-mode per-op
  modeOpCorrect:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
  modeOpWrong:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
  // per-difficulty per-op (for accuracy filter in stats)
  diffOpCorrect:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  diffOpWrong:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  modeAnswers:{lightning:0,speed:0,practice:0,daily:0},
  modeCorrect:{lightning:0,speed:0,practice:0,daily:0},
  modePlayTime:{lightning:0,speed:0,practice:0,daily:0},
  tipSessions:0,
};

// ── XP SYSTEM ────────────────────────────────────────────────────────────────
const xp={total:0,level:1};

// XP per correct answer: base * difficulty multiplier
// difficulty: easy=1, medium=2, hard=4
// op bonus: pct & mul get extra
// ── Game configuration — single place to tune XP, events, and game rules ────
const GAME_CONFIG={
  XP_EVENT_MULTIPLIER:1,   // Set to 2 for Double XP events
  DAILY_QUEST_COUNT:10,    // Questions per daily challenge (also controls DAILY_TOTAL)
};
const XP_BASE={easy:5,medium:12,hard:25};
// Lightning uses its own lower base — the player computes a running sum (always addition),
// and XP scales with sequence length × interval speed rather than per-answer op bonuses.
const XP_BASE_LIGHTNING={easy:2,medium:5,hard:10};
const XP_OP_BONUS={add:0,sub:0,mul:3,div:3,pct:3};
// Per-mode multipliers: Speed slightly reduced (many answers per round),
// Practice and Tips give less XP (no time pressure)
const XP_MODE_MULT={speed:0.7,practice:0.4,tip:0.3,lightning:1.0,daily:1.0};
// Interval multiplier for Lightning: fast = more XP, slow = much less
// Maps interval (1–20 seconds) to a multiplier (0.6 → 0.03)
function lightningIntervalMult(intervalSecs){
  // 1s → 0.60,  2s → 0.45,  5s → 0.20,  10s → 0.09,  20s → 0.03
  return Math.max(0.03, Math.round(100 * 0.6 * Math.pow(0.87, intervalSecs - 1)) / 100);
}

// Lightning precision score: count × diffMultiplier × speedMultiplier
// This is the canonical score for leaderboards and stats.
function calcLightningPrecisionScore(count, intervalSecs, difficulty) {
  const diffMult = {easy:1, medium:2, hard:3}[difficulty] || 1;
  const speedMult = lightningIntervalMult(intervalSecs);
  return Math.max(1, Math.round(count * diffMult * speedMult * 10));
}

// Locale-aware number formatter: "," for EN, "." for NL/ES
function fmtN(n){
  if(n===null||n===undefined||isNaN(n))return n;
  const locale=lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US';
  return new Intl.NumberFormat(locale,{useGrouping:true}).format(Number(n));
}

// ── Sound effects (Web Audio API) ───────────────────────────────────
let _audioCtx = null;
let _audioUnlocked = false;

function getAudioCtx() {
  if (!_audioCtx) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      _audioCtx = new AudioContext();
    } catch (e) {}
  }
  return _audioCtx;
}

// Mobile Safari/Chrome requires a silent buffer to be played on first interaction
function _unlockAudio() {
  if (_audioUnlocked) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  // Force resume on mobile
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  // Play a completely silent 1-sample buffer to permanently unlock the audio engine
  try {
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    if (source.start) source.start(0);
    else if (source.noteOn) source.noteOn(0);
    _audioUnlocked = true;

    // Clean up event listeners once unlocked
    ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'].forEach(evt => {
      document.removeEventListener(evt, _unlockAudio, { capture: true });
    });
  } catch(e) {}
}

['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'].forEach(evt => {
  document.addEventListener(evt, _unlockAudio, { passive: true, capture: true });
});

function playTone(freq, duration, type='sine', gainVal=0.12, freqEnd=null) {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().then(() => _doPlayTone(ctx, freq, duration, type, gainVal, freqEnd)).catch(()=>{});
    } else {
      _doPlayTone(ctx, freq, duration, type, gainVal, freqEnd);
    }
  } catch(e) {}
}

function _doPlayTone(ctx, freq, duration, type, gainVal, freqEnd) {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (freqEnd) osc.frequency.linearRampToValueAtTime(freqEnd, ctx.currentTime + duration);
    gain.gain.setValueAtTime(gainVal, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function sfxCorrect() {
  // High-pitched "Coin/Money" sound (B6 -> E7)
  playTone(1975, 0.05, 'sine', 0.1); 
  setTimeout(() => playTone(2637, 0.25, 'sine', 0.1), 50); 
}
function sfxWrong() {
  playTone(220, 0.12, 'sawtooth', 0.08, 160);
}
function sfxLifeLost() {
  playTone(300, 0.10, 'sawtooth', 0.12, 180);
  setTimeout(() => playTone(180, 0.15, 'sawtooth', 0.10, 120), 110);
}
function sfxLevelComplete() {
  playTone(440, 0.08, 'sine', 0.10, 523);
  setTimeout(() => playTone(523, 0.08, 'sine', 0.10, 659), 90);
  setTimeout(() => playTone(659, 0.10, 'sine', 0.12, 784), 180);
  setTimeout(() => playTone(784, 0.18, 'sine', 0.14), 280);
}
function sfxBossComplete() {
  playTone(523, 0.07, 'sine', 0.10, 659);
  setTimeout(() => playTone(659, 0.07, 'sine', 0.10, 784), 80);
  setTimeout(() => playTone(784, 0.07, 'sine', 0.10, 1047), 160);
  setTimeout(() => playTone(1047, 0.25, 'sine', 0.15), 240);
}

// XP required to reach each level (cumulative thresholds)
function xpForLevel(lvl){
  if(lvl<=1)return 0;
  return Math.floor(158.1*Math.pow(lvl-1,1.5))-Math.floor(158.1*Math.pow(lvl-2,1.5));
}
// Memoized: each level's cumulative XP is calculated once and cached
const _xpCache={1:0};
function totalXpForLevel(lvl){
  if(_xpCache[lvl]!==undefined)return _xpCache[lvl];
  _xpCache[lvl]=totalXpForLevel(lvl-1)+xpForLevel(lvl);
  return _xpCache[lvl];
}

// TITLE SYSTEM — from Excel data
const TITLE_THRESHOLDS=[
  {level:1,   key:'novice',       css:'title-novice',       badge:'🧮'},
  {level:5,   key:'learner',      css:'title-learner',      badge:'✏️'},
  {level:10,  key:'scholar',      css:'title-scholar',      badge:'📚'},
  {level:20,  key:'theorist',     css:'title-theorist',     badge:'🔬'},
  {level:30,  key:'arithmetician',css:'title-arithmetician',badge:'🎯'},
  {level:40,  key:'analyst',      css:'title-analyst',      badge:'🔭'},
  {level:50,  key:'master',       css:'title-master',       badge:'⚡'},
  {level:75,  key:'prodigy',      css:'title-prodigy',      badge:'🌟'},
  {level:100, key:'polymath',     css:'title-polymath',     badge:'🌐'},
  {level:150, key:'logician',     css:'title-logician',     badge:'🧩'},
  {level:200, key:'pythagoras',   css:'title-pythagoras',   badge:'📐'},
  {level:300, key:'archimedes',   css:'title-archimedes',   badge:'⚙️'},
  {level:400, key:'newton',       css:'title-newton',       badge:'🍎'},
  {level:500, key:'euler',        css:'title-euler',        badge:'∞'},
  {level:700, key:'ramanujan',    css:'title-ramanujan',    badge:'🌙'},
  {level:1000,key:'gauss',        css:'title-gauss',        badge:'👑'},
];

function getTitleRingColor(lvl){
  const title=getTitleForLevel(lvl);
  const colors={'title-novice':'var(--muted)','title-learner':'var(--text)','title-scholar':'var(--info)','title-theorist':'var(--success)','title-master':'var(--accent)','title-polymath':'var(--orange)','title-pythagoras':'var(--purple)','title-euler':'#ff6b9d','title-gauss':'var(--accent)'};
  return colors[title.css]||'var(--accent)';
}
function getTitleForLevel(lvl){
  let title=TITLE_THRESHOLDS[0];
  for(const th of TITLE_THRESHOLDS){if(lvl>=th.level)title=th;else break;}
  return title;
}

// Pending level-up queue: shown immediately in Practice/Tips, deferred in Lightning/Speed
let pendingLevelUps=[];

function gainXP(amount){
  const oldLevel=xp.level;
  xp.total+=amount;
  let lvl=xp.level; // start from current level — no need to re-check lower levels
  while(lvl<1000){const needed=totalXpForLevel(lvl+1);if(xp.total>=needed)lvl++;else break;}
  const didLevelUp=(lvl>oldLevel);
  xp.level=lvl;
  renderXPPanel();
  showXPToast(amount);
  if(didLevelUp){
    checkAchievements();
    const activeId=document.querySelector('.screen.active')?.id;
    const isLightningGame=activeId==='screen-lightning-game';
    const isSpeedGame=activeId==='screen-speed-game';
    const isDailyGame=activeId==='screen-daily-game';
    const isCampaignGame=activeId==='screen-campaign-game';
    // Defer level-up modal during any active game — flush when game ends
    if(isLightningGame||isSpeedGame||isDailyGame||isCampaignGame){
      pendingLevelUps.push(lvl);
    } else {
      setTimeout(()=>showLevelUpModal(lvl),600);
    }
  }
}

function flushPendingLevelUps(){
  if(pendingLevelUps.length===0)return;
  // Show the highest level reached
  const topLevel=Math.max(...pendingLevelUps);
  pendingLevelUps=[];
  setTimeout(()=>showLevelUpModal(topLevel),400);
}

function recalcLevelSilently(){
  for(const k in _xpCache){ if(k!=='1') delete _xpCache[k]; }
  let lvl=1;
  while(lvl<1000){
    const needed=totalXpForLevel(lvl+1);
    if(xp.total>=needed) lvl++;
    else break;
  }
  xp.level=lvl;
  pendingLevelUps=[];
}

let xpToastTimer=null;
function showXPToast(amount){
  const el=document.getElementById('xp-toast');
  el.textContent=`+${amount} XP`;
  const isMobile=window.innerWidth<=480;
  if(isMobile){
    // Mobile: overlay the XP badge inside the question card so it never floats outside
    const qCardMap={'screen-speed-game':'s-question','screen-practice-game':'p-question',
      'screen-daily-game':'dc-question','screen-tip-practice':'tp-question'};
    const activeId=document.querySelector('.screen.active')?.id;
    const qId=qCardMap[activeId];
    const qEl=qId?document.getElementById(qId):null;
    // Find the parent .q-card so we can position relative to it
    const qCard=qEl?.closest('.q-card');
    if(qCard){
      const cardRect=qCard.getBoundingClientRect();
      // Place the toast centred vertically in the card, right-aligned with a small margin
      el.style.position='fixed';
      el.style.top=(cardRect.top+cardRect.height/2-14)+'px';
      el.style.right=(window.innerWidth-cardRect.right+10)+'px';
      el.style.left='auto';
      el.style.bottom='auto';
      el.style.transform='none';
    } else {
      el.style.position='fixed';
      el.style.top='30%';el.style.right='12px';el.style.left='auto';
      el.style.bottom='auto';el.style.transform='none';
    }
  } else {
    // Desktop: original fixed bottom position
    el.style.position='';el.style.top='';el.style.right='';el.style.bottom='90px';el.style.transform='';
  }
  el.classList.add('show');
  if(xpToastTimer)clearTimeout(xpToastTimer);
  xpToastTimer=setTimeout(()=>{
    el.classList.remove('show');
    if(typeof _pendingAchToast!=='undefined'&&_pendingAchToast){
      const p=_pendingAchToast;_pendingAchToast=null;_doShowAchToast(p);
    }
  },1400);
}

function showLevelUpModal(lvl){
  const title=getTitleForLevel(lvl);
  document.getElementById('lu-level').textContent=lvl;
  const nameEl=document.getElementById('lu-title-name');
  nameEl.textContent=t('title_'+title.key);
  nameEl.className='levelup-title-name '+title.css;
  document.getElementById('lu-title-flavor').textContent=t('title_flavor_'+title.key);
  document.getElementById('modal-levelup').classList.add('open');
}
