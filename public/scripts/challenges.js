activeChallengeId=null,activeChallengeMode='normal',challengeSeed=0,challengeRng=null,_myJustPlayedScore=null;

async function createChallenge(){
  if(!currentUser){openAuthModal();return;}
  const btn=document.getElementById('sr-challenge-btn');
  if(btn){btn.disabled=true;btn.textContent='...';}
  try{
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error:e1}=await sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:diff.speed,creator_score:speed.score,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    });
    if(e1){console.error('[Numfly] createChallenge insert error:',e1);showErrToast('Could not create challenge: '+e1.message);return;}
    const elapsedMs=speed.startedAt?Date.now()-speed.startedAt:0;
    const{data:dareRes,error:e2}=await withTimeout(sb.rpc('submit_dare_score',{p_challenge_id:code,p_score:speed.score,p_elapsed_ms:elapsedMs}));
    if(e2)console.warn('[Numfly] submit_dare_score error:',e2);
    if(dareRes?.score!=null)speed.score=dareRes.score;
    activeChallengeId=code;
    showChallengeResult(code,speed.score,null,null,true);
  }catch(e){
    console.error('[Numfly] createChallenge exception:',e);
    showErrToast('Could not create challenge. Please try again.');
  }finally{
    if(btn){btn.disabled=false;btn.setAttribute('data-i18n','challenge_friend');applyTranslations();}
  }
}
function showChallengeResult(code,yourScore,theirScore,theirName,isCreator){
  document.getElementById('cr-your-score').textContent=yourScore;
  document.getElementById('cr-your-name').textContent=currentProfile?.username||'You';
  document.getElementById('cr-their-score').textContent=theirScore!==null?theirScore:'—';
  document.getElementById('cr-their-name').textContent=theirName||'Friend';
  const youWin=theirScore!==null&&yourScore>theirScore;
  const theyWin=theirScore!==null&&theirScore>yourScore;
  document.getElementById('cr-you-box').className='challenge-score-box'+(youWin?' winner':'');
  document.getElementById('cr-them-box').className='challenge-score-box'+(theyWin?' winner':'');
  const opponentName=theirName||t('h2h_them')||'Opponent';
  let verdictText;
  if(theirScore===null){verdictText=t('challenge_waiting');}
  else if(youWin){verdictText=t('challenge_win');}
  else if(theyWin){verdictText=t('challenge_loss').replace('{name}',opponentName);}
  else{verdictText=t('challenge_tie');}
  document.getElementById('cr-verdict').textContent=verdictText;
  
  const shareEl=document.getElementById('cr-share-section');
  shareEl.style.display='none';
  showScreen('screen-challenge-result');
}
function copyChallengeLink(){
  const link=document.getElementById('cr-link').textContent;
  const btn=document.querySelector('.challenge-copy-btn');
  function onCopied(){
    if(btn){btn.textContent='Copied!';setTimeout(()=>btn.setAttribute('data-i18n','challenge_copy')||applyTranslations(),2000);}
  }
  if(navigator.clipboard&&window.isSecureContext){
    navigator.clipboard.writeText(link).then(onCopied).catch(()=>{
      try{const ta=document.createElement('textarea');ta.value=link;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);onCopied();}catch(e){}
    });
  } else {
    try{const ta=document.createElement('textarea');ta.value=link;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);onCopied();}catch(e){}
  }
}
async function handleChallengeLink(){
  const params=new URLSearchParams(window.location.search);
  const code=params.get('challenge');
  if(!code)return;
  const{data:ch}=await sb.from('challenges').select('*,profiles!creator_id(username)').eq('id',code).single();
  if(!ch||new Date(ch.expires_at)<new Date()){showErrToast('This challenge link has expired or is invalid.');return;}

  if (currentUser && currentUser.id === ch.creator_id) {
    window.history.replaceState({},'',window.location.pathname);
    if (ch.is_competition) {
      viewCompetition(code, ch.difficulty || 'easy');
    } else {
      let theirScore = null, theirName = null;
      const {data:oppRows} = await sb.from('challenge_attempts').select('score,player_id').eq('challenge_id',code).neq('player_id',currentUser.id).limit(1);
      if (oppRows && oppRows[0]) {
         theirScore = oppRows[0].score;
         const {data:oppProf} = await sb.from('profiles').select('username').eq('id',oppRows[0].player_id).maybeSingle();
         if (oppProf) theirName = oppProf.username;
      }
      showChallengeResult(code, ch.creator_score, theirScore, theirName, true);
    }
    return;
  }

  const _linkCode=code;
  const _linkSeed=ch.seed;
  const _linkDiff=ch.difficulty||'easy';
  const _linkDuration=ch.duration_seconds||120;
  const _linkIsComp=!!ch.is_competition;
  const _creatorId=ch.creator_id;

  window.history.replaceState({},'',window.location.pathname);
  
  if(_linkIsComp){
    const banner=document.createElement('div');
    banner.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';
    banner.innerHTML=`<div style="background:var(--surface);border:1px solid var(--orange);border-radius:16px;padding:28px;text-align:center;max-width:320px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--orange);letter-spacing:2px">⚔ COMPETITION</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);margin:8px 0 16px">${esc(ch.profiles?.username||'Someone')} invites you to compete!</div>
      <button class="btn btn-primary" onclick="if(!currentUser){openAuthModal();return;} if(currentUser.id==='${_creatorId}'){this.closest('div[style*=fixed]').remove();viewCompetition('${_linkCode}','${_linkDiff}');return;} this.closest('div[style*=fixed]').remove();acceptChallengeInvite('${_linkCode}','${_linkDiff}')">Accept ⚔</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="this.closest('div[style*=fixed]').remove()">Decline</button>
    </div>`;
    document.body.appendChild(banner);
  } else {
    const banner=document.createElement('div');
    banner.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';
    banner.innerHTML=`<div style="background:var(--surface);border:1px solid var(--orange);border-radius:16px;padding:28px;text-align:center;max-width:320px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--orange);letter-spacing:2px">⚔ CHALLENGE</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);margin:8px 0 16px">${esc(ch.profiles?.username||'Someone')} challenges you!</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--accent);margin-bottom:16px">${ch.creator_score!=null?t('dare_notif').replace('{n}',ch.creator_score):t('race_notif')}</div>
      <button class="btn btn-primary" onclick="if(!currentUser){openAuthModal();return;} if(currentUser.id==='${_creatorId}'){this.closest('div[style*=fixed]').remove();showErrToast('You cannot accept your own challenge.');return;} this.closest('div[style*=fixed]').remove();_commitChallengeLink('${_linkCode}',${_linkSeed},'${_linkDiff}',${_linkDuration})">Accept ⚔</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="this.closest('div[style*=fixed]').remove()">Decline</button>
    </div>`;
    document.body.appendChild(banner);
  }
}
function _commitChallengeLink(code,seed,difficulty,duration){
  activeChallengeId=code;
  challengeSeed=seed;
  challengeRng=seededRand(seed);
  diff.speed=difficulty;
  speed.remaining=duration;
  activeChallengeMode='challenge';
  startSpeedWithCountdown()
}
function startSpeedWithCountdown() {
  try{
    if(activeChallengeId&&localStorage.getItem('numfly_comp_resume_'+activeChallengeId)){
      const saved=localStorage.getItem('numfly_comp_resume_'+activeChallengeId);
      const s=saved?JSON.parse(saved):null;
      if(challengeSeed)challengeRng=seededRand(challengeSeed);
      if(s&&typeof s.questionsAnswered==='number'&&s.questionsAnswered>0){
        const _ops=['add','sub','mul','div','pct'];
        const _lvl=diff.speed||_challengeDiff||'easy';
        for(let i=0;i<s.questionsAnswered;i++){
          const _op=_ops[Math.floor(challengeRng()*_ops.length)];
          genOneProblemSeeded(challengeRng,_lvl,_op);
        }
      }
      startSpeed();
      if(s&&typeof s.score==='number'){speed.score=s.score; const scoreEl = document.getElementById('s-score'); if(scoreEl) scoreEl.textContent=speed.score;}
      if(s&&typeof s.remaining==='number')speed.remaining=s.remaining;
      localStorage.removeItem('numfly_comp_resume_'+activeChallengeId);
      return;
    }
  }catch(e){}

  const existingOverlay = document.getElementById('race-countdown-overlay');
  if (existingOverlay) existingOverlay.remove();
  if (speed.countdownTimer) {
    clearInterval(speed.countdownTimer);
    speed.countdownTimer = null;
  }

  const overlay=document.createElement('div');
  overlay.id='race-countdown-overlay';
  overlay.style.cssText='position:fixed;inset:0;background:var(--bg,#0d0d0d);z-index:9999;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML=`<div style="text-align:center">
    <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px">⚔ ${typeof t==='function'?t('race_title'):'Challenge'}</div>
    <div id="race-countdown-num" style="font-family:'Bebas Neue',sans-serif;font-size:140px;color:var(--accent);line-height:1;letter-spacing:2px">3</div>
  </div>`;
  document.body.appendChild(overlay);
  
  if (typeof showScreen === 'function') showScreen('screen-speed-game');
  
  if(speed.timer) clearInterval(speed.timer);
  const _cdDur = speed.remaining || 120;
  speed.score=0; speed.remaining=_cdDur; speed.wrongStreak=0; speed.waiting=false;
  speed.opBag=[]; speed.originalDur=_cdDur; 
  if (typeof stats !== 'undefined') stats.currentSpeedStreak=0;
  if (typeof recentQs !== 'undefined') recentQs.speed=new Set();
  
  const scoreEl = document.getElementById('s-score');
  if (scoreEl) scoreEl.textContent=0;
  
  try {
    const hsEl = document.getElementById('s-hs-display');
    if (hsEl && typeof getSpeedDurHS === 'function') {
        hsEl.textContent = getSpeedDurHS((typeof diff !== 'undefined' ? diff.speed : 'easy'), _cdDur);
    }
  } catch(e) { console.warn(e); }
  
  const fbEl = document.getElementById('s-feedback');
  if (fbEl) fbEl.textContent='';
  
  const _timerElCD=document.getElementById('s-timer');
  if(_timerElCD){
    const _cm=Math.floor(_cdDur/60), _cs=String(_cdDur%60).padStart(2,'0');
    _timerElCD.textContent=`${_cm}:${_cs}`;
    _timerElCD.className='hud-value';
  }
  
  const _lbl=document.getElementById('speed-back-label');
  if(_lbl){
    let backText = 'Back';
    if (typeof t === 'function') {
        backText = (activeChallengeMode==='challenge' && _activeCompId) ? (t('comp_group_title')||'Competition') : (t('back')||'Back');
    }
    _lbl.textContent = backText;
  }
  
 const ansEl=document.getElementById('s-answer');
  if(ansEl){ansEl.disabled=true;ansEl.blur();}
  
  let count=3;

  speed.countdownTimer=setInterval(()=>{
    const liveOverlay = document.getElementById('race-countdown-overlay');
    const liveNum = document.getElementById('race-countdown-num');

    // Player navigated away — abort cleanly
    if (!liveOverlay) {
      clearInterval(speed.countdownTimer);
      speed.countdownTimer = null;
      return;
    }

    if(count<=0){
      clearInterval(speed.countdownTimer);
      speed.countdownTimer=null;
      liveOverlay.remove();

      try {
        if (typeof nextSpeedQ === 'function') nextSpeedQ();
      } catch(e) { console.error("nextSpeedQ crash", e); }

      speed.startedAt=Date.now();

      speed.timer=setInterval(()=>{
        speed.remaining--;

        try {
          if (typeof stats !== 'undefined') {
            stats.totalPlayTime = (stats.totalPlayTime || 0) + 1;
            if (!stats.modePlayTime) stats.modePlayTime = {};
            stats.modePlayTime.speed = (stats.modePlayTime.speed || 0) + 1;
          }
        } catch(e) {}

        const m=Math.floor(speed.remaining/60), s=String(speed.remaining%60).padStart(2,'0');
        const el=document.getElementById('s-timer');
        if(el){el.textContent=`${m}:${s}`;el.className='hud-value'+(speed.remaining<=20?' danger':'');}

        if(speed.remaining<=0){
          if (typeof endSpeed === 'function') endSpeed(false);
          else clearInterval(speed.timer);
        }
      },1000);

      const liveAns=document.getElementById('s-answer');
      if(liveAns){liveAns.disabled=false;liveAns.style.opacity='1';liveAns.focus();}
    } else {
      if(liveNum){
        liveNum.textContent=count;
        liveNum.style.transition='transform .15s';
        liveNum.style.transform='scale(1.2)';
        setTimeout(()=>{ const n=document.getElementById('race-countdown-num'); if(n)n.style.transform='scale(1)'; },150);
      }
      count--;
    }
  },1000);
}

const _nextSpeedQBase=function(){
  const op=pickFromBag(speed.opBag,['add','sub','mul','div','pct']);
  const p=genProblem(diff.speed,[op],'speed');
  speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
  document.getElementById('s-question').textContent=p.q;
  document.getElementById('s-op-type').textContent=p.type;
  document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
  document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
  speed.answered=false;speed.waiting=false;
};
const _origNextSpeedQ=nextSpeedQ;
nextSpeedQ=function(){
  if(activeChallengeMode==='challenge'&&challengeRng){
    try {
      const _ops=['add','sub','mul','div','pct'];
      const op=_ops[Math.floor(challengeRng()*_ops.length)];
      const p=genOneProblemSeeded(challengeRng,diff.speed,op);
      if (p) {
        speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
        document.getElementById('s-question').textContent=p.q;
        document.getElementById('s-op-type').textContent=t('op_type_'+p.op);
        document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
        document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
        speed.answered=false;speed.waiting=false;
      } else {
        _origNextSpeedQ();
      }
    } catch(e) {
      console.error("Patched nextSpeedQ error:", e);
      _origNextSpeedQ();
    }
  } else _origNextSpeedQ();
};

const _origEndSpeed=endSpeed;
endSpeed=function(goMenu){
  if(activeChallengeMode==='challenge'&&!goMenu&&currentUser&&activeChallengeId){
    activeChallengeMode='normal';
    if(speed.timer){clearInterval(speed.timer);speed.timer=null;}
    const d=diff.speed;hs.speed[d].plays++;
    stats.speedScoreHistory.push(speed.score);
    if(stats.speedScoreHistory.length>20)stats.speedScoreHistory.shift();
    
    setSpeedDurHS(d, speed.originalDur || 120, speed.score);

    checkAchievements();flushPendingLevelUps();scheduleSync();
    
    try{localStorage.removeItem('numfly_comp_resume_'+activeChallengeId);}catch(e){}
    const _elapsedMs=speed.startedAt?Date.now()-speed.startedAt:0;
    
    const saveScore = async () => {
      const _elapsedSec = _elapsedMs / 1000;
      const _maxByTime = Math.ceil(Math.max(_elapsedSec, 1) / 0.9);
      const _cappedScore = Math.max(0, Math.min(speed.score, _maxByTime));
      
      await sb.from('challenge_attempts').update({ score: _cappedScore, invited: false }).eq('challenge_id', activeChallengeId).eq('player_id', currentUser.id);
      
      const rpcRes = await sb.rpc('submit_challenge_score', { p_challenge_id: activeChallengeId, p_score: _cappedScore, p_elapsed_ms: _elapsedMs });
      if (rpcRes?.data?.score != null) {
        speed.score = rpcRes.data.score;
      } else {
        speed.score = _cappedScore;
      }
    };

    saveScore().then(async () => {
      const{data:ch}=await sb.from('challenges').select('creator_score,creator_id,profiles!creator_id(username),is_competition,seed,difficulty,duration_seconds').eq('id',activeChallengeId).single();
      if(ch&&ch.is_competition){
        challengeSeed=ch.seed;
        _challengeDiff=ch.difficulty||_challengeDiff||'easy';
        diff.speed=_challengeDiff;
        const _dur=ch.duration_seconds||120;
        _myJustPlayedScore=speed.score;
        await loadCompetitionScreen(activeChallengeId,ch.seed,speed.score,false,_challengeDiff,_dur);
        const pb=document.getElementById('comp-play-btn');
        if(pb){pb.style.display='none';}
        checkPendingRequests();
      } else if(ch){
        let theirScore=null,theirName=null;
        const{data:oppRows}=await sb.from('challenge_attempts')
          .select('score,player_id').eq('challenge_id',activeChallengeId)
          .neq('player_id',currentUser.id).limit(1);
        const oppAttempt=(oppRows||[])[0]||null; 
        if(oppAttempt){
          theirScore=oppAttempt.score;
          const{data:oppProf}=await sb.from('profiles').select('username').eq('id',oppAttempt.player_id).maybeSingle();
          if(oppProf)theirName=oppProf.username;
        }
        showChallengeResult(activeChallengeId,speed.score,theirScore,theirName||ch.profiles?.username,currentUser.id===ch.creator_id);
      }else{document.getElementById('sr-score').textContent=speed.score;showScreen('screen-speed-result');}
    });
    return;
  }
  _origEndSpeed(goMenu);
  activeChallengeMode='normal';
  scheduleSync();
  saveOpStats();
  saveGuestState();
};
const _origCheckAch=checkAchievements;
checkAchievements=function(silent = false){_origCheckAch(silent);scheduleSync();};