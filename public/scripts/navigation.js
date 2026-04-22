// ══════════════════════════════════════════════════════════════════════════════
// Navigation
// ══════════════════════════════════════════════════════════════════════════════
let currentStatsFilter='all';
let currentDiffFilter='all'; // 'all'|'easy'|'medium'|'hard' — for accuracy section
function clearGameTimers(){
  if(speed&&speed.timer){clearInterval(speed.timer);speed.timer=null;}
  if(speed&&speed.countdownTimer){clearInterval(speed.countdownTimer);speed.countdownTimer=null;}
  if(practice&&practice.timer){clearInterval(practice.timer);practice.timer=null;}
  if(dailyState&&dailyState.timer){clearInterval(dailyState.timer);dailyState.timer=null;}
  if(dailyState&&dailyState.playTimeTimer){clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;}
  if(dailyState&&dailyState.countdownTimer){clearInterval(dailyState.countdownTimer);dailyState.countdownTimer=null;}
  if(campaignState&&campaignState.timer){clearInterval(campaignState.timer);campaignState.timer=null;}
  if(campaignState&&campaignState.playTimeTimer){clearInterval(campaignState.playTimeTimer);campaignState.playTimeTimer=null;}
  if(campaignState&&campaignState.questionTimer){cancelAnimationFrame(campaignState.questionTimer);campaignState.questionTimer=null;}
}
function showScreen(id){
  const targetEl = document.getElementById(id);
  if (!targetEl) {
    const routes = {
      'screen-menu': '/',
      'screen-friends': '/friends',
      'screen-leaderboard': '/leaderboard',
      'screen-stats': '/stats',
      'screen-tips': '/tips',
      'screen-achievements': '/achievements'
    };
    if (routes[id]) {
      const targetUrl = typeof getLocalizedUrl === 'function' ? getLocalizedUrl(routes[id]) : routes[id];
      // Forceer een 'klik' zodat Astro View Transitions de animatie oppakt
      const a = document.createElement('a');
      a.href = targetUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
  }
  
  // Clear game timers ...
  const _gameScreens=['screen-speed-game','screen-practice-game','screen-lightning-game','screen-daily-game','screen-campaign-game'];
  const _curId=document.querySelector('.screen.active')?.id;
  if(_curId&&_gameScreens.includes(_curId)&&!_gameScreens.includes(id)){clearGameTimers();}
  
  const cur=document.querySelector('.screen.active')?.id;
  const leavingLightning=cur&&(cur==='screen-lightning-game'||cur==='screen-lightning-setup'||cur==='screen-lightning-result');
  const goingToLightning=id==='screen-lightning-game'||id==='screen-lightning-setup'||id==='screen-lightning-result';
  if(leavingLightning&&!goingToLightning){
    if(lightning)lightning.abandoned=true;
    if(id==='screen-menu'){lightning.score=0;lightning.sessionScore=0;}
  }
  
  const PROTECTED=['screen-friends','screen-leaderboard','screen-competition','screen-group-comp'];
  if(PROTECTED.includes(id)&&!currentUser){
    if(typeof openAuthModal==='function')openAuthModal('login');
    return;
  }
  
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  document.body.classList.toggle('on-menu', id==='screen-menu');
  
  applyTranslations();
  if(id==='screen-menu'){renderHSPanel();renderXPPanel();updateDailyCard();}
  if(id==='screen-stats') renderStatsContent();
  if(id!=='screen-friends'){
    const sr=document.getElementById('friend-search-result');
    if(sr)sr.innerHTML='';
    const si=document.getElementById('friend-search-input');
    if(si)si.value='';
  }
  if(id==='screen-friends'){loadFriends();startFriendPoller();}
  else{stopFriendPoller();}
  if(id==='screen-tips'){renderTipsFilterBtns();renderTipsList();}
  if(id==='screen-achievements') renderAchievements();
  if(id==='screen-leaderboard') { loadLeaderboard(_lbKey || 'xp'); }
  
  const scrollable=['screen-tips','screen-achievements'];
  if(scrollable.includes(id)){attachScrollTopListener();}
  else{detachScrollTopListener();}
  if(id==='screen-privacy'){renderPrivacy();requestAnimationFrame(()=>{window.scrollTo(0,0);document.getElementById('screen-privacy').scrollTop=0;});}
}

function showTips(){
  showScreen('screen-tips');
}

