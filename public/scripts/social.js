// ── Friends ────────────────────────────────────────────────────────────────────
async function searchUser(){
  const q=document.getElementById('friend-search-input').value.trim();
  const el=document.getElementById('friend-search-result');
  if(!q){el.innerHTML='';return;}
  if(!currentUser){openAuthModal();return;}
  el.innerHTML='<span class="spinner"></span>';
  try{
    const{data,error}=await sb.from('profiles').select('id,username').ilike('username',`%${q}%`).limit(5);
    if(error)throw error;
    const filtered=(data||[]).filter(u=>u.id!==currentUser.id);
    if(!filtered.length){
      el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:8px 0">${t('friend_not_found').replace('{q}',q)}</div>`;
      return;
    }
    // Fetch all existing friendship rows involving the current user + result IDs in one query
    const resultIds=filtered.map(u=>u.id);
    const orFilter=resultIds.map(id=>`and(requester_id.eq.${currentUser.id},addressee_id.eq.${id}),and(requester_id.eq.${id},addressee_id.eq.${currentUser.id})`).join(',');
    const{data:ships}=await withTimeout(sb.from('friendships').select('requester_id,addressee_id,status').or(orFilter));
    // Build a map: otherId → friendship row
    const shipMap=new Map();
    (ships||[]).forEach(s=>{
      const otherId=s.requester_id===currentUser.id?s.addressee_id:s.requester_id;
      shipMap.set(otherId,s);
    });
    el.innerHTML=filtered.map(u=>{
      const ship=shipMap.get(u.id);
      let actionHtml='';
      if(!ship){
        // No relationship — show Add button
        actionHtml=`<button class="friend-btn accept" onclick="sendFriendRequest('${u.id}','${u.username}')">${t('friend_add')}</button>`;
      } else if(ship.status==='blocked'){
        // Blocked — hide result entirely
        return '';
      } else if(ship.status==='accepted'){
        // Already friends
        actionHtml=`<span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--success);letter-spacing:.5px">${t('friend_already')}</span>`;
      } else if(ship.status==='pending'){
        if(ship.requester_id===currentUser.id){
          // I sent the request — show Pending, no action
          actionHtml=`<button class="friend-btn" disabled style="background:rgba(255,165,50,.15);border:1px solid rgba(255,165,50,.4);color:var(--orange);cursor:default;opacity:1">${t('friend_pending_btn')}</button>`;
        } else {
          // They sent me a request — offer to Accept
          actionHtml=`<button class="friend-btn accept" onclick="acceptFriendRequestFromSearch('${u.id}')">${t('friend_accept')}</button>`;
        }
      }
      if(!actionHtml)return '';
      return `<div class="friend-card">
        <div class="friend-avatar" style="background:${avatarColor(u.id)}">${initials(u.username)}</div>
        <div class="friend-info"><div class="friend-name">${esc(u.username)}</div></div>
        <div class="friend-actions">${actionHtml}</div>
      </div>`;
    }).join('');
    if(!el.innerHTML.trim()){
      el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:8px 0">${t('friend_not_found').replace('{q}',q)}</div>`;
    }
  }catch(e){
    el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">${t('err_search')}</div>`;
  }
}
async function acceptFriendRequestFromSearch(fromId){
  if(!currentUser)return;
  await withTimeout(sb.from('friendships').update({status:'accepted'}).eq('requester_id',fromId).eq('addressee_id',currentUser.id));
  // Refresh the search results to show updated state
  searchUser();
  loadFriends();
  checkPendingRequests();
}
async function sendFriendRequest(toId,toName){
  if(!currentUser)return;
  // Check if the target has blocked us or we've blocked them
  const{data:blockCheck}=await withTimeout(sb.from('friendships').select('status').or(`and(requester_id.eq.${currentUser.id},addressee_id.eq.${toId}),and(requester_id.eq.${toId},addressee_id.eq.${currentUser.id})`).eq('status','blocked').maybeSingle());
  if(blockCheck){document.getElementById('friend-search-result').innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">${t('err_blocked')||'Unable to send request.'}</div>`;return;}
  await sb.from('friendships').upsert({requester_id:currentUser.id,addressee_id:toId,status:'pending'},{onConflict:'requester_id,addressee_id',ignoreDuplicates:true});
  document.getElementById('friend-search-result').innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--success)">${t('friend_request_sent').replace('{name}',esc(toName))}</div>`;
  checkPendingRequests(); // update badge immediately for the recipient (they'll see it on next poll)
}
async function loadPendingChallengeNotifs() {
  const sec = document.getElementById('friends-challenges-section');
  const el = document.getElementById('friends-challenges-list');
  if (!sec || !el || !sb || !currentUser) return;
  try {
    const uid = currentUser.id;
    
    // Fetch ALL incomplete attempts for the user (score is null)
    const {data: incomplete} = await withTimeout(
      sb.from('challenge_attempts').select('challenge_id').eq('player_id', uid).is('score', null).limit(1000)
    );
    const allIds = [...new Set((incomplete || []).map(r => r.challenge_id))];
    if (!allIds.length) { sec.style.display = 'none'; return; }
    
    // Fetch the challenge details (include duration_seconds, parent_id, comp_name for new-round detection)
    const {data: challenges} = await withTimeout(
      sb.from('challenges').select('id,creator_id,difficulty,creator_score,is_competition,expires_at,duration_seconds,parent_id,comp_name').in('id', allIds).gte('expires_at', new Date().toISOString())
    );
    if (!challenges || !challenges.length) { sec.style.display = 'none'; return; }

    // Fetch all other participants in these challenges so we can list names
    const {data: allAttempts} = await withTimeout(
      sb.from('challenge_attempts').select('challenge_id,player_id').in('challenge_id', challenges.map(c=>c.id)).limit(5000)
    );
    
    const allProfileIds = [...new Set([
      ...challenges.map(c => c.creator_id),
      ...(allAttempts || []).map(a => a.player_id)
    ])];
    const {data: profiles} = await withTimeout(
      sb.from('profiles').select('id,username,avatar_color').in('id', allProfileIds)
    );
    const pm = new Map((profiles || []).map(p => [p.id, p]));

    // Build invitees list per challenge
    const inviteesMap = new Map();
    (allAttempts || []).forEach(a => {
      if (a.player_id === uid) return; // Skip myself
      if (!inviteesMap.has(a.challenge_id)) inviteesMap.set(a.challenge_id, []);
      const p = pm.get(a.player_id);
      if (p) inviteesMap.get(a.challenge_id).push(esc(p.username));
    });

    // Helper: format duration seconds as label
    function durLabel(secs) {
      const s = secs || 120;
      return s <= 30 ? t('dur_30') : s <= 60 ? t('dur_60') : t('dur_120');
    }

    sec.style.display = '';
    let html = '';

    // ── ALL Group Competitions (Both Outgoing AND Incoming) ──
    // Separate new-round invites (parent_id set) from first-time invites
    const allComps = challenges.filter(ch => ch.is_competition);
    const newRoundComps = allComps.filter(ch => !!ch.parent_id); // subsequent rounds
    const firstInviteComps = allComps.filter(ch => !ch.parent_id); // first invite
    
    if (allComps.length) {
      html += `<div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--purple);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;margin-top:2px;">🏆 ${t('comp_group_ongoing')}</div>`;

      // New-round notifications: show comp name + round number, no sender name
      // We need to look up sibling count to determine round number — approximate from parent_id presence
      if (newRoundComps.length) {
        // Fetch sibling counts for round numbering
        const parentIds = [...new Set(newRoundComps.map(ch => ch.parent_id))];
        let siblingCountMap = new Map();
        try {
          const {data: siblings} = await withTimeout(
            sb.from('challenges').select('id,parent_id').in('parent_id', parentIds)
          );
          (siblings || []).forEach(s => {
            siblingCountMap.set(s.parent_id, (siblingCountMap.get(s.parent_id) || 0) + 1);
          });
        } catch(e) {}

        html += newRoundComps.map(ch => {
          const isIncoming = ch.creator_id !== uid;
          // Round number = siblings of same parent + 1 (root) = siblings count + 1, but this IS one of those siblings
          const roundNum = (siblingCountMap.get(ch.parent_id) || 1) + 1;
          // Comp name from this child or from parent (comp_name is inherited)
          const compNameDisplay = ch.comp_name || '';
          const roundLabel = t('comp_round_notif').replace('{n}', roundNum);
          const titleLine = compNameDisplay ? esc(compNameDisplay) : roundLabel;
          const subLine = `${compNameDisplay ? roundLabel + ' · ' : ''}${t('diff_' + (ch.difficulty || 'easy'))} · ${durLabel(ch.duration_seconds)}`;
          return `<div style="background:rgba(192,132,252,.06);border:1px solid rgba(192,132,252,.25);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
            <div style="font-size:18px;flex-shrink:0">🏆</div>
            <div style="flex:1;min-width:0">
              <div style="font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:.5px;color:var(--purple);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${titleLine}</div>
              <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);margin-top:1px">${subLine}</div>
            </div>
            <div style="display:flex;gap:5px;flex-shrink:0">
              <button style="padding:5px 10px;background:rgba(192,132,252,.15);border:1px solid rgba(192,132,252,.5);border-radius:6px;color:var(--purple);font-family:'DM Mono',monospace;font-size:10px;cursor:pointer;white-space:nowrap" onclick="${isIncoming ? `acceptChallengeInvite('${ch.id}','${ch.difficulty||'easy'}')` : `playCompDirectly('${ch.id}','${ch.difficulty||'easy'}')`}">${(()=>{try{return localStorage.getItem('numfly_comp_resume_'+ch.id)?t('challenge_continue'):t('comp_play').replace('▶ ','');}catch(e){return t('comp_play').replace('▶ ','');}})()}</button>
              <button style="padding:5px 8px;background:transparent;border:1px solid ${isIncoming ? 'var(--border)' : 'rgba(255,77,107,.3)'};border-radius:6px;color:${isIncoming ? 'var(--muted)' : 'var(--error)'};font-family:'DM Mono',monospace;font-size:10px;cursor:pointer" onclick="${isIncoming ? `declineChallengeInvite('${ch.id}')` : `cancelOutgoingChallenge('${ch.id}',true)`}">✕</button>
            </div>
          </div>`;
        }).join('');
      }

      // First-time invites: show sender name + invited text
      html += firstInviteComps.map(ch => {
        const isIncoming = ch.creator_id !== uid;
        let names = '?';
        if (isIncoming) {
          const creator = pm.get(ch.creator_id);
          names = creator ? esc(creator.username) : '?';
        } else {
          names = (inviteesMap.get(ch.id) || []).join(', ') || '?';
        }
        const subLine = isIncoming
          ? `🏆 ${t('comp_invited_by')} · ${t('diff_' + (ch.difficulty || 'easy'))} · ${durLabel(ch.duration_seconds)}`
          : `${t('diff_' + (ch.difficulty || 'easy'))} · ${durLabel(ch.duration_seconds)}`;
        return `<div style="background:rgba(192,132,252,.06);border:1px solid rgba(192,132,252,.25);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <div style="font-size:18px;flex-shrink:0">🏆</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:.5px;color:var(--purple);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${names}</div>
            <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);margin-top:1px">${subLine}</div>
          </div>
          <div style="display:flex;gap:5px;flex-shrink:0">
            <button style="padding:5px 10px;background:rgba(192,132,252,.15);border:1px solid rgba(192,132,252,.5);border-radius:6px;color:var(--purple);font-family:'DM Mono',monospace;font-size:10px;cursor:pointer;white-space:nowrap" onclick="${isIncoming ? `acceptChallengeInvite('${ch.id}','${ch.difficulty||'easy'}')` : `playCompDirectly('${ch.id}','${ch.difficulty||'easy'}')`}">${(()=>{try{return localStorage.getItem('numfly_comp_resume_'+ch.id)?t('challenge_continue'):t('comp_play').replace('▶ ','');}catch(e){return t('comp_play').replace('▶ ','');}})()}</button>
            <button style="padding:5px 8px;background:transparent;border:1px solid ${isIncoming ? 'var(--border)' : 'rgba(255,77,107,.3)'};border-radius:6px;color:${isIncoming ? 'var(--muted)' : 'var(--error)'};font-family:'DM Mono',monospace;font-size:10px;cursor:pointer" onclick="${isIncoming ? `declineChallengeInvite('${ch.id}')` : `cancelOutgoingChallenge('${ch.id}',true)`}">✕</button>
          </div>
        </div>`;
      }).join('');
    }

    // ── Outgoing 1v1s (I created them, not competitions) ──
    const outgoing1v1 = challenges.filter(ch => ch.creator_id === uid && !ch.is_competition);
    if (outgoing1v1.length) {
      const anyResume = outgoing1v1.some(ch => { try { return !!localStorage.getItem('numfly_comp_resume_' + ch.id); } catch(e) { return false; } });
      html += `<div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;margin-top:${allComps.length ? '10px' : '2px'};">⏳ ${anyResume ? t('challenge_sent_resume') : t('challenge_sent_waiting')}</div>`;
      html += outgoing1v1.map(ch => {
        const inviteeId = (allAttempts || []).find(a => a.challenge_id === ch.id && a.player_id !== uid)?.player_id;
        const invitee = pm.get(inviteeId) || {username: '?'};
        const subLine = `${t('diff_' + (ch.difficulty || 'easy'))} · ${durLabel(ch.duration_seconds)}`;
        return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;opacity:.85;">
          <div class="friend-avatar" style="background:${avatarColor(invitee)};width:28px;height:28px;font-size:11px;flex-shrink:0">${initials(invitee.username)}</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(invitee.username)}</div>
            <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);margin-top:1px">${subLine}</div>
          </div>
          <button style="padding:4px 9px;background:var(--accent);border:none;border-radius:6px;color:#000;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;cursor:pointer;white-space:nowrap" onclick="playOutgoing1v1('${ch.id}','${ch.difficulty||'easy'}')">${(()=>{try{return localStorage.getItem('numfly_comp_resume_'+ch.id)?t('challenge_continue'):t('comp_play');}catch(e){return t('comp_play');}})()}</button>
          <button style="padding:4px 9px;background:transparent;border:1px solid rgba(255,77,107,.3);border-radius:6px;color:var(--error);font-family:'DM Mono',monospace;font-size:10px;cursor:pointer;white-space:nowrap" onclick="cancelOutgoingChallenge('${ch.id}')">${t('challenge_cancel')}</button>
        </div>`;
      }).join('');
    }

    // ── INCOMING 1v1s (others invited me to, NOT competitions) ──
    const incoming1v1 = challenges.filter(ch => ch.creator_id !== uid && !ch.is_competition);
    if (incoming1v1.length) {
      html += `<div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--error);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;margin-top:${(allComps.length || outgoing1v1.length) ? '10px' : '2px'};">⚔ 1v1</div>`;
      html += incoming1v1.map(ch => {
        const creator = pm.get(ch.creator_id) || {username: '?'};
        const subLine = `${t('race_notif')} · ${t('diff_' + (ch.difficulty || 'easy'))} · ${durLabel(ch.duration_seconds)}`;
        return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;">
          <div class="friend-avatar" style="background:${avatarColor(creator)};width:28px;height:28px;font-size:11px;flex-shrink:0">${initials(creator.username)}</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(creator.username)}</div>
            <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);margin-top:1px">${subLine}</div>
          </div>
          <div style="display:flex;gap:5px;flex-shrink:0">
            <button style="padding:5px 10px;background:var(--accent);border:none;border-radius:6px;color:#000;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;cursor:pointer;white-space:nowrap" onclick="acceptChallengeInvite('${ch.id}','${ch.difficulty||'easy'}')">${(()=>{try{return localStorage.getItem('numfly_comp_resume_'+ch.id)?t('challenge_continue'):t('comp_play').replace('▶ ','');}catch(e){return t('comp_play').replace('▶ ','');}})()}</button>
            <button style="padding:5px 8px;background:transparent;border:1px solid var(--border);border-radius:6px;color:var(--muted);font-family:'DM Mono',monospace;font-size:10px;cursor:pointer" onclick="declineChallengeInvite('${ch.id}')">✕</button>
          </div>
        </div>`;
      }).join('');
    }

    el.innerHTML = html;
  } catch (e) { console.warn('loadPendingChallengeNotifs error:', e); }
}
async function cancelOutgoingChallenge(code,isComp){
  if(!currentUser)return;
  if(isComp){
    // Outgoing = I created it, so pass isCreator=true, nonePlayedYet=true
    showLeaveConfirm(code,code,true,true);
    return;
  } else {
    // 1v1 outgoing: delete the whole challenge
    await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',code));
    await withTimeout(sb.from('challenges').delete().eq('id',code).eq('creator_id',currentUser.id));
  }
  loadFriends();
  checkPendingRequests();
  loadPendingChallengeNotifs(); // refresh panel immediately, don't wait for next poll
}
function playOutgoing1v1(code,difficulty){
  // Creator plays their own 1v1 challenge — re-seed and start with countdown
  activeChallengeId=code;
  activeChallengeMode='challenge';
  _activeCompId=null; // 1v1 — clear stale comp ID so back goes to Friends
  _challengeDiff=difficulty||'easy';
  diff.speed=_challengeDiff;
  // Load seed from DB then start
  withTimeout(sb.from('challenges').select('seed').eq('id',code).single()).then(({data:ch})=>{
    if(!ch)return;
    challengeSeed=ch.seed;
    challengeRng=seededRand(ch.seed);
    startSpeedWithCountdown();
  });
}
function playCompDirectly(code,difficulty){
  // Play competition directly without showing scoreboard first
  // Sets up state then starts with countdown
  if(!currentUser)return;
  _activeCompId=code;
  activeChallengeId=code;
  _challengeDiff=difficulty||'easy';
  diff.speed=_challengeDiff;
  withTimeout(sb.from('challenges').select('seed,difficulty,duration_seconds').eq('id',code).single()).then(({data:ch})=>{
    if(!ch)return;
    challengeSeed=ch.seed;
    challengeRng=seededRand(ch.seed);
    activeChallengeMode='challenge';
    _challengeDiff=ch.difficulty||difficulty||'easy';
    diff.speed=_challengeDiff;
    speed.remaining=ch.duration_seconds||120;
    startSpeedWithCountdown();
  });
}
async function viewCompetition(code,difficulty){
  if(!currentUser)return;
  const{data:ch}=await withTimeout(sb.from('challenges').select('seed,difficulty,duration_seconds').eq('id',code).single());
  if(!ch){return;}
  _activeCompId=code;
  activeChallengeId=code;
  _challengeDiff=ch.difficulty||difficulty||'easy';
  diff.speed=_challengeDiff;
  speed.remaining=ch.duration_seconds||120;
  challengeSeed=ch.seed;
  challengeRng=seededRand(ch.seed);
  await loadCompetitionScreen(code,ch.seed,null,false,_challengeDiff,ch.duration_seconds||120,'group-comp');
}
async function acceptChallengeInvite(code,difficulty){
  if(!currentUser)return;
  activeChallengeId=code;
  diff.speed=difficulty||'easy';
  const{data:ch}=await withTimeout(sb.from('challenges').select('seed,difficulty,is_competition,duration_seconds').eq('id',code).single());
  if(!ch){showErrToast(t('err_challenge_not_found'));return;}
  challengeSeed=ch.seed;challengeRng=seededRand(ch.seed);activeChallengeMode='challenge';
  _challengeDiff=ch.difficulty||'easy';
  diff.speed=_challengeDiff;
  speed.remaining=ch.duration_seconds||120;
  if(ch.is_competition){
    await withTimeout(sb.from('challenge_attempts').update({invited:false}).eq('challenge_id',code).eq('player_id',currentUser.id));
    _activeCompId=code;
    activeChallengeId=code;
  } else {
    _activeCompId=null;
  }

  // Save all challenge state so checkPendingStart can restore it after the /1v1 page loads
  localStorage.setItem('numfly_pending_start', JSON.stringify({
    id: code,
    mode: 'challenge',
    diff: ch.difficulty || 'easy',
    dur: ch.duration_seconds || 120,
    origDur: ch.duration_seconds || 120,
    seed: ch.seed,
    compId: ch.is_competition ? code : null
  }));

  // Navigate to /1v1 — the page will call checkPendingStart() which reads localStorage and starts the game
  if (typeof showScreen === 'function') showScreen('screen-speed-game');
  checkPendingRequests();
}
async function declineChallengeInvite(code){
  // Check if this is a 1v1 or competition
  const{data:ch,error}=await withTimeout(sb.from('challenges').select('is_competition,creator_id').eq('id',code).maybeSingle());
  if(error||!ch){
    // DB lookup failed or challenge not found — only remove own attempt row to be safe
    await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',code).eq('player_id',currentUser.id));
  } else if(!ch.is_competition){
    // 1v1: delete the whole challenge so creator doesn't see a ghost card with "?"
    await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',code));
    await withTimeout(sb.from('challenges').delete().eq('id',code));
  } else {
    // Competition: just remove own attempt row, others continue
    await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',code).eq('player_id',currentUser.id));
  }
  loadFriends();
  checkPendingRequests();
}
async function loadFriends(){
  const listEl=document.getElementById('friends-list');
  if(!sb||!currentUser){listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('friends_sign_in_msg')}</div>`;return;}
  const uid=currentUser.id;
  try{
    // Load pending challenge invites
    await loadPendingChallengeNotifs();
    const{data,error}=await withTimeout(sb.from('friendships').select('requester_id,addressee_id,status').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`));
    if(error)throw error;
    if(!data||!data.length){
      document.getElementById('friends-pending-section').style.display='none';
      updateFriendsBadge(0);
      listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('no_friends_yet')}</div>`;
      return;
    }
    const allIds=[...new Set(data.flatMap(f=>[f.requester_id,f.addressee_id]))];
    const{data:profiles}=await withTimeout(sb.from('profiles').select('id,username,avatar_color').in('id',allIds));
    const pm=new Map((profiles||[]).map(p=>[p.id,p]));
    // Fetch achievement counts for all users
    const{data:achRows,error:achErr}=await withTimeout(sb.from('user_achievements').select('user_id').in('user_id',allIds));
    if(achErr)console.warn('[Numfly] achRows error:',achErr.message);
    const achCount=new Map();
    (achRows||[]).forEach(r=>achCount.set(r.user_id,(achCount.get(r.user_id)||0)+1));
    if(currentUser)achCount.set(currentUser.id,earnedAchievements.size);
    // Blocked by others — users who have blocked current user
    const blockedByOthers=new Set(data.filter(f=>f.status==='blocked'&&f.addressee_id===uid).map(f=>f.requester_id));
    const pending=data.filter(f=>f.status==='pending'&&f.addressee_id===uid);
    const accepted=data.filter(f=>f.status==='accepted'&&!blockedByOthers.has(f.requester_id)&&!blockedByOthers.has(f.addressee_id));
    // Update pending badge
    updateFriendsBadge(pending.length);
    const pendSec=document.getElementById('friends-pending-section');
    const pendEl=document.getElementById('friends-pending-list');
    const pendCount=document.getElementById('friends-pending-count');
    if(pending.length){
      pendSec.style.display='';
      if(pendCount)pendCount.textContent=pending.length;
      pendEl.innerHTML=pending.map(f=>{
        const p=pm.get(f.requester_id)||{username:'Unknown'};
        return`<div class="friend-card pending">
          <div class="friend-avatar" style="background:${avatarColor(p)}">${initials(p.username)}</div>
          <div class="friend-info"><div class="friend-name">${esc(p.username)}</div><div class="friend-meta">${t('friend_wants_friend')}</div></div>
          <div class="friend-actions">
            <button class="friend-btn accept" onclick="respondFriend('${f.requester_id}','accept')">${t('friend_accept')}</button>
            <button class="friend-btn decline" onclick="respondFriend('${f.requester_id}','decline')">${t('friend_decline')}</button>
            <button class="friend-btn decline" style="border-color:rgba(255,77,107,.4);color:var(--error)" onclick="respondFriend('${f.requester_id}','block')">${t('friend_block')}</button>
          </div></div>`;
      }).join('');
    } else pendSec.style.display='none';
    // Show blocked users section
    const blocked=data.filter(f=>f.status==='blocked'&&f.requester_id===uid);
    const blockedSec=document.getElementById('friends-blocked-section');
    const blockedEl=document.getElementById('friends-blocked-list');
    if(blockedSec&&blockedEl){
      if(blocked.length){
        blockedSec.style.display='';
        const bIds=blocked.map(f=>f.addressee_id);
        const{data:bProfiles}=await withTimeout(sb.from('profiles').select('id,username,avatar_color').in('id',bIds));
        const bpm=new Map((bProfiles||[]).map(p=>[p.id,p]));
        blockedEl.innerHTML=blocked.map(f=>{
          const bp=bpm.get(f.addressee_id)||{username:'?'};
          return`<div class="friend-card" style="opacity:.6">
            <div class="friend-avatar" style="background:${avatarColor(bp)}">${initials(bp.username)}</div>
            <div class="friend-info"><div class="friend-name">${esc(bp.username)}</div><div class="friend-meta" style="color:var(--error)">${t('user_blocked')||'Blocked'}</div></div>
            <div class="friend-actions">
              <button class="friend-btn accept" onclick="unblockUser('${f.addressee_id}')">${t('unblock_user')||'Unblock'}</button>
            </div>
          </div>`;
        }).join('');
      } else blockedSec.style.display='none';
    }
    const gcBtn=document.getElementById('group-comp-btn');
    if(gcBtn)gcBtn.style.display=currentUser?'block':'none';
    if(!accepted.length){listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('no_friends_yet')}</div>`;return;}
    // Sort accepted friends by achievement count descending
    accepted.sort((a,b)=>{
      const idA=a.requester_id===uid?a.addressee_id:a.requester_id;
      const idB=b.requester_id===uid?b.addressee_id:b.requester_id;
      return (achCount.get(idB)||0)-(achCount.get(idA)||0);
    });
    listEl.innerHTML=accepted.map(f=>{
      const friendId=f.requester_id===uid?f.addressee_id:f.requester_id;
      const friend=pm.get(friendId)||{username:'Unknown'};
      const fAchCount=achCount.get(friendId)||0;
      return`<div class="friend-card">
        <div class="friend-avatar" style="background:${avatarColor(friend)}">${initials(friend.username)}</div>
        <div class="friend-info">
          <div class="friend-name">${esc(friend.username)}</div>
          <div class="friend-meta">${fAchCount} 🏅</div>
        </div>
        <div class="friend-actions">
          <button class="friend-btn accept" style="border-color:var(--orange);color:var(--orange);background:rgba(255,165,50,.08)" onclick="openRaceFriendModal('${friendId}','${friend.username}')"><span class="friend-btn-icon">🎯</span><span class="friend-btn-label"> ${t('race_start')}</span></button>
          <button class="friend-btn" style="border-color:var(--info);color:var(--info);background:rgba(71,179,255,.08)" onclick="openH2H('${friendId}','${friend.username}')"><span class="friend-btn-icon">📈</span><span class="friend-btn-label"> ${t('challenge_vs_history')}</span></button>
          <button class="friend-btn remove" onclick="removeFriend('${friendId}','${friend.username}')" title="${t('remove_friend')}"><span class="friend-btn-icon">✕</span><span class="friend-btn-label">${t('remove_friend')||'Remove'}</span></button>
        </div>
      </div>`;
    }).join('');
  }catch(e){
    console.error('loadFriends error:',e);
    listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">${t('err_load_friends')}</div>`;
  }
}

function updateFriendsBadge(count){
  const badge=document.getElementById('nav-friends-badge');
  const sidebarBadge=document.getElementById('sidebar-friends-badge');
  if(badge){badge.style.display=count>0?'block':'none';badge.textContent=count>0?count:'';}
  if(sidebarBadge){sidebarBadge.style.display=count>0?'inline-flex':'none';sidebarBadge.textContent=count;}
}

// Check pending requests on menu load for badge update
let _friendPollTimer=null;
function startFriendPoller(){
  stopFriendPoller();
  _friendPollTimer=setInterval(()=>checkPendingRequests(),5000);
}
function stopFriendPoller(){
  if(_friendPollTimer){clearInterval(_friendPollTimer);_friendPollTimer=null;}
}
async function checkPendingRequests(){
  if(!sb||!currentUser)return;
  try{
    const[friendRes,chalRes]=await Promise.all([
      withTimeout(sb.from('friendships').select('requester_id').eq('addressee_id',currentUser.id).eq('status','pending')),
      withTimeout(sb.from('challenge_attempts').select('challenge_id').eq('player_id',currentUser.id).eq('invited',true).is('score',null))
    ]);
    const friendCount=(friendRes.data||[]).length;
    const chalCount=(chalRes.data||[]).length;
    updateFriendsBadge(friendCount+chalCount);
    _pendingChallengeIds=new Set((chalRes.data||[]).map(r=>r.challenge_id));
  }catch(e){}
}
let _pendingChallengeIds=new Set();
async function respondFriend(reqId,action){
  if(!currentUser)return;
  if(action==='accept'){
    await sb.from('friendships').update({status:'accepted'}).eq('requester_id',reqId).eq('addressee_id',currentUser.id);
  } else if(action==='block'){
    // Delete the incoming request and create a blocked row (current user is requester so they own it)
    await sb.from('friendships').delete().eq('requester_id',reqId).eq('addressee_id',currentUser.id);
    await sb.from('friendships').upsert({requester_id:currentUser.id,addressee_id:reqId,status:'blocked'},{onConflict:'requester_id,addressee_id',ignoreDuplicates:true});
  } else {
    // decline — just delete the pending row
    await sb.from('friendships').delete().eq('requester_id',reqId).eq('addressee_id',currentUser.id);
  }
  _cachedFriends=[]; // invalidate so dare/race/group modals pick up the change
  loadFriends();
  checkPendingRequests();
}
let _removeReq=null,_removeAddr=null,_removeFriendId=null;
async function unblockUser(blockedId){
  if(!currentUser)return;
  await sb.from('friendships').delete().eq('requester_id',currentUser.id).eq('addressee_id',blockedId).eq('status','blocked');
  _cachedFriends=[];
  loadFriends();
}
function removeFriend(friendId,friendName){
  _removeFriendId=friendId;
  const nameEl=document.getElementById('remove-friend-name');
  if(nameEl)nameEl.textContent=friendName||'';
  const popup=document.getElementById('remove-friend-popup');
  if(popup)popup.style.display='flex';
}
function closeRemoveFriendPopup(){
  const popup=document.getElementById('remove-friend-popup');
  if(popup)popup.style.display='none';
  _removeReq=null;_removeAddr=null;_removeFriendId=null;
}
async function confirmRemoveFriend(block=false){
  if(!_removeFriendId||!currentUser)return;
  const uid=currentUser.id;
  const fid=_removeFriendId;
  closeRemoveFriendPopup();
  // Delete both directions — covers whichever side the current user was on
  await sb.from('friendships').delete().eq('requester_id',uid).eq('addressee_id',fid);
  await sb.from('friendships').delete().eq('requester_id',fid).eq('addressee_id',uid);
  if(block){
    await sb.from('friendships').insert({requester_id:uid,addressee_id:fid,status:'blocked'});
  }
  _cachedFriends=[]; // invalidate so modals reflect the removal immediately
  loadFriends();
}

// ── Shared friend loading helper ─────────────────────────────────────────────
let _cachedFriends=[];
_challengeDiff='easy'; // used by race modal
async function _loadFriendsIntoList(listEl,filterQ,noneMsg){
  if(!listEl)return;
  if(!_cachedFriends.length){
    const uid=currentUser.id;
    const{data:fs}=await withTimeout(sb.from('friendships').select('requester_id,addressee_id').eq('status','accepted').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`));
    const friendIds=(fs||[]).map(f=>f.requester_id===uid?f.addressee_id:f.requester_id);
    if(!friendIds.length){listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted)">${noneMsg||t('no_friends_yet')}</div>`;return;}
    const{data:profiles}=await withTimeout(sb.from('profiles').select('id,username,avatar_color').in('id',friendIds));
    _cachedFriends=profiles||[];
  }
  const q=(filterQ||'').toLowerCase();
  const visible=(q?_cachedFriends.filter(f=>f.username.toLowerCase().includes(q)):[..._cachedFriends])
    .sort((a,b)=>a.username.localeCompare(b.username));
  if(!visible.length){listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:6px 0">${t('friend_not_found').replace('{q}',filterQ||'')}</div>`;return;}
  listEl.innerHTML=visible.map(f=>`
    <label class="comp-friend-check">
      <input type="checkbox" value="${f.id}">
      <div class="friend-avatar" style="width:28px;height:28px;font-size:11px;background:${avatarColor(f)};flex-shrink:0">${initials(f.username)}</div>
      <div class="comp-friend-check-name">${esc(f.username)}</div>
    </label>`).join('');
}

// ── DARE A FRIEND (post-game) ─────────────────────────────────────────────────
async function openDareFriendModal(){
  if(!currentUser){openAuthModal();return;}
  _cachedFriends=[];// refresh each time
  const modal=document.getElementById('modal-dare-friend');
  document.getElementById('dare-friend-status').textContent='';
  document.getElementById('dare-search').value='';
  // Set dare subtitle with the actual score
  const dareSub=document.querySelector('[data-i18n="dare_sub"]');
  if(dareSub)dareSub.textContent=t('dare_sub').replace('{score}',speed.score);
  modal.classList.add('open');
  const listEl=document.getElementById('dare-friend-list');
  listEl.innerHTML='<span class="spinner"></span>';
  await _loadFriendsIntoList(listEl,'',t('no_friends_dare'));
}
function closeDareFriendModal(){
  document.getElementById('modal-dare-friend').classList.remove('open');
}
function filterDareFriendList(q){
  _loadFriendsIntoList(document.getElementById('dare-friend-list'),q,t('no_friends_dare'));
}
async function sendDareChallenge(){
  if(!currentUser)return;
  const checked=[...document.querySelectorAll('#dare-friend-list input[type=checkbox]:checked')].map(c=>c.value);
  const statusEl=document.getElementById('dare-friend-status');
  if(!checked.length){statusEl.textContent=t('challenge_select_friend');return;}
  statusEl.textContent=t('challenge_creating');
  try{
    const seed=speed.gameSeed||Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error:e1}=await withTimeout(sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:diff.speed,creator_score:speed.score,
      is_competition:false,
      duration_seconds:speed.originalDur||120,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    }));
    if(e1){statusEl.textContent='Error: '+e1.message;return;}
    // Creator already played — record their score
    await withTimeout(sb.from('challenge_attempts').insert(
      [{challenge_id:code,player_id:currentUser.id,score:speed.score,invited:false}]
    ));
    // Invite friends — they get notified
    const inviteRows=checked.map(uid=>({challenge_id:code,player_id:uid,score:null,invited:true}));
    await withTimeout(sb.from('challenge_attempts').insert(inviteRows));
    statusEl.style.color='var(--success)';
    statusEl.textContent=t('dare_sent');
    // Trigger badge refresh so the friend's badge updates on their next poll
    checkPendingRequests();
    setTimeout(()=>closeDareFriendModal(),1200);
  }catch(e){statusEl.textContent='Error: '+e.message;}
}

// ── START A RACE (from friends page) ─────────────────────────────────────────
let _raceDiff='easy';let _raceDuration=120; // seconds: 30, 60, or 120
let _racePreselect=null;
function setRaceDiff(d,btn){
  _raceDiff=d;
  document.querySelectorAll('#race-diff-row .diff-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
function setRaceDuration(sec,btn){
  _raceDuration=sec;
  document.querySelectorAll('#race-dur-row .diff-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
function setGroupDuration(sec,btn){
  _groupDuration=sec;
  document.querySelectorAll('#group-dur-row .diff-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
// _raceTargetId stores the single friend being challenged
let _raceTargetId=null,_raceTargetName='';
async function openRaceFriendModal(friendId,friendName){
  if(!currentUser){openAuthModal();return;}
  _raceTargetId=friendId;
  _raceTargetName=friendName;
  _raceDiff='easy';_raceDuration=120;
  document.querySelectorAll('#race-dur-row .diff-btn').forEach((b,i)=>{b.classList.toggle('active',i===2);});
  document.querySelectorAll('#race-diff-row .diff-btn').forEach((b,i)=>{b.classList.toggle('active',i===0);});
  document.getElementById('race-friend-status').textContent='';
  document.getElementById('race-friend-name').textContent='vs '+friendName;
  document.getElementById('modal-race-friend').classList.add('open');
}
function closeRaceFriendModal(){
  document.getElementById('modal-race-friend').classList.remove('open');
}
async function sendRaceChallenge(){
  if(!currentUser||!_raceTargetId)return;
  const statusEl=document.getElementById('race-friend-status');
  statusEl.textContent=t('challenge_creating');
  try{
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error:e1}=await withTimeout(sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:_raceDiff,creator_score:null,
      is_competition:false,
      duration_seconds:_raceDuration,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    }));
    if(e1){statusEl.textContent='Error: '+e1.message;return;}
    // Creator gets invited:false — they start immediately; friend gets invited:true
    await withTimeout(sb.from('challenge_attempts').insert(
      [{challenge_id:code,player_id:currentUser.id,score:null,invited:false}]
    ));
    await withTimeout(sb.from('challenge_attempts').insert(
      [{challenge_id:code,player_id:_raceTargetId,score:null,invited:true}]
    ));
    closeRaceFriendModal();
    activeChallengeId=code;challengeSeed=seed;challengeRng=seededRand(seed);activeChallengeMode='challenge';
    _activeCompId=null; // clear any stale comp ID so back button goes to Friends, not an old competition
    _challengeDiff=_raceDiff;
    diff.speed=_raceDiff;
    speed.remaining=_raceDuration; // apply chosen duration
    startSpeedWithCountdown();
  }catch(e){statusEl.textContent='Error: '+e.message;}
}

// ── Group competition ────────────────────────────────────────────────────────
let _groupDiff='easy';let _groupDuration=120;
function setGroupDiff(d,btn){
  _groupDiff=d;
  document.querySelectorAll('#group-diff-row .diff-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
async function openGroupCompModal(){
  if(!currentUser){openAuthModal();return;}
  showScreen('screen-group-comp');
  await loadGroupCompScreen();
}
function closeGroupCompModal(){
  // kept for compatibility — screen is used instead of modal
  showScreen('screen-friends');
}
function openNewCompForm(){
  _cachedFriends=[];
  _groupDiff='easy';_groupDuration=120;
  document.querySelectorAll('#group-diff-row .diff-btn').forEach((b,i)=>{b.classList.toggle('active',i===0);});
  document.querySelectorAll('#group-dur-row .diff-btn').forEach((b,i)=>{b.classList.toggle('active',i===2);});
  document.getElementById('group-comp-status').textContent='';
  document.getElementById('group-search').value='';
  const nameInput=document.getElementById('group-comp-name');
  if(nameInput)nameInput.value='';
  document.getElementById('new-comp-form').style.display='block';
  document.getElementById('new-comp-btn').style.display='none';
  const listEl=document.getElementById('group-comp-list');
  listEl.innerHTML='<span class="spinner"></span>';
  _loadFriendsIntoList(listEl,'');
}
function closeNewCompForm(){
  document.getElementById('new-comp-form').style.display='none';
  document.getElementById('new-comp-btn').style.display='';
}
async function loadGroupCompScreen(){
  if(!currentUser||!sb)return;
  const listEl=document.getElementById('group-comp-active-list');
  if(!listEl)return;
  listEl.innerHTML='<span class="spinner"></span>';
  try{
    const uid=currentUser.id;
    
    // 1. Fetch ALL attempts for this user (to find what comps they belong to)
    const {data: myAttempts} = await withTimeout(
      sb.from('challenge_attempts').select('challenge_id,score').eq('player_id', uid).limit(5000)
    );
    const chIds = (myAttempts || []).map(a => a.challenge_id);

    // 2. Fetch comps I created (even if no attempt row exists yet)
    const {data: myCreated} = await withTimeout(
      sb.from('challenges').select('id').eq('is_competition', true).eq('creator_id', uid)
    );
    
    const allCompIds = [...new Set([...chIds, ...(myCreated || []).map(c => c.id)])];
    if(!allCompIds.length){ listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('comp_group_empty')}</div>`; return; }

    // 3. Fetch the actual challenges
    const {data: challenges} = await withTimeout(
      sb.from('challenges')
        .select('id,difficulty,creator_id,seed,created_at,parent_id,duration_seconds,expires_at,comp_name')
        .eq('is_competition', true)
        .in('id', allCompIds)
    );
    if(!challenges||!challenges.length){ listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('comp_group_empty')}</div>`; return; }

    // 4. Fetch all attempts for these challenges to build the scoreboard
    const {data: allAttempts} = await withTimeout(
      sb.from('challenge_attempts').select('challenge_id,player_id,score').in('challenge_id', challenges.map(c=>c.id)).limit(5000)
    );
    
    const attemptsByChallenge = new Map();
    (allAttempts || []).forEach(a => {
      if(!attemptsByChallenge.has(a.challenge_id)) attemptsByChallenge.set(a.challenge_id, []);
      attemptsByChallenge.get(a.challenge_id).push(a);
    });

    const nowIso = new Date().toISOString();
    
    // 5. FOOLPROOF FILTER: Determine which competitions should be visible
    const groupChallenges = challenges.filter(ch => {
      const myRow = (allAttempts || []).find(a => a.challenge_id === ch.id && a.player_id === uid);
      const isCreator = ch.creator_id === uid;
      
      // Hide if I explicitly clicked "Leave"
      if (myRow && isScoreLeft(myRow.score)) return false;

      // Hide if it's expired AND I never played it
      const isExpired = ch.expires_at < nowIso;
      const iPlayed = myRow && myRow.score !== null && myRow.score !== undefined && !isScoreLeft(myRow.score);
      if (isExpired && !iPlayed) return false;

      // Show it if I have an attempt row (invited or played), OR if I am the creator
      return myRow || isCreator;
    });

    // Group rounds by their Root Competition ID
    const groupChallengeIds = new Set(groupChallenges.map(c => c.id));
    const rootChallenges = groupChallenges.filter(ch => !ch.parent_id || !groupChallengeIds.has(ch.parent_id));

    if(!rootChallenges.length){ listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('comp_group_empty')}</div>`; return; }

    const childRoundsByRoot = new Map();
    (challenges || []).filter(ch => ch.parent_id && groupChallengeIds.has(ch.parent_id)).forEach(ch => {
      if(!childRoundsByRoot.has(ch.parent_id)) childRoundsByRoot.set(ch.parent_id, []);
      childRoundsByRoot.get(ch.parent_id).push(ch.id);
    });

    // Map Player Profiles
    const allPlayerIds = [...new Set((allAttempts || []).map(a => a.player_id))];
    const {data: profiles} = await withTimeout(sb.from('profiles').select('id,username,avatar_color').in('id', allPlayerIds));
    const pm = new Map((profiles || []).map(p => [p.id, p]));

    // Sort active competitions by newest created
    rootChallenges.sort((a, b) => b.created_at.localeCompare(a.created_at));

    listEl.innerHTML = rootChallenges.map(ch => {
      const childIds = childRoundsByRoot.get(ch.id) || [];
      const totalRounds = 1 + childIds.length;
      const activeRoundId = childIds.length > 0 ? childIds[childIds.length - 1] : ch.id;
      
      const activeAttempts = attemptsByChallenge.get(activeRoundId) || [];
      const activeMapped = activeAttempts.map(a => ({...a, realScore: getRealScore(a.score), isLeft: isScoreLeft(a.score)}));
      const activeParticipants = activeMapped.filter(a => !a.isLeft);
      const allPlayed = activeParticipants.length > 0 && activeParticipants.every(a => a.realScore !== null);
      
      const myActiveAttempt = activeAttempts.find(a => a.player_id === uid);
      const myActiveScore = myActiveAttempt?.score;
      const needToPlay = myActiveScore === null || myActiveScore === undefined;
      
      const allRoundIds = [ch.id, ...childIds];
      const nonePlayedYet = [...allRoundIds].every(rid => (attemptsByChallenge.get(rid) || []).filter(a => a.player_id !== uid && !isScoreLeft(a.score) && a.score !== null).length === 0);
      
      const cumulativeByPlayer = new Map();
      allRoundIds.forEach(rid => {
        (attemptsByChallenge.get(rid) || []).forEach(a => {
          const rs = getRealScore(a.score);
          if (rs === null) return;
          cumulativeByPlayer.set(a.player_id, (cumulativeByPlayer.get(a.player_id) || 0) + rs);
        });
      });
      
      const sortedAttempts = [...activeMapped].sort((a, b) => {
        if(a.isLeft && b.isLeft) return 0; if(a.isLeft) return 1; if(b.isLeft) return -1;
        const ca = cumulativeByPlayer.get(a.player_id) ?? null;
        const cb = cumulativeByPlayer.get(b.player_id) ?? null;
        if(ca === null && cb === null) return 0;
        if(ca === null) return 1; if(cb === null) return -1;
        return cb - ca;
      });
      
      const diff = t('diff_' + (ch.difficulty || 'easy'));
      const roundsLabel = totalRounds > 1 ? ` · R${totalRounds}` : '';
      const durSecs = ch.duration_seconds || 120;
      const durLabel = durSecs <= 30 ? t('dur_30') : durSecs <= 60 ? t('dur_60') : t('dur_120');
      
      let rank = 1;
      const ranked = sortedAttempts.map((a, i) => {
        const cumScore = cumulativeByPlayer.get(a.player_id) ?? null;
        const prevCum = i > 0 ? (cumulativeByPlayer.get(sortedAttempts[i-1].player_id) ?? null) : null;
        if(i > 0 && (!a.isLeft && cumScore !== null && prevCum !== null && cumScore < prevCum)) rank = i + 1;
        return {...a, cumScore, rank: (!a.isLeft && cumScore !== null) ? rank : null};
      });
      
      // If the current user hasn't played the active round yet, hide other players' scores
      const myHasPlayedActiveRound = myActiveScore !== null && myActiveScore !== undefined && !isScoreLeft(myActiveScore);
      
      const participantRows = ranked.map(a => {
        const prof = pm.get(a.player_id) || {username: '?'};
        const isMe = a.player_id === uid;
        // Hide scores (show ⏳) for other players if I haven't played yet
        const scoreHidden = !isMe && !myHasPlayedActiveRound;
        const rankEmoji = (!scoreHidden && a.rank === 1) ? '🥇' : (!scoreHidden && a.rank === 2) ? '🥈' : (!scoreHidden && a.rank === 3) ? '🥉' : '';
        const displayScore = scoreHidden ? null : (totalRounds > 1 ? (a.cumScore !== null ? a.cumScore : null) : a.realScore);
        const isPendingActive = !a.isLeft && a.realScore === null;
        const scoreText = scoreHidden ? (a.realScore !== null ? '✓' : '⏳') : (isMe && !myHasPlayedActiveRound ? '⏳' : (displayScore !== null ? (isPendingActive ? `⏳ ${displayScore}` : `${displayScore}`) : (a.isLeft ? '—' : '⏳')));
        const pNameStyle = a.isLeft ? 'text-decoration:line-through;opacity:.55;' : '';
        
        return `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);">
          <div style="width:18px;text-align:center;font-size:13px;flex-shrink:0">${rankEmoji || ''}</div>
          <div class="friend-avatar" style="width:24px;height:24px;font-size:10px;background:${avatarColor(prof)};flex-shrink:0">${initials(prof.username)}</div>
          <div style="flex:1;font-family:'DM Mono',monospace;font-size:11px;${pNameStyle}${isMe ? 'font-weight:600' : ''}overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(prof.username)}${isMe ? ' ✦' : ''}</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:15px;flex-shrink:0;color:${scoreText === '✓' ? 'var(--success)' : displayScore !== null ? 'var(--text)' : 'var(--muted2)'}">${scoreText}</div>
        </div>`;
      }).join('');
      
      const iPlayed = myActiveScore !== null && myActiveScore !== undefined && !isScoreLeft(myActiveScore);
      const latestAllPlayed = allPlayed;
      const headerStatus = needToPlay && !iPlayed
        ? `<span style="color:var(--accent);font-size:10px;font-weight:600">${t('comp_group_play_now')}</span>`
        : latestAllPlayed ? `<span style="color:var(--success);font-size:10px">✓ ${t('comp_group_done') || 'Round complete'}</span>`
        : iPlayed ? `<span style="color:var(--muted);font-size:10px">${t('comp_group_waiting')}</span>`
        : `<span style="color:var(--muted);font-size:10px">${t('comp_group_waiting')}</span>`;
      
      const compName = ch.comp_name || '';
      const compNameHtml = compName
        ? `<div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text);font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(compName)}</div>` : '';
        
      return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-bottom:10px;overflow:hidden;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px 8px;border-bottom:1px solid var(--border);">
          <div style="display:flex;flex-direction:column;flex:1;min-width:0;gap:2px;">
            ${compNameHtml}
            <div style="display:flex;align-items:center;gap:8px">
              <div style="font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--purple);line-height:1.2">🏆 ${diff} · ${durLabel}${roundsLabel}</div>
              <div style="display:flex;align-items:center;line-height:1.2">${headerStatus}</div>
            </div>
          </div>
          <button style="font-size:16px;background:transparent;border:none;cursor:pointer;color:var(--muted);padding:2px 4px;line-height:1;flex-shrink:0" onclick="showLeaveConfirm('${ch.id}','${activeRoundId}',${ch.creator_id === uid},${nonePlayedYet})" title="Leave">✕</button>
        </div>
        <div style="padding:6px 14px 2px">${participantRows}</div>
        <div style="display:flex;gap:6px;padding:10px 14px;">
          ${needToPlay && !iPlayed ? `<button style="flex:1;padding:8px;background:var(--accent);border:none;border-radius:8px;color:#000;font-family:'DM Mono',monospace;font-size:11px;font-weight:700;cursor:pointer" onclick="playCompDirectly('${activeRoundId}','${ch.difficulty || 'easy'}')">${(() => { try { return localStorage.getItem('numfly_comp_resume_' + activeRoundId) ? '▶ ' + t('challenge_continue').replace('▶ ', '') : '▶ ' + t('challenge_play').replace('▶ ', ''); } catch (e) { return '▶ ' + t('challenge_play').replace('▶ ', ''); } })()}</button>` : ''}
          ${iPlayed || !needToPlay ? `<button style="flex:1;padding:8px;background:transparent;border:1px solid var(--border2);border-radius:8px;color:var(--muted);font-family:'DM Mono',monospace;font-size:10px;cursor:pointer" onclick="viewCompetition('${activeRoundId}','${ch.difficulty || 'easy'}')">${t('comp_scoreboard')}</button>` : ''}
          ${allPlayed ? `<button style="flex:1;padding:8px;background:var(--accent);border:none;border-radius:8px;color:#000;font-family:'DM Mono',monospace;font-size:11px;font-weight:700;cursor:pointer" onclick="startNewCompRound('${ch.id}')">${t('comp_group_new_round')}</button>` : ''}
        </div>
      </div>`;
    }).join('');
  }catch(e){if(listEl)listEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">Error loading competitions.</div>`;console.error('loadGroupCompScreen:',e);}
}
function filterGroupCompList(q){
  _loadFriendsIntoList(document.getElementById('group-comp-list'),q);
}
function showLeaveConfirm(rootCode,activeRoundId,isCreator,nonePlayedYet){
  document.getElementById('leave-comp-overlay')?.remove();
  const canCancel=isCreator&&nonePlayedYet;
  const title=canCancel?t('comp_cancel_confirm'):t('comp_leave_confirm');
  const actionBtnLabel=canCancel?t('comp_cancel_btn'):t('comp_leave_btn');
  const overlay=document.createElement('div');
  overlay.id='leave-comp-overlay';
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:800;display:flex;align-items:center;justify-content:center;padding:20px';
  overlay.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
    <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:.5px;margin-bottom:20px;line-height:1.4">${title}</div>
    <div style="display:flex;gap:8px">
      <button style="flex:1;padding:10px;background:var(--error);border:none;border-radius:8px;color:#fff;font-family:'DM Mono',monospace;font-size:11px;cursor:pointer" onclick="leaveCompetition('${rootCode}','${activeRoundId}',${canCancel})">${actionBtnLabel}</button>
      <button style="flex:1;padding:10px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'DM Mono',monospace;font-size:11px;cursor:pointer" onclick="document.getElementById('leave-comp-overlay').remove()">${t('cancel')}</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}
async function leaveCompetition(rootCode,activeRoundId,cancelAll){
  if(!currentUser)return;
  document.getElementById('leave-comp-overlay')?.remove();
  if(cancelAll){
    // Full cancel: use RPC (SECURITY DEFINER) to delete challenge + all attempt rows
    // Falls back to deleting own row + challenge if RPC doesn't exist yet
    try{
      const{error:rpcErr}=await withTimeout(sb.rpc('cancel_competition',{p_challenge_id:rootCode,p_creator_id:currentUser.id}));
      if(rpcErr){
        // RPC not deployed — fall back: delete challenge (creator RLS allows), own attempt row
        await withTimeout(sb.from('challenges').delete().eq('id',rootCode).eq('creator_id',currentUser.id));
        await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',rootCode).eq('player_id',currentUser.id));
      }
    }catch(e){
      await withTimeout(sb.from('challenges').delete().eq('id',rootCode).eq('creator_id',currentUser.id));
      await withTimeout(sb.from('challenge_attempts').delete().eq('challenge_id',rootCode).eq('player_id',currentUser.id));
    }
  } else {
    // Leave: operate on the active round (may be a child round in multi-round comps)
    const roundIds=[...new Set([rootCode,activeRoundId])];
    for(const rid of roundIds){
      const{data:att}=await sb.from('challenge_attempts').select('score').eq('challenge_id',rid).eq('player_id',currentUser.id).maybeSingle();
      const cur=att?.score;
      if(cur===null||cur===undefined){
        // Mark as left (score=-1) so others still see the player with strikethrough
        await withTimeout(sb.from('challenge_attempts').update({score:-1}).eq('challenge_id',rid).eq('player_id',currentUser.id));
      } else if(!isScoreLeft(cur)){
        const leftScore=-1000-cur;
        await withTimeout(sb.from('challenge_attempts').update({score:leftScore}).eq('challenge_id',rid).eq('player_id',currentUser.id));
      }
    }
  }
  openGroupCompModal();
  loadPendingChallengeNotifs();
}
async function leaveAnyCompetition(code){
  if(!currentUser)return;
  document.getElementById('leave-comp-overlay')?.remove();
  const{data:att}=await sb.from('challenge_attempts').select('score').eq('challenge_id',code).eq('player_id',currentUser.id).single();
  const cur=att?.score;
  const leftScore=(cur===null||cur===undefined||isScoreLeft(cur))?-1000:(-1000-cur);
  await withTimeout(sb.from('challenge_attempts').update({score:leftScore}).eq('challenge_id',code).eq('player_id',currentUser.id));
  await loadGroupCompScreen();
  loadPendingChallengeNotifs();
}
async function sendGroupComp(){
  if(!currentUser)return;
  const checked=[...document.querySelectorAll('#group-comp-list input[type=checkbox]:checked')].map(c=>c.value);
  const statusEl=document.getElementById('group-comp-status');
  if(checked.length<2){statusEl.textContent=t('challenge_select_min2')||'Select at least 2 friends.';return;}
  if(checked.length>8){statusEl.textContent='Maximum 8 friends per competition.';return;}
  statusEl.textContent=t('challenge_creating');
  const compName=(document.getElementById('group-comp-name')?.value||'').trim();
  try{
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error}=await withTimeout(sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:_groupDiff,creator_score:null,
      is_competition:true,
      comp_name:compName||null,
      duration_seconds:_groupDuration,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    }));
    if(error){statusEl.textContent='Challenge Error: '+error.message;return;}
    
    // Creator: invited:false
    const {error: creatorErr} = await withTimeout(sb.from('challenge_attempts').insert(
      [{challenge_id:code,player_id:currentUser.id,score:null,invited:false}]
    ));
    if(creatorErr){statusEl.textContent='Creator Insert Error: '+creatorErr.message;return;}

    // Invite all selected friends
    const inviteRows=checked.map(uid=>({challenge_id:code,player_id:uid,score:null,invited:true}));
    const {error: inviteErr} = await withTimeout(sb.from('challenge_attempts').insert(inviteRows));
    
    // FIX: Actually catch and display the error if the friends fail to insert!
    if(inviteErr){
        statusEl.style.color='var(--error)';
        statusEl.textContent='Invite Error: '+inviteErr.message;
        console.error('[Numfly] Failed to insert invites:', inviteErr);
        return;
    }

    statusEl.style.color='var(--success)';
    statusEl.textContent=t('comp_group_sent');
    closeNewCompForm();
    
    // Take creator to the competition screen to play their round
    activeChallengeId=code;challengeSeed=seed;challengeRng=seededRand(seed);activeChallengeMode='challenge';
    _challengeDiff=_groupDiff;
    speed.remaining=_groupDuration; // apply chosen duration
    await loadCompetitionScreen(code,seed,null,true,_groupDiff,_groupDuration);
  }catch(e){statusEl.textContent='System Error: '+e.message;}
}

// ── Competition screen ────────────────────────────────────────────────────────
function getRealScore(s){
  if(s===null||s===undefined)return null;
  if(s===-1)return null;
  if(s===-1000)return null; // left without ever playing — show no score, not 0
  if(s<-1000)return -1000-s; // left after playing: decode to original score
  return s;
}
function isScoreLeft(s){
  return s!==null&&s!==undefined&&(s===-1||s<=-1000);
}
_activeCompId=null;
let _compBackTarget='friends'; // 'friends' or 'group-comp' — set by the caller that opens screen-competition
async function loadCompetitionScreen(code,seed,creatorScore,isCreator,explicitDiff,explicitDurSecs,backTarget){
  _activeCompId=code;
  _compBackTarget=backTarget||'group-comp';
  challengeSeed=seed;challengeRng=seededRand(seed);
  document.getElementById('comp-screen-title').textContent=t('race_title');
  const _backLbl=document.getElementById('comp-back-label');
  if(_backLbl)_backLbl.textContent=_compBackTarget==='friends'?t('nav_friends'):t('comp_group_title')||'Competition';
  // Use explicitly passed values if available (e.g. after finishing a round),
  // otherwise fall back to globals (e.g. when opening from the friends list).
  const _displayDiff=explicitDiff||_challengeDiff||_raceDiff||'easy';
  const _compDurSecs=explicitDurSecs||(speed.remaining>0?speed.remaining:null)||120;
  const _compDurLabel=_compDurSecs<=30?t('dur_30'):_compDurSecs<=60?t('dur_60'):t('dur_120');
  document.getElementById('comp-screen-sub').textContent=`${t('diff_'+_displayDiff)} · ${_compDurLabel}`;
  document.getElementById('comp-link-section').style.display='none';
  const sbTitle=document.getElementById('comp-scoreboard-title');
  if(sbTitle)sbTitle.style.display='';
  // Always hide the play button on the competition scoreboard — playing is done from the Group Competition screen
  const playBtn=document.getElementById('comp-play-btn');
  if(playBtn)playBtn.style.display='none';
  // Don't reset _myJustPlayedScore here — keep it for refreshCompScoreboard
  // It gets cleared after the scoreboard is rendered
  await refreshCompScoreboard(code);
  showScreen('screen-competition');
}
async function refreshCompScoreboard(code){
  const sbEl=document.getElementById('comp-scoreboard');
  const h2hSec=document.getElementById('comp-h2h-section');
  sbEl.innerHTML='<span class="spinner"></span>';
  if(_myJustPlayedScore!==null)await new Promise(r=>setTimeout(r,900));
  try{
    // Fetch this round's attempts, then look for sibling rounds via parent_id
    let{data:attempts}=await sb.from('challenge_attempts').select('player_id,score,invited').eq('challenge_id',code);
    // Inject optimistic score BEFORE aggregation so it counts in the cumulative total
    if(_myJustPlayedScore!==null&&currentUser&&attempts){
      attempts=attempts.map(a=>a.player_id===currentUser.id&&(a.score===null||a.score===undefined)?{...a,score:_myJustPlayedScore}:a);
    }
    // Look up the competition family (this round + all rounds with same parent)
    let allRoundAttempts=attempts?[...attempts]:[];
    let roundCount=1;
    try{
      const{data:thisComp}=await sb.from('challenges').select('parent_id,id').eq('id',code).maybeSingle();
      const rootId=thisComp?.parent_id||code;
      // Get all rounds that share this root (parent_id=rootId OR id=rootId)
      const{data:siblings}=await sb.from('challenges').select('id').eq('parent_id',rootId);
      const siblingIds=(siblings||[]).map(c=>c.id).filter(id=>id!==code);
      // If we're on a child round (code !== rootId), ensure rootId's attempts are included
      if(rootId!==code&&!siblingIds.includes(rootId))siblingIds.push(rootId);
      if(siblingIds.length){
        const{data:sibAttempts}=await sb.from('challenge_attempts').select('player_id,score,invited').in('challenge_id',siblingIds);
        allRoundAttempts=[...allRoundAttempts,...(sibAttempts||[])];
        roundCount=siblingIds.length+1; // total rounds including this one
      }
    }catch(e){}
    // Aggregate: sum scores per player, count rounds played per player
    const playerRounds=new Map(); // player_id → {totalScore, roundsPlayed}
    allRoundAttempts.forEach(a=>{
      if(a.score===null||a.score===-1||isScoreLeft(a.score))return; // skip pending, old sentinel, and left-encoded scores
      const cur=playerRounds.get(a.player_id)||{totalScore:0,roundsPlayed:0};
      playerRounds.set(a.player_id,{totalScore:cur.totalScore+a.score,roundsPlayed:cur.roundsPlayed+1});
    });
    // Merge aggregated data back into current round attempts for display
    if(attempts){
      attempts=attempts.map(a=>{
        const agg=playerRounds.get(a.player_id);
        const fallbackScore=isScoreLeft(a.score)?getRealScore(a.score):a.score;
        return{...a,totalScore:agg?.totalScore??fallbackScore,roundsPlayed:agg?.roundsPlayed??0};
      });
    }
    // Enrich attempts with realScore and isLeft
    if(attempts){attempts=attempts.map(a=>({...a,realScore:getRealScore(a.score),isLeft:isScoreLeft(a.score)}));}
    if(!attempts||!attempts.length){sbEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted)">${t('challenge_no_scores')}</div>`;return;}
    const ids=attempts.map(a=>a.player_id);
    const{data:profiles}=await sb.from('profiles').select('id,username,avatar_color').in('id',ids);
    const pm=new Map((profiles||[]).map(p=>[p.id,p]));
    // Sort: real scores desc, then pending (null), then left (-1) at bottom
    const sorted=[...attempts].sort((a,b)=>{
      if(a.isLeft&&b.isLeft)return 0;if(a.isLeft)return 1;if(b.isLeft)return -1;
      const ta=a.totalScore!==undefined&&a.totalScore!==null?a.totalScore:a.realScore;
      const tb=b.totalScore!==undefined&&b.totalScore!==null?b.totalScore:b.realScore;
      if(ta===null&&tb===null)return 0;if(ta===null)return 1;if(tb===null)return -1;
      return tb-ta;
    });
    // "All played" = everyone still in the competition (not left) has scored
    // activeParticipants = everyone except left (-1)
    // allPlayed = all of them have a non-null score
    const activeParticipants=sorted.filter(a=>!a.isLeft);
    const allPlayed=activeParticipants.length>0&&activeParticipants.every(a=>a.realScore!==null);
    const activePlayers=sorted.filter(a=>!a.isLeft&&a.realScore!==null);
    const playBtn=document.getElementById('comp-play-btn');
    if(allPlayed&&playBtn&&_activeCompId&&playBtn.style.display!=='none'){
      playBtn.style.display='block';
      playBtn.textContent=t('comp_group_new_round');
      playBtn.style.background='var(--accent)';playBtn.style.color='#000';playBtn.style.border='none';
      // Check if a child round already exists — if so, don't show New Round again
      withTimeout(sb.from('challenges').select('id').eq('parent_id',_activeCompId).limit(1)).then(({data:kids})=>{
        if(kids&&kids.length>0){playBtn.style.display='none';}
      });
      playBtn.onclick=()=>startNewCompRound(_activeCompId);
    }
    // Rank: skip left players and pending (null) — only rank real scores
    let currentRank=1;
    const rankedSorted=sorted.map((a,i)=>{
      const prev=i>0?sorted[i-1]:null;
      const aScore=a.totalScore!==undefined&&a.totalScore!==null?a.totalScore:a.realScore;
      const prevScore=prev?(prev.totalScore!==undefined&&prev.totalScore!==null?prev.totalScore:prev.realScore):null;

      if(i===0){currentRank=1;}
      else if(!a.isLeft&&aScore!==null&&prev&&!prev.isLeft&&prevScore!==null&&aScore<prevScore){currentRank=i+1;}
      const hasRank=!a.isLeft&&aScore!==null;
      return{...a,displayRank:hasRank?currentRank:null};
    });
    // Leaderboard table: Rank | Player | Played | Score (= correct answers) | Status
    // Score IS the points — no W/D/L needed, works for any number of players
    const tableRows=rankedSorted.map(a=>{
      const prof=pm.get(a.player_id)||{username:'Unknown'};
      const isMe=a.player_id===currentUser?.id;
      const r=a.displayRank;
      const rankCls=r===1?'gold':r===2?'silver':r===3?'bronze':'';
      const rankDisplay=r===1?'🥇':r===2?'🥈':r===3?'🥉':(r?r:'—');
      const isLeft=a.isLeft;                                         // use enriched flag, not raw score===-1
      const isPending=!isLeft&&a.realScore===null;
      const played=a.roundsPlayed||(isLeft&&a.realScore!==null?1:(!isPending&&!isLeft?1:0));
      const displayScore=a.totalScore!==undefined?a.totalScore:a.realScore; // use realScore, never raw negative
      // For multi-round comps, pending players may have a cumulative score from previous rounds
      const hasPriorScore=isPending&&a.totalScore!=null&&a.totalScore>0;
      // Score cell: no hourglass here — hourglass lives in the Status column only
      const scoreDisplay=isPending
        ?`<span class="pts">${hasPriorScore?a.totalScore:'—'}</span>`
        :`<span class="pts" style="${isLeft?'opacity:.5':''}">${displayScore??0}</span>`;
      const nameStyle=isLeft?'text-decoration:line-through;opacity:.55':'';
      const statusDisplay=isLeft
        ?`<span style="color:var(--muted2);font-size:10px;font-style:italic">${t('comp_player_left')||'Left'}</span>`
        :isPending
        ?`<span style="color:var(--orange);font-size:10px">⏳</span>`
        :`<span style="color:var(--success);font-size:10px">✓</span>`;
      return`<tr class="${isMe?'me':''}${isLeft?' left':''}">
        <td><span class="comp-rank ${rankCls}" style="font-size:13px;min-width:22px;display:inline-block;text-align:center">${rankDisplay}</span>
          <span class="friend-avatar" style="width:24px;height:24px;font-size:10px;background:${avatarColor(prof)};flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;vertical-align:middle">${initials(prof.username)}</span>
          <span style="${nameStyle}${isMe?';font-weight:600':''};vertical-align:middle">${esc(prof.username)}${isMe?' ✦':''}</span>
        </td>
        <td>${played}</td>
        <td>${scoreDisplay}</td>
        <td>${statusDisplay}</td>
      </tr>`;
    }).join('');
    sbEl.innerHTML=`<table class="comp-table">
      <thead><tr>
        <th style="width:50%">${t('comp_col_player')||'Player'}</th>
        <th title="${t('comp_col_played')||'Played'}">P</th>
        <th title="${t('comp_col_score')||'Score'}" style="color:var(--accent)">⚡</th>
        <th title="${t('comp_col_status')||'Status'}">✓</th>
      </tr></thead>
      <tbody>${tableRows}</tbody>
    </table>`;
    // H2H section: only if exactly 2 active players and both scored
    const twoPlayed=sorted.filter(a=>!a.isLeft&&a.realScore!==null);
    if(twoPlayed.length===2){h2hSec.style.display='';}
    else h2hSec.style.display='none';
    _myJustPlayedScore=null;
  }catch(e){sbEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">${t('err_load_scoreboard')}</div>`;}
}
function copyCompLink(){
  const link=document.getElementById('comp-link-url').textContent;
  navigator.clipboard.writeText(link).then(()=>{
    const btn=document.querySelector('#comp-link-section .challenge-copy-btn');
    if(btn){btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',2000);}
  });
}
async function startNewCompRound(oldCode){
  if(!currentUser)return;
  const btn=document.getElementById('comp-play-btn');
  if(btn){btn.disabled=true;btn.textContent='...';}
  try{
    // Fetch all players from the old challenge
    const{data:attempts}=await sb.from('challenge_attempts').select('player_id,score').eq('challenge_id',oldCode);
    const players=(attempts||[]).filter(a=>!isScoreLeft(a.score)).map(a=>a.player_id);
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    // Fetch parent info: parent_id, duration_seconds AND comp_name from Supabase
    const{data:parentComp}=await sb.from('challenges').select('parent_id,duration_seconds,comp_name,difficulty').eq('id',oldCode).maybeSingle();
    const parentId=parentComp?.parent_id||oldCode;
    // If oldCode is itself a child, also fetch root for comp_name
    let inheritedCompName=parentComp?.comp_name||null;
    if(!inheritedCompName&&parentComp?.parent_id){
      const{data:rootComp}=await sb.from('challenges').select('comp_name').eq('id',parentId).maybeSingle();
      inheritedCompName=rootComp?.comp_name||null;
    }
    let inheritedDuration=parentComp?.duration_seconds||null;
    if(!inheritedDuration){
      const{data:rootData}=await sb.from('challenges').select('duration_seconds').eq('id',parentId).maybeSingle();
      inheritedDuration=rootData?.duration_seconds||120;
    }
    const{error}=await withTimeout(sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:parentComp?.difficulty||_challengeDiff||_groupDiff||'easy',creator_score:null,
      is_competition:true,
      parent_id:parentId,
      comp_name:inheritedCompName||null,
      duration_seconds:inheritedDuration,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    }));
    if(error){console.error('startNewCompRound:',error);if(btn){btn.disabled=false;btn.textContent=t('comp_group_new_round');}return;}
    // Creator invited:false, everyone else invited:true
    const rows=players.map(uid=>({challenge_id:code,player_id:uid,score:null,invited:uid!==currentUser.id}));
    await withTimeout(sb.from('challenge_attempts').insert(rows));
    checkPendingRequests();
    // Start playing
    activeChallengeId=code;challengeSeed=seed;challengeRng=seededRand(seed);activeChallengeMode='challenge';
    _activeCompId=code;
    diff.speed=parentComp?.difficulty||_challengeDiff||_groupDiff||'easy';
    speed.remaining=inheritedDuration; // apply inherited duration before countdown reads it
    startSpeedWithCountdown();
  }catch(e){console.error('startNewCompRound:',e);if(btn){btn.disabled=false;btn.textContent=t('comp_group_new_round');}}
}
function speedBackBtn(){
  if(activeChallengeMode==='challenge'&&_activeCompId){
    // In a competition — go back to competition screen, preserve state
    if(speed.timer){clearInterval(speed.timer);speed.timer=null;}
    // Save resume state
    try{localStorage.setItem('numfly_comp_resume_'+activeChallengeId,JSON.stringify({score:speed.score,remaining:speed.remaining,questionsAnswered:speed.score+(speed.wrongStreak||0)}));}catch(e){}
    activeChallengeMode='normal';
    checkAchievements();if(currentUser)scheduleSync();saveOpStats();saveGuestState();
    showScreen('screen-group-comp');loadGroupCompScreen();
  } else {
    endSpeed(true);
  }
}
function acceptAndPlayCompetition(){
  if(!_activeCompId){return;}
  activeChallengeId=_activeCompId;activeChallengeMode='challenge';
  challengeRng=seededRand(challengeSeed);
  // Check for saved mid-game state from a previous session
  try{
    const saved=localStorage.getItem('numfly_comp_resume_'+_activeCompId);
    if(saved){
      const s=JSON.parse(saved);
      // Fast-forward RNG past already-answered questions to prevent repeat exploit
      // Each question consumes a variable number of RNG calls — we advance by
      // generating and discarding that many questions silently
      if(typeof s.questionsAnswered==='number'&&s.questionsAnswered>0){
        const _ops=['add','sub','mul','div','pct'];
        const _lvl=diff.speed||_challengeDiff||'easy';
        for(let i=0;i<s.questionsAnswered;i++){
          // Mirror exactly what nextSpeedQ does in challenge mode:
          // 1 call for op pick, then genOneProblemSeeded for the problem
          const _op=_ops[Math.floor(challengeRng()*_ops.length)];
          genOneProblemSeeded(challengeRng,_lvl,_op);
        }
      }
      // Restore remaining time BEFORE startSpeed() so it reads the correct duration for the HUD
      if(typeof s.remaining==='number')speed.remaining=s.remaining;
      startSpeed(); // starts fresh timer+UI with the correct remaining time already in place
      // Restore saved score
      if(typeof s.score==='number'){speed.score=s.score;document.getElementById('s-score').textContent=speed.score;}
      localStorage.removeItem('numfly_comp_resume_'+_activeCompId);
      return;
    }
  }catch(e){}
  diff.speed=_challengeDiff||_groupDiff||'easy'; // sync difficulty to match competition
  startSpeedWithCountdown();
}

// ── Head-to-Head overall history ─────────────────────────────────────────────
function friendWinsLabel(name){
  const safe=esc(name);
  if(lang==='es')return t('h2h_their_wins_s').replace('{name}',safe);
  if(lang==='nl')return t('h2h_their_wins_s').replace('{name}',safe);
  // EN: possessive — if name ends with 's', use name' wins, else name's wins
  const key=name.endsWith('s')?'h2h_their_wins_s':'h2h_their_wins_en';
  return t(key).replace('{name}',safe);
}
async function openH2H(friendId,friendName){
  if(!currentUser){openAuthModal();return;}
  _compBackTarget='friends'; // back button from H2H stats should return to Friends
  showScreen('screen-competition');
  document.getElementById('comp-screen-title').textContent=`vs ${friendName}`;
  document.getElementById('comp-screen-sub').textContent=t('h2h_history');
  const backLbl = document.getElementById('comp-back-label');
  if (backLbl) backLbl.textContent = t('back');

  document.getElementById('comp-link-section').style.display='none';
  document.getElementById('comp-play-btn').style.display='none';
  // Hide scoreboard title — this is the stats view, not the live play view
  const sbTitle=document.getElementById('comp-scoreboard-title');
  if(sbTitle)sbTitle.style.display='none';
  const h2hSec=document.getElementById('comp-h2h-section');
  const sbEl=document.getElementById('comp-scoreboard');
  h2hSec.style.display='none';
  sbEl.innerHTML='<span class="spinner"></span>';
  try{
    // Find all shared challenges between these two users
    const uid=currentUser.id;
    const{data:myAttempts}=await sb.from('challenge_attempts').select('challenge_id,score').eq('player_id',uid).not('score','is',null);
    const{data:theirAttempts}=await sb.from('challenge_attempts').select('challenge_id,score').eq('player_id',friendId).not('score','is',null);
    const myMap=new Map((myAttempts||[]).map(a=>[a.challenge_id,a.score]));
    const theirMap=new Map((theirAttempts||[]).map(a=>[a.challenge_id,a.score]));
    // Find challenges both played
    const shared=[...myMap.keys()].filter(id=>theirMap.has(id));
    if(!shared.length){
      sbEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('h2h_no_shared')}</div>`;
      // No history yet — show "Challenge" not "Challenge again"
      const pb=document.getElementById('comp-play-btn');
      pb.style.display='block';
      pb.textContent='⚔ '+t('race_start');
      pb.onclick=()=>openRaceFriendModal(friendId,friendName);
      return;
    }
    const{data:chalDates}=await sb.from('challenges').select('id,created_at,difficulty,duration_seconds,is_competition').in('id',shared);
    const shared1v1=new Set((chalDates||[]).filter(c=>!c.is_competition).map(c=>c.id));
    if(!shared1v1.size){
      sbEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('h2h_no_shared')}</div>`;
      const pb=document.getElementById('comp-play-btn');
      pb.style.display='block';pb.textContent='\u2694 '+t('race_start');
      pb.onclick=()=>openRaceFriendModal(friendId,friendName);
      return;
    }
    const dateMap=new Map((chalDates||[]).map(c=>[c.id,c.created_at]));
    const diffMap=new Map((chalDates||[]).map(c=>[c.id,c.difficulty||'easy']));
    const durMap=new Map((chalDates||[]).map(c=>[c.id,c.duration_seconds||120]));
    // Fetch attempt timestamps (when each player completed it)
    const shared1v1Array=[...shared1v1];
    const{data:myTimes}=await sb.from('challenge_attempts').select('challenge_id,updated_at').eq('player_id',uid).in('challenge_id',shared1v1Array);
    const myTimeMap=new Map((myTimes||[]).map(a=>[a.challenge_id,a.updated_at]));
    const{data:theirTimes}=await sb.from('challenge_attempts').select('challenge_id,updated_at').eq('player_id',friendId).in('challenge_id',shared1v1Array);
    const theirTimeMap=new Map((theirTimes||[]).map(a=>[a.challenge_id,a.updated_at]));
    // Compute totals — only over 1v1 challenges, using decoded real scores
    let myWins=0,theirWins=0,ties=0,myTotal=0,theirTotal=0;
    const rows=shared1v1Array.map(id=>{
      const ms=getRealScore(myMap.get(id)),ts=getRealScore(theirMap.get(id));
      if(ms===null||ts===null)return null; // skip if either player left or hasn't truly played
      myTotal+=ms;theirTotal+=ts;
      const res=ms>ts?'win':ms<ts?'loss':'tie';
      if(res==='win')myWins++;else if(res==='loss')theirWins++;else ties++;
      // Use the later of the two completion timestamps as the "match date"
      const myT=myTimeMap.get(id),theirT=theirTimeMap.get(id);
      const matchDate=myT&&theirT?(myT>theirT?myT:theirT):(myT||theirT||dateMap.get(id)||'');
      return{id,ms,ts,res,matchDate,difficulty:diffMap.get(id)||'easy',duration:durMap.get(id)||120};
    }).filter(r=>r!==null);
    // H2H summary
    h2hSec.style.display='';
    document.getElementById('comp-h2h-box').innerHTML=`
      <div class="h2h-box">
        <div class="h2h-header">
          <div class="h2h-name">${esc(currentProfile?.username||'You')} vs ${esc(friendName)}</div>
        </div>
        <div class="h2h-scores">
          <div>
            <div class="h2h-score-val" style="color:${myWins>theirWins?'var(--success)':'var(--text)'}">${myWins}</div>
            <div class="h2h-score-label">${t('h2h_your_wins')}</div>
          </div>
          <div class="h2h-vs">—</div>
          <div>
            <div class="h2h-score-val" style="color:${theirWins>myWins?'var(--error)':'var(--text)'}">${theirWins}</div>
            <div class="h2h-score-label">${friendWinsLabel(friendName)}</div>
          </div>
        </div>
        <div class="h2h-games">${shared1v1Array.length} ${t('h2h_games')} · ${ties} ${t('h2h_ties')} · ${myTotal} vs ${theirTotal}</div>
      </div>`;
    // Recent challenges
    const recentHtml=rows.slice(-10).reverse().map(r=>{
      const resLabel=r.res==='win'?t('h2h_win'):r.res==='loss'?t('h2h_loss'):t('h2h_tie');
      const resColor=r.res==='win'?'var(--success)':r.res==='loss'?'var(--error)':'var(--muted)';
      const dateStr=r.matchDate?new Date(r.matchDate).toLocaleDateString(lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US',{month:'short',day:'numeric',year:'numeric'}):'';
      const rowDiffLabel=t('diff_'+r.difficulty);
      const rowDurLabel=r.duration<=30?t('dur_30'):r.duration<=60?t('dur_60'):t('dur_120');
      return`<div class="comp-row">
        <div class="comp-name" style="flex:0;min-width:52px;font-family:'DM Mono',monospace;font-size:11px;font-weight:500;color:${resColor}">${resLabel}</div>
        <div class="comp-name" style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted2)">${rowDiffLabel} · ${rowDurLabel}<span class="h2h-date"> · ${dateStr}</span></div>
        <div style="text-align:right"><span style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--accent)">${r.ms}</span><span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted)"> vs ${r.ts}</span></div>
      </div>`;
    }).join('');
    const needsScroll=rows.length>5;
    sbEl.innerHTML=`<div class="ach-section-title" style="margin-top:0">${t('h2h_recent')}</div>`
      +`<div style="${needsScroll?'max-height:260px;overflow-y:auto;padding-right:4px;':''}">${recentHtml}</div>`;
    document.getElementById('comp-play-btn').style.display='block';
    document.getElementById('comp-play-btn').textContent=t('h2h_challenge_again');
    document.getElementById('comp-play-btn').onclick=()=>openRaceFriendModal(friendId,friendName);
  }catch(e){sbEl.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">Error loading history.</div>`;}
}

// ── Direct challenge from H2H screen ─────────────────────────────────────────
async function openDirectChallenge(friendId,friendName){
  if(!currentUser){openAuthModal();return;}
  const btn=document.getElementById('comp-play-btn');
  if(btn){btn.disabled=true;btn.textContent='...';}
  try{
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error}=await sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:diff.speed,creator_score:null,
      duration_seconds:_raceDuration||speed.remaining||120,
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    });
    if(error){console.error('[Numfly] openDirectChallenge error:',error);showErrToast('Could not create challenge: '+error.message);return;}
    // Invite friend
    await sb.from('challenge_attempts').insert([
      {challenge_id:code,player_id:currentUser.id,score:null,invited:false},
      {challenge_id:code,player_id:friendId,score:null,invited:true}
    ]);
    // Start playing immediately
    activeChallengeId=code;challengeSeed=seed;challengeRng=seededRand(seed);_raceDiff=diff.speed;
    _challengeDiff=diff.speed;
    activeChallengeMode='challenge';
    _activeCompId=null; // 1v1 — clear stale comp ID so back goes to Friends
    speed.remaining=_raceDuration||120;
    startSpeedWithCountdown();
  }catch(e){
    console.error('[Numfly] openDirectChallenge exception:',e);
    showErrToast('Could not start challenge. Please try again.');
  }finally{
    if(btn){btn.disabled=false;btn.textContent=t('h2h_challenge_again');}
  }
}

// ── Leaderboard ───────────────────────────────────────────────────────────────
let _lbScope='global';
let _lbKey='xp';
function setLbScope(scope,btn){

  if(!btn && scope === 'global') {
    scope = _lbScope; 
  }
  _lbScope=scope;
  // Update inline-styled toggle buttons
  ['friends','global'].forEach(s=>{
    const b=document.getElementById('lb-scope-'+s);
    if(b){b.style.background=s===scope?'var(--accent)':'transparent';b.style.color=s===scope?'#000':'var(--muted)';}
  });

  const el=document.getElementById('lb-content');
  if(el)el.innerHTML='<span class="spinner"></span>';
  loadLeaderboard(_lbKey);
}

async function setLbTab(key,btn){
  _lbKey=key;
  // Use lb-cat-btn class (new design)
  document.querySelectorAll('.lb-cat-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  else{const b=document.querySelector(`.lb-cat-btn[data-lbkey="${key}"]`);if(b)b.classList.add('active');}
  await loadLeaderboard(key);
}
async function loadLeaderboard(key){
  const el=document.getElementById('lb-content');
  if(!sb||!currentUser){el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0">${t('lb_sign_in_msg')}</div>`;return;}
  if(!currentProfile){el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0"><span class="spinner"></span> Loading…</div>`;return;}
  el.innerHTML='<span class="spinner"></span>';
  try{
    const uid=currentUser.id;
    const colMap={xp:'xp_total',speed_easy:'hs_speed_easy',speed_medium:'hs_speed_medium',speed_hard:'hs_speed_hard',lightning_easy:'hs_lightning_easy_score',lightning_medium:'hs_lightning_medium_score',lightning_hard:'hs_lightning_hard_score',time:'total_play_time',daily_streak:'daily_streak_count'};
    const col=colMap[key]||'xp_total';
    // For streak leaderboard, also fetch last_date so we can filter expired streaks
    const selectCols=key==='daily_streak'?`user_id,${col},xp_level,daily_streak_last_date`:`user_id,${col},xp_level`;
    let rows=[];
    if(_lbScope==='friends'){
      const{data:fs}=await withTimeout(sb.from('friendships').select('requester_id,addressee_id').eq('status','accepted').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`));
      const fids=((fs||[]).map(f=>f.requester_id===uid?f.addressee_id:f.requester_id));
      fids.push(uid);
      const{data:fr}=await withTimeout(sb.from('user_progress').select(selectCols).in('user_id',fids).order(col,{ascending:false}).limit(20));
      rows=fr||[];
    } else {
      const{data:gr}=await withTimeout(sb.from('user_progress').select(selectCols).order(col,{ascending:false}).limit(10));
      rows=gr||[];
    }
    // For streak tab: zero out anyone whose streak has expired (last_date not today or yesterday)
    if(key==='daily_streak'){
      const todayStr=getDailyDateStr();
      const yestStr=getPrevDateStr(todayStr);
      rows=rows.map(r=>{
        const lastDate=r.daily_streak_last_date?String(r.daily_streak_last_date):'';
        const active=lastDate===todayStr||lastDate===yestStr;
        return active?r:{...r,[col]:0};
      }).filter(r=>(r[col]||0)>1); // hide users with <2 active streak
    }
    // For global scope: fetch user's own rank if they're not in the top 10
    let selfRank=null;
    let selfRow=null;
    if(_lbScope==='global'&&!rows.find(r=>r.user_id===uid)){
      const selfSelectCols=key==='daily_streak'?`user_id,${col},daily_streak_last_date`:`user_id,${col}`;
      const{data:self}=await withTimeout(sb.from('user_progress').select(selfSelectCols).eq('user_id',uid).maybeSingle());
      if(self){
        let selfValid=true;
        if(key==='daily_streak'){
          const todayStr=getDailyDateStr();
          const yestStr=getPrevDateStr(todayStr);
          const lastDate=self.daily_streak_last_date?String(self.daily_streak_last_date):'';
          selfValid=(lastDate===todayStr||lastDate===yestStr)&&(self[col]||0)>1;
        }
        if(selfValid){
          // Count how many users score higher to determine rank
          const{count}=await withTimeout(sb.from('user_progress').select('user_id',{count:'exact',head:true}).gt(col,self[col]||0));
          selfRank=(count||0)+1;
          selfRow=self;
        }
      }
    } else if(_lbScope==='friends'&&!rows.find(r=>r.user_id===uid)){
      const selfSelectCols=key==='daily_streak'?`user_id,${col},daily_streak_last_date`:`user_id,${col}`;
      const{data:self}=await withTimeout(sb.from('user_progress').select(selfSelectCols).eq('user_id',uid).maybeSingle());
      if(self){
        if(key==='daily_streak'){
          const todayStr=getDailyDateStr();
          const yestStr=getPrevDateStr(todayStr);
          const lastDate=self.daily_streak_last_date?String(self.daily_streak_last_date):'';
          const active=lastDate===todayStr||lastDate===yestStr;
          if(active&&(self[col]||0)>1)rows.push(self);
        } else {
          rows.push(self);
        }
      }
    }
    if(!rows.length&&!selfRow){
      const msg=_lbScope==='friends'?t('lb_no_friends'):'No data yet.';
      el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:8px 0;line-height:1.5">${msg}</div>`;
      return;
    }
    rows.sort((a,b)=>(b[col]||0)-(a[col]||0));
    const allIds=[...rows.map(r=>r.user_id),...(selfRow?[selfRow.user_id]:[])];
    const{data:profiles}=await withTimeout(sb.from('profiles').select('id,username,avatar_color').in('id',allIds));
    const pm=new Map((profiles||[]).map(p=>[p.id,p]));
    function buildLbRow(r,rank,isMe){
      const prof=pm.get(r.user_id);
      const name=prof?.username||'Unknown';
      let val;
      if(key==='time'){
        const totalMins=Math.floor((r[col]||0)/60);
        val=totalMins>=60?Math.floor(totalMins/60)+'H'+(totalMins%60>0?(totalMins%60)+'M':''):totalMins+'M';
      } else if(key==='daily_streak'){
        const sc=r[col]||0;
        const streakIcon=sc>=365?'👑':sc>=90?'🔮':sc>=30?'💎':'🔥';
        val=sc+' '+streakIcon;
      } else {
        val=fmtN(r[col]||0);
      }
      const rankCls=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      const rowLvl=r.xp_level||1;
      const rowTitle=getTitleForLevel(rowLvl);
      return`<div class="lb-row${isMe?' me':''}">
        <div class="lb-rank ${rankCls}">${rank}</div>
        <div class="lb-avatar" style="background:${avatarColor(prof||r.user_id)}">${initials(name)}</div>
        <div class="lb-name"><div>${esc(name)}${isMe?' ('+t('lb_you')+')':''}</div><div class="lb-title-badge ${rowTitle.css}">${rowTitle.badge} ${t('title_'+rowTitle.key)}</div></div>
        <div style="text-align:right"><div class="lb-val">${val}</div></div>
      </div>`;
    }
    let html=rows.map((r,i)=>buildLbRow(r,i+1,r.user_id===uid)).join('');
    if(selfRow&&selfRank){
      html+=`<div style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-align:center;padding:4px 0;letter-spacing:1px">· · ·</div>`;
      html+=buildLbRow({...selfRow,xp_level:(selfRow.xp_level||1)},selfRank,true);
    }
    el.innerHTML=html;
  }catch(e){
    console.error('loadLeaderboard error:',e);
    el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">Error loading leaderboard.</div>`;
  }
}
