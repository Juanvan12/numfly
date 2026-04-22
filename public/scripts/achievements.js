// ══════════════════════════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ══════════════════════════════════════════════════════════════════════════════

// Achievement definitions
// tier: bronze < silver < gold < platinum < diamond
// check(s,hs,xp): function returning true when earned, given current stats/hs/xp
const ACHIEVEMENTS=[
  // ── GENERAL ─────────────────────────────────────────────────────────────────
  {id:'answers_1',   sec:'general', icon:'✅', tier:'bronze',   nameKey:'ach_answers_1_name',   descKey:'ach_answers_1_desc',   check:(s)=>s.totalCorrect>=30},
  {id:'answers_2',   sec:'general', icon:'🔥', tier:'bronze',   nameKey:'ach_answers_2_name',   descKey:'ach_answers_2_desc',   check:(s)=>s.totalCorrect>=100},
  {id:'answers_3',   sec:'general', icon:'💯', tier:'silver',   nameKey:'ach_answers_3_name',   descKey:'ach_answers_3_desc',   check:(s)=>s.totalCorrect>=250},
  {id:'answers_4',   sec:'general', icon:'⚡', tier:'gold',     nameKey:'ach_answers_4_name',   descKey:'ach_answers_4_desc',   check:(s)=>s.totalCorrect>=1000},
  {id:'answers_5',   sec:'general', icon:'🤖', tier:'platinum', nameKey:'ach_answers_5_name',   descKey:'ach_answers_5_desc',   check:(s)=>s.totalCorrect>=2500},
  {id:'answers_6',   sec:'general', icon:'🌌', tier:'diamond',  nameKey:'ach_answers_6_name',   descKey:'ach_answers_6_desc',   check:(s)=>s.totalCorrect>=10000},
  {id:'time_1',      sec:'general', icon:'⏱️', tier:'bronze',   nameKey:'ach_time_1_name',      descKey:'ach_time_1_desc',      check:(s)=>s.totalPlayTime>=300},
  {id:'time_2',      sec:'general', icon:'📅', tier:'silver',   nameKey:'ach_time_2_name',      descKey:'ach_time_2_desc',      check:(s)=>s.totalPlayTime>=1800},
  {id:'time_3',      sec:'general', icon:'🕰️', tier:'gold',     nameKey:'ach_time_3_name',      descKey:'ach_time_3_desc',      check:(s)=>s.totalPlayTime>=7200},
  {id:'time_4',      sec:'general', icon:'🗿', tier:'platinum', nameKey:'ach_time_4_name',      descKey:'ach_time_4_desc',      check:(s)=>s.totalPlayTime>=72000},
  {id:'time_5',      sec:'general', icon:'💎', tier:'diamond',  nameKey:'ach_time_5_name',      descKey:'ach_time_5_desc',      check:(s)=>s.totalPlayTime>=180000},
  {id:'accuracy_1',  sec:'general', icon:'🎯', tier:'silver',   nameKey:'ach_accuracy_1_name',  descKey:'ach_accuracy_1_desc',  check:(s)=>s.totalAnswers>=50&&s.totalCorrect/s.totalAnswers>=0.8},
  {id:'accuracy_2',  sec:'general', icon:'🔬', tier:'gold',     nameKey:'ach_accuracy_2_name',  descKey:'ach_accuracy_2_desc',  check:(s)=>s.totalAnswers>=100&&s.totalCorrect/s.totalAnswers>=0.9},
  {id:'accuracy_3',  sec:'general', icon:'💎', tier:'platinum', nameKey:'ach_accuracy_3_name',  descKey:'ach_accuracy_3_desc',  check:(s)=>s.totalAnswers>=200&&s.totalCorrect/s.totalAnswers>=0.95},
  // ── LIGHTNING ───────────────────────────────────────────────────────────────
  {id:'lightning_games_1',  sec:'lightning', icon:'🎮', tier:'bronze',   nameKey:'ach_lightning_games_1_name',  descKey:'ach_lightning_games_1_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=1},
  {id:'lightning_seq_1',    sec:'lightning', icon:'💧', tier:'bronze',   nameKey:'ach_lightning_seq_1_name',    descKey:'ach_lightning_seq_1_desc',    check:(s)=>s.longestCorrectSequence>=5},
  {id:'lightning_seq_2',    sec:'lightning', icon:'⚡', tier:'silver',   nameKey:'ach_lightning_seq_2_name',    descKey:'ach_lightning_seq_2_desc',    check:(s)=>s.longestCorrectSequence>=10},
  {id:'lightning_seq_3',    sec:'lightning', icon:'🌩️', tier:'platinum', nameKey:'ach_lightning_seq_3_name',    descKey:'ach_lightning_seq_3_desc',    check:(s)=>(s.longestCorrectSequenceMedHard||0)>=15},
  {id:'lightning_seq_4',    sec:'lightning', icon:'👑', tier:'diamond',  nameKey:'ach_lightning_seq_4_name',    descKey:'ach_lightning_seq_4_desc',    check:(s)=>(s.longestCorrectSequenceMedHard||0)>=20},
  {id:'lightning_streak_1', sec:'lightning', icon:'✨', tier:'bronze',   nameKey:'ach_lightning_streak_1_name', descKey:'ach_lightning_streak_1_desc', check:(s)=>s.longestLightningStreak>=3},
  {id:'lightning_streak_2', sec:'lightning', icon:'🔆', tier:'silver',   nameKey:'ach_lightning_streak_2_name', descKey:'ach_lightning_streak_2_desc', check:(s)=>s.longestLightningStreak>=10},
  {id:'lightning_streak_3', sec:'lightning', icon:'🏆', tier:'platinum', nameKey:'ach_lightning_streak_3_name', descKey:'ach_lightning_streak_3_desc', check:(s)=>s.longestLightningStreak>=25},
  {id:'lightning_games_2',  sec:'lightning', icon:'🎲', tier:'silver',   nameKey:'ach_lightning_games_2_name',  descKey:'ach_lightning_games_2_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=10},
  {id:'lightning_games_3',  sec:'lightning', icon:'🌟', tier:'gold',     nameKey:'ach_lightning_games_3_name',  descKey:'ach_lightning_games_3_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=50},
  {id:'lightning_score_1',  sec:'lightning', icon:'🔋', tier:'bronze',   nameKey:'ach_lightning_score_1_name',  descKey:'ach_lightning_score_1_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=500},
  {id:'lightning_score_2',  sec:'lightning', icon:'⚡', tier:'silver',   nameKey:'ach_lightning_score_2_name',  descKey:'ach_lightning_score_2_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=2000},
  {id:'lightning_score_3',  sec:'lightning', icon:'🌩️', tier:'gold',     nameKey:'ach_lightning_score_3_name',  descKey:'ach_lightning_score_3_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=5000},
  {id:'lightning_score_4',  sec:'lightning', icon:'💥', tier:'platinum', nameKey:'ach_lightning_score_4_name',  descKey:'ach_lightning_score_4_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=15000},
  // ── SPEED ────────────────────────────────────────────────────────────────────
  {id:'speed_score_1', sec:'speed', icon:'🏃', tier:'bronze',   nameKey:'ach_speed_score_1_name', descKey:'ach_speed_score_1_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=15)},
  {id:'speed_score_2', sec:'speed', icon:'🚗', tier:'silver',   nameKey:'ach_speed_score_2_name', descKey:'ach_speed_score_2_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=30)},
  {id:'speed_score_3', sec:'speed', icon:'✈️', tier:'gold',     nameKey:'ach_speed_score_3_name', descKey:'ach_speed_score_3_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=50)},
  {id:'speed_score_4', sec:'speed', icon:'🚀', tier:'platinum',  nameKey:'ach_speed_score_4_name', descKey:'ach_speed_score_4_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=75)},
  {id:'speed_streak_1',sec:'speed', icon:'🎯', tier:'bronze',   nameKey:'ach_speed_streak_1_name',descKey:'ach_speed_streak_1_desc',check:(s)=>s.longestSpeedStreak>=10},
  {id:'speed_streak_2',sec:'speed', icon:'💫', tier:'silver',   nameKey:'ach_speed_streak_2_name',descKey:'ach_speed_streak_2_desc',check:(s)=>s.longestSpeedStreak>=20},
  {id:'speed_streak_3',sec:'speed', icon:'🌠', tier:'gold',     nameKey:'ach_speed_streak_3_name',descKey:'ach_speed_streak_3_desc',check:(s)=>s.longestSpeedStreak>=40},
  {id:'hard_1',        sec:'speed', icon:'💪', tier:'bronze',   nameKey:'ach_hard_1_name',        descKey:'ach_hard_1_desc',        check:(s,h)=>h.speed.hard.plays>=1},
  {id:'hard_2',        sec:'speed', icon:'🦾', tier:'diamond', nameKey:'ach_hard_2_name',        descKey:'ach_hard_2_desc',        check:(s,h)=>h.speed.hard.score>=30},
  // ── PRACTICE ─────────────────────────────────────────────────────────────────
  {id:'practice_1',       sec:'practice', icon:'📖', tier:'bronze', nameKey:'ach_practice_1_name',       descKey:'ach_practice_1_desc',       check:(s)=>(s.modeAnswers.practice||0)>=30},
  {id:'practice_2',       sec:'practice', icon:'📚', tier:'silver', nameKey:'ach_practice_2_name',       descKey:'ach_practice_2_desc',       check:(s)=>(s.modeAnswers.practice||0)>=150},
  {id:'practice_3',       sec:'practice', icon:'🎓', tier:'gold',   nameKey:'ach_practice_3_name',       descKey:'ach_practice_3_desc',       check:(s)=>(s.modeAnswers.practice||0)>=750},
  {id:'practice_streak_1',sec:'practice', icon:'🔗', tier:'bronze', nameKey:'ach_practice_streak_1_name',descKey:'ach_practice_streak_1_desc',check:(s)=>s.longestPracticeStreak>=5},
  {id:'practice_streak_2',sec:'practice', icon:'⛓️', tier:'silver', nameKey:'ach_practice_streak_2_name',descKey:'ach_practice_streak_2_desc',check:(s)=>s.longestPracticeStreak>=15},
  {id:'practice_streak_3',sec:'practice', icon:'🧲', tier:'gold',   nameKey:'ach_practice_streak_3_name',descKey:'ach_practice_streak_3_desc',check:(s)=>s.longestPracticeStreak>=30},
  {id:'tips_1',           sec:'practice', icon:'💡', tier:'bronze', nameKey:'ach_tips_1_name',           descKey:'ach_tips_1_desc',           check:(s)=>(s.tipSessions||0)>=1},
  {id:'tips_2',           sec:'practice', icon:'🧩', tier:'silver', nameKey:'ach_tips_2_name',           descKey:'ach_tips_2_desc',           check:(s)=>(s.tipSessions||0)>=5},
  {id:'tips_3',           sec:'practice', icon:'🎭', tier:'gold',   nameKey:'ach_tips_3_name',           descKey:'ach_tips_3_desc',           check:(s)=>(s.tipSessions||0)>=10},
  // ── MASTERY ──────────────────────────────────────────────────────────────────
  {id:'level_1', sec:'mastery', icon:'🌱', tier:'bronze',   nameKey:'ach_level_1_name', descKey:'ach_level_1_desc', check:(s,h,x)=>x.level>=5},
  {id:'level_2', sec:'mastery', icon:'🌿', tier:'silver',   nameKey:'ach_level_2_name', descKey:'ach_level_2_desc', check:(s,h,x)=>x.level>=10},
  {id:'level_3', sec:'mastery', icon:'🌳', tier:'gold',     nameKey:'ach_level_3_name', descKey:'ach_level_3_desc', check:(s,h,x)=>x.level>=25},
  {id:'level_4', sec:'mastery', icon:'🔮', tier:'platinum', nameKey:'ach_level_4_name', descKey:'ach_level_4_desc', check:(s,h,x)=>x.level>=50},
  {id:'level_5', sec:'mastery', icon:'👑', tier:'diamond',  nameKey:'ach_level_5_name', descKey:'ach_level_5_desc', check:(s,h,x)=>x.level>=100},
  {id:'level_6', sec:'mastery', icon:'🌌', tier:'diamond',  nameKey:'ach_level_6_name', descKey:'ach_level_6_desc', check:(s,h,x)=>x.level>=1000},
  // ── DAILY CHALLENGE ──────────────────────────────────────────────────────────
  {id:'daily_1',      sec:'daily', icon:'📅', tier:'bronze',   nameKey:'ach_daily_1_name',      descKey:'ach_daily_1_desc',      check:(s)=>(s.dailyCompleted||0)>=1},
  {id:'daily_2',      sec:'daily', icon:'🗓️', tier:'silver',   nameKey:'ach_daily_2_name',      descKey:'ach_daily_2_desc',      check:(s)=>(s.dailyCompleted||0)>=7},
  {id:'daily_3',      sec:'daily', icon:'📆', tier:'gold',     nameKey:'ach_daily_3_name',      descKey:'ach_daily_3_desc',      check:(s)=>(s.dailyCompleted||0)>=30},
  {id:'daily_streak_1',sec:'daily',icon:'🔥', tier:'silver',   nameKey:'ach_daily_streak_1_name',descKey:'ach_daily_streak_1_desc',check:(s)=>(s.dailyBestStreak||0)>=3},
  {id:'daily_streak_2',sec:'daily',icon:'🔥', tier:'gold',     nameKey:'ach_daily_streak_2_name',descKey:'ach_daily_streak_2_desc',check:(s)=>(s.dailyBestStreak||0)>=7},
  {id:'daily_streak_3',sec:'daily',icon:'🌋', tier:'platinum', nameKey:'ach_daily_streak_3_name',descKey:'ach_daily_streak_3_desc',check:(s)=>(s.dailyBestStreak||0)>=30},
  {id:'daily_streak_4',sec:'daily',icon:'💎', tier:'diamond',  nameKey:'ach_daily_streak_4_name',descKey:'ach_daily_streak_4_desc',check:(s)=>(s.dailyBestStreak||0)>=365},
  {id:'daily_speed_1', sec:'daily',icon:'⚡', tier:'silver',   nameKey:'ach_daily_speed_1_name', descKey:'ach_daily_speed_1_desc', check:(s)=>(s.dailyBestTime||Infinity)<=30000},
  {id:'daily_speed_2', sec:'daily',icon:'🚀', tier:'gold',     nameKey:'ach_daily_speed_2_name', descKey:'ach_daily_speed_2_desc', check:(s)=>(s.dailyBestTime||Infinity)<=25000},
  {id:'daily_speed_3', sec:'daily',icon:'💫', tier:'platinum', nameKey:'ach_daily_speed_3_name', descKey:'ach_daily_speed_3_desc', check:(s)=>(s.dailyBestTime||Infinity)<=20000},
  // ── CAMPAIGN ─────────────────────────────────────────────────────────────────
  {id:'cmp_1',       sec:'campaign', icon:'🗺️', tier:'bronze',   nameKey:'ach_cmp_1_name',       descKey:'ach_cmp_1_desc',       check:(s)=>(s.campaignCompleted||0)>=1},
  {id:'cmp_5',       sec:'campaign', icon:'⚔️',  tier:'bronze',   nameKey:'ach_cmp_5_name',       descKey:'ach_cmp_5_desc',       check:(s)=>(s.campaignCompleted||0)>=5},
  {id:'cmp_10',      sec:'campaign', icon:'🏅',  tier:'silver',   nameKey:'ach_cmp_10_name',      descKey:'ach_cmp_10_desc',      check:(s)=>(s.campaignCompleted||0)>=10},
  {id:'cmp_25',      sec:'campaign', icon:'🌟',  tier:'silver',   nameKey:'ach_cmp_25_name',      descKey:'ach_cmp_25_desc',      check:(s)=>(s.campaignCompleted||0)>=25},
  {id:'cmp_50',      sec:'campaign', icon:'🔥',  tier:'gold',     nameKey:'ach_cmp_50_name',      descKey:'ach_cmp_50_desc',      check:(s)=>(s.campaignCompleted||0)>=50},
  {id:'cmp_75',      sec:'campaign', icon:'💪',  tier:'platinum', nameKey:'ach_cmp_75_name',      descKey:'ach_cmp_75_desc',      check:(s)=>(s.campaignCompleted||0)>=75},
  {id:'cmp_100',     sec:'campaign', icon:'💎',  tier:'diamond',  nameKey:'ach_cmp_100_name',     descKey:'ach_cmp_100_desc',     check:(s)=>(s.campaignCompleted||0)>=100},
  {id:'cmp_boss_1',  sec:'campaign', icon:'👊',  tier:'silver',   nameKey:'ach_cmp_boss_1_name',  descKey:'ach_cmp_boss_1_desc',  check:(s)=>(s.campaignBossesBeaten||0)>=1},
  {id:'cmp_boss_5',  sec:'campaign', icon:'👑',  tier:'gold',     nameKey:'ach_cmp_boss_5_name',  descKey:'ach_cmp_boss_5_desc',  check:(s)=>(s.campaignBossesBeaten||0)>=5},
  {id:'cmp_boss_10', sec:'campaign', icon:'🏆',  tier:'platinum', nameKey:'ach_cmp_boss_10_name', descKey:'ach_cmp_boss_10_desc', check:(s)=>(s.campaignBossesBeaten||0)>=10},
  {id:'cmp_perfect_3', sec:'campaign', icon:'🎯', tier:'silver',  nameKey:'ach_cmp_perfect_3_name',  descKey:'ach_cmp_perfect_3_desc',  check:(s)=>(s.campaignPerfectLevels||0)>=3},
  {id:'cmp_perfect_10',sec:'campaign', icon:'✨', tier:'gold',    nameKey:'ach_cmp_perfect_10_name', descKey:'ach_cmp_perfect_10_desc', check:(s)=>(s.campaignPerfectLevels||0)>=10},
  {id:'cmp_perfect_25',sec:'campaign', icon:'🌠', tier:'platinum',nameKey:'ach_cmp_perfect_25_name', descKey:'ach_cmp_perfect_25_desc', check:(s)=>(s.campaignPerfectLevels||0)>=25},
];

// Earned achievements set (ids)
let earnedAchievements=new Set();
let achToastTimer=null;
let _pendingAchToast=null;

function _doShowAchToast(a){
  const el=document.getElementById('ach-toast');
  document.getElementById('ach-toast-icon').textContent=a.icon;
  document.getElementById('ach-toast-name').textContent=t(a.nameKey);
  el.classList.add('show');
  if(achToastTimer)clearTimeout(achToastTimer);
  achToastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}

function checkAchievements(silent = false){
  let newlyEarned=[];
  for(const a of ACHIEVEMENTS){
    if(earnedAchievements.has(a.id))continue;
    try{
      if(a.check(stats,hs,xp)){
        earnedAchievements.add(a.id);
        newlyEarned.push(a);
      }
    }catch(e){}
  }
  if(newlyEarned.length>0 && !silent){
    showAchToast(newlyEarned[newlyEarned.length-1]);
  }
}

function showAchToast(a){
  // Queue if XP toast is currently showing, otherwise fire immediately
  const xpEl=document.getElementById('xp-toast');
  if(xpEl&&xpEl.classList.contains('show')){
    _pendingAchToast=a;
  } else {
    _doShowAchToast(a);
  }
}

let _errToastTimer=null;
function showErrToast(msg){
  const el=document.getElementById('err-toast');
  if(!el)return;
  el.textContent=msg;
  el.classList.add('show');
  if(_errToastTimer)clearTimeout(_errToastTimer);
  _errToastTimer=setTimeout(()=>el.classList.remove('show'),3500);
}

function renderAchievements(){
  const el=document.getElementById('ach-content');
  if(!el)return;

  const sections=[
    {key:'general', label:'ach_sec_general'},
    {key:'lightning',label:'ach_sec_lightning'},
    {key:'speed',   label:'ach_sec_speed'},
    {key:'practice',label:'ach_sec_practice'},
    {key:'daily',    label:'ach_sec_daily'},
    {key:'campaign', label:'ach_sec_campaign'},
    {key:'mastery',  label:'ach_sec_mastery'},
  ];

  const tierOrder={bronze:1,silver:2,gold:3,platinum:4,diamond:5};
  const tierLabel={bronze:'ach_tier_bronze',silver:'ach_tier_silver',gold:'ach_tier_gold',platinum:'ach_tier_platinum',diamond:'ach_tier_diamond'};

  // Count medals by tier
  const medalCount={bronze:0,silver:0,gold:0,platinum:0,diamond:0};
  const medalTotal={bronze:0,silver:0,gold:0,platinum:0,diamond:0};
  ACHIEVEMENTS.forEach(a=>{
    medalTotal[a.tier]=(medalTotal[a.tier]||0)+1;
    if(earnedAchievements.has(a.id))medalCount[a.tier]=(medalCount[a.tier]||0)+1;
  });
  const medalColor={bronze:'#cd7f32',silver:'#9aa0a6',gold:'#f9ab00',platinum:'#47b3ff',diamond:'#e8ff47'};
  const medalRowEl=document.getElementById('ach-medal-row');
  if(medalRowEl){
    medalRowEl.innerHTML=['bronze','silver','gold','platinum','diamond'].map(tier=>`
      <div style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:4px 0;">
        <div style="width:22px;height:22px;border-radius:50%;background:${medalColor[tier]};box-shadow:0 0 8px ${medalColor[tier]}55;flex-shrink:0;"></div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:17px;line-height:1;color:${medalColor[tier]};">${medalCount[tier]||0}<span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);font-weight:400"> /${medalTotal[tier]}</span></div>
        <div style="font-family:'DM Mono',monospace;font-size:8px;color:var(--muted2);text-transform:uppercase;letter-spacing:.5px;text-align:center;">${t('ach_tier_'+tier)}</div>
      </div>`).join('');
  }

  let totalEarned=0,totalAll=ACHIEVEMENTS.length;
  ACHIEVEMENTS.forEach(a=>{if(earnedAchievements.has(a.id))totalEarned++;});

  // Update hero progress bar
  const pct=totalAll>0?Math.round(totalEarned/totalAll*100):0;
  document.getElementById('ach-bar-fill').style.width=pct+'%';
  document.getElementById('ach-progress-label').textContent=`${totalEarned} / ${totalAll}`;

  el.innerHTML=sections.map(sec=>{
    const achs=ACHIEVEMENTS.filter(a=>a.sec===sec.key)
      .sort((a,b)=>tierOrder[a.tier]-tierOrder[b.tier]);
    if(!achs.length)return'';
    return`<div class="ach-section-title">${t(sec.label)}</div>
    <div class="ach-list">
      ${achs.map(a=>{
        const earned=earnedAchievements.has(a.id);
        // Mini progress for numeric achievements (show current vs target)
        const prog=getAchProgress(a);
        return`<div class="ach-card ${earned?'unlocked':'locked'}">
          <div class="ach-badge">${earned?(a.id==='daily_streak_3'?'🔵':a.icon):'🔒'}</div>
          <div class="ach-info">
            <div class="ach-name">${t(a.nameKey)}</div>
            <div class="ach-desc">${t(a.descKey)}</div>
            <div class="ach-tier ${a.tier}">${t(tierLabel[a.tier])}</div>
          </div>
          <div class="ach-right">
            ${earned
              ?`<div class="ach-check">✅</div>`
              :`${prog!==null?`<div class="ach-prog-mini">${prog.cur}${prog.suffix||''} / ${prog.max}${prog.suffix||''}</div><div class="ach-mini-bar"><div class="ach-mini-bar-fill" style="width:${Math.min(100,Math.round(prog.cur/prog.max*100))}%"></div></div>`:''}
            `}
          </div>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

function getAchProgress(a){
  // Returns {cur, max} for achievements that have numeric progress, null otherwise
  const id=a.id;
  if(id==='answers_1')return{cur:stats.totalCorrect,max:30};
  if(id==='answers_2')return{cur:stats.totalCorrect,max:100};
  if(id==='answers_3')return{cur:stats.totalCorrect,max:250};
  if(id==='answers_4')return{cur:stats.totalCorrect,max:1000};
  if(id==='answers_5')return{cur:stats.totalCorrect,max:2500};
  if(id==='answers_6')return{cur:stats.totalCorrect,max:10000};
  if(id==='time_1')return{cur:Math.floor(stats.totalPlayTime/60),max:5};
  if(id==='time_2')return{cur:Math.floor(stats.totalPlayTime/60),max:30};
  if(id==='time_3')return{cur:Math.floor(stats.totalPlayTime/60),max:120};
  if(id==='time_4')return{cur:Math.floor(stats.totalPlayTime/60),max:1200};
  if(id==='time_5')return{cur:Math.floor(stats.totalPlayTime/60),max:3000};
  if(id==='accuracy_1'||id==='accuracy_2'||id==='accuracy_3'){
    // Two-phase progress: first reach min answers, then reach target accuracy
    const minAnswers={accuracy_1:50,accuracy_2:100,accuracy_3:200};
    const target={accuracy_1:80,accuracy_2:90,accuracy_3:95};
    const min=minAnswers[id];
    if(stats.totalAnswers<min){
      // Phase 1: show answer count progress toward minimum
      return{cur:stats.totalAnswers,max:min,suffix:' ans'};
    }
    // Phase 2: show accuracy % progress toward target
    const acc=stats.totalAnswers>0?Math.round(stats.totalCorrect/stats.totalAnswers*100):0;
    return{cur:acc,max:target[id],suffix:'%'};
  }
  if(id==='lightning_seq_1')return{cur:stats.longestCorrectSequence,max:5};
  if(id==='lightning_seq_2')return{cur:stats.longestCorrectSequence,max:10};
  if(id==='lightning_seq_3')return{cur:stats.longestCorrectSequenceMedHard||0,max:15};
  if(id==='lightning_seq_4')return{cur:stats.longestCorrectSequenceMedHard||0,max:20};
  if(id==='lightning_streak_1')return{cur:stats.longestLightningStreak,max:3};
  if(id==='lightning_streak_2')return{cur:stats.longestLightningStreak,max:10};
  if(id==='lightning_streak_3')return{cur:stats.longestLightningStreak,max:25};
  if(id==='lightning_games_1'||id==='lightning_games_2'||id==='lightning_games_3'){
    const total=['easy','medium','hard'].reduce((a,d)=>a+hs.lightning[d].plays,0);
    const req={lightning_games_1:1,lightning_games_2:10,lightning_games_3:50};
    return{cur:total,max:req[id]};
  }
  if(id==='lightning_score_1'||id==='lightning_score_2'||id==='lightning_score_3'||id==='lightning_score_4'){
    const best=Math.max(0,...['easy','medium','hard'].map(d=>hs.lightning[d].bestPrecision||0));
    const req={lightning_score_1:500,lightning_score_2:2000,lightning_score_3:5000,lightning_score_4:15000};
    return{cur:best,max:req[id]};
  }
  if(id==='speed_score_1')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:15};
  if(id==='speed_score_2')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:30};
  if(id==='speed_score_3')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:50};
  if(id==='speed_score_4')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:75};
  if(id==='speed_streak_1')return{cur:stats.longestSpeedStreak,max:10};
  if(id==='speed_streak_2')return{cur:stats.longestSpeedStreak,max:20};
  if(id==='speed_streak_3')return{cur:stats.longestSpeedStreak,max:40};
  if(id==='hard_1')return{cur:hs.speed.hard.plays,max:1};
  if(id==='hard_2')return{cur:hs.speed.hard.score,max:30};
  if(id==='practice_1')return{cur:stats.modeAnswers.practice||0,max:30};
  if(id==='practice_2')return{cur:stats.modeAnswers.practice||0,max:150};
  if(id==='practice_3')return{cur:stats.modeAnswers.practice||0,max:750};
  if(id==='practice_streak_1')return{cur:stats.longestPracticeStreak,max:5};
  if(id==='practice_streak_2')return{cur:stats.longestPracticeStreak,max:15};
  if(id==='practice_streak_3')return{cur:stats.longestPracticeStreak,max:30};
  if(id==='tips_1')return{cur:stats.tipSessions||0,max:1};
  if(id==='tips_2')return{cur:stats.tipSessions||0,max:5};
  if(id==='tips_3')return{cur:stats.tipSessions||0,max:10};
  if(id==='level_1')return{cur:xp.level,max:5};
  if(id==='level_2')return{cur:xp.level,max:10};
  if(id==='level_3')return{cur:xp.level,max:25};
  if(id==='level_4')return{cur:xp.level,max:50};
  if(id==='level_5')return{cur:xp.level,max:100};
  if(id==='level_6')return{cur:xp.level,max:1000};
  if(id==='cmp_1')return{cur:stats.campaignCompleted||0,max:1};
  if(id==='cmp_5')return{cur:stats.campaignCompleted||0,max:5};
  if(id==='cmp_10')return{cur:stats.campaignCompleted||0,max:10};
  if(id==='cmp_25')return{cur:stats.campaignCompleted||0,max:25};
  if(id==='cmp_50')return{cur:stats.campaignCompleted||0,max:50};
  if(id==='cmp_75')return{cur:stats.campaignCompleted||0,max:75};
  if(id==='cmp_100')return{cur:stats.campaignCompleted||0,max:100};
  if(id==='cmp_boss_1')return{cur:stats.campaignBossesBeaten||0,max:1};
  if(id==='cmp_boss_5')return{cur:stats.campaignBossesBeaten||0,max:5};
  if(id==='cmp_boss_10')return{cur:stats.campaignBossesBeaten||0,max:10};
  if(id==='cmp_perfect_3')return{cur:stats.campaignPerfectLevels||0,max:3};
  if(id==='cmp_perfect_10')return{cur:stats.campaignPerfectLevels||0,max:10};
  if(id==='cmp_perfect_25')return{cur:stats.campaignPerfectLevels||0,max:25};
  if(id==='daily_1')return{cur:stats.dailyCompleted||0,max:1};
  if(id==='daily_2')return{cur:stats.dailyCompleted||0,max:7};
  if(id==='daily_3')return{cur:stats.dailyCompleted||0,max:30};
  // Use live current streak so progress bar matches the badge
  const _liveStreak=getDailyStreak().count||0;
  if(id==='daily_streak_1')return{cur:_liveStreak,max:3};
  if(id==='daily_streak_2')return{cur:_liveStreak,max:7};
  if(id==='daily_streak_3')return{cur:_liveStreak,max:30};
  if(id==='daily_streak_4')return{cur:_liveStreak,max:365};
  return null;
}


