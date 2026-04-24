// ══════════════════════════════════════════════════════════════════════════════
// SUPABASE BACKEND + SOCIAL FEATURES
// ══════════════════════════════════════════════════════════════════════════════
const SUPABASE_URL='https://pwqklvedbydxmnhocaqp.supabase.co';
const SUPABASE_ANON='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWtsdmVkYnlkeG1uaG9jYXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0ODc0NTIsImV4cCI6MjA4OTA2MzQ1Mn0.341Z0YRnOwSL-hpyEw0ijGYJR4cUVpNb7pvCVNvqjcI';
let sb=null;
try{
  sb=window.supabase?.createClient(SUPABASE_URL,SUPABASE_ANON,{
    auth:{
      persistSession:true,
      autoRefreshToken:true,
      detectSessionInUrl:true,
      storageKey:'numfly_sb',
      storage:window.localStorage,
    }
  });
  if(!sb)throw new Error('Supabase client not available');
  console.log('[Numfly] Supabase client ready');

}catch(e){
  console.error('[Numfly] Supabase init failed:',e);
}
const GUEST_SAVE_KEY='numfly_guest_v1'; // guest localStorage key — must be outside try block

// Wrap any promise with a timeout — used for all Supabase queries
function withTimeout(promise,ms=30000){
  return Promise.race([
    promise,
    new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout after '+ms+'ms')),ms))
  ]);
}

const AVATAR_COLORS=['#e8ff47','#4dffb4','#47b3ff','#ffa532','#ff4d6b','#c084fc','#7ee8a2','#f9ab00','#ff6b9d','#00d4ff'];
function randomAvatarColor(){return AVATAR_COLORS[Math.floor(Math.random()*AVATAR_COLORS.length)];}
function avatarColor(profile){
  // Use stored color if available, otherwise derive from id for consistency
  if(profile&&profile.avatar_color)return profile.avatar_color;
  if(!profile)return AVATAR_COLORS[0];
  const uid=typeof profile==='string'?profile:(profile.id||'');
  let h=0;for(const c of uid)h=(h*31+c.charCodeAt(0))&0xFFFF;
  return AVATAR_COLORS[h%AVATAR_COLORS.length];
}
function esc(s){
  // Escape HTML special characters to prevent XSS via innerHTML
  if(!s)return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function initials(name){
  if(!name)return '?';
  const parts=name.trim().split(/\s+/);
  if(parts.length>=2)return (parts[0][0]+parts[1][0]).toUpperCase();
  return name.slice(0,2).toUpperCase();
}

function handleModeRouting() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');
  
  if (mode === 'practice') {
    showScreen('screen-practice-setup');
  } else if (mode === 'speed') {
    showScreen('screen-speed-setup');
  } else if (mode === 'lightning') {
    showScreen('screen-lightning-setup');
  } else if (mode === 'daily') {
    openDailyChallenge();
  } else if (mode === 'privacy') {
    showScreen('screen-privacy');
  }
  
  if (mode && mode !== 'privacy') {
    const cleanUrl = window.location.pathname;
    history.replaceState({screen: document.querySelector('.screen.active')?.id || 'screen-menu'}, document.title, cleanUrl);
  }
}

// ── Auth state ────────────────────────────────────────────────────────────────
let currentUser=null,currentProfile=null;
let _profileLoadPromise=null;
let _currentLoginUserId=null;
let _appInitialised=false; // ensures initApp() runs exactly once

function initApp(){
  if(_appInitialised)return;
  _appInitialised=true;
  detectAndSetLang();
  loadGuestState();
  applyTranslations();renderHSPanel();renderXPPanel();
  updateDailyCard();

  const gamePages = ['/lightning', '/speed', '/practice', '/campaign', '/daily', '/1v1'];
  const isGamePage = gamePages.includes(window.location.pathname);
  const isRootMenu = window.location.pathname === '/' || window.location.pathname === '';

  document.body.classList.toggle('in-game', isGamePage);
  document.body.classList.toggle('on-menu', isRootMenu);

  gdprInit();
  // Poll badge every 20s globally so user sees pending requests without navigating
  if(!window._globalBadgePoller){
    window._globalBadgePoller=setInterval(()=>{if(currentUser)checkPendingRequests();},8000);
  }
  handleModeRouting();
  if (typeof checkPendingStart === 'function') checkPendingStart();
}

if(sb){
sb.auth.onAuthStateChange((event,session)=>{
  console.log('[Numfly] Auth event:',event,'user:',session?.user?.email||'none');
  currentUser=session?.user||null;

  // Clean OAuth tokens from URL
  if(event==='SIGNED_IN'){
    try{
      if(location.hash.includes('access_token')||location.search.includes('code=')){
        history.replaceState({},document.title,location.pathname);
      }
    }catch(e){}
  }
  if(event==='TOKEN_REFRESHED'){console.log('[Numfly] token refreshed silently');return;}
  // Password reset link clicked — show set-new-password UI
  if(event==='PASSWORD_RECOVERY'||window._expectingPasswordReset){
    window._expectingPasswordReset=false;
    // User is now signed in with recovery token — show password change UI
    setTimeout(()=>showSetNewPasswordModal(),300);
    return;
  }

  if(currentUser){
    if(event==='SIGNED_IN'||event==='INITIAL_SESSION'){
      const modal=document.getElementById('modal-auth');
      if(modal&&modal.classList.contains('open'))closeAuthModal();
    }
    const isFreshLogin=(event==='SIGNED_IN');
    if(isFreshLogin)showLoginOverlay(true);

    handleLogin(currentUser,isFreshLogin).catch(e=>{
      console.error('[Numfly] handleLogin threw:',e);
    }).finally(()=>{
      if(isFreshLogin)showLoginOverlay(false);
    });

  } else {
    currentProfile=null;
    _profileLoadPromise=null;
    _currentLoginUserId=null;
    showLoginOverlay(false);
    clearDailyLocalState();
    updateSocialUI();
  }

  if(event==='SIGNED_IN'||event==='INITIAL_SESSION'){
    setTimeout(()=>{const p=new URLSearchParams(window.location.search);if(p.get('challenge'))handleChallengeLink();},400);
  }
});
} else {
  updateSocialUI();
}

// ── Login pipeline ───────────────────────────────────────────────────────────
async function handleLogin(user,isFreshLogin=false){
  // If already running for this exact user, wait and return — don't restart
  if(_profileLoadPromise&&_currentLoginUserId===user.id){
    console.log('[Numfly] handleLogin: already running for',user.id,'— waiting');
    await _profileLoadPromise;
    return;
  }
  _profileLoadPromise=null;
  _currentLoginUserId=user.id;
  _profileLoadPromise=(async()=>{
    try{
      console.log('[Numfly] login pipeline start — user:',user.email,'id:',user.id);

      // Small delay for SIGNED_IN to let Supabase release its internal lock
      if(isFreshLogin)await new Promise(r=>setTimeout(r,500));

      // 1. Fetch existing profile
      let profile=await fetchProfile(user.id);
      console.log('[Numfly] fetchProfile result:',profile?'found':'not found');

      let isNewOAuthUser=false;

      // 2. Create profile if none exists
      if(!profile){
        console.log('[Numfly] creating profile...');
        profile=await createProfile(user);
        console.log('[Numfly] createProfile result:',profile?'ok ('+profile.username+')':'FAILED');
        if(!profile){
          // createProfile failed — retry fetch in case of race condition
          profile=await fetchProfile(user.id);
          console.log('[Numfly] retry fetchProfile:',profile?'found':'still not found');
        }
       
        const provider=user.app_metadata?.provider||user.identities?.[0]?.provider||'email';
        if(provider!=='email')isNewOAuthUser=true;
      }

      // 3. Set profile and update UI — even if profile is null, updateSocialUI clears loading state
      currentProfile=profile||null;
      console.log('[Numfly] currentProfile set:',currentProfile?.username||'null');
      updateSocialUI();

      // 4. Pull server progress in background
      try{await pullFromSupabase();}catch(e){console.warn('[Numfly] pullFromSupabase:',e.message);}
      updateSocialUI();
      checkPendingRequests();
      updateDailyCard();
      // Re-render streak badge with freshly-synced streak count from Supabase
      renderStreakOnCard();
      // 4b. Claim any daily challenge time the user completed as a guest
      claimPendingDailyEntry();
      console.log('[Numfly] login pipeline complete — profile:',currentProfile?.username||'none');

      // If profile is null after pipeline, DB was too slow (cold start).
      // Never sign out — user IS authenticated. Show guest UI and retry in background.
      if(!currentProfile){
        console.warn('[Numfly] profile null after pipeline — retrying in background');
        updateSocialUI(); // unblock UI immediately as guest
        (async()=>{
          for(let i=0;i<8;i++){
            await new Promise(r=>setTimeout(r,3000));
            if(currentProfile)return;
            const p=await fetchProfile(user.id);
            if(p){
              currentProfile=p;
              console.log('[Numfly] background retry found profile:',p.username);
              updateSocialUI();updateDailyCard();checkPendingRequests();
              try{await pullFromSupabase();}catch(e){}
              updateSocialUI();
              return;
            }
          }
          console.warn('[Numfly] background retry exhausted');
        })();
        return;
      }

      // 5. Username picker for new Google/OAuth users
      if(isNewOAuthUser&&currentProfile){
        const suggested=buildSuggestedUsername(user);
        setTimeout(()=>openUsernamePicker(suggested),200);
      }
    }catch(e){
      console.error('[Numfly] handleLogin error:',e.message||e);
      updateSocialUI(); // always unblock UI
    }finally{
      _profileLoadPromise=null;
    }
  })();
  await _profileLoadPromise;
}

async function fetchProfile(userId){
  // 15s timeout — Supabase free tier can take 10-12s on cold start after OAuth
  const withTimeout=(promise,ms)=>Promise.race([
    promise,
    new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout after '+ms+'ms')),ms))
  ]);
  try{
    const{data,error}=await withTimeout(
      sb.from('profiles').select('*').eq('id',userId).maybeSingle(),
      15000
    );
    if(error){console.warn('[Numfly] fetchProfile error:',error.message);return null;}
    console.log('[Numfly] fetchProfile:',(data?'found: '+data.username:'not found'));
    return data||null;
  }catch(e){
    console.warn('[Numfly] fetchProfile exception:',e.message);
    return null;
  }
}

async function createProfile(user){
  const color=randomAvatarColor();
  // Priority: localStorage (same-session email signup) > user metadata (cross-device email confirm) > random (OAuth)
  const pending=localStorage.getItem('pendingUsername');
  if(pending)localStorage.removeItem('pendingUsername');
  const metaUsername=user.user_metadata?.username||user.user_metadata?.name||null;
  const raw=pending||metaUsername||null;
  const base=raw?raw.replace(/[^a-zA-Z0-9_]/g,'').slice(0,20):null;
  const username=base?await makeUsernameUnique(base):'user_'+Math.floor(Math.random()*9999);
  try{
    const{data,error}=await withTimeout(
      sb.from('profiles').insert({id:user.id,username,avatar_color:color}).select().maybeSingle()
    );
    if(error){
      // 409 conflict = profile already exists (race condition or duplicate event)
      // Always fetch and return it
      console.log('[Numfly] createProfile conflict/error:',error.message,'— fetching existing');
      const{data:existing}=await withTimeout(
        sb.from('profiles').select('*').eq('id',user.id).maybeSingle()
      );
      if(existing){console.log('[Numfly] found existing profile:',existing.username);return existing;}
      console.error('[Numfly] createProfile error:',error.message);
      return null;
    }
    console.log('[Numfly] Profile created:',data?.username);
    return data;
  }catch(e){console.error('[Numfly] createProfile exception:',e.message);return null;}
}

function buildSuggestedUsername(user){
  const raw=user.user_metadata?.name||user.user_metadata?.full_name||user.email?.split('@')[0]||'';
  return raw.replace(/[^a-zA-Z0-9_]/g,'').slice(0,20)||'';
}

function openUsernamePicker(suggestedName){
  const inp=document.getElementById('pick-username-input');
  const errEl=document.getElementById('pick-username-error');
  if(inp)inp.value=suggestedName||'';
  if(errEl)errEl.textContent='';
  const modal=document.getElementById('modal-username-picker');
  if(modal){modal.classList.add('open');applyTranslations();setTimeout(()=>{if(inp)inp.focus();inp?.select();},100);}
}
async function doPickUsername(){
  if(!currentUser||!sb)return;
  const inp=document.getElementById('pick-username-input');
  const errEl=document.getElementById('pick-username-error');
  const val=(inp?.value||'').trim();
  if(!val||val.length<3){if(errEl)errEl.textContent=t('err_username_short');return;}
  if(!/^[a-zA-Z0-9_]+$/.test(val)){if(errEl)errEl.textContent=t('err_username_chars');return;}
  if(errEl)errEl.textContent='';
  // Check uniqueness (skip check if same as current)
  if(val!==currentProfile?.username){
    const{data:existing}=await sb.from('profiles').select('id').ilike('username',val).maybeSingle();
    if(existing){if(errEl)errEl.textContent=t('err_username_taken');return;}
  }
  const{error}=await sb.from('profiles').update({username:val}).eq('id',currentUser.id);
  if(error){if(errEl)errEl.textContent=error.message;return;}
  if(currentProfile)currentProfile.username=val;
  document.getElementById('modal-username-picker').classList.remove('open');
  updateSocialUI();
  updateDailyCard();
}

async function makeUsernameUnique(base){
  const{data}=await sb.from('profiles').select('id').ilike('username',base).maybeSingle();
  if(!data)return base; // available
  // Append random suffix until unique
  for(let i=0;i<10;i++){
    const candidate=base.slice(0,17)+'_'+Math.floor(Math.random()*100);
    const{data:d2}=await sb.from('profiles').select('id').ilike('username',candidate).maybeSingle();
    if(!d2)return candidate;
  }
  return base+'_'+Date.now()%10000;
}

function showLoginOverlay(show){
  const el=document.getElementById('login-overlay');
  if(el)el.style.display=show?'flex':'none';
}

// ── UI update ─────────────────────────────────────────────────────────────────
function updateSocialUI(){
  const loggedIn=!!(currentUser&&currentProfile);
  const signingIn=!!(currentUser&&!currentProfile); // user auth done but profile still loading
  // Hide signing-in overlay as soon as we know the auth state
  if(loggedIn||(!currentUser))showLoginOverlay(false);
  console.log('[Numfly] updateSocialUI — loggedIn:',loggedIn,'signingIn:',signingIn,'profile:',currentProfile?.username||'none');
  const guestView=document.getElementById('sidebar-guest-view');
  const userView=document.getElementById('sidebar-user-view');
  const signoutRow=document.getElementById('sidebar-signout-row');
  const challengeBtn=document.getElementById('sr-challenge-btn');
  if(guestView)guestView.style.display=(loggedIn||signingIn)?'none':'block';
  if(userView)userView.style.display=loggedIn?'block':'none';
  if(signoutRow)signoutRow.style.display=(loggedIn||signingIn)?'block':'none';
  if(challengeBtn)challengeBtn.style.display=loggedIn?'block':'none';
  // Show loading state in sidebar while profile is being fetched
  if(signingIn){
    const sbUsername=document.getElementById('sb-username');
    if(sbUsername)sbUsername.textContent='Loading…';
    userView.style.display='block';
  }
  if(loggedIn&&currentProfile){
    const av=document.getElementById('sb-avatar');
    if(av){av.textContent=initials(currentProfile.username);av.style.background=avatarColor(currentProfile);}
    const un=document.getElementById('sb-username');if(un)un.textContent=currentProfile.username;
    const em=document.getElementById('sb-email');if(em)em.textContent=currentUser.email||'';
    updateEditUsernameBtn();
    updateChangePwBtn();
  }
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function openSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
  document.body.classList.add('sidebar-open');
  // Clear any lingering cooldown messages so they don't persist between opens
  const pwCool=document.getElementById('sb-pw-cooldown');
  const unCool=document.getElementById('sb-username-cooldown');
  if(pwCool){clearTimeout(pwCool._t);pwCool.style.display='none';}
  if(unCool){clearTimeout(unCool._timer);unCool.style.display='none';}
  applyTranslations();
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  document.body.classList.remove('sidebar-open');
  // Cancel and hide cooldown messages so they don't reappear next open
  const pwCool=document.getElementById('sb-pw-cooldown');
  const unCool=document.getElementById('sb-username-cooldown');
  if(pwCool){clearTimeout(pwCool._t);pwCool.style.display='none';}
  if(unCool){clearTimeout(unCool._timer);unCool.style.display='none';}
}
function updateSidebarLangBtns(){
  ['en','nl','es'].forEach(l=>{
    const b=document.getElementById('sb-lang-'+l);
    if(b)b.classList.toggle('active',lang===l);
  });
}

// ── Auth modal ────────────────────────────────────────────────────────────────
function openAuthModal(startTab){
  // Always fully reset the modal state — ensures clean state after forgot-password flow
  // Restore register fields if they were replaced by the "check your email" message
  const regFields=document.getElementById('auth-register-fields');
  if(regFields&&!regFields.querySelector('input')){
    regFields.innerHTML=`
      <form onsubmit="event.preventDefault();doRegister()" autocomplete="on">
        <div class="auth-field"><label data-i18n="auth_username_label"></label><input type="text" id="auth-username" data-i18n-placeholder="auth_username_ph" maxlength="20" autocomplete="username" name="username"></div>
        <div class="auth-field"><label data-i18n="auth_email_label"></label><input type="email" id="auth-email-reg" placeholder="you@example.com" autocomplete="email" name="email"></div>
        <div class="auth-field"><label data-i18n="auth_password_label"></label><div class="auth-pw-wrap"><input type="password" id="auth-password-reg" data-i18n-placeholder="auth_password_ph" autocomplete="new-password" name="password"><button type="button" class="auth-eye-btn" onclick="togglePwVis('auth-password-reg',this)" tabindex="-1"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>
        <div class="auth-field"><label data-i18n="auth_confirm_password_label"></label><div class="auth-pw-wrap"><input type="password" id="auth-password-confirm" data-i18n-placeholder="auth_confirm_password_ph" autocomplete="new-password" name="confirm-password"><button type="button" class="auth-eye-btn" onclick="togglePwVis('auth-password-confirm',this)" tabindex="-1"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>
        <button type="submit" class="btn btn-primary" style="margin-top:4px"><span id="auth-register-label" data-i18n="auth_create_btn"></span></button>
      </form>`;
  }
  // Reset forgot-password panel
  showForgotPassword(false);
  // Restore tabs + divider + google btn visibility (may have been hidden by forgot-password)
  const tabs=document.querySelector('.auth-tabs');
  const divider=document.querySelector('.auth-overlay .auth-divider');
  const googleBtn=document.querySelector('.btn-google');
  [tabs,divider,googleBtn].forEach(el=>{if(el)el.style.display='';});
  document.getElementById('modal-auth').classList.add('open');
  document.getElementById('auth-error').textContent='';
  setAuthTab(startTab||'login');
  applyTranslations();
}
function togglePwVis(inputId,btn){
  const inp=document.getElementById(inputId);
  if(!inp)return;
  const show=inp.type==='password';
  inp.type=show?'text':'password';
  btn.innerHTML=show?`<svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:`<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}
function closeAuthModal(){
  document.getElementById('modal-auth').classList.remove('open');
  const errEl=document.getElementById('auth-error');
  if(errEl)errEl.textContent='';
  // Clear all auth input fields for privacy
  ['auth-email-login','auth-password-login','auth-email-reg','auth-password-reg','auth-password-confirm','forgot-pw-email'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.value='';
  });
  // Reset any eye toggles back to hidden
  document.querySelectorAll('.auth-pw-wrap input[type=text]').forEach(inp=>{
    inp.type='password';
    const btn=inp.parentElement?.querySelector('.auth-eye-btn');
    if(btn)btn.innerHTML=`<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  });
}
function setAuthTab(tab){
  document.getElementById('auth-register-fields').style.display=tab==='register'?'block':'none';
  document.getElementById('auth-login-fields').style.display=tab==='login'?'block':'none';
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  // Clear error message when switching tabs
  const errEl=document.getElementById('auth-error');
  if(errEl)errEl.textContent='';
  // Also hide forgot password if switching away from login
  const forgotFields=document.getElementById('auth-forgot-fields');
  if(forgotFields&&tab!=='login')forgotFields.style.display='none';
}

function openSocial(type){
  if(!currentUser){openAuthModal();return;}
  
  if(type==='friends'){
    closeSidebar();
    window.location.href = window.getLocalizedUrl('/friends'); // Fixed
  }
  else if(type==='leaderboard'){
    closeSidebar();
    window.location.href = window.getLocalizedUrl('/leaderboard'); // Fixed
  }
}

async function doRegister(){
  if(!sb){document.getElementById('auth-error').textContent='Service unavailable. Please refresh.';return;}
  const username=document.getElementById('auth-username').value.trim();
  const email=document.getElementById('auth-email-reg').value.trim();
  const password=document.getElementById('auth-password-reg').value;
  const errEl=document.getElementById('auth-error');
  if(!username||username.length<3){errEl.textContent=t('err_username_short');return;}
  if(!/^[a-zA-Z0-9_]+$/.test(username)){errEl.textContent=t('err_username_chars');return;}
  if(!email||!password||password.length<8){errEl.textContent=t('err_password_short');return;}
  const confirm=document.getElementById('auth-password-confirm')?.value;
  // Only validate if the confirm field exists and has been filled in
  if(confirm!==undefined&&confirm!==null&&confirm!==''&&confirm!==password){
    errEl.textContent=t('err_password_mismatch');return;
  }
  if(confirm!==undefined&&confirm===''&&password){
    errEl.textContent=t('err_confirm_required')||t('err_password_mismatch');return;
  }
  // Check uniqueness before creating account
  const{data:existing}=await sb.from('profiles').select('id').ilike('username',username).maybeSingle();
  if(existing){errEl.textContent=t('err_username_taken');return;}
  const regBtn=document.querySelector('#auth-register-fields .btn-primary');
  const regLabelEl=document.getElementById('auth-register-label');
  if(regBtn){regBtn.disabled=true;}
  if(regLabelEl)regLabelEl.textContent='…';
  let signUpError=null;
  let signUpData=null;
  try{
    const res=await sb.auth.signUp({email,password,options:{data:{username, name: username, full_name: username},emailRedirectTo:window.location.origin}});
    signUpError=res.error;
    signUpData=res.data;
  }catch(e){signUpError={message:e.message||'Network error — please try again'};}
  if(regBtn){regBtn.disabled=false;}
  if(regLabelEl){regLabelEl.setAttribute('data-i18n','auth_create_btn');applyTranslations();}
  if(signUpError){
    // Extract message from any error shape Supabase may return
    let msg='';
    if(signUpError&&typeof signUpError==='object'){
      msg=signUpError.message||signUpError.error_description||signUpError.msg||'';
    }
    if(!msg&&signUpError){msg=typeof signUpError==='string'?signUpError:JSON.stringify(signUpError);}
    if(!msg||msg==='{}')msg=t('err_signup_failed')||'Sign up failed. Please try again.';
    errEl.textContent=msg;
    return;
  }
  // Supabase silently returns no user when email already exists (no error thrown)
  // identities:[] is returned when email is already registered
  if(signUpData?.user?.identities?.length===0){
    errEl.textContent=t('err_email_taken')||'An account with this email already exists.';return;
  }
  if(!signUpData?.user&&!signUpData?.session){
    // Still show confirmation screen — user may need to confirm email
  }
  localStorage.setItem('pendingUsername',username);
  document.getElementById('auth-register-fields').innerHTML=`
    <form onsubmit="event.preventDefault()" autocomplete="on">
      <div style="text-align:center;padding:10px 0">
        <div style="font-size:36px;margin-bottom:12px">📧</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:1px;margin-bottom:8px">${t('auth_check_email')}</div>
        <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);line-height:1.6">${t('auth_check_email_sub')} <strong style="color:var(--text)">${email}</strong>.<br>${t('auth_check_email_sub2')}</div>
        <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted2);margin-top:8px;">📂 ${t('auth_check_email_spam')}</div>
        <button type="button" class="btn btn-secondary" style="margin-top:16px;display:block;width:100%;max-width:160px;margin-left:auto;margin-right:auto" onclick="closeAuthModal()">${t('auth_got_it')}</button>
      </div>
    </form>`;
}
async function doLogin(){
  if(!sb){document.getElementById('auth-error').textContent='Service unavailable. Please refresh.';return;}
  const emailEl=document.getElementById('auth-email-login');
  const passEl=document.getElementById('auth-password-login');
  const errEl=document.getElementById('auth-error');
  const loginBtn=document.getElementById('auth-login-btn');
  const labelEl=document.getElementById('auth-login-label');
  // Use .value directly at call time — handles password manager autofill
  let emailOrUser=(emailEl?.value||'').trim();
  const password=(passEl?.value||'');
  if(!emailOrUser||!password){if(errEl)errEl.textContent=t('err_fields_required');return;}
  if(errEl)errEl.textContent='';
  if(loginBtn){loginBtn.disabled=true;}
  if(labelEl)labelEl.textContent='...';
  try{
    // If it's not an email address, look up the email by username
    let email=emailOrUser;
    if(!emailOrUser.includes('@')){
      const{data:prof}=await sb.from('profiles').select('id').ilike('username',emailOrUser).maybeSingle();
      if(!prof){if(errEl)errEl.textContent=t('err_user_not_found')||'Username not found.';if(loginBtn)loginBtn.disabled=false;if(labelEl)labelEl.setAttribute('data-i18n','auth_login_btn');applyTranslations();return;}
      const{data:emailData}=await sb.rpc('get_email_by_username',{p_username:emailOrUser});
      if(!emailData){if(errEl)errEl.textContent=t('err_user_not_found')||'Username not found.';if(loginBtn)loginBtn.disabled=false;if(labelEl)labelEl.setAttribute('data-i18n','auth_login_btn');applyTranslations();return;}
      email=emailData;
    }
    // Always check provider — works for both username and email login
    try{
      const{data:prov}=await sb.rpc('get_provider_by_email',{p_email:email});
      if(prov==='google'){
        const displayName=emailOrUser.includes('@')?emailOrUser:emailOrUser;
        if(errEl)errEl.textContent=t('err_google_account').replace('{u}',displayName);
        if(loginBtn)loginBtn.disabled=false;if(labelEl)labelEl.setAttribute('data-i18n','auth_login_btn');applyTranslations();return;
      }
    }catch(e){}
    const{data,error}=await sb.auth.signInWithPassword({email,password});
    if(error){
      // If credentials fail, hint that they may have signed up with Google
      if(errEl)errEl.textContent=error.message;
    } else {
      // Close modal immediately on success — don't wait for slow DB queries
      closeAuthModal();
    }
    // On success: onAuthStateChange fires → ensureProfile → updateSocialUI → closeAuthModal
  }catch(e){
    if(errEl)errEl.textContent=e.message||'Login failed';
  }finally{
    // Always reset the button, regardless of outcome
    if(loginBtn)loginBtn.disabled=false;
    if(labelEl)labelEl.setAttribute('data-i18n','auth_login_btn');
    applyTranslations();
  }
}
function showForgotPassword(show=true){
  const loginFields=document.getElementById('auth-login-fields');
  const forgotFields=document.getElementById('auth-forgot-fields');
  const msgEl=document.getElementById('forgot-pw-msg');
  const emailLogin=document.getElementById('auth-email-login');
  if(loginFields)loginFields.style.display=show?'none':'block';
  if(forgotFields)forgotFields.style.display=show?'block':'none';
  if(msgEl)msgEl.textContent='';
  // Pre-fill the forgot email with whatever was typed in login
  if(show&&emailLogin){
    const fe=document.getElementById('forgot-pw-email');
    if(fe)fe.value=emailLogin.value||'';
  }
  // Hide/show the tabs and other auth elements
  const tabs=document.querySelector('.auth-tabs');
  const divider=document.querySelector('.auth-overlay .auth-divider');
  const googleBtn=document.querySelector('.btn-google');
  const guestBtn=document.querySelector('.btn-guest:last-child');
  [tabs,divider,googleBtn].forEach(el=>{if(el)el.style.display=show?'none':'';});
}

async function doForgotPassword(){
  if(!sb){document.getElementById('forgot-pw-msg').style.color='var(--error)';document.getElementById('forgot-pw-msg').textContent='Service unavailable.';return;}
  const emailEl=document.getElementById('forgot-pw-email');
  const msgEl=document.getElementById('forgot-pw-msg');
  const btn=document.getElementById('forgot-pw-btn');
  const email=(emailEl?.value||'').trim();
  if(!email){msgEl.style.color='var(--error)';msgEl.textContent=t('err_fields_required');return;}
  // ── 24h cooldown check ──────────────────────────────────────────────────────
  const RESET_KEY='numfly_reset_sent';
  try{
    const last=parseInt(localStorage.getItem(RESET_KEY)||'0');
    const elapsed=Date.now()-last;
    const h24=24*60*60*1000;
    if(last&&elapsed<h24){
      const rem=h24-elapsed;
      const h=Math.floor(rem/3600000);
      const m=Math.floor((rem%3600000)/60000);
      msgEl.style.color='var(--orange)';
      msgEl.textContent=t('auth_reset_cooldown_hrs').replace('{h}',h).replace('{m}',m);
      return;
    }
  }catch(e){}
  msgEl.textContent='';
  if(btn){btn.disabled=true;btn.textContent='...';}
  try{
    const{error}=await sb.auth.resetPasswordForEmail(email,{
      redirectTo:window.location.origin+'/?reset=true'
    });
    if(error){
      msgEl.style.color='var(--error)';
      msgEl.textContent=t('auth_reset_error')+error.message;
    } else {
      try{localStorage.setItem(RESET_KEY,Date.now().toString());}catch(e){}
      msgEl.style.color='var(--success)';
      msgEl.textContent=t('auth_reset_sent');
      if(emailEl)emailEl.value='';
    }
  }catch(e){
    msgEl.style.color='var(--error)';
    msgEl.textContent=t('auth_reset_error')+(e.message||'Unknown error');
  }finally{
    if(btn){btn.disabled=false;btn.setAttribute('data-i18n','auth_reset_send');applyTranslations();}
  }
}

// Handle password reset redirect
// Supabase fires PASSWORD_RECOVERY when the user clicks the reset link.
// We catch it in two places: the main onAuthStateChange (already handled below)
// and here as a fallback for the ?reset=true URL parameter.
(function(){
  const params=new URLSearchParams(window.location.search);
  if(params.get('reset')==='true'){
    window.history.replaceState({},'',window.location.pathname);
    // Mark that we're expecting a PASSWORD_RECOVERY event
    window._expectingPasswordReset=true;
  }
  // Also handle hash-based tokens (older Supabase versions)
  if(window.location.hash.includes('type=recovery')){
    window._expectingPasswordReset=true;
    window.history.replaceState({},'',window.location.pathname);
  }
})();

function showSetNewPasswordModal(){
  // Remove any existing instance
  document.getElementById('set-pw-overlay')?.remove();
  const overlay=document.createElement('div');
  overlay.id='set-pw-overlay';
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;';
  overlay.innerHTML=`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:28px 24px;max-width:360px;width:100%;">
      <div style="font-size:32px;text-align:center;margin-bottom:12px">🔑</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;letter-spacing:2px;margin-bottom:6px;text-align:center">${t('auth_set_new_password')||'Set New Password'}</div>
      <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);margin-bottom:16px;text-align:center">${t('auth_set_pw_sub')||'Choose a strong password (min. 8 characters).'}</div>
      <div id="set-pw-error" style="font-family:'DM Mono',monospace;font-size:11px;color:var(--error);margin-bottom:10px;min-height:16px;text-align:center"></div>
      <div style="margin-bottom:10px">
        <label style="display:block;font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${t('auth_password_label')||'Password'}</label>
        <input type="password" id="set-pw-input" autocomplete="new-password" style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:16px;padding:11px 14px;outline:none;box-sizing:border-box;" onkeydown="if(event.key==='Enter')doSetNewPassword(document.getElementById('set-pw-overlay'))">
      </div>
      <div style="margin-bottom:16px">
        <label style="display:block;font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${t('auth_confirm_password_label')||'Confirm Password'}</label>
        <input type="password" id="set-pw-confirm" autocomplete="new-password" style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:16px;padding:11px 14px;outline:none;box-sizing:border-box;" onkeydown="if(event.key==='Enter')doSetNewPassword(document.getElementById('set-pw-overlay'))">
      </div>
      <button class="btn btn-primary" style="margin-top:0" id="set-pw-btn" onclick="doSetNewPassword(document.getElementById('set-pw-overlay'))">${t('auth_set_new_password')||'Set New Password'}</button>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(()=>{const inp=document.getElementById('set-pw-input');if(inp)inp.focus();},100);
}

async function doSetNewPassword(overlay){
  const pw=document.getElementById('set-pw-input')?.value||'';
  const confirm=document.getElementById('set-pw-confirm')?.value||'';
  const errEl=document.getElementById('set-pw-error');
  const btn=document.getElementById('set-pw-btn');
  if(pw.length<8){if(errEl)errEl.textContent=t('err_password_short');return;}
  if(confirm&&confirm!==pw){if(errEl)errEl.textContent=t('err_password_mismatch');return;}
  if(btn){btn.disabled=true;btn.textContent='...';}
  const{error}=await sb.auth.updateUser({password:pw});
  if(btn){btn.disabled=false;btn.textContent=t('auth_set_new_password')||'Set New Password';}
  if(error){if(errEl)errEl.textContent=error.message;return;}
  overlay.remove();
  const toast=document.createElement('div');
  toast.style.cssText="position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:var(--surface);border:1px solid var(--success);border-radius:8px;padding:10px 20px;font-family:'DM Mono',monospace;font-size:13px;color:var(--success);z-index:500;white-space:nowrap;";
  toast.textContent=t('auth_pw_updated')||'Password updated successfully!';
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(),3000);
}

async function doGoogleLogin(){
  if(!sb){document.getElementById('auth-error').textContent='Service unavailable. Please refresh.';return;}
  // Show a brief info overlay explaining the Supabase redirect before sending the user off
  const existing=document.getElementById('google-redirect-notice');
  if(existing)existing.remove();
  const notice=document.createElement('div');
  notice.id='google-redirect-notice';
  notice.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;';
  notice.innerHTML=`
    <div style="background:var(--surface);border:1px solid var(--border2);border-radius:16px;padding:28px 24px;max-width:360px;width:100%;text-align:center;">
      <div style="font-size:36px;margin-bottom:12px">🔐</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:1.5px;margin-bottom:10px;color:var(--text)">${t('google_notice_title')}</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:16px;text-align:left;">${t('google_notice_body')}</div>
      <div style="display:flex;gap:10px;">
        <button id="google-confirm-btn" style="flex:1;padding:12px;background:var(--accent);border:none;border-radius:8px;color:#000;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;cursor:pointer;">${t('google_notice_continue')}</button>
        <button onclick="document.getElementById('google-redirect-notice').remove()" style="flex:1;padding:12px;background:transparent;border:1px solid var(--border2);border-radius:8px;color:var(--muted);font-family:'DM Mono',monospace;font-size:11px;cursor:pointer;">${t('google_notice_cancel')}</button>
      </div>
    </div>`;
  document.body.appendChild(notice);
document.getElementById('google-confirm-btn').onclick = async () => {
    notice.remove();

    const redirectTo = window.location.origin;

    const { error } = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectTo,
            queryParams: { access_type: 'offline', prompt: 'consent' }
        }
    });
    if (error) {
        const errEl = document.getElementById('auth-error');
        if (errEl) errEl.textContent = error.message;
    }
};
}

async function doSignOut(){
  try {
    localStorage.removeItem(GUEST_SAVE_KEY);
    localStorage.removeItem('numfly_op_stats');
    localStorage.removeItem('numfly_daily_streak');
    localStorage.removeItem('numfly_campaign');
    localStorage.removeItem('numfly_daily_progress');
    localStorage.removeItem('numfly_pending_daily');
    localStorage.removeItem('numfly_sb');
  } catch(e) {}

  try { if (sb) await sb.auth.signOut(); } catch(e) {}

  window.location.href = '/';
}

function clearDailyLocalState(){
  try{
    const today=getDailyDateStr();
    const d=new Date();d.setUTCDate(d.getUTCDate()-1);
    const yesterday=`${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
    localStorage.removeItem('numfly_daily_'+today);
    localStorage.removeItem('numfly_daily_'+yesterday);
    localStorage.removeItem('numfly_daily_progress');
  }catch(e){}
}

// ── Edit username ─────────────────────────────────────────────────────────────
function isOAuthUser(){
  if(!currentUser)return false;
  const provider=currentUser.app_metadata?.provider||currentUser.identities?.[0]?.provider||'email';
  return provider!=='email';
}
function pwCooldownKey(){return currentUser?'numfly_pw_changed_'+currentUser.id:'numfly_pw_changed_guest';}
function updateChangePwBtn(){
  const btn=document.getElementById('sb-change-pw-btn');
  const coolEl=document.getElementById('sb-pw-cooldown');
  if(!btn)return;
  // Hide entirely for Google/OAuth users — they manage their password via their provider
  if(isOAuthUser()){
    btn.style.display='none';
    if(coolEl)coolEl.style.display='none';
    return;
  }
  btn.style.display='';
  try{
    const last=parseInt(localStorage.getItem(pwCooldownKey())||'0');
    if(last&&Date.now()-last<24*3600*1000){
      const rem=24*3600*1000-(Date.now()-last);
      const h=Math.floor(rem/3600000),m=Math.floor((rem%3600000)/60000);
      btn.disabled=false;btn.style.opacity='.45';btn.style.cursor='not-allowed';
      if(coolEl){
        coolEl.textContent=t('auth_reset_cooldown_hrs').replace('{h}',h).replace('{m}',m);
        coolEl.style.display='block';
        clearTimeout(coolEl._t);
        coolEl._t=setTimeout(()=>{coolEl.style.display='none';},4000);
      }
      return;
    }
  }catch(e){}
  btn.disabled=false;btn.style.opacity='1';btn.style.cursor='pointer';
  if(coolEl)coolEl.style.display='none';
}
function openChangePw(){
  const PW_KEY=pwCooldownKey();
  const coolEl=document.getElementById('sb-pw-cooldown');
  // Check 24h cooldown
  try{
    const last=parseInt(localStorage.getItem(PW_KEY)||'0');
    if(last&&Date.now()-last<24*3600*1000){
      const rem=24*3600*1000-(Date.now()-last);
      const h=Math.floor(rem/3600000),m=Math.floor((rem%3600000)/60000);
      if(coolEl){
        coolEl.textContent=t('auth_reset_cooldown_hrs').replace('{h}',h).replace('{m}',m);
        coolEl.style.display='block';
        clearTimeout(coolEl._t);
        coolEl._t=setTimeout(()=>{coolEl.style.display='none';},4000);
      }
      return;
    }
  }catch(e){}
  if(!currentUser)return;
  // Show inline password change modal
  document.getElementById('change-pw-overlay')?.remove();
  const ov=document.createElement('div');
  ov.id='change-pw-overlay';
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;';
  ov.innerHTML=`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:28px 24px;max-width:320px;width:100%;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px;margin-bottom:4px">${t('sidebar_change_pw')}</div>
      <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);margin-bottom:16px">${t('change_pw_sub')}</div>
      <div id="cpw-error" style="font-family:'DM Mono',monospace;font-size:11px;color:var(--error);min-height:14px;margin-bottom:10px"></div>
      <div style="margin-bottom:10px">
        <label style="display:block;font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:5px">${t('change_pw_current')}</label>
        <div class="auth-pw-wrap"><input type="password" id="cpw-current" autocomplete="current-password" style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:16px;padding:10px 12px;outline:none;box-sizing:border-box;"><button type="button" class="auth-eye-btn" onclick="togglePwVis('cpw-current',this)" tabindex="-1"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div>
      </div>
      <div style="margin-bottom:10px">
        <label style="display:block;font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:5px">${t('auth_password_label')}</label>
        <div class="auth-pw-wrap"><input type="password" id="cpw-new" autocomplete="new-password" style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:16px;padding:10px 12px;outline:none;box-sizing:border-box;"><button type="button" class="auth-eye-btn" onclick="togglePwVis('cpw-new',this)" tabindex="-1"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div>
      </div>
      <div style="margin-bottom:16px">
        <label style="display:block;font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:5px">${t('auth_confirm_password_label')}</label>
        <div class="auth-pw-wrap"><input type="password" id="cpw-confirm" autocomplete="new-password" style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:16px;padding:10px 12px;outline:none;box-sizing:border-box;"><button type="button" class="auth-eye-btn" onclick="togglePwVis('cpw-confirm',this)" tabindex="-1"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div>
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;">
        <button id="cpw-save-btn" class="btn btn-primary" style="margin:0;padding:8px 16px;font-size:11px" onclick="doChangePw()">${t('auth_set_new_password')}</button>
        <button class="btn btn-secondary" style="margin:0;padding:8px 16px;font-size:11px" onclick="document.getElementById('change-pw-overlay').remove()">${t('cancel')}</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  setTimeout(()=>ov.querySelector('#cpw-current')?.focus(),100);
}
async function doChangePw(){
  const cur=document.getElementById('cpw-current')?.value||'';
  const nw=document.getElementById('cpw-new')?.value||'';
  const conf=document.getElementById('cpw-confirm')?.value||'';
  const errEl=document.getElementById('cpw-error');
  const btn=document.getElementById('cpw-save-btn');
  if(!cur){errEl.textContent=t('change_pw_current_required');return;}
  if(nw.length<8){errEl.textContent=t('err_password_short');return;}
  if(nw!==conf){errEl.textContent=t('err_password_mismatch');return;}
  if(btn){btn.disabled=true;btn.textContent='...';}
  // Re-authenticate first
  const{error:signInErr}=await sb.auth.signInWithPassword({email:currentUser.email,password:cur});
  if(signInErr){
    if(btn){btn.disabled=false;btn.textContent=t('auth_set_new_password');}
    errEl.textContent=t('change_pw_wrong_current');
    return;
  }
  const{error}=await sb.auth.updateUser({password:nw});
  if(error){
    if(btn){btn.disabled=false;btn.textContent=t('auth_set_new_password');}
    errEl.textContent=error.message;return;
  }
  // Success — record timestamp and disable button
  try{localStorage.setItem(pwCooldownKey(),Date.now().toString());}catch(e){}
  document.getElementById('change-pw-overlay')?.remove();
  updateChangePwBtn();
  // Simple bottom toast — confirmation email is sent silently in background
  const toast=document.createElement('div');
  toast.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);border:1px solid var(--success);border-radius:8px;padding:10px 20px;font-size:13px;color:var(--success);z-index:500;white-space:nowrap;font-family:monospace;background:var(--surface);';
  toast.textContent=t('auth_pw_updated');
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(),3000);
}
function updateEditUsernameBtn(){
  if(!currentProfile)return;
  const btn=document.getElementById('sb-edit-btn');
  const cooldownEl=document.getElementById('sb-username-cooldown');
  if(!btn)return;
  const lastChanged=currentProfile.username_changed_at;
  if(lastChanged){
    const daysSince=(Date.now()-new Date(lastChanged).getTime())/(1000*60*60*24);
    if(daysSince<30){
      btn.textContent=t('sidebar_edit_username');
      // Don't use disabled — it prevents onclick from firing
      // Use visual disabled style only
      btn.disabled=false;
      btn.style.opacity='.45';
      btn.style.cursor='not-allowed';
      if(cooldownEl)cooldownEl.style.display='none';
      return;
    }
  }
  btn.textContent=t('sidebar_edit_username');
  btn.disabled=false;btn.style.opacity='1';btn.style.cursor='pointer';
  if(cooldownEl)cooldownEl.style.display='none';
}
function openEditUsername(){
  if(!currentProfile)return;
  const lastChanged=currentProfile.username_changed_at;
  if(lastChanged){
    const daysSince=(Date.now()-new Date(lastChanged).getTime())/(1000*60*60*24);
    if(daysSince<30){
      // Show cooldown message briefly
      const el=document.getElementById('sb-username-cooldown');
      const daysLeft=Math.ceil(30-daysSince);
      if(el){
        el.textContent=t('username_cooldown_days').replace('{n}',daysLeft);
        el.style.display='block';
        clearTimeout(el._timer);
        el._timer=setTimeout(()=>{el.style.display='none';},3000);
      }
      return;
    }
  }
  const errEl=document.getElementById('edit-username-error');
  if(errEl)errEl.textContent='';
  document.getElementById('edit-username-sub').textContent=t('username_cooldown_sub');
  document.querySelector('.edit-user-box .btn-primary').disabled=false;
  const inp=document.getElementById('edit-username-input');
  if(inp)inp.value=currentProfile.username;
  document.getElementById('modal-edit-username').classList.add('open');
}
function closeEditUsername(){document.getElementById('modal-edit-username').classList.remove('open');}
async function doEditUsername(){
  const newName=document.getElementById('edit-username-input').value.trim();
  const errEl=document.getElementById('edit-username-error');
  if(!newName||newName.length<3){errEl.textContent=t('err_username_short');return;}
  if(!/^[a-zA-Z0-9_]+$/.test(newName)){errEl.textContent=t('err_username_chars');return;}
  if(newName===currentProfile.username){closeEditUsername();return;}
  // Check uniqueness
  const{data:existing}=await sb.from('profiles').select('id').ilike('username',newName).maybeSingle();
  if(existing){errEl.textContent=t('err_username_taken');return;}
  const{error}=await sb.from('profiles').update({username:newName,username_changed_at:new Date().toISOString()}).eq('id',currentUser.id);
  if(error){errEl.textContent=error.message;return;}
  currentProfile.username=newName;currentProfile.username_changed_at=new Date().toISOString();
  updateSocialUI();closeEditUsername();
  // Refresh leaderboard so the new name shows immediately if it's open
  if(document.getElementById('screen-leaderboard')?.classList.contains('active')){
    loadLeaderboard(_lbKey||'xp');
  }
}

// ── Sync ──────────────────────────────────────────────────────────────────────
async function pushToSupabase(){
  if(!currentUser||!_cloudDataLoaded)return; // never overwrite cloud with zeroes
  const streak=getDailyStreak();
  // Build a full snapshot of all stats + plays (stored as JSONB server-side)
  const fullStats={
    stats:JSON.parse(JSON.stringify(stats)),
    hsPlays:{
      lightning:{easy:hs.lightning.easy.plays||0,medium:hs.lightning.medium.plays||0,hard:hs.lightning.hard.plays||0},
      speed:{easy:hs.speed.easy.plays||0,medium:hs.speed.medium.plays||0,hard:hs.speed.hard.plays||0}
    },
    speedDur: hs.speedDur,
    v:2 // schema version for future migrations
  };
  // Use server-side RPC so scores are validated in the database, not the browser
  // Compute total games played across all modes
  const _totalGames=['easy','medium','hard'].reduce((a,d)=>a+hs.speed[d].plays+hs.lightning[d].plays,0)+(stats.dailyCompleted||0);
  const _campaignProg=getCampaignProgress();
  await withTimeout(sb.rpc('submit_progress',{
    p_xp_total:xp.total,p_xp_level:xp.level,
    p_hs_speed_easy:hs.speed.easy.score,p_hs_speed_medium:hs.speed.medium.score,p_hs_speed_hard:hs.speed.hard.score,
    p_hs_lightning_easy:hs.lightning.easy.score,p_hs_lightning_medium:hs.lightning.medium.score,p_hs_lightning_hard:hs.lightning.hard.score,
    p_hs_lightning_easy_score:hs.lightning.easy.bestPrecision||0,
    p_hs_lightning_medium_score:hs.lightning.medium.bestPrecision||0,
    p_hs_lightning_hard_score:hs.lightning.hard.bestPrecision||0,
    p_total_play_time:stats.totalPlayTime,p_total_correct:stats.totalCorrect,p_total_answers:stats.totalAnswers,
    p_daily_streak_count:streak.count,p_daily_streak_last:streak.lastDate,
    p_full_stats:fullStats,
    p_total_wrong:stats.totalWrong||0,
    p_tip_sessions:stats.tipSessions||0,
    p_games_played:_totalGames,
    p_longest_speed_streak:stats.longestSpeedStreak||0,
    p_longest_lightning_streak:stats.longestLightningStreak||0,
    p_longest_lightning_seq:stats.longestCorrectSequence||0,
    p_longest_lightning_seq_mh:stats.longestCorrectSequenceMedHard||0,
    p_daily_best_streak:stats.dailyBestStreak||0,
    p_longest_practice_streak:stats.longestPracticeStreak||0,
    p_campaign_highest_unlocked:_campaignProg.highestUnlocked||1,
    p_campaign_completed:_campaignProg.completed||[]
  }));
  if(earnedAchievements.size>0){
    const rows=[...earnedAchievements].map(id=>({user_id:currentUser.id,achievement_id:id}));
    await sb.from('user_achievements').upsert(rows,{onConflict:'user_id,achievement_id',ignoreDuplicates:true});
  }
}
async function pullFromSupabase(){
  if(!currentUser)return;
  // Fetch progress — abort entirely if network/token fails (keeps guest data safe)
  const{data:prog,error:progErr}=await withTimeout(sb.from('user_progress').select('*').eq('user_id',currentUser.id).maybeSingle());
  if(progErr){console.warn('[Numfly] pullFromSupabase aborted:',progErr.message);return;}
  // Only now is it safe to clear local guest data — we have confirmed server data
  try{localStorage.removeItem(GUEST_SAVE_KEY);}catch(e){}
  if(prog){
    // Always take server values when logged in — server is the source of truth
    xp.total=prog.xp_total||0;xp.level=prog.xp_level||1;
    recalcLevelSilently();
    hs.speed.easy.score=prog.hs_speed_easy||0;hs.speed.medium.score=prog.hs_speed_medium||0;hs.speed.hard.score=prog.hs_speed_hard||0;
    hs.lightning.easy.score=prog.hs_lightning_easy||0;hs.lightning.medium.score=prog.hs_lightning_medium||0;hs.lightning.hard.score=prog.hs_lightning_hard||0;
    hs.lightning.easy.bestPrecision=prog.hs_lightning_easy_score||0;hs.lightning.medium.bestPrecision=prog.hs_lightning_medium_score||0;hs.lightning.hard.bestPrecision=prog.hs_lightning_hard_score||0;
    lightning.cumulativeScore=Math.max(hs.lightning.easy.bestPrecision,hs.lightning.medium.bestPrecision,hs.lightning.hard.bestPrecision);
    // Seed per-duration HS with existing scores as the 120s baseline (only if not already set)
    ['easy','medium','hard'].forEach(d=>{if(hs.speed[d].score>0&&!hs.speedDur[d+'_120'])hs.speedDur[d+'_120']=hs.speed[d].score;});
    stats.totalCorrect=prog.total_correct||0;stats.totalAnswers=prog.total_answers||0;stats.totalPlayTime=prog.total_play_time||0;
    // Restore columns added in the stats fix
    if(typeof prog.total_wrong==='number')stats.totalWrong=prog.total_wrong;
    if(typeof prog.tip_sessions==='number')stats.tipSessions=prog.tip_sessions;
    // games_played: store DB value as fallback for new-device sessions where plays arrays are empty
    if(typeof prog.games_played==='number')stats._gamesPlayedServer=prog.games_played;
    renderXPPanel();renderHSPanel();
  }
  // Restore full stats — prefer server full_stats column, fall back to localStorage
  let restoredFromServer=false;
  if(prog&&prog.full_stats){
    try{
      const fs=prog.full_stats;
      if(fs.stats&&typeof fs.stats==='object'){
        // Restore all numeric stat fields from server snapshot
        const numKeys=['totalAnswers','totalCorrect','totalWrong','totalPlayTime',
          'longestSpeedStreak','currentSpeedStreak','longestLightningStreak','longestCorrectSequence','longestCorrectSequenceMedHard','longestCorrectSequenceMedHard',
          'practiceCorrect','practiceWrong','currentPracticeStreak','longestPracticeStreak',
          'tipSessions','dailyCompleted','dailyBestStreak'];
        numKeys.forEach(k=>{if(typeof fs.stats[k]==='number')stats[k]=fs.stats[k];});
        if(typeof fs.stats.dailyBestTime==='number')stats.dailyBestTime=fs.stats.dailyBestTime;
        if(typeof fs.stats.dailyWorstTime==='number')stats.dailyWorstTime=fs.stats.dailyWorstTime;
        // Restore object stats
        const objKeys=['opCorrect','opWrong','modeOpCorrect','modeOpWrong',
          'diffOpCorrect','diffOpWrong','modeAnswers','modeCorrect','modePlayTime'];
        objKeys.forEach(k=>{if(fs.stats[k]&&typeof fs.stats[k]==='object')Object.assign(stats[k],fs.stats[k]);});
        if(Array.isArray(fs.stats.speedScoreHistory)&&fs.stats.speedScoreHistory.length>0)stats.speedScoreHistory=fs.stats.speedScoreHistory;
        if(Array.isArray(fs.stats.lightningStreakHistory)&&fs.stats.lightningStreakHistory.length>0)stats.lightningStreakHistory=fs.stats.lightningStreakHistory;
      }
      // Restore plays from server snapshot
      if(fs.hsPlays){
        if(fs.hsPlays.lightning){['easy','medium','hard'].forEach(d=>{if(typeof fs.hsPlays.lightning[d]==='number')hs.lightning[d].plays=fs.hsPlays.lightning[d];});}
        if(fs.hsPlays.speed){['easy','medium','hard'].forEach(d=>{if(typeof fs.hsPlays.speed[d]==='number')hs.speed[d].plays=fs.hsPlays.speed[d];});}
    }
    if(fs.speedDur && typeof fs.speedDur === 'object'){
      Object.assign(hs.speedDur, fs.speedDur);
    }
    restoredFromServer=true;
      console.log('[Numfly] Full stats restored from server snapshot');
    }catch(e){console.warn('[Numfly] full_stats restore failed:',e);}
  }
  // Always override scalar stats from dedicated DB columns (authoritative, more current than full_stats snapshot)
  if(prog){
    if(typeof prog.total_wrong==='number')stats.totalWrong=prog.total_wrong;
    if(typeof prog.tip_sessions==='number')stats.tipSessions=prog.tip_sessions;
    if(typeof prog.total_correct==='number')stats.totalCorrect=prog.total_correct;
        if(typeof prog.total_answers==='number')stats.totalAnswers=prog.total_answers;
    // Restore streak/sequence bests from dedicated columns (survive full_stats wipe)
    if(typeof prog.longest_speed_streak==='number')stats.longestSpeedStreak=Math.max(stats.longestSpeedStreak||0,prog.longest_speed_streak);
    if(typeof prog.longest_lightning_streak==='number')stats.longestLightningStreak=Math.max(stats.longestLightningStreak||0,prog.longest_lightning_streak);
    if(typeof prog.longest_lightning_seq==='number')stats.longestCorrectSequence=Math.max(stats.longestCorrectSequence||0,prog.longest_lightning_seq);
    if(typeof prog.longest_lightning_seq_mh==='number')stats.longestCorrectSequenceMedHard=Math.max(stats.longestCorrectSequenceMedHard||0,prog.longest_lightning_seq_mh);
    if(typeof prog.daily_best_streak==='number')stats.dailyBestStreak=Math.max(stats.dailyBestStreak||0,prog.daily_best_streak);
    if(typeof prog.longest_practice_streak==='number')stats.longestPracticeStreak=Math.max(stats.longestPracticeStreak||0,prog.longest_practice_streak);
    if(prog.campaign_highest_unlocked||prog.campaign_completed||getCampaignProgress().completed.length>0){
      const local=getCampaignProgress();
      const merged={
        highestUnlocked:Math.max(local.highestUnlocked,prog.campaign_highest_unlocked||1),
        completed:[...new Set([...local.completed,...(prog.campaign_completed||[])])]
      };
      saveCampaignProgress(merged);
      // Push back to server if local is ahead (covers players who played before Supabase sync existed)
      const serverBehind=(merged.highestUnlocked>(prog.campaign_highest_unlocked||1))||
        (merged.completed.length>(prog.campaign_completed||[]).length);
      if(serverBehind) pushCampaignProgress(merged);
    }
  
  }
  if(!restoredFromServer){
    // Fall back to localStorage (older accounts or first login on new device)
    try{
      const raw=localStorage.getItem('numfly_op_stats');
      if(raw){
        const op=JSON.parse(raw);
        const objKeys=['opCorrect','opWrong','modeOpCorrect','modeOpWrong',
          'diffOpCorrect','diffOpWrong','modeAnswers','modeCorrect','modePlayTime'];
        objKeys.forEach(k=>{if(op[k]&&typeof op[k]==='object')Object.assign(stats[k],op[k]);});
        const dailyNumKeys=['dailyCompleted','dailyBestStreak','totalWrong','tipSessions',
          'totalAnswers','totalCorrect','totalPlayTime','practiceCorrect','practiceWrong'];
        dailyNumKeys.forEach(k=>{if(typeof op[k]==='number')stats[k]=op[k];});
        if(op.dailyBestTime)stats.dailyBestTime=op.dailyBestTime;
        if(op.dailyWorstTime)stats.dailyWorstTime=op.dailyWorstTime;
        const streakKeys=['longestLightningStreak','longestCorrectSequence','longestSpeedStreak','longestPracticeStreak'];
        streakKeys.forEach(k=>{if(typeof op[k]==='number'&&op[k]>0)stats[k]=op[k];});
        if(Array.isArray(op.speedScoreHistory)&&op.speedScoreHistory.length>0)stats.speedScoreHistory=op.speedScoreHistory;
        if(Array.isArray(op.lightningStreakHistory)&&op.lightningStreakHistory.length>0)stats.lightningStreakHistory=op.lightningStreakHistory;
        if(op.hsLightningPlays){['easy','medium','hard'].forEach(d=>{if(typeof op.hsLightningPlays[d]==='number')hs.lightning[d].plays=op.hsLightningPlays[d];});}
        if(op.hsSpeedPlays){['easy','medium','hard'].forEach(d=>{if(typeof op.hsSpeedPlays[d]==='number')hs.speed[d].plays=op.hsSpeedPlays[d];});}
        console.log('[Numfly] Stats restored from localStorage fallback');
      }
    }catch(e){}
  }
  
  if(prog&&prog.daily_streak_count!=null){
    const local=getDailyStreak();
    const serverCount=prog.daily_streak_count||0;
  
    const serverDate=prog.daily_streak_last_date||prog.daily_streak_last||'';

    const todayStr=getDailyDateStr();
    const yesterdayStr=getPrevDateStr(todayStr);
    const serverExpired=serverDate&&serverDate!==todayStr&&serverDate!==yesterdayStr;
    const effectiveServerCount=serverExpired?0:serverCount;
    const serverAhead=!serverExpired&&(
      serverDate>local.lastDate
      ||(serverDate===local.lastDate&&serverCount>=local.count)
      ||(serverCount>local.count)
    );
    if(serverAhead){
      const merged={count:effectiveServerCount,lastDate:serverDate||local.lastDate};
      try{localStorage.setItem(STREAK_KEY,JSON.stringify(merged));}catch(e){}
      console.log('[Numfly] Streak synced from server:',effectiveServerCount,'days (was',local.count,'), last:',serverDate);
    } else if(serverExpired&&local.count>0){
      // Server has stale streak — local expiry check already handled it above
      console.log('[Numfly] Server streak expired, local already reset');
    } else if(local.count>effectiveServerCount&&local.lastDate>=serverDate){
      // Local is ahead of server — push immediately so server catches up
      if(currentUser)pushToSupabase();
    }
  }
  const{data:achs}=await withTimeout(sb.from('user_achievements').select('achievement_id').eq('user_id',currentUser.id));
  if(achs)achs.forEach(r=>earnedAchievements.add(r.achievement_id));
_cloudDataLoaded=true; 
  checkAchievements(true); 
  
  const activeScreen = document.querySelector('.screen.active')?.id;
  if (activeScreen === 'screen-achievements') renderAchievements();
  if (activeScreen === 'screen-stats') renderStatsContent();
  if (activeScreen === 'screen-leaderboard') loadLeaderboard(_lbKey || 'xp');
  if (activeScreen === 'screen-friends') loadFriends();
  if (activeScreen === 'screen-menu') { renderHSPanel(); renderXPPanel(); }
}

let syncTimer=null;
let _cloudDataLoaded=false; 
function scheduleSync(){
  if(!currentUser)return;
  if(syncTimer)clearTimeout(syncTimer);
  syncTimer=setTimeout(pushToSupabase,2000);
}

