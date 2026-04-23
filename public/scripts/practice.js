// ══════════════════════════════════════════════════════════════════════════════
// PRACTICE
// ══════════════════════════════════════════════════════════════════════════════
function startPractice(){
  practiceOps=new Set([...document.querySelectorAll('#practice-op-row .op-btn.active')].map(b=>b.dataset.op));
  practice.opBag=[];
  recentQs.practice=new Set(); // reset per session
  if(practice.timer)clearInterval(practice.timer);
  practice.timer=setInterval(()=>{stats.totalPlayTime++;stats.modePlayTime.practice=(stats.modePlayTime.practice||0)+1;},1000);
  showScreen('screen-practice-game');
  document.getElementById('p-feedback').textContent='';practice.waiting=false;nextPracticeQ();
}
function nextPracticeQ(){
  const opsArr=[...practiceOps];
  const op=opsArr.length>1?pickFromBag(practice.opBag,opsArr):opsArr[0];
  const p=genProblem(diff.practice,[op],'practice');
  practice.ans=p.ans;practice.waiting=false;practice.currentOp=p.op;practice.wrongCount=0;
  document.getElementById('p-question').textContent=p.q;
  document.getElementById('p-op-type').textContent=p.type;
  document.getElementById('p-answer').value='';document.getElementById('p-answer').focus();
  document.getElementById('p-feedback').textContent='';document.getElementById('p-feedback').className='feedback';
}
function checkPracticeAnswer(){
  if(practice.waiting)return;
  const val=document.getElementById('p-answer').value.trim();
  if(val==='')return;
  const fb=document.getElementById('p-feedback');
  const isRight=checkAns(val,practice.ans);
  const isPracticeFirstAttempt=(practice.wrongCount||0)===0;
  // Only record stats on first attempt — retries don't count toward global stats
  if(isPracticeFirstAttempt){
    recordAnswer(practice.currentOp,isRight,'practice',diff.practice);
  }
  const disp=Number.isInteger(practice.ans)?practice.ans:practice.ans.toFixed(2);
  if(isRight){
    sfxCorrect();
    fb.textContent=t('check_correct');fb.className='feedback ok';
    stats.practiceCorrect=(stats.practiceCorrect||0)+1;
    stats.currentPracticeStreak=(stats.currentPracticeStreak||0)+1;
    if(stats.currentPracticeStreak>stats.longestPracticeStreak)stats.longestPracticeStreak=stats.currentPracticeStreak;
  } else {
    if(isPracticeFirstAttempt){
      sfxWrong();
      stats.currentPracticeStreak=0;
      stats.practiceWrong=(stats.practiceWrong||0)+1; // first wrong attempt only
    }
    practice.wrongCount=(practice.wrongCount||0)+1; // drives show-answer-after-2 UX only
    if(practice.wrongCount>=2){
      fb.textContent=`${t('check_wrong_prefix')} ${disp}.`;fb.className='feedback bad';
      practice.waiting=true;setTimeout(nextPracticeQ,1800);
    }else{
      fb.textContent=t('speed_wrong');fb.className='feedback bad';
      document.getElementById('p-answer').value='';document.getElementById('p-answer').focus();
      return;
    }
  }
  if(isRight){practice.waiting=true;setTimeout(nextPracticeQ,350);}
}
const pAns = document.getElementById('p-answer');
if (pAns) pAns.addEventListener('keydown', e => { if(e.key==='Enter') checkPracticeAnswer(); });
const _dcAnswerEl=document.getElementById('dc-answer');
if(_dcAnswerEl){_dcAnswerEl.addEventListener('keydown',e=>{if(e.key==='Enter')checkDailyAnswer();});}

// Enter key triggers yellow (primary) button on setup/result screens
let resultScreenShownAt=0;
document.addEventListener('keydown',function(e){
  if(e.key!=='Enter')return;
  const activeScreen=document.querySelector('.screen.active');
  if(!activeScreen)return;
  const id=activeScreen.id;
  const resultScreens=['screen-lightning-result','screen-speed-result'];
  const setupScreens=['screen-lightning-setup','screen-speed-setup','screen-practice-setup'];
  if(resultScreens.includes(id)){
    // Guard: ignore Enter for 600ms after result screen appears (prevents the
    // same Enter keypress that submitted the answer from instantly triggering Keep Going)
    if(Date.now()-resultScreenShownAt<600)return;
    const primaryBtn=activeScreen.querySelector('.btn-primary');
    if(primaryBtn){e.preventDefault();primaryBtn.click();}
  } else if(setupScreens.includes(id)){
    const focused=document.activeElement;
    if(focused&&focused.tagName==='INPUT'&&focused.type==='number')return;
    const primaryBtn=activeScreen.querySelector('.btn-primary');
    if(primaryBtn){e.preventDefault();primaryBtn.click();}
  }
});

// Integer-only inputs — block '.' and ',' on all game answer inputs
(function(){
  const answerIds=['l-answer','s-answer','p-answer','tp-answer','dc-answer','cmp-answer'];
  answerIds.forEach(id=>{
    const el=document.getElementById(id);
    if(el) { // <--- Added safety check
      el.addEventListener('keydown',function(e){
        if(e.key==='.'||e.key===','||e.key==='Decimal')e.preventDefault();
      });
      el.addEventListener('input',function(){
        if(this.value.includes('.')||this.value.includes(',')){
          this.value=this.value.replace(/[.,]/g,'');
        }
      });
    }
  });
})();

// ── Mobile keyboard: prevent page scroll when soft keyboard opens ────────────
(function(){
  const KB_SCREENS=['screen-speed-game','screen-practice-game','screen-tip-practice','screen-daily-game','screen-lightning-game'];
  function isKbScreen(){const a=document.querySelector('.screen.active');return a&&KB_SCREENS.includes(a.id);}

  // Strategy 1: visualViewport (modern Android/iOS) — shrinks when keyboard opens.
  // We set the app height to the visual viewport height so content doesn't get
  // pushed up by the browser's layout viewport resize.
  const app=document.querySelector('.app')||document.body;
  if(window.visualViewport){
    let _kbOpen=false;
    const onViewportChange=()=>{
      if(!isKbScreen())return;
      const vh=window.visualViewport.height;
      const fullVh=window.innerHeight;
      const kbOpen=(fullVh-vh)>120; // keyboard is open if viewport shrank >120px
      if(kbOpen!==_kbOpen){
        _kbOpen=kbOpen;
        if(kbOpen){
          // Keyboard just opened — scroll to top instantly so HUD stays visible
          window.scrollTo({top:0,behavior:'instant'});
          document.documentElement.style.setProperty('--vh',vh+'px');
        } else {
          document.documentElement.style.removeProperty('--vh');
          window.scrollTo({top:0,behavior:'instant'});
        }
      }
    };
    window.visualViewport.addEventListener('resize',onViewportChange,{passive:true});
    window.visualViewport.addEventListener('scroll',()=>{
      if(_kbOpen&&isKbScreen())window.scrollTo({top:0,behavior:'instant'});
    },{passive:true});
  }

  // Strategy 2: focusin / Enter fallback for older browsers
  document.addEventListener('focusin',e=>{
    if(e.target.tagName!=='INPUT'||!isKbScreen())return;
    setTimeout(()=>window.scrollTo({top:0,behavior:'instant'}),150);
  },{passive:true});
  document.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&isKbScreen())setTimeout(()=>window.scrollTo({top:0,behavior:'instant'}),50);
  },{passive:true});
})();

