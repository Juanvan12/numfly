// ══════════════════════════════════════════════════════════════════════════════
// Navigation
// ══════════════════════════════════════════════════════════════════════════════
let currentStatsFilter='all';
let currentDiffFilter='all'; // 'all'|'easy'|'medium'|'hard' — for accuracy section

function clearGameTimers(){
  // Upgrade: Using 'typeof' and '?.' safely checks for variables even if game scripts aren't loaded on this specific Astro page.
  if(typeof speed !== 'undefined' && speed?.timer){clearInterval(speed.timer);speed.timer=null;}
  if(typeof speed !== 'undefined' && speed?.countdownTimer){clearInterval(speed.countdownTimer);speed.countdownTimer=null;}
  if(typeof practice !== 'undefined' && practice?.timer){clearInterval(practice.timer);practice.timer=null;}
  if(typeof dailyState !== 'undefined' && dailyState?.timer){clearInterval(dailyState.timer);dailyState.timer=null;}
  if(typeof dailyState !== 'undefined' && dailyState?.playTimeTimer){clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;}
  if(typeof dailyState !== 'undefined' && dailyState?.countdownTimer){clearInterval(dailyState.countdownTimer);dailyState.countdownTimer=null;}
  if(typeof campaignState !== 'undefined' && campaignState?.timer){clearInterval(campaignState.timer);campaignState.timer=null;}
  if(typeof campaignState !== 'undefined' && campaignState?.playTimeTimer){clearInterval(campaignState.playTimeTimer);campaignState.playTimeTimer=null;}
  if(typeof campaignState !== 'undefined' && campaignState?.questionTimer){cancelAnimationFrame(campaignState.questionTimer);campaignState.questionTimer=null;}
}

function showScreen(id){
  const targetEl = document.getElementById(id);
  
  // ─── ASTRO MULTI-PAGE FIX ──────────────────────────────
  if (!targetEl) {
    const path = window.location.pathname;
    const isHome = ['/', '/nl', '/nl/', '/es', '/es/', '/daily', '/1v1', '/speed', '/practice', '/lightning', '/campaign'].some(p => path === p || path.startsWith('/nl/') || path.startsWith('/es/'));
    
    if (!isHome) {
      const isChallenge = typeof activeChallengeId !== 'undefined' && activeChallengeId;
      const dailyScreens = ['screen-daily-game', 'screen-daily-result'];
      const targetRoute = isChallenge ? '/1v1' : dailyScreens.includes(id) ? '/daily' : '/';
      
      let url = typeof window.getLocalizedUrl === 'function' ? window.getLocalizedUrl(targetRoute) : targetRoute;
      
      if (isChallenge) {
        url += '?challenge=' + activeChallengeId;
      }
      
      console.warn(`[Numfly] Screen missing on this route. Redirecting to ${url}...`);
      window.location.href = url;
    } else {
      console.error(`[Numfly] FATAL: Screen '${id}' is missing from the home page HTML!`);
    }
    return;
  }
  // ────────────────────────────────────────────────────────

  const PROTECTED=['screen-stats','screen-friends','screen-1v1','screen-achievements','screen-competition','screen-group-comp'];
  
  // Upgrade: Safe currentUser check
  const isUserLoggedIn = typeof currentUser !== 'undefined' && currentUser;
  if(PROTECTED.includes(id) && !isUserLoggedIn){
    if(typeof openAuthModal==='function') openAuthModal('login');
    return;
  }
  
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  targetEl.classList.add('active');
  window.scrollTo(0,0);
  document.body.classList.toggle('on-menu', id==='screen-menu');
  
  // Upgrade: Always clear background game timers when changing screens so a game doesn't secretly run in the background!
  clearGameTimers();
  
  if (typeof applyTranslations === 'function') applyTranslations();
  
  if(id==='screen-menu'){
    if(typeof renderHSPanel==='function') renderHSPanel();
    if(typeof renderXPPanel==='function') renderXPPanel();
    if(typeof updateDailyCard==='function') updateDailyCard();
  }
  if(id==='screen-stats' && typeof renderStatsContent==='function') renderStatsContent();
  
  if(id!=='screen-friends'){
    const sr=document.getElementById('friend-search-result');
    if(sr)sr.innerHTML='';
    const si=document.getElementById('friend-search-input');
    if(si)si.value='';
  }
  
  if(id==='screen-friends'){
    if(typeof loadFriends==='function') loadFriends();
    if(typeof startFriendPoller==='function') startFriendPoller();
  } else {
    if(typeof stopFriendPoller==='function') stopFriendPoller();
  }
  
  if(id==='screen-tips'){
    if(typeof renderTipsFilterBtns==='function') renderTipsFilterBtns();
    if(typeof renderTipsList==='function') renderTipsList();
  }
  if(id==='screen-achievements' && typeof renderAchievements==='function') renderAchievements();
  
  if(id==='screen-leaderboard') { 
    if(typeof setLbScope === 'function' && typeof _lbScope !== 'undefined') setLbScope(_lbScope); 
    else if(typeof loadLeaderboard === 'function') loadLeaderboard(typeof _lbKey !== 'undefined' ? _lbKey : 'xp'); 
  }
  
  const scrollable=['screen-tips','screen-stats','screen-achievements','screen-leaderboard','screen-friends','screen-1v1'];
  if(scrollable.includes(id)){
    // Upgrade: requestAnimationFrame is much smoother than setTimeout for DOM paints
    requestAnimationFrame(() => {
      const c = targetEl.querySelector('.content-container') || targetEl;
      c.scrollTop = 0;
    });
  }
}