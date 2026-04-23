function speedDurKey(d,durSecs){
  const snap=durSecs<=35?30:durSecs<=70?60:120;
  return(d||diff.speed)+'_'+snap;
}
function getSpeedDurHS(d,durSecs){
  const k=speedDurKey(d,durSecs);
  if (hs.speedDur[k] !== undefined) return hs.speedDur[k];
  if (durSecs === 120) return hs.speed[d]?.score || 0;
  return 0;
}
function setSpeedDurHS(d,durSecs,score){
  const k=speedDurKey(d,durSecs);
  if(hs.speedDur[k]===undefined||score>hs.speedDur[k])hs.speedDur[k]=score;
}
function startSpeed(){
  if(speed.timer)clearInterval(speed.timer);
  const _dur = (activeChallengeMode === 'normal') ? 120 : (speed.remaining || 120);
  speed.score=0;speed.remaining=_dur;speed.wrongStreak=0;stats.currentSpeedStreak=0;speed.waiting=false;
  speed.startedAt=Date.now();
  speed.originalDur=_dur;
  speed.opBag=[];
  speed.gameSeed=Date.now()%0xFFFFFF;
  recentQs.speed=new Set();
  document.getElementById('s-score').textContent=0;
  document.getElementById('s-hs-display').textContent=activeChallengeMode==='challenge'?0:getSpeedDurHS(diff.speed,_dur);
  document.getElementById('s-feedback').textContent='';
  const _timerEl=document.getElementById('s-timer');
  if(_timerEl){const _m=Math.floor(_dur/60),_s=String(_dur%60).padStart(2,'0');_timerEl.textContent=`${_m}:${_s}`;_timerEl.className='hud-value';}
  showScreen('screen-speed-game');nextSpeedQ();
  const _lbl=document.getElementById('speed-back-label');
  if(_lbl)_lbl.textContent=(activeChallengeMode==='challenge'&&_activeCompId)?t('comp_group_title')||'Competition':t('main_menu');
  speed.timer=setInterval(()=>{
    speed.remaining--;stats.totalPlayTime++;stats.modePlayTime.speed=(stats.modePlayTime.speed||0)+1;
    if(speed.remaining%30===0)try{localStorage.setItem('numfly_op_stats',JSON.stringify({opCorrect:stats.opCorrect,opWrong:stats.opWrong,modeOpCorrect:stats.modeOpCorrect,modeOpWrong:stats.modeOpWrong,diffOpCorrect:stats.diffOpCorrect,diffOpWrong:stats.diffOpWrong,modeAnswers:stats.modeAnswers,modeCorrect:stats.modeCorrect,modePlayTime:stats.modePlayTime,longestLightningStreak:stats.longestLightningStreak||0,longestCorrectSequence:stats.longestCorrectSequence||0,longestSpeedStreak:stats.longestSpeedStreak||0,longestPracticeStreak:stats.longestPracticeStreak||0,speedScoreHistory:stats.speedScoreHistory||[],lightningStreakHistory:stats.lightningStreakHistory||[],totalWrong:stats.totalWrong||0,tipSessions:stats.tipSessions||0,dailyCompleted:stats.dailyCompleted||0,dailyBestStreak:stats.dailyBestStreak||0,dailyBestTime:stats.dailyBestTime||null,dailyWorstTime:stats.dailyWorstTime||null,hsLightningPlays:{easy:hs.lightning.easy.plays||0,medium:hs.lightning.medium.plays||0,hard:hs.lightning.hard.plays||0},hsSpeedPlays:{easy:hs.speed.easy.plays||0,medium:hs.speed.medium.plays||0,hard:hs.speed.hard.plays||0}}));}catch(e){}
    const m=Math.floor(speed.remaining/60),s=String(speed.remaining%60).padStart(2,'0');
    const el=document.getElementById('s-timer');
    el.textContent=`${m}:${s}`;
    el.className='hud-value'+(speed.remaining<=20?' danger':'');
    if(speed.remaining<=0)endSpeed(false);
  },1000);
}
function nextSpeedQ(){
  let p;
  if(activeChallengeMode==='challenge'&&challengeRng){
    const ops=['add','sub','mul','div','pct'];
    const op=ops[Math.floor(challengeRng()*ops.length)];
    p=genOneProblemSeeded(challengeRng,diff.speed,op);
  } else {
    const op=pickFromBag(speed.opBag,['add','sub','mul','div','pct']);
    p=genProblem(diff.speed,[op],'speed');
  }
  speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
  document.getElementById('s-question').textContent=p.q;
  document.getElementById('s-op-type').textContent=p.type;
  document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
  document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
  speed.answered=false;speed.waiting=false;
}
function genOneProblemSeeded(rng,level,op){
  const ri=(lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
  const r=RANGES[level]||RANGES.easy;
  if(op==='add'){const[lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);return{q:`${a} + ${b}`,ans:a+b,type:t('op_type_add'),op:'add'};}
  if(op==='sub'){const[lo,hi]=r.sub;let a,b,attempts2=0;do{a=ri(lo,hi);b=ri(lo,hi);if(a<b){const tmp=a;a=b;b=tmp;}attempts2++;}while(a===b&&attempts2<30);if(a===b){a=hi;b=lo;}return{q:`${a} − ${b}`,ans:a-b,type:t('op_type_sub'),op:'sub'};}
  if(op==='mul'){const[lo,hi]=r.mul,a=ri(lo,hi);const bMin=level==='easy'?2:level==='medium'?3:6;const bMax=level==='easy'?9:level==='medium'?12:15;const b=ri(bMin,bMax);return{q:`${a} × ${b}`,ans:a*b,type:t('op_type_mul'),op:'mul'};}
  if(op==='div'){const b=ri(r.divB[0],r.divB[1]),q=ri(r.divQ[0],r.divQ[1]),a=b*q;return{q:`${a} ÷ ${b}`,ans:q,type:t('op_type_div'),op:'div'};}
  const bases=level==='hard'?PCT_BASES_HARD:(PCT_BASES[level]||PCT_BASES.easy);
  for(let i=0;i<50;i++){const p=PCT_NICE[Math.floor(rng()*PCT_NICE.length)],base=bases[Math.floor(rng()*bases.length)],ans=p*base/100;if(Number.isInteger(ans)&&ans>0)return{q:`${p}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};}
  return{q:`10% of 50`,ans:5,type:t('op_type_pct'),op:'pct'};
}
function checkSpeedAnswer(){
  if(speed.remaining<=0)return;
  if(speed.waiting)return;
  if(speed.answered)return;
  const val=document.getElementById('s-answer').value;
  if(!val.trim())return;
  const fb=document.getElementById('s-feedback');
  const isRight=checkAns(val,speed.ans);
  const isFirstAttempt=speed.wrongStreak===0;
  
  if(isFirstAttempt){
    recordAnswer(speed.currentOp,isRight,'speed',diff.speed);
  }
  
  if(isRight){
    sfxCorrect();
    speed.score++;stats.currentSpeedStreak++;
    if(stats.currentSpeedStreak>stats.longestSpeedStreak)stats.longestSpeedStreak=stats.currentSpeedStreak;
    document.getElementById('s-score').textContent=fmtN(speed.score);
    const d=diff.speed;
    
    setSpeedDurHS(d, speed.originalDur || 120, speed.score);
    document.getElementById('s-hs-display').textContent=getSpeedDurHS(d, speed.originalDur || 120);

    if(activeChallengeMode!=='challenge'){
      if(speed.score>hs.speed[d].score){hs.speed[d].score=speed.score;}
    }
    
    fb.textContent=t('speed_correct');fb.className='feedback ok';
    speed.answered=true;
    speed.waiting=true;
    setTimeout(nextSpeedQ,350);
  }else{
    sfxWrong();
    stats.currentSpeedStreak=0;speed.wrongStreak++;
    document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
    fb.textContent=speed.wrongStreak>=3?`${t('speed_hint')} ${Number.isInteger(speed.ans)?speed.ans:speed.ans.toFixed(2)}`:t('speed_wrong');
    fb.className='feedback bad';
  }
}
function _validateScore(score,startedAt,durationSec){
  if(!startedAt)return true;
  const elapsed=(Date.now()-startedAt)/1000;
  const maxPossible=Math.ceil(Math.min(elapsed,durationSec)/0.9);
  if(score>maxPossible){
    console.warn(`[Numfly] Score ${score} rejected — only ${elapsed.toFixed(1)}s elapsed, max possible ${maxPossible}`);
    return false;
  }
  return true;
}
function endSpeed(goMenu){
  if(speed.timer){clearInterval(speed.timer);speed.timer=null;}
  if(goMenu){
    if(activeChallengeMode==='challenge'&&activeChallengeId){
      try{
        localStorage.setItem('numfly_comp_resume_'+activeChallengeId,JSON.stringify({
          score:speed.score,remaining:speed.remaining,
          questionsAnswered:speed.score+(speed.wrongStreak||0)
        }));
      }catch(e){}
    }
    activeChallengeMode='normal';
    checkAchievements();
    if(currentUser)scheduleSync();
    saveOpStats();
    saveGuestState();
    showScreen('screen-menu');
    return;
  }
  const d=diff.speed;hs.speed[d].plays++;
  stats.speedScoreHistory.push(speed.score);
  if(stats.speedScoreHistory.length>20)stats.speedScoreHistory.shift();
  setSpeedDurHS(d,speed.originalDur||120,speed.score);
  document.getElementById('sr-score').textContent=fmtN(speed.score);
  document.getElementById('sr-detail').textContent=`${t('highscore_label')}: ${fmtN(getSpeedDurHS(d,speed.originalDur||120))}`;
  showScreen('screen-speed-result');
  resultScreenShownAt=Date.now();
  checkAchievements();
  flushPendingLevelUps();
}
const sAns = document.getElementById('s-answer');
if (sAns) sAns.addEventListener('keydown', e => { if(e.key==='Enter') checkSpeedAnswer(); });