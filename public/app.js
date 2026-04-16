// ══════════════════════════════════════════════════════════════════════════════
// i18n
// ══════════════════════════════════════════════════════════════════════════════
const STRINGS={
en:{
  tagline:"Train your brain. Beat your score. Beat your friends.",
  hs_title:"High Scores",nav_stats:"Statistics",nav_tips:"Tips & Tricks",
 mode_lightning:"Lightning",mode_speed:"Speed",mode_daily:"Daily Challenge",mode_practice:"Practice",mode_campaign:"Campaign",
  mode_lightning_desc:"Numbers flash one by one — keep the running total in your head.",
  mode_speed_desc:"2 minutes, as many correct answers as you can.",
  mode_practice_desc:"No timer, no pressure. Choose your operations and go at your own pace.",
  mode_campaign_desc:"100 levels of increasing difficulty. Complete them one by one.",
  campaign_hero_sub:"Complete all 100 levels. Each level unlocks the next.",campaign_no_calc:"For best results, try to solve these without a calculator.",
  campaign_fail_question_time:"Too slow — you lost a life!",
  campaign_world_label:"World",
  campaign_level:"Level",campaign_boss:"Boss",campaign_locked:"Locked",campaign_completed:"Completed",
  campaign_time_attack:"Time Attack",campaign_survival:"Survival",campaign_mode_label:"Mode",
  campaign_mode_time_attack:"Answer {target} questions correctly within {time} seconds.",
  campaign_mode_survival:"Answer {target} questions correctly. You have {lives} lives.",
  campaign_lives:"Lives",campaign_questions:"Questions",campaign_time:"Time",
  campaign_complete_title:"Level Complete!",campaign_complete_sub:"Well done — next level unlocked.",
  campaign_fail_title:"Not quite!",campaign_fail_time:"Time ran out.",campaign_fail_lives:"You ran out of lives.",
  campaign_try_again:"Try Again",campaign_next_level:"Next Level",campaign_back_to_map:"Level Map",
  campaign_boss_label:"Boss Level",
  campaign_world_1:"World 1 — Basics",campaign_world_2:"World 2 — Multiplication",campaign_world_3:"World 3 — Speed",campaign_world_4:"World 4 — Percentages",campaign_world_5:"World 5 — Medium Crunch",campaign_world_6:"World 6 — Hard Numbers",campaign_world_7:"World 7 — Hard Mixed",campaign_world_8:"World 8 — Endurance",campaign_world_9:"World 9 — Elite",campaign_world_10:"World 10 — Master",
  back:"Back",back_to_tips:"Tips & Tricks",start:"Start",go:"Go",
  lightning_setup_sub:"Numbers appear one by one. Add them all up mentally — then enter the total at the end. Choose how many numbers and how fast they flash.",
  diff_label:"Difficulty",diff_easy:"Easy",duration_label:"Duration",dur_30:"30 sec",dur_60:"1 min",dur_120:"2 min",diff_medium:"Medium",diff_hard:"Hard",
  lightning_count_label:"Numbers in sequence (2–20)",
  lightning_interval_label:"Seconds per number (1–20)",
  ops_label:"Operations (select at least one)",
  op_add:"Addition",op_sub:"Subtraction",op_mul:"Multiplication",op_div:"Division",op_pct:"Percentage",
  hud_streak:"Streak",hud_highscore:"High Score",hud_number:"Number",hud_score:"Score",hud_time:"Time",
  xp_to_next:"to next",
  sum_placeholder:"Sum?",answer_placeholder:"Answer",
  keep_going:"Keep Going",change_settings:"Change Settings",change_difficulty:"Change Difficulty",
  main_menu:"Main Menu",play_again:"Play Again",times_up:"Time's Up!",
  speed_setup_sub:"Solve as many expressions as you can in 2 minutes. Pick your difficulty — then go.",
  practice_setup_sub:"No timer. No pressure. Just math.",
  correct:"Correct!",not_quite:"Not quite…",
  streak_label:"Streak",highscore_label:"High Score",answer_was:"The answer was",
  check_correct:"✓ Correct! Well done!",check_wrong_prefix:"✗ Not quite — the answer is",
  speed_correct:"✓ Correct!",speed_wrong:"✗ Wrong — try again!",speed_hint:"✗ Wrong — hint: the answer is",
  what_was_sum:"What was the sum?",
  lightning_round_score:"Round score",
  lightning_total_score:"Total score",
  op_type_add:"Addition",op_type_sub:"Subtraction",op_type_mul:"Multiplication",op_type_div:"Division",op_type_pct:"Percentage",
  plays_label:"plays",
  reset_btn:"Reset All Statistics",
  reset_modal_title:"Reset All Stats?",
  reset_modal_desc:"This will clear all high scores, play counts, statistics and your XP level. This cannot be undone.",
  cancel:"Cancel",reset_confirm:"Yes, Reset",
  stats_hero_sub:"Track your progress across all modes and operation types.",
  tips_hero_sub:"Click any technique to start practising it immediately. Mastering these will dramatically speed up your mental math.",
  filter_all:"All",filter_mul:"Multiply",filter_div:"Divide",filter_add:"Add",filter_sub:"Subtract",filter_pct:"Percentages",filter_gen:"General",
  tip_practice_this:"Practice this",
  stats_sec_overview:"Overview",stat_total_answered:"Total Answered",stat_strongest:"Strongest",stat_weakest:"Weakest",stats_sec_accuracy:"Accuracy by Operation",stats_sec_scores:"High Scores",stats_sec_time:"Time & Volume",
  stat_accuracy:"Overall Accuracy",stat_total_ans:"Total Answers",stat_total_games:"Games Played",
  stat_best_speed:"Best Speed Score",stat_best_streak:"Best Streak",stat_daily_best_streak:"Best Streak",stat_longest_streak:"Longest Correct Streak",stat_fastest:"Fastest",stat_slowest:"Slowest",stat_days_played:"Days Completed",
  stat_time_trained:"Time Trained",stat_avg_speed:"Avg Speed Score",
  stat_most_correct:"Your Strongest Operation",stat_most_wrong:"Your Weakest Operation",
  stat_most_correct_sub:"You answer these correctly most often",stat_most_wrong_sub:"You get these wrong most often — focus here!",
  stat_speed_easy:"Speed — Easy",stat_speed_med:"Speed — Medium",stat_speed_hard:"Speed — Hard",
  stat_light_easy:"Lightning — Easy",stat_light_med:"Lightning — Medium",stat_light_hard:"Lightning — Hard",
  stat_total_correct:"Total Correct",stat_total_wrong:"Total Wrong",
  stat_op_breakdown:"Your accuracy rate per operation type",
  stat_op_breakdown_sub:"Bar = how often you get it right vs total attempts",
  stat_not_enough:"Play more to unlock this insight",
  stat_minutes:"min",
  filter_mode_all:"All Modes",
  stat_correct_rate:"Correct Rate",stat_wrong_rate:"Wrong Rate",
  stat_per_min:"Answers / min",stat_per_min_sub:"avg across speed games",
  stat_best_run:"Personal Best Run",stat_best_run_sub:"single speed game",
  stat_practice_questions:"Practice Questions",stat_practice_questions_sub:"answered in practice mode",
  stat_tip_practice_sessions:"Tip Sessions",stat_tip_practice_sessions_sub:"techniques practised",
  nav_friends:"Friends",nav_leaderboard:"Leaderboard",challenge_friend:"Challenge a Friend",
  challenge_title:"CHALLENGE",challenge_copy:"Copy",challenge_link_sub:"Link expires in 7 days.",
  auth_join_title:"Join Numfly",auth_join_sub:"Save progress & challenge friends",
  auth_signup:"Sign Up",auth_login:"Log In",
  auth_username_label:"Username",auth_email_label:"Email",auth_email_or_username_label:"Email or username",auth_email_or_username_ph:"Your email or username",auth_password_label:"Password",
  auth_username_ph:"e.g. mathwizard42",auth_password_ph:"Min. 8 characters",auth_password_login_ph:"Your password",
  auth_create_btn:"Create Account",auth_login_btn:"Log In",
  auth_google:"Continue with Google",auth_guest:"Continue as guest",auth_divider:"or",
  auth_check_email:"Check your email",auth_check_email_sub:"We sent a confirmation link to",auth_check_email_sub2:"Click it to activate your account.",auth_check_email_spam:"Can't find it? Check your spam folder.",auth_got_it:"Got it",
  sidebar_guest_msg:"Sign in to save progress and compete with friends.",sidebar_sign_in:"Sign In / Register",
  sidebar_sign_out:"Sign Out",sidebar_language:"Language",sidebar_edit_username:"Edit Username",sidebar_change_pw:"Change Password",change_pw_sub:"Once changed, you must wait 24 hours before changing again.",change_pw_current:"Current Password",change_pw_current_required:"Enter your current password.",change_pw_wrong_current:"Current password is incorrect.",
  friends_sub:"Search and add friends by username",friends_search_ph:"Search by username...",
  friends_pending:"Pending requests",friends_your:"Your friends",friends_sign_in_msg:"Sign in to add friends",
  friends_requests_title:"Friend Requests",
  challenge_friend_direct:"Challenge",challenge_dare_friend:"Dare a Friend",dare_title:"Dare a Friend",dare_sub:"You scored {score}. Can they beat it?",dare_send:"Send dare",dare_sent:"Dare sent! 🎯",dare_notif:"Can you beat {n}?",race_title:"Challenge",race_sub:"Pick a friend and a difficulty — best score wins.",race_send:"Send challenge",race_notif:"wants to compete against you",race_start:"Challenge",challenge_vs_history:"Stats",remove_friend:"Remove",block_user:"Block",blocked_users:"Blocked Users",user_blocked:"Blocked",unblock_user:"Unblock",err_blocked:"Cannot send request.",
  competition_title:"Competition",
  competition_new:"New challenge",competition_sub:"Everyone plays the same questions — best score wins.",competition_send:"Send challenge",challenge_play:"▶ Play challenge",challenge_outgoing:"Your turn to play!",challenge_cancel:"✕ Cancel",challenge_vs:"Challenge",challenge_no_scores:"No scores yet.",challenge_pending_score:"pending",challenge_pending_title:"Pending Challenges",challenge_invited_by:"challenged you",comp_invited_by:"invited you to a group competition",competition_scoreboard:"Scoreboard",comp_group_title:"Group Competition",comp_group_my:"My Competitions",comp_group_play_now:"Your turn!",comp_group_waiting:"Waiting for others",comp_group_ongoing:"Ongoing Competitions",comp_leave_confirm:"Leave this competition? You will no longer see it.",comp_cancel_confirm:"Cancel this competition for everyone?",comp_cancel_btn:"Cancel competition",comp_leave_btn:"Leave competition",comp_group_new:"+ New competition",comp_group_empty:"No active competitions. Create one and play against your friends!",comp_group_sub:"Pick 2+ friends — everyone plays the same questions. Best score wins each round. Any member can start a new round.",comp_group_send:"Start competition",challenge_select_min2:"Select at least 2 friends.",challenge_select_min1:"Select at least 1 friend.",comp_group_sent:"Competition started!",comp_player_left:"Left",comp_group_done:"Round complete",comp_col_player:"Player",comp_col_played:"Played",comp_col_score:"Score",comp_col_status:"Status",streak_result_great:"🔥 {n} day streak — incredible!",streak_result_good:"🔥 {n} day streak — keep it up!",streak_result_start:"🔥 {n} day streak!",comp_scoreboard:"📊 Scoreboard",comp_play:"▶ Play",challenge_continue:"▶ Continue playing",comp_group_new_round:"▶ New round",
  competition_waiting:"Waiting for opponents…",competition_pending_lbl:"pending",
  challenge_direct_sent:"Challenge sent to",challenge_direct_fail:"Could not send challenge",
  h2h_total:"Total score",h2h_win:"Win",h2h_loss:"Loss",h2h_tie:"Tie",h2h_you:"You",lb_you:"you",h2h_them:"Them",h2h_games:"games played",h2h_history:"Head-to-head history",h2h_no_shared:"No shared challenges yet. Challenge this friend to start your record!",h2h_your_wins:"Your wins",h2h_their_wins_s:"{name}'s wins",h2h_their_wins_en:"{name}' wins",h2h_ties:"ties",h2h_recent:"Recent challenges",h2h_challenge_again:"⚔ Challenge again",remove_friend_confirm:"Remove this friend?",
  challenge_title:"Challenge",challenge_copy:"Copy Link",challenge_link_sub:"Send this link to your opponent — they'll play the same questions.",
  leaderboard_sub:"Friends + global top 10",lb_sign_in_msg:"Sign in to see the leaderboard",lb_group_general:"General",lb_group_speed:"Speed",lb_group_lightning:"Lightning",lb_tab_streak:"Daily Streak",friend_not_found:"No user found for '{q}'",friend_add:"+ Add",friend_already:"✓ Friends",friend_pending_btn:"⏳ Pending",friend_request_sent:"Request sent to {name}!",friend_wants_friend:"wants to be friends",friend_accept:"✓ Accept",friend_decline:"✗ Decline",friend_block:"🚫 Block",err_search:"Error searching. Please try again.",err_load_friends:"Error loading friends.",err_load_scoreboard:"Error loading scoreboard.",err_challenge_not_found:"Challenge not found.",challenge_select_friend:"Select at least one friend.",challenge_creating:"Creating challenge…",stats_no_data:"no data yet",lb_no_friends:"Add friends to see how you compare! 👥",btn_danger_remove:"Remove",
  lb_tab_xp:"XP",lb_tab_speed_easy:"⚡ Speed Easy",lb_tab_speed_med:"⚡ Speed Med",lb_tab_speed_hard:"⚡ Speed Hard",lb_tab_lightning_easy:"🔥 Lightning Easy",lb_tab_lightning_med:"🔥 Lightning Med",lb_tab_lightning_hard:"🔥 Lightning Hard",lb_tab_time:"Time played",
  edit_username_title:"Edit Username",edit_username_save:"Save",
  gdpr_title:"Your privacy",
  gdpr_text:"We use essential storage to keep your progress and login session, and analytics to understand how the app is used and make it better. No data is sold or shared with third parties. <a href='#' class='privacy-link' style='cursor:pointer'>Privacy policy</a>",
  gdpr_accept:"Accept analytics",gdpr_decline:"Reject analytics",
  challenge_waiting:"Waiting for opponent...",challenge_sent_waiting:"Sent · waiting",challenge_sent_resume:"Sent · You still need to finish playing",challenge_win:"🏆 You won the round — congratulations!",challenge_loss:"🏆 {name} won the round",challenge_tie:"🤝 Tie!",challenge_win_short:"You won!",challenge_loss_short:"{name} won",
  no_friends_yet:"No friends yet — search above to add some",
  no_friends_dare:"No friends yet.",
  comp_round_notif:"Round {n}",
  username_cooldown_sub:"You can change your username once every 30 days.",
  username_cooldown_days:"{n} days remaining",
  err_username_short:"Username must be at least 3 characters",
  err_username_chars:"Letters, numbers and _ only",
  err_username_taken:"Username already taken — please choose another",
  err_password_short:"Email and password (min 8 chars) required",
  err_fields_required:"Email and password required",err_google_account:"The username '{u}' is linked to a Google account. Please sign in with Google instead.",err_google_account_hint:"Did you sign up with Google?",
  tips_count_label:"tips",tips_filter_active:"Showing",tips_filter_hint:"Select one or more categories",
  diff_filter_label:"Accuracy filter — difficulty",
  stat_op_label_add:"➕ Addition",stat_op_label_sub:"➖ Subtraction",stat_op_label_mul:"✖ Multiply",stat_op_label_div:"➗ Division",stat_op_label_pct:"% Percentage",
  xp_level_label:"Level",levelup_label:"Level Up!",levelup_btn:"Let's Go!",titles_modal_title:"Titles",titles_lv:"Lv.",
  title_novice:"Novice",title_learner:"Learner",title_scholar:"Scholar",title_theorist:"Theorist",title_master:"Master",title_polymath:"Polymath",title_pythagoras:"Pythagoras",title_euler:"Euler",title_gauss:"Gauss",
  title_flavor_novice:"Your journey begins. Every master was once where you stand.",
  title_flavor_learner:"The first steps are always the hardest. You're moving forward.",
  title_flavor_scholar:"Knowledge is taking root. Your dedication is showing.",
  title_flavor_theorist:"You think in patterns now. The numbers bend to your will.",
  title_flavor_master:"Rare company. Most never reach this level of mastery.",
  title_flavor_polymath:"You transcend a single discipline — your mind spans all of math.",
  title_flavor_pythagoras:"A name carved in history. You have earned it.",
  title_flavor_euler:"One of the greatest mathematical minds to ever live. You rival him.",
  title_flavor_gauss:"The pinnacle. The Prince of Mathematics. There is nothing higher.",
  stat_total_time:"Time Trained",stat_lightning_time:"Lightning Time",stat_practice_time:"Practice Time",
  nav_achievements:"Achievements",
  ach_hero_sub:"Earn badges by reaching milestones across all modes.",
  ach_unlocked_label:"Achievement Unlocked!",
  ach_locked:"Locked",
  ach_tier_bronze:"Bronze",ach_tier_silver:"Silver",ach_tier_gold:"Gold",ach_tier_platinum:"Platinum",ach_tier_diamond:"Diamond",
  ach_sec_general:"General",ach_sec_lightning:"Lightning",ach_sec_speed:"Speed",ach_sec_practice:"Practice",ach_sec_mastery:"Mastery",
  // Achievement names & descs
  ach_first_correct_name:"First Blood",ach_first_correct_desc:"Answer your first question correctly",
  ach_answers_1_name:"Getting Started",ach_answers_1_desc:"Answer 30 expressions correctly",
  ach_answers_2_name:"On A Roll",ach_answers_2_desc:"Answer 100 expressions correctly",
  ach_answers_3_name:"Century",ach_answers_3_desc:"Answer 250 expressions correctly",
  ach_answers_4_name:"One Thousand",ach_answers_4_desc:"Answer 1,000 expressions correctly",
  ach_answers_5_name:"Math Machine",ach_answers_5_desc:"Answer 2,500 expressions correctly",
  ach_answers_6_name:"Unstoppable",ach_answers_6_desc:"Answer 10,000 expressions correctly",
  ach_time_1_name:"Warm Up",ach_time_1_desc:"Train for 5 minutes total",
  ach_time_2_name:"Dedicated",ach_time_2_desc:"Train for 30 minutes total",
  ach_time_3_name:"Committed",ach_time_3_desc:"Train for 2 hours total",
  ach_time_4_name:"Obsessed",ach_time_4_desc:"Train for 20 hours total",ach_time_5_name:"Devoted",ach_time_5_desc:"Train for 50 hours total",
  ach_lightning_seq_1_name:"Spark",ach_lightning_seq_1_desc:"Answer a sequence of 5 numbers correctly",
  ach_lightning_seq_2_name:"Flash",ach_lightning_seq_2_desc:"Answer a sequence of 10 numbers correctly",
  ach_lightning_seq_3_name:"Thunderbolt",ach_lightning_seq_3_desc:"Answer a sequence of 15 on Medium or Hard",
  ach_lightning_seq_4_name:"Lightning God",ach_lightning_seq_4_desc:"Answer a sequence of 20 on Medium or Hard",
  ach_lightning_streak_1_name:"Consistent",ach_lightning_streak_1_desc:"Win 3 Lightning rounds in a row",
  ach_lightning_streak_2_name:"On Fire",ach_lightning_streak_2_desc:"Win 10 Lightning rounds in a row",
  ach_lightning_streak_3_name:"Flawless",ach_lightning_streak_3_desc:"Win 25 Lightning rounds in a row",
  ach_lightning_games_1_name:"First Round",ach_lightning_games_1_desc:"Complete 1 Lightning game",
  ach_lightning_games_2_name:"Returning",ach_lightning_games_2_desc:"Complete 10 Lightning games",
  ach_lightning_games_3_name:"Regular",ach_lightning_games_3_desc:"Complete 50 Lightning games",
  ach_speed_score_1_name:"Speedy",ach_speed_score_1_desc:"Score 15 correct in one Speed game",
  ach_speed_score_2_name:"Fast Fingers",ach_speed_score_2_desc:"Score 30 correct in one Speed game",
  ach_speed_score_3_name:"Speed Demon",ach_speed_score_3_desc:"Score 50 correct in one Speed game",
  ach_speed_score_4_name:"Hypersonic",ach_speed_score_4_desc:"Score 75 correct in one Speed game",
  ach_speed_streak_1_name:"Focused",ach_speed_streak_1_desc:"Get 10 correct in a row in Speed",
  ach_speed_streak_2_name:"In The Zone",ach_speed_streak_2_desc:"Get 20 correct in a row in Speed",
  ach_speed_streak_3_name:"Untouchable",ach_speed_streak_3_desc:"Get 40 correct in a row in Speed",
  ach_practice_1_name:"First Steps",ach_practice_1_desc:"Answer 30 questions in Practice mode",
  ach_practice_2_name:"Steady",ach_practice_2_desc:"Answer 150 questions in Practice mode",
  ach_practice_3_name:"Dedicated Learner",ach_practice_3_desc:"Answer 750 questions in Practice mode",
  ach_practice_streak_1_name:"Streak Starter",ach_practice_streak_1_desc:"Get 5 correct in a row in Practice",
  ach_practice_streak_2_name:"Sharp Mind",ach_practice_streak_2_desc:"Get 15 correct in a row in Practice",
  ach_practice_streak_3_name:"Perfect Run",ach_practice_streak_3_desc:"Get 30 correct in a row in Practice",
  ach_tips_1_name:"Curious",ach_tips_1_desc:"Practice 1 Tip & Trick technique",
  ach_tips_2_name:"Technique Collector",ach_tips_2_desc:"Practice 5 different Tips & Tricks techniques",
  ach_tips_3_name:"Method Actor",ach_tips_3_desc:"Practice 10 different Tips & Tricks techniques",
  ach_accuracy_1_name:"Sharpshooter",ach_accuracy_1_desc:"Reach 80% overall accuracy (min. 50 answers)",
  ach_accuracy_2_name:"Precision",ach_accuracy_2_desc:"Reach 90% overall accuracy (min. 100 answers)",
  ach_accuracy_3_name:"Perfectionist",ach_accuracy_3_desc:"Reach 95% overall accuracy (min. 200 answers)",
  ach_hard_1_name:"Hard Mode",ach_hard_1_desc:"Complete a Speed game on Hard difficulty",
  ach_hard_2_name:"Glutton for Punishment",ach_hard_2_desc:"Score 30 correct on Hard Speed",
  ach_level_1_name:"Level 5",ach_level_1_desc:"Reach Level 5",
  ach_level_2_name:"Level 10",ach_level_2_desc:"Reach Level 10",
  ach_level_3_name:"Level 25",ach_level_3_desc:"Reach Level 25",
  ach_level_4_name:"Level 50",ach_level_4_desc:"Reach Level 50",
  ach_level_5_name:"Level 100",ach_level_5_desc:"Reach Level 100",
  ach_level_6_name:"Level 1000",ach_level_6_desc:"Reach Level 1000 — the absolute pinnacle",
  stat_longest_lightning:"Best Streak",stat_avg_lightning:"Longest Sequence",
  stat_practice_accuracy:"Practice Accuracy",stat_practice_wrong:"Wrong Answers",
  stat_total_speed_correct:"Total Speed Correct",stat_speed_games_played:"Speed Games Played",
  stat_longest_speed_streak:"Longest Correct Streak",stat_longest_speed_streak_sub:"in a single speed game",
  stat_avg_time_per_q:"Avg Sec / Question",stat_avg_time_per_q_sub:"practice mode",
  stat_practice_streak:"Best Practice Streak",stat_practice_streak_sub:"correct answers in a row",stat_speed_streak:"Best Speed Streak",stat_speed_streak_sub:"correct answers in a row",
  stat_longest_seq_sub:"answered correctly",
  auth_forgot_pw:"Forgot your password?",auth_confirm_password_label:"Confirm Password",auth_confirm_password_ph:"Repeat your password",err_password_mismatch:"Passwords do not match",err_confirm_required:"Please confirm your password",err_signup_failed:"Sign up failed. Please try again.",err_email_taken:"An account with this email already exists.",
  ach_sec_daily:"Daily Challenge",ach_sec_campaign:"Campaign",
  ach_cmp_1_name:"First Level",ach_cmp_1_desc:"Complete your first campaign level",
  ach_cmp_5_name:"Getting Somewhere",ach_cmp_5_desc:"Complete 5 campaign levels",
  ach_cmp_10_name:"Halfway There",ach_cmp_10_desc:"Complete 10 campaign levels",
  ach_cmp_25_name:"Quarter Century",ach_cmp_25_desc:"Complete 25 campaign levels",
  ach_cmp_50_name:"Halfway to 100",ach_cmp_50_desc:"Complete 50 campaign levels",
  ach_cmp_75_name:"Almost There",ach_cmp_75_desc:"Complete 75 campaign levels",
  ach_cmp_100_name:"Grand Master",ach_cmp_100_desc:"Complete all 100 campaign levels",
  ach_cmp_boss_1_name:"Boss Slayer",ach_cmp_boss_1_desc:"Beat your first boss level",
  ach_cmp_boss_5_name:"Boss Hunter",ach_cmp_boss_5_desc:"Beat 5 boss levels",
  ach_cmp_boss_10_name:"Conqueror",ach_cmp_boss_10_desc:"Beat all 10 boss levels",
  ach_cmp_perfect_3_name:"Flawless",ach_cmp_perfect_3_desc:"Complete 3 levels perfectly — no lives lost, no wrong answers",
  ach_cmp_perfect_10_name:"Immaculate",ach_cmp_perfect_10_desc:"Complete 10 levels perfectly — no lives lost and no wrong answers",
  ach_cmp_perfect_25_name:"Untouchable",ach_cmp_perfect_25_desc:"Complete 25 levels perfectly — no lives lost and no wrong answers",
  ach_daily_1_name:"First Step",ach_daily_1_desc:"Complete your first daily challenge",
  ach_daily_2_name:"Week Warrior",ach_daily_2_desc:"Complete 7 daily challenges",
  ach_daily_3_name:"Monthly Master",ach_daily_3_desc:"Complete 30 daily challenges",
  ach_daily_streak_1_name:"On Fire",ach_daily_streak_1_desc:"Reach a 3-day daily streak",
  ach_daily_streak_2_name:"Week Streak",ach_daily_streak_2_desc:"Reach a 7-day daily streak",
  ach_daily_streak_3_name:"Unstoppable",ach_daily_streak_3_desc:"Reach a 30-day daily streak",ach_daily_streak_4_name:"Legendary",ach_daily_streak_4_desc:"Reach a 365-day daily streak",
  ach_daily_speed_1_name:"Quick",ach_daily_speed_1_desc:"Complete daily challenge in under 30 seconds",
  ach_daily_speed_2_name:"Lightning",ach_daily_speed_2_desc:"Complete daily challenge in under 25 seconds",
  ach_daily_speed_3_name:"Flash",ach_daily_speed_3_desc:"Complete daily challenge in under 20 seconds",
  ach_lightning_score_1_name:"Point Scorer",ach_lightning_score_1_desc:"Reach a Lightning score of 500",
  ach_lightning_score_2_name:"High Voltage",ach_lightning_score_2_desc:"Reach a Lightning score of 2,000",
  ach_lightning_score_3_name:"Overload",ach_lightning_score_3_desc:"Reach a Lightning score of 5,000",
  ach_lightning_score_4_name:"Megawatt",ach_lightning_score_4_desc:"Reach a Lightning score of 15,000",
  daily_guest_prompt:"Sign in to save your time and compete on the leaderboard",
  daily_guest_btn:"Create account",
  pick_username_title:"Choose your username",
  pick_username_sub:"This is how other players will see you.\nYou can change it later (once every 30 days).",
  pick_username_save:"Let's go!",
  daily_badge:"Daily Challenge",
  daily_title:"Today's Challenge",daily_resets_in_hm:"New challenge in {h}h {m}m",daily_resets_in_m:"New challenge in {m}m",
  daily_sub:"10 expressions · Fastest time wins",
  daily_progress_label:"Question",
  daily_result_title:"Done!",daily_share_label:"Share your result",daily_share_msg:"I completed today's Numfly Math Challenge in {time}! Can you beat it? 🧮",
  daily_result_sub:"Share your time and challenge your friends 👇",
  dc_tab_friends:"Friends",dc_tab_global:"Global",
  daily_completed:"Challenge completed",
  daily_sign_in:"Sign in to save your time and see the ranking",
  auth_reset_send:"Send Reset Email",
  auth_back_to_login:"← Back to login",
  auth_reset_sent:"Reset email sent! Check your inbox — and your spam folder.",auth_reset_cooldown:"Please wait 24 hours before requesting another reset.",auth_reset_cooldown_hrs:"You can request a new reset in {h}h {m}m.",auth_set_new_password:"Set New Password",auth_set_pw_sub:"Choose a strong password (min. 8 characters).",auth_pw_updated:"Password updated successfully!",auth_pw_confirm_email:"Check your email — click the confirmation link to finalise your new password.",auth_pw_confirm_sub:"Didn't get it? Check your spam folder.",
  auth_reset_error:"Could not send reset email: ",
  sidebar_cookie_settings:"Cookie settings",
  sidebar_privacy:"Privacy policy",
  google_notice_title:"Before you continue",
  comp_name_label:"Competition name (optional)",
  comp_name_ph:"e.g. Friday night battle",
  google_notice_body:"You'll be redirected to Google to sign in. During this process you may briefly see a page at <span style=\"color:var(--accent);word-break:break-all;font-size:11px;\">pwqklvedbydxmnhocaqp.supabase.co</span> — this is our authentication provider (Supabase). This redirect is normal and secure. We're working on a custom domain for a cleaner experience in the future.",
  google_notice_continue:"Continue",
  google_notice_cancel:"Cancel",
  tips_to_guide: "How do you train this best? Read our guide for a fixed daily routine →",
  err_count_range: "Please enter a number between 2 and 20.",
  err_interval_range: "Please enter a number between 1 and 20.",
},
nl:{
  tagline:"Train je brein. Verbeter je score. Versla je vrienden.",
  hs_title:"Highscores",nav_stats:"Statistieken",nav_tips:"Tips & Trucs",
  mode_lightning:"Bliksem",mode_speed:"Snelheid",mode_daily:"Dagelijkse Uitdaging",mode_practice:"Oefenen",mode_campaign:"Campagne",
  mode_lightning_desc:"Getallen flitsen voorbij — hou de lopende som bij in je hoofd.",
  mode_speed_desc:"2 minuten, zoveel juiste antwoorden als je kunt.",
  mode_practice_desc:"Geen timer. Geen druk. Gewoon rekenen.",
  mode_campaign_desc:"100 niveaus van toenemende moeilijkheid. Voltooi ze één voor één.",
  campaign_hero_sub:"Voltooi alle 100 niveaus. Elk niveau ontgrendelt het volgende.",campaign_no_calc:"Je leert er het meest van als je het zonder rekenmachine probeert.",
  campaign_fail_question_time:"Te langzaam — je bent een leven kwijt!",
  campaign_world_label:"Wereld",
  campaign_level:"Niveau",campaign_boss:"Baas",campaign_locked:"Vergrendeld",campaign_completed:"Voltooid",
  campaign_time_attack:"Tijdaanval",campaign_survival:"Overleving",campaign_mode_label:"Modus",
  campaign_mode_time_attack:"Beantwoord {target} vragen correct binnen {time} seconden.",
  campaign_mode_survival:"Beantwoord {target} vragen correct. Je hebt {lives} levens.",
  campaign_lives:"Levens",campaign_questions:"Vragen",campaign_time:"Tijd",
  campaign_complete_title:"Niveau Voltooid!",campaign_complete_sub:"Goed gedaan — volgend niveau ontgrendeld.",
  campaign_fail_title:"Niet gelukt!",campaign_fail_time:"De tijd is om.",campaign_fail_lives:"Je levens zijn op.",
  campaign_try_again:"Opnieuw Proberen",campaign_next_level:"Volgend Niveau",campaign_back_to_map:"Niveaukaart",
  campaign_boss_label:"Baasniveau",
  campaign_world_1:"Wereld 1 — Basis",campaign_world_2:"Wereld 2 — Vermenigvuldigen",campaign_world_3:"Wereld 3 — Snelheid",campaign_world_4:"Wereld 4 — Percentages",campaign_world_5:"Wereld 5 — Middelharde Mix",campaign_world_6:"Wereld 6 — Zware Getallen",campaign_world_7:"Wereld 7 — Zware Mix",campaign_world_8:"Wereld 8 — Uithoudingsvermogen",campaign_world_9:"Wereld 9 — Elite",campaign_world_10:"Wereld 10 — Meester",
  back:"Terug",back_to_tips:"Tips & Trucs",start:"Starten",go:"Ok",
  lightning_setup_sub:"Getallen verschijnen één voor één. Tel ze allemaal op in je hoofd en vul het totaal in aan het einde. Kies hoeveel getallen en hoe snel ze flitsen.",
  diff_label:"Moeilijkheidsgraad",diff_easy:"Makkelijk",duration_label:"Duur",dur_30:"30 sec",dur_60:"1 min",dur_120:"2 min",diff_medium:"Gemiddeld",diff_hard:"Moeilijk",
  lightning_count_label:"Getallen in reeks (2–20)",
  lightning_interval_label:"Seconden per getal (1–20)",
  ops_label:"Bewerkingen (kies er minstens één)",
  op_add:"Optellen",op_sub:"Aftrekken",op_mul:"Vermenigvuldigen",op_div:"Delen",op_pct:"Procenten",
  hud_streak:"Streak",hud_highscore:"Highscore",hud_number:"Getal",hud_score:"Score",hud_time:"Tijd",
  xp_to_next:"naar volgend",
  sum_placeholder:"Som?",answer_placeholder:"Antwoord",
  keep_going:"Doorgaan",change_settings:"Instellingen Wijzigen",change_difficulty:"Moeilijkheid Wijzigen",
  main_menu:"Hoofdmenu",play_again:"Opnieuw Spelen",times_up:"Tijd Is Om!",
  speed_setup_sub:"Los zoveel mogelijk sommen op in 2 minuten. Kies je moeilijkheidsgraad en begin.",
  practice_setup_sub:"Geen timer. Geen druk. Gewoon rekenen.",
  correct:"Correct!",not_quite:"Niet helemaal…",
  streak_label:"Streak",highscore_label:"Highscore",answer_was:"Het antwoord was",
  check_correct:"✓ Correct! Goed gedaan!",check_wrong_prefix:"✗ Niet helemaal — het antwoord is",
  speed_correct:"✓ Correct!",speed_wrong:"✗ Fout — probeer opnieuw!",speed_hint:"✗ Fout — hint: het antwoord is",
  what_was_sum:"Wat was de som?",
  lightning_round_score:"Ronde score",
  lightning_total_score:"Totale score",
  op_type_add:"Optellen",op_type_sub:"Aftrekken",op_type_mul:"Vermenigvuldigen",op_type_div:"Delen",op_type_pct:"Procenten",
  plays_label:"keer gespeeld",
  reset_btn:"Alle Statistieken Resetten",
  reset_modal_title:"Alles Resetten?",
  reset_modal_desc:"Dit verwijdert alle highscores, speeltellingen, statistieken én je XP-niveau. Kan niet ongedaan worden gemaakt.",
  cancel:"Annuleren",reset_confirm:"Ja, Resetten",
  stats_hero_sub:"Volg je voortgang over alle modi en bewerkingstypes.",
  tips_hero_sub:"Klik op een techniek om er meteen mee te oefenen. Door deze te beheersen verbeter je je hoofdrekenen enorm.",
  filter_all:"Alles",filter_mul:"Vermenigvuldigen",filter_div:"Delen",filter_add:"Optellen",filter_sub:"Aftrekken",filter_pct:"Procenten",filter_gen:"Algemeen",
  tip_practice_this:"Oefen dit",
  stats_sec_overview:"Overzicht",stat_total_answered:"Totaal beantwoord",stat_strongest:"Sterkste",stat_weakest:"Zwakste",stats_sec_accuracy:"Nauwkeurigheid per bewerking",stats_sec_scores:"Highscores",stats_sec_time:"Tijd & Volume",stat_days_played:"Dagen Gespeeld",stat_best_streak:"Beste Streak",stat_fastest:"Snelste",stat_slowest:"Langzaamste",stat_times:"Uitdagingstijden",stat_accuracy:"Nauwkeurigheid",
  stat_accuracy:"Totale nauwkeurigheid",stat_total_ans:"Totale antwoorden",stat_total_games:"Gespeelde potjes",
  stat_best_speed:"Beste score Snelheid",stat_best_streak:"Beste streak Bliksem",stat_daily_best_streak:"Beste Streak",stat_longest_streak:"Langste correcte reeks",
  stat_time_trained:"Getraind",stat_avg_speed:"Gem. score Snelheid",
  stat_most_correct:"Je Sterkste Bewerking",stat_most_wrong:"Je Zwakste Bewerking",
  stat_most_correct_sub:"Hier scoor je het vaakst correct",stat_most_wrong_sub:"Hier maak je het meeste fouten — oefen hier!",
  stat_speed_easy:"Snelheid — Makkelijk",stat_speed_med:"Snelheid — Gemiddeld",stat_speed_hard:"Snelheid — Moeilijk",
  stat_light_easy:"Bliksem — Makkelijk",stat_light_med:"Bliksem — Gemiddeld",stat_light_hard:"Bliksem — Moeilijk",
  stat_total_correct:"Totaal correct",stat_total_wrong:"Totaal fout",
  stat_op_breakdown:"Jouw nauwkeurigheid per bewerkingstype",
  stat_op_breakdown_sub:"Balk = hoe vaak je het goed hebt vs totaal geprobeerd",
  stat_not_enough:"Speel meer om dit inzicht te ontgrendelen",
  stat_minutes:"min",
  filter_mode_all:"Alle modi",
  stat_correct_rate:"Slagingspercentage",stat_wrong_rate:"Foutpercentage",
  stat_per_min:"Antwoorden / min",stat_per_min_sub:"gem. over snelheidsspellen",
  stat_best_run:"Persoonlijk Record",stat_best_run_sub:"enkel snelheidsspel",
  stat_practice_questions:"Oefen­vragen",stat_practice_questions_sub:"beantwoord in oefenmodus",
  stat_tip_practice_sessions:"Tip­sessies",stat_tip_practice_sessions_sub:"technieken geoefend",
  nav_friends:"Vrienden",challenge_dare_friend:"Daag een vriend uit",dare_title:"Daag een vriend uit",dare_sub:"Jij scoorde {score}. Kunnen zij dat verslaan?",dare_send:"Stuur uitdaging",dare_sent:"Uitdaging verstuurd! 🎯",dare_notif:"Kun jij {n} verslaan?",race_title:"Uitdaging",race_sub:"Kies een vriend en moeilijkheidsgraad — beste score wint.",race_send:"Uitdaging sturen",race_notif:"wil het tegen je opnemen",race_start:"Challenge",competition_sub:"Iedereen speelt dezelfde vragen — beste score wint.",comp_group_title:"Groepscompetitie",comp_group_my:"Mijn Competities",comp_group_play_now:"Jij bent aan de beurt!",comp_group_waiting:"Wachten op anderen",comp_group_ongoing:"Lopende Competities",comp_leave_confirm:"Deze competitie verlaten? Je ziet hem niet meer.",comp_cancel_confirm:"Deze competitie annuleren voor iedereen?",comp_cancel_btn:"Competitie annuleren",comp_leave_btn:"Competitie verlaten",comp_group_new:"+ Nieuwe Competitie",comp_group_empty:"Geen actieve competities. Maak er één en speel tegen je vrienden!",comp_group_sub:"Kies 2+ vrienden — iedereen speelt dezelfde vragen. Beste score wint elke ronde. Elk lid kan een nieuwe ronde starten.",comp_group_send:"Competitie starten",challenge_select_min2:"Selecteer minstens 2 vrienden.",challenge_select_min1:"Selecteer minstens 1 vriend.",comp_group_sent:"Competitie gestart!",comp_player_left:"Verlaten",comp_group_done:"Ronde klaar",comp_col_player:"Speler",comp_col_played:"Gespeeld",comp_col_score:"Score",comp_col_status:"Status",streak_result_great:"🔥 {n} dagen streak — geweldig!",streak_result_good:"🔥 {n} dagen streak — blijf doorgaan!",streak_result_start:"🔥 {n} dagen streak!",comp_scoreboard:"📊 Scoreboard",comp_play:"▶ Spelen",challenge_continue:"▶ Verder spelen",comp_group_new_round:"▶ Nieuwe ronde",competition_new:"Nieuwe uitdaging",competition_send:"Uitdaging versturen",challenge_play:"▶ Uitdaging spelen",challenge_outgoing:"Jij bent aan de beurt!",challenge_cancel:"✕ Annuleren",challenge_vs:"Uitdaging",challenge_no_scores:"Nog geen scores.",challenge_pending_score:"in afwachting",challenge_pending_title:"Openstaande Uitdagingen",challenge_invited_by:"heeft je uitgedaagd",comp_invited_by:"heeft je uitgenodigd voor een groepscompetitie",
  h2h_total:"Totaalscore",h2h_win:"Gewonnen",h2h_loss:"Verloren",h2h_tie:"Gelijk",h2h_you:"Jij",lb_you:"jij",h2h_them:"Zij",h2h_games:"gespeelde uitdagingen",h2h_history:"Statistieken",h2h_no_shared:"Nog geen gedeelde uitdagingen. Daag uit!",h2h_your_wins:"Jouw overwinningen",h2h_their_wins_s:"Overwinningen van {name}",h2h_their_wins_en:"Overwinningen van {name}",h2h_ties:"gelijkspelen",h2h_recent:"Recente uitdagingen",h2h_challenge_again:"⚔ Opnieuw uitdagen",remove_friend_confirm:"Deze vriend verwijderen?",nav_leaderboard:"Klassement",challenge_friend:"Vriend Uitdagen",
  challenge_title:"UITDAGING",challenge_copy:"Kopiëren",challenge_link_sub:"Link vervalt over 7 dagen.",
  auth_join_title:"Word lid van Numfly",auth_join_sub:"Sla voortgang op & daag vrienden uit",
  auth_signup:"Registreren",auth_login:"Inloggen",
  auth_username_label:"Gebruikersnaam",auth_email_label:"E-mail",auth_email_or_username_label:"E-mail of gebruikersnaam",auth_email_or_username_ph:"Je e-mail of gebruikersnaam",auth_password_label:"Wachtwoord",
  auth_username_ph:"bijv. rekenaar42",auth_password_ph:"Min. 8 tekens",auth_password_login_ph:"Je wachtwoord",
  auth_create_btn:"Account Aanmaken",auth_login_btn:"Inloggen",
  auth_google:"Doorgaan met Google",auth_guest:"Doorgaan als gast",auth_divider:"of",
  auth_check_email:"Controleer je e-mail",auth_check_email_sub:"We stuurden een bevestigingslink naar",auth_check_email_sub2:"Klik erop om je account te activeren.",auth_check_email_spam:"Niet ontvangen? Controleer je spammap.",auth_got_it:"Begrepen",
  sidebar_guest_msg:"Log in om voortgang op te slaan en te concurreren met vrienden.",sidebar_sign_in:"Inloggen / Registreren",
  sidebar_sign_out:"Uitloggen",sidebar_language:"Taal",sidebar_edit_username:"Gebruikersnaam Wijzigen",sidebar_change_pw:"Wachtwoord Wijzigen",change_pw_sub:"Eenmaal gewijzigd, moet je 24 uur wachten voor je het opnieuw kunt wijzigen.",change_pw_current:"Huidig Wachtwoord",change_pw_current_required:"Voer je huidige wachtwoord in.",change_pw_wrong_current:"Huidig wachtwoord is onjuist.",
  friends_sub:"Zoek en voeg vrienden toe op gebruikersnaam",friends_search_ph:"Zoek op gebruikersnaam...",
  friends_pending:"Openstaande verzoeken",friends_your:"Jouw vrienden",friends_sign_in_msg:"Log in om vrienden toe te voegen",
  leaderboard_sub:"Vrienden + wereldwijde top 10",remove_friend:"Verwijderen",block_user:"Blokkeren",blocked_users:"Geblokkeerde gebruikers",user_blocked:"Geblokkeerd",unblock_user:"Deblokkeren",err_blocked:"Verzoek sturen niet mogelijk.",challenge_vs_history:"Statistieken",race_start:"Challenge",lb_sign_in_msg:"Log in om het klassement te zien",lb_group_general:"Algemeen",lb_group_speed:"Snelheid",lb_group_lightning:"Bliksem",lb_tab_streak:"Dagelijkse Streak",friend_not_found:"Geen gebruiker gevonden voor '{q}'",friend_add:"+ Toevoegen",friend_already:"✓ Vrienden",friend_pending_btn:"⏳ In afwachting",friend_request_sent:"Verzoek verstuurd naar {name}!",friend_wants_friend:"wil bevriend zijn",friends_requests_title:"Vriendschapsverzoeken",friend_accept:"✓ Accepteren",friend_decline:"✗ Weigeren",friend_block:"🚫 Blokkeren",err_search:"Zoekfout. Probeer opnieuw.",err_load_friends:"Fout bij laden vrienden.",err_load_scoreboard:"Fout bij laden klassement.",err_challenge_not_found:"Uitdaging niet gevonden.",challenge_select_friend:"Selecteer minstens één vriend.",challenge_creating:"Uitdaging aanmaken…",stats_no_data:"geen data",lb_no_friends:"Voeg vrienden toe om jezelf te vergelijken! 👥",
  lb_tab_xp:"XP",lb_tab_speed_easy:"⚡ Snel Makkelijk",lb_tab_speed_med:"⚡ Snel Gemiddeld",lb_tab_speed_hard:"⚡ Snel Moeilijk",lb_tab_lightning_easy:"🔥 Bliksem Makkelijk",lb_tab_lightning_med:"🔥 Bliksem Gemiddeld",lb_tab_lightning_hard:"🔥 Bliksem Moeilijk",lb_tab_time:"Speeltijd",
  edit_username_title:"Gebruikersnaam Wijzigen",edit_username_save:"Opslaan",
  gdpr_title:"Jouw privacy",
  gdpr_text:"We gebruiken essentiële opslag voor je voortgang en inlogsessie, en analytics om te begrijpen hoe de app gebruikt wordt zodat we hem kunnen verbeteren. Gegevens worden nooit verkocht of gedeeld. <a href='#' class='privacy-link' style='cursor:pointer'>Privacybeleid</a>",
  gdpr_accept:"Analytics accepteren",gdpr_decline:"Analytics weigeren",
  challenge_waiting:"Wachten op tegenstander...",challenge_sent_waiting:"Verzonden · wachten",challenge_sent_resume:"Verzonden · Je moet nog uitspelen",challenge_win:"🏆 Jij hebt de ronde gewonnen — gefeliciteerd!",challenge_loss:"🏆 {name} heeft de ronde gewonnen",challenge_tie:"🤝 Gelijkspel!",challenge_win_short:"Jij gewonnen!",challenge_loss_short:"{name} gewonnen",
  no_friends_yet:"Nog geen vrienden — zoek hierboven om vrienden toe te voegen",
  no_friends_dare:"Nog geen vrienden.",
  comp_round_notif:"Ronde {n}",
  username_cooldown_sub:"Je kunt je gebruikersnaam eens per 30 dagen wijzigen.",
  username_cooldown_days:"Nog {n} dagen",
  err_username_short:"Gebruikersnaam moet minimaal 3 tekens zijn",
  err_username_chars:"Alleen letters, cijfers en _",
  err_username_taken:"Gebruikersnaam al bezet — kies een andere",
  err_password_short:"E-mail en wachtwoord (min. 8 tekens) verplicht",
  err_fields_required:"E-mail en wachtwoord zijn verplicht",err_google_account:"De gebruikersnaam '{u}' is gekoppeld aan een Google-account. Log in met Google.",err_google_account_hint:"Heb je je aangemeld met Google?",
  tips_count_label:"tips",tips_filter_active:"Getoond",tips_filter_hint:"Selecteer één of meer categorieën",
  diff_filter_label:"Nauwkeurigheidsfilter — moeilijkheidsgraad",
  stat_op_label_add:"➕ Optellen",stat_op_label_sub:"➖ Aftrekken",stat_op_label_mul:"✖ Vermenigv.",stat_op_label_div:"➗ Delen",stat_op_label_pct:"% Procenten",
  xp_level_label:"Niveau",levelup_label:"Niveau Omhoog!",levelup_btn:"Aan de slag!",titles_modal_title:"Titels",titles_lv:"Nv.",
  title_novice:"Novice",title_learner:"Leerling",title_scholar:"Geleerde",title_theorist:"Theoreticus",title_master:"Meester",title_polymath:"Polymath",title_pythagoras:"Pythagoras",title_euler:"Euler",title_gauss:"Gauss",
  title_flavor_novice:"Je reis begint. Elke meester stond ooit waar jij nu staat.",
  title_flavor_learner:"De eerste stappen zijn altijd het moeilijkst. Je gaat vooruit.",
  title_flavor_scholar:"Kennis begint wortel te schieten. Je inzet is zichtbaar.",
  title_flavor_theorist:"Je denkt nu in patronen. De getallen buigen naar jouw wil.",
  title_flavor_master:"Zeldzaam gezelschap. De meesten bereiken dit niveau nooit.",
  title_flavor_polymath:"Je overstijgt één vakgebied — jouw geest omvat de hele wiskunde.",
  title_flavor_pythagoras:"Een naam gegraveerd in de geschiedenis. Je hebt het verdiend.",
  title_flavor_euler:"Een van de grootste wiskundigen die ooit hebben geleefd. Jij evenaart hem.",
  title_flavor_gauss:"Het hoogtepunt. De Prins der Wiskunde. Er is niets hoger.",
  stat_total_time:"Getraind",stat_lightning_time:"Bliksem Tijd",stat_practice_time:"Oefen Tijd",
  nav_achievements:"Prestaties",
  ach_hero_sub:"Verdien badges door mijlpalen te bereiken in alle modi.",
  ach_unlocked_label:"Prestatie Ontgrendeld!",
  ach_locked:"Vergrendeld",
  ach_tier_bronze:"Brons",ach_tier_silver:"Zilver",ach_tier_gold:"Goud",ach_tier_platinum:"Platina",ach_tier_diamond:"Diamant",
  ach_sec_general:"Algemeen",ach_sec_lightning:"Bliksem",ach_sec_speed:"Snelheid",ach_sec_practice:"Oefenen",ach_sec_mastery:"Beheersing",
  ach_answers_1_name:"Op Dreef",ach_answers_1_desc:"Beantwoord 30 opgaven correct",
  ach_answers_2_name:"In Vorm",ach_answers_2_desc:"Beantwoord 100 opgaven correct",
  ach_answers_3_name:"Twee en een Half",ach_answers_3_desc:"Beantwoord 250 opgaven correct",
  ach_answers_4_name:"Duizend",ach_answers_4_desc:"Beantwoord 1.000 opgaven correct",
  ach_answers_5_name:"Rekenmachine",ach_answers_5_desc:"Beantwoord 2.500 opgaven correct",
  ach_answers_6_name:"Onstopbaar",ach_answers_6_desc:"Beantwoord 10.000 opgaven correct",
  ach_time_1_name:"Opwarming",ach_time_1_desc:"Train in totaal 5 minuten",
  ach_time_2_name:"Toegewijd",ach_time_2_desc:"Train in totaal 30 minuten",
  ach_time_3_name:"Volhardend",ach_time_3_desc:"Train in totaal 2 uur",
  ach_time_4_name:"Geobsedeerd",ach_time_4_desc:"Train in totaal 20 uur",ach_time_5_name:"Toegewijd",ach_time_5_desc:"Train in totaal 50 uur",
  ach_lightning_seq_1_name:"Vonk",ach_lightning_seq_1_desc:"Beantwoord een reeks van 5 getallen correct",
  ach_lightning_seq_2_name:"Flits",ach_lightning_seq_2_desc:"Beantwoord een reeks van 10 getallen correct",
  ach_lightning_seq_3_name:"Donderslag",ach_lightning_seq_3_desc:"Beantwoord een reeks van 15 op Gemiddeld of Moeilijk",
  ach_lightning_seq_4_name:"Bliksemgod",ach_lightning_seq_4_desc:"Beantwoord een reeks van 20 op Gemiddeld of Moeilijk",
  ach_lightning_streak_1_name:"Consequent",ach_lightning_streak_1_desc:"Win 3 Bliksemrondes op rij",
  ach_lightning_streak_2_name:"In Vuur en Vlam",ach_lightning_streak_2_desc:"Win 10 Bliksemrondes op rij",
  ach_lightning_streak_3_name:"Foutloos",ach_lightning_streak_3_desc:"Win 25 Bliksemrondes op rij",
  ach_lightning_games_1_name:"Eerste Ronde",ach_lightning_games_1_desc:"Voltooi 1 Bliksemspel",
  ach_lightning_games_2_name:"Terugkerend",ach_lightning_games_2_desc:"Voltooi 10 Bliksemspellen",
  ach_lightning_games_3_name:"Vaste Speler",ach_lightning_games_3_desc:"Voltooi 50 Bliksemspellen",
  ach_speed_score_1_name:"Snel",ach_speed_score_1_desc:"Scoor 15 correct in één Snelheidsspel",
  ach_speed_score_2_name:"Snelle Vingers",ach_speed_score_2_desc:"Scoor 30 correct in één Snelheidsspel",
  ach_speed_score_3_name:"Snelheidsdemon",ach_speed_score_3_desc:"Scoor 50 correct in één Snelheidsspel",
  ach_speed_score_4_name:"Hypersonisch",ach_speed_score_4_desc:"Scoor 75 correct in één Snelheidsspel",
  ach_speed_streak_1_name:"Geconcentreerd",ach_speed_streak_1_desc:"10 correct op rij in Snelheid",
  ach_speed_streak_2_name:"In de Flow",ach_speed_streak_2_desc:"20 correct op rij in Snelheid",
  ach_speed_streak_3_name:"Onaantastbaar",ach_speed_streak_3_desc:"40 correct op rij in Snelheid",
  ach_practice_1_name:"Eerste Stappen",ach_practice_1_desc:"Beantwoord 30 vragen in Oefenmodus",
  ach_practice_2_name:"Standvastig",ach_practice_2_desc:"Beantwoord 150 vragen in Oefenmodus",
  ach_practice_3_name:"Toegewijde Leerling",ach_practice_3_desc:"Beantwoord 750 vragen in Oefenmodus",
  ach_practice_streak_1_name:"Reeks Beginner",ach_practice_streak_1_desc:"5 correct op rij in Oefenmodus",
  ach_practice_streak_2_name:"Scherpe Geest",ach_practice_streak_2_desc:"15 correct op rij in Oefenmodus",
  ach_practice_streak_3_name:"Perfecte Run",ach_practice_streak_3_desc:"30 correct op rij in Oefenmodus",
  ach_tips_1_name:"Nieuwsgierig",ach_tips_1_desc:"Oefen 1 Tips & Trucs techniek",
  ach_tips_2_name:"Techniekenverzamelaar",ach_tips_2_desc:"Oefen 5 verschillende Tips & Trucs technieken",
  ach_tips_3_name:"Methodeacteur",ach_tips_3_desc:"Oefen 10 verschillende Tips & Trucs technieken",
  ach_accuracy_1_name:"Scherpschutter",ach_accuracy_1_desc:"Bereik 80% nauwkeurigheid (min. 50 antwoorden)",
  ach_accuracy_2_name:"Precisie",ach_accuracy_2_desc:"Bereik 90% nauwkeurigheid (min. 100 antwoorden)",
  ach_accuracy_3_name:"Perfectionist",ach_accuracy_3_desc:"Bereik 95% nauwkeurigheid (min. 200 antwoorden)",
  ach_hard_1_name:"Moeilijke Modus",ach_hard_1_desc:"Voltooi een Snelheidsspel op Moeilijk",
  ach_hard_2_name:"Masochist",ach_hard_2_desc:"Scoor 30 correct op Moeilijk Snelheid",
  ach_level_1_name:"Niveau 5",ach_level_1_desc:"Bereik Niveau 5",
  ach_level_2_name:"Niveau 10",ach_level_2_desc:"Bereik Niveau 10",
  ach_level_3_name:"Niveau 25",ach_level_3_desc:"Bereik Niveau 25",
  ach_level_4_name:"Niveau 50",ach_level_4_desc:"Bereik Niveau 50",
  ach_level_5_name:"Niveau 100",ach_level_5_desc:"Bereik Niveau 100",
  ach_level_6_name:"Niveau 1000",ach_level_6_desc:"Bereik Niveau 1000 — het absolute hoogtepunt",
  stat_longest_lightning:"Beste Streak",stat_avg_lightning:"Langste Reeks",
  stat_practice_accuracy:"Oefennauwkeurigheid",stat_practice_wrong:"Foute Antwoorden",
  stat_total_speed_correct:"Totaal Correct Snelheid",stat_speed_games_played:"Gespeelde Snelheidspotjes",
  stat_longest_speed_streak:"Langste correcte reeks",stat_longest_speed_streak_sub:"in één snelheidsspel",
  stat_avg_time_per_q:"Gem. sec / vraag",stat_avg_time_per_q_sub:"oefenmodus",
  stat_practice_streak:"Beste oefen­reeks",stat_practice_streak_sub:"opeenvolgende goede antwoorden",stat_speed_streak:"Beste Speed Streak",stat_speed_streak_sub:"opeenvolgende goede antwoorden",
  stat_longest_seq_sub:"correct beantwoord",
  auth_forgot_pw:"Wachtwoord vergeten?",auth_confirm_password_label:"Wachtwoord bevestigen",auth_confirm_password_ph:"Herhaal je wachtwoord",err_password_mismatch:"Wachtwoorden komen niet overeen",err_confirm_required:"Bevestig je wachtwoord",err_signup_failed:"Aanmelden mislukt. Probeer opnieuw.",err_email_taken:"Er bestaat al een account met dit e-mailadres.",
  ach_sec_daily:"Dagelijkse Uitdaging",ach_sec_campaign:"Campagne",
  ach_cmp_1_name:"Eerste Niveau",ach_cmp_1_desc:"Voltooi je eerste campagneniveau",
  ach_cmp_5_name:"Op Weg",ach_cmp_5_desc:"Voltooi 5 campagneniveaus",
  ach_cmp_10_name:"Halverwege",ach_cmp_10_desc:"Voltooi 10 campagneniveaus",
  ach_cmp_25_name:"Kwart Eeuw",ach_cmp_25_desc:"Voltooi 25 campagneniveaus",
  ach_cmp_50_name:"Halverwege naar 100",ach_cmp_50_desc:"Voltooi 50 campagneniveaus",
  ach_cmp_75_name:"Bijna Klaar",ach_cmp_75_desc:"Voltooi 75 campagneniveaus",
  ach_cmp_100_name:"Grootmeester",ach_cmp_100_desc:"Voltooi alle 100 campagneniveaus",
  ach_cmp_boss_1_name:"Baasversloger",ach_cmp_boss_1_desc:"Versla je eerste baasniveau",
  ach_cmp_boss_5_name:"Baasenjager",ach_cmp_boss_5_desc:"Versla 5 baasniveaus",
  ach_cmp_boss_10_name:"Overwinnaar",ach_cmp_boss_10_desc:"Versla alle 10 baasniveaus",
  ach_cmp_perfect_3_name:"Vlekkeloos",ach_cmp_perfect_3_desc:"Voltooi 3 niveaus perfect — geen levens verloren, geen foute antwoorden",
  ach_cmp_perfect_10_name:"Onberispelijk",ach_cmp_perfect_10_desc:"Voltooi 10 niveaus perfect — geen levens verloren en geen foute antwoorden",
  ach_cmp_perfect_25_name:"Onaantastbaar",ach_cmp_perfect_25_desc:"Voltooi 25 niveaus perfect — geen levens verloren en geen foute antwoorden",
  ach_daily_1_name:"Eerste Stap",ach_daily_1_desc:"Voltooi je eerste dagelijkse uitdaging",
  ach_daily_2_name:"Weekstrijder",ach_daily_2_desc:"Voltooi 7 dagelijkse uitdagingen",
  ach_daily_3_name:"Maandmeester",ach_daily_3_desc:"Voltooi 30 dagelijkse uitdagingen",
  ach_daily_streak_1_name:"Op Dreef",ach_daily_streak_1_desc:"Bereik een reeks van 3 dagen",
  ach_daily_streak_2_name:"Weekreeks",ach_daily_streak_2_desc:"Bereik een reeks van 7 dagen",
  ach_daily_streak_3_name:"Onstopbaar",ach_daily_streak_3_desc:"Bereik een reeks van 30 dagen",ach_daily_streak_4_name:"Legendarisch",ach_daily_streak_4_desc:"Bereik een reeks van 365 dagen",
  ach_daily_speed_1_name:"Snel",ach_daily_speed_1_desc:"Voltooi de dagelijkse uitdaging in onder 30 seconden",
  ach_daily_speed_2_name:"Bliksem",ach_daily_speed_2_desc:"Voltooi de dagelijkse uitdaging in onder 25 seconden",
  ach_daily_speed_3_name:"Flash",ach_daily_speed_3_desc:"Voltooi de dagelijkse uitdaging in onder 20 seconden",
  ach_lightning_score_1_name:"Puntenscoorder",ach_lightning_score_1_desc:"Bereik een Lightning score van 500",
  ach_lightning_score_2_name:"Hoogspanning",ach_lightning_score_2_desc:"Bereik een Lightning score van 2.000",
  ach_lightning_score_3_name:"Overbelasting",ach_lightning_score_3_desc:"Bereik een Lightning score van 5.000",
  ach_lightning_score_4_name:"Megawatt",ach_lightning_score_4_desc:"Bereik een Lightning score van 15.000",
  daily_guest_prompt:"Log in om je tijd op te slaan en mee te doen aan het klassement",
  daily_guest_btn:"Account aanmaken",
  pick_username_title:"Kies je gebruikersnaam",
  pick_username_sub:"Zo zien andere spelers jou.\nJe kunt dit later wijzigen (eens per 30 dagen).",
  pick_username_save:"Aan de slag!",
  daily_badge:"Dagelijkse Uitdaging",
  daily_title:"De Uitdaging van Vandaag",daily_resets_in_hm:"Nieuw uitdaging in {h}u {m}m",daily_resets_in_m:"Nieuw uitdaging in {m}m",
  daily_sub:"10 uitdrukkingen · Snelste tijd wint",
  daily_progress_label:"Vraag",
  daily_result_title:"Klaar!",daily_share_label:"Deel je resultaat",daily_share_msg:"Ik heb de Numfly rekenchallenge van vandaag gehaald in {time}! Kun jij het verslaan? 🧮",
  daily_result_sub:"Deel je tijd en daag je vrienden uit 👇",
  dc_tab_friends:"Vrienden",dc_tab_global:"Globaal",
  daily_completed:"Uitdaging voltooid",
  daily_sign_in:"Log in om je tijd op te slaan en het klassement te zien",
  auth_reset_send:"Stuur Herstel-e-mail",
  auth_back_to_login:"← Terug naar inloggen",
  auth_reset_sent:"Herstel-e-mail verstuurd! Controleer je inbox — en je spammap.",auth_reset_cooldown:"Wacht 24 uur voor een nieuwe resetaanvraag.",auth_reset_cooldown_hrs:"Je kunt een nieuwe aanvraag doen over {h}u {m}m.",auth_set_new_password:"Nieuw wachtwoord instellen",auth_set_pw_sub:"Kies een sterk wachtwoord (min. 8 tekens).",auth_pw_updated:"Wachtwoord succesvol bijgewerkt!",auth_pw_confirm_email:"Controleer je e-mail — klik op de bevestigingslink om je nieuwe wachtwoord te activeren.",auth_pw_confirm_sub:"Niet ontvangen? Controleer je spammap.",
  auth_reset_error:"Kon herstel-e-mail niet versturen: ",
  sidebar_cookie_settings:"Cookie-instellingen",
  sidebar_privacy:"Privacybeleid",
  google_notice_title:"Even een korte melding",
  comp_name_label:"Naam voor de competitie (optioneel)",
  comp_name_ph:"bijv. vrijdagavondgevecht",
  google_notice_body:"Je wordt doorgestuurd naar Google om in te loggen. Tijdens dit proces zie je mogelijk kort een pagina op <span style=\"color:var(--accent);word-break:break-all;font-size:11px;\">pwqklvedbydxmnhocaqp.supabase.co</span> — dit is onze authenticatieprovider (Supabase). Deze doorverwijzing is normaal en veilig. We werken aan een eigen domein voor een betere ervaring in de toekomst.",
  google_notice_continue:"Doorgaan",
  google_notice_cancel:"Annuleren",
  tips_to_guide: "Hoe train je dit het best? Lees onze gids voor een vaste dagelijkse routine →",
  err_count_range: "Voer een getal in tussen 2 en 20.",
  err_interval_range: "Voer een getal in tussen 1 en 20.",
},
es:{
  tagline:"Entrena tu mente. Supera tu marca. Vence a tus amigos.",
  hs_title:"Mejores Puntuaciones",nav_stats:"Estadísticas",nav_tips:"Consejos",
  mode_lightning:"Rayo",mode_speed:"Velocidad",mode_daily:"Desafío Diario",mode_practice:"Práctica",mode_campaign:"Campaña",
  mode_lightning_desc:"Los números aparecen como rayos — mantén la suma en tu cabeza.",
  mode_speed_desc:"2 minutos, el mayor número de respuestas correctas posible.",
  mode_practice_desc:"Sin cronómetro. Sin presión. Solo matemáticas.",
  mode_campaign_desc:"100 niveles de dificultad creciente. Supéralos uno a uno.",
  campaign_hero_sub:"Completa los 100 niveles. Cada nivel desbloquea el siguiente.",campaign_no_calc:"Para mejores resultados, intenta resolverlos sin calculadora.",
  campaign_fail_question_time:"¡Demasiado lento — perdiste una vida!",
  campaign_world_label:"Mundo",
  campaign_level:"Nivel",campaign_boss:"Jefe",campaign_locked:"Bloqueado",campaign_completed:"Completado",
  campaign_time_attack:"Contrarreloj",campaign_survival:"Supervivencia",campaign_mode_label:"Modo",
  campaign_mode_time_attack:"Responde {target} preguntas correctamente en {time} segundos.",
  campaign_mode_survival:"Responde {target} preguntas correctamente. Tienes {lives} vidas.",
  campaign_lives:"Vidas",campaign_questions:"Preguntas",campaign_time:"Tiempo",
  campaign_complete_title:"¡Nivel Completado!",campaign_complete_sub:"Bien hecho — siguiente nivel desbloqueado.",
  campaign_fail_title:"¡Casi!",campaign_fail_time:"Se acabó el tiempo.",campaign_fail_lives:"Se te acabaron las vidas.",
  campaign_try_again:"Intentar de Nuevo",campaign_next_level:"Siguiente Nivel",campaign_back_to_map:"Mapa de Niveles",
  campaign_boss_label:"Nivel Jefe",
  campaign_world_1:"Mundo 1 — Básico",campaign_world_2:"Mundo 2 — Multiplicación",campaign_world_3:"Mundo 3 — Velocidad",campaign_world_4:"Mundo 4 — Porcentajes",campaign_world_5:"Mundo 5 — Presión Media",campaign_world_6:"Mundo 6 — Números Difíciles",campaign_world_7:"Mundo 7 — Mezcla Difícil",campaign_world_8:"Mundo 8 — Resistencia",campaign_world_9:"Mundo 9 — Élite",campaign_world_10:"Mundo 10 — Maestro",
  back:"Volver",back_to_tips:"Consejos",start:"Empezar",go:"Ok",
  lightning_setup_sub:"Los números aparecen uno a uno. Súmalos mentalmente y escribe el total al final. Elige cuántos números y a qué velocidad aparecen.",
  diff_label:"Dificultad",diff_easy:"Fácil",duration_label:"Duración",dur_30:"30 seg",dur_60:"1 min",dur_120:"2 min",diff_medium:"Medio",diff_hard:"Difícil",
  lightning_count_label:"Números en la secuencia (2–20)",
  lightning_interval_label:"Segundos por número (1–20)",
  ops_label:"Operaciones (selecciona al menos una)",
  op_add:"Suma",op_sub:"Resta",op_mul:"Multiplicación",op_div:"División",op_pct:"Porcentaje",
  hud_streak:"Racha",hud_highscore:"Mejor Puntuación",hud_number:"Número",hud_score:"Puntos",hud_time:"Tiempo",
  xp_to_next:"para el siguiente",
  sum_placeholder:"¿Suma?",answer_placeholder:"Respuesta",
  keep_going:"Continuar",change_settings:"Cambiar Ajustes",change_difficulty:"Cambiar Dificultad",
  main_menu:"Menú Principal",play_again:"Jugar de Nuevo",times_up:"¡Tiempo!",
  speed_setup_sub:"Resuelve el mayor número de expresiones posible en 2 minutos. Elige tu dificultad y empieza.",
  practice_setup_sub:"Sin cronómetro. Sin presión. Solo matemáticas.",
  correct:"¡Correcto!",not_quite:"No del todo…",
  streak_label:"Racha",highscore_label:"Mejor Puntuación",answer_was:"La respuesta era",
  check_correct:"✓ ¡Correcto! ¡Bien hecho!",check_wrong_prefix:"✗ No del todo — la respuesta es",
  speed_correct:"✓ ¡Correcto!",speed_wrong:"✗ Incorrecto — ¡inténtalo de nuevo!",speed_hint:"✗ Incorrecto — pista: la respuesta es",
   what_was_sum:"¿Cuál es la suma?",
  lightning_round_score:"Puntos de ronda",
  lightning_total_score:"Puntos totales",
  op_type_add:"Suma",op_type_sub:"Resta",op_type_mul:"Multiplicación",op_type_div:"División",op_type_pct:"Porcentaje",
  plays_label:"partidas",
  reset_btn:"Resetear Todas las Estadísticas",
  reset_modal_title:"¿Resetear Todo?",
  reset_modal_desc:"Esto borrará todos los récords, contadores, estadísticas y tu nivel de XP. No se puede deshacer.",
  cancel:"Cancelar",reset_confirm:"Sí, Resetear",
  stats_hero_sub:"Sigue tu progreso en todos los modos y tipos de operación.",
  tips_hero_sub:"Haz clic en cualquier técnica para practicarla de inmediato. Dominarlas mejorará enormemente tu cálculo mental.",
  filter_all:"Todo",filter_mul:"Multiplicar",filter_div:"Dividir",filter_add:"Sumar",filter_sub:"Restar",filter_pct:"Porcentajes",filter_gen:"General",
  tip_practice_this:"Practicar esto",
  stats_sec_overview:"Resumen",stat_total_answered:"Total respondidas",stat_strongest:"Más fuerte",stat_weakest:"Más débil",stats_sec_accuracy:"Precisión por Operación",stats_sec_scores:"Mejor Puntuación",stats_sec_time:"Tiempo y Volumen",stat_days_played:"Días Jugados",stat_best_streak:"Mejor Racha",stat_fastest:"Más Rápido",stat_slowest:"Más Lento",stat_times:"Tiempos del Desafío",stat_accuracy:"Precisión",
  stat_accuracy:"Precisión total",stat_total_ans:"Respuestas totales",stat_total_games:"Partidas jugadas",
  stat_best_speed:"Mejor puntuación Velocidad",stat_best_streak:"Mejor racha Rayo",stat_daily_best_streak:"Mejor racha",stat_longest_streak:"Racha correcta más larga",
  stat_time_trained:"Tiempo entrenado",stat_avg_speed:"Media Velocidad",
  stat_most_correct:"Tu Operación más Fuerte",stat_most_wrong:"Tu Operación más Débil",
  stat_most_correct_sub:"Aquí aciertas con más frecuencia",stat_most_wrong_sub:"Aquí fallas más — ¡practica esto!",
  stat_speed_easy:"Velocidad — Fácil",stat_speed_med:"Velocidad — Medio",stat_speed_hard:"Velocidad — Difícil",
  stat_light_easy:"Rayo — Fácil",stat_light_med:"Rayo — Medio",stat_light_hard:"Rayo — Difícil",
  stat_total_correct:"Total correcto",stat_total_wrong:"Total incorrecto",
  stat_op_breakdown:"Tu tasa de aciertos por tipo de operación",
  stat_op_breakdown_sub:"Barra = cuántas veces aciertas vs intentos totales",
  stat_not_enough:"Juega más para desbloquear este dato",
  stat_minutes:"min",
  filter_mode_all:"Todos los modos",
  stat_correct_rate:"Tasa de aciertos",stat_wrong_rate:"Tasa de errores",
  stat_per_min:"Respuestas / min",stat_per_min_sub:"media en partidas de velocidad",
  stat_best_run:"Mejor Partida",stat_best_run_sub:"una sola partida de velocidad",
  stat_practice_questions:"Preguntas Práctica",stat_practice_questions_sub:"respondidas en modo práctica",
  stat_tip_practice_sessions:"Sesiones de Consejos",stat_tip_practice_sessions_sub:"técnicas practicadas",
  nav_friends:"Amigos",challenge_dare_friend:"Desafiar a un amigo",dare_title:"Desafiar a un amigo",dare_sub:"Puntuaste {score}. ¿Pueden superarlo?",dare_send:"Enviar desafío",dare_sent:"¡Desafío enviado! 🎯",dare_notif:"¿Puedes superar {n}?",race_title:"Desafío",race_sub:"Elige un amigo y dificultad — gana la mejor puntuación.",race_send:"Enviar desafío",race_notif:"quiere competir contra ti",race_start:"Desafiar",competition_sub:"Todos juegan las mismas preguntas — mejor puntuación gana.",comp_group_title:"Competición grupal",comp_group_my:"Mis Competiciones",comp_group_play_now:"¡Tu turno!",comp_group_waiting:"Esperando a otros",comp_group_ongoing:"Competiciones en curso",comp_leave_confirm:"¿Salir de esta competición? Ya no la verás.",comp_cancel_confirm:"¿Cancelar esta competición para todos?",comp_cancel_btn:"Cancelar competición",comp_leave_btn:"Salir de la competición",comp_group_new:"+ Nueva Competición",comp_group_empty:"No hay competiciones activas. ¡Crea una y juega contra tus amigos!",comp_group_sub:"Elige 2+ amigos — todos juegan las mismas preguntas. La mejor puntuación gana cada ronda. Cualquier miembro puede iniciar una nueva ronda.",comp_group_send:"Iniciar competición",challenge_select_min2:"Selecciona al menos 2 amigos.",challenge_select_min1:"Selecciona al menos 1 amigo.",comp_group_sent:"¡Competición iniciada!",comp_player_left:"Abandonó",comp_group_done:"Ronda completada",comp_col_player:"Jugador",comp_col_played:"Jugado",comp_col_score:"Puntos",comp_col_status:"Estado",streak_result_great:"🔥 Racha de {n} días — ¡increíble!",streak_result_good:"🔥 Racha de {n} días — ¡sigue así!",streak_result_start:"🔥 Racha de {n} días",comp_scoreboard:"📊 Marcador",comp_play:"▶ Jugar",challenge_continue:"▶ Continuar jugando",comp_group_new_round:"▶ Nueva ronda",competition_new:"Nuevo desafío",competition_send:"Enviar desafío",challenge_play:"▶ Jugar desafío",challenge_outgoing:"¡Es tu turno de jugar!",challenge_cancel:"✕ Cancelar",challenge_vs:"Desafío",challenge_no_scores:"Aún no hay puntuaciones.",challenge_pending_score:"pendiente",challenge_pending_title:"Desafíos Pendientes",challenge_invited_by:"te ha desafiado",comp_invited_by:"te invitó a una competición grupal",
  h2h_total:"Puntuación total",h2h_win:"Victoria",h2h_loss:"Derrota",h2h_tie:"Empate",h2h_you:"Tú",lb_you:"tú",h2h_them:"Ellos",h2h_games:"partidas jugadas",h2h_history:"Historial cara a cara",h2h_no_shared:"Sin desafíos compartidos aún.",h2h_your_wins:"Tus victorias",h2h_their_wins_s:"Victorias de {name}",h2h_their_wins_en:"Victorias de {name}",h2h_ties:"empates",h2h_recent:"Desafíos recientes",h2h_challenge_again:"⚔ Desafiar de nuevo",remove_friend_confirm:"¿Eliminar este amigo?",nav_leaderboard:"Clasificación",challenge_friend:"Desafiar a un Amigo",
  challenge_title:"DESAFÍO",challenge_copy:"Copiar",challenge_link_sub:"El enlace caduca en 7 días.",
  auth_join_title:"Únete a Numfly",auth_join_sub:"Guarda progreso y desafía a amigos",
  auth_signup:"Registrarse",auth_login:"Iniciar Sesión",
  auth_username_label:"Usuario",auth_email_label:"Correo",auth_email_or_username_label:"Tu correo o usuario",auth_email_or_username_ph:"Tu correo o usuario",auth_password_label:"Contraseña",
  auth_username_ph:"ej. matemático42",auth_password_ph:"Mín. 8 caracteres",auth_password_login_ph:"Tu contraseña",
  auth_create_btn:"Crear Cuenta",auth_login_btn:"Iniciar Sesión",
  auth_google:"Continuar con Google",auth_guest:"Continuar como invitado",auth_divider:"o",
  auth_check_email:"Revisa tu correo",auth_check_email_sub:"Enviamos un enlace de confirmación a",auth_check_email_sub2:"Haz clic en él para activar tu cuenta.",auth_check_email_spam:"¿No lo encuentras? Revisa tu carpeta de spam.",auth_got_it:"Entendido",
  sidebar_guest_msg:"Inicia sesión para guardar progreso y competir con amigos.",sidebar_sign_in:"Iniciar Sesión / Registrarse",
  sidebar_sign_out:"Cerrar Sesión",sidebar_language:"Idioma",sidebar_edit_username:"Editar Usuario",sidebar_change_pw:"Cambiar Contraseña",change_pw_sub:"Una vez cambiada, debes esperar 24 horas antes de cambiarla de nuevo.",change_pw_current:"Contraseña Actual",change_pw_current_required:"Introduce tu contraseña actual.",change_pw_wrong_current:"La contraseña actual es incorrecta.",
  friends_sub:"Busca y añade amigos por nombre de usuario",friends_search_ph:"Buscar por usuario...",
  friends_pending:"Solicitudes pendientes",friends_your:"Tus amigos",friends_sign_in_msg:"Inicia sesión para añadir amigos",
  leaderboard_sub:"Amigos + top 10 global",remove_friend:"Eliminar",block_user:"Bloquear",blocked_users:"Usuarios bloqueados",user_blocked:"Bloqueado",unblock_user:"Desbloquear",err_blocked:"No se puede enviar solicitud.",challenge_vs_history:"Estadísticas",race_start:"Desafiar",lb_sign_in_msg:"Inicia sesión para ver la clasificación",lb_group_general:"General",lb_group_speed:"Velocidad",lb_group_lightning:"Rayo",lb_tab_streak:"Racha Diaria",friend_not_found:"No se encontró usuario para '{q}'",friend_add:"+ Añadir",friend_already:"✓ Amigos",friend_pending_btn:"⏳ Pendiente",friend_request_sent:"¡Solicitud enviada a {name}!",friend_wants_friend:"quiere ser amigo",friends_requests_title:"Solicitudes de amistad",friend_accept:"✓ Aceptar",friend_decline:"✗ Rechazar",friend_block:"🚫 Bloquear",err_search:"Error al buscar. Inténtalo de nuevo.",err_load_friends:"Error al cargar amigos.",err_load_scoreboard:"Error al cargar clasificación.",err_challenge_not_found:"Desafío no encontrado.",challenge_select_friend:"Selecciona al menos un amigo.",challenge_creating:"Creando desafío…",stats_no_data:"sin datos",lb_no_friends:"¡Añade amigos para ver cómo te comparas! 👥",
  lb_tab_xp:"XP",lb_tab_speed_easy:"⚡ Velocidad Fácil",lb_tab_speed_med:"⚡ Velocidad Media",lb_tab_speed_hard:"⚡ Velocidad Difícil",lb_tab_lightning_easy:"🔥 Rayo Fácil",lb_tab_lightning_med:"🔥 Rayo Medio",lb_tab_lightning_hard:"🔥 Rayo Difícil",lb_tab_time:"Tiempo jugado",
  edit_username_title:"Editar Usuario",edit_username_save:"Guardar",
  gdpr_title:"Tu privacidad",
  gdpr_text:"Usamos almacenamiento esencial para tu progreso y sesión, y datos de uso para entender cómo se usa la app y mejorarla. No vendemos ni compartimos tus datos con terceros. <a href='#' class='privacy-link' style='cursor:pointer'>Política de privacidad</a>",
  gdpr_accept:"Aceptar estadísticas de uso",gdpr_decline:"Rechazar",
  challenge_waiting:"Esperando al oponente...",challenge_sent_waiting:"Enviado · esperando",challenge_sent_resume:"Enviado · Aún debes terminar de jugar",challenge_win:"🏆 ¡Ganaste la ronda — felicidades!",challenge_loss:"🏆 {name} ganó la ronda",challenge_tie:"🤝 ¡Empate!",challenge_win_short:"¡Ganaste!",challenge_loss_short:"{name} ganó",
  no_friends_yet:"Aún no tienes amigos — busca arriba para añadir alguno",
  no_friends_dare:"Aún no tienes amigos.",
  comp_round_notif:"Ronda {n}",
  username_cooldown_sub:"Puedes cambiar tu nombre de usuario una vez cada 30 días.",
  username_cooldown_days:"{n} días restantes",
  err_username_short:"El usuario debe tener al menos 3 caracteres",
  err_username_chars:"Solo letras, números y _",
  err_username_taken:"Nombre de usuario ya en uso — elige otro",
  err_password_short:"Correo y contraseña (mín. 8 caracteres) requeridos",
  err_fields_required:"Correo y contraseña requeridos",err_google_account:"El usuario '{u}' está vinculado a una cuenta de Google. Inicia sesión con Google.",err_google_account_hint:"¿Te registraste con Google?",
  tips_count_label:"consejos",tips_filter_active:"Mostrando",tips_filter_hint:"Selecciona una o más categorías",
  diff_filter_label:"Filtro de precisión — dificultad",
  stat_op_label_add:"➕ Suma",stat_op_label_sub:"➖ Resta",stat_op_label_mul:"✖ Multiplicar",stat_op_label_div:"➗ División",stat_op_label_pct:"% Porcentaje",
  xp_level_label:"Nivel",levelup_label:"¡Subiste de Nivel!",levelup_btn:"¡Vamos!",titles_modal_title:"Títulos",titles_lv:"Nv.",
  title_novice:"Novato",title_learner:"Aprendiz",title_scholar:"Erudito",title_theorist:"Teórico",title_master:"Maestro",title_polymath:"Polímata",title_pythagoras:"Pitágoras",title_euler:"Euler",title_gauss:"Gauss",
  title_flavor_novice:"Tu viaje comienza. Todo maestro estuvo una vez donde tú estás.",
  title_flavor_learner:"Los primeros pasos son siempre los más difíciles. Estás avanzando.",
  title_flavor_scholar:"El conocimiento está echando raíces. Tu dedicación se nota.",
  title_flavor_theorist:"Ahora piensas en patrones. Los números se doblan a tu voluntad.",
  title_flavor_master:"Compañía selecta. La mayoría nunca alcanza este nivel de maestría.",
  title_flavor_polymath:"Trascienes una sola disciplina — tu mente abarca toda la matemática.",
  title_flavor_pythagoras:"Un nombre grabado en la historia. Te lo has ganado.",
  title_flavor_euler:"Una de las mentes matemáticas más grandes que han existido. Lo rivalizas.",
  title_flavor_gauss:"La cima. El Príncipe de las Matemáticas. No hay nada más alto.",
  stat_total_time:"Tiempo Entrenado",stat_lightning_time:"Tiempo Rayo",stat_practice_time:"Tiempo Práctica",
  nav_achievements:"Logros",
  ach_hero_sub:"Gana insignias alcanzando hitos en todos los modos.",
  ach_unlocked_label:"¡Logro Desbloqueado!",
  ach_locked:"Bloqueado",
  ach_tier_bronze:"Bronce",ach_tier_silver:"Plata",ach_tier_gold:"Oro",ach_tier_platinum:"Platino",ach_tier_diamond:"Diamante",
  ach_sec_general:"General",ach_sec_lightning:"Rayo",ach_sec_speed:"Velocidad",ach_sec_practice:"Práctica",ach_sec_mastery:"Maestría",
  ach_answers_1_name:"Empezando",ach_answers_1_desc:"Responde 30 expresiones correctamente",
  ach_answers_2_name:"En Racha",ach_answers_2_desc:"Responde 100 expresiones correctamente",
  ach_answers_3_name:"Doscientos Cincuenta",ach_answers_3_desc:"Responde 250 expresiones correctamente",
  ach_answers_4_name:"Mil",ach_answers_4_desc:"Responde 1.000 expresiones correctamente",
  ach_answers_5_name:"Máquina Matemática",ach_answers_5_desc:"Responde 2.500 expresiones correctamente",
  ach_answers_6_name:"Imparable",ach_answers_6_desc:"Responde 10.000 expresiones correctamente",
  ach_time_1_name:"Calentamiento",ach_time_1_desc:"Entrena 5 minutos en total",
  ach_time_2_name:"Dedicado",ach_time_2_desc:"Entrena 30 minutos en total",
  ach_time_3_name:"Comprometido",ach_time_3_desc:"Entrena 2 horas en total",
  ach_time_4_name:"Obsesionado",ach_time_4_desc:"Entrena 20 horas en total",ach_time_5_name:"Devoto",ach_time_5_desc:"Entrena 50 horas en total",
  ach_lightning_seq_1_name:"Chispa",ach_lightning_seq_1_desc:"Responde correctamente una secuencia de 5 números",
  ach_lightning_seq_2_name:"Destello",ach_lightning_seq_2_desc:"Responde correctamente una secuencia de 10 números",
  ach_lightning_seq_3_name:"Rayo",ach_lightning_seq_3_desc:"Responde una secuencia de 15 en Medio o Difícil",
  ach_lightning_seq_4_name:"Dios del Rayo",ach_lightning_seq_4_desc:"Responde una secuencia de 20 en Medio o Difícil",
  ach_lightning_streak_1_name:"Consistente",ach_lightning_streak_1_desc:"Gana 3 rondas de Rayo seguidas",
  ach_lightning_streak_2_name:"En Llamas",ach_lightning_streak_2_desc:"Gana 10 rondas de Rayo seguidas",
  ach_lightning_streak_3_name:"Impecable",ach_lightning_streak_3_desc:"Gana 25 rondas de Rayo seguidas",
  ach_lightning_games_1_name:"Primera Ronda",ach_lightning_games_1_desc:"Completa 1 partida de Rayo",
  ach_lightning_games_2_name:"De Vuelta",ach_lightning_games_2_desc:"Completa 10 partidas de Rayo",
  ach_lightning_games_3_name:"Habitual",ach_lightning_games_3_desc:"Completa 50 partidas de Rayo",
  ach_speed_score_1_name:"Veloz",ach_speed_score_1_desc:"Consigue 15 respuestas correctas en una partida de Velocidad",
  ach_speed_score_2_name:"Dedos Rápidos",ach_speed_score_2_desc:"Consigue 30 respuestas correctas en una partida de Velocidad",
  ach_speed_score_3_name:"Demonio de la Velocidad",ach_speed_score_3_desc:"Consigue 50 respuestas correctas en una partida de Velocidad",
  ach_speed_score_4_name:"Hipersónico",ach_speed_score_4_desc:"Consigue 75 respuestas correctas en una partida de Velocidad",
  ach_speed_streak_1_name:"Concentrado",ach_speed_streak_1_desc:"Responde 10 seguidas correctamente en Velocidad",
  ach_speed_streak_2_name:"En La Zona",ach_speed_streak_2_desc:"Responde 20 seguidas correctamente en Velocidad",
  ach_speed_streak_3_name:"Intocable",ach_speed_streak_3_desc:"Responde 40 seguidas correctamente en Velocidad",
  ach_practice_1_name:"Primeros Pasos",ach_practice_1_desc:"Responde 30 preguntas en modo Práctica",
  ach_practice_2_name:"Constante",ach_practice_2_desc:"Responde 150 preguntas en modo Práctica",
  ach_practice_3_name:"Alumno Dedicado",ach_practice_3_desc:"Responde 750 preguntas en modo Práctica",
  ach_practice_streak_1_name:"Iniciando Racha",ach_practice_streak_1_desc:"Responde 5 seguidas correctamente en Práctica",
  ach_practice_streak_2_name:"Mente Aguda",ach_practice_streak_2_desc:"Responde 15 seguidas correctamente en Práctica",
  ach_practice_streak_3_name:"Racha Perfecta",ach_practice_streak_3_desc:"Responde 30 seguidas correctamente en Práctica",
  ach_tips_1_name:"Curioso",ach_tips_1_desc:"Practica 1 técnica de Consejos",
  ach_tips_2_name:"Coleccionista",ach_tips_2_desc:"Practica 5 técnicas de Consejos diferentes",
  ach_tips_3_name:"Maestro de Métodos",ach_tips_3_desc:"Practica 10 técnicas de Consejos diferentes",
  ach_accuracy_1_name:"Tirador Certero",ach_accuracy_1_desc:"Alcanza 80% de precisión (mín. 50 respuestas)",
  ach_accuracy_2_name:"Precisión",ach_accuracy_2_desc:"Alcanza 90% de precisión (mín. 100 respuestas)",
  ach_accuracy_3_name:"Perfeccionista",ach_accuracy_3_desc:"Alcanza 95% de precisión (mín. 200 respuestas)",
  ach_hard_1_name:"Modo Difícil",ach_hard_1_desc:"Completa una partida de Velocidad en Difícil",
  ach_hard_2_name:"Amante del Desafío",ach_hard_2_desc:"Consigue 30 respuestas correctas en Velocidad Difícil",
  ach_level_1_name:"Nivel 5",ach_level_1_desc:"Alcanza el Nivel 5",
  ach_level_2_name:"Nivel 10",ach_level_2_desc:"Alcanza el Nivel 10",
  ach_level_3_name:"Nivel 25",ach_level_3_desc:"Alcanza el Nivel 25",
  ach_level_4_name:"Nivel 50",ach_level_4_desc:"Alcanza el Nivel 50",
  ach_level_5_name:"Nivel 100",ach_level_5_desc:"Alcanza el Nivel 100",
  ach_level_6_name:"Nivel 1000",ach_level_6_desc:"Alcanza el Nivel 1000 — la cima absoluta",
  stat_longest_lightning:"Mejor Racha",stat_avg_lightning:"Secuencia Más Larga",
  stat_practice_accuracy:"Precisión Práctica",stat_practice_wrong:"Respuestas Erróneas",
  stat_total_speed_correct:"Total Correcto Velocidad",stat_speed_games_played:"Partidas Velocidad",
  stat_longest_speed_streak:"Racha correcta más larga",stat_longest_speed_streak_sub:"en una sola partida",
  stat_avg_time_per_q:"Seg. prom. / pregunta",stat_avg_time_per_q_sub:"modo práctica",
  stat_practice_streak:"Mejor racha práctica",stat_practice_streak_sub:"respuestas correctas seguidas",stat_speed_streak:"Mejor racha Speed",stat_speed_streak_sub:"respuestas correctas seguidas",
  stat_longest_seq_sub:"respondida correctamente",
  auth_forgot_pw:"¿Olvidaste tu contraseña?",auth_confirm_password_label:"Confirmar contraseña",auth_confirm_password_ph:"Repite tu contraseña",err_password_mismatch:"Las contraseñas no coinciden",err_confirm_required:"Por favor confirma tu contraseña",err_signup_failed:"Error al registrarse. Inténtalo de nuevo.",err_email_taken:"Ya existe una cuenta con este correo electrónico.",
  ach_sec_daily:"Desafío Diario",ach_sec_campaign:"Campaña",
  ach_cmp_1_name:"Primer Nivel",ach_cmp_1_desc:"Completa tu primer nivel de campaña",
  ach_cmp_5_name:"Avanzando",ach_cmp_5_desc:"Completa 5 niveles de campaña",
  ach_cmp_10_name:"A Mitad de Camino",ach_cmp_10_desc:"Completa 10 niveles de campaña",
  ach_cmp_25_name:"Cuarto de Siglo",ach_cmp_25_desc:"Completa 25 niveles de campaña",
  ach_cmp_50_name:"Mitad de 100",ach_cmp_50_desc:"Completa 50 niveles de campaña",
  ach_cmp_75_name:"Casi Allí",ach_cmp_75_desc:"Completa 75 niveles de campaña",
  ach_cmp_100_name:"Gran Maestro",ach_cmp_100_desc:"Completa los 100 niveles de campaña",
  ach_cmp_boss_1_name:"Cazajefes",ach_cmp_boss_1_desc:"Supera tu primer nivel jefe",
  ach_cmp_boss_5_name:"Cazador de Jefes",ach_cmp_boss_5_desc:"Supera 5 niveles jefe",
  ach_cmp_boss_10_name:"Conquistador",ach_cmp_boss_10_desc:"Supera los 10 niveles jefe",
  ach_cmp_perfect_3_name:"Impecable",ach_cmp_perfect_3_desc:"Completa 3 niveles perfectamente — sin perder vidas ni fallar respuestas",
  ach_cmp_perfect_10_name:"Inmaculado",ach_cmp_perfect_10_desc:"Completa 10 niveles perfectamente — sin perder vidas ni fallar respuestas",
  ach_cmp_perfect_25_name:"Intocable",ach_cmp_perfect_25_desc:"Completa 25 niveles perfectamente — sin perder vidas ni fallar respuestas",
  ach_daily_1_name:"Primer Paso",ach_daily_1_desc:"Completa tu primer desafío diario",
  ach_daily_2_name:"Guerrero Semanal",ach_daily_2_desc:"Completa 7 desafíos diarios",
  ach_daily_3_name:"Maestro Mensual",ach_daily_3_desc:"Completa 30 desafíos diarios",
  ach_daily_streak_1_name:"En Racha",ach_daily_streak_1_desc:"Alcanza una racha de 3 días",
  ach_daily_streak_2_name:"Racha Semanal",ach_daily_streak_2_desc:"Alcanza una racha de 7 días",
  ach_daily_streak_3_name:"Imparable",ach_daily_streak_3_desc:"Alcanza una racha de 30 días",ach_daily_streak_4_name:"Legendario",ach_daily_streak_4_desc:"Alcanza una racha de 365 días",
  ach_daily_speed_1_name:"Rápido",ach_daily_speed_1_desc:"Completa el desafío diario en menos de 30 segundos",
  ach_daily_speed_2_name:"Rayo",ach_daily_speed_2_desc:"Completa el desafío diario en menos de 25 segundos",
  ach_daily_speed_3_name:"Flash",ach_daily_speed_3_desc:"Completa el desafío diario en menos de 20 segundos",
  ach_lightning_score_1_name:"Anotador",ach_lightning_score_1_desc:"Alcanza una puntuación en Lightning de 500",
  ach_lightning_score_2_name:"Alta Tensión",ach_lightning_score_2_desc:"Alcanza una puntuación en Lightning de 2.000",
  ach_lightning_score_3_name:"Sobrecarga",ach_lightning_score_3_desc:"Alcanza una puntuación en Lightning de 5.000",
  ach_lightning_score_4_name:"Megavatio",ach_lightning_score_4_desc:"Alcanza una puntuación en Lightning de 15.000",
  daily_guest_prompt:"Inicia sesión para guardar tu tiempo y competir en el ranking",
  daily_guest_btn:"Crear cuenta",
  pick_username_title:"Elige tu nombre de usuario",
  pick_username_sub:"Así te verán los demás jugadores.\nPuedes cambiarlo después (una vez cada 30 días).",
  pick_username_save:"¡Vamos!",
  daily_badge:"Desafío Diario",
  daily_title:"El Desafío de Hoy",daily_resets_in_hm:"Nuevo desafío en {h}h {m}m",daily_resets_in_m:"Nuevo desafío en {m}m",
  daily_sub:"10 expresiones · El más rápido gana",
  daily_progress_label:"Pregunta",
  daily_result_title:"¡Hecho!",daily_share_label:"Comparte tu resultado",daily_share_msg:"He completado el desafío matemático de hoy de Numfly en {time}! ¿Puedes superarlo? 🧮",
  daily_result_sub:"Comparte tu tiempo y desafía a tus amigos 👇",
  dc_tab_friends:"Amigos",dc_tab_global:"Global",
  daily_completed:"Desafío completado",
  daily_sign_in:"Inicia sesión para guardar tu tiempo y ver el ranking",
  auth_reset_send:"Enviar Correo de Restablecimiento",
  auth_back_to_login:"← Volver al inicio de sesión",
  auth_reset_sent:"¡Correo enviado! Revisa tu bandeja de entrada — y la carpeta de spam.",auth_reset_cooldown:"Espera 24 horas antes de solicitar otro restablecimiento.",auth_reset_cooldown_hrs:"Puedes cambiarla otra vez en {h}h {m}m.",auth_set_new_password:"Establecer nueva contraseña",auth_set_pw_sub:"Elige una contraseña segura (mín. 8 caracteres).",auth_pw_updated:"¡Contraseña actualizada correctamente!",auth_pw_confirm_email:"Revisa tu correo — haz clic en el enlace de confirmación para activar tu nueva contraseña.",auth_pw_confirm_sub:"¿No lo ves? Revisa tu carpeta de spam.",
  auth_reset_error:"No se pudo enviar el correo: ",
  sidebar_cookie_settings:"Configuración de cookies",
  sidebar_privacy:"Política de privacidad",
  google_notice_title:"Antes de continuar",
  comp_name_label:"Nombre de la competición (opcional)",
  comp_name_ph:"ej. batalla del viernes por la noche",
  google_notice_body:"Serás redirigido a Google para iniciar sesión. Durante este proceso puede que veas brevemente una página llamada <span style=\"color:var(--accent);word-break:break-all;font-size:11px;\">pwqklvedbydxmnhocaqp.supabase.co</span> — este es nuestro proveedor de autenticación (Supabase). Esta redirección es normal y segura. Estamos trabajando en un dominio propio para una experiencia más limpia en el futuro.",
  google_notice_continue:"Continuar",
  google_notice_cancel:"Cancelar",
  tips_to_guide: "¿Cuál es la mejor forma de entrenar? Lee nuestra guía para una rutina diaria fija →",
  err_count_range: "Introduce un número entre 2 y 20.",
  err_interval_range: "Introduce un número entre 1 y 20.",
},
};
let lang='en';
function t(k){return(STRINGS[lang]||{})[k]||STRINGS.en[k]||k;}
function setLang(l,btn){
  lang=l;
  // Re-render countdown in new language after translations apply
  setTimeout(()=>{if(typeof updateDailyResetCountdown==='function'&&document.getElementById('daily-next-reset')?.style.display!=='none'){updateDailyResetCountdown();}},0);
  // Mark the clicked button active, then sync sidebar lang buttons too
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  updateSidebarLangBtns();
  applyTranslations();
  renderHSPanel();
  renderXPPanel();
  const activeId=document.querySelector('.screen.active')?.id;
  if(activeId==='screen-stats') renderStatsContent();
  if(activeId==='screen-tips'){renderTipsFilterBtns();renderTipsList();}
  if(activeId==='screen-achievements') renderAchievements();
  if(document.getElementById('modal-levelup').classList.contains('open')) showLevelUpModal(xp.level);
}
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const prefix=el.dataset.i18nPrefix||'';
    el.textContent=prefix+t(el.dataset.i18n);
  });
  // Also translate select option text
  document.querySelectorAll('select[id] option[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(STRINGS[lang]&&STRINGS[lang][k])el.textContent=STRINGS[lang][k];
    else if(STRINGS.en[k])el.textContent=STRINGS.en[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
  const guideLink = document.getElementById('tips-guide-link');
  if (guideLink) {
    if (lang === 'nl') {
      guideLink.href = '/nl/hoofdrekenen-oefenen';
    } else if (lang === 'es') {
      guideLink.href = '/es/como-practicar-calculo-mental';
    } else {
      guideLink.href = '/how-to-practice-mental-math';
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// State
// ══════════════════════════════════════════════════════════════════════════════
const hs={
  lightning:{easy:{score:0,plays:0,bestPrecision:0},medium:{score:0,plays:0,bestPrecision:0},hard:{score:0,plays:0,bestPrecision:0}},
  speed:{easy:{score:0,plays:0},medium:{score:0,plays:0},hard:{score:0,plays:0}},
  // Per-duration speed highscores: keyed as "diff_duration" e.g. "easy_30", "medium_120"
  // Used when playing timed challenges/competitions to show accurate context-specific HS.
  speedDur:{},
};
const stats={
  // overall
  totalAnswers:0,totalCorrect:0,totalWrong:0,
  totalPlayTime:0,speedScoreHistory:[],
  longestSpeedStreak:0,currentSpeedStreak:0,
  lightningStreakHistory:[],longestLightningStreak:0,longestCorrectSequence:0,longestCorrectSequenceMedHard:0,
  lightningBestScore:{easy:0,medium:0,hard:0},
  practiceCorrect:0,practiceWrong:0,
  currentPracticeStreak:0,longestPracticeStreak:0,
  // per-op totals
  opCorrect:{add:0,sub:0,mul:0,div:0,pct:0},
  opWrong:{add:0,sub:0,mul:0,div:0,pct:0},
  // per-mode per-op
  modeOpCorrect:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
  modeOpWrong:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
  // per-difficulty per-op (for accuracy filter in stats)
  diffOpCorrect:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  diffOpWrong:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  modeAnswers:{lightning:0,speed:0,practice:0,daily:0},
  modeCorrect:{lightning:0,speed:0,practice:0,daily:0},
  modePlayTime:{lightning:0,speed:0,practice:0,daily:0},
  tipSessions:0,
};

// ── XP SYSTEM ────────────────────────────────────────────────────────────────
const xp={total:0,level:1};

// XP per correct answer: base * difficulty multiplier
// difficulty: easy=1, medium=2, hard=4
// op bonus: pct & mul get extra
// ── Game configuration — single place to tune XP, events, and game rules ────
const GAME_CONFIG={
  XP_EVENT_MULTIPLIER:1,   // Set to 2 for Double XP events
  DAILY_QUEST_COUNT:10,    // Questions per daily challenge (also controls DAILY_TOTAL)
};
const XP_BASE={easy:5,medium:12,hard:25};
// Lightning uses its own lower base — the player computes a running sum (always addition),
// and XP scales with sequence length × interval speed rather than per-answer op bonuses.
const XP_BASE_LIGHTNING={easy:2,medium:5,hard:10};
const XP_OP_BONUS={add:0,sub:0,mul:3,div:3,pct:3};
// Per-mode multipliers: Speed slightly reduced (many answers per round),
// Practice and Tips give less XP (no time pressure)
const XP_MODE_MULT={speed:0.7,practice:0.4,tip:0.3,lightning:1.0,daily:1.0};
// Interval multiplier for Lightning: fast = more XP, slow = much less
// Maps interval (1–20 seconds) to a multiplier (0.6 → 0.03)
function lightningIntervalMult(intervalSecs){
  // 1s → 0.60,  2s → 0.45,  5s → 0.20,  10s → 0.09,  20s → 0.03
  return Math.max(0.03, Math.round(100 * 0.6 * Math.pow(0.87, intervalSecs - 1)) / 100);
}

// Lightning precision score: count × diffMultiplier × speedMultiplier
// This is the canonical score for leaderboards and stats.
function calcLightningPrecisionScore(count, intervalSecs, difficulty) {
  const diffMult = {easy:1, medium:2, hard:3}[difficulty] || 1;
  const speedMult = lightningIntervalMult(intervalSecs);
  return Math.max(1, Math.round(count * diffMult * speedMult * 10));
}

// Locale-aware number formatter: "," for EN, "." for NL/ES
function fmtN(n){
  if(n===null||n===undefined||isNaN(n))return n;
  const locale=lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US';
  return new Intl.NumberFormat(locale,{useGrouping:true}).format(Number(n));
}

// ── Campaign sound effects (Web Audio API) ───────────────────────────────────
let _audioCtx=null;
let _audioUnlocked=false;

function _createAudioCtx(){
  if(_audioCtx)return;
  try{_audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}
}

// iOS/Android: AudioContext must be created AND resumed inside a user-gesture handler.
// We also play a real (inaudible) note to fully unlock it — a silent buffer alone is
// not sufficient on all iOS versions.
function _unlockAudio(){
  _createAudioCtx();
  if(!_audioCtx)return;
  if(_audioCtx.state==='suspended'){
    _audioCtx.resume().then(()=>{_audioUnlocked=true;}).catch(()=>{});
  } else {
    _audioUnlocked=true;
  }
}

// Attach to every meaningful user gesture. passive:true keeps scroll performance intact.
['touchstart','touchend','pointerdown','click','keydown'].forEach(evt=>{
  document.addEventListener(evt,_unlockAudio,{passive:true,capture:true});
});

function getAudioCtx(){
  _createAudioCtx();
  return _audioCtx;
}

function playTone(freq,duration,type='sine',gainVal=0.12,freqEnd=null){
  try{
    const ctx=getAudioCtx();
    if(!ctx)return;
    // If still suspended (e.g. iOS not yet fully unlocked), resume first then play
    if(ctx.state==='suspended'){
      ctx.resume().then(()=>_doPlayTone(ctx,freq,duration,type,gainVal,freqEnd)).catch(()=>{});
    } else {
      _doPlayTone(ctx,freq,duration,type,gainVal,freqEnd);
    }
  }catch(e){}
}

function _doPlayTone(ctx,freq,duration,type,gainVal,freqEnd){
  try{
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain);gain.connect(ctx.destination);
    osc.type=type;
    osc.frequency.setValueAtTime(freq,ctx.currentTime);
    if(freqEnd)osc.frequency.linearRampToValueAtTime(freqEnd,ctx.currentTime+duration);
    gain.gain.setValueAtTime(gainVal,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime+duration);
  }catch(e){}
}

document.addEventListener('touchstart',_unlockAudio,{once:false,passive:true});
document.addEventListener('touchend',_unlockAudio,{once:false,passive:true});
document.addEventListener('click',_unlockAudio,{once:false,passive:true});

function playTone(freq,duration,type='sine',gainVal=0.12,freqEnd=null){
  try{
    const ctx=getAudioCtx();
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain);gain.connect(ctx.destination);
    osc.type=type;
    osc.frequency.setValueAtTime(freq,ctx.currentTime);
    if(freqEnd)osc.frequency.linearRampToValueAtTime(freqEnd,ctx.currentTime+duration);
    gain.gain.setValueAtTime(gainVal,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime+duration);
  }catch(e){}
}
function sfxCorrect(){
  playTone(1046,0.04,'sine',0.13,1318);
  setTimeout(()=>playTone(1318,0.07,'sine',0.11,1568),40);
  setTimeout(()=>playTone(1568,0.10,'sine',0.09,1760),90);
}
function sfxWrong(){
  playTone(220,0.12,'sawtooth',0.08,160);
}
function sfxLifeLost(){
  playTone(300,0.10,'sawtooth',0.12,180);
  setTimeout(()=>playTone(180,0.15,'sawtooth',0.10,120),110);
}
function sfxLevelComplete(){
  playTone(440,0.08,'sine',0.10,523);
  setTimeout(()=>playTone(523,0.08,'sine',0.10,659),90);
  setTimeout(()=>playTone(659,0.10,'sine',0.12,784),180);
  setTimeout(()=>playTone(784,0.18,'sine',0.14),280);
}
function sfxBossComplete(){
  playTone(523,0.07,'sine',0.10,659);
  setTimeout(()=>playTone(659,0.07,'sine',0.10,784),80);
  setTimeout(()=>playTone(784,0.07,'sine',0.10,1047),160);
  setTimeout(()=>playTone(1047,0.25,'sine',0.15),240);
}

// XP required to reach each level (cumulative thresholds)
function xpForLevel(lvl){
  if(lvl<=1)return 0;
  return Math.floor(158.1*Math.pow(lvl-1,1.5))-Math.floor(158.1*Math.pow(lvl-2,1.5));
}
// Memoized: each level's cumulative XP is calculated once and cached
const _xpCache={1:0};
function totalXpForLevel(lvl){
  if(_xpCache[lvl]!==undefined)return _xpCache[lvl];
  _xpCache[lvl]=totalXpForLevel(lvl-1)+xpForLevel(lvl);
  return _xpCache[lvl];
}

// TITLE SYSTEM — from Excel data
const TITLE_THRESHOLDS=[
  {level:1,   key:'novice',     css:'title-novice',     badge:'🧮'},
  {level:5,   key:'learner',    css:'title-learner',    badge:'✏️'},
  {level:10,  key:'scholar',    css:'title-scholar',    badge:'📚'},
  {level:20,  key:'theorist',   css:'title-theorist',   badge:'🔬'},
  {level:50,  key:'master',     css:'title-master',     badge:'⚡'},
  {level:100, key:'polymath',   css:'title-polymath',   badge:'🌐'},
  {level:200, key:'pythagoras', css:'title-pythagoras', badge:'📐'},
  {level:500, key:'euler',      css:'title-euler',      badge:'∞'},
  {level:1000,key:'gauss',      css:'title-gauss',      badge:'👑'},
];

function getTitleRingColor(lvl){
  const title=getTitleForLevel(lvl);
  const colors={'title-novice':'var(--muted)','title-learner':'var(--text)','title-scholar':'var(--info)','title-theorist':'var(--success)','title-master':'var(--accent)','title-polymath':'var(--orange)','title-pythagoras':'var(--purple)','title-euler':'#ff6b9d','title-gauss':'var(--accent)'};
  return colors[title.css]||'var(--accent)';
}
function getTitleForLevel(lvl){
  let title=TITLE_THRESHOLDS[0];
  for(const th of TITLE_THRESHOLDS){if(lvl>=th.level)title=th;else break;}
  return title;
}

// Pending level-up queue: shown immediately in Practice/Tips, deferred in Lightning/Speed
let pendingLevelUps=[];

function gainXP(amount){
  const oldLevel=xp.level;
  xp.total+=amount;
  let lvl=xp.level; // start from current level — no need to re-check lower levels
  while(lvl<1000){const needed=totalXpForLevel(lvl+1);if(xp.total>=needed)lvl++;else break;}
  const didLevelUp=(lvl>oldLevel);
  xp.level=lvl;
  renderXPPanel();
  showXPToast(amount);
  if(didLevelUp){
    checkAchievements();
    const activeId=document.querySelector('.screen.active')?.id;
    const isLightningGame=activeId==='screen-lightning-game';
    const isSpeedGame=activeId==='screen-speed-game';
    const isDailyGame=activeId==='screen-daily-game';
    const isCampaignGame=activeId==='screen-campaign-game';
    // Defer level-up modal during any active game — flush when game ends
    if(isLightningGame||isSpeedGame||isDailyGame||isCampaignGame){
      pendingLevelUps.push(lvl);
    } else {
      setTimeout(()=>showLevelUpModal(lvl),600);
    }
  }
}

function flushPendingLevelUps(){
  if(pendingLevelUps.length===0)return;
  // Show the highest level reached
  const topLevel=Math.max(...pendingLevelUps);
  pendingLevelUps=[];
  setTimeout(()=>showLevelUpModal(topLevel),400);
}

function recalcLevelSilently(){
  for(const k in _xpCache){ if(k!=='1') delete _xpCache[k]; }
  let lvl=1;
  while(lvl<1000){
    const needed=totalXpForLevel(lvl+1);
    if(xp.total>=needed) lvl++;
    else break;
  }
  xp.level=lvl;
  pendingLevelUps=[];
}

let xpToastTimer=null;
function showXPToast(amount){
  const el=document.getElementById('xp-toast');
  el.textContent=`+${amount} XP`;
  const isMobile=window.innerWidth<=480;
  if(isMobile){
    // Mobile: overlay the XP badge inside the question card so it never floats outside
    const qCardMap={'screen-speed-game':'s-question','screen-practice-game':'p-question',
      'screen-daily-game':'dc-question','screen-tip-practice':'tp-question'};
    const activeId=document.querySelector('.screen.active')?.id;
    const qId=qCardMap[activeId];
    const qEl=qId?document.getElementById(qId):null;
    // Find the parent .q-card so we can position relative to it
    const qCard=qEl?.closest('.q-card');
    if(qCard){
      const cardRect=qCard.getBoundingClientRect();
      // Place the toast centred vertically in the card, right-aligned with a small margin
      el.style.position='fixed';
      el.style.top=(cardRect.top+cardRect.height/2-14)+'px';
      el.style.right=(window.innerWidth-cardRect.right+10)+'px';
      el.style.left='auto';
      el.style.bottom='auto';
      el.style.transform='none';
    } else {
      el.style.position='fixed';
      el.style.top='30%';el.style.right='12px';el.style.left='auto';
      el.style.bottom='auto';el.style.transform='none';
    }
  } else {
    // Desktop: original fixed bottom position
    el.style.position='';el.style.top='';el.style.right='';el.style.bottom='90px';el.style.transform='';
  }
  el.classList.add('show');
  if(xpToastTimer)clearTimeout(xpToastTimer);
  xpToastTimer=setTimeout(()=>{
    el.classList.remove('show');
    if(typeof _pendingAchToast!=='undefined'&&_pendingAchToast){
      const p=_pendingAchToast;_pendingAchToast=null;_doShowAchToast(p);
    }
  },1400);
}

function showLevelUpModal(lvl){
  const title=getTitleForLevel(lvl);
  document.getElementById('lu-level').textContent=lvl;
  const nameEl=document.getElementById('lu-title-name');
  nameEl.textContent=t('title_'+title.key);
  nameEl.className='levelup-title-name '+title.css;
  document.getElementById('lu-title-flavor').textContent=t('title_flavor_'+title.key);
  document.getElementById('modal-levelup').classList.add('open');
}
// ══════════════════════════════════════════════════════════════════════════════
// CAMPAIGN MODE
// ══════════════════════════════════════════════════════════════════════════════

const CAMPAIGN_LEVELS = [
  // ── World 1: Basics (1-10) — survival only, no question timer ────────────
  {level:1,  mode:'survival',    ops:['add'],                        diff:'easy',   target:8,  lives:3,      seed:'cmp_1'},
  {level:2,  mode:'survival',    ops:['add'],                        diff:'easy',   target:10, lives:3,      seed:'cmp_2'},
  {level:3,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_3'},
  {level:4,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_4'},
  {level:5,  mode:'survival',    ops:['add','sub'],                  diff:'easy',   target:12, lives:3,      seed:'cmp_5'},
  {level:6,  mode:'survival',    ops:['add','sub','mul'],            diff:'easy',   target:10, lives:3,      seed:'cmp_6'},
  {level:7,  mode:'survival',    ops:['add','sub','mul'],            diff:'easy',   target:12, lives:3,      seed:'cmp_7'},
  {level:8,  mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:12, lives:3,      seed:'cmp_8'},
  {level:9,  mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:12, lives:3,      seed:'cmp_9'},
  {level:10, mode:'survival',    ops:['add','sub','mul','div'],      diff:'easy',   target:14, lives:2,      seed:'cmp_10', boss:true},
  // ── World 2: Multiplication (11-20) — survival only, no question timer ───
  {level:11, mode:'survival',    ops:['mul'],                        diff:'easy',   target:10, lives:3,      seed:'cmp_11'},
  {level:12, mode:'survival',    ops:['mul'],                        diff:'easy',   target:12, lives:3,      seed:'cmp_12'},
  {level:13, mode:'survival',    ops:['mul','div'],                  diff:'easy',   target:10, lives:3,      seed:'cmp_13'},
  {level:14, mode:'survival',    ops:['mul','div'],                  diff:'easy',   target:12, lives:3,      seed:'cmp_14'},
  {level:15, mode:'survival',    ops:['mul','div'],                  diff:'medium', target:10, lives:3,      seed:'cmp_15'},
  {level:16, mode:'survival',    ops:['add','sub','mul'],            diff:'medium', target:12, lives:3,      seed:'cmp_16'},
  {level:17, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:12, lives:3,      seed:'cmp_17'},
  {level:18, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:14, lives:3,      seed:'cmp_18'},
  {level:19, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:14, lives:3,      seed:'cmp_19'},
  {level:20, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:16, lives:2,      seed:'cmp_20', boss:true},
  // ── World 3: Speed intro (21-30) — time attack only ──────────────────────
  {level:21, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:10, timeLimit:40, seed:'cmp_21'},
  {level:22, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:12, timeLimit:45, seed:'cmp_22'},
  {level:23, mode:'time_attack', ops:['mul'],                        diff:'medium', target:10, timeLimit:40, seed:'cmp_23'},
  {level:24, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:12, timeLimit:45, seed:'cmp_24'},
  {level:25, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:14, timeLimit:50, seed:'cmp_25'},
  {level:26, mode:'time_attack', ops:['mul','div'],                  diff:'medium', target:12, timeLimit:45, seed:'cmp_26'},
  {level:27, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:12, timeLimit:45, seed:'cmp_27'},
  {level:28, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:50, seed:'cmp_28'},
  {level:29, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:50, seed:'cmp_29'},
  {level:30, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:16, timeLimit:48, seed:'cmp_30', boss:true},
  // ── World 4: Percentages (31-40) — mixed, question timer on survival ─────
  {level:31, mode:'survival',    ops:['pct'],                        diff:'easy',   target:8,  lives:2, questionTimer:true, seed:'cmp_31'},
  {level:32, mode:'time_attack', ops:['pct'],                        diff:'easy',   target:8,  timeLimit:35, seed:'cmp_32'},
  {level:33, mode:'survival',    ops:['pct'],                        diff:'medium', target:10, lives:2, questionTimer:true, seed:'cmp_33'},
  {level:34, mode:'time_attack', ops:['add','sub','pct'],            diff:'easy',   target:10, timeLimit:38, seed:'cmp_34'},
  {level:35, mode:'survival',    ops:['add','sub','pct'],            diff:'medium', target:10, lives:2, questionTimer:true, seed:'cmp_35'},
  {level:36, mode:'time_attack', ops:['mul','pct'],                  diff:'medium', target:10, timeLimit:40, seed:'cmp_36'},
  {level:37, mode:'survival',    ops:['mul','div','pct'],            diff:'medium', target:12, lives:2, questionTimer:true, seed:'cmp_37'},
  {level:38, mode:'time_attack', ops:['add','sub','mul','pct'],      diff:'medium', target:12, timeLimit:42, seed:'cmp_38'},
  {level:39, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'medium', target:12, lives:2, questionTimer:true, seed:'cmp_39'},
  {level:40, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'medium', target:14, lives:2, questionTimer:true, seed:'cmp_40', boss:true},
  // ── World 5: Medium crunch (41-50) — mixed, time attack tight limits ─────
  {level:41, mode:'time_attack', ops:['add','sub'],                  diff:'medium', target:12, timeLimit:38, seed:'cmp_41'},
  {level:42, mode:'survival',    ops:['mul'],                        diff:'medium', target:10, lives:3,      seed:'cmp_42'},
  {level:43, mode:'time_attack', ops:['add','sub','mul'],            diff:'medium', target:12, timeLimit:38, seed:'cmp_43'},
  {level:44, mode:'survival',    ops:['mul','div'],                  diff:'medium', target:12, lives:3,      seed:'cmp_44'},
  {level:45, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'medium', target:14, timeLimit:42, seed:'cmp_45'},
  {level:46, mode:'survival',    ops:['add','sub','mul','div'],      diff:'medium', target:12, lives:2,      seed:'cmp_46'},
  {level:47, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:10, timeLimit:38, seed:'cmp_47'},
  {level:48, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:10, lives:2,      seed:'cmp_48'},
  {level:49, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:45, seed:'cmp_49'},
  {level:50, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:42, seed:'cmp_50', boss:true},
  // ── World 6: Hard numbers (51-60) — mixed, question timer on survival ────
  {level:51, mode:'survival',    ops:['add','sub'],                  diff:'hard',   target:10, lives:2, questionTimer:true, seed:'cmp_51'},
  {level:52, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:10, timeLimit:38, seed:'cmp_52'},
  {level:53, mode:'survival',    ops:['mul'],                        diff:'hard',   target:10, lives:2, questionTimer:true, seed:'cmp_53'},
  {level:54, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:40, seed:'cmp_54'},
  {level:55, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:2, questionTimer:true, seed:'cmp_55'},
  {level:56, mode:'time_attack', ops:['mul','div'],                  diff:'hard',   target:12, timeLimit:40, seed:'cmp_56'},
  {level:57, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:2, questionTimer:true, seed:'cmp_57'},
  {level:58, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:42, seed:'cmp_58'},
  {level:59, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:14, lives:2, questionTimer:true, seed:'cmp_59'},
  {level:60, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:16, lives:2, questionTimer:true, seed:'cmp_60', boss:true},
  // ── World 7: Hard mixed (61-70) — mixed, time attack shorter limits ───────
  {level:61, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:10, timeLimit:35, seed:'cmp_61'},
  {level:62, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:10, lives:2,      seed:'cmp_62'},
  {level:63, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:38, seed:'cmp_63'},
  {level:64, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:2,      seed:'cmp_64'},
  {level:65, mode:'time_attack', ops:['mul','div'],                  diff:'hard',   target:12, timeLimit:38, seed:'cmp_65'},
  {level:66, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:2,      seed:'cmp_66'},
  {level:67, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:42, seed:'cmp_67'},
  {level:68, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:12, lives:2,      seed:'cmp_68'},
  {level:69, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:42, seed:'cmp_69'},
  {level:70, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:40, seed:'cmp_70', boss:true},
  // ── World 8: Endurance (71-80) — mixed, 1 life, question timer on survival
  {level:71, mode:'survival',    ops:['add','sub'],                  diff:'hard',   target:10, lives:1, questionTimer:true, seed:'cmp_71'},
  {level:72, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:12, timeLimit:38, seed:'cmp_72'},
  {level:73, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:10, lives:1, questionTimer:true, seed:'cmp_73'},
  {level:74, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:12, timeLimit:40, seed:'cmp_74'},
  {level:75, mode:'survival',    ops:['add','sub','mul'],            diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_75'},
  {level:76, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:40, seed:'cmp_76'},
  {level:77, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_77'},
  {level:78, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:42, seed:'cmp_78'},
  {level:79, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_79'},
  {level:80, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, lives:1, questionTimer:true, seed:'cmp_80', boss:true},
  // ── World 9: Elite (81-90) — mixed, very tight ───────────────────────────
  {level:81, mode:'time_attack', ops:['add','sub'],                  diff:'hard',   target:12, timeLimit:32, seed:'cmp_81'},
  {level:82, mode:'survival',    ops:['mul','div'],                  diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_82'},
  {level:83, mode:'time_attack', ops:['add','sub','mul'],            diff:'hard',   target:14, timeLimit:36, seed:'cmp_83'},
  {level:84, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_84'},
  {level:85, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:36, seed:'cmp_85'},
  {level:86, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:12, lives:1, questionTimer:true, seed:'cmp_86'},
  {level:87, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:40, seed:'cmp_87'},
  {level:88, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_88'},
  {level:89, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, timeLimit:42, seed:'cmp_89'},
  {level:90, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:20, timeLimit:40, seed:'cmp_90', boss:true},
  // ── World 10: Master (91-100) — alternating, hardest configs ────────────
  {level:91, mode:'time_attack', ops:['add','sub','mul','div'],      diff:'hard',   target:14, timeLimit:35, seed:'cmp_91'},
  {level:92, mode:'survival',    ops:['add','sub','mul','div'],      diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_92'},
  {level:93, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, timeLimit:35, seed:'cmp_93'},
  {level:94, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:14, lives:1, questionTimer:true, seed:'cmp_94'},
  {level:95, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, timeLimit:38, seed:'cmp_95'},
  {level:96, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:16, lives:1, questionTimer:true, seed:'cmp_96'},
  {level:97, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, timeLimit:40, seed:'cmp_97'},
  {level:98, mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:18, lives:1, questionTimer:true, seed:'cmp_98'},
  {level:99, mode:'time_attack', ops:['add','sub','mul','div','pct'],diff:'hard',   target:20, timeLimit:45, seed:'cmp_99'},
  {level:100,mode:'survival',    ops:['add','sub','mul','div','pct'],diff:'hard',   target:22, lives:1, questionTimer:true, seed:'cmp_100', boss:true},
];

// World definitions — used for map headers
const CAMPAIGN_WORLDS = [
  {world:1,  firstLevel:1,  lastLevel:10,  labelKey:'campaign_world_1'},
  {world:2,  firstLevel:11, lastLevel:20,  labelKey:'campaign_world_2'},
  {world:3,  firstLevel:21, lastLevel:30,  labelKey:'campaign_world_3'},
  {world:4,  firstLevel:31, lastLevel:40,  labelKey:'campaign_world_4'},
  {world:5,  firstLevel:41, lastLevel:50,  labelKey:'campaign_world_5'},
  {world:6,  firstLevel:51, lastLevel:60,  labelKey:'campaign_world_6'},
  {world:7,  firstLevel:61, lastLevel:70,  labelKey:'campaign_world_7'},
  {world:8,  firstLevel:71, lastLevel:80,  labelKey:'campaign_world_8'},
  {world:9,  firstLevel:81, lastLevel:90,  labelKey:'campaign_world_9'},
  {world:10, firstLevel:91, lastLevel:100, labelKey:'campaign_world_10'},
];

// Campaign state
let campaignState = {
  currentLevel: null,  // level config object
  questions: [],
  current: 0,
  correct: 0,
  lives: 0,
  timeLeft: 0,
  timer: null,
  playTimeTimer: null,
  done: false,
  failed: false,
};

const CAMPAIGN_VERSION = 3; // increment this to wipe all local campaign progress

function getCampaignProgress() {
  try {
    const raw = localStorage.getItem('numfly_campaign');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.v !== CAMPAIGN_VERSION) throw new Error('stale');
      return parsed;
    }
  } catch(e) {}
  return { highestUnlocked: 1, completed: [], v: CAMPAIGN_VERSION };
}

function saveCampaignProgress(progress) {
  try { localStorage.setItem('numfly_campaign', JSON.stringify({...progress, v: CAMPAIGN_VERSION})); } catch(e) {}
}

async function pushCampaignProgress(progress) {
  if (!currentUser || !sb) return;
  try {
    await sb.from('user_progress').upsert({
      user_id: currentUser.id,
      campaign_highest_unlocked: progress.highestUnlocked,
      campaign_completed: progress.completed,
    }, { onConflict: 'user_id' });
  } catch(e) { console.warn('[Numfly] pushCampaignProgress failed:', e); }
}

function getCampaignSeed(seedStr) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) h = (Math.imul(31, h) + seedStr.charCodeAt(i)) | 0;
  return Math.abs(h) || 99999;
}

function genCampaignQuestions(levelCfg) {
  const seed = getCampaignSeed(levelCfg.seed);
  const rng = seededRand(seed);
  const ri = (lo, hi) => Math.floor(rng() * (hi - lo + 1)) + lo;
  const r = RANGES[levelCfg.diff] || RANGES.easy;
  const ops = levelCfg.ops;
  const needed = levelCfg.mode === 'time_attack'
    ? levelCfg.target + 10  // generate extra for time_attack
    : levelCfg.target + 5;
  const questions = [];
  const used = new Set();
  let attempts = 0;
  while (questions.length < needed && attempts < needed * 10) {
    attempts++;
    const op = ops[Math.floor(rng() * ops.length)];
    let p = null;
    if (op === 'add') { const [lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);const ans=a+b;if(ans===0)continue;p={q:`${a} + ${b}`,ans,op}; }
    else if (op === 'sub') { const [lo,hi]=r.sub;let a=ri(lo,hi),b=ri(lo,hi);if(a<b)[a,b]=[b,a];if(a===b)continue;p={q:`${a} − ${b}`,ans:a-b,op}; }
    else if (op === 'mul') { const [lo,hi]=r.mul,a=ri(lo,hi);const bMin=levelCfg.diff==='easy'?2:3;const bMax=levelCfg.diff==='easy'?9:12;const b=ri(bMin,bMax);if(a===0||b===0)continue;p={q:`${a} × ${b}`,ans:a*b,op}; }
    else if (op === 'div') { const b=ri(r.divB[0],r.divB[1]),q2=ri(r.divQ[0],r.divQ[1]);if(b===0||q2===0)continue;p={q:`${b*q2} ÷ ${b}`,ans:q2,op}; }
    else if (op === 'pct') {
      const bases = levelCfg.diff==='easy'?[10,20,25,50,100]:[20,25,40,50,75,100,200];
      const pcts = [5,10,20,25,50];
      const pv = pcts[Math.floor(rng()*pcts.length)];
      const base = bases[Math.floor(rng()*bases.length)];
      const ans = pv*base/100;
      if (!Number.isInteger(ans)||ans===0) continue;
      p = {q:`${pv}% of ${base}`,ans,op:'pct'};
    }
    let cKey = (p.op==='add'||p.op==='mul') ? p.q.match(/\d+/g).sort((a,b)=>a-b).join('_')+p.op : p.q;
    if (!p || used.has(cKey)) continue;
    used.add(cKey);
    used.add(p.q);
    questions.push(p);
  }
// Shuffle using a per-attempt seed so returning players face a different order
  const shuffleSeed = Date.now() ^ (Math.random() * 0xFFFFFF | 0);
  const srng = seededRand(shuffleSeed);
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(srng() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

function openCampaignMap() {
  showScreen('screen-campaign');
  renderCampaignMap();
}

function renderCampaignMap() {
  const progress = getCampaignProgress();
  const el = document.getElementById('campaign-level-grid');
  if (!el) return;
  let html = '';
  CAMPAIGN_WORLDS.forEach(world => {
    // World header — always visible, spans full grid width
    html += `<div class="campaign-world-header">
      <span class="campaign-world-label">${t(world.labelKey)}</span>
    </div>`;
    // Level buttons for this world
    html += '<div class="campaign-world-row">';
    CAMPAIGN_LEVELS.filter(lvl => lvl.level >= world.firstLevel && lvl.level <= world.lastLevel).forEach(lvl => {
      const unlocked = lvl.level <= progress.highestUnlocked;
      const completed = progress.completed.includes(lvl.level);
      const isBoss = !!lvl.boss;
      let cls = 'campaign-level-btn';
      if (isBoss) cls += ' boss';
      else cls += ' ' + lvl.mode.replace('_', '-');
      if (completed) cls += ' completed';
      else if (!unlocked) cls += ' locked';
      else cls += ' unlocked';
      const icon = completed ? '✓' : !unlocked ? '🔒' : lvl.level;
      html += `<button class="${cls}" onclick="${unlocked ? `startCampaignLevel(${lvl.level})` : ''}" ${!unlocked?'disabled':''}>
        ${isBoss && !completed && unlocked ? '<span class="campaign-boss-ring"></span>' : ''}
        <span class="campaign-level-num">${icon}</span>
      </button>`;
    });
    html += '</div>';
  });
  el.innerHTML = html;
}
function showCampaignIntro(levelCfg, onDone) {
  const isBoss = !!levelCfg.boss;
  const modeDesc = levelCfg.mode === 'time_attack'
    ? t('campaign_mode_time_attack').replace('{target}', levelCfg.target).replace('{time}', levelCfg.timeLimit)
    : t('campaign_mode_survival').replace('{target}', levelCfg.target).replace('{lives}', levelCfg.lives);

  const overlay = document.createElement('div');
  overlay.id = 'campaign-intro-overlay';
  overlay.className = isBoss ? 'campaign-intro-overlay boss' : 'campaign-intro-overlay';
  overlay.innerHTML = `
    <div class="campaign-intro-box">
      <div class="campaign-intro-level">${t('campaign_level')} ${levelCfg.level}</div>
      <div class="campaign-intro-num">${levelCfg.level}</div>
      <div class="campaign-intro-desc">${modeDesc}</div>
    </div>`;
  document.body.appendChild(overlay);

  // Animate out after 2s then call onDone
  setTimeout(() => {
    overlay.classList.add('out');
    setTimeout(() => { overlay.remove(); onDone(); }, 400);
  }, 2600);
}

function startCampaignLevel(levelNum) {
  const levelCfg = CAMPAIGN_LEVELS.find(l => l.level === levelNum);
  if (!levelCfg) return;
  // Setup state
  campaignState = {
    currentLevel: levelCfg,
    questions: genCampaignQuestions(levelCfg),
    current: 0,
    correct: 0,
    lives: levelCfg.mode === 'survival' ? levelCfg.lives : 0,
    timeLeft: levelCfg.mode === 'time_attack' ? levelCfg.timeLimit : 0,
    questionTimeLeft: 0,
    timer: null,
    questionTimer: null,
    playTimeTimer: null,
    done: false,
    failed: false,
  };
  // Update HUD labels
  const lvl = levelCfg;
  document.getElementById('cmp-level-label').textContent =
    (lvl.boss ? t('campaign_boss_label') + ' — ' : '') + t('campaign_level') + ' ' + lvl.level;
  const modeLabel = document.getElementById('cmp-mode-label');
  if (modeLabel) {
    modeLabel.textContent = t('campaign_' + lvl.mode);
    modeLabel.style.color = lvl.boss ? 'var(--orange)' : lvl.mode === 'time_attack' ? 'var(--accent)' : 'var(--info)';
  }
  // Color the q-card border by mode
  const qCard = document.querySelector('#screen-campaign-game .q-card');
  if (qCard) {
    qCard.style.borderColor = lvl.boss ? 'var(--orange)' : lvl.mode === 'time_attack' ? 'rgba(232,255,71,.3)' : 'rgba(71,179,255,.3)';
  }
  document.getElementById('cmp-target-display').textContent = lvl.target;
  document.getElementById('cmp-correct-display').textContent = '0';
  // Show/hide mode-specific HUD
  const timeHud = document.getElementById('cmp-time-hud');
  const livesHud = document.getElementById('cmp-lives-hud');
  if (lvl.mode === 'time_attack') {
    timeHud.style.display = 'flex';
    livesHud.style.display = 'none';
    document.getElementById('cmp-time-display').textContent = lvl.timeLimit;
  } else {
    timeHud.style.display = 'none';
    livesHud.style.display = 'flex';
    renderCampaignLives();
  }
  showScreen('screen-campaign-game');
  // Clear stale question text immediately to prevent flash
  const _cmpQ = document.getElementById('cmp-question');
  if (_cmpQ) _cmpQ.textContent = '';
  const _cmpFb = document.getElementById('cmp-feedback');
  if (_cmpFb) { _cmpFb.textContent = ''; _cmpFb.className = 'feedback'; }
  const _cmpAns = document.getElementById('cmp-answer');
  if (_cmpAns) _cmpAns.value = '';
  // Hide question area until intro finishes
  const _cmpGameContent = document.getElementById('cmp-game-content');
  if (_cmpGameContent) _cmpGameContent.style.visibility = 'hidden';
  showCampaignIntro(levelCfg, () => {
    if (_cmpGameContent) _cmpGameContent.style.visibility = '';
    loadCampaignQuestion();
    if (lvl.mode === 'time_attack') {
      campaignState.timer = setInterval(() => {
        campaignState.timeLeft--;
        const el = document.getElementById('cmp-time-display');
        if (el) el.textContent = campaignState.timeLeft;
        if (campaignState.timeLeft <= 0) {
          clearInterval(campaignState.timer);
          campaignState.timer = null;
          if (!campaignState.done) finishCampaignLevel(false, 'time');
        }
      }, 1000);
    }
    campaignState.playTimeTimer = setInterval(() => { stats.totalPlayTime++; }, 1000);
  });
}

function renderCampaignLives() {
  const el = document.getElementById('cmp-lives-display');
  if (!el) return;
  const total = campaignState.currentLevel.lives;
  const remaining = campaignState.lives;
  el.innerHTML = Array.from({length: total}, (_, i) =>
    `<span class="cmp-heart${i < remaining ? '' : ' lost'}">♥</span>`
  ).join('');
}

function loadCampaignQuestion() {
  const q = campaignState.questions[campaignState.current];
  if (!q) { finishCampaignLevel(false, 'time'); return; }
  document.getElementById('cmp-question').textContent = q.q;
  document.getElementById('cmp-op-type').textContent = t('op_type_' + q.op) || q.op;
  document.getElementById('cmp-answer').value = '';
  document.getElementById('cmp-feedback').textContent = '';
  document.getElementById('cmp-feedback').className = 'feedback';
  if (document.getElementById('cmp-answer')) document.getElementById('cmp-answer').focus();
  // Per-question countdown only for levels that explicitly enable it
  if (campaignState.currentLevel.mode === 'survival' && campaignState.currentLevel.questionTimer) {
    if (campaignState.questionTimer) { cancelAnimationFrame(campaignState.questionTimer); campaignState.questionTimer = null; }
    const QUESTION_TIME = 10000; // ms
    const startTime = performance.now();
    updateCampaignQuestionTimerBar(1, 1);
    function questionTimerTick(now) {
      if (campaignState.done) return;
      const elapsed = now - startTime;
      const remaining = Math.max(0, QUESTION_TIME - elapsed);
      updateCampaignQuestionTimerBar(remaining, QUESTION_TIME);
      if (remaining <= 0) {
        campaignState.questionTimer = null;
        const fb = document.getElementById('cmp-feedback');
        fb.textContent = t('campaign_fail_question_time'); fb.className = 'feedback bad';
        recordAnswer(campaignState.questions[campaignState.current]?.op || 'add', false, 'campaign', campaignState.currentLevel.diff);
        campaignState.lives--;
        renderCampaignLives();
        if (campaignState.lives <= 0) {
          setTimeout(() => finishCampaignLevel(false, 'lives'), 600);
        } else {
          setTimeout(loadCampaignQuestion, 700);
        }
        return;
      }
      campaignState.questionTimer = requestAnimationFrame(questionTimerTick);
    }
    campaignState.questionTimer = requestAnimationFrame(questionTimerTick);
  }
}

function updateCampaignQuestionTimerBar(current, total) {
  const bar = document.getElementById('cmp-question-timer-bar');
  if (!bar) return;
  const pct = Math.max(0, current / total) * 100;
  bar.style.width = pct + '%';
  bar.style.background = pct > 50 ? 'var(--info)' : pct > 25 ? 'var(--orange)' : 'var(--error)';
}

function checkCampaignAnswer() {
  if (campaignState.done) return;
  const val = document.getElementById('cmp-answer').value.trim();
  if (val === '') return;
  // Stop per-question timer immediately on any answer
  if (campaignState.questionTimer) { clearInterval(campaignState.questionTimer); campaignState.questionTimer = null; }
  const q = campaignState.questions[campaignState.current];
  const correct = checkAns(val, q.ans);
  const fb = document.getElementById('cmp-feedback');
  if (correct) {
    sfxCorrect();
    fb.textContent = t('speed_correct'); fb.className = 'feedback ok';
    campaignState.correct++;
    campaignState.current++;
    document.getElementById('cmp-correct-display').textContent = campaignState.correct;
    recordAnswer(q.op, true, 'campaign', campaignState.currentLevel.diff);
    if (campaignState.correct >= campaignState.currentLevel.target) {
      finishCampaignLevel(true);
    } else {
      setTimeout(loadCampaignQuestion, 220);
    }
  } else {
    sfxWrong();
    fb.textContent = t('speed_wrong'); fb.className = 'feedback bad';
    recordAnswer(q.op, false, 'campaign', campaignState.currentLevel.diff);
    if (campaignState.currentLevel.mode === 'survival') {
      campaignState.lives--;
      renderCampaignLives();
      sfxLifeLost();
      if (campaignState.lives <= 0) {
        finishCampaignLevel(false, 'lives');
        return;
      }
    }
    setTimeout(() => {
      loadCampaignQuestion();
    }, 220);
  }
}

function finishCampaignLevel(success, failReason) {
  if (campaignState.done) return;
  campaignState.done = true;
  if (campaignState.timer) { clearInterval(campaignState.timer); campaignState.timer = null; }
  if (campaignState.questionTimer) { clearInterval(campaignState.questionTimer); campaignState.questionTimer = null; }
  if (campaignState.playTimeTimer) { clearInterval(campaignState.playTimeTimer); campaignState.playTimeTimer = null; }
  setTimeout(() => { checkAchievements(); flushPendingLevelUps(); }, 600);
  const lvl = campaignState.currentLevel;
  // Award XP
  // XP scales with world (every 10 levels = 1 world), bosses give 2x, failure gives a small consolation
  const world = Math.ceil(lvl.level / 10);
  const baseXP = 20 + (world - 1) * 15; // W1=20, W2=35, W3=50 ... W10=155
  const xpReward = success ? (lvl.boss ? baseXP * 2 : baseXP) : Math.max(5, Math.round(baseXP * 0.15));
  gainXP(xpReward);
  // Update progress
  if (success) {
    // Track campaign stats for achievements
    stats.campaignCompleted = (stats.campaignCompleted || 0) + 1;
    if (lvl.boss) stats.campaignBossesBeaten = (stats.campaignBossesBeaten || 0) + 1;
    // Perfect = no lives lost (survival) or answered all within time with no wrong answers
    const isPerfect = lvl.mode === 'survival'
      ? campaignState.lives === lvl.lives
      : campaignState.correct === lvl.target && (campaignState.correct === campaignState.current);
    if (isPerfect) stats.campaignPerfectLevels = (stats.campaignPerfectLevels || 0) + 1;
    const progress = getCampaignProgress();
    if (!progress.completed.includes(lvl.level)) progress.completed.push(lvl.level);
    const next = lvl.level + 1;
    if (next <= CAMPAIGN_LEVELS.length && next > progress.highestUnlocked) {
      progress.highestUnlocked = next;
    }
     saveCampaignProgress(progress);
    saveGuestState();
    pushCampaignProgress(progress);
    if (currentUser) scheduleSync();
  }
  // Pre-render map so it's fresh when user navigates to it
  if(success){
    if(campaignState.currentLevel.boss) sfxBossComplete();
    else sfxLevelComplete();
    renderCampaignMap();
  }
  // Show result screen
  const titleEl = document.getElementById('cmp-result-title');
  const subEl = document.getElementById('cmp-result-sub');
  const nextBtn = document.getElementById('cmp-next-btn');
  titleEl.textContent = success ? t('campaign_complete_title') : t('campaign_fail_title');
  titleEl.style.color = success ? 'var(--accent)' : 'var(--error)';
  if (success) {
    subEl.textContent = t('campaign_complete_sub');
    nextBtn.style.display = lvl.level < CAMPAIGN_LEVELS.length ? 'block' : 'none';
  } else {
    subEl.textContent = failReason === 'lives' ? t('campaign_fail_lives') : t('campaign_fail_time');
    nextBtn.style.display = 'none';
  }
  document.getElementById('cmp-result-level').textContent = t('campaign_level') + ' ' + lvl.level;
  document.getElementById('cmp-result-correct').textContent = campaignState.correct + ' / ' + lvl.target;
  showScreen('screen-campaign-result');
}

function campaignNextLevel() {
  const next = campaignState.currentLevel.level + 1;
  if (next <= CAMPAIGN_LEVELS.length) startCampaignLevel(next);
  else openCampaignMap();
}

function campaignRetry() {
  startCampaignLevel(campaignState.currentLevel.level);
}

function closeLevelUp(){document.getElementById('modal-levelup').classList.remove('open');}
function openTitlesModal(){
  const lvl = xp.level;
  const currentTitle = getTitleForLevel(lvl);

  const colors = {
    'title-novice':'var(--muted)', 'title-learner':'var(--text)',
    'title-scholar':'var(--info)', 'title-theorist':'var(--success)',
    'title-master':'var(--accent)', 'title-polymath':'var(--orange)',
    'title-pythagoras':'var(--purple)', 'title-euler':'#ff6b9d',
    'title-gauss':'var(--accent)'
  };

  document.getElementById('titles-modal-sub').textContent = '';

  const listEl = document.getElementById('titles-list');
  listEl.innerHTML = '';

  TITLE_THRESHOLDS.forEach(th => {
    const unlocked = lvl >= th.level;
    const isCurrent = currentTitle.key === th.key;
    const color = colors[th.css] || 'var(--accent)';
    const badgeBg = unlocked
      ? color.replace('var(--','rgba(').replace(')',',.12)')
      : 'rgba(255,255,255,.04)';

    const item = document.createElement('div');
    item.className = 'titles-item' + (unlocked ? ' titles-item--unlocked' : '') + (isCurrent ? ' titles-item--current' : '');
    item.innerHTML = `
      <div class="titles-item-badge" style="border-color:${unlocked ? color : 'var(--border)'};background:${badgeBg}">
        <span style="font-size:22px;${unlocked ? '' : 'filter:grayscale(1);opacity:.4'}">${th.badge}</span>
      </div>
      <div class="titles-item-info">
        <div class="titles-item-name ${unlocked ? th.css : ''}">${t('title_'+th.key)}</div>
        <div class="titles-item-flavor">${t('title_flavor_'+th.key)}</div>
      </div>
      <div class="titles-item-meta" style="color:${unlocked ? color : 'var(--muted2)'}">
        ${unlocked ? '<span class="titles-check">✓</span>' : ''}
        <span class="titles-level-badge">${t('titles_lv')}${th.level}</span>
      </div>`;
    listEl.appendChild(item);
  });

  document.getElementById('modal-titles').classList.add('open');
}
function closeTitlesModal(){document.getElementById('modal-titles').classList.remove('open');}
function renderXPPanel(){
  if (!document.getElementById('xp-level-num')) return;
  const lvl=xp.level;
  const title=getTitleForLevel(lvl);
  const thisLevelXp=totalXpForLevel(lvl);
  const nextLevelXp=totalXpForLevel(lvl+1);
  const progressXp=xp.total-thisLevelXp;
  const neededXp=nextLevelXp-thisLevelXp;
  const pct=neededXp>0?Math.min(100,Math.round(progressXp/neededXp*100)):100;

  document.getElementById('xp-level-num').textContent=lvl;
  const titleEl=document.getElementById('xp-title-display');
  titleEl.textContent=t('title_'+title.key);
  titleEl.className='xp-title-display '+title.css;
  const badge=document.getElementById('xp-badge');
  badge.textContent=title.badge;
  // Badge border color matches title
  const colors={'title-novice':'var(--muted)','title-learner':'var(--text)','title-scholar':'var(--info)','title-theorist':'var(--success)','title-master':'var(--accent)','title-polymath':'var(--orange)','title-pythagoras':'var(--purple)','title-euler':'#ff6b9d','title-gauss':'var(--accent)'};
  badge.style.borderColor=colors[title.css]||'var(--accent)';
  badge.style.background=colors[title.css]?colors[title.css].replace('var(--','rgba(').replace(')',',.1)'):'rgba(232,255,71,.1)';

  document.getElementById('xp-pts-display').textContent=fmtN(xp.total);
  document.getElementById('xp-bar-fill').style.width=pct+'%';
  document.getElementById('xp-bar-cur').textContent=fmtN(progressXp)+' XP';
  document.getElementById('xp-bar-next').textContent=fmtN(neededXp-progressXp)+' '+(t('xp_to_next')||'to next');
}
const diff={lightning:'easy',speed:'easy',practice:'easy'};
let practiceOps=new Set(['add','sub','mul','div','pct']);
let lightning={numbers:[],sum:0,score:0,count:5,interval:2,abandoned:false,sessionScore:0,cumulativeScore:0};
let speed={score:0,ans:0,timer:null,remaining:120,wrongStreak:0,currentOp:'add',opBag:[],waiting:false};
let tipPractice={ans:0,waiting:false,op:'add',tipIdx:0,correct:0,wrong:0,level:'medium'};
let practice={ans:0,waiting:false,currentOp:'add',timer:null,opBag:[],wrongCount:0};

// Shuffle-bag: refills when empty so every op appears before any repeats
function pickFromBag(bag,pool){
  if(bag.length===0){
    // Refill and shuffle
    const arr=[...pool];
    for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
    bag.push(...arr);
  }
  return bag.pop();
}

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
      window.location.href = routes[id];
      return;
    }
  }
  // Clear game timers on any game→non-game screen transition to prevent leaks
  const _gameScreens=['screen-speed-game','screen-practice-game','screen-lightning-game','screen-daily-game','screen-campaign-game'];
  const _curId=document.querySelector('.screen.active')?.id;
  if(_curId&&_gameScreens.includes(_curId)&&!_gameScreens.includes(id)){clearGameTimers();}
  // Reset lightning streak when leaving lightning screens without answering
  const cur=document.querySelector('.screen.active')?.id;
  const leavingLightning=cur&&(cur==='screen-lightning-game'||cur==='screen-lightning-setup'||cur==='screen-lightning-result');
  const goingToLightning=id==='screen-lightning-game'||id==='screen-lightning-setup'||id==='screen-lightning-result';
  if(leavingLightning&&!goingToLightning){
    // Abandon mid-flash if running
    if(lightning)lightning.abandoned=true;
    // Only reset streak if leaving to menu (not just changing settings)
    if(id==='screen-menu'){lightning.score=0;lightning.sessionScore=0;}
  }
  // Guard: redirect guests away from protected screens
  const PROTECTED=['screen-friends','screen-leaderboard','screen-competition','screen-group-comp'];
  if(PROTECTED.includes(id)&&!currentUser){
    if(typeof openAuthModal==='function')openAuthModal('login');
    return;
  }
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // Always scroll to top when switching screens
  window.scrollTo(0,0);
  // Toggle body class for mobile fixed burger visibility
  document.body.classList.toggle('on-menu', id==='screen-menu');
  applyTranslations();
  if(id==='screen-menu'){renderHSPanel();renderXPPanel();updateDailyCard();}
  if(id==='screen-stats') renderStatsContent();
  // Clear friend search result AND input when navigating away
  if(id!=='screen-friends'){
    const sr=document.getElementById('friend-search-result');
    if(sr)sr.innerHTML='';
    const si=document.getElementById('friend-search-input');
    if(si)si.value='';
  }
  // Friend poller: fast when on friends, slow global otherwise
  if(id==='screen-friends'){loadFriends();startFriendPoller();}
  else{stopFriendPoller();}
  if(id==='screen-tips'){renderTipsFilterBtns();renderTipsList();}
  if(id==='screen-achievements') renderAchievements();
  // Show scroll-to-top on long screens
  const scrollable=['screen-tips','screen-achievements'];
  if(scrollable.includes(id)){attachScrollTopListener();}
  else{detachScrollTopListener();}
  if(id==='screen-privacy'){renderPrivacy();requestAnimationFrame(()=>{window.scrollTo(0,0);document.getElementById('screen-privacy').scrollTop=0;});}
}
function showTips(){
  showScreen('screen-tips');
}

// ══════════════════════════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ══════════════════════════════════════════════════════════════════════════════

// Achievement definitions
// tier: bronze < silver < gold < platinum < diamond
// check(s,hs,xp): function returning true when earned, given current stats/hs/xp
const ACHIEVEMENTS=[
  // ── GENERAL ─────────────────────────────────────────────────────────────────
  {id:'answers_1',   sec:'general', icon:'✅', tier:'bronze',   nameKey:'ach_answers_1_name',   descKey:'ach_answers_1_desc',   check:(s)=>s.totalCorrect>=30},
  {id:'answers_2',   sec:'general', icon:'🔥', tier:'bronze',   nameKey:'ach_answers_2_name',   descKey:'ach_answers_2_desc',   check:(s)=>s.totalCorrect>=100},
  {id:'answers_3',   sec:'general', icon:'💯', tier:'silver',   nameKey:'ach_answers_3_name',   descKey:'ach_answers_3_desc',   check:(s)=>s.totalCorrect>=250},
  {id:'answers_4',   sec:'general', icon:'⚡', tier:'gold',     nameKey:'ach_answers_4_name',   descKey:'ach_answers_4_desc',   check:(s)=>s.totalCorrect>=1000},
  {id:'answers_5',   sec:'general', icon:'🤖', tier:'platinum', nameKey:'ach_answers_5_name',   descKey:'ach_answers_5_desc',   check:(s)=>s.totalCorrect>=2500},
  {id:'answers_6',   sec:'general', icon:'🌌', tier:'diamond',  nameKey:'ach_answers_6_name',   descKey:'ach_answers_6_desc',   check:(s)=>s.totalCorrect>=10000},
  {id:'time_1',      sec:'general', icon:'⏱️', tier:'bronze',   nameKey:'ach_time_1_name',      descKey:'ach_time_1_desc',      check:(s)=>s.totalPlayTime>=300},
  {id:'time_2',      sec:'general', icon:'📅', tier:'silver',   nameKey:'ach_time_2_name',      descKey:'ach_time_2_desc',      check:(s)=>s.totalPlayTime>=1800},
  {id:'time_3',      sec:'general', icon:'🕰️', tier:'gold',     nameKey:'ach_time_3_name',      descKey:'ach_time_3_desc',      check:(s)=>s.totalPlayTime>=7200},
  {id:'time_4',      sec:'general', icon:'🗿', tier:'platinum', nameKey:'ach_time_4_name',      descKey:'ach_time_4_desc',      check:(s)=>s.totalPlayTime>=72000},
  {id:'time_5',      sec:'general', icon:'💎', tier:'diamond',  nameKey:'ach_time_5_name',      descKey:'ach_time_5_desc',      check:(s)=>s.totalPlayTime>=180000},
  {id:'accuracy_1',  sec:'general', icon:'🎯', tier:'silver',   nameKey:'ach_accuracy_1_name',  descKey:'ach_accuracy_1_desc',  check:(s)=>s.totalAnswers>=50&&s.totalCorrect/s.totalAnswers>=0.8},
  {id:'accuracy_2',  sec:'general', icon:'🔬', tier:'gold',     nameKey:'ach_accuracy_2_name',  descKey:'ach_accuracy_2_desc',  check:(s)=>s.totalAnswers>=100&&s.totalCorrect/s.totalAnswers>=0.9},
  {id:'accuracy_3',  sec:'general', icon:'💎', tier:'platinum', nameKey:'ach_accuracy_3_name',  descKey:'ach_accuracy_3_desc',  check:(s)=>s.totalAnswers>=200&&s.totalCorrect/s.totalAnswers>=0.95},
  // ── LIGHTNING ───────────────────────────────────────────────────────────────
  {id:'lightning_games_1',  sec:'lightning', icon:'🎮', tier:'bronze',   nameKey:'ach_lightning_games_1_name',  descKey:'ach_lightning_games_1_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=1},
  {id:'lightning_seq_1',    sec:'lightning', icon:'💧', tier:'bronze',   nameKey:'ach_lightning_seq_1_name',    descKey:'ach_lightning_seq_1_desc',    check:(s)=>s.longestCorrectSequence>=5},
  {id:'lightning_seq_2',    sec:'lightning', icon:'⚡', tier:'silver',   nameKey:'ach_lightning_seq_2_name',    descKey:'ach_lightning_seq_2_desc',    check:(s)=>s.longestCorrectSequence>=10},
  {id:'lightning_seq_3',    sec:'lightning', icon:'🌩️', tier:'platinum', nameKey:'ach_lightning_seq_3_name',    descKey:'ach_lightning_seq_3_desc',    check:(s)=>(s.longestCorrectSequenceMedHard||0)>=15},
  {id:'lightning_seq_4',    sec:'lightning', icon:'👑', tier:'diamond',  nameKey:'ach_lightning_seq_4_name',    descKey:'ach_lightning_seq_4_desc',    check:(s)=>(s.longestCorrectSequenceMedHard||0)>=20},
  {id:'lightning_streak_1', sec:'lightning', icon:'✨', tier:'bronze',   nameKey:'ach_lightning_streak_1_name', descKey:'ach_lightning_streak_1_desc', check:(s)=>s.longestLightningStreak>=3},
  {id:'lightning_streak_2', sec:'lightning', icon:'🔆', tier:'silver',   nameKey:'ach_lightning_streak_2_name', descKey:'ach_lightning_streak_2_desc', check:(s)=>s.longestLightningStreak>=10},
  {id:'lightning_streak_3', sec:'lightning', icon:'🏆', tier:'platinum', nameKey:'ach_lightning_streak_3_name', descKey:'ach_lightning_streak_3_desc', check:(s)=>s.longestLightningStreak>=25},
  {id:'lightning_games_2',  sec:'lightning', icon:'🎲', tier:'silver',   nameKey:'ach_lightning_games_2_name',  descKey:'ach_lightning_games_2_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=10},
  {id:'lightning_games_3',  sec:'lightning', icon:'🌟', tier:'gold',     nameKey:'ach_lightning_games_3_name',  descKey:'ach_lightning_games_3_desc',  check:(s,h)=>['easy','medium','hard'].reduce((a,d)=>a+h.lightning[d].plays,0)>=50},
  {id:'lightning_score_1',  sec:'lightning', icon:'🔋', tier:'bronze',   nameKey:'ach_lightning_score_1_name',  descKey:'ach_lightning_score_1_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=500},
  {id:'lightning_score_2',  sec:'lightning', icon:'⚡', tier:'silver',   nameKey:'ach_lightning_score_2_name',  descKey:'ach_lightning_score_2_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=2000},
  {id:'lightning_score_3',  sec:'lightning', icon:'🌩️', tier:'gold',     nameKey:'ach_lightning_score_3_name',  descKey:'ach_lightning_score_3_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=5000},
  {id:'lightning_score_4',  sec:'lightning', icon:'💥', tier:'platinum', nameKey:'ach_lightning_score_4_name',  descKey:'ach_lightning_score_4_desc',  check:(s,h)=>Math.max(0,...['easy','medium','hard'].map(d=>h.lightning[d].bestPrecision||0))>=15000},
  // ── SPEED ────────────────────────────────────────────────────────────────────
  {id:'speed_score_1', sec:'speed', icon:'🏃', tier:'bronze',   nameKey:'ach_speed_score_1_name', descKey:'ach_speed_score_1_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=15)},
  {id:'speed_score_2', sec:'speed', icon:'🚗', tier:'silver',   nameKey:'ach_speed_score_2_name', descKey:'ach_speed_score_2_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=30)},
  {id:'speed_score_3', sec:'speed', icon:'✈️', tier:'gold',     nameKey:'ach_speed_score_3_name', descKey:'ach_speed_score_3_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=50)},
  {id:'speed_score_4', sec:'speed', icon:'🚀', tier:'platinum',  nameKey:'ach_speed_score_4_name', descKey:'ach_speed_score_4_desc', check:(s)=>(s.speedScoreHistory||[]).some(v=>v>=75)},
  {id:'speed_streak_1',sec:'speed', icon:'🎯', tier:'bronze',   nameKey:'ach_speed_streak_1_name',descKey:'ach_speed_streak_1_desc',check:(s)=>s.longestSpeedStreak>=10},
  {id:'speed_streak_2',sec:'speed', icon:'💫', tier:'silver',   nameKey:'ach_speed_streak_2_name',descKey:'ach_speed_streak_2_desc',check:(s)=>s.longestSpeedStreak>=20},
  {id:'speed_streak_3',sec:'speed', icon:'🌠', tier:'gold',     nameKey:'ach_speed_streak_3_name',descKey:'ach_speed_streak_3_desc',check:(s)=>s.longestSpeedStreak>=40},
  {id:'hard_1',        sec:'speed', icon:'💪', tier:'bronze',   nameKey:'ach_hard_1_name',        descKey:'ach_hard_1_desc',        check:(s,h)=>h.speed.hard.plays>=1},
  {id:'hard_2',        sec:'speed', icon:'🦾', tier:'diamond', nameKey:'ach_hard_2_name',        descKey:'ach_hard_2_desc',        check:(s,h)=>h.speed.hard.score>=30},
  // ── PRACTICE ─────────────────────────────────────────────────────────────────
  {id:'practice_1',       sec:'practice', icon:'📖', tier:'bronze', nameKey:'ach_practice_1_name',       descKey:'ach_practice_1_desc',       check:(s)=>(s.modeAnswers.practice||0)>=30},
  {id:'practice_2',       sec:'practice', icon:'📚', tier:'silver', nameKey:'ach_practice_2_name',       descKey:'ach_practice_2_desc',       check:(s)=>(s.modeAnswers.practice||0)>=150},
  {id:'practice_3',       sec:'practice', icon:'🎓', tier:'gold',   nameKey:'ach_practice_3_name',       descKey:'ach_practice_3_desc',       check:(s)=>(s.modeAnswers.practice||0)>=750},
  {id:'practice_streak_1',sec:'practice', icon:'🔗', tier:'bronze', nameKey:'ach_practice_streak_1_name',descKey:'ach_practice_streak_1_desc',check:(s)=>s.longestPracticeStreak>=5},
  {id:'practice_streak_2',sec:'practice', icon:'⛓️', tier:'silver', nameKey:'ach_practice_streak_2_name',descKey:'ach_practice_streak_2_desc',check:(s)=>s.longestPracticeStreak>=15},
  {id:'practice_streak_3',sec:'practice', icon:'🧲', tier:'gold',   nameKey:'ach_practice_streak_3_name',descKey:'ach_practice_streak_3_desc',check:(s)=>s.longestPracticeStreak>=30},
  {id:'tips_1',           sec:'practice', icon:'💡', tier:'bronze', nameKey:'ach_tips_1_name',           descKey:'ach_tips_1_desc',           check:(s)=>(s.tipSessions||0)>=1},
  {id:'tips_2',           sec:'practice', icon:'🧩', tier:'silver', nameKey:'ach_tips_2_name',           descKey:'ach_tips_2_desc',           check:(s)=>(s.tipSessions||0)>=5},
  {id:'tips_3',           sec:'practice', icon:'🎭', tier:'gold',   nameKey:'ach_tips_3_name',           descKey:'ach_tips_3_desc',           check:(s)=>(s.tipSessions||0)>=10},
  // ── MASTERY ──────────────────────────────────────────────────────────────────
  {id:'level_1', sec:'mastery', icon:'🌱', tier:'bronze',   nameKey:'ach_level_1_name', descKey:'ach_level_1_desc', check:(s,h,x)=>x.level>=5},
  {id:'level_2', sec:'mastery', icon:'🌿', tier:'silver',   nameKey:'ach_level_2_name', descKey:'ach_level_2_desc', check:(s,h,x)=>x.level>=10},
  {id:'level_3', sec:'mastery', icon:'🌳', tier:'gold',     nameKey:'ach_level_3_name', descKey:'ach_level_3_desc', check:(s,h,x)=>x.level>=25},
  {id:'level_4', sec:'mastery', icon:'🔮', tier:'platinum', nameKey:'ach_level_4_name', descKey:'ach_level_4_desc', check:(s,h,x)=>x.level>=50},
  {id:'level_5', sec:'mastery', icon:'👑', tier:'diamond',  nameKey:'ach_level_5_name', descKey:'ach_level_5_desc', check:(s,h,x)=>x.level>=100},
  {id:'level_6', sec:'mastery', icon:'🌌', tier:'diamond',  nameKey:'ach_level_6_name', descKey:'ach_level_6_desc', check:(s,h,x)=>x.level>=1000},
  // ── DAILY CHALLENGE ──────────────────────────────────────────────────────────
  {id:'daily_1',      sec:'daily', icon:'📅', tier:'bronze',   nameKey:'ach_daily_1_name',      descKey:'ach_daily_1_desc',      check:(s)=>(s.dailyCompleted||0)>=1},
  {id:'daily_2',      sec:'daily', icon:'🗓️', tier:'silver',   nameKey:'ach_daily_2_name',      descKey:'ach_daily_2_desc',      check:(s)=>(s.dailyCompleted||0)>=7},
  {id:'daily_3',      sec:'daily', icon:'📆', tier:'gold',     nameKey:'ach_daily_3_name',      descKey:'ach_daily_3_desc',      check:(s)=>(s.dailyCompleted||0)>=30},
  {id:'daily_streak_1',sec:'daily',icon:'🔥', tier:'silver',   nameKey:'ach_daily_streak_1_name',descKey:'ach_daily_streak_1_desc',check:(s)=>(s.dailyBestStreak||0)>=3},
  {id:'daily_streak_2',sec:'daily',icon:'🔥', tier:'gold',     nameKey:'ach_daily_streak_2_name',descKey:'ach_daily_streak_2_desc',check:(s)=>(s.dailyBestStreak||0)>=7},
  {id:'daily_streak_3',sec:'daily',icon:'🌋', tier:'platinum', nameKey:'ach_daily_streak_3_name',descKey:'ach_daily_streak_3_desc',check:(s)=>(s.dailyBestStreak||0)>=30},
  {id:'daily_streak_4',sec:'daily',icon:'💎', tier:'diamond',  nameKey:'ach_daily_streak_4_name',descKey:'ach_daily_streak_4_desc',check:(s)=>(s.dailyBestStreak||0)>=365},
  {id:'daily_speed_1', sec:'daily',icon:'⚡', tier:'silver',   nameKey:'ach_daily_speed_1_name', descKey:'ach_daily_speed_1_desc', check:(s)=>(s.dailyBestTime||Infinity)<=30000},
  {id:'daily_speed_2', sec:'daily',icon:'🚀', tier:'gold',     nameKey:'ach_daily_speed_2_name', descKey:'ach_daily_speed_2_desc', check:(s)=>(s.dailyBestTime||Infinity)<=25000},
  {id:'daily_speed_3', sec:'daily',icon:'💫', tier:'platinum', nameKey:'ach_daily_speed_3_name', descKey:'ach_daily_speed_3_desc', check:(s)=>(s.dailyBestTime||Infinity)<=20000},
  // ── CAMPAIGN ─────────────────────────────────────────────────────────────────
  {id:'cmp_1',       sec:'campaign', icon:'🗺️', tier:'bronze',   nameKey:'ach_cmp_1_name',       descKey:'ach_cmp_1_desc',       check:(s)=>(s.campaignCompleted||0)>=1},
  {id:'cmp_5',       sec:'campaign', icon:'⚔️',  tier:'bronze',   nameKey:'ach_cmp_5_name',       descKey:'ach_cmp_5_desc',       check:(s)=>(s.campaignCompleted||0)>=5},
  {id:'cmp_10',      sec:'campaign', icon:'🏅',  tier:'silver',   nameKey:'ach_cmp_10_name',      descKey:'ach_cmp_10_desc',      check:(s)=>(s.campaignCompleted||0)>=10},
  {id:'cmp_25',      sec:'campaign', icon:'🌟',  tier:'silver',   nameKey:'ach_cmp_25_name',      descKey:'ach_cmp_25_desc',      check:(s)=>(s.campaignCompleted||0)>=25},
  {id:'cmp_50',      sec:'campaign', icon:'🔥',  tier:'gold',     nameKey:'ach_cmp_50_name',      descKey:'ach_cmp_50_desc',      check:(s)=>(s.campaignCompleted||0)>=50},
  {id:'cmp_75',      sec:'campaign', icon:'💪',  tier:'platinum', nameKey:'ach_cmp_75_name',      descKey:'ach_cmp_75_desc',      check:(s)=>(s.campaignCompleted||0)>=75},
  {id:'cmp_100',     sec:'campaign', icon:'💎',  tier:'diamond',  nameKey:'ach_cmp_100_name',     descKey:'ach_cmp_100_desc',     check:(s)=>(s.campaignCompleted||0)>=100},
  {id:'cmp_boss_1',  sec:'campaign', icon:'👊',  tier:'silver',   nameKey:'ach_cmp_boss_1_name',  descKey:'ach_cmp_boss_1_desc',  check:(s)=>(s.campaignBossesBeaten||0)>=1},
  {id:'cmp_boss_5',  sec:'campaign', icon:'👑',  tier:'gold',     nameKey:'ach_cmp_boss_5_name',  descKey:'ach_cmp_boss_5_desc',  check:(s)=>(s.campaignBossesBeaten||0)>=5},
  {id:'cmp_boss_10', sec:'campaign', icon:'🏆',  tier:'platinum', nameKey:'ach_cmp_boss_10_name', descKey:'ach_cmp_boss_10_desc', check:(s)=>(s.campaignBossesBeaten||0)>=10},
  {id:'cmp_perfect_3', sec:'campaign', icon:'🎯', tier:'silver',  nameKey:'ach_cmp_perfect_3_name',  descKey:'ach_cmp_perfect_3_desc',  check:(s)=>(s.campaignPerfectLevels||0)>=3},
  {id:'cmp_perfect_10',sec:'campaign', icon:'✨', tier:'gold',    nameKey:'ach_cmp_perfect_10_name', descKey:'ach_cmp_perfect_10_desc', check:(s)=>(s.campaignPerfectLevels||0)>=10},
  {id:'cmp_perfect_25',sec:'campaign', icon:'🌠', tier:'platinum',nameKey:'ach_cmp_perfect_25_name', descKey:'ach_cmp_perfect_25_desc', check:(s)=>(s.campaignPerfectLevels||0)>=25},
];

// Earned achievements set (ids)
let earnedAchievements=new Set();
let achToastTimer=null;
let _pendingAchToast=null;

function _doShowAchToast(a){
  const el=document.getElementById('ach-toast');
  document.getElementById('ach-toast-icon').textContent=a.icon;
  document.getElementById('ach-toast-name').textContent=t(a.nameKey);
  el.classList.add('show');
  if(achToastTimer)clearTimeout(achToastTimer);
  achToastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}

function checkAchievements(silent = false){
  let newlyEarned=[];
  for(const a of ACHIEVEMENTS){
    if(earnedAchievements.has(a.id))continue;
    try{
      if(a.check(stats,hs,xp)){
        earnedAchievements.add(a.id);
        newlyEarned.push(a);
      }
    }catch(e){}
  }
  if(newlyEarned.length>0 && !silent){
    showAchToast(newlyEarned[newlyEarned.length-1]);
  }
}

function showAchToast(a){
  // Queue if XP toast is currently showing, otherwise fire immediately
  const xpEl=document.getElementById('xp-toast');
  if(xpEl&&xpEl.classList.contains('show')){
    _pendingAchToast=a;
  } else {
    _doShowAchToast(a);
  }
}

let _errToastTimer=null;
function showErrToast(msg){
  const el=document.getElementById('err-toast');
  if(!el)return;
  el.textContent=msg;
  el.classList.add('show');
  if(_errToastTimer)clearTimeout(_errToastTimer);
  _errToastTimer=setTimeout(()=>el.classList.remove('show'),3500);
}

function renderAchievements(){
  const el=document.getElementById('ach-content');
  if(!el)return;

  const sections=[
    {key:'general', label:'ach_sec_general'},
    {key:'lightning',label:'ach_sec_lightning'},
    {key:'speed',   label:'ach_sec_speed'},
    {key:'practice',label:'ach_sec_practice'},
    {key:'daily',    label:'ach_sec_daily'},
    {key:'campaign', label:'ach_sec_campaign'},
    {key:'mastery',  label:'ach_sec_mastery'},
  ];

  const tierOrder={bronze:1,silver:2,gold:3,platinum:4,diamond:5};
  const tierLabel={bronze:'ach_tier_bronze',silver:'ach_tier_silver',gold:'ach_tier_gold',platinum:'ach_tier_platinum',diamond:'ach_tier_diamond'};

  // Count medals by tier
  const medalCount={bronze:0,silver:0,gold:0,platinum:0,diamond:0};
  const medalTotal={bronze:0,silver:0,gold:0,platinum:0,diamond:0};
  ACHIEVEMENTS.forEach(a=>{
    medalTotal[a.tier]=(medalTotal[a.tier]||0)+1;
    if(earnedAchievements.has(a.id))medalCount[a.tier]=(medalCount[a.tier]||0)+1;
  });
  const medalColor={bronze:'#cd7f32',silver:'#9aa0a6',gold:'#f9ab00',platinum:'#47b3ff',diamond:'#e8ff47'};
  const medalRowEl=document.getElementById('ach-medal-row');
  if(medalRowEl){
    medalRowEl.innerHTML=['bronze','silver','gold','platinum','diamond'].map(tier=>`
      <div style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:4px 0;">
        <div style="width:22px;height:22px;border-radius:50%;background:${medalColor[tier]};box-shadow:0 0 8px ${medalColor[tier]}55;flex-shrink:0;"></div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:17px;line-height:1;color:${medalColor[tier]};">${medalCount[tier]||0}<span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);font-weight:400"> /${medalTotal[tier]}</span></div>
        <div style="font-family:'DM Mono',monospace;font-size:8px;color:var(--muted2);text-transform:uppercase;letter-spacing:.5px;text-align:center;">${t('ach_tier_'+tier)}</div>
      </div>`).join('');
  }

  let totalEarned=0,totalAll=ACHIEVEMENTS.length;
  ACHIEVEMENTS.forEach(a=>{if(earnedAchievements.has(a.id))totalEarned++;});

  // Update hero progress bar
  const pct=totalAll>0?Math.round(totalEarned/totalAll*100):0;
  document.getElementById('ach-bar-fill').style.width=pct+'%';
  document.getElementById('ach-progress-label').textContent=`${totalEarned} / ${totalAll}`;

  el.innerHTML=sections.map(sec=>{
    const achs=ACHIEVEMENTS.filter(a=>a.sec===sec.key)
      .sort((a,b)=>tierOrder[a.tier]-tierOrder[b.tier]);
    if(!achs.length)return'';
    return`<div class="ach-section-title">${t(sec.label)}</div>
    <div class="ach-list">
      ${achs.map(a=>{
        const earned=earnedAchievements.has(a.id);
        // Mini progress for numeric achievements (show current vs target)
        const prog=getAchProgress(a);
        return`<div class="ach-card ${earned?'unlocked':'locked'}">
          <div class="ach-badge">${earned?(a.id==='daily_streak_3'?'🔵':a.icon):'🔒'}</div>
          <div class="ach-info">
            <div class="ach-name">${t(a.nameKey)}</div>
            <div class="ach-desc">${t(a.descKey)}</div>
            <div class="ach-tier ${a.tier}">${t(tierLabel[a.tier])}</div>
          </div>
          <div class="ach-right">
            ${earned
              ?`<div class="ach-check">✅</div>`
              :`${prog!==null?`<div class="ach-prog-mini">${prog.cur}${prog.suffix||''} / ${prog.max}${prog.suffix||''}</div><div class="ach-mini-bar"><div class="ach-mini-bar-fill" style="width:${Math.min(100,Math.round(prog.cur/prog.max*100))}%"></div></div>`:''}
            `}
          </div>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

function getAchProgress(a){
  // Returns {cur, max} for achievements that have numeric progress, null otherwise
  const id=a.id;
  if(id==='answers_1')return{cur:stats.totalCorrect,max:30};
  if(id==='answers_2')return{cur:stats.totalCorrect,max:100};
  if(id==='answers_3')return{cur:stats.totalCorrect,max:250};
  if(id==='answers_4')return{cur:stats.totalCorrect,max:1000};
  if(id==='answers_5')return{cur:stats.totalCorrect,max:2500};
  if(id==='answers_6')return{cur:stats.totalCorrect,max:10000};
  if(id==='time_1')return{cur:Math.floor(stats.totalPlayTime/60),max:5};
  if(id==='time_2')return{cur:Math.floor(stats.totalPlayTime/60),max:30};
  if(id==='time_3')return{cur:Math.floor(stats.totalPlayTime/60),max:120};
  if(id==='time_4')return{cur:Math.floor(stats.totalPlayTime/60),max:1200};
  if(id==='time_5')return{cur:Math.floor(stats.totalPlayTime/60),max:3000};
  if(id==='accuracy_1'||id==='accuracy_2'||id==='accuracy_3'){
    // Two-phase progress: first reach min answers, then reach target accuracy
    const minAnswers={accuracy_1:50,accuracy_2:100,accuracy_3:200};
    const target={accuracy_1:80,accuracy_2:90,accuracy_3:95};
    const min=minAnswers[id];
    if(stats.totalAnswers<min){
      // Phase 1: show answer count progress toward minimum
      return{cur:stats.totalAnswers,max:min,suffix:' ans'};
    }
    // Phase 2: show accuracy % progress toward target
    const acc=stats.totalAnswers>0?Math.round(stats.totalCorrect/stats.totalAnswers*100):0;
    return{cur:acc,max:target[id],suffix:'%'};
  }
  if(id==='lightning_seq_1')return{cur:stats.longestCorrectSequence,max:5};
  if(id==='lightning_seq_2')return{cur:stats.longestCorrectSequence,max:10};
  if(id==='lightning_seq_3')return{cur:stats.longestCorrectSequenceMedHard||0,max:15};
  if(id==='lightning_seq_4')return{cur:stats.longestCorrectSequenceMedHard||0,max:20};
  if(id==='lightning_streak_1')return{cur:stats.longestLightningStreak,max:3};
  if(id==='lightning_streak_2')return{cur:stats.longestLightningStreak,max:10};
  if(id==='lightning_streak_3')return{cur:stats.longestLightningStreak,max:25};
  if(id==='lightning_games_1'||id==='lightning_games_2'||id==='lightning_games_3'){
    const total=['easy','medium','hard'].reduce((a,d)=>a+hs.lightning[d].plays,0);
    const req={lightning_games_1:1,lightning_games_2:10,lightning_games_3:50};
    return{cur:total,max:req[id]};
  }
  if(id==='lightning_score_1'||id==='lightning_score_2'||id==='lightning_score_3'||id==='lightning_score_4'){
    const best=Math.max(0,...['easy','medium','hard'].map(d=>hs.lightning[d].bestPrecision||0));
    const req={lightning_score_1:500,lightning_score_2:2000,lightning_score_3:5000,lightning_score_4:15000};
    return{cur:best,max:req[id]};
  }
  if(id==='speed_score_1')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:15};
  if(id==='speed_score_2')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:30};
  if(id==='speed_score_3')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:50};
  if(id==='speed_score_4')return{cur:Math.max(0,...(stats.speedScoreHistory||[0])),max:75};
  if(id==='speed_streak_1')return{cur:stats.longestSpeedStreak,max:10};
  if(id==='speed_streak_2')return{cur:stats.longestSpeedStreak,max:20};
  if(id==='speed_streak_3')return{cur:stats.longestSpeedStreak,max:40};
  if(id==='hard_1')return{cur:hs.speed.hard.plays,max:1};
  if(id==='hard_2')return{cur:hs.speed.hard.score,max:30};
  if(id==='practice_1')return{cur:stats.modeAnswers.practice||0,max:30};
  if(id==='practice_2')return{cur:stats.modeAnswers.practice||0,max:150};
  if(id==='practice_3')return{cur:stats.modeAnswers.practice||0,max:750};
  if(id==='practice_streak_1')return{cur:stats.longestPracticeStreak,max:5};
  if(id==='practice_streak_2')return{cur:stats.longestPracticeStreak,max:15};
  if(id==='practice_streak_3')return{cur:stats.longestPracticeStreak,max:30};
  if(id==='tips_1')return{cur:stats.tipSessions||0,max:1};
  if(id==='tips_2')return{cur:stats.tipSessions||0,max:5};
  if(id==='tips_3')return{cur:stats.tipSessions||0,max:10};
  if(id==='level_1')return{cur:xp.level,max:5};
  if(id==='level_2')return{cur:xp.level,max:10};
  if(id==='level_3')return{cur:xp.level,max:25};
  if(id==='level_4')return{cur:xp.level,max:50};
  if(id==='level_5')return{cur:xp.level,max:100};
  if(id==='level_6')return{cur:xp.level,max:1000};
  if(id==='cmp_1')return{cur:stats.campaignCompleted||0,max:1};
  if(id==='cmp_5')return{cur:stats.campaignCompleted||0,max:5};
  if(id==='cmp_10')return{cur:stats.campaignCompleted||0,max:10};
  if(id==='cmp_25')return{cur:stats.campaignCompleted||0,max:25};
  if(id==='cmp_50')return{cur:stats.campaignCompleted||0,max:50};
  if(id==='cmp_75')return{cur:stats.campaignCompleted||0,max:75};
  if(id==='cmp_100')return{cur:stats.campaignCompleted||0,max:100};
  if(id==='cmp_boss_1')return{cur:stats.campaignBossesBeaten||0,max:1};
  if(id==='cmp_boss_5')return{cur:stats.campaignBossesBeaten||0,max:5};
  if(id==='cmp_boss_10')return{cur:stats.campaignBossesBeaten||0,max:10};
  if(id==='cmp_perfect_3')return{cur:stats.campaignPerfectLevels||0,max:3};
  if(id==='cmp_perfect_10')return{cur:stats.campaignPerfectLevels||0,max:10};
  if(id==='cmp_perfect_25')return{cur:stats.campaignPerfectLevels||0,max:25};
  if(id==='daily_1')return{cur:stats.dailyCompleted||0,max:1};
  if(id==='daily_2')return{cur:stats.dailyCompleted||0,max:7};
  if(id==='daily_3')return{cur:stats.dailyCompleted||0,max:30};
  // Use live current streak so progress bar matches the badge
  const _liveStreak=getDailyStreak().count||0;
  if(id==='daily_streak_1')return{cur:_liveStreak,max:3};
  if(id==='daily_streak_2')return{cur:_liveStreak,max:7};
  if(id==='daily_streak_3')return{cur:_liveStreak,max:30};
  if(id==='daily_streak_4')return{cur:_liveStreak,max:365};
  return null;
}


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
    <div class="stats-grid-2">
      <div class="stat-card" style="border-color:rgba(77,255,180,.2)">
        <div style="font-size:11px;color:var(--success);font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">🏆 ${t('stat_most_correct')}</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1;margin-bottom:6px">${bestOpDisplay}</div>
        <div class="stat-sub" style="text-align:left;line-height:1.5">${bestOpSub}</div>
      </div>
      <div class="stat-card" style="border-color:rgba(255,77,107,.2)">
        <div style="font-size:11px;color:var(--error);font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">🎯 ${t('stat_most_wrong')}</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1;margin-bottom:6px">${worstOpDisplay}</div>
        <div class="stat-sub" style="text-align:left;line-height:1.5">${worstOpSub}</div>
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
    ${f!=='lightning'?`<div class="stats-grid-2">
      <div class="stat-card" style="border-color:rgba(77,255,180,.2)">
        <div style="font-size:11px;color:var(--success);font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">🏆 ${t('stat_most_correct')}</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1;margin-bottom:6px">${bestOpDisplay}</div>
        <div class="stat-sub" style="text-align:left;line-height:1.5">${bestOpSub}</div>
      </div>
      <div class="stat-card" style="border-color:rgba(255,77,107,.2)">
        <div style="font-size:11px;color:var(--error);font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">🎯 ${t('stat_most_wrong')}</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1;margin-bottom:6px">${worstOpDisplay}</div>
        <div class="stat-sub" style="text-align:left;line-height:1.5">${worstOpSub}</div>
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

// ══════════════════════════════════════════════════════════════════════════════
// Tips
// ══════════════════════════════════════════════════════════════════════════════
const TIPS=[
  // MULTIPLICATION
  {cat:'mul',title:{en:'Multiply by 5',nl:'Vermenigvuldigen met 5',es:'Multiplicar por 5'},
   body:{en:'Multiply by 10 and halve the result. Far faster than counting in fives.',nl:'Vermenigvuldig met 10 en deel door 2. Veel sneller dan optellen met stappen van 5.',es:'Multiplica por 10 y divide entre 2. Mucho más rápido que contar de cinco en cinco.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 9',nl:'Vermenigvuldigen met 9',es:'Multiplicar por 9'},
   body:{en:'Multiply by 10 and subtract the number once.',nl:'Vermenigvuldig met 10 en trek het getal er één keer af.',es:'Multiplica por 10 y resta el número una vez.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 11 (two digits)',nl:'Vermenigvuldigen met 11 (twee cijfers)',es:'Multiplicar por 11 (dos dígitos)'},
   body:{en:'Write the first digit, place the sum of both digits in the middle, write the last digit. If the middle sum is ≥ 10, add 1 to the first digit and keep only the units digit in the middle.',nl:'Schrijf het eerste cijfer, zet de som van beide cijfers in het midden, schrijf het laatste cijfer. Als de middelste som ≥ 10 is, tel 1 op bij het eerste cijfer en houd alleen het eenheidscijfer in het midden.',es:'Escribe el primer dígito, coloca la suma de ambos dígitos en el medio, escribe el último. Si la suma del medio es ≥ 10, suma 1 al primer dígito y conserva solo las unidades en el medio.'},
   ex:{en:'<span class="step">Simple (sum &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  middle = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Carry (sum ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  middle = 7+8 = <span class="hl-b">15</span>  (≥10 → carry!)\n→ first digit: 7+1 = <span class="hl-g">8</span>,  middle = <span class="hl-g">5</span>\n→ <span class="hl">858</span>',nl:'<span class="step">Eenvoudig (som &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  midden = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Onthouden (som ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  midden = 7+8 = <span class="hl-b">15</span>  (≥10 → onthoud!)\n→ eerste cijfer: 7+1 = <span class="hl-g">8</span>,  midden = <span class="hl-g">5</span>\n→ <span class="hl">858</span>',es:'<span class="step">Simple (suma &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  medio = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Con acarreo (suma ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  medio = 7+8 = <span class="hl-b">15</span>  (≥10 → ¡acarreo!)\n→ primer dígito: 7+1 = <span class="hl-g">8</span>,  medio = <span class="hl-g">5</span>\n→ <span class="hl">858</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 25',nl:'Vermenigvuldigen met 25',es:'Multiplicar por 25'},
   body:{en:'Divide by 4 (halve twice). Turns hard multiplication into simple division.',nl:'Deel door 4 (twee keer halveren). Maakt moeilijke vermenigvuldiging eenvoudig.',es:'Divide entre 4 (parte por la mitad dos veces). Convierte una multiplicación difícil en división simple.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Difference of squares',nl:'Verschil van kwadraten',es:'Diferencia de cuadrados'},
   body:{en:'a² − b² = (a+b)(a−b). Great for multiplying numbers equidistant from a round figure.',nl:'a² − b² = (a+b)(a−b). Handig voor getallen gelijk ver van een rond getal.',es:'a² − b² = (a+b)(a−b). Ideal para multiplicar números equidistantes de una cifra redonda.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 4',nl:'Vermenigvuldigen met 4',es:'Multiplicar por 4'},
   body:{en:'Double the number twice. Quicker than multiplying directly.',nl:'Verdubbel het getal twee keer.',es:'Dobla el número dos veces. Más rápido que multiplicar directamente.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 8',nl:'Vermenigvuldigen met 8',es:'Multiplicar por 8'},
   body:{en:'Double the number three times in a row. The mirror of dividing by 8.',nl:'Verdubbel het getal drie keer achter elkaar. Het spiegelbeeld van delen door 8.',es:'Dobla el número tres veces seguidas. El espejo de dividir entre 8.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Break numbers apart',nl:'Getallen opsplitsen',es:'Descomponer los números'},
   body:{en:'Split one factor into a round number plus a small remainder (distributive property).',nl:'Splits een factor op in een rond getal plus een kleine rest.',es:'Divide un factor en un número redondo más un resto pequeño (propiedad distributiva).'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>'},
   ops:['mul']},
  // ADDITION
  {cat:'add',title:{en:'Left-to-right addition',nl:'Van links naar rechts optellen',es:'Suma de izquierda a derecha'},
   body:{en:'Add from left to right in chunks — hundreds first, then tens, then units.',nl:'Tel op van links naar rechts: eerst honderden, dan tientallen, dan eenheden.',es:'Suma de izquierda a derecha: primero centenas, luego decenas, después unidades.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Round and adjust',nl:'Afronden en corrigeren',es:'Redondear y ajustar'},
   body:{en:'Round one number up to a multiple of 10, add, then subtract the difference.',nl:'Rond één getal af naar een tiental, tel op en trek het verschil er weer af.',es:'Redondea un número a la decena más cercana, suma y resta la diferencia.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Make tens / hundreds',nl:'Tientallen / honderden vormen',es:'Formar decenas / centenas'},
   body:{en:'Spot pairs that sum to 10 or 100 first, then add the rest.',nl:'Zoek eerst koppels die optellen tot 10 of 100, tel de rest daarna op.',es:'Busca pares que sumen 10 o 100 primero, luego suma el resto.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>'},
   ops:['add']},
  // SUBTRACTION
  {cat:'sub',title:{en:'Subtract by adding up',nl:'Aftrekken door op te tellen',es:'Restar sumando'},
   body:{en:'Count up from the smaller to the larger number — the way cashiers make change.',nl:'Tel op van het kleinere naar het grotere getal — zoals een kassier wisselgeld geeft.',es:'Cuenta hacia arriba desde el número menor al mayor — como un cajero dando cambio.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>'},
   ops:['sub']},
  {cat:'sub',title:{en:'Round and adjust (subtraction)',nl:'Afronden en corrigeren (aftrekken)',es:'Redondear y ajustar (resta)'},
   body:{en:'Round the subtracted number up to the nearest 10, subtract, then add back the difference.',nl:'Rond het af te trekken getal op naar het dichtstbijzijnde tiental, trek af en tel het verschil terug op.',es:'Redondea el número que se resta a la decena superior, resta y suma la diferencia de vuelta.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>'},
   ops:['sub']},
  {cat:'sub',title:{en:'Subtract near-multiples of 100',nl:'Bijna-veelvouden van 100 aftrekken',es:'Restar casi-múltiplos de 100'},
   body:{en:'When subtracting 98, 99, 101, 102 etc., subtract 100 and correct by ±1 or ±2.',nl:'Als je 98, 99, 101, 102 aftrekt: trek 100 af en corrigeer met ±1 of ±2.',es:'Al restar 98, 99, 101, 102: resta 100 y corrige con ±1 o ±2.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>'},
   ops:['sub']},
  // DIVISION
  {cat:'div',title:{en:'Divide by 5',nl:'Delen door 5',es:'Dividir entre 5'},
   body:{en:'Multiply by 2 then divide by 10.',nl:'Vermenigvuldig met 2 en deel dan door 10.',es:'Multiplica por 2 y luego divide entre 10.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Divide by 4',nl:'Delen door 4',es:'Dividir entre 4'},
   body:{en:'Halve the number twice.',nl:'Halveer het getal twee keer.',es:'Divide el número por la mitad dos veces.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Divide by 25',nl:'Delen door 25',es:'Dividir entre 25'},
   body:{en:'Multiply by 4 then divide by 100. The inverse of the multiply-by-25 trick.',nl:'Vermenigvuldig met 4 en deel dan door 100. Het omgekeerde van de maal-25-truc.',es:'Multiplica por 4 y luego divide entre 100. El inverso del truco de multiplicar por 25.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Simplify before dividing',nl:'Vereenvoudig vóór het delen',es:'Simplifica antes de dividir'},
   body:{en:'If both numbers share a common factor, divide both by it first. This turns a hard division into an easy one.',nl:'Als beide getallen een gemeenschappelijke deler hebben, deel beide er eerst door. Zo wordt een moeilijke deling eenvoudig.',es:'Si ambos números comparten un factor común, divídelos primero por ese factor. Convierte una división difícil en fácil.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">180 ÷ 15</span>\n→ both divisible by 5\n→ 36 ÷ 3 = <span class="hl">12</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">180 ÷ 15</span>\n→ beide deelbaar door 5\n→ 36 ÷ 3 = <span class="hl">12</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">180 ÷ 15</span>\n→ ambos divisibles entre 5\n→ 36 ÷ 3 = <span class="hl">12</span>'},
   ops:['div']},
  {cat:'gen',title:{en:'Divisibility shortcuts',nl:'Deelbaarheidsregels',es:'Atajos de divisibilidad'},
   body:{en:'Before dividing, check if the result will be a whole number. Div by 3: digit sum divisible by 3. Div by 9: digit sum divisible by 9. Div by 6: number is even AND digit sum divisible by 3.',nl:'Controleer vóór het delen of de uitkomst een geheel getal is. Door 3: cijfersom deelbaar door 3. Door 9: cijfersom deelbaar door 9. Door 6: even én cijfersom deelbaar door 3.',es:'Antes de dividir, comprueba si el resultado será un número entero. Entre 3: suma de dígitos divisible entre 3. Entre 9: suma de dígitos divisible entre 9. Entre 6: par Y suma de dígitos divisible entre 3.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">Will 324 ÷ 9 be a whole number?</span>\n→ digit sum: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → yes, result is whole\n→ 324 ÷ 9 = <span class="hl">36</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">Geeft 324 ÷ 9 een geheel getal?</span>\n→ cijfersom: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → ja, uitkomst is geheel\n→ 324 ÷ 9 = <span class="hl">36</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">¿324 ÷ 9 da un número entero?</span>\n→ suma de dígitos: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → sí, el resultado es entero\n→ 324 ÷ 9 = <span class="hl">36</span>'},
   ops:['div']},
  // PERCENTAGE
  {cat:'pct',title:{en:'The 1% anchor',nl:'Het 1%-anker',es:'El ancla del 1%'},
   body:{en:'Find 1% first (shift the decimal two places left), then scale to the percentage you need.',nl:'Bereken eerst 1% (schuif de komma twee plaatsen naar links) en vermenigvuldig daarna.',es:'Primero encuentra el 1% (mueve el decimal dos lugares a la izquierda), luego escala al porcentaje.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">7% of 350</span>\n→ 1% = 3.50\n→ 7% = 3.50 × 7 = <span class="hl">24.50</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">7% van 350</span>\n→ 1% = 3,50\n→ 7% = 3,50 × 7 = <span class="hl">24,50</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">7% de 350</span>\n→ 1% = 3,50\n→ 7% = 3,50 × 7 = <span class="hl">24,50</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'Flip the percentage',nl:'Percentage omdraaien',es:'Voltear el porcentaje'},
   body:{en:'x% of y = y% of x. Sometimes one direction is much easier to compute.',nl:'x% van y = y% van x. Soms is de ene richting veel makkelijker te berekenen.',es:'x% de y = y% de x. A veces una dirección es mucho más fácil de calcular.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">26% of 50</span>\n→ flip: 50% of 26\n→ half of 26 = <span class="hl">13</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">26% van 50</span>\n→ draai om: 50% van 26\n→ helft van 26 = <span class="hl">13</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">26% de 50</span>\n→ voltear: 50% de 26\n→ mitad de 26 = <span class="hl">13</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'Percentages via fractions',nl:'Procenten via breuken',es:'Porcentajes mediante fracciones'},
   body:{en:'Learn key equivalents: 25%=¼, 33%≈⅓, 12.5%=⅛, 37.5%=⅜, 66%≈⅔.',nl:'Ken de breuken: 25%=¼, 33%≈⅓, 12,5%=⅛, 37,5%=⅜, 66%≈⅔.',es:'Memoriza los equivalentes: 25%=¼, 33%≈⅓, 12,5%=⅛, 37,5%=⅜, 66%≈⅔.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">37.5% of 80</span>\n→ ⅜ of 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">37,5% van 80</span>\n→ ⅜ van 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">37,5% de 80</span>\n→ ⅜ de 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'10% as a building block',nl:'10% als bouwsteen',es:'10% como bloque base'},
   body:{en:'Find 10% quickly, then combine multiples to hit other percentages.',nl:'Bereken snel 10%, combineer veelvouden voor andere percentages.',es:'Calcula el 10% rápidamente, luego combina múltiplos para otros porcentajes.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">35% of 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">35% van 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">35% de 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>'},
   ops:['pct']},
  // GENERAL
  {cat:'gen',title:{en:'Estimation first',nl:'Eerst schatten',es:'Primero estima'},
   body:{en:'Round all numbers to 1 significant figure for a quick sanity check before computing.',nl:'Rond alle getallen af naar 1 significant cijfer voor een snelle controle.',es:'Redondea todos los números a 1 cifra significativa para una comprobación rápida.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">47 × 19</span>\n→ estimate: 50 × 20 = 1000\n→ exact: <span class="hl">893</span>  (close!)',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">47 × 19</span>\n→ schatting: 50 × 20 = 1000\n→ exact: <span class="hl">893</span>  (dichtbij!)',es:'<span class="step">Ejemplo:</span>  <span class="hl">47 × 19</span>\n→ estimado: 50 × 20 = 1000\n→ exacto: <span class="hl">893</span>  (¡cerca!)'},
   ops:['add','sub','mul','div','pct']},
  {cat:'add',title:{en:'Work with complements',nl:'Werken met complementen',es:'Trabajar con complementos'},
   body:{en:'The complement of a number to 100 is 100 − n. When two numbers together exceed 100, find how much one needs to reach 100, then add the leftover.',nl:'Het complement van een getal tot 100 is 100 − n. Als twee getallen samen meer dan 100 zijn, bereken hoeveel er nodig is om 100 te bereiken en tel de rest op.',es:'El complemento de un número a 100 es 100 − n. Cuando dos números juntos superan 100, calcula cuánto falta para llegar a 100 y suma el resto.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">63 + 78</span>\n→ 78 needs 22 to reach 100\n→ 63 − 22 = 41 left over\n→ 100 + 41 = <span class="hl">141</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">63 + 78</span>\n→ 78 heeft 22 nodig om 100 te bereiken\n→ 63 − 22 = 41 over\n→ 100 + 41 = <span class="hl">141</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">63 + 78</span>\n→ 78 necesita 22 para llegar a 100\n→ 63 − 22 = 41 sobrante\n→ 100 + 41 = <span class="hl">141</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Chunking large sums',nl:'Grote sommen in stukken',es:'Dividir sumas grandes'},
   body:{en:'Break both numbers into hundreds, tens and units. Add each chunk separately from left to right.',nl:'Breek beide getallen op in honderden, tientallen en eenheden. Tel elke groep afzonderlijk op van links naar rechts.',es:'Divide ambos números en centenas, decenas y unidades. Suma cada parte por separado de izquierda a derecha.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>'},
   ops:['add']},
  {cat:'sub',title:{en:'Chunking large differences',nl:'Grote aftrekkingen in stukken',es:'Restar en partes'},
   body:{en:'Break the subtracted number into chunks and subtract each piece one at a time.',nl:'Splits het af te trekken getal in stukken en trek elk stuk apart af.',es:'Divide el número que restas en partes y réstalas una a una.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>'},
   ops:['sub']},
  // NEW TIPS
  {cat:'mul',title:{en:'Multiply by 15',nl:'Vermenigvuldigen met 15',es:'Multiplicar por 15'},
   body:{en:'Multiply by 10, then add half of that result.',nl:'Vermenigvuldig met 10 en tel er dan de helft van bij op.',es:'Multiplica por 10 y luego suma la mitad de ese resultado.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ half of 240 = 120\n→ 240 + 120 = <span class="hl">360</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ helft van 240 = 120\n→ 240 + 120 = <span class="hl">360</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ mitad de 240 = 120\n→ 240 + 120 = <span class="hl">360</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply two numbers near 100',nl:'Twee getallen dicht bij 100 vermenigvuldigen',es:'Multiplicar dos números cercanos a 100'},
   body:{en:'Use the formula: (100+a)(100+b) = 10000 + 100(a+b) + ab, where a and b are the differences from 100.',nl:'Gebruik (100+a)(100+b) = 10000 + 100(a+b) + ab, waarbij a en b de afwijkingen van 100 zijn.',es:'Usa la fórmula: (100+a)(100+b) = 10000 + 100(a+b) + ab, donde a y b son las diferencias con 100.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>'},
   ops:['mul']},
  {cat:'add',title:{en:'Double and halve',nl:'Verdubbelen en halveren',es:'Doblar y dividir'},
   body:{en:'Double one number and halve the other so that one becomes a round number. Works best when one number is a multiple of 2.',nl:'Verdubbel één getal en halveer het andere zodat één ervan een rond getal wordt. Werkt het beste als één getal een veelvoud van 2 is.',es:'Dobla un número y divide el otro por la mitad para que uno se convierta en un número redondo. Funciona mejor cuando uno es múltiplo de 2.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">125 + 48</span>\n→ double 125 = 250, halve 48 = 24\n→ 250 + 24 = <span class="hl">274</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">125 + 48</span>\n→ verdubbel 125 = 250, halveer 48 = 24\n→ 250 + 24 = <span class="hl">274</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">125 + 48</span>\n→ dobla 125 = 250, divide 48 entre 2 = 24\n→ 250 + 24 = <span class="hl">274</span>'},
   ops:['add']},
  {cat:'sub',title:{en:'Subtract from 1000',nl:'Aftrekken van 1000',es:'Restar de 1000'},
   body:{en:'Subtract each digit from 9, except the last digit which you subtract from 10.',nl:'Trek elk cijfer af van 9, behalve het laatste dat je van 10 aftrekt.',es:'Resta cada dígito de 9, excepto el último que lo restas de 10.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>'},
   ops:['sub']},
  {cat:'div',title:{en:'Divide by 8',nl:'Delen door 8',es:'Dividir entre 8'},
   body:{en:'Halve three times in succession.',nl:'Halveer drie keer achter elkaar.',es:'Divide por la mitad tres veces seguidas.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Long division shortcut — factor the divisor',nl:'Lange deling — ontbind de deler',es:'División larga — factoriza el divisor'},
   body:{en:'If the divisor has easy factors, divide by each factor in turn instead of doing one hard division.',nl:'Als de deler makkelijke factoren heeft, deel dan achtereenvolgens door elke factor.',es:'Si el divisor tiene factores fáciles, divide por cada factor por turno en lugar de hacer una división difícil.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>'},
   ops:['div']},
  {cat:'gen',title:{en:'The "nice number" strategy',nl:'De "mooie getal"-strategie',es:'La estrategia del "número redondo"'},
   body:{en:'Before computing, ask: is either number close to 10, 100 or 1000? If yes, round to the nice number, compute, then correct by the difference.',nl:'Vraag vóór het rekenen: ligt een van de getallen dicht bij 10, 100 of 1000? Zo ja, rond af, reken, en corrigeer daarna met het verschil.',es:'Antes de calcular, pregúntate: ¿algún número está cerca de 10, 100 o 1000? Si es así, redondea, calcula y corrige después por la diferencia.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">× 99</span>  → use × 100, subtract once\n<span class="hl">+ 198</span> → use + 200, subtract 2\n<span class="hl">÷ 50</span>  → use ÷ 100, double the result',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">× 99</span>  → gebruik × 100, trek één keer af\n<span class="hl">+ 198</span> → gebruik + 200, trek 2 af\n<span class="hl">÷ 50</span>  → gebruik ÷ 100, verdubbel de uitkomst',es:'<span class="step">Ejemplo:</span>  <span class="hl">× 99</span>  → usa × 100, resta una vez\n<span class="hl">+ 198</span> → usa + 200, resta 2\n<span class="hl">÷ 50</span>  → usa ÷ 100, dobla el resultado'},
   ops:['add','sub','mul','div']},
  {cat:'gen',title:{en:'Cross-check your answer',nl:'Je antwoord kruiselings controleren',es:'Verificar la respuesta cruzadamente'},
   body:{en:'After computing, do a quick reverse check: if you got 48 for 6×8, verify 48÷6=8.',nl:'Na het berekenen, doe een snelle terugrekening: bij 6×8=48, verifieer 48÷6=8.',es:'Después de calcular, haz una verificación inversa rápida: si obtuviste 48 para 6×8, comprueba 48÷6=8.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ cross-check: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ controleer: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ verificar: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>'},
   ops:['mul','div']},
];

let currentTipFilter=new Set(['all']); // multi-select set; 'all' means show all

function renderTipsFilterBtns(){
  const cats=[
    {key:'all',cls:'f-all'},
    {key:'mul',cls:'f-mul'},{key:'div',cls:'f-div'},
    {key:'add',cls:'f-add'},{key:'sub',cls:'f-sub'},
    {key:'pct',cls:'f-pct'},{key:'gen',cls:'f-gen'},
  ];
  const filterKeys={all:'filter_all',mul:'filter_mul',div:'filter_div',add:'filter_add',sub:'filter_sub',pct:'filter_pct',gen:'filter_gen'};
  const el=document.getElementById('tips-filter-row');
  if(!el)return;
  const isAll=currentTipFilter.has('all');
  el.innerHTML=cats.map(c=>{
    const active=c.key==='all'?isAll:(!isAll&&currentTipFilter.has(c.key));
    return`<button class="tips-filter-btn ${c.cls}${active?' active':''}" onclick="setTipFilter('${c.key}')">${t(filterKeys[c.key])}</button>`;
  }).join('');
}

function setTipFilter(f){
  if(f==='all'){
    currentTipFilter=new Set(['all']);
  } else {
    currentTipFilter.delete('all');
    if(currentTipFilter.has(f)){
      currentTipFilter.delete(f);
      if(currentTipFilter.size===0) currentTipFilter=new Set(['all']);
    } else {
      currentTipFilter.add(f);
    }
  }
  renderTipsFilterBtns();
  renderTipsList();
}

function renderTipsList(){
  const el=document.getElementById('tips-list');
  if(!el)return;
  const catLabel={mul:t('filter_mul'),div:t('filter_div'),add:t('filter_add'),sub:t('filter_sub'),pct:t('filter_pct'),gen:t('filter_gen')};
  const isAll=currentTipFilter.has('all');
  const filtered=isAll?TIPS:TIPS.filter(tip=>currentTipFilter.has(tip.cat));
  // Update count badge
  const badge=document.getElementById('tips-count-badge');
  if(badge) badge.textContent=`${filtered.length} / ${TIPS.length} ${t('tips_count_label')}`;
  el.innerHTML=filtered.map((tip)=>{
    const realIdx=TIPS.indexOf(tip);
    const title=tip.title[lang]||tip.title.en;
    const body=tip.body[lang]||tip.body.en;
    const ex=tip.ex[lang]||tip.ex.en;
    return`<div class="tip-card" id="tipcard-${realIdx}">
      <div class="tip-card-inner">
        <div class="tip-header">
          <div class="tip-left">
            <span class="tip-tag ${tip.cat}">${catLabel[tip.cat]}</span>
            <div class="tip-title">${title}</div>
            <div class="tip-body">${body}</div>
          </div>
        </div>
        <pre class="tip-example">${ex}</pre>
        ${tip.cat!=='gen'?`<button class="tip-practice-btn" onclick="startTipPractice(${realIdx})">▶ ${t('tip_practice_this')}</button>`:''}
      </div>
    </div>`;
  }).join('');
}

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
    tipPractice.correct++;
    document.getElementById('tp-correct').textContent=tipPractice.correct;
    fb.textContent=t('check_correct');fb.className='feedback ok';
  }else{
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

// ══════════════════════════════════════════════════════════════════════════════
// LIGHTNING
// ══════════════════════════════════════════════════════════════════════════════
function startLightning(){
  const countRaw=parseInt(document.getElementById('l-count').value);
  const intervalRaw=parseInt(document.getElementById('l-interval').value);
  if(isNaN(countRaw)||countRaw<2||countRaw>20){
    document.getElementById('l-feedback').textContent=t('err_count_range');
    document.getElementById('l-feedback').style.color='var(--error)';
    return;
  }
  if(isNaN(intervalRaw)||intervalRaw<1||intervalRaw>20){
    document.getElementById('l-feedback').textContent=t('err_interval_range');
    document.getElementById('l-feedback').style.color='var(--error)';
    return;
  }
  const count=countRaw;
  const interval=intervalRaw;
  lightning.numbers=genLightningNumbers(count,diff.lightning);
  lightning.sum=lightning.numbers.reduce((a,b)=>a+b,0);
  lightning.count=count;lightning.interval=interval;lightning.abandoned=false;
  showScreen('screen-lightning-game');
  document.getElementById('l-score').textContent=lightning.score||0;
  document.getElementById('l-cumulative-display').textContent=fmtN(lightning.cumulativeScore||0);
  document.getElementById('l-answer-section').style.display='none';
  document.getElementById('l-feedback').textContent='';
  runLightningSequence();
}
function abandonLightning(){lightning.abandoned=true;lightning.score=0;lightning.sessionScore=0;flushPendingLevelUps();showScreen('screen-menu');}
function runLightningSequence(){
  const{numbers,count,interval}=lightning;
  const display=document.getElementById('l-display');
  const progBar=document.getElementById('l-progress-bar');
  const progText=document.getElementById('l-progress');
  function showNumber(idx){
    if(lightning.abandoned)return;
    if(idx>=count){
      display.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:16px;color:var(--muted);text-align:center;padding:40px 0;">${t('what_was_sum')}</div>`;
      document.getElementById('l-answer-section').style.display='block';
      const inp=document.getElementById('l-answer');inp.value='';inp.focus();return;
    }
    progText.textContent=`${idx+1}/${count}`;
    progBar.style.width=`${((idx+1)/count)*100}%`;
    display.innerHTML=`<div class="lightning-number">${numbers[idx]}</div>`;
    setTimeout(()=>{if(lightning.abandoned)return;display.innerHTML=`<div class="lightning-blank"></div>`;setTimeout(()=>showNumber(idx+1),200);},interval*1000);
  }
  showNumber(0);
}
function checkLightningAnswer(){
  const val=document.getElementById('l-answer').value;
  const correct=lightning.sum;
  const isRight=checkAns(val,correct);
  const d=diff.lightning;
  hs.lightning[d].plays++;
  // Track lightning play time (count * interval seconds)
  const secsPlayed=lightning.count*lightning.interval;
  stats.totalPlayTime+=secsPlayed;
  stats.modePlayTime.lightning=(stats.modePlayTime.lightning||0)+secsPlayed;
  // Record answer for stats
  recordAnswer('add',isRight,'lightning',d);
  // Always compute the precision score for this round (used for display even on wrong)
  const precisionScore=calcLightningPrecisionScore(lightning.count,lightning.interval,d);
  const penaltyScore=Math.round(precisionScore*0.4);
  if(isRight){
    lightning.score++;
    // Streak tracking
    if(lightning.score>stats.longestLightningStreak)stats.longestLightningStreak=lightning.score;
    lightning.sessionScore=precisionScore;
    lightning.cumulativeScore=Math.max(0,(lightning.cumulativeScore||0)+precisionScore);
    // Also keep legacy streak-based score in sync as a fallback
    if(lightning.score>hs.lightning[d].score)hs.lightning[d].score=lightning.score;
    // Track longest correctly-answered sequence (for achievements)
    if(lightning.count>stats.longestCorrectSequence)stats.longestCorrectSequence=lightning.count;
    if((d==='medium'||d==='hard')&&lightning.count>stats.longestCorrectSequenceMedHard)stats.longestCorrectSequenceMedHard=lightning.count;
    // XP: based on precision score
    const xpEarned=Math.max(1,Math.round(precisionScore*(GAME_CONFIG.XP_EVENT_MULTIPLIER||1)/3));
    gainXP(xpEarned);
  }else{
    // Record streak in history before resetting
    stats.lightningStreakHistory.push(lightning.score);
    if(stats.lightningStreakHistory.length>50)stats.lightningStreakHistory.shift();
    lightning.score=0;
    lightning.sessionScore=-penaltyScore;
    lightning.cumulativeScore=Math.max(0,(lightning.cumulativeScore||0)-penaltyScore);
  }
  // Update best record if cumulative score beats it
  if(lightning.cumulativeScore>(hs.lightning[d].bestPrecision||0)){
    hs.lightning[d].bestPrecision=lightning.cumulativeScore;
  }
  document.getElementById('l-score').textContent=lightning.score||0;
  document.getElementById('l-cumulative-display').textContent=fmtN(lightning.cumulativeScore||0);
  document.getElementById('lr-emoji').textContent=isRight?'🎉':'😔';
  document.getElementById('lr-title').textContent=isRight?t('correct'):t('not_quite');
  // Show precision score earned/lost this round + session total
  const penaltyDisplay=isRight?null:Math.round(precisionScore*0.4);
  document.getElementById('lr-score').textContent=isRight?`+${fmtN(precisionScore)}`:`-${fmtN(penaltyDisplay)}`;
  document.getElementById('lr-detail').textContent=isRight
    ?`${t('lightning_round_score')}: ${fmtN(precisionScore)} | ${t('lightning_total_score')}: ${fmtN(lightning.cumulativeScore||0)}`
    :`${t('answer_was')} ${correct} | ${t('lightning_total_score')}: ${fmtN(lightning.cumulativeScore||0)}`;
  showScreen('screen-lightning-result');
  resultScreenShownAt=Date.now();
  checkAchievements();
  flushPendingLevelUps();
  saveOpStats();
  saveGuestState();
}
function lightningKeepGoing(){startLightning();}
const lAns = document.getElementById('l-answer');
if (lAns) lAns.addEventListener('keydown', e => { if(e.key==='Enter') checkLightningAnswer(); });

// ══════════════════════════════════════════════════════════════════════════════
// SPEED
// ══════════════════════════════════════════════════════════════════════════════
// Returns the key used for per-duration HS (e.g. "easy_30", "medium_120").
// Duration is snapped to the nearest standard value so mid-game values don't create orphan keys.
function speedDurKey(d,durSecs){
  const snap=durSecs<=35?30:durSecs<=70?60:120;
  return(d||diff.speed)+'_'+snap;
}
function getSpeedDurHS(d,durSecs){
  const k=speedDurKey(d,durSecs);
  if (hs.speedDur[k] !== undefined) return hs.speedDur[k];
  if (durSecs === 120) return hs.speed[d]?.score || 0;
  return 0;
}
function setSpeedDurHS(d,durSecs,score){
  const k=speedDurKey(d,durSecs);
  if(hs.speedDur[k]===undefined||score>hs.speedDur[k])hs.speedDur[k]=score;
}
function startSpeed(){
  if(speed.timer)clearInterval(speed.timer);
  const _dur = (activeChallengeMode === 'normal') ? 120 : (speed.remaining || 120);
  speed.score=0;speed.remaining=_dur;speed.wrongStreak=0;stats.currentSpeedStreak=0;speed.waiting=false;
  speed.startedAt=Date.now(); // for timing validation
  speed.originalDur=_dur; // remember full duration for per-duration HS key
  speed.opBag=[];
  speed.gameSeed=Date.now()%0xFFFFFF; // store seed for dare challenge
  recentQs.speed=new Set(); // reset per game
  document.getElementById('s-score').textContent=0;
  // In challenge/competition mode the personal HS is irrelevant — show 0 so it never
  // appears to "reset" when the player moves between their normal games and challenges.
  document.getElementById('s-hs-display').textContent=activeChallengeMode==='challenge'?0:getSpeedDurHS(diff.speed,_dur);
  document.getElementById('s-feedback').textContent='';
  const _timerEl=document.getElementById('s-timer');
  if(_timerEl){const _m=Math.floor(_dur/60),_s=String(_dur%60).padStart(2,'0');_timerEl.textContent=`${_m}:${_s}`;_timerEl.className='hud-value';}
  showScreen('screen-speed-game');nextSpeedQ();
  // Update back button label based on mode
  const _lbl=document.getElementById('speed-back-label');
  if(_lbl)_lbl.textContent=(activeChallengeMode==='challenge'&&_activeCompId)?t('comp_group_title')||'Competition':t('main_menu');
  speed.timer=setInterval(()=>{
    speed.remaining--;stats.totalPlayTime++;stats.modePlayTime.speed=(stats.modePlayTime.speed||0)+1;
    if(speed.remaining%30===0)try{localStorage.setItem('numfly_op_stats',JSON.stringify({opCorrect:stats.opCorrect,opWrong:stats.opWrong,modeOpCorrect:stats.modeOpCorrect,modeOpWrong:stats.modeOpWrong,diffOpCorrect:stats.diffOpCorrect,diffOpWrong:stats.diffOpWrong,modeAnswers:stats.modeAnswers,modeCorrect:stats.modeCorrect,modePlayTime:stats.modePlayTime,longestLightningStreak:stats.longestLightningStreak||0,longestCorrectSequence:stats.longestCorrectSequence||0,longestSpeedStreak:stats.longestSpeedStreak||0,longestPracticeStreak:stats.longestPracticeStreak||0,speedScoreHistory:stats.speedScoreHistory||[],lightningStreakHistory:stats.lightningStreakHistory||[],totalWrong:stats.totalWrong||0,tipSessions:stats.tipSessions||0,dailyCompleted:stats.dailyCompleted||0,dailyBestStreak:stats.dailyBestStreak||0,dailyBestTime:stats.dailyBestTime||null,dailyWorstTime:stats.dailyWorstTime||null,hsLightningPlays:{easy:hs.lightning.easy.plays||0,medium:hs.lightning.medium.plays||0,hard:hs.lightning.hard.plays||0},hsSpeedPlays:{easy:hs.speed.easy.plays||0,medium:hs.speed.medium.plays||0,hard:hs.speed.hard.plays||0}}));}catch(e){}
    const m=Math.floor(speed.remaining/60),s=String(speed.remaining%60).padStart(2,'0');
    const el=document.getElementById('s-timer');
    el.textContent=`${m}:${s}`;
    el.className='hud-value'+(speed.remaining<=20?' danger':'');
    if(speed.remaining<=0)endSpeed(false);
  },1000);
}
function nextSpeedQ(){
  let p;
  if(activeChallengeMode==='challenge'&&challengeRng){
    // Challenge mode: use seeded RNG so all players get identical questions.
    // Pick op first (1 RNG call), then generate the problem (deterministic calls).
    // IMPORTANT: resume fast-forward (line ~6283) must replicate this exact pattern.
    const ops=['add','sub','mul','div','pct'];
    const op=ops[Math.floor(challengeRng()*ops.length)];
    p=genOneProblemSeeded(challengeRng,diff.speed,op);
  } else {
    const op=pickFromBag(speed.opBag,['add','sub','mul','div','pct']);
    p=genProblem(diff.speed,[op],'speed');
  }
  speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
  document.getElementById('s-question').textContent=p.q;
  document.getElementById('s-op-type').textContent=p.type;
  document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
  document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
  speed.answered=false;speed.waiting=false; // allow next answer
}
// Seeded version of genOneProblem — uses rng instead of Math.random
function genOneProblemSeeded(rng,level,op){
  const ri=(lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
  const r=RANGES[level]||RANGES.easy;
  if(op==='add'){const[lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);return{q:`${a} + ${b}`,ans:a+b,type:t('op_type_add'),op:'add'};}
  if(op==='sub'){const[lo,hi]=r.sub;let a,b,attempts2=0;do{a=ri(lo,hi);b=ri(lo,hi);if(a<b){const tmp=a;a=b;b=tmp;}attempts2++;}while(a===b&&attempts2<30);if(a===b){a=hi;b=lo;}return{q:`${a} − ${b}`,ans:a-b,type:t('op_type_sub'),op:'sub'};}
  if(op==='mul'){const[lo,hi]=r.mul,a=ri(lo,hi);const bMin=level==='easy'?2:level==='medium'?3:6;const bMax=level==='easy'?9:level==='medium'?12:15;const b=ri(bMin,bMax);return{q:`${a} × ${b}`,ans:a*b,type:t('op_type_mul'),op:'mul'};}
  if(op==='div'){const b=ri(r.divB[0],r.divB[1]),q=ri(r.divQ[0],r.divQ[1]),a=b*q;return{q:`${a} ÷ ${b}`,ans:q,type:t('op_type_div'),op:'div'};}
  // pct — use PCT_BASES_HARD for hard, PCT_BASES otherwise, to match genPct behaviour
  const bases=level==='hard'?PCT_BASES_HARD:(PCT_BASES[level]||PCT_BASES.easy);
  for(let i=0;i<50;i++){const p=PCT_NICE[Math.floor(rng()*PCT_NICE.length)],base=bases[Math.floor(rng()*bases.length)],ans=p*base/100;if(Number.isInteger(ans)&&ans>0)return{q:`${p}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};}
  return{q:`10% of 50`,ans:5,type:t('op_type_pct'),op:'pct'};
}
function checkSpeedAnswer(){
  if(speed.remaining<=0)return;
  if(speed.waiting)return; // block double-submit during question transition
  if(speed.answered)return; // block re-scoring the same question
  const val=document.getElementById('s-answer').value;
  if(!val.trim())return; // ignore empty submissions
  const fb=document.getElementById('s-feedback');
  const isRight=checkAns(val,speed.ans);
  const isFirstAttempt=speed.wrongStreak===0; // no wrong answers yet on this question
  
  // Only record stats on first attempt — subsequent retries don't affect global stats
  if(isFirstAttempt){
    recordAnswer(speed.currentOp,isRight,'speed',diff.speed);
  }
  
  if(isRight){
    speed.score++;stats.currentSpeedStreak++;
    if(stats.currentSpeedStreak>stats.longestSpeedStreak)stats.longestSpeedStreak=stats.currentSpeedStreak;
    document.getElementById('s-score').textContent=fmtN(speed.score);
    const d=diff.speed;
    
    // FIX: ALWAYS save duration-based high score and update UI, even during challenges
    setSpeedDurHS(d, speed.originalDur || 120, speed.score);
    document.getElementById('s-hs-display').textContent=getSpeedDurHS(d, speed.originalDur || 120);

    // Only update the global 120s personal highscore in normal (non-challenge) games
    if(activeChallengeMode!=='challenge'){
      if(speed.score>hs.speed[d].score){hs.speed[d].score=speed.score;}
    }
    
    fb.textContent=t('speed_correct');fb.className='feedback ok';
    speed.answered=true; // lock this question — already scored
    speed.waiting=true; // prevent double-submit until next question loads
    setTimeout(nextSpeedQ,350);
  }else{
    stats.currentSpeedStreak=0;speed.wrongStreak++;
    document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
    fb.textContent=speed.wrongStreak>=3?`${t('speed_hint')} ${Number.isInteger(speed.ans)?speed.ans:speed.ans.toFixed(2)}`:t('speed_wrong');
    fb.className='feedback bad';
  }
}
function _validateScore(score,startedAt,durationSec){
  // Reject scores that are physically impossible given elapsed time.
  // Minimum time per correct answer is ~1.5s (read + type + submit).
  // We allow up to 1 answer per 0.9s to be generous, but no more.
  if(!startedAt)return true; // no timestamp → allow (guest/edge case)
  const elapsed=(Date.now()-startedAt)/1000;
  const maxPossible=Math.ceil(Math.min(elapsed,durationSec)/0.9);
  if(score>maxPossible){
    console.warn(`[Numfly] Score ${score} rejected — only ${elapsed.toFixed(1)}s elapsed, max possible ${maxPossible}`);
    return false;
  }
  return true;
}
function endSpeed(goMenu){
  if(speed.timer){clearInterval(speed.timer);speed.timer=null;}
  if(goMenu){
    // Save mid-competition state so the player can resume
    if(activeChallengeMode==='challenge'&&activeChallengeId){
      try{
        localStorage.setItem('numfly_comp_resume_'+activeChallengeId,JSON.stringify({
          score:speed.score,remaining:speed.remaining,
          questionsAnswered:speed.score+(speed.wrongStreak||0) // approx questions seen
        }));
      }catch(e){}
    }
    activeChallengeMode='normal';
    checkAchievements();
    if(currentUser)scheduleSync();
    saveOpStats();
    saveGuestState();
    showScreen('screen-menu');
    return;
  }
  const d=diff.speed;hs.speed[d].plays++;
  stats.speedScoreHistory.push(speed.score);
  if(stats.speedScoreHistory.length>20)stats.speedScoreHistory.shift();
  // Update per-duration HS with the final score
  setSpeedDurHS(d,speed.originalDur||120,speed.score);
  document.getElementById('sr-score').textContent=fmtN(speed.score);
  document.getElementById('sr-detail').textContent=`${t('highscore_label')}: ${fmtN(getSpeedDurHS(d,speed.originalDur||120))}`;
  showScreen('screen-speed-result');
  resultScreenShownAt=Date.now();
  checkAchievements();
  flushPendingLevelUps();
}
const sAns = document.getElementById('s-answer');
if (sAns) sAns.addEventListener('keydown', e => { if(e.key==='Enter') checkSpeedAnswer(); });

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
    fb.textContent=t('check_correct');fb.className='feedback ok';
    stats.practiceCorrect=(stats.practiceCorrect||0)+1;
    stats.currentPracticeStreak=(stats.currentPracticeStreak||0)+1;
    if(stats.currentPracticeStreak>stats.longestPracticeStreak)stats.longestPracticeStreak=stats.currentPracticeStreak;
  } else {
    if(isPracticeFirstAttempt){
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
  
  // Haal de parameter uit de URL voor een nette adresbalk bij games, 
  // maar laat hem STAAN als we op de privacy pagina zitten.
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

// initApp() — called after the first auth event so UI never renders before
// session state is known. This eliminates the logged-out flash on reload.
function initApp(){
  if(_appInitialised)return;
  _appInitialised=true;
  detectAndSetLang();
  loadGuestState();
  applyTranslations();renderHSPanel();renderXPPanel();
  updateDailyCard();

  const gamePages = ['/lightning', '/speed', '/practice', '/campaign', '/daily', '/1v1'];
  
  if (gamePages.includes(window.location.pathname)) {
    document.body.classList.remove('on-menu');
  } else {
    document.body.classList.add('on-menu');
  }
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

  // Render UI on first event (before this, nothing is shown)
  initApp();

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

    // Do NOT await here — letting the callback be async blocks Supabase from
    // finishing its own session setup, causing a deadlock on all DB queries.
    // Fire and forget; overlay is hidden in finally().
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
  initApp();
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
    window.location.href = '/friends'; // Force actual page load
  }
  else if(type==='leaderboard'){
    closeSidebar();
    window.location.href = '/leaderboard'; // Force actual page load
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
            // redirectTo must be added to your Supabase Redirect Whitelist!
            queryParams: { access_type: 'offline', prompt: 'consent' }
        }
    });
    if (error) {
        const errEl = document.getElementById('auth-error');
        if (errEl) errEl.textContent = error.message;
    }
};
    if(error){
      const errEl=document.getElementById('auth-error');
      if(errEl)errEl.textContent=error.message;
    }
  };

async function doSignOut(){
  currentUser=null;
  currentProfile=null;
  _profileLoadPromise=null;
  _currentLoginUserId=null;
  // Stop any active game timers before clearing state
  if(practice&&practice.timer){clearInterval(practice.timer);practice.timer=null;}
  if(dailyState&&dailyState.timer){clearInterval(dailyState.timer);dailyState.timer=null;}
  if(dailyState&&dailyState.playTimeTimer){clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;}
  if(speed&&speed.timer){clearInterval(speed.timer);speed.timer=null;}
  // Reset all in-memory progress so the UI shows clean state
  ['easy','medium','hard'].forEach(d=>{
    hs.lightning[d]={score:0,plays:0,bestPrecision:0};
    hs.speed[d]={score:0,plays:0};
  });
  hs.speedDur = {}; 
  xp.total=0;xp.level=1;
  // Full stats reset — must match the initial stats object structure exactly
  Object.assign(stats,{
    totalAnswers:0,totalCorrect:0,totalWrong:0,totalPlayTime:0,
    speedScoreHistory:[],lightningStreakHistory:[],
    longestSpeedStreak:0,currentSpeedStreak:0,
    longestLightningStreak:0,longestCorrectSequence:0,
    practiceCorrect:0,practiceWrong:0,
    currentPracticeStreak:0,longestPracticeStreak:0,
    tipSessions:0,dailyCompleted:0,dailyBestStreak:0,dailyBestTime:Infinity,
    modeAnswers:{lightning:0,speed:0,practice:0,daily:0},
    modeCorrect:{lightning:0,speed:0,practice:0,daily:0},
    modePlayTime:{lightning:0,speed:0,practice:0,daily:0},
    opCorrect:{add:0,sub:0,mul:0,div:0,pct:0},
    opWrong:{add:0,sub:0,mul:0,div:0,pct:0},
    modeOpCorrect:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
    modeOpWrong:{lightning:{add:0,sub:0,mul:0,div:0,pct:0},speed:{add:0,sub:0,mul:0,div:0,pct:0},practice:{add:0,sub:0,mul:0,div:0,pct:0},daily:{add:0,sub:0,mul:0,div:0,pct:0}},
    diffOpCorrect:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
    diffOpWrong:{easy:{add:0,sub:0,mul:0,div:0,pct:0},medium:{add:0,sub:0,mul:0,div:0,pct:0},hard:{add:0,sub:0,mul:0,div:0,pct:0}},
  });
  earnedAchievements.clear();
  // Clear friends notification badge immediately on sign-out
  updateFriendsBadge(0);
  stopFriendPoller();
  // Load guest localStorage state (if any was saved before login)
  loadGuestState();
  clearDailyLocalState();
  try{localStorage.removeItem('numfly_campaign');}catch(e){}
  // Clear streak from localStorage too
  try{localStorage.removeItem('numfly_daily_streak');}catch(e){}
  try{localStorage.removeItem('numfly_op_stats');}catch(e){}
  // Hide streak badge immediately and clear all badge state
  const _sBadge=document.getElementById('daily-streak-badge');
  const _sCard=document.getElementById('daily-card');
  if(_sBadge){_sBadge.style.display='none';_sBadge.style.removeProperty('background');_sBadge.style.removeProperty('border');}
  if(_sCard){['tier-yellow','tier-blue','tier-purple','tier-crystal','tier-crown'].forEach(c=>_sCard.classList.remove(c));}
  // Clear streak count element to prevent flash on re-render
  const _sCount=document.getElementById('daily-streak-count');
  if(_sCount)_sCount.textContent='0';
  await sb.auth.signOut();
  renderXPPanel();renderHSPanel();
  updateSocialUI();
  closeSidebar();
  showScreen('screen-menu');
}
function clearDailyLocalState(){
  // Remove today's daily key (and yesterday's as cleanup)
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
  // Sync streak — take whichever is more recent (server or local)
  if(prog&&prog.daily_streak_count!=null){
    const local=getDailyStreak();
    const serverCount=prog.daily_streak_count||0;
    // DB stores date as a date type — Supabase returns it as "YYYY-MM-DD" string
    const serverDate=prog.daily_streak_last_date||prog.daily_streak_last||'';
    // Take the most accurate streak:
    // Server wins if: server date is newer, OR same date with higher/equal count
    // Also: if server count is simply higher (device had stale local), always take server
    // Check if server streak has expired (lastDate older than yesterday)
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
  if(document.getElementById('screen-achievements')?.classList.contains('active')) {
    renderAchievements();

  if(document.getElementById('screen-stats')) {
    renderStatsContent();
  }
  }
}
let syncTimer=null;
let _cloudDataLoaded=false; 
function scheduleSync(){
  if(!currentUser)return;
  if(syncTimer)clearTimeout(syncTimer);
  syncTimer=setTimeout(pushToSupabase,2000);
}

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
    // Mark as accepted (invited:false) so others see them as a participant
    _activeCompId=code;
    activeChallengeId=code;
    // Go straight to the game — don't show scoreboard before playing
    startSpeedWithCountdown();
  } else {
    // 1v1 race: clear comp ID so back button goes to Friends
    _activeCompId=null;
    startSpeedWithCountdown();
  }
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
let _challengeDiff='easy'; // used by race modal
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
let _activeCompId=null;
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
  const key=name.endsWith('s')?'h2h_their_wins_en':'h2h_their_wins_s';
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
let _lbScope='global'; // 'friends' or 'global' — default to global so it works without friends
let _lbKey='xp';
function setLbScope(scope,btn){
  _lbScope=scope;
  // Update inline-styled toggle buttons
  ['friends','global'].forEach(s=>{
    const b=document.getElementById('lb-scope-'+s);
    if(b){b.style.background=s===scope?'var(--accent)':'transparent';b.style.color=s===scope?'#000':'var(--muted)';}
  });
  // Clear immediately to prevent stale scope content flash
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
        val=(r[col]||0)+' 🔥';
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
// ── Seeded RNG for challenges ─────────────────────────────────────────────────
function seededRand(seed){let s=seed;return function(){s=(s*1664525+1013904223)&0xFFFFFFFF;return(s>>>0)/0x100000000;};}
function genSeededProblem(rng,level,usedSet){
  // Same 5-op pool as Speed mode — includes percentages
  const ops=['add','sub','mul','div','pct'];
  const r=RANGES[level]||RANGES.easy;
  const ri=(lo,hi)=>Math.floor(rng()*(hi-lo+1))+lo;
  const rPick=(arr)=>arr[Math.floor(rng()*arr.length)];
  // Retry loop: skip zero answers
  for(let attempt=0;attempt<30;attempt++){
    const op=ops[Math.floor(rng()*ops.length)];
    if(op==='add'){const[lo,hi]=r.add,a=ri(lo,hi),b=ri(lo,hi);const ans=a+b;if(ans===0)continue;return{q:`${a} + ${b}`,ans,op};}
    if(op==='sub'){const[lo,hi]=r.sub;let a=ri(lo,hi),b=ri(lo,hi);if(a<b)[a,b]=[b,a];if(a===b)continue;return{q:`${a} − ${b}`,ans:a-b,op};}
    if(op==='mul'){const[lo,hi]=r.mul,a=ri(lo,hi);const bMin=level==='easy'?2:level==='medium'?3:6;const bMax=level==='easy'?9:level==='medium'?12:15;const b=ri(bMin,bMax);if(a===0||b===0)continue;return{q:`${a} × ${b}`,ans:a*b,op};}
    if(op==='pct'){
      // Use PCT_BASES_HARD for hard difficulty so seeded challenges match non-seeded genPct behaviour
      const bases=level==='hard'?PCT_BASES_HARD:(PCT_BASES[level]||PCT_BASES.easy);
      let p=rPick(PCT_NICE),base=rPick(bases),ans=p*base/100;
      if(!Number.isInteger(ans)||ans===0)continue;
      return{q:`${p}% of ${base}`,ans,op:'pct'};
    }
    // div
    const b=ri(r.divB[0],r.divB[1]),q2=ri(r.divQ[0],r.divQ[1]);if(b===0||q2===0)continue;
    return{q:`${b*q2} ÷ ${b}`,ans:q2,op:'div'};
  }
  // Safe fallback
  return{q:`10% of 50`,ans:5,op:'pct'};
}

// ── Daily Challenge ──────────────────────────────────────────────────────────────
const DAILY_TOTAL=GAME_CONFIG.DAILY_QUEST_COUNT;
let dailyState={questions:[],answers:[],startTime:0,timer:null,current:0,done:false,timeMs:0};

function getDailyDateStr(){
  // Use UTC date so everyone worldwide gets the same challenge on the same calendar day
  const now=new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth()+1).padStart(2,'0')}-${String(now.getUTCDate()).padStart(2,'0')}`;
}
function getDailySeed(dateStr){
  // Deterministic seed from the date string
  let h=0;
  for(let i=0;i<dateStr.length;i++)h=(Math.imul(31,h)+dateStr.charCodeAt(i))|0;
  return Math.abs(h)||12345;
}
function genDailyQuestions(){
  const dateStr=getDailyDateStr();
  const seed=getDailySeed(dateStr);
  const rng=seededRand(seed);

  // ── Pick today's composition using the seed ────────────────────────────────
  // Rules: 10 total, min 3 easy, max 2 pct (no pct_hard), max 1 hard
  // Pick composition index from seeded rng → deterministic per day
  const COMPOSITIONS=[
    // [easy, pct_easy, medium, pct_medium, hard]
    [4, 0, 6, 0, 0],  // classic: 4e + 6m
    [5, 0, 5, 0, 0],  // easy-heavy
    [3, 1, 6, 0, 0],  // 1 pct easy
    [3, 1, 5, 1, 0],  // 1 pct easy + 1 pct medium
    [3, 2, 5, 0, 0],  // 2 pct easy
    [3, 1, 4, 1, 1],  // 1 pct easy + 1 pct medium + 1 hard
    [3, 0, 6, 0, 1],  // 1 hard
    [4, 1, 4, 0, 1],  // 1 pct easy + 1 hard
    [3, 1, 5, 0, 1],  // 1 pct easy + 1 hard
    [4, 0, 5, 0, 1],  // 1 hard no pct
    [3, 0, 5, 1, 1],  // 1 pct medium + 1 hard
  ].filter(c=>c[4]<=1); // ensure max 1 hard (safety)
  const ci=Math.floor(rng()*COMPOSITIONS.length);
  const[nEasy,nPctEasy,nMed,nPctMed,nHard]=COMPOSITIONS[ci];

  // Build levels array and shuffle with rng
  const levels=[
    ...Array(nEasy).fill('easy'),
    ...Array(nPctEasy).fill('pct_easy'),
    ...Array(nMed).fill('medium'),
    ...Array(nPctMed).fill('pct_medium'),
    ...Array(nHard).fill('hard'),
  ];
  // Fisher-Yates shuffle with seeded rng so order is also deterministic
  for(let i=levels.length-1;i>0;i--){
    const j=Math.floor(rng()*(i+1));
    [levels[i],levels[j]]=[levels[j],levels[i]];
  }
  const questions=[];
  const usedQs=new Set();
  for(let i=0;i<DAILY_TOTAL;i++){
    const level=levels[i];
    let p=null;
    let tries=0;
    do{
      if(level==='pct_easy'){
        // Easy pct: bases excluding 100 (too trivial)
        const pctBases=[10,20,25,40,50,60,80];
        const pctNice=[5,10,20,25,50];
        let ans=0;
        let attempts2=0;
        do{
          const pv=pctNice[Math.floor(rng()*pctNice.length)];
          const base=pctBases[Math.floor(rng()*pctBases.length)];
          ans=pv*base/100;
          p={q:`${pv}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
          attempts2++;
        }while((!Number.isInteger(ans)||ans===0||usedQs.has(p.q))&&attempts2<50);
      } else if(level==='pct_medium'){
        // Generate a seeded percentage question at medium difficulty directly — no wasted RNG calls
        const pctBases=[20,25,40,50,60,75,80,120,125,150,200];
        const pctNice=[5,8,10,12,15,20,25];
        let ans=0;let attempts2=0;
        do{
          const pv=pctNice[Math.floor(rng()*pctNice.length)];
          const base=pctBases[Math.floor(rng()*pctBases.length)];
          ans=pv*base/100;
          p={q:`${pv}% of ${base}`,ans,type:t('op_type_pct'),op:'pct'};
          attempts2++;
        }while((!Number.isInteger(ans)||ans===0||usedQs.has(p.q))&&attempts2<50);
      } else {
        p=genSeededProblem(rng,level);
      }
      tries++;
    }while((p.ans===0||usedQs.has(p.q))&&tries<30);
    usedQs.add(p.q);
    // Also block commutative pair (e.g. 6×5 if 5×6 was used)
    if(p.op==='mul'||p.op==='add'){
      const parts=p.q.split(p.op==='mul'?/×/:/\+/);
      if(parts.length===2){
        const flipped=p.op==='mul'?`${parts[1].trim()} × ${parts[0].trim()}`:`${parts[1].trim()} + ${parts[0].trim()}`;
        usedQs.add(flipped);
      }
    }
    questions.push({...p,level:level.replace('pct_','')});
  }
  return{questions,dateStr,seed};
}

async function checkDailyCompleted(){
  // Check localStorage first (fast, works for guests)
  const dateStr=getDailyDateStr();
  const localKey='numfly_daily_'+dateStr;
  const local=localStorage.getItem(localKey);
  if(local){try{return JSON.parse(local);}catch(e){localStorage.removeItem(localKey);}}
  // Check Supabase if logged in
  if(sb&&currentUser){
    try{
      const{data}=await sb.from('daily_challenge_entries').select('time_ms').eq('user_id',currentUser.id).eq('challenge_date',dateStr).maybeSingle();
      if(data)return data;
    }catch(e){}
  }
  return null;
}

async function openDailyChallenge(){
  const done=await checkDailyCompleted();
  if(done){
    // Already done — show result screen with leaderboard
    const ms=done.time_ms;
    document.getElementById('dc-result-time').innerHTML=formatDailyTime(ms,true);
    document.getElementById('screen-daily-result').dataset.dateStr=getDailyDateStr();
    showScreen('screen-daily-result');
    setDcTab(_dcCurrentTab, document.querySelectorAll('.dc-tab')[_dcCurrentTab==='global'?1:0]);
    const gp=document.getElementById('dc-guest-prompt');
    if(gp)gp.style.display=currentUser?'none':'flex';
    return;
  }
  // Check for in-progress session to resume
  const{questions,dateStr}=genDailyQuestions();
  let resumeFrom=0,resumeElapsed=0;
  try{
    let prog=null;try{const _raw=localStorage.getItem('numfly_daily_progress');if(_raw)prog=JSON.parse(_raw);}catch(e){localStorage.removeItem('numfly_daily_progress');}
    if(prog&&prog.dateStr===dateStr&&prog.current>0&&prog.current<DAILY_TOTAL){
      resumeFrom=prog.current;
      resumeElapsed=prog.elapsedMs||0;
    }
  }catch(e){}
  dailyState={questions,answers:[],startTime:0,timer:null,current:resumeFrom,done:false,timeMs:0,resumeElapsed};
  // Update date display
  const dateEl=document.getElementById('dc-date-display');
  if(dateEl){
    const d=new Date(dateStr+'T00:00:00Z');
    const locale=lang==='nl'?'nl-NL':lang==='es'?'es-ES':'en-US';
    dateEl.textContent=d.toLocaleDateString(locale,{month:'short',day:'numeric'});
  }
  // Skip countdown if resuming mid-session
  showScreen('screen-daily-game');
  if(resumeFrom>0){
    // Resuming — load the current question first so the card isn't blank
    loadDailyQuestion(false);
    const dcAnsEl=document.getElementById('dc-answer');
    dailyState.startTime=Date.now()-(dailyState.resumeElapsed||0);
    dailyState.timer=setInterval(()=>{
      const elapsed=(Date.now()-dailyState.startTime)/1000;
      const el=document.getElementById('dc-timer');
      if(el)el.textContent=elapsed.toFixed(1)+'s';
    },100);
    dailyState.playTimeTimer=setInterval(()=>{
      stats.totalPlayTime++;stats.modePlayTime.daily=(stats.modePlayTime.daily||0)+1;
    },1000);
    if(dcAnsEl){dcAnsEl.focus();}
    return;
  }
  const dcOverlay=document.createElement('div');
  dcOverlay.id='daily-countdown-overlay';
  dcOverlay.style.cssText='position:fixed;inset:0;background:var(--bg,#0d0d0d);z-index:9999;display:flex;align-items:center;justify-content:center;';
  dcOverlay.innerHTML=`<div style="text-align:center">
    <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px">📅 ${t('mode_daily')}</div>
    <div id="daily-countdown-num" style="font-family:'Bebas Neue',sans-serif;font-size:140px;color:var(--accent);line-height:1;letter-spacing:2px">3</div>
  </div>`;
  document.body.appendChild(dcOverlay);
  // Load question but keep answer disabled during countdown
  loadDailyQuestion(false); // false = don't start timer yet
  const dcAns=document.getElementById('dc-answer');
  if(dcAns){dcAns.disabled=true;dcAns.blur();}
  let dcCount=3;
  const dcNum=document.getElementById('daily-countdown-num');
  dailyState.countdownTimer=setInterval(()=>{
    dcCount--;
    if(dcCount<=0){
      clearInterval(dailyState.countdownTimer);dailyState.countdownTimer=null;
      dcOverlay.remove();
      // NOW start the timer
      dailyState.startTime=Date.now()-(dailyState.resumeElapsed||0);
      dailyState.timer=setInterval(()=>{
        const elapsed=(Date.now()-dailyState.startTime)/1000;
        const el=document.getElementById('dc-timer');
        if(el)el.textContent=elapsed.toFixed(1)+'s';
      },100);
      dailyState.playTimeTimer=setInterval(()=>{
        stats.totalPlayTime++;stats.modePlayTime.daily=(stats.modePlayTime.daily||0)+1;
      },1000);
      if(dcAns){dcAns.disabled=false;dcAns.style.opacity='1';dcAns.focus();}
    } else {
      if(dcNum){
        dcNum.textContent=dcCount;
        dcNum.style.transition='transform .15s';
        dcNum.style.transform='scale(1.2)';
        setTimeout(()=>{if(dcNum)dcNum.style.transform='scale(1)';},150);
      }
    }
  },1000);
}
function loadDailyQuestion(isFirst){
  const q=dailyState.questions[dailyState.current];
  document.getElementById('dc-current').textContent=dailyState.current+1;
  document.getElementById('dc-op-type').textContent=t('op_type_'+q.op)||q.op;
  document.getElementById('dc-question').textContent=q.q;
  document.getElementById('dc-answer').value='';
  document.getElementById('dc-feedback').textContent='';
  document.getElementById('dc-feedback').className='feedback';
  // Start/resume timer on first load
  // Timer is started by the countdown overlay (or directly if resuming without countdown)
  if(isFirst&&!dailyState.timer){
    dailyState.startTime=Date.now()-(dailyState.resumeElapsed||0);
    dailyState.timer=setInterval(()=>{
      const elapsed=(Date.now()-dailyState.startTime)/1000;
      const el=document.getElementById('dc-timer');
      if(el)el.textContent=elapsed.toFixed(1)+'s';
    },100);
    dailyState.playTimeTimer=setInterval(()=>{
      stats.totalPlayTime++;stats.modePlayTime.daily=(stats.modePlayTime.daily||0)+1;
    },1000);
  }
}
function checkDailyAnswer(){
  if(dailyState.done)return;
  const val=document.getElementById('dc-answer').value.trim();
  if(val==='')return;
  const q=dailyState.questions[dailyState.current];
  const correct=checkAns(val,q.ans);
  const fb=document.getElementById('dc-feedback');
  if(correct){
    fb.textContent=t('speed_correct');fb.className='feedback ok';
    dailyState.answers.push({correct:true,time:Date.now()-dailyState.startTime});
    // Only record as correct if not already recorded wrong for this question
    if(!dailyState.recordedWrong){
      recordAnswer(q.op,true,'daily',q.level||'medium');
    }
    dailyState.recordedWrong=false; // reset for next question
    dailyState.current++;
    if(dailyState.current>=DAILY_TOTAL){
      finishDailyChallenge();
    } else {
      setTimeout(loadDailyQuestion,250);
    }
  } else {
    const disp=Number.isInteger(q.ans)?q.ans:q.ans.toFixed(2);
    fb.textContent=t('speed_wrong');fb.className='feedback bad';
    // Only record wrong once per expression (not on every retry)
    if(!dailyState.recordedWrong){
      recordAnswer(q.op,false,'daily',q.level||'medium');
      dailyState.recordedWrong=true;
    }
    document.getElementById('dc-answer').value='';
    document.getElementById('dc-answer').focus();
  }
}
async function finishDailyChallenge(){
  dailyState.done=true;
  clearInterval(dailyState.timer);dailyState.timer=null;
  clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;
  const ms=Date.now()-dailyState.startTime;
  dailyState.timeMs=ms;
  const dateStr=getDailyDateStr();
  // Clear in-progress state
  try{localStorage.removeItem('numfly_daily_progress');}catch(e){}
  // Save locally as completed
  localStorage.setItem('numfly_daily_'+dateStr,JSON.stringify({time_ms:ms}));
  // Award base 100 XP for completing daily challenge
  gainXP(100);
  // Update daily stats first so we know the new streak count
  stats.dailyCompleted=(stats.dailyCompleted||0)+1;
  const streak=updateDailyStreak(dateStr);
  // Streak XP bonus — small reward for consecutive days, scales with tier
  // Tiers: 3d→+5, 7d→+15, 14d→+25, 30d→+40, 90d→+60, 365d→+100
  if(streak.count>=2){
    const streakBonus=
      streak.count>=365?100:streak.count>=90?60:streak.count>=30?40:
      streak.count>=14?25:streak.count>=7?15:streak.count>=3?5:0;
    if(streakBonus>0){
      gainXP(streakBonus);
      // Show a brief streak bonus toast after the base XP toast clears
      setTimeout(()=>{
        const el=document.getElementById('xp-toast');
        if(el){
          el.textContent=`🔥 +${streakBonus} XP streak bonus`;
          el.classList.add('show');
          setTimeout(()=>el.classList.remove('show'),1600);
        }
      },1800);
    }
  }
  stats.dailyBestStreak=Math.max(stats.dailyBestStreak||0,streak.count);
  if(!stats.dailyBestTime||ms<stats.dailyBestTime)stats.dailyBestTime=ms;
  if(!stats.dailyWorstTime||ms>stats.dailyWorstTime)stats.dailyWorstTime=ms;
  checkAchievements();
  saveOpStats(); // persist daily stats immediately
  // Save to Supabase if logged in
  if(sb&&currentUser){
    try{
      // submit_daily_time validates time server-side (rejects impossibly fast times)
      await withTimeout(sb.rpc('submit_daily_time',{p_challenge_date:dateStr,p_time_ms:ms}));
    }catch(e){console.warn('[Numfly] daily save error:',e);}
  }
  // Update the menu card
  updateDailyCard();
  // Show result
  document.getElementById('dc-result-time').innerHTML=formatDailyTime(ms,true);
  document.getElementById('screen-daily-result').dataset.dateStr=dateStr;
  showScreen('screen-daily-result');
  setDcTab(_dcCurrentTab, document.querySelectorAll('.dc-tab')[_dcCurrentTab==='global'?1:0]);
  renderStreakOnResult();
  flushPendingLevelUps();
  // Show guest sign-in prompt if not logged in
  const guestPrompt=document.getElementById('dc-guest-prompt');
  if(guestPrompt)guestPrompt.style.display=currentUser?'none':'flex';
  // Store pending daily time so it can be claimed after sign-up
  if(!currentUser){
    try{localStorage.setItem('numfly_pending_daily',JSON.stringify({dateStr,time_ms:ms}));}catch(e){}
  }
}
function abandonDaily(){
  if(dailyState.timer){clearInterval(dailyState.timer);dailyState.timer=null;}
  if(dailyState.playTimeTimer){clearInterval(dailyState.playTimeTimer);dailyState.playTimeTimer=null;}
  // Save in-progress state so player can resume
  if(!dailyState.done&&dailyState.current>0){
    const elapsed=dailyState.startTime>0?Date.now()-dailyState.startTime:0;
    try{
      localStorage.setItem('numfly_daily_progress',JSON.stringify({
        dateStr:getDailyDateStr(),
        current:dailyState.current,
        elapsedMs:elapsed
      }));
    }catch(e){}
  }
  dailyState.done=true;
  showScreen('screen-menu');
}
// ── Claim pending guest daily entry after sign-up ────────────────────────────
async function claimPendingDailyEntry(){
  if(!currentUser||!sb)return;
  try{
    const raw=localStorage.getItem('numfly_pending_daily');
    if(!raw)return;
    const{dateStr,time_ms}=JSON.parse(raw);
    if(!dateStr||!time_ms)return;
    // Only claim if it's today's challenge
    if(dateStr!==getDailyDateStr())return;
    const{error}=await withTimeout(sb.rpc('submit_daily_time',{p_challenge_date:dateStr,p_time_ms:time_ms}));
    if(!error){
      localStorage.removeItem('numfly_pending_daily');
      console.log('[Numfly] Pending daily entry claimed:',dateStr,time_ms+'ms');
      // Also mark the challenge as done locally (in case it wasn't)
      localStorage.setItem('numfly_daily_'+dateStr,JSON.stringify({time_ms}));
      // Refresh the daily card and the result leaderboard if visible
      updateDailyCard();
      const resultScreen=document.getElementById('screen-daily-result');
      if(resultScreen&&resultScreen.classList.contains('active')){
        loadDailyLeaderboard(_dcCurrentTab||'friends');
      }
      scheduleSync();
    }
  }catch(e){console.warn('[Numfly] claimPendingDailyEntry failed:',e);}
}
// ── Daily streak ─────────────────────────────────────────────────────────────
function getPrevDateStr(dateStr){
  const d=new Date(dateStr+'T12:00:00Z');
  d.setUTCDate(d.getUTCDate()-1);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
}
const STREAK_KEY='numfly_daily_streak';
function getDailyStreak(){
  try{
    const s=JSON.parse(localStorage.getItem(STREAK_KEY)||'null');
    if(!s||!s.count)return{count:0,lastDate:''};
    // Check if streak has expired — if lastDate is not today or yesterday, it's broken
    const today=getDailyDateStr();
    const yesterday=getPrevDateStr(today);
    if(s.lastDate!==today&&s.lastDate!==yesterday){
      // Missed a day — streak is broken, clear it
      try{localStorage.setItem(STREAK_KEY,JSON.stringify({count:0,lastDate:s.lastDate}));}catch(e){}
      return{count:0,lastDate:s.lastDate};
    }
    return s;
  }catch(e){return{count:0,lastDate:''};}
}
function updateDailyStreak(dateStr){
  const s=getDailyStreak();
  const yesterday=getPrevDateStr(dateStr);
  let newCount;
  if(s.lastDate===dateStr){
    newCount=s.count;
  } else if(s.lastDate===yesterday){
    newCount=s.count+1;
  } else {
    newCount=1;
  }
  const updated={count:newCount,lastDate:dateStr};
  try{localStorage.setItem(STREAK_KEY,JSON.stringify(updated));}catch(e){}
  // Push to Supabase immediately (don't wait for the scheduled sync)
  if(currentUser)scheduleSync();
  return updated;
}

function renderStreakOnCard(){
  const s=getDailyStreak();
  const badge=document.getElementById('daily-streak-badge');
  const countEl=document.getElementById('daily-streak-count');
  const nextHint=document.getElementById('streak-next-hint');
  const card=document.getElementById('daily-card');
  const allTiers=['tier-yellow','tier-blue','tier-purple','tier-crystal','tier-crown'];
  if(!badge)return;
  if(card)card.classList.remove(...allTiers);
  if(s.count>=2){
    badge.style.display='flex';
    if(countEl)countEl.textContent=s.count;
    const fireEl=badge.querySelector('.streak-badge-fire');
    const labelEl=badge.querySelector('.streak-badge-label');
    // Tier thresholds: [minCount, icon, tierClass, badgeBg, badgeBorder, countColor, labelColor, nextThreshold, nextLabel]
    const TIERS=[
      [365,'👑','tier-crown','rgba(232,255,71,.18)','rgba(232,255,71,.5)','#e8ff47','rgba(232,255,71,.8)',null,''],
      [90, '🔮','tier-purple','rgba(192,132,252,.18)','rgba(192,132,252,.45)','#c084fc','rgba(192,132,252,.85)',365,'👑 365'],
      [30, '💎','tier-crystal','rgba(77,255,180,.16)','rgba(77,255,180,.45)','#4dffb4','rgba(77,255,180,.8)',90,'🔮 90'],
      [2,  '🔥','','rgba(255,120,0,.13)','rgba(255,120,0,.35)','#ff8c00','rgba(255,120,0,.8)',30,'💎 30'],
    ];
    const tier=TIERS.find(([min])=>s.count>=min)||TIERS[TIERS.length-1];
    const [,icon,tierClass,bg,border,countColor,labelColor,nextAt,nextLabel]=tier;
    if(fireEl)fireEl.textContent=icon;
    badge.style.background=bg;
    badge.style.borderColor=border;
    if(countEl)countEl.style.color=countColor;
    if(labelEl)labelEl.style.color=labelColor;
    if(tierClass&&card)card.classList.add(tierClass);
    // Next-tier hint on the right
    if(nextHint){
      if(nextAt&&s.count<nextAt){
        const diff=nextAt-s.count;
        nextHint.style.color=labelColor;
        nextHint.textContent=diff===1?`1 day to
${nextLabel}`:`${diff} days
to ${nextLabel}`;
      } else {
        nextHint.textContent='';
      }
    }
  } else {
    badge.style.display='none';
    if(nextHint)nextHint.textContent='';
  }
}
function renderStreakOnResult(){
  const s=getDailyStreak();
  const el=document.getElementById('dc-result-streak');
  if(!el)return;
  if(s.count>=2){
    const key=s.count>=7?'streak_result_great':s.count>=3?'streak_result_good':'streak_result_start';
    const msg=t(key).replace('{n}',s.count);
    el.style.display='block';
    el.innerHTML=`<span style="font-family:'DM Mono',monospace;font-size:12px;color:var(--orange)">${msg}</span>`;
  } else {
    el.style.display='none';
  }
}

function formatDailyTime(ms,html=false){
  if(!html){
    if(ms<60000)return (ms/1000).toFixed(2)+'s';
    const m=Math.floor(ms/60000),s=String(((ms%60000)/1000).toFixed(2)).padStart(5,'0');
    return m+'m '+s+'s';
  }
  // HTML version: unit letter same baseline as number, with a space
  const unit=(u)=>`<span style="font-size:.6em;opacity:.7"> ${u}</span>`;
  if(ms<60000){
    const secs=(ms/1000).toFixed(2);
    return `${secs}${unit('s')}`;
  }
  const m=Math.floor(ms/60000),s=String(((ms%60000)/1000).toFixed(2)).padStart(5,'0');
  return `${m}${unit('m')} ${s}${unit('s')}`;
}
async function updateDailyCard(){
  const card=document.getElementById('daily-card');
  if(!card)return;
  const done=await checkDailyCompleted();
  const timeEl=document.getElementById('daily-your-time');
  const badgeDot=card.querySelector('.daily-badge-dot');
  if(done){
    card.classList.add('daily-card-done');
    if(timeEl){timeEl.style.display='block';timeEl.innerHTML='✓ '+formatDailyTime(done.time_ms,true);}
    if(badgeDot)badgeDot.style.animation='none';
  } else {
    card.classList.remove('daily-card-done');
    if(timeEl)timeEl.style.display='none';
    if(badgeDot)badgeDot.style.animation='';
  }
  renderStreakOnCard();
  const resetEl=document.getElementById('daily-next-reset');
  if(resetEl){
    if(done){
      resetEl.style.display='block';
      updateDailyResetCountdown();
      if(!window._dailyCountdownTimer){
        window._dailyCountdownTimer=setInterval(updateDailyResetCountdown,60000);
      }
    } else {
      resetEl.style.display='none';
      if(window._dailyCountdownTimer){clearInterval(window._dailyCountdownTimer);window._dailyCountdownTimer=null;}
    }
  }
  card.style.opacity='1';
}
function updateDailyResetCountdown(){
  const el=document.getElementById('daily-next-reset');
  if(!el)return;
  const now=new Date();
  const nextUTCMidnight=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()+1));
  const msLeft=nextUTCMidnight-now;
  const h=Math.floor(msLeft/3600000);
  const m=Math.floor((msLeft%3600000)/60000);
  const msg=h>0?t('daily_resets_in_hm').replace('{h}',h).replace('{m}',m):t('daily_resets_in_m').replace('{m}',m);
  if(msg)el.textContent=msg;
}
let _dcCurrentTab='global';
async function setDcTab(tab,btn){
  _dcCurrentTab=tab;
  document.querySelectorAll('.dc-tab').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  // Clear immediately before async fetch to prevent stale tab content flash
  const el=document.getElementById('dc-leaderboard');
  if(el)el.innerHTML='<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  await loadDailyLeaderboard(tab);
}
async function loadDailyLeaderboard(tab){
  const el=document.getElementById('dc-leaderboard');
  if(!el)return;
  const dateStr=document.getElementById('screen-daily-result').dataset.dateStr||getDailyDateStr();
  if(!sb||!currentUser){
    el.innerHTML=''; // guest prompt below handles the sign-in CTA
    return;
  }
  el.innerHTML='<div style="padding:12px 0;text-align:center"><span class="spinner"></span></div>';
  try{
    let rows=[];
    if(tab==='friends'){
      const uid=currentUser.id;
      const{data:fs}=await sb.from('friendships').select('requester_id,addressee_id').eq('status','accepted').or(`requester_id.eq.${uid},addressee_id.eq.${uid}`);
      const friendIds=(fs||[]).map(f=>f.requester_id===uid?f.addressee_id:f.requester_id);
      friendIds.push(uid);
      const{data}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('challenge_date',dateStr).in('user_id',friendIds).order('time_ms',{ascending:true}).limit(20);
      rows=data||[];
    } else {
      const{data}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('challenge_date',dateStr).order('time_ms',{ascending:true}).limit(10);
      rows=data||[];
    }
    // For global tab: fetch user's own rank if not in top 10
    let dcSelfRank=null;
    let dcSelfRow=null;
    const uid=currentUser.id;
    if(tab==='global'&&!rows.find(r=>r.user_id===uid)){
      const{data:myRow}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if(myRow){
        const{count}=await sb.from('daily_challenge_entries').select('user_id',{count:'exact',head:true}).eq('challenge_date',dateStr).lt('time_ms',myRow.time_ms);
        dcSelfRank=(count||0)+1;
        dcSelfRow=myRow;
      }
    }
    // Ensure current user appears in friends tab even if not in result
    if(tab==='friends'&&rows.length&&!rows.find(r=>r.user_id===uid)){
      const{data:myRow}=await sb.from('daily_challenge_entries').select('user_id,time_ms').eq('user_id',uid).eq('challenge_date',dateStr).maybeSingle();
      if(myRow)rows.push(myRow);
      rows.sort((a,b)=>a.time_ms-b.time_ms);
    }
    if(!rows.length&&!dcSelfRow){el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);padding:12px 0;text-align:center">No entries yet today.</div>`;return;}
    const allDcIds=[...rows.map(r=>r.user_id),...(dcSelfRow?[dcSelfRow.user_id]:[])];
    const ids=[...new Set(allDcIds)];
    const{data:profiles}=await sb.from('profiles').select('id,username,avatar_color').in('id',ids);
    const{data:progRows}=await sb.from('user_progress').select('user_id,xp_level').in('user_id',ids);
    const progMap=new Map((progRows||[]).map(p=>[p.user_id,p.xp_level||1]));
    const pm=new Map((profiles||[]).map(p=>[p.id,p]));
    function buildDcRow(r,rank,isMe){
      const prof=pm.get(r.user_id)||{username:'Unknown'};
      const rankCls=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      const dcLvl=progMap.get(r.user_id)||1;
      const dcTitle=getTitleForLevel(dcLvl);
      return`<div class="dc-lb-row${isMe?' me':''}">
        <div class="dc-lb-rank ${rankCls}">${rank}</div>
        <div class="lb-avatar" style="background:${avatarColor(prof)}">${initials(prof.username)}</div>
        <div class="dc-lb-name"><div>${esc(prof.username)}${isMe?' ('+t('lb_you')+')':''}</div><div class="lb-title-badge ${dcTitle.css}">${dcTitle.badge} ${t('title_'+dcTitle.key)}</div></div>
        <div class="dc-lb-time">${formatDailyTime(r.time_ms)}</div>
      </div>`;
    }
    let html=rows.map((r,i)=>buildDcRow(r,i+1,r.user_id===uid)).join('');
    if(dcSelfRow&&dcSelfRank){
      html+=`<div style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);text-align:center;padding:4px 0;letter-spacing:1px">· · ·</div>`;
      html+=buildDcRow(dcSelfRow,dcSelfRank,true);
    }
    el.innerHTML=html;
  }catch(e){
    el.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--error)">Error loading ranking.</div>`;
  }
}



// ── Challenge mode ────────────────────────────────────────────────────────────
let activeChallengeId=null,activeChallengeMode='normal',challengeSeed=0,challengeRng=null,_myJustPlayedScore=null;

async function createChallenge(){
  if(!currentUser){openAuthModal();return;}
  const btn=document.getElementById('sr-challenge-btn');
  if(btn){btn.disabled=true;btn.textContent='...';}
  try{
    const seed=Date.now()%0xFFFFFF;
    const code=Math.random().toString(36).slice(2,8).toUpperCase();
    const{error:e1}=await sb.from('challenges').insert({
      id:code,creator_id:currentUser.id,seed,
      difficulty:diff.speed,creator_score:speed.score, // will be updated by submit_dare_score RPC
      expires_at:new Date(Date.now()+7*24*3600*1000).toISOString()
    });
    if(e1){console.error('[Numfly] createChallenge insert error:',e1);showErrToast('Could not create challenge: '+e1.message);return;}
    // submit_dare_score validates and records the score + attempt server-side
    const elapsedMs=speed.startedAt?Date.now()-speed.startedAt:0;
    const{data:dareRes,error:e2}=await withTimeout(sb.rpc('submit_dare_score',{p_challenge_id:code,p_score:speed.score,p_elapsed_ms:elapsedMs}));
    if(e2)console.warn('[Numfly] submit_dare_score error:',e2);
    if(dareRes?.score!=null)speed.score=dareRes.score; // use server-validated score
    activeChallengeId=code;
    showChallengeResult(code,speed.score,null,null,true);
  }catch(e){
    console.error('[Numfly] createChallenge exception:',e);
    showErrToast('Could not create challenge. Please try again.');
  }finally{
    if(btn){btn.disabled=false;btn.setAttribute('data-i18n','challenge_friend');applyTranslations();}
  }
}
function showChallengeResult(code,yourScore,theirScore,theirName,isCreator){
  document.getElementById('cr-your-score').textContent=yourScore;
  document.getElementById('cr-your-name').textContent=currentProfile?.username||'You';
  document.getElementById('cr-their-score').textContent=theirScore!==null?theirScore:'—';
  document.getElementById('cr-their-name').textContent=theirName||'Friend';
  const youWin=theirScore!==null&&yourScore>theirScore;
  const theyWin=theirScore!==null&&theirScore>yourScore;
  document.getElementById('cr-you-box').className='challenge-score-box'+(youWin?' winner':'');
  document.getElementById('cr-them-box').className='challenge-score-box'+(theyWin?' winner':'');
  const opponentName=theirName||t('h2h_them')||'Opponent';
  let verdictText;
  if(theirScore===null){verdictText=t('challenge_waiting');}
  else if(youWin){verdictText=t('challenge_win');}
  else if(theyWin){verdictText=t('challenge_loss').replace('{name}',opponentName);}
  else{verdictText=t('challenge_tie');}
  document.getElementById('cr-verdict').textContent=verdictText;
  const shareEl=document.getElementById('cr-share-section');
  if(isCreator||theirScore===null){
    shareEl.style.display='';
    // Always use the root URL for challenge links so recipients aren't forced into a specific language
    document.getElementById('cr-link').textContent=`${window.location.origin}/?challenge=${code}`;
  } else shareEl.style.display='none';
  showScreen('screen-challenge-result');
}
function copyChallengeLink(){
  const link=document.getElementById('cr-link').textContent;
  const btn=document.querySelector('.challenge-copy-btn');
  function onCopied(){
    if(btn){btn.textContent='Copied!';setTimeout(()=>btn.setAttribute('data-i18n','challenge_copy')||applyTranslations(),2000);}
  }
  if(navigator.clipboard&&window.isSecureContext){
    navigator.clipboard.writeText(link).then(onCopied).catch(()=>{
      // Fallback on clipboard permission denial
      try{const ta=document.createElement('textarea');ta.value=link;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);onCopied();}catch(e){}
    });
  } else {
    try{const ta=document.createElement('textarea');ta.value=link;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);onCopied();}catch(e){}
  }
}
async function handleChallengeLink(){
  const params=new URLSearchParams(window.location.search);
  const code=params.get('challenge');
  if(!code)return;
  const{data:ch}=await sb.from('challenges').select('*,profiles!creator_id(username)').eq('id',code).single();
  if(!ch||new Date(ch.expires_at)<new Date()){showErrToast('This challenge link has expired or is invalid.');return;}

  if (currentUser && currentUser.id === ch.creator_id) {
    window.history.replaceState({},'',window.location.pathname);
    if (ch.is_competition) {
      viewCompetition(code, ch.difficulty || 'easy');
    } else {
      let theirScore = null, theirName = null;
      const {data:oppRows} = await sb.from('challenge_attempts').select('score,player_id').eq('challenge_id',code).neq('player_id',currentUser.id).limit(1);
      if (oppRows && oppRows[0]) {
         theirScore = oppRows[0].score;
         const {data:oppProf} = await sb.from('profiles').select('username').eq('id',oppRows[0].player_id).maybeSingle();
         if (oppProf) theirName = oppProf.username;
      }
      showChallengeResult(code, ch.creator_score, theirScore, theirName, true);
    }
    return;
  }

  // ── Store link data locally — do NOT mutate global state until user explicitly accepts ──
  const _linkCode=code;
  const _linkSeed=ch.seed;
  const _linkDiff=ch.difficulty||'easy';
  const _linkDuration=ch.duration_seconds||120;
  const _linkIsComp=!!ch.is_competition;
  const _creatorId=ch.creator_id; // Store creator ID for the inline button check below

  window.history.replaceState({},'',window.location.pathname);
  
  if(_linkIsComp){
    const banner=document.createElement('div');
    banner.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';
    banner.innerHTML=`<div style="background:var(--surface);border:1px solid var(--orange);border-radius:16px;padding:28px;text-align:center;max-width:320px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--orange);letter-spacing:2px">⚔ COMPETITION</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);margin:8px 0 16px">${esc(ch.profiles?.username||'Someone')} invites you to compete!</div>
      <button class="btn btn-primary" onclick="if(!currentUser){openAuthModal();return;} if(currentUser.id==='${_creatorId}'){this.closest('div[style*=fixed]').remove();viewCompetition('${_linkCode}','${_linkDiff}');return;} this.closest('div[style*=fixed]').remove();acceptChallengeInvite('${_linkCode}','${_linkDiff}')">Accept ⚔</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="this.closest('div[style*=fixed]').remove()">Decline</button>
    </div>`;
    document.body.appendChild(banner);
  } else {
    const banner=document.createElement('div');
    banner.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';
    banner.innerHTML=`<div style="background:var(--surface);border:1px solid var(--orange);border-radius:16px;padding:28px;text-align:center;max-width:320px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--orange);letter-spacing:2px">⚔ CHALLENGE</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);margin:8px 0 16px">${esc(ch.profiles?.username||'Someone')} challenges you!</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--accent);margin-bottom:16px">${ch.creator_score!=null?t('dare_notif').replace('{n}',ch.creator_score):t('race_notif')}</div>
      <button class="btn btn-primary" onclick="if(!currentUser){openAuthModal();return;} if(currentUser.id==='${_creatorId}'){this.closest('div[style*=fixed]').remove();showErrToast('You cannot accept your own challenge.');return;} this.closest('div[style*=fixed]').remove();_commitChallengeLink('${_linkCode}',${_linkSeed},'${_linkDiff}',${_linkDuration})">Accept ⚔</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="this.closest('div[style*=fixed]').remove()">Decline</button>
    </div>`;
    document.body.appendChild(banner);
  }
}
// Called only when user explicitly accepts a 1v1 link challenge — commits global state then starts
function _commitChallengeLink(code,seed,difficulty,duration){
  activeChallengeId=code;
  challengeSeed=seed;
  challengeRng=seededRand(seed);
  diff.speed=difficulty;
  speed.remaining=duration;
  activeChallengeMode='challenge';
  startSpeedWithCountdown()
}
function startSpeedWithCountdown(){
  // 1. Resume mid-game session if found
  try{
    if(activeChallengeId&&localStorage.getItem('numfly_comp_resume_'+activeChallengeId)){
      const saved=localStorage.getItem('numfly_comp_resume_'+activeChallengeId);
      const s=saved?JSON.parse(saved):null;
      if(challengeSeed)challengeRng=seededRand(challengeSeed);
      if(s&&typeof s.questionsAnswered==='number'&&s.questionsAnswered>0){
        const _ops=['add','sub','mul','div','pct'];
        const _lvl=diff.speed||_challengeDiff||'easy';
        for(let i=0;i<s.questionsAnswered;i++){
          const _op=_ops[Math.floor(challengeRng()*_ops.length)];
          genOneProblemSeeded(challengeRng,_lvl,_op);
        }
      }
      startSpeed();
      if(s&&typeof s.score==='number'){speed.score=s.score; const scoreEl = document.getElementById('s-score'); if(scoreEl) scoreEl.textContent=speed.score;}
      if(s&&typeof s.remaining==='number')speed.remaining=s.remaining;
      localStorage.removeItem('numfly_comp_resume_'+activeChallengeId);
      return;
    }
  }catch(e){ console.warn("Resume failed:", e); }

  // 2. MULTI-PAGE HANDOFF GUARD
  if (!document.getElementById('screen-speed-game')) {
    localStorage.setItem('numfly_pending_start', JSON.stringify({
       id: activeChallengeId,
       mode: activeChallengeMode,
       diff: diff.speed,
       dur: speed.remaining,
       origDur: speed.originalDur,
       seed: challengeSeed,
       compId: _activeCompId
    }));
    window.location.href = '/1v1';
    return; 
  }

  // 3. Create the 3-2-1 Overlay
  const overlay=document.createElement('div');
  overlay.id='race-countdown-overlay';
  overlay.style.cssText='position:fixed;inset:0;background:var(--bg,#0d0d0d);z-index:9999;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML=`<div style="text-align:center">
    <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px">⚔ ${t('race_title')||'Challenge'}</div>
    <div id="race-countdown-num" style="font-family:'Bebas Neue',sans-serif;font-size:140px;color:var(--accent);line-height:1;letter-spacing:2px">3</div>
  </div>`;
  document.body.appendChild(overlay);
  
  showScreen('screen-speed-game');
  
  // 4. Initialize Game State safely
  if(speed.timer)clearInterval(speed.timer);
  const _cdDur=speed.remaining||120;
  speed.score=0;speed.remaining=_cdDur;speed.wrongStreak=0;stats.currentSpeedStreak=0;speed.waiting=false;
  speed.opBag=[];speed.originalDur=_cdDur; 
  recentQs.speed=new Set();
  
  const scoreEl = document.getElementById('s-score');
  if (scoreEl) scoreEl.textContent=0;
  
  const hsEl = document.getElementById('s-hs-display');
  if (hsEl) hsEl.textContent=getSpeedDurHS(diff.speed,_cdDur);
  
  const fbEl = document.getElementById('s-feedback');
  if (fbEl) fbEl.textContent='';
  
  const _timerElCD=document.getElementById('s-timer');
  if(_timerElCD){
    const _cm=Math.floor(_cdDur/60),_cs=String(_cdDur%60).padStart(2,'0');
    _timerElCD.textContent=`${_cm}:${_cs}`;
    _timerElCD.className='hud-value';
  }
  
  const _lbl=document.getElementById('speed-back-label');
  if(_lbl)_lbl.textContent=(activeChallengeMode==='challenge'&&_activeCompId)?(t('comp_group_title')||'Competition'):(t('main_menu')||'Main Menu');
  
  try {
    nextSpeedQ(); 
  } catch(e) {
    console.error("nextSpeedQ crashed during countdown setup!", e);
  }

  const ansEl=document.getElementById('s-answer');
  if(ansEl){ansEl.disabled=true;ansEl.blur();}
  
  let count=3;
  const numEl=document.getElementById('race-countdown-num');
  
  // 5. Start the Countdown Timer
  speed.countdownTimer=setInterval(()=>{
    count--;
    if(count<=0){
      clearInterval(speed.countdownTimer);
      speed.countdownTimer=null;
      const ov = document.getElementById('race-countdown-overlay');
      if (ov) ov.remove();
      
      
      speed.startedAt=Date.now();
      speed.timer=setInterval(()=>{
        speed.remaining--;
        stats.totalPlayTime++;
        stats.modePlayTime.speed=(stats.modePlayTime.speed||0)+1;
        const m=Math.floor(speed.remaining/60),s=String(speed.remaining%60).padStart(2,'0');
        const el=document.getElementById('s-timer');
        if(el){el.textContent=`${m}:${s}`;el.className='hud-value'+(speed.remaining<=20?' danger':'');}
        if(speed.remaining<=0){endSpeed(false);}
      },1000);
      
      if(ansEl){ansEl.disabled=false;ansEl.style.opacity='1';ansEl.focus();}
    } else {
      if(numEl){
        numEl.textContent=count;
        numEl.style.transition='transform .15s';
        numEl.style.transform='scale(1.2)';
        setTimeout(()=>{if(numEl)numEl.style.transform='scale(1)';},150);
      }
    }
  },1000);
}

// ── Speed overrides (challenge-aware, no hoisting issues) ─────────────────────
const _nextSpeedQBase=function(){
  const op=pickFromBag(speed.opBag,['add','sub','mul','div','pct']);
  const p=genProblem(diff.speed,[op],'speed');
  speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
  document.getElementById('s-question').textContent=p.q;
  document.getElementById('s-op-type').textContent=p.type;
  document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
  document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
  speed.answered=false;speed.waiting=false; // ready for next answer
};
// nextSpeedQ and endSpeed are defined earlier in the file; we patch them here
const _origNextSpeedQ=nextSpeedQ;
nextSpeedQ=function(){
  if(activeChallengeMode==='challenge'&&challengeRng){
    // Mirror exactly: 1 RNG call for op, then genOneProblemSeeded for the problem.
    // This must match the resume fast-forward pattern in startCompetition.
    const _ops=['add','sub','mul','div','pct'];
    const op=_ops[Math.floor(challengeRng()*_ops.length)];
    const p=genOneProblemSeeded(challengeRng,diff.speed,op);
    speed.ans=p.ans;speed.wrongStreak=0;speed.currentOp=p.op;
    document.getElementById('s-question').textContent=p.q;
    document.getElementById('s-op-type').textContent=t('op_type_'+p.op);
    document.getElementById('s-answer').value='';document.getElementById('s-answer').focus();
    document.getElementById('s-feedback').textContent='';document.getElementById('s-feedback').className='feedback';
    speed.answered=false;speed.waiting=false; // ready for next answer
  } else _origNextSpeedQ();
};
const _origEndSpeed=endSpeed;
endSpeed=function(goMenu){
  if(activeChallengeMode==='challenge'&&!goMenu&&currentUser&&activeChallengeId){
    activeChallengeMode='normal';
    if(speed.timer){clearInterval(speed.timer);speed.timer=null;}
    const d=diff.speed;hs.speed[d].plays++;
    stats.speedScoreHistory.push(speed.score);
    if(stats.speedScoreHistory.length>20)stats.speedScoreHistory.shift();
    
    // FIX: Ensure duration high score is saved at the end of the challenge
    setSpeedDurHS(d, speed.originalDur || 120, speed.score);

    checkAchievements();flushPendingLevelUps();scheduleSync();
    
    // Clear any saved resume state — game completed
    try{localStorage.removeItem('numfly_comp_resume_'+activeChallengeId);}catch(e){}
    const _elapsedMs=speed.startedAt?Date.now()-speed.startedAt:0;
    
    // FIX: Guarantee the score saves to the database using both a direct update and the RPC
    const saveScore = async () => {
      const _elapsedSec = _elapsedMs / 1000;
      const _maxByTime = Math.ceil(Math.max(_elapsedSec, 1) / 0.9);
      const _cappedScore = Math.max(0, Math.min(speed.score, _maxByTime));
      
      // Force direct update to guarantee the score saves and 'invited' drops to false
      await sb.from('challenge_attempts').update({ score: _cappedScore, invited: false }).eq('challenge_id', activeChallengeId).eq('player_id', currentUser.id);
      
      // Call RPC as a backup/validation
      const rpcRes = await sb.rpc('submit_challenge_score', { p_challenge_id: activeChallengeId, p_score: _cappedScore, p_elapsed_ms: _elapsedMs });
      if (rpcRes?.data?.score != null) {
        speed.score = rpcRes.data.score;
      } else {
        speed.score = _cappedScore;
      }
    };

    saveScore().then(async () => {
      const{data:ch}=await sb.from('challenges').select('creator_score,creator_id,profiles!creator_id(username),is_competition,seed,difficulty,duration_seconds').eq('id',activeChallengeId).single();
      if(ch&&ch.is_competition){
        // Competition — show scoreboard with correct difficulty/duration from DB
        challengeSeed=ch.seed;
        _challengeDiff=ch.difficulty||_challengeDiff||'easy';
        diff.speed=_challengeDiff;
        const _dur=ch.duration_seconds||120;
        _myJustPlayedScore=speed.score;
        await loadCompetitionScreen(activeChallengeId,ch.seed,speed.score,false,_challengeDiff,_dur);
        const pb=document.getElementById('comp-play-btn');
        if(pb){pb.style.display='none';}
        checkPendingRequests();
      } else if(ch){
        // 1v1 — fetch opponent score from challenge_attempts
        let theirScore=null,theirName=null;
        const{data:oppRows}=await sb.from('challenge_attempts')
          .select('score,player_id').eq('challenge_id',activeChallengeId)
          .neq('player_id',currentUser.id).limit(1);
        const oppAttempt=(oppRows||[])[0]||null; 
        if(oppAttempt){
          theirScore=oppAttempt.score;
          const{data:oppProf}=await sb.from('profiles').select('username').eq('id',oppAttempt.player_id).maybeSingle();
          if(oppProf)theirName=oppProf.username;
        }
        showChallengeResult(activeChallengeId,speed.score,theirScore,theirName||ch.profiles?.username,currentUser.id===ch.creator_id);
      }else{document.getElementById('sr-score').textContent=speed.score;showScreen('screen-speed-result');}
    });
    return;
  }
  _origEndSpeed(goMenu); // must run first so it sees activeChallengeMode='challenge' for resume save
  activeChallengeMode='normal';
  scheduleSync();
  saveOpStats();
  saveGuestState();
};
const _origCheckAch=checkAchievements;
checkAchievements=function(silent = false){_origCheckAch(silent);scheduleSync();};

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

// ── Login overlay ────────────────────────────────────────────────────────────
function showLoginOverlay(show){
  const el=document.getElementById('login-overlay');
  if(el)el.style.display=show?'flex':'none';
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

// ── Flush sync on page unload (safety net for fast refresh) ─────────────────
window.addEventListener('beforeunload',()=>{
  if(syncTimer&&currentUser){clearTimeout(syncTimer);pushToSupabase();}
  saveOpStats();
});

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
    totalWrong:stats.totalWrong||0,
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
function detectAndSetLang(){
  // 1. Check URL path first
  const path=window.location.pathname;
  const urlLang=path.startsWith('/nl')?'nl':path.startsWith('/es')?'es':path.startsWith('/en')?'en':null;
  
  if(urlLang&&STRINGS[urlLang]){
    lang=urlLang;
    localStorage.setItem('numfly_lang',urlLang);
    // Sync buttons
    document.querySelectorAll('.lang-btn').forEach(b=>{
      const code={EN:'en',NL:'nl',ES:'es'}[b.textContent.trim().toUpperCase()];
      if(code)b.classList.toggle('active',code===lang);
    });
    updateSidebarLangBtns();
  } else {
    // 2. We zijn op de root (/) geland. Wat is de voorkeurstaal?
    const saved=localStorage.getItem('numfly_lang');
    let detectedLang = 'en';
    if(saved&&STRINGS[saved]){
      detectedLang=saved;
    } else {
      const full=(navigator.language||navigator.userLanguage||'en').toLowerCase();
      const short=full.slice(0,2);
      detectedLang=STRINGS[full]?full:STRINGS[short]?short:'en';
    }
    
    // 3. Als de bezoeker Spaans of NL is, forceer dan een switch naar hun eigen URL (/es/ of /nl/)
    if (detectedLang !== 'en') {
      setLang(detectedLang); 
    } else {
      // Het is een Engelse bezoeker, ze mogen netjes op de root (/) blijven
      lang = 'en';
      localStorage.setItem('numfly_lang', 'en');
      document.querySelectorAll('.lang-btn').forEach(b=>{
        const code={EN:'en',NL:'nl',ES:'es'}[b.textContent.trim().toUpperCase()];
        if(code)b.classList.toggle('active',code===lang);
      });
      updateSidebarLangBtns();
    }
  }
}

// Patch setLang to also persist choice
const _origSetLang=setLang;
const TITLE_BY_LANG={
  en:'Numfly - Free Math Games & Mental Math Practice',
  nl:'Numfly - Gratis Rekenspelletjes & Hoofdrekenen Oefenen',
  es:'Numfly - Juegos de Matemáticas y Práctica de Cálculo Mental',
};
setLang=function(l,btn){
  document.documentElement.lang=l;
  localStorage.setItem('numfly_lang',l);
  _origSetLang(l,btn);
  document.title=TITLE_BY_LANG[l]||TITLE_BY_LANG.en;
  
  try{
    let currentPath=window.location.pathname;
    
    // 1. Strip any existing language prefix to find the "core" path
    let corePath = currentPath;
    if (corePath.startsWith('/nl/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/nl') corePath = '/';
    else if (corePath.startsWith('/es/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/es') corePath = '/';
    else if (corePath.startsWith('/en/')) corePath = '/' + corePath.substring(4);
    else if (corePath === '/en') corePath = '/';

    // 2. Reverse translate any existing foreign paths back to English base
    const nlToEn = { 
      '/vrienden':'/friends', '/statistieken':'/stats', '/klassement':'/leaderboard', 
      '/prestaties':'/achievements', '/tips':'/tips', '/campagne':'/campaign', 
      '/dagelijks':'/daily', '/bliksem':'/lightning', '/snelheid':'/speed', 
      '/oefenen':'/practice', '/1v1':'/1v1', '/hoofdrekenen-oefenen':'/how-to-practice-mental-math'
    };
    const esToEn = { 
      '/amigos':'/friends', '/estadisticas':'/stats', '/clasificacion':'/leaderboard', 
      '/logros':'/achievements', '/consejos':'/tips', '/campana':'/campaign', 
      '/diario':'/daily', '/rayo':'/lightning', '/velocidad':'/speed', 
      '/practica':'/practice', '/1v1':'/1v1', '/como-practicar-calculo-mental':'/how-to-practice-mental-math' 
    };
    
    if (nlToEn[corePath]) corePath = nlToEn[corePath];
    if (esToEn[corePath]) corePath = esToEn[corePath];

    // 3. Translate the core path into the newly selected language
    const enToNl = { 
      '/friends':'/vrienden', '/stats':'/statistieken', '/leaderboard':'/klassement', 
      '/achievements':'/prestaties', '/tips':'/tips', '/campaign':'/campagne', 
      '/daily':'/dagelijks', '/lightning':'/bliksem', '/speed':'/snelheid', 
      '/practice':'/oefenen', '/1v1':'/1v1', '/how-to-practice-mental-math':'/hoofdrekenen-oefenen' 
    };
    const enToEs = { 
      '/friends':'/amigos', '/stats':'/estadisticas', '/leaderboard':'/clasificacion', 
      '/achievements':'/logros', '/tips':'/consejos', '/campaign':'/campana', 
      '/daily':'/diario', '/lightning':'/rayo', '/speed':'/velocidad', 
      '/practice':'/practica', '/1v1':'/1v1', '/how-to-practice-mental-math':'/como-practicar-calculo-mental' 
    };
    
    let translatedPath = corePath;
    if (l === 'nl' && enToNl[corePath]) translatedPath = enToNl[corePath];
    if (l === 'es' && enToEs[corePath]) translatedPath = enToEs[corePath];

    // 4. Build the final URL with the correct prefix
    let finalPath = translatedPath;
    if (l === 'nl') finalPath = '/nl' + (translatedPath === '/' ? '' : translatedPath);
    else if (l === 'es') finalPath = '/es' + (translatedPath === '/' ? '' : translatedPath);
    
    if (finalPath === '') finalPath = '/';

    // Preserve query string (e.g. ?challenge=CODE)
    history.replaceState({lang:l}, document.title, finalPath + window.location.search);
  }catch(e){}
};

// ── Back button (Android/iOS hardware back) ───────────────────────────────────
// Strategy: push a history entry each time we show a non-menu screen,
// so pressing back pops it and we intercept with popstate.


// history API throws SecurityError inside srcdoc/sandboxed iframes — guard every call
function safeHistoryReplace(state,title,url){try{history.replaceState(state,title,url);}catch(e){}}
function safeHistoryPush(state,title,url){try{history.pushState(state,title,url);}catch(e){}}

const MENU_SCREEN = 'screen-menu';
const _origShowScreen_withHistory = showScreen;

showScreen = function(id) {
  const currentId = document.querySelector('.screen.active')?.id;
  
  // Auto-save Daily Challenge if leaving abruptly (e.g. phone back button)
  if (currentId === 'screen-daily-game' && id !== 'screen-daily-game' && typeof dailyState !== 'undefined' && !dailyState.done && dailyState.current > 0) {
    const elapsed = dailyState.startTime > 0 ? Date.now() - dailyState.startTime : 0;
    try {
      localStorage.setItem('numfly_daily_progress', JSON.stringify({
        dateStr: getDailyDateStr(),
        current: dailyState.current,
        elapsedMs: elapsed
      }));
    } catch(e) {}
  }
  
  // Auto-save Competition/Challenge if leaving abruptly (e.g. phone back button)
  if (currentId === 'screen-speed-game' && id !== 'screen-speed-game' && activeChallengeMode === 'challenge' && activeChallengeId) {
    try {
      localStorage.setItem('numfly_comp_resume_' + activeChallengeId, JSON.stringify({
        score: speed.score,
        remaining: speed.remaining,
        questionsAnswered: speed.score + (speed.wrongStreak || 0)
      }));
    } catch(e) {}
    activeChallengeMode = 'normal';
  }

  // Call original function
  _origShowScreen_withHistory(id);
  
  // Bepaal welke URL we in de adresbalk willen laten zien
  let displayUrl = location.pathname;
  if (id === 'screen-privacy') {
    displayUrl += '?mode=privacy'; // Voeg de parameter toe voor het privacyscherm
  }
  
  // Standard history logic
  if (id === MENU_SCREEN) {
    safeHistoryReplace({screen: MENU_SCREEN}, '', displayUrl);
  } else {
    safeHistoryPush({screen: id}, '', displayUrl);
  }
};

window.addEventListener('popstate',(e)=>{
  const current=document.querySelector('.screen.active')?.id;
  if(!current||current===MENU_SCREEN){
    return;
  }
  // Auto-save Daily Challenge progress when hardware back button is pressed
  if(current==='screen-daily-game'&&typeof dailyState!=='undefined'&&!dailyState.done&&dailyState.current>0){
    const elapsed=dailyState.startTime>0?Date.now()-dailyState.startTime:0;
    try{localStorage.setItem('numfly_daily_progress',JSON.stringify({dateStr:getDailyDateStr(),current:dailyState.current,elapsedMs:elapsed}));}catch(e){}
  }
  // Navigate to the screen recorded in history state, or fall back to menu
  const target=e.state?.screen;
  const known=target&&document.getElementById(target);
  if(known&&target!==current){
    _origShowScreen_withHistory(target);
  } else {
    _origShowScreen_withHistory(MENU_SCREEN);
    safeHistoryReplace({screen:MENU_SCREEN},'',location.pathname);
  }
});

function checkPendingStart() {
  const pending = localStorage.getItem('numfly_pending_start');
  if (pending && document.getElementById('screen-speed-game')) {
     const p = JSON.parse(pending);
     localStorage.removeItem('numfly_pending_start'); // unpack the suitcase
     
     // Restore all the challenge variables
     activeChallengeId = p.id;
     activeChallengeMode = p.mode;
     diff.speed = p.diff;
     _challengeDiff = p.diff;
     speed.remaining = p.dur;
     speed.originalDur = p.origDur || p.dur;
     challengeSeed = p.seed;
     _activeCompId = p.compId;
     if (p.seed) challengeRng = seededRand(p.seed);
     
     // Start the game automatically!
     setTimeout(() => startSpeedWithCountdown(), 150);
  }
}

// Init — seed initial history state
// FIX: Neem window.location.search mee, anders wordt ?mode=privacy direct bij het inladen gewist!
const _initialUrl = window.location.pathname + window.location.search + window.location.hash;
safeHistoryReplace({screen:MENU_SCREEN},'',_initialUrl);

// Clear stale session from old storage key
try{localStorage.removeItem('numfly_auth');}catch(e){}
// Auth-dependent UI (sidebar, profile) is updated separately by updateSocialUI().
initApp();
