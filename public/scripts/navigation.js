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
  
  // ─── ASTRO MULTI-PAGE FIX ──────────────────────────────
  // If the target screen doesn't exist on this page, redirect to home!
  if (!targetEl) {
    const path = window.location.pathname;
    const isHome = path === '/' || path === '/nl' || path === '/nl/' || path === '/es' || path === '/es/';
    
    if (!isHome) {
      console.warn(`[Numfly] Screen '${id}' not found on this page. Redirecting to game board...`);
      // Use your existing i18n logic to stay in the right language
      let url = typeof window.getLocalizedUrl === 'function' ? window.getLocalizedUrl('/') : '/';
      
      // If they accepted a challenge, attach it to the URL so it auto-starts!
      if (typeof activeChallengeId !== 'undefined' && activeChallengeId) {
        url += '?challenge=' + activeChallengeId;
      }
      window.location.href = url;
    } else {
      console.error(`[Numfly] FATAL: Screen '${id}' is missing from the home page HTML!`);
    }
    return;
  }
  // ────────────────────────────────────────────────────────

  const PROTECTED=['screen-stats','screen-friends','screen-1v1','screen-achievements','screen-competition','screen-group-comp'];
  if(PROTECTED.includes(id)&&!currentUser){
    if(typeof openAuthModal==='function')openAuthModal('login');
    return;
  }
  
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  targetEl.classList.add('active');
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
  if(id==='screen-leaderboard') { 
    if(typeof setLbScope === 'function') setLbScope(_lbScope); 
    else loadLeaderboard(_lbKey || 'xp'); 
  }
  
  const scrollable=['screen-tips','screen-stats','screen-achievements','screen-leaderboard','screen-friends','screen-1v1'];
  if(scrollable.includes(id)){
    setTimeout(()=>{
      const c=targetEl.querySelector('.content-container')||targetEl;
      c.scrollTop=0;
    },10);
  }
}