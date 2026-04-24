// ══════════════════════════════════════════════════════════════════════════════
// HS Panel
// ══════════════════════════════════════════════════════════════════════════════
function renderHSPanel(){
  ['lightning','speed'].forEach(mode=>{
    const el=document.getElementById(`hs-${mode}-rows`);
    if(!el)return; // HS panel removed from home screen
    const diffs=['easy','medium','hard'];
    const labels=[t('diff_easy'),t('diff_medium'),t('diff_hard')];
    el.innerHTML=diffs.map((d,i)=>{
      const{score,plays}=hs[mode][d];
      return`<div class="hs-row"><span>${labels[i]}</span><span><span class="hs-val">${score}</span><span class="hs-plays">(${plays} ${t('plays_label')})</span></span></div>`;
    }).join('');
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// Stats page
// ══════════════════════════════════════════════════════════════════════════════
function setStatsFilter(f,btn){
  currentStatsFilter=f;
  document.querySelectorAll('.stats-filter-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.sfilter===f);
  });
  // Reset diff filter when switching modes
  currentDiffFilter='all';
  document.querySelectorAll('.diff-filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.dfilter==='all'));
  renderStatsContent();
}

function setDiffFilter(d){
  currentDiffFilter=d;
  document.querySelectorAll('.diff-filter-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.dfilter===d);
  });
  renderStatsContent();
}

function renderStatsContent(){
  const f=currentStatsFilter;
  const el=document.getElementById('stats-content');

  // ── Compute filter-scoped numbers ──────────────────────────────────────────
  let totalAns,totalCor,totalWrg,opCor,opWrg;
  if(f==='all'){
    totalAns=stats.totalAnswers;totalCor=stats.totalCorrect;totalWrg=stats.totalWrong;
    opCor={...stats.opCorrect};opWrg={...stats.opWrong||{}};
    // totalAnswers/totalCorrect already includes daily (recordAnswer is called for daily)
  }else{
    totalAns=stats.modeAnswers[f]||0;totalCor=stats.modeCorrect[f]||0;totalWrg=totalAns-totalCor;
    opCor={...(stats.modeOpCorrect[f]||{})};opWrg={...(stats.modeOpWrong[f]||{})};
  }
  const acc=totalAns>0?Math.round(totalCor/totalAns*100):0;
  const accClass=acc>=80?'good':acc>=60?'warn':'';

  // ── Filter-scoped time ─────────────────────────────────────────────────────
  let filteredTime;
  if(f==='all') filteredTime=stats.totalPlayTime;
  else filteredTime=stats.modePlayTime[f]||0;
  const filtMins=Math.floor(filteredTime/60);
  const filtSecs=filteredTime%60;
  const filtHrs=Math.floor(filtMins/60);const filtRemMins=filtMins%60;
  const filtTimeStr=filtHrs>0?`${filtHrs}h ${filtRemMins}m ${filtSecs}s`:filtMins>0?`${filtMins}m ${filtSecs}s`:`${filtSecs}s`;

  // ── Filter-scoped game counts ──────────────────────────────────────────────
  // (daily check happens AFTER opBarsHTML is computed below)
  const totalSpeedGames=['easy','medium','hard'].reduce((a,d)=>a+hs.speed[d].plays,0);
  const totalLightGames=['easy','medium','hard'].reduce((a,d)=>a+hs.lightning[d].plays,0);
  // If plays arrays are empty (new device before full_stats loads), use server-synced value
  const _derivedTotal=totalSpeedGames+totalLightGames+(stats.dailyCompleted||0);
  const _serverTotal=stats._gamesPlayedServer||0;
  const totalGamesAll=_derivedTotal>0?_derivedTotal:_serverTotal;
  let filteredGames,filtGamesSubLabel;
  if(f==='all'){
    filteredGames=totalGamesAll;
    filtGamesSubLabel=`⚡ ${totalLightGames} &nbsp; 🚀 ${totalSpeedGames} &nbsp; 🏁 ${stats.dailyCompleted||0}`;
  }else if(f==='speed'){
    filteredGames=totalSpeedGames;filtGamesSubLabel=`🚀 ${t('mode_speed')}`;
  }else if(f==='lightning'){
    filteredGames=totalLightGames;filtGamesSubLabel=`⚡ ${t('mode_lightning')}`;
  }else{
    filteredGames='—';filtGamesSubLabel=`📚 ${t('mode_practice')}`;
  }

  // ── Best/worst op ──────────────────────────────────────────────────────────
  // Consistent icons for all ops
  const opIcon={add:'➕',sub:'➖',mul:'✖️',div:'➗',pct:'💯'};
  let bestRate=-1,bestOpKey='',worstRate=2,worstOpKey='';
  ['add','sub','mul','div','pct'].forEach(op=>{
    const tot=(opCor[op]||0)+(opWrg[op]||0);
    if(tot>=5){
      const r=(opCor[op]||0)/tot;
      if(r>bestRate){bestRate=r;bestOpKey=op;}
      if(r<worstRate){worstRate=r;worstOpKey=op;}
    }
  });
  // Don't show weakest op if all qualifying ops are at 100%
  if(worstRate>=1)worstOpKey='';
  // If best and worst are the same operation (only one op has enough data), show neither
  if(bestOpKey&&worstOpKey&&bestOpKey===worstOpKey){bestOpKey='';worstOpKey='';}
  const bestOpDisplay=bestOpKey?t('op_type_'+bestOpKey):'—';
  const worstOpDisplay=worstOpKey?t('op_type_'+worstOpKey):'—';
  const bestOpSub=bestOpKey?(bestRate>=0?`${Math.round(bestRate*100)}% ${t('stat_correct_rate').toLowerCase()} — ${t('stat_most_correct_sub')}`:t('stat_not_enough')):t('stat_not_enough');
  const worstOpSub=worstOpKey?(worstRate<2?`${Math.round(worstRate*100)}% ${t('stat_correct_rate').toLowerCase()} — ${t('stat_most_wrong_sub')}`:t('stat_not_enough')):t('stat_not_enough');

  // ── Accuracy bars — respect currentDiffFilter ────────────────────────────────

  // Pick op data: if diff filter is set, use diffOpCorrect/Wrong, else use mode-scoped
  const df=currentDiffFilter;
  let accOpCor,accOpWrg;
  if(df==='daily'){
    // Special: daily diff filter shows daily mode op stats
    accOpCor={...(stats.modeOpCorrect.daily||{})};
    accOpWrg={...(stats.modeOpWrong.daily||{})};
  } else if(df!=='all'){
    accOpCor={...stats.diffOpCorrect[df]};
    accOpWrg={...stats.diffOpWrong[df]};
  } else {
    accOpCor=opCor;
    accOpWrg=opWrg;
  }

  const ops=['add','sub','mul','div','pct'];
  const opBarsHTML=ops.map(op=>{
    const cor=accOpCor[op]||0,wrg=accOpWrg[op]||0,tot=cor+wrg;
    const pct=tot>0?Math.round(cor/tot*100):null;
    const barW=pct!==null?pct:0;
    const barColor=pct===null?'var(--border2)':pct>=80?'var(--success)':pct>=60?'var(--orange)':'var(--error)';
    const pctColor=pct===null?'var(--muted2)':pct>=80?'var(--success)':pct>=60?'var(--orange)':'var(--error)';
    const pctLabel=pct!==null?`${pct}%`:'—';
    const corWrgLabel=tot>0?`${cor}✓  ${wrg}✗`:t('stats_no_data');
    return`<div class="op-bar-row">
      <span class="op-bar-label">${t('op_type_'+op)}<br><span style="font-size:8px;color:var(--muted2)">${corWrgLabel}</span></span>
      <div class="op-bar-track"><div class="op-bar-fill" style="width:${barW}%;background:${barColor}"></div></div>
      <span class="op-bar-pct" style="color:${pctColor};font-size:12px;font-family:'DM Mono',monospace">${pctLabel}</span>
    </div>`;
  }).join('');

  // ── Per-difficulty table rows ───────────────────────────────────────────────
const diffRows=(mode)=>['easy','medium','hard'].map((d,i)=>{
    const{score,plays,bestPrecision}=hs[mode][d];
    const displayScore=mode==='lightning'?(bestPrecision||0):score;
    const lbl=[t('diff_easy'),t('diff_medium'),t('diff_hard')][i];
    const dotColor=['var(--success)','var(--orange)','var(--error)'][i];
    return`<div class="hs-row" style="padding:6px 0;border-bottom:1px solid var(--border);">
      <span style="display:flex;align-items:center;gap:6px;font-family:'DM Mono',monospace;font-size:11px;color:var(--muted)">
        <span style="width:7px;height:7px;border-radius:50%;background:${dotColor};display:inline-block;flex-shrink:0"></span>${lbl}
      </span>
      <span><span class="hs-val" style="font-size:15px">${mode==='lightning'?fmtN(displayScore):displayScore}</span><span class="hs-plays"> (${plays} ${t('plays_label')})</span></span>
    </div>`;
  }).join('');

  // ── Speed-specific ─────────────────────────────────────────────────────────
  const speedBest=Math.max(0,...['easy','medium','hard'].map(d=>hs.speed[d].score));
  const lightBest=Math.max(0,...['easy','medium','hard'].map(d=>hs.lightning[d].score));
  const avgSpeed=stats.speedScoreHistory.length?Math.round(stats.speedScoreHistory.reduce((a,b)=>a+b,0)/stats.speedScoreHistory.length):0;
  const speedTime=stats.modePlayTime.speed||0;
  const perMin=speedTime>0?((stats.modeCorrect.speed||0)/(speedTime/60)).toFixed(1):'—';
  const practiceQs=stats.modeAnswers.practice||0;
  const tipSessions=stats.tipSessions||0;
  const avgLightningStreak=stats.lightningStreakHistory&&stats.lightningStreakHistory.length?Math.round(stats.lightningStreakHistory.reduce((a,b)=>a+b,0)/stats.lightningStreakHistory.length):0;
  const longestLightningStreak=stats.longestLightningStreak||lightBest;
  const longestSpeedStreak=stats.longestSpeedStreak||0;
  const longestPracticeStreak=stats.longestPracticeStreak||0;
  // avg seconds per practice question
  const practiceTime=stats.modePlayTime.practice||0;
  const avgSecPerQ=practiceQs>0?(practiceTime/practiceQs).toFixed(1):'—';

  // ── Build 6-card overview (3×2) based on filter ────────────────────────────
  // Color legend: good=green(correct/accuracy), warn=orange(time/effort), accent=yellow(best/performance), info=blue(averages), purple=unique
  const card=(val,label,sub,colorClass='')=>`<div class="stat-card"><div class="stat-val ${colorClass}">${typeof val==='number'?fmtN(val):val}</div><div class="stat-label">${label}</div><div class="stat-sub">${sub}</div></div>`;
  const timeCard=filtHrs>0?`${filtHrs}<span style="font-size:16px">h ${filtRemMins}m ${filtSecs}s</span>`:`${filtMins}<span style="font-size:16px">m ${filtSecs}s</span>`;
  
  // ── Daily view (here so card/opBarsHTML/bestOpDisplay are all available) ─────
  if(f==='daily'){
    const dailyAcc=totalAns>0?Math.round(totalCor/totalAns*100):0;
    const accCls2=dailyAcc>=80?'good':dailyAcc>=60?'warn':'';
    const dailyTime=stats.modePlayTime.daily||0;
    const dMins=Math.floor(dailyTime/60),dSecs=dailyTime%60;
    const dHrs=Math.floor(dMins/60),dRemMins=dMins%60;
    const dailyTimeStr=dHrs>0?`${dHrs}h ${dRemMins}m ${dSecs}s`:dMins>0?`${dMins}m ${dSecs}s`:`${dSecs}s`;
    const bestMs=stats.dailyBestTime&&stats.dailyBestTime!==Infinity?stats.dailyBestTime:null;
    const worstMs=stats.dailyWorstTime||null;
    const fmtMs=ms=>{if(!ms)return'—';const sc=(ms/1000);const mn=Math.floor(sc/60);const ss=(sc%60).toFixed(2);return mn>0?`${mn}m ${ss}s`:`${ss}s`;};
    
    // Layout: TL=accuracy, BL=time, TM=fastest, BM=slowest, TR=games, BR=streak
    const dc=[
      card(`<span class="${accCls2}">${dailyAcc}%</span>`,t('stat_accuracy'),`${totalCor}✓ / ${totalAns} total`,accCls2),
      card(fmtMs(bestMs),t('stat_fastest'),'🏁','good'),
      card(stats.dailyCompleted||0,t('stat_days_played'),'🏁',''),
      card(dailyTimeStr,t('stat_time_trained'),'🏁','warn'),
      card(fmtMs(worstMs),t('stat_slowest'),'🏁',''),
      card(stats.dailyBestStreak||0,t('stat_daily_best_streak'),'🔥','accent'),
    ];
    
    el.innerHTML=`
    <div class="stats-section-title">${t('stats_sec_overview')}</div>
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">${dc[0]}${dc[1]}${dc[2]}</div>
    <div class="stats-grid" style="margin-top:8px;grid-template-columns:repeat(3,1fr)">${dc[3]}${dc[4]}${dc[5]}</div>
    
    <div class="stats-section-title">${t('stats_sec_accuracy')}</div>
    <div class="stat-card" style="margin-bottom:10px">
      <div style="margin-bottom:14px"><div class="stat-label" style="text-align:left;font-size:11px">${t('stat_op_breakdown')}</div></div>
      <div class="op-breakdown">${opBarsHTML}</div>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div class="op-showcase-card best" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;min-width:0;box-sizing:border-box;">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-family:'DM Mono',monospace;padding:2px 0;white-space:nowrap">${t('stat_most_correct')}</div>
        <div style="font-size:28px;font-weight:700;color:var(--success);line-height:1;font-family:'Bebas Neue',sans-serif;letter-spacing:1px">${bestOpKey?Math.round(bestRate*100)+'%':'—'}</div>
        <div style="font-size:12px;color:var(--text);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${bestOpDisplay}</div>
        <div style="font-size:9px;color:var(--muted);font-family:'DM Mono',monospace">${bestOpKey?t('stat_most_correct_sub'):t('stat_not_enough')}</div>
      </div>
      <div class="op-showcase-card worst" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;min-width:0;box-sizing:border-box;">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--error);font-family:'DM Mono',monospace;background:rgba(255,77,107,.1);padding:2px 8px;border-radius:20px;white-space:nowrap">${t('stat_most_wrong')}</div>
        <div style="font-size:28px;font-weight:700;color:var(--error);line-height:1;font-family:'Bebas Neue',sans-serif;letter-spacing:1px">${worstOpKey?Math.round(worstRate*100)+'%':'—'}</div>
        <div style="font-size:12px;color:var(--text);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${worstOpDisplay}</div>
        <div style="font-size:9px;color:var(--muted);font-family:'DM Mono',monospace">${worstOpKey?t('stat_most_wrong_sub'):t('stat_not_enough')}</div>
      </div>
    </div>`;
    return;
  }

  let overviewCards=[];
  if(f==='all'){
    overviewCards=[
      card(`${acc}%`,t('stat_accuracy'),`${totalCor}✓ / ${totalAns} total`,accClass),
      card(totalCor,t('stat_total_correct'),`${totalWrg} ${t('stat_total_wrong').toLowerCase()}`,'good'),
      card(filteredGames,t('stat_total_games'),filtGamesSubLabel,''),
      card(timeCard,t('stat_time_trained'),'⚡🚀📚🏁','warn'),
      card(perMin,t('stat_per_min'),t('stat_per_min_sub'),'accent'),
      card(`<span style="color:var(--purple)">${tipSessions}</span>`,t('stat_tip_practice_sessions'),t('stat_tip_practice_sessions_sub'),''),
    ];
  } else if(f==='lightning'){
    overviewCards=[
      card(`${acc}%`,t('stat_accuracy'),`${totalCor}✓ / ${totalAns} total`,accClass),
      card(totalCor,t('stat_total_correct'),`${totalWrg} ${t('stat_total_wrong').toLowerCase()}`,'good'),
      card(filteredGames,t('stat_total_games'),'⚡ '+t('mode_lightning'),''),
      card(timeCard,t('stat_time_trained'),'⚡ '+t('mode_lightning'),'warn'),
      card(stats.longestCorrectSequence||0,t('stat_avg_lightning'),t('stat_longest_seq_sub'),'info'),
      card(stats.longestLightningStreak||0,t('stat_longest_lightning'),'⚡ '+t('mode_lightning'),'accent'),
    ];
  } else if(f==='speed'){
    overviewCards=[
      card(`${acc}%`,t('stat_accuracy'),`${totalCor}✓ / ${totalAns} total`,accClass),
      card(totalCor,t('stat_total_correct'),`${totalWrg} ${t('stat_total_wrong').toLowerCase()}`,'good'),
      card(filteredGames,t('stat_total_games'),'🚀 '+t('mode_speed'),''),
      card(timeCard,t('stat_time_trained'),'🚀 '+t('mode_speed'),'warn'),
      card(perMin,t('stat_per_min'),t('stat_per_min_sub'),'accent'),
      card(longestSpeedStreak,t('stat_speed_streak'),t('stat_speed_streak_sub'),'accent'),
    ];
  } else { // practice
    overviewCards=[
      card(`${acc}%`,t('stat_accuracy'),`${totalCor}✓ / ${totalAns} total`,accClass),
      card(totalCor,t('stat_total_correct'),`${totalWrg} ${t('stat_total_wrong').toLowerCase()}`,'good'),
      card(practiceQs,t('stat_practice_questions'),t('stat_practice_questions_sub'),''),
      card(timeCard,t('stat_time_trained'),'📚 '+t('mode_practice'),'warn'),
      card(avgSecPerQ,t('stat_avg_time_per_q'),t('stat_avg_time_per_q_sub'),'info'),
      card(longestPracticeStreak,t('stat_practice_streak'),t('stat_practice_streak_sub'),'accent'),
    ];
  }

  const showSpeed=(f==='all'||f==='speed');
  const showLightning=(f==='all'||f==='lightning');
  const showScoresSection=showSpeed||showLightning;

  el.innerHTML=`
    <div class="stats-section-title">${t('stats_sec_overview')}</div>
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
      ${overviewCards[0]}${overviewCards[1]}${overviewCards[2]}
    </div>
    <div class="stats-grid" style="margin-top:8px;grid-template-columns:repeat(3,1fr)">
      ${overviewCards[3]}${overviewCards[4]}${overviewCards[5]}
    </div>

    ${f!=='lightning'?`<div class="stats-section-title">${t('stats_sec_accuracy')}</div>`:''}
    ${f!=='lightning'?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
      ${['all','easy','medium','hard'].map(d=>`<button class="diff-filter-btn${currentDiffFilter===d?' active':''}" data-dfilter="${d}" onclick="setDiffFilter('${d}')">${d==='all'?t('filter_all'):d==='easy'?'🟢 '+t('diff_easy'):d==='medium'?'🟡 '+t('diff_medium'):'🔴 '+t('diff_hard')}</button>`).join('')}
    </div>`:''}
    ${f!=='lightning'?`<div class="stat-card" style="margin-bottom:10px">
      <div style="margin-bottom:14px">
        <div class="stat-label" style="text-align:left;font-size:11px">${t('stat_op_breakdown')}</div>
      </div>
      <div class="op-breakdown">${opBarsHTML}</div>
    </div>`:''}
    
    ${f!=='lightning'?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div class="op-showcase-card best" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;min-width:0;box-sizing:border-box;">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--error);font-family:'DM Mono',monospace;background:rgba(255,77,107,.1);padding:2px 8px;border-radius:20px;white-space:nowrap">${t('stat_most_wrong')}</div>
        <div style="font-size:28px;font-weight:700;color:var(--success);line-height:1;font-family:'Bebas Neue',sans-serif;letter-spacing:1px">${bestOpKey?Math.round(bestRate*100)+'%':'—'}</div>
        <div style="font-size:12px;color:var(--text);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${bestOpDisplay}</div>
        <div style="font-size:9px;color:var(--muted);font-family:'DM Mono',monospace">${bestOpKey?t('stat_most_correct_sub'):t('stat_not_enough')}</div>
      </div>
      <div class="op-showcase-card worst" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;min-width:0;box-sizing:border-box;">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--error);font-family:'DM Mono',monospace;background:rgba(255,77,107,.1);padding:2px 8px;border-radius:20px;white-space:nowrap">${t('stat_most_wrong')}</div>
        <div style="font-size:28px;font-weight:700;color:var(--error);line-height:1;font-family:'Bebas Neue',sans-serif;letter-spacing:1px">${worstOpKey?Math.round(worstRate*100)+'%':'—'}</div>
        <div style="font-size:12px;color:var(--text);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${worstOpDisplay}</div>
        <div style="font-size:9px;color:var(--muted);font-family:'DM Mono',monospace">${worstOpKey?t('stat_most_wrong_sub'):t('stat_not_enough')}</div>
      </div>
    </div>`:''}

    ${showScoresSection?`<div class="stats-section-title">${t('stats_sec_scores')}</div>`:''}
    ${showSpeed?`
    <div class="stat-card" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:18px">🚀</span><span class="stat-label" style="text-align:left">${t('mode_speed')} — ${t('diff_label')}</span></div>
      ${diffRows('speed')}
    </div>`:''}
    ${showLightning?`
    <div class="stat-card" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:18px">⚡</span><span class="stat-label" style="text-align:left">${t('mode_lightning')} — ${t('diff_label')}</span></div>
      ${diffRows('lightning')}
    </div>`:''}
  `;
}