// ══════════════════════════════════════════════════════════════════════════════
// LIGHTNING
// ══════════════════════════════════════════════════════════════════════════════
function startLightning(){
  const countRaw=parseInt(document.getElementById('l-count').value);
  const intervalRaw=parseInt(document.getElementById('l-interval').value);
  if(isNaN(countRaw)||countRaw<2||countRaw>20){
    document.getElementById('l-feedback').textContent=t('err_count_range');
    document.getElementById('l-feedback').style.color='var(--error)';
    return;
  }
  if(isNaN(intervalRaw)||intervalRaw<1||intervalRaw>20){
    document.getElementById('l-feedback').textContent=t('err_interval_range');
    document.getElementById('l-feedback').style.color='var(--error)';
    return;
  }
  const count=countRaw;
  const interval=intervalRaw;
  lightning.numbers=genLightningNumbers(count,diff.lightning);
  lightning.sum=lightning.numbers.reduce((a,b)=>a+b,0);
  lightning.count=count;lightning.interval=interval;lightning.abandoned=false;
  showScreen('screen-lightning-game');
  document.getElementById('l-score').textContent=lightning.score||0;
  document.getElementById('l-cumulative-display').textContent=fmtN(lightning.cumulativeScore||0);
  document.getElementById('l-answer-section').style.display='none';
  document.getElementById('l-feedback').textContent='';
  runLightningSequence();
}
function abandonLightning(){lightning.abandoned=true;lightning.score=0;lightning.sessionScore=0;flushPendingLevelUps();showScreen('screen-menu');}
function runLightningSequence(){
  const{numbers,count,interval}=lightning;
  const display=document.getElementById('l-display');
  const progBar=document.getElementById('l-progress-bar');
  const progText=document.getElementById('l-progress');
  function showNumber(idx){
    if(lightning.abandoned)return;
    if(idx>=count){
      display.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:16px;color:var(--muted);text-align:center;padding:40px 0;">${t('what_was_sum')}</div>`;
      document.getElementById('l-answer-section').style.display='block';
      const inp=document.getElementById('l-answer');inp.value='';inp.focus();return;
    }
    progText.textContent=`${idx+1}/${count}`;
    progBar.style.width=`${((idx+1)/count)*100}%`;
    display.innerHTML=`<div class="lightning-number">${numbers[idx]}</div>`;
    setTimeout(()=>{if(lightning.abandoned)return;display.innerHTML=`<div class="lightning-blank"></div>`;setTimeout(()=>showNumber(idx+1),200);},interval*1000);
  }
  showNumber(0);
}
function checkLightningAnswer(){
  const val=document.getElementById('l-answer').value;
  const correct=lightning.sum;
  const isRight=checkAns(val,correct);
  const d=diff.lightning;
  hs.lightning[d].plays++;
  // Track lightning play time (count * interval seconds)
  const secsPlayed=lightning.count*lightning.interval;
  stats.totalPlayTime+=secsPlayed;
  stats.modePlayTime.lightning=(stats.modePlayTime.lightning||0)+secsPlayed;
  // Record answer for stats
  recordAnswer('add',isRight,'lightning',d);
  // Always compute the precision score for this round (used for display even on wrong)
  const precisionScore=calcLightningPrecisionScore(lightning.count,lightning.interval,d);
  const penaltyScore=Math.round(precisionScore*0.4);
  if(isRight){
    sfxCorrect();
    lightning.score++;

    if(lightning.score>stats.longestLightningStreak)stats.longestLightningStreak=lightning.score;
    lightning.sessionScore=precisionScore;
    lightning.cumulativeScore=Math.max(0,(lightning.cumulativeScore||0)+precisionScore);

    if(lightning.score>hs.lightning[d].score)hs.lightning[d].score=lightning.score;
    if(lightning.count>stats.longestCorrectSequence)stats.longestCorrectSequence=lightning.count;
    
    if(d==='medium' && lightning.count>(stats.longestLightningSeq_medium||0)) {
        stats.longestLightningSeq_medium=lightning.count;
    }
    if(d==='hard' && lightning.count>(stats.longestLightningSeq_hard||0)) {
        stats.longestLightningSeq_hard=lightning.count;
    }

    const xpEarned=Math.max(1,Math.round(precisionScore*(GAME_CONFIG.XP_EVENT_MULTIPLIER||1)/3));
    gainXP(xpEarned);
  }else{
    sfxWrong();

    stats.lightningStreakHistory.push(lightning.score);
    if(stats.lightningStreakHistory.length>50)stats.lightningStreakHistory.shift();
    lightning.score=0;
    lightning.sessionScore=-penaltyScore;
    lightning.cumulativeScore=Math.max(0,(lightning.cumulativeScore||0)-penaltyScore);
  }
  // Update best record if cumulative score beats it
  if(lightning.cumulativeScore>(hs.lightning[d].bestPrecision||0)){
    hs.lightning[d].bestPrecision=lightning.cumulativeScore;
  }
  document.getElementById('l-score').textContent=lightning.score||0;
  document.getElementById('l-cumulative-display').textContent=fmtN(lightning.cumulativeScore||0);
  document.getElementById('lr-emoji').textContent=isRight?'🎉':'😔';
  document.getElementById('lr-title').textContent=isRight?t('correct'):t('not_quite');
  // Show precision score earned/lost this round + session total
  const penaltyDisplay=isRight?null:Math.round(precisionScore*0.4);
  document.getElementById('lr-score').textContent=isRight?`+${fmtN(precisionScore)}`:`-${fmtN(penaltyDisplay)}`;
  document.getElementById('lr-detail').textContent=isRight
    ?`${t('lightning_round_score')}: ${fmtN(precisionScore)} | ${t('lightning_total_score')}: ${fmtN(lightning.cumulativeScore||0)}`
    :`${t('answer_was')} ${correct} | ${t('lightning_total_score')}: ${fmtN(lightning.cumulativeScore||0)}`;
  showScreen('screen-lightning-result');
  resultScreenShownAt=Date.now();
  checkAchievements();
  flushPendingLevelUps();
  saveOpStats();
  saveGuestState();
}
function lightningKeepGoing(){startLightning();}
const lAns = document.getElementById('l-answer');
if (lAns) lAns.addEventListener('keydown', e => { if(e.key==='Enter') checkLightningAnswer(); });

