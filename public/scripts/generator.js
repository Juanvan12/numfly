// ══════════════════════════════════════════════════════════════════════════════
// Difficulty / ops
// ══════════════════════════════════════════════════════════════════════════════
function selectDiff(mode,level,btn){
  diff[mode]=level;
  btn.closest('.diff-row').querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function toggleOp(btn){
  const active=document.querySelectorAll('#practice-op-row .op-btn.active');
  if(btn.classList.contains('active')&&active.length===1)return;
  btn.classList.toggle('active');
  practiceOps=new Set([...document.querySelectorAll('#practice-op-row .op-btn.active')].map(b=>b.dataset.op));
}

// ══════════════════════════════════════════════════════════════════════════════
// Problem generator
// ══════════════════════════════════════════════════════════════════════════════
const RANGES={
  easy:  {add:[2,20],   sub:[2,20],   mul:[2,9],   divB:[2,9],   divQ:[2,9]},
  medium:{add:[15,150], sub:[15,150], mul:[11,25],  divB:[3,15],  divQ:[11,25]},
  hard:  {add:[50,500], sub:[50,500], mul:[11,49],  divB:[3,25],  divQ:[4,40]},
};
const PCT_NICE=[5,8,10,12,15,16,20,24,25,30,32,35,40,45,48,50,60,64,70,75,80,90];
const PCT_BASES={
  easy:[10,20,25,40,50,60,80,100],
  medium:[20,25,40,50,60,75,80,100,120,125,150,160,200,240,250,300,400,500],
};
const PCT_BASES_HARD=(()=>{const s=new Set();for(let b=10;b<=1000;b+=5)s.add(b);return[...s];})();

function rnd(lo,hi){return Math.floor(Math.random()*(hi-lo+1))+lo;}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}

// Recent question tracker — prevents repeats within a session
const recentQs={speed:new Set(),practice:new Set(),tip:new Set()};
const RECENT_MAX=100; // don't repeat any of the last 12 question strings

function genPct(level){
  if(level==='hard'){
    for(let i=0;i<500;i++){
      const p=rnd(1,99),base=pick(PCT_BASES_HARD),ans=p*base/100;
      if(Number.isInteger(ans)&&ans>0&&ans<=1000)return{q:`${p}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
    }
    return{q:`25% of 200`,ans:50,type:t('op_type_pct'),op:'pct'};
  }
  const bases=PCT_BASES[level]||PCT_BASES.easy;
  for(let i=0;i<200;i++){
    const p=pick(PCT_NICE),base=pick(bases),ans=p*base/100;
    if(Number.isInteger(ans)&&ans>0)return{q:`${p}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
  }
  return{q:`10% of 50`,ans:5,type:t('op_type_pct'),op:'pct'};
}

function genOneProblem(level,op){
  const r=RANGES[level]||RANGES.easy;
  if(op==='add'){
    // Wide spread of values — pick two truly different numbers
    const lo=r.add[0],hi=r.add[1];
    let a,b,attempts=0;
    do{a=rnd(lo,hi);b=rnd(lo,hi);attempts++;}
    while((a+b===0||a===b)&&attempts<30);
    return{q:`${a} + ${b}`,ans:a+b,type:t('op_type_add'),op:'add'};
  }
  if(op==='sub'){
    const[lo,hi]=r.sub;
    let a,b,attempts=0;
    do{
      a=rnd(lo,hi);b=rnd(lo,hi);
      if(a<b){const tmp=a;a=b;b=tmp;}
      attempts++;
    }while(a===b&&attempts<30);
    // If still equal after retries, force a difference of 1 (guaranteed non-zero)
    if(a===b)b=Math.max(lo,a-1)||(a+1<=hi?a+1:a-1);
    return{q:`${a} − ${b}`,ans:a-b,type:t('op_type_sub'),op:'sub'};
  }
  if(op==='mul'){
    const[lo,hi]=r.mul;
    // For extra variety, sometimes swap which factor is the multiplier
    const a=rnd(lo,hi);
    // Second factor: easy=2–9, medium=3–12, hard=6–15
    const bMin=level==='easy'?2:level==='medium'?3:6;
    const bMax=level==='easy'?9:level==='medium'?12:15;
    const b=rnd(bMin,bMax);
    return{q:`${a} × ${b}`,ans:a*b,type:t('op_type_mul'),op:'mul'};
  }
  if(op==='div'){
    const b=rnd(r.divB[0],r.divB[1]);
    const q=rnd(r.divQ[0],r.divQ[1]);
    const a=b*q;
    return{q:`${a} ÷ ${b}`,ans:q,type:t('op_type_div'),op:'div'};
  }
  return genPct(level);
}

function genProblem(level,ops,recentKey){
  const pool=ops&&ops.length?[...ops]:['add','sub','mul','div','pct'];
  const recent=recentKey?recentQs[recentKey]:null;
  // Try up to 20 times to get a non-repeated, non-zero question
  for(let attempt=0;attempt<20;attempt++){
    const op=pick(pool);
    const p=genOneProblem(level,op);
    // Reject zeros and non-integer answers (no decimals in any mode)
    if(p.ans===0)continue;
    if(!Number.isInteger(p.ans))continue;
   // Reject repeats if tracking
    if(recent&&recent.has(p.q))continue;
    // Reject commutative pair (e.g. 6×5 if 5×6 already seen) — for add and mul
    if(recent&&(p.op==='add'||p.op==='mul')){
      const parts=p.q.split(/[×+]/);
      if(parts.length===2){
        const flipped=p.op==='mul'
          ?`${parts[1].trim()} × ${parts[0].trim()}`
          :`${parts[1].trim()} + ${parts[0].trim()}`;
        if(recent.has(flipped))continue;
      }
    }
    // Accept — record it
    if(recent){
      recent.add(p.q);
      if(recent.size>RECENT_MAX){
        // Remove oldest entry (Sets maintain insertion order)
        recent.delete(recent.values().next().value);
      }
    }
    return p;
  }
  // Fallback — just return something valid
  const op=pick(pool);
  return genOneProblem(level,op);
}

// Lightning number generator — avoids 1 in easy, avoids immediate repeats
function genLightningNumbers(count,diff){
  const r=RANGES[diff]||RANGES.easy;
  // For easy: use range 2–20 (already updated in RANGES), exclude 1
  const lo=r.add[0],hi=r.add[1];
  const nums=[];
  let prev=-1;
  for(let i=0;i<count;i++){
    let n,tries=0;
    do{
      n=rnd(lo,hi);
      tries++;
    }while((n===prev||(diff==='easy'&&n===1))&&tries<30);
    nums.push(n);
    prev=n;
  }
  return nums;
}

function checkAns(input,correct){const v=parseInt(input,10);return!isNaN(v)&&v===correct;}
function recordAnswer(op,isRight,mode,difficulty,noXP=false){
  const m=mode||'practice';
  const d=difficulty||diff[m]||'easy';
  // Track first answer per mode per session for guest analytics
  if(!currentUser&&typeof gtag!=='undefined'){
    const _guestTrackKey='numfly_guest_tracked_'+m;
    if(!sessionStorage.getItem(_guestTrackKey)){
      sessionStorage.setItem(_guestTrackKey,'1');
      gtag('event','guest_play_mode',{event_category:'engagement',event_label:m});
    }
  }
  stats.totalAnswers++;stats.modeAnswers[m]=(stats.modeAnswers[m]||0)+1;
  if(isRight){
    stats.totalCorrect++;stats.opCorrect[op]=(stats.opCorrect[op]||0)+1;
    stats.modeCorrect[m]=(stats.modeCorrect[m]||0)+1;
    if(stats.modeOpCorrect[m])stats.modeOpCorrect[m][op]=(stats.modeOpCorrect[m][op]||0)+1;
    if(stats.diffOpCorrect[d])stats.diffOpCorrect[d][op]=(stats.diffOpCorrect[d][op]||0)+1;
    // Grant XP — lightning has its own XP logic in checkLightningAnswer (based on sequence length)
    // so we skip the standard per-answer XP to avoid double-dipping.
    // noXP=true is used by tip practice which grants XP separately with its own multiplier.
    if(m!=='lightning'&&!noXP){
      const baseXP=(XP_BASE[d]||5)+(XP_OP_BONUS[op]||0);
      const mult=XP_MODE_MULT[m]||1.0;
      gainXP(Math.max(1,Math.round(baseXP*mult*(GAME_CONFIG.XP_EVENT_MULTIPLIER||1))));
    }
  }else{
    stats.totalWrong++;stats.opWrong[op]=(stats.opWrong[op]||0)+1;
    if(stats.modeOpWrong[m])stats.modeOpWrong[m][op]=(stats.modeOpWrong[m][op]||0)+1;
    if(stats.diffOpWrong[d])stats.diffOpWrong[d][op]=(stats.diffOpWrong[d][op]||0)+1;
  }
  checkAchievements();
  // Debounced: coalesces rapid answer saves (e.g. back-to-back correct in speed mode)
  saveOpStatsDebounced();
  saveGuestState(); // persist after every answer
}

