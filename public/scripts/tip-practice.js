// ══════════════════════════════════════════════════════════════════════════════
// Tip-specific problem generator
// Generates problems that specifically exercise each tip's technique
// ══════════════════════════════════════════════════════════════════════════════
function genTipProblem(tipIdx){
  const tip=TIPS[tipIdx];
  const key=tip.title.en;
  function rv(lo,hi){return Math.floor(Math.random()*(hi-lo+1))+lo;}
  // rv2: always at least 2 digits (>=10), respects lo if lo>=10
  function rv2(lo,hi){const mn=Math.max(lo,10);return Math.floor(Math.random()*(hi-mn+1))+mn;}
  function mkMul(a,b){return{q:`${a} × ${b}`,ans:a*b,type:t('op_type_mul'),op:'mul'};}
  function mkAdd(a,b){return{q:`${a} + ${b}`,ans:a+b,type:t('op_type_add'),op:'add'};}
  function mkSub(a,b){return{q:`${a} − ${b}`,ans:a-b,type:t('op_type_sub'),op:'sub'};}
  function mkDiv(num,den){return{q:`${num} ÷ ${den}`,ans:num/den,type:t('op_type_div'),op:'div'};}
  function mkPct(p,base){return{q:`${p}% of ${base}`,ans:Math.round(p*base/100),type:t('op_type_pct'),op:'pct'};}

  // Multiplication tips — main number always ≥10
  if(key==='Multiply by 5'){return mkMul(rv2(10,40),5);}
  if(key==='Multiply by 9'){return mkMul(rv2(10,20),9);}
  if(key==='Multiply by 11 (two digits)'){
    // Pick a 2-digit number where digit sum < 10 (so result is clean)
    let a;do{a=rv(11,81);}while(Math.floor(a/10)+(a%10)>=10);
    return mkMul(a,11);
  }
  if(key==='Multiply by 25'){return mkMul(rv2(10,40)*2,25);}
  if(key==='Multiply by 4'){return mkMul(rv2(12,50),4);}
  if(key==='Multiply by 8'){return mkMul(rv2(11,30),8);}
  if(key==='Multiply by 15'){return mkMul(rv2(10,20)*2,15);}
  if(key==='Difference of squares'){const mid=rv(11,30),d=rv(1,4);return mkMul(mid-d,mid+d);}
  if(key==='Break numbers apart'){return mkMul(rv2(11,25),rv2(11,25));}
  if(key==='Multiply two numbers near 100'){return mkMul(rv2(90,110),rv2(90,110));}

  // Addition tips — all operands ≥10
  if(key==='Left-to-right addition'||key==='Chunking large sums'){
    return mkAdd(rv2(100,500),rv2(100,500));
  }
  if(key==='Chunking large differences'){
    const b=rv2(100,400),a=b+rv2(50,300);return mkSub(a,b);
  }
  if(key==='Round and adjust'){
    const base=rv(2,9)*10,adj=rv(1,9);return mkAdd(base-adj,rv2(12,60));
  }
  if(key==='Make tens / hundreds'){
    // Use pairs that sum to 100 (both ≥10)
    const a=rv(11,89),b=100-a,c=rv(1,8)*10,d=rv2(11,50);
    return{q:`${a}+${c}+${b}+${d}`,ans:a+b+c+d,type:t('op_type_add'),op:'add'};
  }
  if(key==='Double and halve'){
    // Pick a×25 + even number so doubling gives round hundreds
    const a=pick([75,125,175,225,275]);const b=rv(2,12)*2;
    return mkAdd(a,b*10);
  }
  if(key==='Work with complements'){return mkAdd(rv2(51,90),rv2(51,90));}

  // Subtraction tips — all operands ≥10
  if(key==='Subtract by adding up'){const b=rv2(30,70),a=b+rv2(12,50);return mkSub(a,b);}
  if(key==='Round and adjust (subtraction)'){
    const sub=rv(2,9)*10-rv(1,8);return mkSub(sub+rv2(30,100),sub);
  }
  if(key==='Subtract near-multiples of 100'){
    const near=rv(2,9)*100+pick([1,2,-1,-2]);return mkSub(near+rv2(50,300),near);
  }
  if(key==='Subtract from 1000'){return mkSub(1000,rv2(100,899));}

  // Division tips — quotients always ≥10 so dividend is at least 2-digit
  if(key==='Divide by 5'){const q=rv2(10,40);return mkDiv(q*5,5);}
  if(key==='Divide by 4'){const q=rv2(10,25);return mkDiv(q*4,4);}
  if(key==='Divide by 25'){const q=rv2(4,20);return mkDiv(q*25,25);}
  if(key==='Simplify before dividing'){
    const cf=pick([2,3,4,5]);const q=rv2(5,20);const d=pick([6,9,12,15,18,21]);
    const a=q*d,b=d;return mkDiv(a,b);
  }
  if(key==='Divide by 8'){const q=rv2(10,20);return mkDiv(q*8,8);}
  if(key==='Long division shortcut — factor the divisor'){
    const factors=[[2,7],[2,6],[3,4],[3,6],[2,9]];const[f1,f2]=pick(factors);
    const d=f1*f2,q=rv2(10,20);return mkDiv(q*d,d);
  }
  if(key==='Divisibility shortcuts'){
    const mult=pick([3,9,6]);const q=rv2(10,20);return mkDiv(q*mult,mult);
  }

  // Percentage tips
  if(key==='The 1% anchor'){
    // Only use percentages that produce integer answers with the chosen base
    const pctCombos=[[11,100],[12,100],[13,100],[14,100],[15,100],[16,100],[17,100],[18,100],[19,100],[11,200],[12,200],[15,200],[18,200],[20,150],[12,150],[14,150],[16,150]];
    return mkPct(...pick(pctCombos));
  }
  if(key==='Flip the percentage'){
    return mkPct(...pick([[4,75],[8,25],[12,25],[4,50],[6,50],[2,50]]));
  }
  if(key==='Percentages via fractions'){
    // All combos guaranteed integer: 25%→×4, 50%→×2, 33%→×3 (rounded is ok for 33)
    const opts=[[25,rv(4,20)*4],[50,rv(2,20)*2],[20,rv(5,25)*5],[10,rv(1,20)*10],[75,rv(1,8)*4]];
    const[p,base]=pick(opts);
    const ans=Math.round(p*base/100);
    return{q:`${p}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
  }
  if(key==='10% as a building block'){
    return mkPct(pick([30,40,60,70,80,90,110,120,130]),pick([20,40,50,60,80,100,120,200]));
  }

  // General fallback — always medium difficulty (numbers ≥10 by range definition)
  const opsForGen=tip.ops.filter(o=>o!=='pct').length?tip.ops.filter(o=>o!=='pct'):tip.ops;
  return genProblem('medium',[pick(opsForGen)],'tip');
}

// Wrap genTipProblem with repeat-prevention
function genTipProblemNoRepeat(idx){
  const recent=recentQs.tip;
  for(let attempt=0;attempt<15;attempt++){
    const p=genTipProblem(idx);
    if(p.ans===0)continue;
    if(recent.has(p.q))continue;
    recent.add(p.q);
    if(recent.size>RECENT_MAX)recent.delete(recent.values().next().value);
    return p;
  }
  return genTipProblem(idx);
}

// ══════════════════════════════════════════════════════════════════════════════
// Tip Practice
// ══════════════════════════════════════════════════════════════════════════════
function startTipPractice(idx){
  const tip=TIPS[idx];
  tipPractice.tipIdx=idx;
  tipPractice.correct=0;tipPractice.wrong=0;
  tipPractice.waiting=false;
  tipPractice.op=tip.ops[0];
  tipPractice.level='medium';
  recentQs.tip=new Set(); // reset per tip session
  stats.tipSessions=(stats.tipSessions||0)+1;
  saveOpStats();   // persist tipSessions before the screen switches
  saveGuestState();
  if(currentUser)scheduleSync();
  const cat=tip.cat;
  const tagEl=document.getElementById('tp-tag');
  tagEl.textContent={mul:t('filter_mul'),div:t('filter_div'),add:t('filter_add'),sub:t('filter_sub'),pct:t('filter_pct'),gen:t('filter_gen')}[cat];
  tagEl.className='tip-tag '+cat;
  document.getElementById('tp-name').textContent=tip.title[lang]||tip.title.en;
  document.getElementById('tp-desc').textContent=tip.body[lang]||tip.body.en;
  const exEl=document.getElementById('tp-example');
  exEl.innerHTML=tip.ex[lang]||tip.ex.en;
  document.getElementById('tp-correct').textContent='0';
  document.getElementById('tp-wrong').textContent='0';
  showScreen('screen-tip-practice');
  nextTipQ();
}

function nextTipQ(){
  const p=genTipProblemNoRepeat(tipPractice.tipIdx);
  tipPractice.op=p.op;
  tipPractice.ans=p.ans;tipPractice.waiting=false;
  document.getElementById('tp-question').textContent=p.q;
  document.getElementById('tp-op-type').textContent=p.type;
  document.getElementById('tp-answer').value='';
  document.getElementById('tp-answer').focus();
  document.getElementById('tp-feedback').textContent='';
  document.getElementById('tp-feedback').className='feedback';
}

function checkTipAnswer(){
  if(tipPractice.waiting)return;
  const val=document.getElementById('tp-answer').value.trim();
  if(val==='')return;
  const fb=document.getElementById('tp-feedback');
  const isRight=checkAns(val,tipPractice.ans);
  const disp=Number.isInteger(tipPractice.ans)?tipPractice.ans:tipPractice.ans.toFixed(2);
  if(isRight){
    sfxCorrect();
    tipPractice.correct++;
    document.getElementById('tp-correct').textContent=tipPractice.correct;
    fb.textContent=t('check_correct');fb.className='feedback ok';
  }else{
    sfxWrong();
    tipPractice.wrong++;
    document.getElementById('tp-wrong').textContent=tipPractice.wrong;
    fb.textContent=`${t('check_wrong_prefix')} ${disp}.`;fb.className='feedback bad';
  }
  // Record stats under 'practice' (shares existing stat buckets) but suppress recordAnswer's
  // built-in XP grant — tips use a lower multiplier (0.3) than practice (0.4).
  recordAnswer(tipPractice.op,isRight,'practice','medium',/*noXP=*/true);
  if(isRight){
    const baseXP=(XP_BASE['medium']||12)+(XP_OP_BONUS[tipPractice.op]||0);
    gainXP(Math.max(1,Math.round(baseXP*XP_MODE_MULT.tip*(GAME_CONFIG.XP_EVENT_MULTIPLIER||1))));
  }
  tipPractice.waiting=true;
  setTimeout(nextTipQ,isRight?350:1400);
}

const tpAnswer = document.getElementById('tp-answer');
if (tpAnswer) {
  tpAnswer.addEventListener('keydown', e => { if(e.key==='Enter') checkTipAnswer(); });
}

// ══════════════════════════════════════════════════════════════════════════════
// Reset modal
// ══════════════════════════════════════════════════════════════════════════════
function confirmReset(){document.getElementById('modal-reset').classList.add('open');}
function closeModal(){document.getElementById('modal-reset').classList.remove('open');}
async function doReset(){
  ['easy','medium','hard'].forEach(d=>{hs.lightning[d]={score:0,plays:0,bestPrecision:0};hs.speed[d]={score:0,plays:0};});
  hs.speedDur = {}; 
  Object.assign(stats,{
    totalAnswers:0,totalCorrect:0,totalWrong:0,totalPlayTime:0,speedScoreHistory:[],
    longestSpeedStreak:0,currentSpeedStreak:0,
    lightningStreakHistory:[],longestLightningStreak:0,longestCorrectSequence:0,
    practiceCorrect:0,practiceWrong:0,
    currentPracticeStreak:0,longestPracticeStreak:0,
    opCorrect:{add:0,sub:0,mul:0,div:0,pct:0},opWrong:{add:0,sub:0,mul:0,div:0,pct:0},
    modeOpCorrect:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
    modeOpWrong:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
    modeAnswers:{lightning:0,speed:0,practice:0,daily:0},modeCorrect:{lightning:0,speed:0,practice:0},
    modePlayTime:{lightning:0,speed:0,practice:0,daily:0},tipSessions:0,
    diffOpCorrect:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
    diffOpWrong:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  });
  xp.total=0;xp.level=1;
  earnedAchievements=new Set();
  currentDiffFilter='all';
  document.querySelectorAll('.diff-filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.dfilter==='all'));
  try{localStorage.removeItem(GUEST_SAVE_KEY);}catch(e){} // clear guest save
  try{localStorage.removeItem('numfly_op_stats');}catch(e){} // clear op stats cache
  
  // FIX: Clear the independent daily streak key
  try{localStorage.removeItem('numfly_daily_streak');}catch(e){} 
  
  // FIX: Visually hide the streak badge immediately
  const _sBadge=document.getElementById('daily-streak-badge');
  const _sCard=document.getElementById('daily-card');
  if(_sBadge){_sBadge.style.display='none';_sBadge.style.removeProperty('background');_sBadge.style.removeProperty('border');}
  if(_sCard){['tier-yellow','tier-blue','tier-purple','tier-crystal','tier-crown'].forEach(c=>_sCard.classList.remove(c));}
  const _sCount=document.getElementById('daily-streak-count');
  if(_sCount)_sCount.textContent='0';

  closeModal();renderHSPanel();renderStatsContent();renderXPPanel();
  // Sync reset to Supabase for logged-in users
  if(currentUser&&sb){
    try{
      await sb.from('user_progress').upsert({
        user_id:currentUser.id,
        xp_total:0,xp_level:1,
        hs_speed_easy:0,hs_speed_medium:0,hs_speed_hard:0,
        hs_lightning_easy:0,hs_lightning_medium:0,hs_lightning_hard:0,
        total_play_time:0,total_correct:0,total_answers:0,
        total_wrong:0,tip_sessions:0,games_played:0,
        longest_speed_streak:0,longest_lightning_streak:0,
        longest_lightning_seq:0,longest_lightning_seq_mh:0,
        daily_best_streak:0,longest_practice_streak:0,
        full_stats:null, // wipe stale snapshot so it can't resurrect reset data
        updated_at:new Date().toISOString()
      },{onConflict:'user_id'});
      await sb.from('user_achievements').delete().eq('user_id',currentUser.id);
    }catch(e){console.warn('[Numfly] Reset sync failed:',e);}
  }
}

