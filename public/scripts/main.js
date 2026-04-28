// ── Privacy page ─────────────────────────────────────────────────────────────────
const PRIVACY_CONTENT={
en:{
  title:'🔒 Privacy Policy',
  sections:[
    {h:'Who we are',b:`Numfly (<a href="https://numfly.pro">numfly.pro</a>) is a free mental math training app. We are committed to protecting your privacy and being transparent about what data we collect and why.`},
    {h:'What we store',b:`<strong>Essential local storage (always active)</strong> — stored only in your browser, never sent to us:<ul><li>Your game progress, high scores, XP level and achievements</li><li>Your language preference</li><li>Your cookie consent choice</li></ul><strong>Account data (only if you register)</strong> — stored on our secure servers:<ul><li>Your username and email address</li><li>Your game progress and high scores (to sync across devices)</li><li>Your login session token</li></ul><strong>Analytics (only with your consent)</strong>:<ul><li>Anonymised usage data to understand how the app is used (via Google Analytics)</li><li>No personal identifiers are collected</li></ul>`},
    {h:'What we do NOT do',b:`<ul><li>We do not sell your data to any third party</li><li>We do not use your data for advertising</li><li>We do not collect sensitive personal data</li><li>We do not share your data except with our infrastructure providers (Supabase, Google Analytics — both under strict data processing agreements)</li></ul>`},
    {h:'Cookies and tracking',b:`Numfly uses <strong>browser local storage</strong> (not traditional cookies) to save your game progress. This is essential and does not require consent.<br><br>With your consent, we use Google Analytics cookies (<code>_ga</code>, <code>_ga_*</code>) for usage measurement. Analytics-only, no advertising identifiers. Withdraw consent at any time via <strong>Cookie settings</strong> in the menu.`},
    {h:'Your rights (GDPR)',b:`If you have an account, you have the right to:<ul><li><strong>Access</strong> — request a copy of your data</li><li><strong>Rectification</strong> — correct your username or email</li><li><strong>Erasure</strong> — delete your account and all associated data</li><li><strong>Portability</strong> — receive your data in a structured format</li><li><strong>Withdraw consent</strong> — opt out of analytics at any time</li></ul>To exercise any of these rights, contact us at <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
    {h:'Data retention',b:`Account data is retained as long as your account is active. If you delete your account, all data is permanently removed within 30 days. Guest data is stored only locally and is cleared when you clear your browser data.`},
    {h:'Contact',b:`Questions about this policy? Email us at <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
  ]
},
nl:{
  title:'🔒 Privacybeleid',
  sections:[
    {h:'Wie we zijn',b:`Numfly (<a href="https://numfly.pro">numfly.pro</a>) is een gratis app voor hoofdrekenen. We zetten ons in voor de bescherming van je privacy en zijn transparant over welke gegevens we verzamelen en waarom.`},
    {h:'Wat we opslaan',b:`<strong>Essentiële lokale opslag (altijd actief)</strong> — alleen in je browser, nooit naar ons verstuurd:<ul><li>Je speelvoortgang, highscores, XP-niveau en prestaties</li><li>Je taalvoorkeur</li><li>Je keuze voor cookietoestemming</li></ul><strong>Accountgegevens (alleen bij registratie)</strong> — opgeslagen op onze beveiligde servers:<ul><li>Je gebruikersnaam en e-mailadres</li><li>Je speelvoortgang en highscores (voor synchronisatie)</li><li>Je inlogsessietoken</li></ul><strong>Analytics (alleen met jouw toestemming)</strong>:<ul><li>Geanonimiseerde gebruiksgegevens om de app te verbeteren (via Google Analytics)</li><li>Er worden geen persoonlijke identificatoren verzameld</li></ul>`},
    {h:'Wat we NIET doen',b:`<ul><li>We verkopen je gegevens niet aan derden</li><li>We gebruiken je gegevens niet voor advertenties</li><li>We verzamelen geen gevoelige persoonsgegevens</li><li>We delen je gegevens niet, behalve met onze infrastructuurleveranciers (Supabase, Google Analytics — beide onder strikte verwerkersovereenkomsten)</li></ul>`},
    {h:'Cookies en tracking',b:`Numfly gebruikt <strong>lokale browseropslag</strong> (geen traditionele cookies) om je voortgang op te slaan. Dit is essentieel en vereist geen toestemming.<br><br>Met jouw toestemming gebruiken we Google Analytics-cookies (<code>_ga</code>, <code>_ga_*</code>) voor gebruiksmeting. Uitsluitend voor analyse, geen advertentie-identificatoren. Je kunt toestemming altijd intrekken via <strong>Cookie-instellingen</strong> in het menu.`},
    {h:'Jouw rechten (AVG)',b:`Als je een account hebt, heb je het recht op:<ul><li><strong>Inzage</strong> — een kopie van je gegevens opvragen</li><li><strong>Rectificatie</strong> — je gebruikersnaam of e-mail corrigeren</li><li><strong>Verwijdering</strong> — je account en alle bijbehorende gegevens verwijderen</li><li><strong>Overdraagbaarheid</strong> — je gegevens in een gestructureerd formaat ontvangen</li><li><strong>Toestemming intrekken</strong> — op elk moment afmelden voor analytics</li></ul>Neem voor het uitoefenen van deze rechten contact op via <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
    {h:'Bewaartermijn',b:`Accountgegevens worden bewaard zolang je account actief is. Bij verwijdering worden alle gegevens binnen 30 dagen permanent gewist. Gastgegevens worden alleen lokaal opgeslagen en verdwijnen wanneer je je browsergegevens wist.`},
    {h:'Contact',b:`Vragen over dit beleid? Stuur een e-mail naar <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
  ]
},
es:{
  title:'🔒 Política de Privacidad',
  sections:[
    {h:'Quiénes somos',b:`Numfly (<a href="https://numfly.pro">numfly.pro</a>) es una app gratuita de entrenamiento de cálculo mental. Estamos comprometidos con la protección de tu privacidad y la transparencia sobre los datos que recopilamos y por qué.`},
    {h:'Qué almacenamos',b:`<strong>Almacenamiento local esencial (siempre activo)</strong> — solo en tu navegador, nunca enviado a nosotros:<ul><li>Tu progreso, récords, nivel XP y logros</li><li>Tu preferencia de idioma</li><li>Tu elección de consentimiento de cookies</li></ul><strong>Datos de cuenta (solo si te registras)</strong> — almacenados en nuestros servidores seguros:<ul><li>Tu nombre de usuario y dirección de correo</li><li>Tu progreso y récords (para sincronización)</li><li>Tu token de sesión</li></ul><strong>Analítica (solo con tu consentimiento)</strong>:<ul><li>Datos de uso anonimizados para mejorar la app (mediante Google Analytics)</li><li>No se recopilan identificadores personales</li></ul>`},
    {h:'Lo que NO hacemos',b:`<ul><li>No vendemos tus datos a terceros</li><li>No usamos tus datos para publicidad</li><li>No recopilamos datos personales sensibles</li><li>No compartimos tus datos excepto con nuestros proveedores de infraestructura (Supabase, Google Analytics — ambos bajo acuerdos estrictos de procesamiento)</li></ul>`},
    {h:'Cookies y seguimiento',b:`Numfly usa <strong>almacenamiento local del navegador</strong> (no cookies tradicionales) para guardar tu progreso. Esto es esencial y no requiere consentimiento.<br><br>Con tu consentimiento, usamos cookies de Google Analytics (<code>_ga</code>, <code>_ga_*</code>) para medir el uso. Solo para análisis, sin identificadores publicitarios. Puedes retirar el consentimiento en cualquier momento en <strong>Configuración de cookies</strong> del menú.`},
    {h:'Tus derechos (RGPD)',b:`Si tienes una cuenta, tienes derecho a:<ul><li><strong>Acceso</strong> — solicitar una copia de tus datos</li><li><strong>Rectificación</strong> — corregir tu nombre de usuario o correo</li><li><strong>Supresión</strong> — eliminar tu cuenta y todos los datos asociados</li><li><strong>Portabilidad</strong> — recibir tus datos en un formato estructurado</li><li><strong>Retirar el consentimiento</strong> — darte de baja de la analítica en cualquier momento</li></ul>Para ejercer estos derechos, contáctanos en <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
    {h:'Retención de datos',b:`Los datos de cuenta se conservan mientras tu cuenta esté activa. Si eliminas tu cuenta, todos los datos se borran permanentemente en 30 días. Los datos de invitado se almacenan solo localmente y se eliminan al borrar los datos del navegador.`},
    {h:'Contacto',b:`¿Preguntas sobre esta política? Escríbenos a <a href="mailto:numflypro@gmail.com">numflypro@gmail.com</a>.`},
  ]
}
};
function renderPrivacy(){
  const p=PRIVACY_CONTENT[lang]||PRIVACY_CONTENT.en;
  const title=document.getElementById('priv-title');
  if(title)title.textContent=p.title;
  const el=document.getElementById('priv-content');
  if(!el)return;
  el.innerHTML=p.sections.map(s=>`
    <div class="privacy-section">
      <div class="privacy-section-title">${s.h}</div>
      <div class="privacy-body">${s.b}</div>
    </div>`).join('');
}

// ── Scroll-to-top ─────────────────────────────────────────────────────────────
let _scrollTopListener=null;
function attachScrollTopListener(){
  detachScrollTopListener();
  const btn=document.getElementById('scroll-top-btn');
  if(!btn)return;
  _scrollTopListener=()=>{
    const show=window.scrollY>320;
    btn.classList.toggle('visible',show);
  };
  window.addEventListener('scroll',_scrollTopListener,{passive:true});
  // Check immediately in case page is already scrolled
  _scrollTopListener();
}
function detachScrollTopListener(){
  const btn=document.getElementById('scroll-top-btn');
  if(btn)btn.classList.remove('visible');
  if(_scrollTopListener){
    window.removeEventListener('scroll',_scrollTopListener);
    _scrollTopListener=null;
  }
}

// ── Daily share ───────────────────────────────────────────────────────────────
function getDailyShareText(){
  const time=document.getElementById('dc-result-time')?.textContent||'';
  const url='https://numfly.pro';
  const msg=t('daily_share_msg').replace('{time}',time);
  return{text:msg,url};
}
function shareDailyWhatsApp(){
  const{text,url}=getDailyShareText();
  window.open(`https://wa.me/?text=${encodeURIComponent(text+' '+url)}`,'_blank');
}
function shareDailyX(){
  const{text,url}=getDailyShareText();
  // x.com/intent/tweet works for both Twitter and X
  window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text+' '+url)}`,'_blank');
}
function shareDailyLinkedIn(){
  const{text,url}=getDailyShareText();
  // LinkedIn's share-offsite only reliably supports ?url=. Encode the full message + url as the shared URL
  // so the user just needs to add additional text. Also open in a real window for mobile compatibility.
  const fullText=encodeURIComponent(text+'\n'+url);
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&summary=${fullText}&title=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer,width=600,height=600');
}
function shareDailyFacebook(){
  const{text,url}=getDailyShareText();
  // sharer.php works without an App ID and without domain whitelisting.
  // Pre-filled quote text is no longer supported by Facebook for third-party apps;
  // the user will see the link preview and can type their own message.
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank','noopener,noreferrer,width=600,height=600');
}
function copyDailyLink(){
  const{text,url}=getDailyShareText();
  navigator.clipboard.writeText(text+' '+url).then(()=>{
    const btn=document.getElementById('dc-copy-btn');
    if(btn){const orig=btn.textContent;btn.textContent='✓ Copied!';setTimeout(()=>btn.textContent=orig,2000);}
  });
}

function flushAllData() {
  if (typeof syncTimer !== 'undefined' && syncTimer && typeof currentUser !== 'undefined' && currentUser) {
    clearTimeout(syncTimer);
    if (typeof pushToSupabase === 'function') pushToSupabase();
  }
  if (typeof saveOpStats === 'function') saveOpStats();
  if (typeof saveDailyLocalState === 'function') saveDailyLocalState();
}

window.addEventListener('beforeunload', flushAllData);

window.addEventListener('pagehide', flushAllData);
window.addEventListener('popstate', flushAllData);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushAllData();
});

document.addEventListener('astro:before-preparation', flushAllData);

// ── GDPR ──────────────────────────────────────────────────────────────────────
document.addEventListener('click',function(e){
  if(e.target.classList&&e.target.classList.contains('privacy-link')){
    e.preventDefault();
    closeSidebar();
    showScreen('screen-privacy');
  }
});
function gdprInit(){
  const consent=localStorage.getItem('gdpr_consent');
  if(!consent){
    const banner=document.getElementById('gdpr-banner');
    if(banner){
      document.getElementById('gdpr-text').innerHTML=t('gdpr_text');
      banner.classList.add('show');
    }
  }
}
function gdprAccept(){
  localStorage.setItem('gdpr_consent','accepted');
  document.getElementById('gdpr-banner').classList.remove('show');
  if(typeof gtag!=='undefined'){
    gtag('consent','update',{
      'analytics_storage':  'granted',
      'ad_storage':         'denied',
      'ad_user_data':       'denied',
      'ad_personalization': 'denied'
    });
    gtag('event','page_view');
    gtag('event','gdpr_accept_analytics'); // track how many users accept analytics
  }
}

function gdprDecline(){
  localStorage.setItem('gdpr_consent','declined');
  document.getElementById('gdpr-banner').classList.remove('show');
}
function resetCookieConsent(){
  localStorage.removeItem('gdpr_consent');
  closeSidebar();
  gdprInit();
}

// ── Guest state persistence ───────────────────────────────────────────────────
// Saves all game state to localStorage so guests don't lose progress on refresh.
// Debounced version — coalesces rapid calls (e.g. multiple correct answers in a row)
let _saveOpStatsTimer=null;
function saveOpStatsDebounced(){
  if(_saveOpStatsTimer)clearTimeout(_saveOpStatsTimer);
  _saveOpStatsTimer=setTimeout(saveOpStats,500);
}
function saveOpStats(){
  // Save the full op/mode/plays stats to localStorage — called after every game end
  try{localStorage.setItem('numfly_op_stats',JSON.stringify({
    totalAnswers:stats.totalAnswers||0,
    totalCorrect:stats.totalCorrect||0,
    totalWrong:stats.totalWrong||0,
    totalPlayTime:stats.totalPlayTime||0,
    practiceCorrect:stats.practiceCorrect||0,
    practiceWrong:stats.practiceWrong||0,
    opCorrect:stats.opCorrect,opWrong:stats.opWrong,
    modeOpCorrect:stats.modeOpCorrect,modeOpWrong:stats.modeOpWrong,
    diffOpCorrect:stats.diffOpCorrect,diffOpWrong:stats.diffOpWrong,
    modeAnswers:stats.modeAnswers,modeCorrect:stats.modeCorrect,modePlayTime:stats.modePlayTime,
    longestLightningStreak:stats.longestLightningStreak||0,
    longestCorrectSequence:stats.longestCorrectSequence||0,
    longestSpeedStreak:stats.longestSpeedStreak||0,
    longestPracticeStreak:stats.longestPracticeStreak||0,
    speedScoreHistory:stats.speedScoreHistory||[],
    lightningStreakHistory:stats.lightningStreakHistory||[],
    tipSessions:stats.tipSessions||0,
    dailyCompleted:stats.dailyCompleted||0,
    dailyBestStreak:stats.dailyBestStreak||0,
    dailyBestTime:stats.dailyBestTime||null,
    dailyWorstTime:stats.dailyWorstTime||null,
    hsLightningPlays:{easy:hs.lightning.easy.plays||0,medium:hs.lightning.medium.plays||0,hard:hs.lightning.hard.plays||0},
    hsSpeedPlays:{easy:hs.speed.easy.plays||0,medium:hs.speed.medium.plays||0,hard:hs.speed.hard.plays||0}
  }));}catch(e){console.warn('[Numfly] saveOpStats failed:',e);}
}
function saveGuestState(){
  if(currentUser)return; // logged-in users sync via Supabase
  try{
    const payload={
      hs:JSON.parse(JSON.stringify(hs)),
      stats:JSON.parse(JSON.stringify(stats)),
      xp:{total:xp.total,level:xp.level},
      earned:[...earnedAchievements],
      campaign:getCampaignProgress(),
      ts:Date.now()
    };
    localStorage.setItem(GUEST_SAVE_KEY,JSON.stringify(payload));
  }catch(e){console.warn('[Numfly] saveGuestState failed:',e);}
}
function loadGuestState(){
  try{
    const raw=localStorage.getItem(GUEST_SAVE_KEY);
    if(!raw)return;
    const p=JSON.parse(raw);
    if(!p||!p.hs||!p.stats||!p.xp)return;
    // Restore high scores
    ['easy','medium','hard'].forEach(d=>{
      if(p.hs.lightning&&p.hs.lightning[d])hs.lightning[d]={score:p.hs.lightning[d].score||0,plays:p.hs.lightning[d].plays||0};
      if(p.hs.speed&&p.hs.speed[d])hs.speed[d]={score:p.hs.speed[d].score||0,plays:p.hs.speed[d].plays||0};
    });
    // Restore per-duration speed HS
    if(p.hs.speedDur&&typeof p.hs.speedDur==='object'){
      Object.entries(p.hs.speedDur).forEach(([k,v])=>{if(typeof v==='number')hs.speedDur[k]=v;});
    } else {
      // First load after this feature launched — seed 120s slot from existing hs.speed scores
      ['easy','medium','hard'].forEach(d=>{if(hs.speed[d].score>0)hs.speedDur[d+'_120']=hs.speed[d].score;});
    }
    // Restore stats (merge only numeric fields to avoid corrupting structure)
    const safeKeys=['totalAnswers','totalCorrect','totalWrong','totalPlayTime',
      'longestSpeedStreak','currentSpeedStreak','longestLightningStreak','longestCorrectSequence',
      'practiceCorrect','practiceWrong','currentPracticeStreak','longestPracticeStreak','tipSessions',
      'dailyCompleted','dailyBestStreak'];
    safeKeys.forEach(k=>{if(typeof p.stats[k]==='number')stats[k]=p.stats[k];});
    // dailyBestTime / dailyWorstTime are number|null — restore if present in saved state
    if(p.stats.hasOwnProperty('dailyBestTime'))stats.dailyBestTime=typeof p.stats.dailyBestTime==='number'?p.stats.dailyBestTime:null;
    if(p.stats.hasOwnProperty('dailyWorstTime'))stats.dailyWorstTime=typeof p.stats.dailyWorstTime==='number'?p.stats.dailyWorstTime:null;
    const objKeys=['opCorrect','opWrong','modeAnswers','modeCorrect','modePlayTime',
      'modeOpCorrect','modeOpWrong','diffOpCorrect','diffOpWrong'];
    objKeys.forEach(k=>{if(p.stats[k]&&typeof p.stats[k]==='object')Object.assign(stats[k],p.stats[k]);});
    if(Array.isArray(p.stats.speedScoreHistory))stats.speedScoreHistory=p.stats.speedScoreHistory;
    if(Array.isArray(p.stats.lightningStreakHistory))stats.lightningStreakHistory=p.stats.lightningStreakHistory;
    // Restore XP
    xp.total=p.xp.total||0;xp.level=p.xp.level||1;
    recalcLevelSilently();
    // Restore achievements
    if(Array.isArray(p.earned))p.earned.forEach(id=>earnedAchievements.add(id));
    if(p.campaign&&typeof p.campaign==='object'){
      const existing=getCampaignProgress();
      saveCampaignProgress({
        highestUnlocked:Math.max(existing.highestUnlocked,p.campaign.highestUnlocked||1),
        completed:[...new Set([...existing.completed,...(p.campaign.completed||[])])]
      });
    }
    console.log('[Numfly] Guest state loaded — level',xp.level,'correct',stats.totalCorrect);
    checkAchievements(true); // catch achievements that may not have been processed yet
    if(document.getElementById('screen-achievements')?.classList.contains('active')) {
      renderAchievements();
    }

    if(document.getElementById('screen-stats')) {
      renderStatsContent();
    }

  }catch(e){console.warn('[Numfly] loadGuestState failed:',e);}
}

// ── Language detection and persistence ───────────────────────────────────────
function detectAndSetLang() {
  const path = window.location.pathname;
  let targetLang = 'en';
  
  if (path.startsWith('/nl/') || path === '/nl') targetLang = 'nl';
  else if (path.startsWith('/es/') || path === '/es') targetLang = 'es';
  else {
    const saved = localStorage.getItem('numfly_lang');
    if (saved && STRINGS[saved]) {
      targetLang = saved;
    } else {
      const full = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
      targetLang = STRINGS[full] ? full : STRINGS[full.slice(0,2)] ? full.slice(0,2) : 'en';
    }
  }

  // Google Login exception: keep token safe
  if (window.location.hash.includes('access_token') || window.location.hash.includes('type=recovery')) {
    lang = targetLang;
    document.documentElement.lang = targetLang;
    localStorage.setItem('numfly_lang', targetLang);
    applyTranslations();
    document.querySelectorAll('.lang-btn').forEach(b => {
      const code = {EN:'en',NL:'nl',ES:'es'}[b.textContent.trim().toUpperCase()];
      if(code) b.classList.toggle('active', code === lang);
    });
    updateSidebarLangBtns();
    return;
  }

  setLang(targetLang);
}

const _origSetLang=setLang;

setLang=function(l,btn){
  document.documentElement.lang=l;
  localStorage.setItem('numfly_lang',l);
  _origSetLang(l,btn);
  
  // Update sidebar links dynamically so they never show English
  try {
    const dictNl = { '/':'', '/friends':'/vrienden', '/stats':'/statistieken', '/leaderboard':'/klassement', '/achievements':'/prestaties', '/tips':'/tips' };
    const dictEs = { '/':'', '/friends':'/amigos', '/stats':'/estadisticas', '/leaderboard':'/clasificacion', '/achievements':'/logros', '/tips':'/consejos' };
    const updateLink = (id, base) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (l === 'nl') el.href = '/nl' + (dictNl[base] || base);
      else if (l === 'es') el.href = '/es' + (dictEs[base] || base);
      else el.href = base;
    };
    updateLink('nav-home', '/');
    updateLink('nav-stats', '/stats');
    updateLink('nav-ach', '/achievements');
    updateLink('nav-tips', '/tips');
    updateLink('nav-friends', '/friends');
    updateLink('nav-lb', '/leaderboard');
  } catch(e) {}

  try{
    let currentPath=window.location.pathname;
    let corePath = currentPath;
    if (corePath.startsWith('/nl/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/nl') corePath = '/';
    else if (corePath.startsWith('/es/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/es') corePath = '/';
    else if (corePath.startsWith('/en/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/en') corePath = '/';

    const nlToEn = { '/vrienden':'/friends', '/statistieken':'/stats', '/klassement':'/leaderboard', '/prestaties':'/achievements', '/tips':'/tips', '/campagne':'/campaign', '/dagelijks':'/daily', '/bliksem':'/lightning', '/snelheid':'/speed', '/oefenen':'/practice', '/1v1':'/1v1', '/hoofdrekenen-oefenen':'/how-to-practice-mental-math' };
    const esToEn = { '/amigos':'/friends', '/estadisticas':'/stats', '/clasificacion':'/leaderboard', '/logros':'/achievements', '/consejos':'/tips', '/campana':'/campaign', '/diario':'/daily', '/rayo':'/lightning', '/velocidad':'/speed', '/practica':'/practice', '/1v1':'/1v1', '/como-practicar-calculo-mental':'/how-to-practice-mental-math' };
    
    if (nlToEn[corePath]) corePath = nlToEn[corePath];
    if (esToEn[corePath]) corePath = esToEn[corePath];

    const enToNl = { '/friends':'/vrienden', '/stats':'/statistieken', '/leaderboard':'/klassement', '/achievements':'/prestaties', '/tips':'/tips', '/campaign':'/campagne', '/daily':'/dagelijks', '/lightning':'/bliksem', '/speed':'/snelheid', '/practice':'/oefenen', '/1v1':'/1v1', '/how-to-practice-mental-math':'/hoofdrekenen-oefenen' };
    const enToEs = { '/friends':'/amigos', '/stats':'/estadisticas', '/leaderboard':'/clasificacion', '/achievements':'/logros', '/tips':'/consejos', '/campaign':'/campana', '/daily':'/diario', '/lightning':'/rayo', '/speed':'/velocidad', '/practice':'/practica', '/1v1':'/1v1', '/how-to-practice-mental-math':'/como-practicar-calculo-mental' };
    
    let translatedPath = corePath;
    if (l === 'nl' && enToNl[corePath]) translatedPath = enToNl[corePath];
    if (l === 'es' && enToEs[corePath]) translatedPath = enToEs[corePath];

    let finalPath = translatedPath;
    if (l === 'nl') finalPath = '/nl' + (translatedPath === '/' ? '' : translatedPath);
    else if (l === 'es') finalPath = '/es' + (translatedPath === '/' ? '' : translatedPath);
    
    if (finalPath === '') finalPath = '/';

    // Preserve query string AND auth hash (for Google Login)
    history.replaceState({lang:l}, document.title, finalPath + window.location.search + window.location.hash);
  }catch(e){}
};

function safeHistoryReplace(state,title,url){try{history.replaceState(state,title,url);}catch(e){}}
function safeHistoryPush(state,title,url){try{history.pushState(state,title,url);}catch(e){}}

const MENU_SCREEN = 'screen-menu';
const _origShowScreen_withHistory = showScreen;

showScreen = function(id) {
  const currentId = document.querySelector('.screen.active')?.id;

  if (currentId === 'screen-daily-game' && id !== 'screen-daily-game' && typeof dailyState !== 'undefined' && !dailyState.done && dailyState.current > 0) {
    if (typeof saveDailyLocalState === 'function') saveDailyLocalState();
  }
  
  if (currentId === 'screen-speed-game' && id !== 'screen-speed-game' && activeChallengeMode === 'challenge' && activeChallengeId) {
    if (typeof saveCompResumeState === 'function') saveCompResumeState();
  }

  _origShowScreen_withHistory(id);

  const gameScreens = ['screen-speed-game','screen-practice-game','screen-lightning-game','screen-daily-game','screen-campaign-game'];
  document.body.classList.toggle('in-game', gameScreens.includes(id));
  document.body.classList.toggle('on-menu', id === 'screen-menu');
};

function checkPendingStart() {
  try {
    const pending = localStorage.getItem('numfly_pending_start');
    if (pending && document.getElementById('screen-speed-game')) {
       const p = JSON.parse(pending);
       localStorage.removeItem('numfly_pending_start'); 
       
       activeChallengeId = p.id;
       activeChallengeMode = p.mode;
       diff.speed = p.diff || 'easy';
       _challengeDiff = p.diff || 'easy';
       speed.remaining = p.dur || 120;
       speed.originalDur = p.origDur || p.dur || 120;
       challengeSeed = p.seed;
       _activeCompId = p.compId;
       
       if (p.seed !== undefined && p.seed !== null) challengeRng = seededRand(p.seed);
       setTimeout(() => startSpeedWithCountdown(), 150);
    }
  } catch (e) {}
}

try{localStorage.removeItem('numfly_auth');}catch(e){}
initApp();

document.addEventListener('astro:page-load', () => {
  if (typeof applyTranslations === 'function') applyTranslations();
  if (typeof updateSidebarLangBtns === 'function') updateSidebarLangBtns();
  if (typeof updateSocialUI === 'function') updateSocialUI();
  
  let p = window.location.pathname.replace(/^\/(nl|es)/, '').replace(/\/$/, '') || '/';
  
  const reverseMap = {
    "/vrienden": "/friends", "/amigos": "/friends",
    "/statistieken": "/stats", "/estadisticas": "/stats",
    "/klassement": "/leaderboard", "/clasificacion": "/leaderboard",
    "/prestaties": "/achievements", "/logros": "/achievements",
    "/hoofdrekenen-oefenen": "/how-to-practice-mental-math",
    "/como-practicar-calculo-mental": "/how-to-practice-mental-math",
    "/campagne": "/campaign", "/campana": "/campaign",
    "/dagelijks": "/daily", "/diario": "/daily",
    "/bliksem": "/lightning", "/rayo": "/lightning",
    "/snelheid": "/speed", "/velocidad": "/speed",
    "/oefenen": "/practice", "/practica": "/practice",
    "/tips": "/tips", "/consejos": "/tips"
  };
  
  p = reverseMap[p] || p;

  let activeId = 'screen-menu';
  if (p === '/friends') activeId = 'screen-friends';
  else if (p === '/stats') activeId = 'screen-stats';
  else if (p === '/leaderboard') activeId = 'screen-leaderboard';
  else if (p === '/achievements') activeId = 'screen-achievements';
  else if (p === '/tips' || p === '/how-to-practice-mental-math') activeId = 'screen-tips';
  else if (p === '/campaign') activeId = 'screen-campaign';
  else if (p === '/lightning') activeId = 'screen-lightning-setup';
  else if (p === '/speed') activeId = 'screen-speed-setup';
  else if (p === '/practice') activeId = 'screen-practice-setup';
  else if (p === '/1v1') activeId = 'screen-speed-game';

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  if (p === '/daily') {
    if (typeof openDailyChallenge === 'function') openDailyChallenge();
  } else {
    const targetScreen = document.getElementById(activeId);
    if (targetScreen) targetScreen.classList.add('active');
  }

  const currentScreen = document.querySelector('.screen.active')?.id;
  document.body.classList.toggle('on-menu', currentScreen === 'screen-menu');
  
  if (currentScreen === 'screen-menu') {
    if (typeof renderHSPanel === 'function') renderHSPanel();
    if (typeof renderXPPanel === 'function') renderXPPanel();
    if (typeof updateDailyCard === 'function') updateDailyCard();
  } else if (currentScreen === 'screen-stats') {
    if (typeof renderStatsContent === 'function') renderStatsContent();
  } else if (currentScreen === 'screen-leaderboard') {
    if (typeof loadLeaderboard === 'function') loadLeaderboard(typeof _lbKey !== 'undefined' ? _lbKey : 'xp');
  } else if (currentScreen === 'screen-friends') {
    if (typeof loadFriends === 'function') loadFriends();
    if (typeof startFriendPoller === 'function') startFriendPoller();
  } else if (currentScreen === 'screen-achievements') {
    if (typeof renderAchievements === 'function') renderAchievements();
  } else if (currentScreen === 'screen-tips') {
    if (typeof renderTipsFilterBtns === 'function') renderTipsFilterBtns();
    if (typeof renderTipsList === 'function') renderTipsList();
  } else if (currentScreen === 'screen-campaign') {
    if (typeof renderCampaignMap === 'function') renderCampaignMap();
  } else if (currentScreen === 'screen-speed-game' && p === '/1v1') {
    if (typeof checkPendingStart === 'function') checkPendingStart();
  }
  
  if (currentScreen !== 'screen-friends' && typeof stopFriendPoller === 'function') {
    stopFriendPoller();
  }
});