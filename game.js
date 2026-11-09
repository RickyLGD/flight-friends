var GAME_DATA = {"settings":{"WIDTH":800,"HEIGHT":600,"INK":[52,32,20],"CREAM":[255,241,208],"SAND":[247,214,158],"RED":[226,52,52],"DARK_RED":[158,28,44],"SUN":[255,200,62],"LEAF":[72,138,66],"FOREST":[38,96,58],"SHADOW":[52,32,20,120],"WEB_SCORE_KEY":"flight_friends_best_score","WEB_PROGRESS_KEY":"flight_friends_pets","bird_x":150,"bird_radius":20,"head_height":48,"pillars_for_first_dogs":[150],"pillars_between_dogs":150,"pets_per_run_limit":1,"recent_pet_chance":0.25,"album_page_size":8,"owner_bonus_size":1,"head_sway_speed":2,"head_sway_angle":8,"plane_tilt_per_speed":1.5,"gravity":0.25,"jump_strength":-5,"maximum_fall_speed":5,"death_duration":900,"shake_duration":0.55,"shake_strength":18,"pipe_width":80,"starting_pipe_gap":280,"minimum_pipe_gap":160,"gap_reduction_per_point":0.5,"starting_pipe_speed":5.5,"maximum_pipe_speed":8,"speed_increase_per_point":0.01,"starting_shift_margin":0.45,"maximum_shift_margin":0.7,"shift_margin_increase_per_point":0.001,"pipe_spacing":300,"points_per_theme":30,"WEATHERS":["rain","snow","fog","petals","storm","leaves","meteors","dandelions","osmanthus"],"WEATHER_THEMES":{"dandelions":[0],"osmanthus":[0,1],"snow":[2],"leaves":[0,1],"meteors":[2]},"LIGHTNING_POINTS":[[560,0],[532,52],[553,52],[518,116],[531,71],[510,71],[544,0]],"weather_gap":[20,30],"weather_lasts":15,"weather_fade_frames":60,"theme_fade_frames":90,"fewest_obstacles_between_animals":1,"most_obstacles_between_animals":3,"hanging_animal_chance":0.35,"creature_scale":3,"creature_hide_distance":70,"GROUND_CREATURES":["fox","rabbit","hedgehog","frog","squirrel","duckling","raccoon","badger","tortoise","capybara","red_panda","mole"],"HANGING_CREATURES":["bat","sloth","monkey","opossum","hanging_parrot"],"sky_body_center":[600,170],"step_milliseconds":16.666666666666668,"step_tolerance":2,"maximum_steps_per_frame":6,"steady_frame_tolerance":1.2,"SPRITE_COLORS":{"K":[52,32,20],"O":[240,138,52],"o":[204,98,38],"W":[255,244,222],"B":[28,18,18],"P":[244,150,160],"L":[232,226,214],"G":[172,166,158],"T":[214,170,118],"t":[150,100,62],"D":[96,62,42],"Y":[255,214,80],"y":[245,146,50],"E":[116,194,88],"e":[72,144,72],"V":[128,102,168],"v":[88,70,126],"R":[226,72,72],"S":[92,158,204],"s":[250,196,76],"M":[214,132,70],"m":[150,84,42],"A":[214,222,232],"a":[140,152,170],"U":[184,160,220],"h":[255,255,255],"j":[214,214,214],"g":[164,222,116],"c":[176,226,246]},"BOOM_LETTERS":[["#####.","##..##","##..##","#####.","##..##","##..##","#####."],[".####.","##..##","##..##","##..##","##..##","##..##",".####."],[".####.","##..##","##..##","##..##","##..##","##..##",".####."],["##...##","###.###","#######","##.#.##","##...##","##...##","##...##"],["##","##","##","##","##","..","##"]],"CROWN_PIXELS":["#..#..#","##.#.##","#######","#######"],"RAIN_LAYERS":[{"count":64,"blocks":3,"fall":3.2,"drift":0.65,"tail":[66,96,126],"head":[66,96,126],"opacity":90},{"count":38,"blocks":4,"fall":5.1,"drift":1.05,"tail":[78,112,145],"head":[78,112,145],"opacity":135},{"count":16,"blocks":7,"fall":7.4,"drift":1.5,"tail":[94,132,168],"head":[94,132,168],"opacity":165}],"RAIN_BLOCK":[1,2],"SPLASH_COLOR":[214,232,252],"SPLASH_SHAPES":[[[-2,-2],[2,-2]],[[-4,-5],[-2,-2],[2,-2],[4,-5]],[[-6,-4],[6,-4]]],"splash_frames":12,"SNOW_FALL_SPEEDS":[1.8,2.6,3.4],"SNOW_DRIFT":0.0,"SNOW_SWAY":8,"SNOW_SWAY_FRAMES":95,"WEATHER_FRAMES":{"snow":[[0,0,19,19],[21,0,16,16],[39,0,19,19],[60,0,29,29],[91,0,24,24],[117,0,29,29],[148,0,19,19],[169,0,16,16],[187,0,19,19],[208,0,29,29],[239,0,24,24],[265,0,29,29],[296,0,19,19],[317,0,16,16],[335,0,19,19],[356,0,29,29],[387,0,24,24],[413,0,29,29]],"maple":[[444,0,22,23],[468,0,16,21],[486,0,8,19],[496,0,7,21],[0,31,11,23],[13,31,16,21],[31,31,17,19],[50,31,20,21],[72,31,39,41],[113,31,28,38],[143,31,15,33],[160,31,12,38],[174,31,20,41],[196,31,28,38],[226,31,30,33],[258,31,34,38],[294,31,22,23],[318,31,16,21],[336,31,8,19],[346,31,7,21],[355,31,11,23],[368,31,16,21],[386,31,17,19],[405,31,20,21],[427,31,39,41],[468,31,28,38],[0,74,15,33],[17,74,12,38],[31,74,20,41],[53,74,28,38],[83,74,30,33],[115,74,34,38],[151,74,22,23],[175,74,16,21],[193,74,8,19],[203,74,7,21],[212,74,11,23],[225,74,16,21],[243,74,17,19],[262,74,20,21],[284,74,39,41],[325,74,28,38],[355,74,15,33],[372,74,12,38],[386,74,20,41],[408,74,28,38],[438,74,30,33],[470,74,34,38]],"dandelions":[[0,117,16,18],[18,117,14,16],[34,117,14,16],[50,117,16,18],[68,117,22,24],[92,117,18,22],[112,117,18,22],[132,117,22,24],[156,117,28,32],[186,117,24,28],[212,117,26,28],[240,117,28,32]],"osmanthus":[[270,117,7,7],[279,117,9,9],[290,117,9,9],[301,117,8,8],[311,117,14,14],[327,117,18,18],[347,117,19,19],[368,117,17,17]]},"coin_chance":0.5,"coin_radius":18,"coin_pop_frames":30,"COIN_SPIN":[0,1,2,1],"MEDALS":[[20,"铜牌","bronze_medal"],[60,"银牌","silver_medal"],[100,"金牌","gold_medal"]],"FURNITURE":[{"id":"food_bowl","name":"狗食盆","name_en":"Dog bowl","price":80,"place":[640,560],"seats":[],"bowl":true,"dogs_only":true},{"id":"cat_bowl","name":"猫食盆","name_en":"Cat bowl","price":80,"place":[704,572],"seats":[],"bowl":true,"cats_only":true},{"id":"water_bowl","name":"水碗","name_en":"Water bowl","price":100,"place":[520,584],"seats":[],"bowl":true,"drink":true},{"id":"ball","name":"小皮球","name_en":"Ball","price":120,"place":[300,540],"seats":[],"toy":true,"dogs_only":true},{"id":"plant","name":"盆栽","name_en":"Plant","price":150,"place":[744,452],"seats":[]},{"id":"cushion","name":"软垫","name_en":"Cushion","price":180,"place":[192,564],"seats":[[9,3]]},{"id":"box","name":"纸箱","name_en":"Box","price":220,"place":[472,532],"seats":[[13,17]],"front":7,"seat_actions":["sit","sit","sit","lie"],"stay":{"sit":[180,360],"lie":[300,480]},"stay_chance":0.2},{"id":"teaser","name":"逗猫棒","name_en":"Cat teaser","price":260,"place":[756,588],"seats":[],"toy":true,"spot":[4,28],"tip":[0,18,11,12],"cats_only":true,"motion":"batted"},{"id":"rug","name":"地毯","name_en":"Rug","price":320,"place":[400,568],"seats":[],"flat":true},{"id":"dog_bed","name":"狗窝","name_en":"Dog bed","price":400,"place":[272,524],"seats":[[14,9]],"front":7,"dogs_only":true,"seat_actions":["sit","sit","sit","lie"],"stay":{"sit":[180,300],"lie":[360,540]},"stay_chance":0.2},{"id":"lamp","name":"落地灯","name_en":"Lamp","price":480,"place":[252,452],"seats":[]},{"id":"sofa","name":"小沙发","name_en":"Sofa","price":650,"place":[588,452],"seats":[[9,8],[17,8]]},{"id":"cat_tree","name":"猫爬架","name_en":"Cat tree","price":900,"place":[112,452],"seats":[[25,35],[8,21],[21,7]],"climb":[14,51],"cats_only":true,"seat_actions":["sit","sit","lie"],"no_bounce":true,"stay":{"sit":[240,420],"lie":[360,540],"play":[240,420]},"stay_chance":0.45},{"id":"crib","name":"婴儿床","name_en":"Crib","price":1200,"place":[400,452],"seats":[[16,9]],"seat_actions":["sit","lie"],"stay_chance":0.15,"no_bounce":true},{"id":"chime","name":"风铃","name_en":"Wind chime","price":200,"room":1,"place":[56,588],"seats":[],"toy":true,"spot":[7,32],"tip":[0,22,13,13],"cats_only":true,"motion":"batted","doing":"doing_bat_chime"},{"id":"doghouse","name":"大狗屋","name_en":"Dog house","price":500,"room":1,"place":[692,484],"seats":[[17,34]],"front":true,"dogs_only":true,"seat_actions":["lie","lie","sit"],"stay":{"lie":[420,720],"sit":[300,480]},"stay_chance":0.3,"no_bounce":true,"faces":[false],"solid":true},{"id":"swing","name":"秋千","name_en":"Swing","price":600,"room":1,"place":[328,496],"seats":[[15,30]],"seat_shift":[[[0,0]],[[3,-1]],[[0,0]],[[-3,-1]]],"motion":"swing","seat_actions":["sit"],"stay":{"sit":[360,600]},"stay_chance":0.3,"no_bounce":true,"weight":2,"doing":"doing_swing"},{"id":"pool","name":"小水池","name_en":"Paddling pool","price":700,"room":1,"place":[432,580],"seats":[[24,14]],"front":true,"flat":true,"solid":true,"back_foot":true,"swim":5,"dogs_only":true,"motion":"ripple","splash":true,"weight":2,"seat_actions":["swim","swim","sit"],"stay":{"swim":[300,480],"sit":[180,300]},"stay_chance":0.25,"no_bounce":true,"doing":"doing_pool"},{"id":"seesaw","name":"跷跷板","name_en":"Seesaw","price":800,"room":1,"place":[216,584],"seats":[[5,7],[46,7]],"seat_shift":[[[0,0],[0,0]],[[0,3],[0,-3]],[[0,-3],[0,3]]],"motion":"seesaw","pair":true,"seat_actions":["sit"],"stay":{"sit":[240,420]},"stay_chance":0.5,"no_bounce":true,"doing":"doing_seesaw"},{"id":"slide","name":"滑梯","name_en":"Slide","price":900,"room":1,"place":[500,476],"seats":[[8,5]],"climb":[6,22],"quick":true,"chute":[[16,5],[43,32]],"slide_end":[46,38],"weight":5,"seat_actions":["sit"],"stay":{"sit":[40,90]},"stay_chance":0,"no_bounce":true},{"id":"hammock","name":"双人吊床","name_en":"Hammock","price":1000,"room":1,"place":[652,584],"seats":[[18,17],[41,17]],"seat_shift":[[[0,0],[0,0]],[[1,0],[1,0]],[[0,0],[0,0]],[[-1,0],[-1,0]]],"motion":"sway","pair":true,"front":true,"bend":true,"faces":[true,false],"seat_actions":["lie"],"stay":{"lie":[360,600]},"stay_chance":0.35,"no_bounce":true,"doing":"doing_hammock"},{"id":"treehouse","name":"大树屋","name_en":"Treehouse","price":1500,"room":1,"place":[148,456],"seats":[[42,58],[40,44]],"climb":[26,76],"cats_only":true,"seat_actions":["sit","sit","lie"],"no_bounce":true,"stay":{"sit":[240,420],"lie":[360,540]},"stay_chance":0.45}],"park_scale":4,"park_floor":[70,730,486,584],"park_walk_speed":0.6,"park_seat_chance":0.6,"park_hop_frames":30,"park_message_frames":150,"park_climb_frames":20,"park_climb_pause":28,"park_climb_arc":26,"park_tree_pause":[70,150],"park_tree_jump_frames":28,"park_toy_chance":0.65,"park_run_speed":1.8,"park_ball_roll_frames":50,"park_meal_gap":[2400,4200],"park_eat_rhythm":[18,10],"park_drag_start":6,"park_fall_speed":10,"park_drop_reach":40,"park_shop_per_page":7,"park_nap_chance":{"dog":0.11,"cat":0.17},"park_dog_rest":{"sit":[90,180],"lie":[180,300]},"park_cat_rest":{"sit":[120,240],"lie":[240,420]},"park_circle_size":[50,24],"park_circle_speed":0.045,"park_sniff_gap":34,"park_chase_speed":1.5,"park_wall_bottom":448,"park_spin_chance":0.08,"park_play_chance":0.78,"park_play_gap":44,"park_action_frames":{"sit":[240,480],"lie":[360,700],"spin":[90,140],"play":[180,260],"ready":[1500,1500],"eat":[240,360],"bat":[300,480],"sniff":[120,200],"circle":[240,360],"proud":[90,150],"landed":[45,45],"held":[60,60]},"park_cell_width":64,"park_cell_height":60,"park_ground":56,"PET_EATING_MOUTHS":{"shuaige":[41,48],"erbao":[41,48],"sherry":[41,50],"jiuyue":[41,48],"jiaoquan":[41,48],"duoli":[41,48],"celina":[42,48],"guaiguai":[41,49],"xunshan":[42,49],"xiaobuding":[41,48],"wooly":[41,51],"morris":[41,51],"buding":[43,49],"haishen":[40,50],"zaizai":[42,48],"heimi":[41,50]},"PARK_PET_INFO":[{"kind":"human","breed":"人类","breed_en":"Human","box":[8,11,53,48],"jump_offset":5},{"kind":"dog","breed":"贵宾犬","breed_en":"Poodle","box":[6,3,52,54],"jump_offset":6},{"kind":"dog","breed":"雪纳瑞犬","breed_en":"Schnauzer","box":[6,3,52,54],"jump_offset":6},{"kind":"dog","breed":"贵宾犬","breed_en":"Poodle","box":[6,3,53,54],"jump_offset":6},{"kind":"dog","breed":"法国斗牛犬","breed_en":"French Bulldog","box":[7,3,51,54],"jump_offset":6},{"kind":"dog","breed":"贵宾犬","breed_en":"Poodle","box":[6,3,53,54],"jump_offset":6},{"kind":"dog","breed":"腊肠犬","breed_en":"Dachshund","box":[4,3,56,54],"jump_offset":6},{"kind":"dog","breed":"卷毛比熊犬","breed_en":"Bichon Frise","box":[6,3,53,54],"jump_offset":6},{"kind":"cat","breed":"暹罗猫","breed_en":"Siamese cat","box":[6,3,53,54],"jump_offset":6},{"kind":"dog","breed":"拉布拉多寻回猎犬","breed_en":"Labrador Retriever","box":[6,3,53,54],"jump_offset":6},{"kind":"dog","breed":"图利亚尔棉花犬","breed_en":"Coton de Tulear","box":[6,3,52,54],"jump_offset":6},{"kind":"cat","breed":"布偶猫","breed_en":"Ragdoll","box":[5,3,54,54],"jump_offset":6},{"kind":"cat","breed":"苏格兰折耳猫","breed_en":"Scottish Fold","box":[4,3,56,54],"jump_offset":6},{"kind":"dog","breed":"比格犬","breed_en":"Beagle","box":[4,3,56,54],"jump_offset":6},{"kind":"dog","breed":"雪纳瑞犬","breed_en":"Schnauzer","box":[6,3,52,54],"jump_offset":6},{"kind":"dog","breed":"哈瓦那犬","breed_en":"Havanese","box":[6,3,52,54],"jump_offset":6}],"ANIMAL_POSES":["walk0","walk1","sit0","sit1","lie0","lie1","play0","play1","happy0","happy1","held0","held1","bat0","bat1","hurt0","hurt1","eat0","eat1","slide0","slide1"],"park_pet_scale":2,"park_most_pets":4,"park_choices_per_page":8,"OUTFIT_REFUNDS":{"1":{"tee":0,"hoodie":80,"overalls":120,"dress":160,"pajamas":220,"pilot":300},"2":{"workwear":0,"white_dress":120,"suit":200,"hoodie":80,"jersey":100,"onesie":150,"jk":180,"leather":250}},"GARDEN":1,"garden_price":2000,"park_slide_frames":45,"park_swim_frames":300,"park_shake_frames":[80,80],"park_head_reach":13,"park_neck_cells":6,"LYING_EYES":{"shuaige":[42,45],"erbao":[40,43],"sherry":[35,41],"jiuyue":[40,43],"jiaoquan":[44,43],"duoli":[40,43],"celina":[43,46],"guaiguai":[40,43],"xunshan":[43,44],"xiaobuding":[40,44],"wooly":[40,46],"morris":[40,46],"buding":[43,44],"haishen":[39,44],"zaizai":[43,44],"heimi":[35,41]},"park_block_margin":48,"park_slide_shift":[-8,12],"HAMMOCK_ENDS":[8,51],"POOL_FRONT":8,"park_seesaw_beat":50,"park_pair_chance":0.85,"TEXTS":{"title":["飞行搭档","Flight Friends"],"switch_language":["English","中文"],"score":["得分","Score"],"best_short":["最高 {n}","Best {n}"],"all_medals":["集齐！","All done!"],"medal_left":["还差{n}","{n} left"],"medal_first":["首次获得{medal}！","First {medal}!"],"medal_got":["获得{medal}！","{medal}!"],"medal_points":["{n} 分达成","Reached {n} points"],"bronze_medal":["铜牌","Bronze"],"silver_medal":["银牌","Silver"],"gold_medal":["金牌","Gold"],"friend_left":["新伙伴还差{n}","New friend in {n}"],"friend_run_done":["本局已获伙伴","Friend found!"],"friend_here":["就在前面！","Just ahead!"],"locked_1":["飞行中","Meet them"],"locked_2":["可遇到","in flight"],"album":["宠物图鉴","Pet Album"],"album_done":["全部集齐！","All found!"],"album_hint":["已收集 {n} / {total}，点击已解锁的宠物就能换它出战","Found {n} / {total} · click an unlocked pet to fly with it"],"previous":["上一页","Back"],"next":["下一页","Next"],"page":["第 {n} / {total} 页","Page {n} / {total}"],"album_back":["返回选角 · 按 Esc","Back · Esc"],"choose_title":["选择你的飞行搭档","Pick your flight friend"],"choose_hint":["点击角色或按 1～8 选择","Click or press 1-8"],"pet_line":["{name}  ·  最高分：{best}  ·  宠物币：{coins}","{name}  ·  Best: {best}  ·  Coins: {coins}"],"welcome":["欢迎登机，{name}！按空格键马上起飞","Welcome aboard, {name}! Press Space to fly"],"thanks_owner":["谢谢你把{name}带上飞机！","Thanks for bringing {name} aboard!"],"how_to":["操控飞机，穿过土块，接上柱子上的“？？？”新伙伴！","Fly through the gaps and pick up the ??? friends on the pillars!"],"start":["开始游戏 · 按空格键","Start · Space"],"upload":["上传我的宠物！","Add my pet!"],"keys":["空格键：上升  |  P：暂停／继续  |  R：返回选角","Space: fly up  |  P: pause  |  R: back to friends"],"quit":["关闭窗口退出","Close the window to quit"],"no_save":["最高分仅在本次运行中保留","Best score is kept for this run only"],"new_one":["新伙伴登机！","A new friend is aboard!"],"new_many":["本局解锁 {n} 位新伙伴！","{n} new friends this run!"],"swapped_one":["已换上{name}","Now flying with {name}"],"swapped_many":["已换上{name}，按 C 换下一只","Flying with {name} · C for the next one"],"press_c_one":["按 C 换它出战","Press C to fly with it"],"press_c_many":["按 C 挑一只出战","Press C to pick one"],"again":["按空格键再来一次","Press Space to fly again"],"r_back":["R：返回选角","R: back to friends"],"link_owner":["谢谢你，{name}的主人！","Thank you, {name}'s owner!"],"link_new":["获得新伙伴！","A new friend!"],"contributor":["你是第 {n} 位送宠物登机的主人","You are owner number {n} to bring a pet aboard"],"crown":["奖励：{name}的卡片戴上专属皇冠","Reward: {name}'s card wears a crown"],"bonus":["奖励：额外解锁 {names}","Reward: also unlocked {names}"],"joined":["{name}已加入你的图鉴，马上带它起飞吧","{name} joined your album. Take it flying!"],"want_aboard":["你家宠物也想登机？","Want your own pet aboard?"],"upload_hint":["在选角页点“上传我的宠物！”，还有主人奖励","Click Add my pet! on the first page for an owner reward"],"accept":["收下 · 按空格键","Got it · Space"],"paused":["暂停一下","Paused"],"score_line":["得分：{n}","Score: {n}"],"resume":["按 P 继续飞行","Press P to keep flying"],"back_quit":["R：返回选角  |  关闭窗口退出","R: back to friends  |  close the window to quit"],"crashed":["坠机啦！","Crashed!"],"record_note":["  新纪录！","  New best!"],"run_line":["本局 {score}{medal}  ·  最高 {best}  ·  宠物币 +{coins}{record}","This run {score}{medal}  ·  Best {best}  ·  Coins +{coins}{record}"],"run_score":["本局得分：{n}","This run: {n}"],"best_score":["最高分：{n}","Best: {n}"],"board_title":["全服前三","Top 3"],"board_loading":["加载中...","Loading..."],"board_empty":["还没人上榜","No scores yet"],"board_offline":["排行榜连不上","Board offline"],"board_you":["（你）"," (you)"],"board_made":["你进前三了！","You made top 3!"],"board_name_hint":["输入昵称","Your name"],"board_ok":["上榜","Save"],"board_sent":["已上榜！","You're on it!"],"board_points":["{n} 分","{n} pts"],"board_open":["虚位以待","Open spot"],"board_hint":["打进前三就能留名","Beat #3 to join"],"new_best":["刷新个人纪录！","New personal best!"],"run_coins":["本局宠物币 +{n}  ·  共 {total}","Coins this run +{n}  ·  Total {total}"],"names_joiner":["、",", "],"back_touch":["返回","Back"],"again_touch":["点击屏幕再来一次","Tap to fly again"],"keys_touch":["点击屏幕：上升  |  P：暂停／继续  |  R：返回选角","Tap: fly up  |  P: pause  |  R: back to friends"],"quit_web":["关闭网页退出","Close the page to quit"],"no_save_web":["最高分仅在本次打开时保留","Best score is kept for this visit only"],"load_failed":["加载失败，请刷新页面再试","Loading failed. Please refresh the page"],"old_browser":["这个浏览器太旧了，请换用新版 Chrome、Edge 或 Safari","This browser is too old. Please use a new Chrome, Edge or Safari"],"park_button":["乐园","Park"],"park":["宠物乐园","Pet Park"],"back_esc":["返回 · Esc","Back · Esc"],"shop":["家具商店","Shop"],"pet_wardrobe":["宠物衣橱","Pet wardrobe"],"pet_store_hint":["点击未拥有的服饰购买，已拥有的点击穿脱","Buy once for all pets; click owned items to wear or remove"],"pet_remove_all":["全部脱下","Remove all"],"pet_buy":["购买 {n} 币","Buy: {n} coins"],"pet_wear":["点击穿戴","Wear"],"pet_wearing":["已穿 · 可脱下","Worn · remove"],"pets_button":["选宠物","Pets"],"coins_short":["还差 {count} 个宠物币，去飞一局吧！","{count} more coins needed. Go fly!"],"bought":["买到了{name}！","Bought: {name}!"],"placed":["{name}放好啦！","{name} is in place!"],"room_full":["小屋最多住 {count} 只，先点掉一只吧","The room fits {count}. Send one out first"],"doing_seat":["在{place}上休息","Resting on the {place}"],"doing_seat_nap":["在{place}上打盹","Napping on the {place}"],"doing_climb":["在爬{place}","Climbing the {place}"],"doing_jump":["在跳上{place}","Jumping onto the {place}"],"doing_inside":["窝在{place}里","Snug in the {place}"],"doing_seat_play":["在{place}上玩","Playing on the {place}"],"doing_chase":["追着{friend}跑","Chasing {friend}"],"doing_flee":["被{friend}追着跑","Running from {friend}"],"doing_sniff":["和{friend}互相闻闻","Sniffing {friend} hello"],"doing_circle":["和{friend}转圈跑","Running circles with {friend}"],"doing_eat":["在吃饭","Eating"],"doing_go_eat":["去吃东西","Off for a snack"],"doing_drink":["在喝水","Having a drink"],"doing_bat":["在玩逗猫棒","Batting the teaser"],"doing_ball":["在追球","Chasing the ball"],"doing_proud":["玩得好开心","Happy after a game"],"doing_held":["被拎起来啦","Being carried"],"doing_landed":["抖抖毛","Shaking it off"],"pet_drag_hint":["松开鼠标，把它放到别处","Let go to put it down"],"doing_meet":["去找{friend}","Going to {friend}"],"doing_walk":["到处溜达","Strolling around"],"doing_sit":["坐着发呆","Sitting and dreaming"],"doing_lie":["睡午觉","Taking a nap"],"doing_spin":["转圈追尾巴","Chasing its tail"],"doing_play":["和{friend}打闹","Playing with {friend}"],"doing_ready":["等{friend}","Waiting for {friend}"],"breed_line":["品种：{breed}","Breed: {breed}"],"founder":["创始伙伴","Founding friend"],"submitted":["投稿伙伴","Shared by an owner"],"doing_line":["正在：{doing}","Now: {doing}"],"hoodie_on":["免费试穿黄色卫衣","Try the yellow hoodie (free)"],"hoodie_off":["脱下卫衣","Take the hoodie off"],"like":["点赞","Like"],"liked":["已点赞","Liked"],"like_count":["{count}个人\n觉得它很可爱！","{count} people think\nit's adorable!"],"tap_to_hop":["点它会跳一下哦","Click it to hop"],"move":["拖动","Move"],"choose_pets":["选宠物","Pick pets"],"in_room":["屋里 {count} / {most} 只，点卡片换","In the room: {count} / {most}"],"stored":["{name}已收回仓库，可在家具商店取出","{name} stored; retrieve it from the shop"],"retrieve":["取出","Place"],"storage_bin":["收回仓库","Store"],"drag_hint":["拖动摆放 · 拖到垃圾桶松开可收回仓库","Drag to place; release over the bin to store"],"park_hint_empty":["去家具商店，用宠物币给小屋添家具","Visit the shop and spend pet coins on furniture"],"park_hint":["点宠物看介绍 · 宠物和家具都能拖","Click a pet · drag pets or furniture"],"garden":["后院花园","Backyard Garden"],"to_garden":["去花园","Garden"],"to_living":["回客厅","Inside"],"garden_confirm":["再点一次箭头，花 {price} 币买下后院花园","Click the arrow again: {price} coins for the garden"],"garden_short":["还差 {count} 个宠物币才能买下花园","{count} more coins to buy the garden"],"garden_bought":["后院花园开放啦！去家具商店添大玩具吧","The garden is open! Get toys in the shop"],"in_garden":["花园里 {count} / {most} 只，点卡片换","In the garden: {count} / {most}"],"tag_garden":["在花园","Garden"],"tag_living":["在客厅","Inside"],"moved_room":["{name}搬过来啦","{name} moved here"],"garden_hint_empty":["去家具商店，给花园添大玩具","Visit the shop for big garden toys"],"doing_slide":["在滑滑梯，呜——","Whee, down the slide!"],"doing_swing":["在荡秋千","On the swing"],"doing_seesaw":["在玩跷跷板","On the seesaw"],"doing_pool":["在水池里玩水","Splashing in the pool"],"doing_hammock":["在吊床上晃悠","Swaying in the hammock"],"doing_bat_chime":["在拍风铃","Batting the wind chime"],"quiz_button":["足迹","Tracks"],"quiz_title":["足迹侦探","Track Detective"],"quiz_ask":["第 {n}/{total} 题：这是谁的脚印？","{n}/{total}: Whose footprint is this?"],"quiz_keys":["点一个答案，或按 1~3","Click an answer or press 1-3"],"quiz_keys_touch":["点一个答案","Tap an answer"],"quiz_next_touch":["下一题","Next"],"quiz_results_touch":["看成绩","Results"],"quiz_right":["答对了！","You got it!"],"quiz_wrong":["差一点！","So close!"],"quiz_it_was":["这是{name}的脚印","Answer: {name}"],"did_you_know":["你知道吗？","Did you know?"],"quiz_next":["下一题 · 空格","Next · Space"],"quiz_results":["看成绩 · 空格","Results · Space"],"quiz_score":["答对 {right} / {total} 题！","{right} / {total} right!"],"quiz_coins":["获得 {n} 个宠物币","You earned {n} pet coins"],"quiz_perfect":["全部答对！获得 {n} 个宠物币","All right! You earned {n} pet coins"],"quiz_again":["再玩一次","Play again"],"catch_button":["接零食","Snacks"],"catch_title":["零食接接乐","Snack Catch"],"catch_pick":["选一位小伙伴来接零食","Pick a friend to catch the snacks"],"catch_good":["能吃：","Yummy:"],"catch_bad_food":["不能吃：","Never:"],"catch_hint":["好零食 +10 分，撑满40秒每10分换1爪印币","Good snacks +10; survive 40s to earn 1 paw coin per 10 points"],"catch_count":["积分 {n}","Score {n}"],"catch_bad":["{name}有毒！","{name} is bad!"],"catch_time_up":["时间到！","Time's up!"],"catch_no_hearts":["爱心用完了","Out of hearts"],"catch_result":["本轮积分：{n}","Round score: {n}"],"catch_reward":["积分奖励：+{n} 爪印币","Score reward: +{n} paw coins"],"catch_tip":["巧克力、葡萄、洋葱对猫狗有毒，千万别喂！","Chocolate, grapes and onions are poisonous to cats and dogs. Never feed them!"],"catch_change":["换一位","Change pet"]},"LANGUAGES":["zh","en"],"TRACK_ANIMALS":[{"id":"dog","name":"狗","name_en":"Dog","fact":"狗的鼻纹和人的指纹一样，每只狗都不一样！","fact_en":"A dog's nose print is one of a kind, just like your fingerprint!"},{"id":"cat","name":"猫","name_en":"Cat","fact":"猫走路时会把爪子收起来，所以脚印里看不到爪痕。","fact_en":"Cats tuck their claws in when they walk, so their prints show no claw marks."},{"id":"bear","name":"熊","name_en":"Bear","fact":"熊走路时整个脚掌着地，后脚印看起来很像人的脚印！","fact_en":"Bears walk flat-footed like us. Their back footprint looks almost human!"},{"id":"raccoon","name":"浣熊","name_en":"Raccoon","fact":"浣熊的前爪像小手一样灵活，能拧开罐子、拨开门闩。","fact_en":"Raccoon paws work like little hands. They can open jars and latches!"},{"id":"rabbit","name":"兔子","name_en":"Rabbit","fact":"兔子跳的时候，大大的后脚会落在小前脚的前面。","fact_en":"When a rabbit hops, its big back feet land in front of its small front feet."},{"id":"deer","name":"鹿","name_en":"Deer","fact":"公鹿的角每年都会掉下来，然后再长出一对新的。","fact_en":"A male deer drops his antlers every year and grows a brand-new pair."},{"id":"horse","name":"马","name_en":"Horse","fact":"马每只脚只用一个脚趾走路，马蹄其实是一个超大的脚指甲！","fact_en":"Horses walk on one toe per foot. A hoof is a giant toenail!"},{"id":"elephant","name":"大象","name_en":"Elephant","fact":"大象能用脚感觉到远处同伴踩地的震动，像用脚在听。","fact_en":"Elephants feel the rumbles of far-away elephants through their feet."},{"id":"duck","name":"鸭子","name_en":"Duck","fact":"鸭子站在冰上也不怕冷，脚里的血管会帮它留住热量。","fact_en":"Ducks can stand on ice: special blood vessels keep the heat in their bodies."},{"id":"chicken","name":"鸡","name_en":"Chicken","fact":"鸡是恐龙的亲戚，霸王龙算是它的远房表亲！","fact_en":"Chickens are related to dinosaurs. T. rex is a distant cousin!"}],"TRACK_IDS":["dog","cat","bear","raccoon","rabbit","deer","horse","elephant","duck","chicken"],"TRACK_SIZE":42,"QUIZ_CELL":32,"quiz_questions":5,"quiz_choices":3,"quiz_coins_per_right":2,"quiz_perfect_bonus":3,"quiz_fact_delay":45,"quiz_reveal_frames":480,"quiz_wiggle_frames":18,"QUIZ_ENABLED":false,"HOODIE_ENABLED":false,"PET_LIKE_BASE":{"shuaige":37,"erbao":45,"sherry":50,"jiuyue":39,"jiaoquan":35,"duoli":47,"celina":34,"guaiguai":33,"xunshan":48,"xiaobuding":39,"wooly":33,"buding":43,"haishen":49,"zaizai":49,"heimi":41,"morris":46},"like_refresh_ms":20000,"like_photo_shrink":80,"SOUND_EFFECTS":{"flap":[[0,0.07,"sine",392,784,0.32]],"score":[[0,0.05,"square",988,988,0.16],[0.05,0.09,"square",1319,1319,0.16]],"crash":[[0,0.45,"noise",900,120,0.4],[0,0.35,"square",260,55,0.22]],"coin":[[0,0.05,"square",1319,1319,0.14],[0.05,0.16,"square",1976,1976,0.14]],"new_friend":[[0,0.1,"square",523,523,0.16],[0.1,0.1,"square",659,659,0.16],[0.2,0.1,"square",784,784,0.16],[0.3,0.32,"square",1047,1047,0.18],[0.3,0.32,"triangle",523,523,0.25]],"good_food":[[0,0.04,"triangle",784,784,0.24],[0.04,0.04,"triangle",988,988,0.24],[0.08,0.1,"triangle",1175,1175,0.24]],"bad_food":[[0,0.2,"square",330,150,0.2],[0.04,0.16,"noise",400,200,0.12]],"lose_heart":[[0.12,0.12,"triangle",392,392,0.35],[0.24,0.22,"triangle",262,247,0.35]],"pet_tap":[[0,0.08,"triangle",660,990,0.35]],"pick_up":[[0,0.14,"triangle",330,780,0.32]],"put_down":[[0,0.12,"triangle",600,220,0.32],[0.08,0.06,"noise",300,150,0.12]],"buy":[[0,0.06,"square",784,784,0.14],[0.06,0.06,"square",1047,1047,0.14],[0.12,0.2,"square",1568,1568,0.14]],"slide":[[0,0.5,"sine",1100,380,0.22]],"boing":[[0,0.16,"triangle",196,392,0.26],[0.12,0.12,"triangle",392,294,0.16]],"creak":[[0,0.1,"triangle",330,370,0.06]],"splash":[[0,0.28,"noise",2600,500,0.18],[0,0.12,"sine",520,180,0.16]],"chime":[[0,0.7,"sine",1397,1397,0.12],[0.07,0.7,"sine",1760,1760,0.1],[0.14,0.8,"sine",2093,2093,0.08]]},"MUSIC":{"flight":{"tempo":150,"tracks":[{"wave":"triangle","volume":0.13,"notes":"C5 . E5 G5 C6 . G5 E5 F5 . A5 C6 A5 . F5 . G5 . B5 D6 G5 . F5 E5 D5 - E5 F5 G5 - - . E5 . G5 C6 E6 . C6 G5 A5 . F5 A5 C6 . A5 F5 G5 . E5 G5 B5 . D6 B5 C6 - G5 E5 C5 - - ."},{"wave":"triangle","volume":0.16,"notes":"C3 . C4 . C3 . C4 . F2 . F3 . F2 . F3 . G2 . G3 . G2 . G3 . G2 . G3 . B2 . D3 . C3 . C4 . C3 . C4 . F2 . F3 . F2 . F3 . G2 . G3 . G2 . G3 . C3 . G2 . C3 - - ."}]},"park":{"tempo":96,"tracks":[{"wave":"triangle","volume":0.2,"notes":"A4 - - C5 F5 - E5 - D5 - - C5 A4 - - . A#4 - - D5 G5 - F5 - E5 - - - C5 - - . A4 - - C5 F5 - A5 - G5 - F5 - D5 - - . A#4 - D5 - C5 - E5 - F5 - - - - - . ."},{"wave":"triangle","volume":0.13,"notes":"F2 - - - C3 - - - D2 - - - A2 - - - A#2 - - - F2 - - - C3 - - - G2 - - - F2 - - - C3 - - - A#2 - - - F2 - - - A#2 - - - C3 - - - F2 - - - - - - ."}]},"catch":{"tempo":132,"tracks":[{"wave":"sine","volume":0.2,"short":0.45,"notes":"C5 . F5 . A5 G5 . F5 . . C5 . D5 . F5 . A#4 . D5 . F5 E5 . D5 . . C5 . A4 . C5 . C5 . F5 . A5 G5 . F5 . . A5 . C6 . A5 . A#5 . A5 . G5 . E5 . F5 . . C5 F5 . . ."},{"wave":"triangle","volume":0.17,"short":0.5,"notes":"F2 . C3 . F2 . C3 . A#1 . F2 . A#1 . F2 . A#1 . F2 . A#1 . F2 . F2 . C3 . F2 . C3 . F2 . C3 . F2 . C3 . F2 . C3 . F2 . C3 . C2 . G2 . C2 . G2 . F2 . C3 . F2 . . ."},{"wave":"noise","volume":0.05,"short":0.2,"notes":". C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8 . C8"}]}},"CATCH_FOODS":{"bone":{"good":true,"name":"骨头","name_en":"Bone"},"fish":{"good":true,"name":"小鱼","name_en":"Fish"},"drumstick":{"good":true,"name":"鸡腿","name_en":"Drumstick"},"biscuit":{"good":true,"name":"饼干","name_en":"Biscuit"},"chocolate":{"good":false,"name":"巧克力","name_en":"Chocolate"},"grapes":{"good":false,"name":"葡萄","name_en":"Grapes"},"onion":{"good":false,"name":"洋葱","name_en":"Onion"}},"CATCH_GOOD":["bone","fish","drumstick","biscuit"],"CATCH_BAD":["chocolate","grapes","onion"],"catch_hearts":3,"catch_frames":2400,"catch_countdown":120,"CATCH_BACKGROUNDS":["bakery","picnic","seaside"],"catch_points_per_food":10,"catch_points_per_coin":10,"catch_spawn_lanes":7,"catch_spawn_gap":[48,22],"catch_fall_speed":[2.6,5.4],"catch_bad_share":[0.3,0.3],"catch_move_speed":16,"catch_scale":3,"catch_ground":588,"catch_per_page":8,"LEADERBOARD_URL":"https://jvpakstklehznnyvbuuh.supabase.co","LEADERBOARD_KEY":"sb_publishable_uHN-NBLcbrDdMoEek2z03A_Nsaf5fKZ","board_size":3,"board_name_length":8},"sprites":{"fox":[["..K..........K..",".KOK........KOK.",".KOOK......KOOK.",".KOBOKKKKKKOBOK.",".KOOOOOOOOOOOOK.","KOOOOOOOOOOOOOOK","KOOBBOOOOOOBBOOK","KWWOOOOOOOOOOWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","...KOOWWWWOOK...","...KOOWWWWOOKKK.","...KOOOOOOOOKOOK","...KOKKOOKKOKOWK","...KKK.KK.KKKKK."],["..K..........K..",".KOK........KOK.",".KOOK......KOOK.",".KOBOKKKKKKOBOK.",".KOOOOOOOOOOOOK.","KOOOOOOOOOOOOOOK","KOOKKOOOOOOKKOOK","KWWOOOOOOOOOOWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","...KOOWWWWOOK...","...KOOWWWWOOKKK.","...KOOOOOOOOKOOK","...KOKKOOKKOKOWK","...KKK.KK.KKKKK."]],"rabbit":[["..KK......KK..",".KLLK....KLLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLLKKKKKKLLK.","KLLLLLLLLLLLLK","KLLBBLLLLBBLLK","KPPLLLPPLLLPPK",".KLLLLKKLLLLK.","..KKLLLLLLKK..","..KLLWWWWLLK..","..KLLWWWWLLKKK","..KLKLLLLKLKWK","..KKK.KK.KKKK."],["..KK......KK..",".KLLK....KLLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLLKKKKKKLLK.","KLLLLLLLLLLLLK","KLLKKLLLLKKLLK","KPPLLLPPLLLPPK",".KLLLLKKLLLLK.","..KKLLLLLLKK..","..KLLWWWWLLK..","..KLLWWWWLLKKK","..KLKLLLLKLKWK","..KKK.KK.KKKK."]],"hedgehog":[["...K..K..K..K.....","..KDKKDKKDKKDK....",".KDDtDDtDDtDDDK...","KDtDDtDDtDDtDDDK..","KDDtDDtDDtDDKKKK..","KDtDDtDDtDKTTTTTK.","KDDtDDtDDKTTBBTTTK","KDtDDtDDKTTTTTTTBK",".KDDDDDKTTPTTTTTK.","..KTTKKKKTTKKKKK..","..KKK....KKK......"],["...K..K..K..K.....","..KDKKDKKDKKDK....",".KDDtDDtDDtDDDK...","KDtDDtDDtDDtDDDK..","KDDtDDtDDtDDKKKK..","KDtDDtDDtDKTTTTTK.","KDDtDDtDDKTTKKTTTK","KDtDDtDDKTTTTTTTBK",".KDDDDDKTTPTTTTTK.","..KTTKKKKTTKKKKK..","..KKK....KKK......"]],"frog":[["...KKK....KKK...","..KWWWK..KWWWK..","..KWBBK..KBBWK..",".KEEEEKKKKEEEEK.","KEEEEEEEEEEEEEEK","KPPEEEEEEEEEEPPK","KEEKEEEEEEEEKEEK","KEEEKKKKKKKKEEEK",".KEEEeeeeeeEEEK.","KeeKEEEKKEEEKeeK","KKKKKKK..KKKKKKK"],["...KKK....KKK...","..KWWWK..KWWWK..","..KKKKK..KKKKK..",".KEEEEKKKKEEEEK.","KEEEEEEEEEEEEEEK","KPPEEEEEEEEEEPPK","KEEKEEEEEEEEKEEK","KEEEKKKKKKKKEEEK",".KEEEeeeeeeEEEK.","KeeKEEEKKEEEKeeK","KKKKKKK..KKKKKKK"]],"squirrel":[["...........KKKK.","..K..K....KtttTK",".KtKKtK..KtttttK",".KttttK..KttKKtK","KtBBttK..KtK.KtK","KtttttK..KKK.KtK","KPTTtK......KttK",".KKTttKKKKKKttK.","..KTTttttttttK..","..KTTTttttttK...","..KTKTTtttttK...","..KKKTTtKKttK...","....KKKK.KKKK..."],["...........KKKK.","..K..K....KtttTK",".KtKKtK..KtttttK",".KttttK..KttKKtK","KtKKttK..KtK.KtK","KtttttK..KKK.KtK","KPTTtK......KttK",".KKTttKKKKKKttK.","..KTTttttttttK..","..KTTTttttttK...","..KTKTTtttttK...","..KKKTTtKKttK...","....KKKK.KKKK..."]],"duckling":[["....KKKKKK....","...KYYYYYYK...","..KYYYYYYYYK..","..KYBBYYBBYK..","..KYYKyyKYYK..","..KPYYyyYYPK..",".KYYYYYYYYYYK.","KYYKYYYYYYKYYK","KYK.KYYYYK.KYK",".K..KYYYYK..K.","....KKKKKK....","....yyK.yyK...","...yyyK.yyyK.."],["....KKKKKK....","...KYYYYYYK...","..KYYYYYYYYK..","..KYKKYYKKYK..","..KYYKyyKYYK..","..KPYYyyYYPK..",".KYYYYYYYYYYK.","KYYKYYYYYYKYYK","KYK.KYYYYK.KYK",".K..KYYYYK..K.","....KKKKKK....","....yyK.yyK...","...yyyK.yyyK.."]],"bat":[["....K....K....","....K....K....","...KVVVVVVK...","..KVvVVVVvVK..",".KVvVVVVVVvVK.","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK",".KVvVVVVVVvVK.","..KKVVVVVVKK..","...KWBWWBWK...","...KWWPPWWK...","..KVKVVVVKVK..","..KK.KKKK.KK.."],["....K....K....","....K....K....","...KVVVVVVK...","..KVvVVVVvVK..",".KVvVVVVVVvVK.","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK",".KVvVVVVVVvVK.","..KKVVVVVVKK..","...KWKWWKWK...","...KWWPPWWK...","..KVKVVVVKVK..","..KK.KKKK.KK.."]],"sloth":[["..KK........KK..","..KtK......KtK..","..KtK......KtK..","..KtKKKKKKKKtK..","..KttttttttttK..",".KttTTTTTTTTttK.",".KtTDDTTTTDDTtK.",".KtTDBTTTTBDTtK.",".KtTTTTKKTTTTtK.",".KttTPTTTTPTttK.","..KtttTTTTtttK..","..KttttttttttK..","...KttttttttK...","....KKttttKK....","......KKKK......"],["..KK........KK..","..KtK......KtK..","..KtK......KtK..","..KtKKKKKKKKtK..","..KttttttttttK..",".KttTTTTTTTTttK.",".KtTDDTTTTDDTtK.",".KtTDDTTTTDDTtK.",".KtTTTTKKTTTTtK.",".KttTPTTTTPTttK.","..KtttTTTTtttK..","..KttttttttttK..","...KttttttttK...","....KKttttKK....","......KKKK......"]],"raccoon":[["..KK........KK..",".KGGK......KGGK.",".KGGKKKKKKKKGGK.","KGGGGGGGGGGGGGGK","KGKKKKGGGGKKKKGK","KKKBWKKGGKKWBKKK","KGKKKKWWWWKKKKGK",".KGGWWWBBWWWGGK.","..KKKWWWWWWKKK..","...KGGGGGGGGK...","...KGGLLLLGGKKK.","...KGKGGGGKGKDGK","...KKK.KK.KKKKK."],["..KK........KK..",".KGGK......KGGK.",".KGGKKKKKKKKGGK.","KGGGGGGGGGGGGGGK","KGKKKKGGGGKKKKGK","KKKKKKKGGKKKKKKK","KGKKKKWWWWKKKKGK",".KGGWWWBBWWWGGK.","..KKKWWWWWWKKK..","...KGGGGGGGGK...","...KGGLLLLGGKKK.","...KGKGGGGKGKDGK","...KKK.KK.KKKKK."]],"badger":[["...KK......KK...","..KWWKKKKKKWWK..",".KWWKKWWWWKKWWK.",".KWKKKWWWWKKKWK.","KWWKWKWWWWKWKWWK","KWWKKKWWWWKKKWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","..KGGGGGGGGGGK..","..KGGGGGGGGGGK..","..KGKKGGGGKKGK..","..KKK.KKKK.KKK.."],["...KK......KK...","..KWWKKKKKKWWK..",".KWWKKWWWWKKWWK.",".KWKKKWWWWKKKWK.","KWWKKKWWWWKKKWWK","KWWKKKWWWWKKKWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","..KGGGGGGGGGGK..","..KGGGGGGGGGGK..","..KGKKGGGGKKGK..","..KKK.KKKK.KKK.."]],"tortoise":[["......KKKKKK........","....KKEeEEeEKK......","...KeEEKEEKEEeK.....","..KEEeEEKKEEeEEK.KK.",".KeEEKEEeEEKEEeEKTTK",".KEeEEKKEEKKEEeEKTBK","KEEEEEEEEEEEEEEEETTK","KKKKKKKKKKKKKKKKKTK.",".KTTK.......KTTK.K..",".KKKK.......KKKK...."],["......KKKKKK........","....KKEeEEeEKK......","...KeEEKEEKEEeK.....","..KEEeEEKKEEeEEK.KK.",".KeEEKEEeEEKEEeEKTTK",".KEeEEKKEEKKEEeEKTKK","KEEEEEEEEEEEEEEEETTK","KKKKKKKKKKKKKKKKKTK.",".KTTK.......KTTK.K..",".KKKK.......KKKK...."]],"capybara":[["..............KK....","....KKKKKKKKKKttK...","...KTTTTTTTTTTTTTK..","..KTTTTTTTTTTTTBBTK.","..KTTTTTTTTTTTTBBTTK","..KtTTTTTTTTTTTTTTDK","..KttTTTTTTTTTTTTTDK","...KtttttttTTTTTTKK.","...KttKKKKKKKKttK...","...KtK........KtK...","...KKK........KKK..."],["..............KK....","....KKKKKKKKKKttK...","...KTTTTTTTTTTTTTK..","..KTTTTTTTTTTTTTTTK.","..KTTTTTTTTTTTTKKTTK","..KtTTTTTTTTTTTTTTDK","..KttTTTTTTTTTTTTTDK","...KtttttttTTTTTTKK.","...KttKKKKKKKKttK...","...KtK........KtK...","...KKK........KKK..."]],"red_panda":[["..KK........KK..",".KWWK......KWWK.",".KOoKKKKKKKKoOK.","KooooooooooooooK","KoWWooooooooWWoK","KWBBWooooooWBBWK","KWWWWWWBBWWWWWWK",".KWWWWWWWWWWWWK.","..KKooooooooKK..","...KDDooooDDKKK.","...KDDooooDDoWK.","...KDKDDDDKDKoWK","...KKK.KK.KKKKK."],["..KK........KK..",".KWWK......KWWK.",".KOoKKKKKKKKoOK.","KooooooooooooooK","KoWWooooooooWWoK","KWKKWooooooWKKWK","KWWWWWWBBWWWWWWK",".KWWWWWWWWWWWWK.","..KKooooooooKK..","...KDDooooDDKKK.","...KDDooooDDoWK.","...KDKDDDDKDKoWK","...KKK.KK.KKKKK."]],"mole":[["....KKKKKK....","...KDDDDDDK...","..KDDDDDDDDK..","..KDBDDDDBDK..",".KDDDDPPDDDDK.",".KDDDKPPKDDDK.","KDDDDDDDDDDDDK","KWWKDDDDDDKWWK","KWWKDDDDDDKWWK","KKKKKKKKKKKKKK"],["....KKKKKK....","...KDDDDDDK...","..KDDDDDDDDK..","..KDKDDDDKDK..",".KDDDDPPDDDDK.",".KDDDKPPKDDDK.","KDDDDDDDDDDDDK","KWWKDDDDDDKWWK","KWWKDDDDDDKWWK","KKKKKKKKKKKKKK"]],"monkey":[["...KtK....KtK...","...KtK....KtK...","...KtK....KtK...","...KttKKKKttK...","...KttttttttK...","..KKttttttttKK..",".KTtKtTTTTtKtTK.",".KTtKTBTTBTKtTK.","..KKTTTTTTTTKK..","...KTTKKKKTTK...","...KTTTPPTTTK...","....KtttttK.....","...KttttttK.KK..","...KttKKttKKtK..","...KKK..KKK.KK.."],["...KtK....KtK...","...KtK....KtK...","...KtK....KtK...","...KttKKKKttK...","...KttttttttK...","..KKttttttttKK..",".KTtKtTTTTtKtTK.",".KTtKTKTTKTKtTK.","..KKTTTTTTTTKK..","...KTTKKKKTTK...","...KTTTPPTTTK...","....KtttttK.....","...KttttttK.KK..","...KttKKttKKtK..","...KKK..KKK.KK.."]],"opossum":[["......KK......","......KPK.....","......KPK.....",".....KGGK.....","....KGGGGK....","...KGGGGGGK...","..KGGGGGGGGK..","..KGGLGGLGGK..","..KGGGGGGGGK..","...KGGGGGGK...","..KPKLLLLKPK..","..KPLLLLLLPK..","...KLBLLBLK...","...KLLLLLLK...","....KLPPLK....",".....KKKK....."],["......KK......","......KPK.....","......KPK.....",".....KGGK.....","....KGGGGK....","...KGGGGGGK...","..KGGGGGGGGK..","..KGGLGGLGGK..","..KGGGGGGGGK..","...KGGGGGGK...","..KPKLLLLKPK..","..KPLLLLLLPK..","...KLKLLKLK...","...KLLLLLLK...","....KLPPLK....",".....KKKK....."]],"hanging_parrot":[["...K....K...","...K....K...","..KRRRRRRK..","..KRRRRRRK..",".KEEEEEEEEK.",".KEeEEEEeEK.",".KEeEEEEeEK.",".KEEEEEEEEK.",".KeEEEEEEeK.","..KEEEEEEK..","..KEBEEBEK..","..KEEEEEEK..","...KEyyEK...","....KyyK....",".....KK....."],["...K....K...","...K....K...","..KRRRRRRK..","..KRRRRRRK..",".KEEEEEEEEK.",".KEeEEEEeEK.",".KEeEEEEeEK.",".KEEEEEEEEK.",".KeEEEEEEeK.","..KEEEEEEK..","..KEKEEKEK..","..KEEEEEEK..","...KEyyEK...","....KyyK....",".....KK....."]],"running_fox":[["................K..K..","...............KOKKOK.","KKK............KOOOOOK","KWOKKKKKKKKKKKKOOBOOOB","KWOOOOOOOOOOOOOOOOOWWK",".KKOOOOOOOOOOOOOOWWKK.","...KOOOOOOOOOOOOWKK...","...KOOKOOOOOOKOOK.....","..KOKK.KOK.KOK.KOK....","..KK....KK..KK..KK...."],["................K..K..","...............KOKKOK.","KKK............KOOOOOK","KWOKKKKKKKKKKKKOOBOOOB","KWOOOOOOOOOOOOOOOOOWWK",".KKOOOOOOOOOOOOOOWWKK.","...KOOOOOOOOOOOOWKK...","...KOOKOOOOOOKOOK.....","....KOK..KOKOK..KOK...","....KK....KKK....KK..."]],"deer":[["..................K..K..","..................KK.K..","...................KKK..","..................KttK.K","..................KtttKK","..................KtBttK","..................KttWWK",".KK...............KtttK.","KWWKKKKKKKKKKKKKKKtttK..","KWtttttttttttttttttttK..",".KtWtttWtttWtttttttttK..",".KtttWtttWtttttttttWWK..",".KttttttttttttttttWWK...",".KtttKKKKKKKKKKKtttK....","..KtK..........KtK......","..KtK..........KtK......","..KtK..........KtK......","..KKK..........KKK......"]],"bird":[["..KK.....KK..",".KRRK...KRRK.","..KRRK.KRRK..","...KRRKRRK.K.","....KRRRKKYK.",".....KKK..K.."],[".............",".............","...KKK...K...","..KRRRKKKYK..",".KRRRRRRK.K..","KRRK.KRRK...."]],"butterfly":[["KK.K.KK","KsK.KsK","KssKssK",".KsKsK.","KsKKKsK","KK...KK"],["...K...","..KsK..",".KssK..","..KsK..",".KsKK..",".KK...."]],"coin":[["....KKKK....","..KKYYYYKK..",".KWWYYYYYYK.",".KWYDYYDYYK.","KYDYDYYDYDyK","KYDYYYYYYDyK","KYYYYDDYYYyK","KYYYDDDDYYyK","KYYYDDDDYYyK",".KYYYDDYYyK.","..KKyyyyKK..","....KKKK...."],["....KKKK....","...KYYYYK...","...KWYYyK...","...KWDYyK...","...KYDDyK...","...KYYDyK...","...KYDDyK...","...KDDDyK...","...KYDDyK...","...KYYYyK...","...KyyyyK...","....KKKK...."],[".....KK.....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....",".....KK....."]],"bronze_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KMMMMMMK.","KMWMMMMmmK","KMWMMMMmmK","KMMMMMMmmK","KMMMMMmmmK",".KmmmmmmK.","..KKKKKK.."]],"silver_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KAAAAAAK.","KAWAAAAaaK","KAWAAAAaaK","KAAAAAAaaK","KAAAAAaaaK",".KaaaaaaK.","..KKKKKK.."]],"gold_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KYYYYYYK.","KYWYYYYyyK","KYWYYYYyyK","KYYYYYYyyK","KYYYYYyyyK",".KyyyyyyK.","..KKKKKK.."]],"cat_tree":[["..................................",".........KKKK.................KKKK",".........KVVK.................KVVK",".........KVVK.................KVVK",".........KVVKKKKKKKKKKKKKKKKKKKVVK",".........KKKKPPPPPPPPPPPPPPPPPKKKK",".........KVVVPPPPPPPPPPPPPPPPPVVVK",".........KVVVVVVVVVVVVVVVVVVVVVVVK",".........KVVVVVVVVVVVVVVVVVVVVVVVK",".........KvvvvvvvvvvvvvvvvvvvvvvvK",".........KKKKKKKKKKKKKKKKKKKKKKKKK","..................KtttK...........","..................KTTTK...........","..................KtttK...........","..................KTTTK...........","..................KtttK...........","..................KTTTK...........","..................KtttK...........","..................KTTTK...........","..................KtttK...........","KKKKKKKKKKKKKKKKK.KTTTK...........","KUUUUUUUUUUUUUUUK.KtttK...........","KVVVVVVVVVVVVVVVK.KTTTK...........","KvvvvvvvvvvvvvvvK.KtttK...........","KKKKKKKKKKKKKKKKK.KTTTK...........",".....KTTTK...K....KtttK...........",".....KtttK...K....KTTTK...........",".....KTTTK...K....KtttK...........",".....KtttK...K....KTTTK...........",".....KTTTK...K....KtttK...........",".....KtttK.KKKKK..KTTTK...........",".....KTTTK.KPPRK..KtttK...........",".....KtttK.KRRRK..KTTTK...........",".....KTTTK.KRRRK..KtttK...........",".....KtttK.KKKKK.KKKKKKKKKKKKKKKKK",".....KTTTK.......KUUUUUUUUUUUUUUUK",".....KtttK.......KVVVVVVVVVVVVVVVK",".....KTTTK.......KvvvvvvvvvvvvvvvK",".....KtttK.......KKKKKKKKKKKKKKKKK",".....KTTTK..............KTTTK.....",".....KtttK..............KtttK.....",".....KTTTK..............KTTTK.....",".....KtttK..............KtttK.....",".....KTTTK..............KTTTK.....",".....KtttK..............KtttK.....",".....KTTTK..............KTTTK.....",".....KtttK..............KtttK.....",".....KTTTK..............KTTTK.....",".....KtttK..............KtttK.....",".....KTTTK..............KTTTK.....","KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK","KUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUK","KVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVK","KVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVK","KvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvK","KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"]],"crib":[["KKK..........................KKK","KtK..........................KtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtKKKKttKKttKKttKKttKKttKKttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KKK..........................KKK"]],"sofa":[["..KKKKKKKKKKKKKKKKKKKKKK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","KKKKKOOOOOOOOoOOOOOOOKKKKK","KOOOKOOOOOOOOoOOOOOOOKOOOK","KOOOKKKKKKKKKKKKKKKKKKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKKKKKKKKKKKKKKKKKKOOOK","KKKKKKKKKKKKKKKKKKKKKKKKKK","KKooooooooooooooooooooooKK",".KKKKKKKKKKKKKKKKKKKKKKKK.","..DD..................DD.."]],"lamp":[[".KKKKKKKK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KyyyyyyK.",".KKKKKKKK.","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","..KKKKKK..","..KttttK..","..KttttK..","..KKKKKK.."]],"cushion":[["KKKKKKKKKKKKKKKKKK","KSSSSSSSSSSSSSSSSK","KSSKKKKKKKKKKKKSSK","KSSKWWWWWWWWWWKSSK","KSSKKKKKKKKKKKKSSK","KSSSSSSSSSSSSSSSSK","KKKKKKKKKKKKKKKKKK"]],"plant":[[".....KK.....","....KEEK....",".KK.KEeK.KK.","KEEKKEeKKEEK","KEeEKEeKEeEK",".KEeEEeEEeK.","..KKEEeEKK..","....KeEK....","..KKKKKKKK..","..KOOOOOOK..","..KKKKKKKK..","...KOOOOK...","...KOooOK...","...KOooOK...","....KKKK...."]],"food_bowl":[["..tDtTDt..","KKKKKKKKKK","KRRRRRRRRK",".KRRWRRRK.","..KKKKKK.."]],"rug":[["............KKKKKKKKKKKKKKKKKKKK............","......KKKKWWWWPPPPPPPPPPPPPPPPWWWWKKKK......","...KKKWWWPPPPPPPPRRRRRRRRRRPPPPPPPPWWWKKK...",".KKWWWPPPPPPRRRRRRRRRRRRRRRRRRRRPPPPPPWWWKK.","KKWWWPPPPPRRRRRRRRRRRRRRRRRRRRRRRRPPPPPWWWKK","KKWWWPPPPPRRRRRRRRRRRRRRRRRRRRRRRRPPPPPWWWKK",".KKWWWPPPPPPRRRRRRRRRRRRRRRRRRRRPPPPPPWWWKK.","...KKKWWWPPPPPPPPRRRRRRRRRRPPPPPPPPWWWKKK...","......KKKKWWWWPPPPPPPPPPPPPPPPWWWWKKKK......","............KKKKKKKKKKKKKKKKKKKK............"]],"house":[[".......KK.......","......KRRK......",".....KRRRRK.....","....KRRRRRRK....","...KRRRRRRRRK...","..KRRRRRRRRRRK..",".KKKKKKKKKKKKKK.","..KWWWWWWWWWWK..","..KWKKKWWKKKWK..","..KWKSKWWKtKWK..","..KWKKKWWKtKWK..","..KWWWWWWKtKWK..","..KWWWWWWKyKWK..","..KKKKKKKKKKKK.."]],"heart":[[".KK.KK.","KRRKRRK","KRWRRRK",".KRRRK.","..KRK..","...K..."]],"arrow":[["KKKKKKK","KYYYYYK",".KYYYK.","..KYK..","...K..."]],"cat_bowl":[["...LGLGL..","KKKKKKKKKK","KPPPPPPPPK",".KPPSWPPK.","..KKKKKK.."]],"water_bowl":[["KKKKKKKKKK","KAWAAAWAAK",".KSSSSSSK.","..KKKKKK.."]],"box":[["KKKKKK..............KKKKKK","KTTTTK..............KTTTTK","KTTTTK..............KTTTTK","KTTKKKKKKKKKKKKKKKKKKKKTTK","KTTKttttttttttttttttttKTTK","KKKKttttttttttttttttttKKKK","...KttttttttttttttttttK...",".KKKKKKKKKWWWWWWKKKKKKKKK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KttttttttttttttttttttttK.",".KKKKKKKKKKKKKKKKKKKKKKKK."]],"box_front":[["..........................","..........................","..........................","..........................","..........................","..........................","..........................",".KKKKKKKKKWWWWWWKKKKKKKKK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTWWWWWWTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KTTTTTTTTTTTTTTTTTTTTTTK.",".KttttttttttttttttttttttK.",".KKKKKKKKKKKKKKKKKKKKKKKK."]],"dog_bed":[["KKKKKKKKKKKKKKKKKKKKKKKKKKKK","KmmmmmmmmmmmmmmmmmmmmmmmmmmK","KmmKKKKKKKKKKKKKKKKKKKKKKmmK","KmmKLLLLLLLLLLLLLLLLLLLLKmmK","KmmKLLLLLLLLLLLLLLLLLLLLKmmK","KmmKLLLLLLLLLLLLLLLLLLLLKmmK","KmmKLLLLLLLLLLLLLLLLLLLLKmmK","KKKKKKKKKKKKKKKKKKKKKKKKKKKK","KMssssssssssssssssssssssssMK","KMMMMMMMMMMMMMMMMMMMMMMMMMMK","KMMMMMMMMMMMMMMMMMMMMMMMMMMK","KKKKKKKKKKKKKKKKKKKKKKKKKKKK"]],"dog_bed_front":[["............................","............................","............................","............................","............................","............................","............................","KKKKKKKKKKKKKKKKKKKKKKKKKKKK","KMssssssssssssssssssssssssMK","KMMMMMMMMMMMMMMMMMMMMMMMMMMK","KMMMMMMMMMMMMMMMMMMMMMMMMMMK","KKKKKKKKKKKKKKKKKKKKKKKKKKKK"]],"ball":[[".KKKK.","KRRRWK","KYYYYK","KRRRRK","KRRRRK",".KKKK."],[".KKKK.","KRYRWK","KRYRRK","KRYRRK","KRYRRK",".KKKK."]],"teaser":[["................","..DDDDDDDDDDD...","..DDDDDDDDDDD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","..KKKKK....DD...","..KRRRK....DD...","..KRRRK....DD...","..KPPPK....DD...","..KPPPK....DD...","..KKKKK....DD...","...KKK.....DD...","...KKK.....DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","........KKKDDKKK","........KttttttK","........KKKKKKKK"],["................","..DDDDDDDDDDD...","..DDDDDDDDDDD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...","...KKKKK...DD...","...KRRRK...DD...","...KRRRK...DD...","...KPPPK...DD...","...KPPPK...DD...","...KKKKK...DD...","....KKK....DD...","....KKK....DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","........KKKDDKKK","........KttttttK","........KKKKKKKK"],["................","..DDDDDDDDDDD...","..DDDDDDDDDDD...","....K......DD...","....K......DD...","....K......DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...",".....K.....DD...","......K....DD...","......K....DD...","......K....DD...","......K....DD...","......K....DD...","......K....DD...",".......K...DD...",".......K...DD...",".......K...DD...",".....KKKKK.DD...",".....KRRRK.DD...",".....KRRRK.DD...",".....KPPPK.DD...",".....KPPPK.DD...",".....KKKKK.DD...","......KKK..DD...","......KKK..DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","........KKKDDKKK","........KttttttK","........KKKKKKKK"],["................","..DDDDDDDDDDD...","..DDDDDDDDDDD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","....K......DD...","...K.......DD...","...K.......DD...","...K.......DD...","...K.......DD...","...K.......DD...","...K.......DD...","...K.......DD...","..K........DD...","..K........DD...","..K........DD...","..K........DD...","..K........DD...","KKKKK......DD...","KRRRK......DD...","KRRRK......DD...","KPPPK......DD...","KPPPK......DD...","KKKKK......DD...",".KKK.......DD...",".KKK.......DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","...........DD...","........KKKDDKKK","........KttttttK","........KKKKKKKK"]],"startle":[["KK....KK....KK",".KK...KK...KK.","..KK..KK..KK..","...KK.KK.KK..."],["KK....KK....KK",".KK...KK...KK.","..KK..KK..KK..","...KK.KK.KK..."]],"bone":[[".KKK....KKK.","KWWWKKKKWWWK",".KWWWWWWWWK.",".KWWWWWWWLK.","KWWLKKKKWLLK",".KKK....KKK."]],"fish":[["...KKKKK.....","..KSSSSSK..KK",".KSWBSSSSKKSK","KSSSSSSSSSSSK",".KSAAASSSKKSK","..KSSSSSK..KK","...KKKKK....."]],"drumstick":[["..KKKKK.",".KMyMMMK","KMyMMMMK","KMMMMMmK","KMMMMmmK",".KMMmmK.","..KKKK..","...KWK..","..KWWWK.","..KWKWK.","...K.K.."]],"biscuit":[["..KKKK..",".KTTTTK.","KTtTTtTK","KTTTTTTK","KTTtTTtK",".KTTTTK.","..KKKK.."]],"chocolate":[["KKKKKKKK","KDmDKDmK","KmDDKmDK","KKKKKKKK","KDmDKDmK","KmDDKmDK","KKKKKKKK","KRRRRRRK","KRWRRWRK","KKKKKKKK"]],"grapes":[[".....K.KK...",".....KtEeK..","......KKK...",".KKK.KKKKKK.","KUVVKUVVKVVK","KVVvKVVvKVvK","KVvvKVvvKvvK",".KKUVVKUVVK.","..KVVvKVVvK.","..KVvvKVvvK.","...KKUVVKK..","....KVVvK...","....KVvvK...",".....KKK...."]],"onion":[["....KK..","...KEK..","..KKEKK.",".KLVLVLK","KLVLLVLK","KLVLLVLK","KLVLLVLK",".KLVVLK.","..KKKK..","...KtK.."]],"chime":[["..KKKKKKKKKKK...",".KDDDDDDDDDDDK..",".KDDDDKDDDDDDDK.","..KKKKKKKKKKDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.","...KKKKKKKKKDDK.","..KTTTTTTTTKDDK.","...KKKKKKKKKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKKKKDDK.","...KKKAaK..KDDK.",".....KAaK..KDDK.",".....KAaK..KDDK.",".....KKK...KDDK.",".....KKK...KDDK.","....KKKKK..KDDK.","...KPPPPPK.KDDK.","...KPWWWPK.KDDK.","...KPWWWPK.KDDK.","...KPPPPPK.KDDK.","...KPPPPPK.KDDK.","...KPPPPPK.KDDK.","....KKKKK..KDDK.","...........KDDK.","...........KDDK.","........KKKKDDKK",".......KttttDDtt",".......Ktttttttt",".......Ktttttttt"],["..KKKKKKKKKKK...",".KDDDDDDDDDDDK..",".KDDDDKDDDDDDDK.","..KKKKKKKKKKDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.","...KKKKKKKKKDDK.","..KTTTTTTTTKDDK.","...KKKKKKKKKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKAaKDDK.","..KAaKAaKKKKDDK.","...KKKAaK..KDDK.",".....KAaK..KDDK.",".....KAaK..KDDK.","......KKK..KDDK.","......KKK..KDDK.",".....KKKKK.KDDK.","....KPPPPPKKDDK.","....KPWWWPKKDDK.","....KPWWWPKKDDK.","....KPPPPPKKDDK.","....KPPPPPKKDDK.","....KPPPPPKKDDK.",".....KKKKK.KDDK.","...........KDDK.","...........KDDK.","........KKKKDDKK",".......KttttDDtt",".......Ktttttttt",".......Ktttttttt"],["..KKKKKKKKKKK...",".KDDDDDDDDDDDK..",".KDDDDKDDDDDDDK.","..KKKKKKKKKKDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.","......KKK..KDDK.","....KKKKKKKKDDK.","...KTTTTTTTTKDK.","....KKKKKKKKDDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKAaKDK.","...KAaKAaKKKDDK.","....KKKAaK.KDDK.","......KAaK.KDDK.","......KAaKKKDDK.",".......KKKKKDDK.","........KKKKDDK.",".......KKKKKDDK.","......KPPPPPKDK.","......KPWWWPKDK.","......KPWWWPKDK.","......KPPPPPKDK.","......KPPPPPKDK.","......KPPPPPKDK.",".......KKKKKDDK.","...........KDDK.","...........KDDK.","........KKKKDDKK",".......KttttDDtt",".......Ktttttttt",".......Ktttttttt"],["..KKKKKKKKKKK...",".KDDDDDDDDDDDK..",".KDDDDKDDDDDDDK.","..KKKKKKKKKKDDK.",".....KKK...KDDK.",".....KKK...KDDK.",".....KKK...KDDK.","....KKK....KDDK.","..KKKKKKKK.KDDK.",".KTTTTTTTTKKDDK.","..KKKKKKKK.KDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKAaKKDDK.",".KAaKAaKKK.KDDK.","..KKKAaK...KDDK.","...KKAaK...KDDK.","...KKAaK...KDDK.","...KKKK....KDDK.","...KKK.....KDDK.","..KKKKK....KDDK.",".KPPPPPK...KDDK.",".KPWWWPK...KDDK.",".KPWWWPK...KDDK.",".KPPPPPK...KDDK.",".KPPPPPK...KDDK.",".KPPPPPK...KDDK.","..KKKKK....KDDK.","...........KDDK.","...........KDDK.","........KKKKDDKK",".......KttttDDtt",".......Ktttttttt",".......Ktttttttt"]],"doghouse":[["...................KK...................","..................KRRK..................",".................KRRRRK.................","................KRRRRRRK................","...............KRRRRRRRRK...............","..............KRRRRRRRRRRK..............","............KKRRRRRRRRRRRRKK............","...........KRRRRRRRRRRRRRRRRK...........","..........KRRoooooooooooooooRK..........",".........KRRRRRRRRRRRRRRRRRRRRK.........","........KRRRRRRWWWWWWWWWWRRRRRRK........","......KKRRRRRRRWWYYYYYYWWRRRRRRRKK......",".....KRRRooooooWWYYYYYYWWoooooooRRK.....","....KRRRRRRRRRRWWWWWWWWWWRRRRRRRRRRK....","...KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK...","..KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK..",".KRRRoooooooooooooooooooooooooooooooRRK.","KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK","KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK",".KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK.","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTtttttKBBBBBBBBBBBBBBBBBBKtttttTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTtttttKBBBBBBBBBBBBBBBBBBKtttttTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTtttttKBBBBBBBBBBBBBBBBBBKtttttTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTtttttKBBBBBBBBBBBBBBBBBBKtttttTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","...KTTTTTTKBBBBBBBBBBBBBBBBBBKTTTTTTK...","....KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK...."]],"doghouse_front":[["...................KK...................","..................KRRK..................",".................KRRRRK.................","................KRRRRRRK................","...............KRRRRRRRRK...............","..............KRRRRRRRRRRK..............","............KKRRRRRRRRRRRRKK............","...........KRRRRRRRRRRRRRRRRK...........","..........KRRoooooooooooooooRK..........",".........KRRRRRRRRRRRRRRRRRRRRK.........","........KRRRRRRWWWWWWWWWWRRRRRRK........","......KKRRRRRRRWWYYYYYYWWRRRRRRRKK......",".....KRRRooooooWWYYYYYYWWoooooooRRK.....","....KRRRRRRRRRRWWWWWWWWWWRRRRRRRRRRK....","...KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK...","..KRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRK..",".KRRRooooooooooo........ooooooooooooRRK.","KRRRRRRRRRRRRR............RRRRRRRRRRRRRK","KRRRRRRRRRRR................RRRRRRRRRRRK",".KKKKKKKKKKK................KKKKKKKKKKK.","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","...KTtttttt..................ttttttTK...","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","...KTtttttt..................ttttttTK...","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","...KTtttttt..................ttttttTK...","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","...KTtttttt..................ttttttTK...","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","...KTTTTTTT..................TTTTTTTK...","....KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK...."]],"swing":[["...KKKKKKKKKKKKKKKKKKKKKKKKKK...","..KTTTTTTTTTTTTTTTTTTTTTTTTTTK..","..KttttttttttttttttttttttttttK..","..KttttttttKttttttttKttttttttK..","...KtttKKKKDKKKKKKKKDKKKKtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","..KttttK..KDK......KDK..KttttK..","..KttttK..KDK......KDK..KttttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..",".KttttK...KDK......KDK...KtttK..",".KttttK...KDK......KDK...KttttK.",".KtttK....KDK......KDK...KttttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KKKKKKKKKKKK....KtttK.",".KtttK...KRRRRRRRRRRRRK...KtttK.",".KtttK...KooooooooooooK...KtttK.","KttttK....KKKKKKKKKKKK....KttttK","KttttK....................KttttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK"],["...KKKKKKKKKKKKKKKKKKKKKKKKKK...","..KTTTTTTTTTTTTTTTTTTTTTTTTTTK..","..KttttttttttttttttttttttttttK..","..KttttttttKttttttttKttttttttK..","...KtttKKKKDKKKKKKKKDKKKKtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","..KttttK...KDK......KDK.KttttK..","..KttttK...KDK......KDK.KttttK..","..KtttK....KDK......KDK..KtttK..","..KtttK....KDK......KDK..KtttK..","..KtttK....KDK......KDK..KtttK..","..KtttK....KDK......KDK..KtttK..","..KtttK....KDK......KDK..KtttK..","..KtttK....KDK......KDK..KtttK..","..KtttK.....KDK......KDK.KtttK..","..KtttK.....KDK......KDK.KtttK..","..KtttK.....KDK......KDK.KtttK..",".KttttK.....KDK......KDK.KtttK..",".KttttK.....KDK......KDK.KttttK.",".KtttK......KDK......KDK.KttttK.",".KtttK......KDK......KDK..KtttK.",".KtttK......KDK......KDK..KtttK.",".KtttK.......KDK......KDK.KtttK.",".KtttK.......KDK......KDK.KtttK.",".KtttK.......KDK......KDK.KtttK.",".KtttK.......KKKKKKKKKKKK.KtttK.",".KtttK......KRRRRRRRRRRRRKKtttK.",".KtttK......KooooooooooooKKtttK.",".KtttK.......KKKKKKKKKKKK.KtttK.","KttttK....................KttttK","KttttK....................KttttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK"],["...KKKKKKKKKKKKKKKKKKKKKKKKKK...","..KTTTTTTTTTTTTTTTTTTTTTTTTTTK..","..KttttttttttttttttttttttttttK..","..KttttttttKttttttttKttttttttK..","...KtttKKKKDKKKKKKKKDKKKKtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","..KttttK..KDK......KDK..KttttK..","..KttttK..KDK......KDK..KttttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..","..KtttK...KDK......KDK...KtttK..",".KttttK...KDK......KDK...KtttK..",".KttttK...KDK......KDK...KttttK.",".KtttK....KDK......KDK...KttttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KDK......KDK....KtttK.",".KtttK....KKKKKKKKKKKK....KtttK.",".KtttK...KRRRRRRRRRRRRK...KtttK.",".KtttK...KooooooooooooK...KtttK.","KttttK....KKKKKKKKKKKK....KttttK","KttttK....................KttttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK"],["...KKKKKKKKKKKKKKKKKKKKKKKKKK...","..KTTTTTTTTTTTTTTTTTTTTTTTTTTK..","..KttttttttttttttttttttttttttK..","..KttttttttKttttttttKttttttttK..","...KtttKKKKDKKKKKKKKDKKKKtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","...KtttK..KDK......KDK..KtttK...","..KttttK.KDK......KDK...KttttK..","..KttttK.KDK......KDK...KttttK..","..KtttK..KDK......KDK....KtttK..","..KtttK..KDK......KDK....KtttK..","..KtttK..KDK......KDK....KtttK..","..KtttK..KDK......KDK....KtttK..","..KtttK..KDK......KDK....KtttK..","..KtttK..KDK......KDK....KtttK..","..KtttK.KDK......KDK.....KtttK..","..KtttK.KDK......KDK.....KtttK..","..KtttK.KDK......KDK.....KtttK..",".KttttK.KDK......KDK.....KtttK..",".KttttK.KDK......KDK.....KttttK.",".KtttK..KDK......KDK.....KttttK.",".KtttK..KDK......KDK......KtttK.",".KtttK..KDK......KDK......KtttK.",".KtttK.KDK......KDK.......KtttK.",".KtttK.KDK......KDK.......KtttK.",".KtttK.KDK......KDK.......KtttK.",".KtttK.KKKKKKKKKKKK.......KtttK.",".KtttKKRRRRRRRRRRRRK......KtttK.",".KtttKKooooooooooooK......KtttK.",".KtttK.KKKKKKKKKKKK.......KtttK.","KttttK....................KttttK","KttttK....................KttttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK","KtttK......................KtttK"]],"pool":[["...............KKKKKKKKKKKKKKKKKK...............","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","...KWWWWKKSSSSSSSSSSSSSScccSSSSSSSSSSSKKRRRWK...","..KWWWKKSScccSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..",".KRWWKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSScccSSSKWWWK.","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKWWWK","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSScccSSSSSSSSSKWWWK",".KRWWKSSSSSSSSSScccSSSSSSSSSSSSSSSSSSSSSSSKWWWK.","..KWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..","...KWWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRRRWK...","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","...............KKKKKKKKKKKKKKKKKK..............."],["...............KKKKKKKKKKKKKKKKKK...............","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","...KWWWWKKSSSSSSSSSSSSSSSScccSSSSSSSSSKKRRRWK...","..KWWWKKSSSScccSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..",".KRWWKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSScccSKWWWK.","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKWWWK","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSSSScccSSSSSSSKWWWK",".KRWWKSSSSSSSSSSSScccSSSSSSSSSSSSSSSSSSSSSKWWWK.","..KWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..","...KWWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRRRWK...","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","...............KKKKKKKKKKKKKKKKKK..............."]],"pool_front":[["................................................","................................................","................................................","................................................","................................................","................................................","................................................","................................................","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSScccSSSSSSSSSKWWWK",".KRWWKSSSSSSSSSScccSSSSSSSSSSSSSSSSSSSSSSSKWWWK.","..KWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..","...KWWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRRRWK...","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","...............KKKKKKKKKKKKKKKKKK..............."],["................................................","................................................","................................................","................................................","................................................","................................................","................................................","................................................","KRRWKSSSSSSSSSSSSSSSSSSSSSSSSSSSScccSSSSSSSKWWWK",".KRWWKSSSSSSSSSSSScccSSSSSSSSSSSSSSSSSSSSSKWWWK.","..KWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRWWK..","...KWWWWKKSSSSSSSSSSSSSSSSSSSSSSSSSSSSKKRRRWK...","....KKWWRRKKKKKKSSSSSSSSSSSSSSSSKKKKKKRRRRKK....","......KKKKRRRWWWKKKKKKKKKKKKKKKKRWWWWWKKKK......","..........KKKKKWWWRRRRRWWWWWRRRRRKKKKK..........","...............KKKKKKKKKKKKKKKKKK..............."]],"seesaw":[["....................................................","....................................................","....................................................","........KKK..............................KKK........",".......KDDDK............................KDDDK.......","........KDK..............................KDK........",".KKKKKKKKDKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKDKKKKKKKK.","KOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOK","KooooooooooooooooooooooooooooooooooooooooooooooooooK",".KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK.",".......................KttttK.......................","......................KttttttK......................","......................KttttttK......................","...................KKKttttttttKKK...................","..................KttttttttttttttK..................","...................KttttttttttttK..................."],["....................................................",".........................................KKK........","........................................KDDDK.....K.",".........................................KDKKKKKKKOK","....................................KKKKKKDOOOOOOOoK","........KKK..................KKKKKKKOOOOOOOoooooooK.",".......KDDDK...........KKKKKKOOOOOOOoooooooKKKKKKK..","........KDK.....KKKKKKKOOOOOOoooooooKKKKKKK.........","........KDKKKKKKOOOOOOOooooooKKKKKKK................","..KKKKKKKOOOOOOOoooooooKKKKKK.......................",".KOOOOOOOoooooooKKKKKKKKttttK.......................","KOoooooooKKKKKKK......KttttttK......................","KoKKKKKKK.............KttttttK......................",".K.................KKKttttttttKKK...................","..................KttttttttttttttK..................","...................KttttttttttttK..................."],["....................................................","........KKK.........................................",".K.....KDDDK........................................","KOKKKKKKKDK.........................................","KoOOOOOOODKKKKKK....................................",".KoooooooOOOOOOOKKKKKKK..................KKK........","..KKKKKKKoooooooOOOOOOOKKKKKK...........KDDDK.......",".........KKKKKKKoooooooOOOOOOKKKKKKK.....KDK........","................KKKKKKKooooooOOOOOOOKKKKKKDK........",".......................KKKKKKoooooooOOOOOOOKKKKKKK..",".......................KttttKKKKKKKKoooooooOOOOOOOK.","......................KttttttK......KKKKKKKoooooooOK","......................KttttttK.............KKKKKKKoK","...................KKKttttttttKKK.................K.","..................KttttttttttttttK..................","...................KttttttttttttK..................."]],"slide":[["KaaaaaaK........................................","KaKKKKK.........................................","KaK.............................................","KaK.............................................","KaKKKKKKKKKKKKKK................................","KRRRRRRRRRRRRRRRK...............................","KRRRRRRRRRRRRRRRKK..............................","KoooooooooooooooKsK.............................",".KKKKKKKKKKKKKKKYYsK............................",".KaaK....KaaKYYYYYYsK...........................",".KaaK....KaaKyYYYYYYsK..........................",".KaaKKKKKKaaKKyYYYYYYsK.........................",".KaaAAAAAAaaK.KyYYYYYYsK........................",".KaaKKKKKKaaK..KyYYYYYYsK.......................",".KaaK....KaaK...KyYYYYYYsK......................",".KaaK....KaaK....KyYYYYYYsK.....................",".KaaKKKKKKaaK.....KyYYYYYYsK....................",".KaaAAAAAAaaK......KyYYYYYYsKK..................",".KaaKKKKKKaaK.......KyYYYYYYssK.................",".KaaK....KaaK........KyYYYYYYYsK................",".KaaK....KaaK.........KyYYYYYYYsK...............",".KaaKKKKKKaaK..........KyYYYYYYYsK..............",".KaaAAAAAAaaK...........KyYYYYYYYsK.............",".KaaKKKKKKaaK............KyYYYYYYYsK............",".KaaK....KaaK.............KyyYYYYYYsK...........",".KaaK....KaaK..............KKyYYYYYYsK..........",".KaaKKKKKKaaK................KyYYYYYYsK.........",".KaaAAAAAAaaK................KayYYYYYYsK........",".KaaKKKKKKaaK................KaayYYYYYYsK.......",".KaaK....KaaK................KaaayYYYYYYsK......",".KaaK....KaaK................KaaaKyYYYYYYsK.....",".KaaKKKKKKaaK................KaaaKKyYYYYYYsK....",".KaaAAAAAAaaK................KaaaK.KyYYYYYYsKKK.",".KaaKKKKKKaaK................KaaaK..KyYYYYYYYYYK",".KaaK....KaaK................KaaaK...KyYYYYYYYYK",".KaaK....KaaK................KaaaK....KyYYYYYYYK",".KaaKKKKKKaaK................KaaaK.....KyYYYYYYK",".KaaAAAAAAaaK................KaaaK......KyKKKKK.",".KaaKKKKKKaaK................KaaaK.......K......",".KaaK....KaaK................KaaaK.............."]],"hammock":[["............................................................",".KKKK..................................................KKKK.","KTTTTK................................................KTTTTK","KttttK................................................KttttK","KtttKDK..............................................KDKtttK","KttttKDK............................................KDKttttK","KttttKDK............................................KDKttttK","KttttKKDK..........................................KDKKttttK","KttttKKDK..........................................KDKKttttK","KttttK.KWKK......................................KKRK.KttttK","KttttK.KWRRKK..................................KKWWRK.KttttK","KttttK.KWRRRWKKK............................KKKRWWWRK.KttttK","KttttK.KLRRRWWWRKK........................KKWRRRWWWPK.KttttK","KttttK..KPPRWWWRRRKKK..................KKKWWWRRRWLLK..KttttK","KttttK...KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK...KttttK","KttttK.....KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK.....KttttK","KttttK.......KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK.......KttttK","KttttK..........KKLLLRRRWWWRRRWWWRRRWWWPPPKK..........KttttK","KttttK............KKKPPPLWWRRRWWWRRPLLLKKK............KttttK","KttttK...............KKKKLLPPPLLLPPKKKK...............KttttK","KttttK...................KKKKKKKKKK...................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK"],["............................................................",".KKKK..................................................KKKK.","KTTTTK................................................KTTTTK","KttttK................................................KttttK","KtttKDK..............................................KDKtttK","KttttKDK.............................................KDKtttK","KttttKKDK...........................................KDKttttK","KttttKKDK...........................................KDKttttK","KttttK.KDK.........................................KKKKttttK","KttttK..KWKK......................................KKRKKttttK","KttttK..KWRRKK..................................KKWWRKKttttK","KttttK..KWRRRWKKK............................KKKRWWWRKKttttK","KttttK..KLRRRWWWRKK........................KKWRRRWWWPKKttttK","KttttK...KPPRWWWRRRKKK..................KKKWWWRRRWLLK.KttttK","KttttK....KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK..KttttK","KttttK......KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK....KttttK","KttttK........KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK......KttttK","KttttK...........KKLLLRRRWWWRRRWWWRRRWWWPPPKK.........KttttK","KttttK.............KKKPPPLWWRRRWWWRRPLLLKKK...........KttttK","KttttK................KKKKLLPPPLLLPPKKKK..............KttttK","KttttK....................KKKKKKKKKK..................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK"],["............................................................",".KKKK..................................................KKKK.","KTTTTK................................................KTTTTK","KttttK................................................KttttK","KtttKDK..............................................KDKtttK","KttttKDK............................................KDKttttK","KttttKDK............................................KDKttttK","KttttKKDK..........................................KDKKttttK","KttttKKDK..........................................KDKKttttK","KttttK.KWKK......................................KKRK.KttttK","KttttK.KWRRKK..................................KKWWRK.KttttK","KttttK.KWRRRWKKK............................KKKRWWWRK.KttttK","KttttK.KLRRRWWWRKK........................KKWRRRWWWPK.KttttK","KttttK..KPPRWWWRRRKKK..................KKKWWWRRRWLLK..KttttK","KttttK...KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK...KttttK","KttttK.....KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK.....KttttK","KttttK.......KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK.......KttttK","KttttK..........KKLLLRRRWWWRRRWWWRRRWWWPPPKK..........KttttK","KttttK............KKKPPPLWWRRRWWWRRPLLLKKK............KttttK","KttttK...............KKKKLLPPPLLLPPKKKK...............KttttK","KttttK...................KKKKKKKKKK...................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK"],["............................................................",".KKKK..................................................KKKK.","KTTTTK................................................KTTTTK","KttttK................................................KttttK","KtttKDK..............................................KDKtttK","KtttKDK.............................................KDKttttK","KttttKDK...........................................KDKKttttK","KttttKDK...........................................KDKKttttK","KttttKKKK.........................................KDK.KttttK","KttttKKWKK......................................KKRK..KttttK","KttttKKWRRKK..................................KKWWRK..KttttK","KttttKKWRRRWKKK............................KKKRWWWRK..KttttK","KttttKKLRRRWWWRKK........................KKWRRRWWWPK..KttttK","KttttK.KPPRWWWRRRKKK..................KKKWWWRRRWLLK...KttttK","KttttK..KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK....KttttK","KttttK....KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK......KttttK","KttttK......KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK........KttttK","KttttK.........KKLLLRRRWWWRRRWWWRRRWWWPPPKK...........KttttK","KttttK...........KKKPPPLWWRRRWWWRRPLLLKKK.............KttttK","KttttK..............KKKKLLPPPLLLPPKKKK................KttttK","KttttK..................KKKKKKKKKK....................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK","KttttK................................................KttttK"]],"hammock_front":[["............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","........K..........................................K........",".......KWKK......................................KKRK.......",".......KWRRKK..................................KKWWRK.......",".......KWRRRWKKK............................KKKRWWWRK.......",".......KLRRRWWWRKK........................KKWRRRWWWPK.......","........KPPRWWWRRRKKK..................KKKWWWRRRWLLK........",".........KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK.........","...........KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK...........",".............KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK.............","................KKLLLRRRWWWRRRWWWRRRWWWPPPKK................","..................KKKPPPLWWRRRWWWRRPLLLKKK..................",".....................KKKKLLPPPLLLPPKKKK.....................",".........................KKKKKKKKKK.........................","............................................................","............................................................","............................................................","............................................................","............................................................"],["............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................",".........K..........................................K.......","........KWKK......................................KKRK......","........KWRRKK..................................KKWWRK......","........KWRRRWKKK............................KKKRWWWRK......","........KLRRRWWWRKK........................KKWRRRWWWPK......",".........KPPRWWWRRRKKK..................KKKWWWRRRWLLK.......","..........KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK........","............KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK..........","..............KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK............",".................KKLLLRRRWWWRRRWWWRRRWWWPPPKK...............","...................KKKPPPLWWRRRWWWRRPLLLKKK.................","......................KKKKLLPPPLLLPPKKKK....................","..........................KKKKKKKKKK........................","............................................................","............................................................","............................................................","............................................................","............................................................"],["............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","........K..........................................K........",".......KWKK......................................KKRK.......",".......KWRRKK..................................KKWWRK.......",".......KWRRRWKKK............................KKKRWWWRK.......",".......KLRRRWWWRKK........................KKWRRRWWWPK.......","........KPPRWWWRRRKKK..................KKKWWWRRRWLLK........",".........KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK.........","...........KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK...........",".............KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK.............","................KKLLLRRRWWWRRRWWWRRRWWWPPPKK................","..................KKKPPPLWWRRRWWWRRPLLLKKK..................",".....................KKKKLLPPPLLLPPKKKK.....................",".........................KKKKKKKKKK.........................","............................................................","............................................................","............................................................","............................................................","............................................................"],["............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................","............................................................",".......K..........................................K.........","......KWKK......................................KKRK........","......KWRRKK..................................KKWWRK........","......KWRRRWKKK............................KKKRWWWRK........","......KLRRRWWWRKK........................KKWRRRWWWPK........",".......KPPRWWWRRRKKK..................KKKWWWRRRWLLK.........","........KKPLWWRRRWWWKKKK..........KKKKRRRWWWRRPLKK..........","..........KKLLPRRWWWRRRWKKKKKKKKKKRWWWRRRWWLPPKK............","............KKKPPWWWRRRWWWRRRWWWRRRWWWRRRLLKKK..............","...............KKLLLRRRWWWRRRWWWRRRWWWPPPKK.................",".................KKKPPPLWWRRRWWWRRPLLLKKK...................","....................KKKKLLPPPLLLPPKKKK......................","........................KKKKKKKKKK..........................","............................................................","............................................................","............................................................","............................................................","............................................................"]],"treehouse":[[".................KKKEEEEEEEEEEKKK...................","...............KKEEEEEEEEEEEEEEEEKK.................","..............KEEEEEEEEEEEEEEEEEEEEKK...............","..........KKKKEEEEEEEEEEEEEEEEEEgggggKK.............","........KKggggggEEEEEEEEEEEEEEgggggggggK............",".......KggggggggggEEEEEEEEEEEEgggggggggEKK..........",".......KggggggggggEEEEEEEEEEEEEEgggggEEEEEK.........",".......KggggggggggEEEEEEEEEEEEEEEEEEEEEEEEEK........",".......KEEggggggEEEEEEEEEEEEEEEEEEEEEEEEEEEEK.......","......KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK......",".....KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK.....",".....KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEKK....","....KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK...","....KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK..","...KEEEEEEEEEEEEEEKKEEEEEEEEEEEEEEEEEEEEEgggggEEEEK.","..KEEEEEEEEEEEEEEKRRKEEEEEEEEEEEEEEEEEEEgggggggEEEK.",".KEEgggggEEEEEEEKRRRRKEEEEEEEEEEEEEEEEEEgggggggEEEEK","KEEgggggggEEEEEKRRRRRRKEEEEEEEEEEEEEEEEEEgggggEEEEEK","KEEgggggggEEEEKRRRRPRRRKKEEEEEEEEEEEEEEEEEEEEEEEEEEE","KEEEgggggEEEEKRRRRPRRRRRRKEEEEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEEEEKKRRRPPRRRRRRRRKEEEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEEEKRRRRPRRRRRRRRRRRKEEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEEKRRRRPRRRRRRRRRRRRRKEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEKRRRRPRRRRRRRRRRRRRRRKKEEEEEEEEEEEEEEEEEEEEE","EEEEEEEKRRRPPRRRRRRRRRRRRRRRRRRKEEEEEEEEEEEEEEEEEEEE","EEEEEEKRRRPRRRRRRRRRRRRRRRRRRRRRKEEEEEEEEEEEEEEEEEEE","KEEEEKRRRPRRRRRRRRRRRRRRRRRRRRRRRKKEEeeeeeeeeEEEEEEK","KEEEKRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRKeeeeeeeeeeeEEEEK","KEEEKRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRKeeeeeeeeeeeeEEK.",".KEEEKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKeeeeeeeeeeeeeEEK.","..KEEEKMmmmSSSWSSSmmmmmmmmmmmmmMKEEeeeeeeeeeeeeEEK..","...KEEKMMMMSSSWSSSMMMMMMMMMMMMMMKKEEEeeeeeeeeEEEK...","....KEKMMMMWWWWWWWMMMMMMMMMMMMMMK.KKEEEEEEEEEEKK....",".....KKMmmmSSSWSSSmmmmBBBBBBBmmMK...KKEEEEEEKK......","......KMMMMSSSWSSSMMMMBBBBBBBMMMK.....KKKKKK........","......KMMMMSSSWSSSMMMMBBBBBBBMMMK...................","......KMmmmmmmmmmmmmmmBBBBBBBmmMK...................","......KMMMMMMMMMMMMMMMBBBBBBBMMMK...................","......KMMMMMMMMMMMMMMMBBBBBBBMMMK....KKKKKKKKKKK....","......KMmmmmmmmmmmmmmmBBBBBBBmmMK...KTTTTTTTTTTTK...","......KMMMMMMMMMMMMMMMBBBBBBBMMMK....KTKKKTKKKTK....","......KMMMMMMMMMMMMMMMBBBBBBBMMMK....KTK.KTK.KTK....","......KMmmmmmmmmmmmmmmBBBBBBBmmMK....KTK.KTK.KTK....","...KKKKMMMMMMMMMMMMMMMBBBBBBBMMMKKKKKKTKKKTKKKTKK...","..KTTTTKKKKKKKKKKKKKKKKKKKKKKKKKTTTTTTTTTTTTTTTTTK..","..KTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTK..","..KttttttttttttttttttttttttttttttttttttttttttttttK..","...KKKKKKKttKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKttKKKKK...",".........KtttKK.....KtttttttttttK......KKtttK.......","..........KttttK....KtttttttttttK.....KttttK........","...........KttttK...KttDttttttttK....KttttK...KKKK..","............KKtttK..KttDttttttttK...KtttKK..KKEEEEKK","..............KtttK.KttTTTTTTTttK..KtttK...KEEEEEEEE","...............KtttKKttDttttttttKKKtttK....KEEEEEEEE","................KttttKtDttttttttKttttK.....KEEEEEEEE",".................KttttKDtttttttKttttK.......KKEEEEKK","..................KKtttKttttttKtttKK........KKttttK.","....................KttKTTTTTTKttK.......KKKttttttK.","....................KKKtttttDttKK.....KKKtttttttttK.","....................KtttttttDtttK..KKKttttttttttKK..","....................KtttttttDtttKKKtttttttttttKK....","....................KtttttttDtttKttttttttttKKK......","....................KttTTTTTTTttttttttttKKK.........","....................KtttttttDttttttttKKK............","....................KttttttttttttttKK...............","....................KtttttttttttKKK.................","....................KttttDttttttK...................","....................KttTTTTTTTttK...................","....................KttttDttttttK...................","....................KttttDttttttK...................","....................KttttDttttttK...................","....................KttttDttttttK...................","....................KttTTTTTTTttK...................","....................KtttttttttttK...................","....................KtttttttttttK...................","...................KtttttttttttttK..................","..................KtttttttttttttttK.................",".................KtttttTTTTTTTtttttK................","................KtttttttttttttttttttK...............","................KtttttttttttttttttttK...............","...............KtttttttttttttttttttttK..............","..............KtttttttttttttttttttttttK.............",".............KtttttttttttttttttttttttttK............","..............KKKKKKKKKKKKKKKKKKKKKKKKK............."]]},"sky_themes":[{"sky":[[132,208,186],[214,234,184],[255,240,190]],"body":[255,226,112],"stars":0,"cloud":[255,255,244],"far":[128,176,158],"snow":[238,246,228],"near":[92,164,84],"tree":[50,118,70],"tint":null,"ground":[72,142,70],"rain_cloud":[128,136,152]},{"sky":[[236,120,92],[255,176,104],[255,226,150]],"body":[255,240,170],"stars":0,"cloud":[255,214,176],"far":[176,106,104],"snow":[255,220,190],"near":[130,132,62],"tree":[78,88,48],"tint":[255,214,176],"ground":[104,108,52],"rain_cloud":[150,126,132]},{"sky":[[14,22,58],[28,46,88],[54,88,104]],"body":[245,240,210],"stars":90,"cloud":[66,84,122],"far":[36,56,92],"snow":[120,142,170],"near":[28,72,66],"tree":[14,46,50],"tint":[110,130,176],"ground":[20,54,54],"rain_cloud":[46,56,86]}],"pets":[{"id":"shuaige","name":"帅哥","intro":["爱动物的","人类"],"name_en":"Handsome","intro_en":["Animal","lover"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":true,"image":"pets/shuaige"},{"id":"erbao","name":"二宝","intro":["爱吃醋的","贵宾"],"name_en":"Erbao","intro_en":["Jealous","poodle"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":true,"image":"pets/erbao"},{"id":"sherry","name":"Sherry","intro":["淡淡的","雪纳瑞"],"name_en":"Sherry","intro_en":["Laid-back","schnauzer"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":false,"image":"pets/sherry"},{"id":"jiuyue","name":"九月","intro":["调皮的","贵宾"],"name_en":"September","intro_en":["Cheeky","poodle"],"flight_head_angle":0,"flight_head_y":4,"founder":true,"starter":false,"image":"pets/jiuyue"},{"id":"jiaoquan","name":"焦圈","intro":["爱打呼噜","的法斗"],"name_en":"Donut","intro_en":["Snoring","Frenchie"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":false,"image":"pets/jiaoquan"},{"id":"duoli","name":"多莉","intro":["毛茸茸的","贵宾"],"name_en":"Dolly","intro_en":["Fluffy","poodle"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":false,"image":"pets/duoli"},{"id":"celina","name":"Celina","intro":["爱哼唧的","腊肠"],"name_en":"Celina","intro_en":["Whiny","dachshund"],"flight_head_angle":0,"flight_head_y":0,"founder":true,"starter":false,"image":"pets/celina"},{"id":"guaiguai","name":"乖乖","intro":["贪吃","的比熊"],"name_en":"Goodie","intro_en":["Greedy","bichon"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/guaiguai"},{"id":"xunshan","name":"巡山","intro":["傲娇","的暹罗"],"name_en":"Ranger","intro_en":["Sassy","Siamese"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/xunshan"},{"id":"xiaobuding","name":"小布丁","intro":["爱扑人的","拉布拉多"],"name_en":"Pudding","intro_en":["Jumpy","Labrador"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/xiaobuding"},{"id":"wooly","name":"wooly","intro":["活泼的","棉花面纱"],"name_en":"wooly","intro_en":["Playful","Fluffball"],"flight_head_angle":-12,"flight_head_y":4,"founder":false,"starter":false,"image":"pets/wooly"},{"id":"buding","name":"布丁","intro":["粘人","的布偶猫"],"name_en":"Buding","intro_en":["Clingy","Ragdoll"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/buding"},{"id":"haishen","name":"海参","intro":["爱睡觉","的折耳猫"],"name_en":"Haishen","intro_en":["Sleepy","Fold cat"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/haishen"},{"id":"zaizai","name":"仔仔","intro":["暴食","的比格"],"name_en":"Zaizai","intro_en":["Foodie","Beagle"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/zaizai"},{"id":"heimi","name":"黑米","intro":["爱撒娇","的雪纳瑞"],"name_en":"Heimi","intro_en":["Cuddly","terrier"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/heimi"},{"id":"morris","name":"Morris","intro":["癫癫的","哈瓦那"],"name_en":"Morris","intro_en":["Crazy","fluffball"],"flight_head_angle":0,"flight_head_y":0,"founder":false,"starter":false,"image":"pets/morris"}],"form_url":"https://v.wjx.cn/vm/td6GJBG.aspx","font":{"height":16,"letters":{" ":[0,0,6],"!":[6,0,4],"\"":[10,0,6],"#":[16,0,7],"$":[23,0,6],"%":[29,0,8],"&":[37,0,7],"'":[44,0,4],"(":[48,0,6],")":[54,0,6],"*":[60,0,6],"+":[66,0,6],",":[72,0,4],"-":[76,0,6],".":[82,0,4],"/":[86,0,6],"0":[92,0,6],"1":[98,0,6],"2":[104,0,6],"3":[110,0,6],"4":[116,0,6],"5":[122,0,6],"6":[128,0,6],"7":[134,0,6],"8":[140,0,6],"9":[146,0,6],":":[152,0,4],";":[156,0,4],"<":[160,0,5],"=":[165,0,6],">":[171,0,5],"?":[176,0,6],"A":[182,0,8],"B":[190,0,7],"C":[197,0,7],"D":[204,0,7],"E":[211,0,7],"F":[218,0,7],"G":[225,0,7],"H":[232,0,7],"I":[239,0,4],"J":[243,0,6],"K":[249,0,7],"L":[256,0,6],"M":[262,0,8],"N":[270,0,7],"O":[277,0,8],"P":[285,0,7],"Q":[292,0,8],"R":[300,0,7],"S":[307,0,7],"T":[314,0,8],"U":[322,0,7],"V":[329,0,8],"W":[337,0,10],"X":[347,0,8],"Y":[355,0,8],"Z":[363,0,7],"[":[370,0,6],"\\":[376,0,6],"]":[382,0,6],"^":[388,0,6],"_":[394,0,6],"`":[400,0,5],"a":[405,0,6],"b":[411,0,6],"c":[417,0,6],"d":[423,0,6],"e":[429,0,6],"f":[435,0,5],"g":[440,0,6],"h":[446,0,6],"i":[452,0,4],"j":[456,0,4],"k":[460,0,6],"l":[466,0,4],"m":[470,0,8],"n":[478,0,6],"o":[484,0,6],"p":[490,0,6],"q":[496,0,6],"r":[502,0,5],"s":[507,0,6],"t":[513,0,5],"u":[518,0,6],"v":[524,0,6],"w":[530,0,8],"x":[538,0,6],"y":[544,0,6],"z":[550,0,6],"{":[556,0,7],"|":[563,0,4],"}":[567,0,7],"~":[574,0,6],"·":[580,0,12],"×":[592,0,6],"—":[598,0,12],"“":[610,0,12],"”":[622,0,12],"、":[634,0,12],"。":[646,0,12],"《":[658,0,12],"》":[670,0,12],"一":[682,0,12],"丁":[694,0,12],"万":[706,0,12],"三":[718,0,12],"上":[730,0,12],"下":[742,0,12],"不":[754,0,12],"专":[766,0,12],"东":[778,0,12],"个":[790,0,12],"中":[802,0,12],"主":[814,0,12],"乐":[826,0,12],"乖":[838,0,12],"九":[850,0,12],"也":[862,0,12],"买":[874,0,12],"了":[886,0,12],"二":[898,0,12],"互":[910,0,12],"亚":[922,0,12],"亲":[934,0,12],"人":[946,0,12],"仅":[958,0,12],"介":[970,0,12],"仓":[982,0,12],"仔":[994,0,12],"以":[1006,0,12],"们":[0,16,12],"件":[12,16,12],"休":[24,16,12],"伙":[36,16,12],"会":[48,16,12],"传":[60,16,12],"伴":[72,16,12],"位":[84,16,12],"住":[96,16,12],"你":[108,16,12],"侦":[120,16,12],"保":[132,16,12],"候":[144,16,12],"停":[156,16,12],"偶":[168,16,12],"傲":[180,16,12],"像":[192,16,12],"儿":[204,16,12],"先":[216,16,12],"克":[228,16,12],"免":[240,16,12],"兔":[252,16,12],"入":[264,16,12],"全":[276,16,12],"公":[288,16,12],"兰":[300,16,12],"共":[312,16,12],"关":[324,16,12],"其":[336,16,12],"具":[348,16,12],"再":[360,16,12],"冠":[372,16,12],"冰":[384,16,12],"冷":[396,16,12],"出":[408,16,12],"击":[420,16,12],"分":[432,16,12],"创":[444,16,12],"利":[456,16,12],"别":[468,16,12],"到":[480,16,12],"刷":[492,16,12],"前":[504,16,12],"力":[516,16,12],"加":[528,16,12],"动":[540,16,12],"励":[552,16,12],"千":[564,16,12],"升":[576,16,12],"午":[588,16,12],"卡":[600,16,12],"卫":[612,16,12],"印":[624,16,12],"卷":[636,16,12],"厅":[648,16,12],"去":[660,16,12],"参":[672,16,12],"双":[684,16,12],"发":[696,16,12],"取":[708,16,12],"口":[720,16,12],"只":[732,16,12],"可":[744,16,12],"吃":[756,16,12],"吊":[768,16,12],"同":[780,16,12],"名":[792,16,12],"后":[804,16,12],"吗":[816,16,12],"吧":[828,16,12],"听":[840,16,12],"呆":[852,16,12],"呜":[864,16,12],"呼":[876,16,12],"和":[888,16,12],"品":[900,16,12],"哈":[912,16,12],"哥":[924,16,12],"哦":[936,16,12],"哼":[948,16,12],"唧":[960,16,12],"商":[972,16,12],"啦":[984,16,12],"喂":[996,16,12],"喝":[1008,16,12],"噜":[0,32,12],"器":[12,32,12],"回":[24,32,12],"园":[36,32,12],"国":[48,32,12],"图":[60,32,12],"圈":[72,32,12],"土":[84,32,12],"在":[96,32,12],"地":[108,32,12],"圾":[120,32,12],"坐":[132,32,12],"块":[144,32,12],"坠":[156,32,12],"垃":[168,32,12],"垫":[180,32,12],"处":[192,32,12],"外":[204,32,12],"多":[216,32,12],"大":[228,32,12],"太":[240,32,12],"失":[252,32,12],"头":[264,32,12],"奖":[276,32,12],"好":[288,32,12],"始":[300,32,12],"娇":[312,32,12],"婴":[324,32,12],"子":[336,32,12],"字":[348,32,12],"它":[360,32,12],"完":[372,32,12],"宝":[384,32,12],"实":[396,32,12],"宠":[408,32,12],"客":[420,32,12],"家":[432,32,12],"宾":[444,32,12],"对":[456,32,12],"寻":[468,32,12],"小":[480,32,12],"尔":[492,32,12],"就":[504,32,12],"尾":[516,32,12],"局":[528,32,12],"屋":[540,32,12],"屏":[552,32,12],"属":[564,32,12],"山":[576,32,12],"巡":[588,32,12],"巧":[600,32,12],"差":[612,32,12],"已":[624,32,12],"巴":[636,32,12],"币":[648,32,12],"布":[660,32,12],"帅":[672,32,12],"带":[684,32,12],"帮":[696,32,12],"幕":[708,32,12],"干":[720,32,12],"年":[732,32,12],"床":[744,32,12],"库":[756,32,12],"店":[768,32,12],"开":[780,32,12],"录":[792,32,12],"待":[804,32,12],"很":[816,32,12],"得":[828,32,12],"心":[840,32,12],"怕":[852,32,12],"恐":[864,32,12],"息":[876,32,12],"悠":[888,32,12],"想":[900,32,12],"感":[912,32,12],"戏":[924,32,12],"成":[936,32,12],"我":[948,32,12],"或":[960,32,12],"战":[972,32,12],"戚":[984,32,12],"戴":[996,32,12],"房":[1008,32,12],"所":[0,48,12],"手":[12,48,12],"才":[24,48,12],"扑":[36,48,12],"打":[48,48,12],"找":[60,48,12],"把":[72,48,12],"投":[84,48,12],"抖":[96,48,12],"折":[108,48,12],"拉":[120,48,12],"拍":[132,48,12],"拎":[144,48,12],"拖":[156,48,12],"拥":[168,48,12],"拧":[180,48,12],"拨":[192,48,12],"择":[204,48,12],"指":[216,48,12],"按":[228,48,12],"挑":[240,48,12],"换":[252,48,12],"掉":[264,48,12],"掌":[276,48,12],"排":[288,48,12],"探":[300,48,12],"接":[312,48,12],"控":[324,48,12],"搬":[336,48,12],"搭":[348,48,12],"摆":[360,48,12],"撑":[372,48,12],"撒":[384,48,12],"操":[396,48,12],"收":[408,48,12],"放":[420,48,12],"数":[432,48,12],"整":[444,48,12],"文":[456,48,12],"斗":[468,48,12],"新":[480,48,12],"旧":[492,48,12],"时":[504,48,12],"是":[516,48,12],"昵":[528,48,12],"晃":[540,48,12],"暂":[552,48,12],"暴":[564,48,12],"暹":[576,48,12],"最":[588,48,12],"月":[600,48,12],"有":[612,48,12],"服":[624,48,12],"未":[636,48,12],"本":[648,48,12],"机":[660,48,12],"来":[672,48,12],"松":[684,48,12],"板":[696,48,12],"架":[708,48,12],"柱":[720,48,12],"标":[732,48,12],"树":[744,48,12],"样":[756,48,12],"格":[768,48,12],"栽":[780,48,12],"案":[792,48,12],"档":[804,48,12],"桶":[816,48,12],"梯":[828,48,12],"棉":[840,48,12],"棒":[852,48,12],"榜":[864,48,12],"橱":[876,48,12],"次":[888,48,12],"欢":[900,48,12],"正":[912,48,12],"每":[924,48,12],"毒":[936,48,12],"比":[948,48,12],"毛":[960,48,12],"毯":[972,48,12],"水":[984,48,12],"池":[996,48,12],"沙":[1008,48,12],"没":[0,64,12],"法":[12,64,12],"泼":[24,64,12],"洋":[36,64,12],"活":[48,64,12],"浏":[60,64,12],"浣":[72,64,12],"海":[84,64,12],"淡":[96,64,12],"添":[108,64,12],"游":[120,64,12],"溜":[132,64,12],"滑":[144,64,12],"满":[156,64,12],"灯":[168,64,12],"灵":[180,64,12],"点":[192,64,12],"热":[204,64,12],"焦":[216,64,12],"然":[228,64,12],"熊":[240,64,12],"爪":[252,64,12],"爬":[264,64,12],"爱":[276,64,12],"片":[288,64,12],"版":[300,64,12],"牌":[312,64,12],"牛":[324,64,12],"物":[336,64,12],"犬":[348,64,12],"狗":[360,64,12],"猎":[372,64,12],"猫":[384,64,12],"王":[396,64,12],"玩":[408,64,12],"球":[420,64,12],"瑞":[432,64,12],"瓦":[444,64,12],"用":[456,64,12],"甲":[468,64,12],"画":[480,64,12],"留":[492,64,12],"痕":[504,64,12],"癫":[516,64,12],"登":[528,64,12],"的":[540,64,12],"皇":[552,64,12],"皮":[564,64,12],"盆":[576,64,12],"相":[588,64,12],"盹":[600,64,12],"看":[612,64,12],"着":[624,64,12],"睡":[636,64,12],"知":[648,64,12],"碗":[660,64,12],"秋":[672,64,12],"种":[684,64,12],"秒":[696,64,12],"积":[708,64,12],"称":[720,64,12],"稿":[732,64,12],"空":[744,64,12],"穿":[756,64,12],"窗":[768,64,12],"窝":[780,64,12],"站":[792,64,12],"第":[804,64,12],"等":[816,64,12],"答":[828,64,12],"算":[840,64,12],"管":[852,64,12],"箭":[864,64,12],"箱":[876,64,12],"米":[888,64,12],"类":[900,64,12],"粘":[912,64,12],"素":[924,64,12],"纪":[936,64,12],"纱":[948,64,12],"纳":[960,64,12],"纸":[972,64,12],"纹":[984,64,12],"绍":[996,64,12],"给":[1008,64,12],"继":[0,80,12],"绩":[12,80,12],"续":[24,80,12],"罐":[36,80,12],"网":[48,80,12],"罗":[60,80,12],"耳":[72,80,12],"肠":[84,80,12],"能":[96,80,12],"脚":[108,80,12],"脱":[120,80,12],"腊":[132,80,12],"腿":[144,80,12],"自":[156,80,12],"色":[168,80,12],"花":[180,80,12],"苏":[192,80,12],"茸":[204,80,12],"荡":[216,80,12],"莉":[228,80,12],"获":[240,80,12],"萄":[252,80,12],"落":[264,80,12],"葡":[276,80,12],"葱":[288,80,12],"虚":[300,80,12],"血":[312,80,12],"行":[324,80,12],"衣":[336,80,12],"表":[348,80,12],"被":[360,80,12],"西":[372,80,12],"览":[384,80,12],"觉":[396,80,12],"角":[408,80,12],"解":[420,80,12],"试":[432,80,12],"请":[444,80,12],"谁":[456,80,12],"调":[468,80,12],"谢":[480,80,12],"象":[492,80,12],"负":[504,80,12],"责":[516,80,12],"败":[528,80,12],"贪":[540,80,12],"购":[552,80,12],"贵":[564,80,12],"费":[576,80,12],"赞":[588,80,12],"走":[600,80,12],"起":[612,80,12],"超":[624,80,12],"足":[636,80,12],"趾":[648,80,12],"跑":[660,80,12],"路":[672,80,12],"跳":[684,80,12],"跷":[696,80,12],"踩":[708,80,12],"蹄":[720,80,12],"转":[732,80,12],"轮":[744,80,12],"软":[756,80,12],"载":[768,80,12],"输":[780,80,12],"达":[792,80,12],"过":[804,80,12],"迎":[816,80,12],"运":[828,80,12],"返":[840,80,12],"还":[852,80,12],"这":[864,80,12],"进":[876,80,12],"远":[888,80,12],"连":[900,80,12],"迹":[912,80,12],"追":[924,80,12],"退":[936,80,12],"送":[948,80,12],"选":[960,80,12],"逗":[972,80,12],"遇":[984,80,12],"道":[996,80,12],"那":[1008,80,12],"部":[0,96,12],"都":[12,96,12],"醋":[24,96,12],"里":[36,96,12],"量":[48,96,12],"金":[60,96,12],"鉴":[72,96,12],"铃":[84,96,12],"铜":[96,96,12],"银":[108,96,12],"锁":[120,96,12],"键":[132,96,12],"长":[144,96,12],"门":[156,96,12],"闩":[168,96,12],"闭":[180,96,12],"间":[192,96,12],"闹":[204,96,12],"闻":[216,96,12],"院":[228,96,12],"集":[240,96,12],"雪":[252,96,12],"零":[264,96,12],"震":[276,96,12],"霸":[288,96,12],"面":[300,96,12],"页":[312,96,12],"题":[324,96,12],"额":[336,96,12],"风":[348,96,12],"飞":[360,96,12],"食":[372,96,12],"饭":[384,96,12],"饰":[396,96,12],"饼":[408,96,12],"首":[420,96,12],"马":[432,96,12],"骨":[444,96,12],"高":[456,96,12],"鱼":[468,96,12],"鸡":[480,96,12],"鸭":[492,96,12],"鹿":[504,96,12],"黄":[516,96,12],"黑":[528,96,12],"鼠":[540,96,12],"鼻":[552,96,12],"齐":[564,96,12],"龙":[576,96,12],"！":[588,96,12],"（":[600,96,12],"）":[612,96,12],"，":[624,96,12],"／":[636,96,12],"：":[648,96,12],"；":[660,96,12],"？":[672,96,12],"～":[684,96,12]}}};
// 《飞行搭档》网页版。玩法、数字和像素画都来自 flappybird/main.py：
// tools/build_web.py 把它们放进上面的 GAME_DATA，这个文件只负责在浏览器里画出来。
// Plain older JavaScript on purpose, so old computers and in-app browsers can run it.
(function () {
"use strict";

var D = GAME_DATA;
var S = D.settings;
var VERSION = window.GAME_VERSION || "";
var WIDTH = S.WIDTH, HEIGHT = S.HEIGHT;

var canvas = document.getElementById("canvas");
var screen = canvas.getContext("2d");

var INK = S.INK, CREAM = S.CREAM, SAND = S.SAND, RED = S.RED, DARK_RED = S.DARK_RED;
var SUN = S.SUN, LEAF = S.LEAF, FOREST = S.FOREST, SHADOW = S.SHADOW;

// -------------------------
// Small helpers
// -------------------------
function css(color, alpha) {
    if (alpha === undefined) alpha = color.length > 3 ? color[3] : 255;
    return "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + (alpha / 255) + ")";
}

// Python's % never gives a negative answer; JavaScript's can.
function pmod(value, size) {
    return ((value % size) + size) % size;
}

// Python rounds halves to the nearest even number; game logic keeps that rule.
function pyRound(value) {
    var rounded = Math.round(value);
    if (Math.abs(value % 1) === 0.5 && rounded % 2 !== 0) rounded -= 1;
    return rounded;
}

function randint(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}

function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function sample(items, count) {
    var copy = items.slice(), picked = [];
    for (var i = 0; i < count; i++) {
        picked.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
    }
    return picked;
}

// A private, repeatable generator: the same seed always draws the same soil block.
function Generator(seed) {
    this.state = (seed * 2654435761 + 1013904223) >>> 0;
}
Generator.prototype.random = function () {
    var t = (this.state = (this.state + 0x6D2B79F5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
Generator.prototype.randrange = function (start, stop, step) {
    step = step || 1;
    var count = Math.ceil((stop - start) / step);
    return start + step * Math.floor(this.random() * count);
};
Generator.prototype.choice = function (items) {
    return items[Math.floor(this.random() * items.length)];
};

if (!Math.imul) {
    Math.imul = function (a, b) {
        var high = (a >>> 16) & 0xffff, low = a & 0xffff;
        return ((low * b) + (((high * b) << 16) >>> 0) | 0);
    };
}

function Rect(x, y, w, h) {
    this.x = x; this.y = y; this.w = w; this.h = h;
}
Rect.prototype.right = function () { return this.x + this.w; };
Rect.prototype.bottom = function () { return this.y + this.h; };
Rect.prototype.centerx = function () { return this.x + Math.floor(this.w / 2); };
Rect.prototype.centery = function () { return this.y + Math.floor(this.h / 2); };
Rect.prototype.center = function () { return [this.centerx(), this.centery()]; };
Rect.prototype.move = function (dx, dy) { return new Rect(this.x + dx, this.y + dy, this.w, this.h); };
Rect.prototype.inflate = function (dw, dh) {
    return new Rect(this.x - Math.floor(dw / 2), this.y - Math.floor(dh / 2), this.w + dw, this.h + dh);
};
Rect.prototype.contains = function (x, y) {
    return x >= this.x && x < this.x + this.w && y >= this.y && y < this.y + this.h;
};
Rect.prototype.collides = function (other) {
    return this.x < other.x + other.w && other.x < this.x + this.w &&
           this.y < other.y + other.h && other.y < this.y + this.h;
};

function makeCanvas(width, height) {
    var picture = document.createElement("canvas");
    picture.width = Math.max(1, Math.ceil(width));
    picture.height = Math.max(1, Math.ceil(height));
    return picture;
}

// The game is planned on an 800 x 600 grid, but drawn with as many real screen pixels as
// it is shown with. On a sharp laptop screen that is 2 or more per game pixel, so photos stay clear.
var RES = 1;
var MAXIMUM_RES = 2.5;  // Higher costs old computers speed and hardly looks sharper.

// Sharp pictures remember their size in game pixels; everything else uses its real size.
function W(picture) { return picture.lw || picture.width; }
function H(picture) { return picture.lh || picture.height; }

function drawPicture(picture, x, y) {
    screen.imageSmoothingEnabled = true;
    screen.drawImage(picture, x, y, W(picture), H(picture));
    screen.imageSmoothingEnabled = false;
}

function startTime() { return window.performance && performance.now ? performance.now() : Date.now(); }
var openedAt = startTime();
function ticks() { return startTime() - openedAt; }

function asset(name) { return name + "?v=" + VERSION; }

// Draw a picture turned around its own middle. Positive degrees turn it the way the clock turns.
function drawTurned(picture, centerX, centerY, degrees, alpha) {
    screen.save();
    if (alpha !== undefined) screen.globalAlpha = alpha;
    screen.imageSmoothingEnabled = true;
    screen.translate(centerX, centerY);
    screen.rotate(degrees * Math.PI / 180);
    screen.drawImage(picture, -W(picture) / 2, -H(picture) / 2, W(picture), H(picture));
    screen.restore();
}

// -------------------------
// Pixel text
// -------------------------
var fontSheet = null;
var tintedSheets = {};
var textCache = {};
var textCacheSize = 0;

function getTintedSheet(color) {
    var key = color.join(",");
    if (!tintedSheets[key]) {
        var sheet = makeCanvas(fontSheet.width, fontSheet.height);
        var pen = sheet.getContext("2d");
        pen.drawImage(fontSheet, 0, 0);
        pen.globalCompositeOperation = "source-in";
        pen.fillStyle = css(color, 255);
        pen.fillRect(0, 0, sheet.width, sheet.height);
        tintedSheets[key] = sheet;
    }
    return tintedSheets[key];
}

function letterList(text) {
    return Array.from ? Array.from(text) : text.split("");
}

function isBold() {
    // The English version uses bold letters: the thin pixel font is hard to read in English.
    return language === "en";
}

function getBoldShift(scale) {
    // How many screen pixels thicker bold strokes get. The gap between enlarged letters is
    // `scale` pixels wide, so at least one pixel of it is always left: words stay the same width.
    return scale > 1 ? Math.max(1, Math.round(scale * 0.6)) : 0;
}

function measureText(text, spaced) {
    var width = 0;
    letterList(text).forEach(function (letter) {
        var place = D.font.letters[letter];
        if (place) width += place[2] + (spaced ? 1 : 0);
    });
    return width;
}

function writeLetters(pen, text, color, left, top, spaced) {
    var sheet = getTintedSheet(color), height = D.font.height, x = left;
    letterList(text).forEach(function (letter) {
        var place = D.font.letters[letter];
        if (!place) return;
        if (place[2] > 0) {
            pen.drawImage(sheet, place[0], place[1], place[2], height, x, top, place[2], height);
            // Tiny bold text: a second copy one pixel to the right, with one more pixel of room.
            if (spaced) pen.drawImage(sheet, place[0], place[1], place[2], height, x + 1, top, place[2], height);
        }
        x += place[2] + (spaced ? 1 : 0);
    });
}

// Render small, sharp letters, then enlarge each pixel by a whole number.
function renderGameText(text, scale, color, outline) {
    var bold = isBold(), spaced = bold && scale === 1;
    var key = text + "|" + scale + "|" + color + "|" + outline + "|" + bold;
    if (textCache[key]) return textCache[key];
    var width = measureText(text, spaced), height = D.font.height;
    var edge = outline ? 2 : 0;
    var layers = [];
    function enlarge(small) {
        var big = makeCanvas(small.width * scale, small.height * scale);
        var pen = big.getContext("2d");
        pen.imageSmoothingEnabled = false;
        pen.drawImage(small, 0, 0, big.width, big.height);
        return big;
    }
    if (outline) {
        var rim = makeCanvas(width + edge, height + edge), rimPen = rim.getContext("2d");
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) writeLetters(rimPen, text, outline, x, y, spaced);
        }
        layers.push(enlarge(rim));
    }
    var fill = makeCanvas(width + edge, height + edge);
    writeLetters(fill.getContext("2d"), text, color, edge / 2, edge / 2, spaced);
    layers.push(enlarge(fill));
    // Bold: every layer is drawn a second time a little to the right, outline first, so the
    // letters get thicker strokes but the outline never cuts into their color.
    var shift = bold ? getBoldShift(scale) : 0;
    var label = makeCanvas(layers[0].width + shift, layers[0].height);
    var pen = label.getContext("2d");
    layers.forEach(function (layer) {
        pen.drawImage(layer, 0, 0);
        if (shift) pen.drawImage(layer, shift, 0);
    });
    if (textCacheSize > 400) { textCache = {}; textCacheSize = 0; }
    textCache[key] = label;
    textCacheSize += 1;
    return label;
}

function drawText(text, scale, center, color, outline) {
    var label = renderGameText(String(text), scale, color || INK, outline || null);
    screen.drawImage(label, center[0] - Math.floor(label.width / 2),
                     center[1] - Math.floor(label.height / 2));
}

// Every word the player reads, in Chinese and English, comes from the Python game's TEXTS.
var TEXTS = S.TEXTS, LANGUAGES = S.LANGUAGES;
var language = readSavedLanguage();

function readSavedLanguage() {
    // Read before anything else loads, so even the loading words use the language chosen last time.
    try {
        var saved = JSON.parse(window.localStorage.getItem(S.WEB_PROGRESS_KEY) || "{}");
        return saved && LANGUAGES.indexOf(saved.language) >= 0 ? saved.language : "zh";
    } catch (error) {
        return "zh";
    }
}

function tr(key, values) {
    // {name}-style gaps are filled in from values, so one line works for every pet.
    var text = TEXTS[key][LANGUAGES.indexOf(language)];
    return text.replace(/\{(\w+)\}/g, function (gap, name) {
        return values && values.hasOwnProperty(name) ? String(values[name]) : gap;
    });
}

function drawFittedText(text, center, width, color, scale, outline) {
    // English words are often longer than the Chinese, so text that would not fit gets smaller.
    scale = scale || 2;
    while (scale > 1 && renderGameText(String(text), scale, color || INK, outline || null).width > width) scale -= 1;
    drawText(text, scale, center, color, outline);
}

function splitTextLines(text, scale, width) {
    // English breaks between words, Chinese between any two characters.
    var english = language !== "zh";
    var pieces = english ? text.split(" ") : letterList(text), joiner = english ? " " : "";
    var lines = [""];
    pieces.forEach(function (piece) {
        var last = lines[lines.length - 1];
        var longer = last ? last + joiner + piece : piece;
        // Punctuation never starts a line; it stays with the word before it.
        if (!last || "，。、！？：；".indexOf(piece) >= 0 || measureText(longer, isBold() && scale === 1) * scale <= width) lines[lines.length - 1] = longer;
        else lines.push(piece);
    });
    return lines;
}

function drawWrappedText(text, topCenter, width, color, scale, lineHeight) {
    scale = scale || 2;
    lineHeight = lineHeight || 28;
    var lines = splitTextLines(text, scale, width);
    lines.forEach(function (line, number) {
        drawText(line, scale, [topCenter[0], topCenter[1] + number * lineHeight], color);
    });
    return lines.length;
}

function getPetName(pet) {
    // A pet without an English name keeps its own name in English too.
    return language === "zh" ? PETS[pet].name : PETS[pet].name_en || PETS[pet].name;
}

function getPetIntro(pet) {
    return language === "zh" ? PETS[pet].intro : PETS[pet].intro_en || PETS[pet].intro;
}

function getIntroText(pet) {
    // Chinese lines join straight on; English words need a space between them.
    return getPetIntro(pet).join(language === "zh" ? "" : " ");
}

function getMedalName(number) { return tr(MEDALS[number][2]); }

function fillStepped(pen, area, color) {
    // Two overlapping rectangles leave stepped corners, like a block of pixels.
    // One path for both keeps a see-through shadow evenly see-through.
    pen.fillStyle = css(color);
    pen.beginPath();
    pen.rect(area.x + 4, area.y, area.w - 8, area.h);
    pen.rect(area.x, area.y + 4, area.w, area.h - 8);
    pen.fill();
}

function drawPixelPanel(rect, fill, border, shadow) {
    if (shadow === undefined) shadow = 6;
    if (shadow) fillStepped(screen, rect.move(shadow, shadow), SHADOW);
    fillStepped(screen, rect, border || INK);
    fillStepped(screen, rect.inflate(-8, -8), fill || CREAM);
}

function fillRect(color, x, y, w, h) {
    if (w <= 0 || h <= 0) return;
    screen.fillStyle = css(color);
    screen.fillRect(x, y, w, h);
}

function makeBoomImage() {
    var letters = S.BOOM_LETTERS;
    var width = 1;
    letters.forEach(function (letter) { width += letter[0].length + 1; });
    var image = makeCanvas(width, 9), pen = image.getContext("2d");
    var cells = [], left = 1;
    letters.forEach(function (letter) {
        letter.forEach(function (line, row) {
            for (var column = 0; column < line.length; column++) {
                if (line[column] === "#") cells.push([left + column, 1 + row]);
            }
        });
        left += letter[0].length + 1;
    });
    // The dark outline goes first, so the yellow letters end up on top of it.
    pen.fillStyle = css(INK);
    cells.forEach(function (cell) { pen.fillRect(cell[0] - 1, cell[1] - 1, 3, 3); });
    pen.fillStyle = "rgb(255,240,120)";
    cells.forEach(function (cell) { pen.fillRect(cell[0], cell[1], 1, 1); });
    return image;
}

var boomImage = makeBoomImage();

// -------------------------
// Scores and saved progress
// -------------------------
var WEB_SCORE_KEY = S.WEB_SCORE_KEY, WEB_PROGRESS_KEY = S.WEB_PROGRESS_KEY;
var best_score = 0, score_storage_available = true, new_best = false;
var paused = false, paused_plane = null;

function loadBestScore() {
    // localStorage can be missing or blocked, for example in some private windows.
    var saved = window.localStorage.getItem(WEB_SCORE_KEY);
    if (!saved) return 0;
    if (!/^\s*-?\d+\s*$/.test(saved)) throw new Error("bad score");
    return parseInt(saved, 10);
}

function saveBestScore(value) {
    window.localStorage.setItem(WEB_SCORE_KEY, String(value));
}

function updateBestScore() {
    if (score > best_score) {
        best_score = score;
        new_best = true;
        try {
            saveBestScore(best_score);
        } catch (error) {
            score_storage_available = false;
        }
    }
}

// -------------------------
// Pets
// -------------------------
var bird_x = S.bird_x, bird_y = 300, bird_radius = S.bird_radius;
var PETS = D.pets;
var PET_INDEX_BY_ID = {};
PETS.forEach(function (pet, index) { PET_INDEX_BY_ID[pet.id] = index; });
var FOUNDER_PETS = [], STARTER_PETS = [];
PETS.forEach(function (pet, index) {
    if (pet.founder) FOUNDER_PETS.push(index);
    if (pet.starter) STARTER_PETS.push(index);
});

var planeImage = null;
var characterImages = [], characterHeads = [], characterPortraits = [];
var selected_character = 0;
var pilot_head = null;

var character_cards = [];
[122, 258].forEach(function (top) {
    for (var column = 0; column < 4; column++) character_cards.push(new Rect(18 + column * 192, top, 188, 128));
});
var album_card = character_cards[7];
// Seven cards show unlocked pets first, then locked ones. With more than seven friends,
// the seventh shows the latest partner chosen from the album. The eighth opens the album.
var partner_slot_pet = FOUNDER_PETS[6];
var linked_pet = null;
var linked_pets = [];  // Every pet from the link, in order; they take the first cards.
var album_open = false, album_page = 0;
var album_previous_button = new Rect(90, 396, 130, 44);
var album_next_button = new Rect(580, 396, 130, 44);
var start_button = new Rect(200, 448, 400, 52);
var UPLOAD_FORM_URL = D.form_url;
var upload_button = new Rect(600, 24, 188, 44);
var next_dog = null;
var album_page_size = S.album_page_size;
var unlocked_pets = {};
STARTER_PETS.forEach(function (pet) { unlocked_pets[pet] = true; });
var pillars_since_dog = 0;
var newly_found_dogs = [];
var runs_this_visit = 0, run_started_at = 0;
var welcome_pet = null;
var welcomed_pets = {}, owned_pets = {};
var link_page_pet = null, link_page_is_owner = false, link_page_bonus = [];
var link_page_queue = [];  // More pages waiting, when one link brings several pets.
var link_page_button = new Rect(210, 486, 380, 52);
// Coins float in some openings. They are saved, so they can buy things later on.
var coins = 0, coins_this_run = 0, coin_pops = [];

function countKeys(set) { return Object.keys(set).length; }
function sortedIds(set) {
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; })
        .map(function (index) { return PETS[index].id; });
}

// Smooth shrinking in halves looks clean even on browsers with rough scaling.
function smoothScale(picture, width, height) {
    // width and height are in game pixels; the picture itself gets RES times as many.
    var realWidth = Math.max(1, Math.round(width * RES)), realHeight = Math.max(1, Math.round(height * RES));
    var current = picture;
    while (current.width / 2 > realWidth && current.height / 2 > realHeight) {
        var half = makeCanvas(Math.round(current.width / 2), Math.round(current.height / 2));
        var halfPen = half.getContext("2d");
        halfPen.imageSmoothingEnabled = true;
        halfPen.drawImage(current, 0, 0, half.width, half.height);
        current = half;
    }
    var result = makeCanvas(realWidth, realHeight), pen = result.getContext("2d");
    pen.imageSmoothingEnabled = true;
    if ("imageSmoothingQuality" in pen) pen.imageSmoothingQuality = "high";
    pen.drawImage(current, 0, 0, realWidth, realHeight);
    result.lw = width;
    result.lh = height;
    return result;
}

function scaleCharacterHead(head, height) {
    return smoothScale(head, pyRound(height * head.width / head.height), height);
}

function fitCharacterPortrait(head, height, maximumWidth) {
    // Wide heads shrink a little more, so every portrait fits inside its card.
    var portrait = scaleCharacterHead(head, height);
    if (W(portrait) > maximumWidth) {
        portrait = scaleCharacterHead(head, Math.floor(maximumWidth * head.height / head.width));
    }
    return portrait;
}

var fittedPortraits = {};
function getFittedPortrait(pet, height, maximumWidth) {
    var key = pet + "," + height + "," + maximumWidth;
    if (!fittedPortraits[key]) fittedPortraits[key] = fitCharacterPortrait(characterImages[pet], height, maximumWidth);
    return fittedPortraits[key];
}

var silhouettes = {};
function getSilhouette(pet, onPillar) {
    // Keep the shape and paint it all dark.
    var key = pet + "," + !!onPillar;
    if (!silhouettes[key]) {
        var source = (onPillar ? characterHeads : characterPortraits)[pet];
        var picture = makeCanvas(source.width, source.height), pen = picture.getContext("2d");
        pen.drawImage(source, 0, 0);
        pen.globalCompositeOperation = "source-in";
        pen.fillStyle = css(INK, 255);
        pen.fillRect(0, 0, picture.width, picture.height);
        picture.lw = W(source);
        picture.lh = H(source);
        silhouettes[key] = picture;
    }
    return silhouettes[key];
}

// -------------------------
// Flight settings
// -------------------------
var head_sway_speed = S.head_sway_speed, head_sway_angle = S.head_sway_angle;
var plane_tilt_per_speed = S.plane_tilt_per_speed;
var bird_velocity = 0;
var gravity = S.gravity, jump_strength = S.jump_strength, maximum_fall_speed = S.maximum_fall_speed;
var death_started_at = null, death_duration = S.death_duration;
var shake_duration = S.shake_duration, shake_strength = S.shake_strength;
var explosion_particles = [], death_image = null;

var pipe_width = S.pipe_width;
var pipe_scroll_remainder = 0.0;
var pipe_spacing = S.pipe_spacing;
var pipes = [];
var score = 0, started = false, game_over = false;

var points_per_theme = S.points_per_theme;
var WEATHERS = S.WEATHERS;
var weather = "clear", next_weather = null, weather_amount = 0.0, weather_starts_at = null, weather_ends_at = null;
var last_weather = null;  // So the same weather never comes twice in a row.
var SKY_THEMES = D.sky_themes;
var current_theme = 0, previous_theme = null, theme_fade = 1.0, page_theme = 0;
var world_scroll = 0.0;
var flap_puffs = [];
var score_pop_frames = 0;
var ambient_frames = 0;
// Medal pictures are used on results and the leaderboard, never as in-flight milestones.
var MEDALS = S.MEDALS;

// -------------------------
// Pixel animals
// -------------------------
var SPRITES = D.sprites;
var SPRITE_COLORS = S.SPRITE_COLORS;
var GROUND_CREATURES = S.GROUND_CREATURES, HANGING_CREATURES = S.HANGING_CREATURES;
var waiting_ground_creatures = [], waiting_hanging_creatures = [];
var obstacles_until_animal = 0;
var creature_scale = S.creature_scale;
var spriteCache = {};

function getSprite(name, frame, scale, tint) {
    frame = frame || 0;
    if (scale === undefined) scale = creature_scale;
    var key = name + "," + frame + "," + scale + "," + tint;
    if (spriteCache[key]) return spriteCache[key];
    var rows = SPRITES[name][frame];
    var picture = makeCanvas(rows[0].length * scale, rows.length * scale);
    var pen = picture.getContext("2d");
    rows.forEach(function (row, y) {
        for (var x = 0; x < row.length; x++) {
            if (row[x] === ".") continue;
            var color = SPRITE_COLORS[row[x]];
            if (tint) {
                color = [Math.round(color[0] * tint[0] / 255), Math.round(color[1] * tint[1] / 255),
                         Math.round(color[2] * tint[2] / 255)];
            }
            pen.fillStyle = css(color, 255);
            pen.fillRect(x * scale, y * scale, scale, scale);
        }
    });
    spriteCache[key] = picture;
    return picture;
}

function getBlinkFrame(animalId) {
    return (ambient_frames + animalId * 37) % 170 < 9 ? 1 : 0;
}

// -------------------------
// Scenery: drawn by the Python game and saved as pictures when the site is built.
// -------------------------
var sky_body_center = S.sky_body_center;
var scenery = [];
var fogLayer = null, blossomLayer = null, osmanthusLayer = null, weatherSheet = null, autumnLayer = null;

function makePlaneSprite(shake, target) {
    // Pop the head above the cockpit, keeping the chin tucked behind the sill.
    var size = Math.round(192 * RES);
    var sprite = target && target.width === size ? target : makeCanvas(size, size);
    sprite.lw = sprite.lh = 192;
    var pen = sprite.getContext("2d");
    pen.setTransform(1, 0, 0, 1, 0, 0);
    pen.clearRect(0, 0, size, size);
    pen.setTransform(size / 192, 0, 0, size / 192, 0, 0);
    var pet = PETS[selected_character];
    var angle = pet.flight_head_angle || 0;
    if (shake) angle += head_sway_angle * Math.sin(ticks() / 1000 * Math.PI * 2 * head_sway_speed);
    var radians = angle * Math.PI / 180;
    var half = H(pilot_head) / 2;
    var centerX = Math.round(103 - half * Math.sin(radians));
    var centerY = Math.round(95 + (pet.flight_head_y || 0) - half * Math.cos(radians));
    // The plane is pixel art: enlarge it with hard edges, like the desktop game.
    pen.imageSmoothingEnabled = false;
    pen.drawImage(planeImage, 96 - planeImage.width / 2, 96 - planeImage.height / 2);
    pen.imageSmoothingEnabled = true;
    pen.save();
    pen.beginPath();
    pen.rect(0, 0, 192, 93);
    pen.clip();
    pen.translate(centerX, centerY);
    pen.rotate(-radians);
    pen.drawImage(pilot_head, -W(pilot_head) / 2, -H(pilot_head) / 2, W(pilot_head), H(pilot_head));
    pen.restore();
    return sprite;
}
var framePlane = null;

// -------------------------
// Soil blocks
// -------------------------
var obstacleCache = {}, obstacleCacheSize = 0;
var OBSTACLE_LAYERS = [[122, 80, 52], [142, 94, 58], [160, 108, 66], [134, 88, 60]];

function getObstacleImage(width, height, ceiling) {
    var key = width + "," + height + "," + !!ceiling;
    if (obstacleCache[key]) return obstacleCache[key];
    var generator = new Generator(height * 2 + (ceiling ? 1 : 0));
    var obstacle = makeCanvas(width, height), pen = obstacle.getContext("2d");
    function rect(color, x, y, w, h) {
        if (w <= 0 || h <= 0) return;
        pen.fillStyle = css(color, 255);
        pen.fillRect(x, y, w, h);
    }
    rect(INK, 0, 0, width, height);
    // Wavy layers of soil, from dark topsoil to warmer earth.
    var step = 8, offsets = [], x, y, column;
    for (x = 0; x < width; x += step) offsets.push(generator.randrange(-8, 9, 4));
    for (column = 0, x = 0; x < width; x += step, column++) {
        y = 0;
        var band = 0;
        while (y < height) {
            var thickness = 46 + (band * 17 % 24) + offsets[column];
            rect(OBSTACLE_LAYERS[band % OBSTACLE_LAYERS.length], x, y, step, thickness);
            y += thickness;
            band += 1;
        }
    }
    rect(INK, 0, 0, 4, height);
    rect(INK, width - 4, 0, 4, height);
    rect([182, 134, 88], 4, 0, 4, height);
    rect([96, 62, 42], width - 12, 0, 8, height);

    // Pebbles, roots and little buried surprises.
    for (y = 36; y < height - 12; y += 26) {
        x = generator.randrange(12, width - 26);
        var detail = generator.choice(["pebble", "pebble", "dark", "root"]);
        if (detail === "pebble") {
            rect([170, 164, 148], x, y, 12, 8);
            rect([206, 200, 182], x + 2, y, 6, 3);
        } else if (detail === "dark") {
            rect([98, 64, 44], x, y, 8, 4);
        } else {
            rect([206, 170, 120], x, y, 3, 12);
            rect([206, 170, 120], x + 3, y + 8, 7, 3);
        }
    }
    if (height > 130) {
        x = generator.randrange(14, width - 34);
        y = generator.randrange(60, height - 30);
        if (generator.random() < 0.5) {  // A buried bone.
            rect(CREAM, x + 3, y + 3, 14, 4);
            [[x, y], [x, y + 6], [x + 16, y], [x + 16, y + 6]].forEach(function (end) {
                rect(CREAM, end[0], end[1], 4, 4);
            });
        } else {  // A buried acorn.
            rect([196, 130, 62], x + 2, y + 4, 10, 9);
            rect([98, 64, 44], x, y, 14, 5);
        }
    }

    // Grass on the ground blocks, darker moss under the hanging ones.
    var grass = ceiling ? FOREST : LEAF, highlight = ceiling ? LEAF : [128, 196, 92];
    rect(INK, 0, 0, width, 22);
    rect(grass, 0, 4, width, 14);
    rect(highlight, 0, 4, width, 4);
    for (x = 0; x < width; x += 10) {
        var drip = generator.choice([4, 8, 12, ceiling ? 16 : 8]);
        rect(INK, x, 18, 10, drip + 4);
        rect(grass, x + 2, 18, 6, drip);
    }
    for (x = 8; x < width - 8; x += 16) {
        if (generator.random() < 0.55) rect(generator.choice([CREAM, SUN, [240, 130, 150]]), x, 8, 4, 4);
    }

    if (ceiling) {
        var flipped = makeCanvas(width, height), flipPen = flipped.getContext("2d");
        flipPen.translate(0, height);
        flipPen.scale(1, -1);
        flipPen.drawImage(obstacle, 0, 0);
        obstacle = flipped;
    }
    if (obstacleCacheSize > 160) { obstacleCache = {}; obstacleCacheSize = 0; }
    obstacleCache[key] = obstacle;
    obstacleCacheSize += 1;
    return obstacle;
}

function getCreatureHideAmount(rect) {
    // 0 means fully visible and 1 means fully tucked behind the soil block.
    var clearance = Math.max(rect.x - (bird_x + 50), (bird_x - 50) - rect.right(), 0);
    return Math.max(0.0, 1 - clearance / S.creature_hide_distance);
}

function drawCreatures() {
    pipes.forEach(function (pair) {
        var top = pair[0], bottom = pair[1], sprite, visible;
        if (bottom.creature !== null) {
            sprite = getSprite(bottom.creature, getBlinkFrame(bottom.h));
            // A small two-step bounce makes the animals look as if they are breathing.
            var breath = (ambient_frames + bottom.h * 11) % 60 < 30 ? 3 : 0;
            visible = (sprite.height + 4) * (1 - getCreatureHideAmount(bottom));
            var bottomEdge = bottom.y + 5 - Math.round(visible) + sprite.height + breath;
            screen.drawImage(sprite, bottom.centerx() - Math.floor(sprite.width / 2), bottomEdge - sprite.height);
        }
        if (top.creature !== null) {
            sprite = getSprite(top.creature, getBlinkFrame(top.h));
            visible = sprite.height * (1 - getCreatureHideAmount(top));
            screen.drawImage(sprite, top.centerx() - Math.floor(sprite.width / 2),
                             top.bottom() - 6 + Math.round(visible) - sprite.height);
        }
    });
}

function drawWaitingDogs() {
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        if (bottom.dog === null) return;
        // Unlike the wild animals, a new friend stays in sight and waits to be picked up.
        var hop = (ambient_frames + bottom.h * 11) % 40 < 20 ? 3 : 0;
        var picture = getSilhouette(bottom.dog, true);
        var left = bottom.centerx() - Math.floor(W(picture) / 2);
        var top = bottom.y + 4 - hop - H(picture);
        drawPicture(picture, left, top);
        drawText("？？？", 2, [left + Math.floor(W(picture) / 2), top - 14], SUN, INK);
    });
}

// -------------------------
// Difficulty and obstacles
// -------------------------
function getDifficulty(currentScore) {
    var gap = Math.max(S.minimum_pipe_gap, pyRound(S.starting_pipe_gap - currentScore * S.gap_reduction_per_point));
    var speed = Math.min(S.maximum_pipe_speed, S.starting_pipe_speed + currentScore * S.speed_increase_per_point);
    var shiftMargin = Math.min(S.maximum_shift_margin,
                               S.starting_shift_margin + currentScore * S.shift_margin_increase_per_point);
    return [gap, speed, shiftMargin];
}

function movePipes(currentScore) {
    var speed = getDifficulty(currentScore)[1];
    // Positions are whole pixels: carry fractional movement into the next frame.
    pipe_scroll_remainder += speed;
    var movement = Math.floor(pipe_scroll_remainder);
    pipe_scroll_remainder -= movement;
    pipes.forEach(function (pair) {
        pair[0].x -= movement;
        pair[1].x -= movement;
    });
}

function Obstacle(x, y, w, h) {
    Rect.call(this, x, y, w, h);
    this.creature = null;
    this.dog = null;  // The locked pet waiting on this block, if there is one.
    this.coin = null;  // The height of the coin in this opening, if there is one.
}
Obstacle.prototype = Object.create(Rect.prototype);

function getGapCenter(pair) {
    return Math.floor((pair[0].bottom() + pair[1].y) / 2);
}

function getFallDistance(frames) {
    // A fall starts slowly: it speeds up until it reaches the maximum fall speed.
    var framesToTopSpeed = maximum_fall_speed / gravity;
    if (frames <= framesToTopSpeed) return gravity * frames * frames / 2;
    var speedingUp = gravity * framesToTopSpeed * framesToTopSpeed / 2;
    return speedingUp + maximum_fall_speed * (frames - framesToTopSpeed);
}

function getMaximumGapShift(pipeGap, speed, shiftMargin) {
    var roomInGap = pipeGap - bird_radius * 2;
    var clearFrames = (pipe_spacing - pipe_width - bird_radius * 2) / speed;
    return shiftMargin * (roomInGap + getFallDistance(clearFrames));
}

function createPipe(currentScore, previousGapY) {
    var difficulty = getDifficulty(currentScore || 0);
    var pipeGap = difficulty[0];
    var lowest = Math.max(150, Math.floor(pipeGap / 2) + 40);
    var highest = Math.min(450, HEIGHT - (pipeGap - Math.floor(pipeGap / 2)) - 40);
    if (previousGapY !== undefined && previousGapY !== null) {
        // Never place an opening farther away than the plane can reach in time.
        var shift = Math.trunc ? Math.trunc(getMaximumGapShift(pipeGap, difficulty[1], difficulty[2]))
                               : Math.floor(getMaximumGapShift(pipeGap, difficulty[1], difficulty[2]));
        lowest = Math.max(lowest, previousGapY - shift);
        highest = Math.min(highest, previousGapY + shift);
    }
    var gapY = randint(lowest, highest);
    var gapTop = gapY - Math.floor(pipeGap / 2);
    var gapBottom = gapTop + pipeGap;
    return [new Obstacle(WIDTH, 0, pipe_width, gapTop),
            new Obstacle(WIDTH, gapBottom, pipe_width, HEIGHT - gapBottom)];
}

function chooseNextAnimalDelay() {
    return randint(S.fewest_obstacles_between_animals, S.most_obstacles_between_animals);
}

function takeNextCreature(waiting, allCreatures) {
    // Like drawing from a shuffled deck: every species appears before any repeats.
    if (!waiting.length) Array.prototype.push.apply(waiting, sample(allCreatures, allCreatures.length));
    return waiting.pop();
}

function assignCreature(pair) {
    obstacles_until_animal -= 1;
    if (obstacles_until_animal > 0) return;
    obstacles_until_animal = chooseNextAnimalDelay();
    if (Math.random() < S.hanging_animal_chance) {
        pair[0].creature = takeNextCreature(waiting_hanging_creatures, HANGING_CREATURES);
    } else {
        pair[1].creature = takeNextCreature(waiting_ground_creatures, GROUND_CREATURES);
    }
}

// -------------------------
// Finding new friends
// -------------------------
function assignCoin(pair) {
    // Never next to a waiting friend: the new pet should have the opening to itself.
    if (pair[1].dog !== null || Math.random() >= S.coin_chance) return;
    // A little above or below the middle, but always well inside the opening.
    var room = Math.max(0, Math.floor((pair[1].y - pair[0].bottom()) / 2) - bird_radius - S.coin_radius);
    pair[1].coin = getGapCenter(pair) + randint(-Math.floor(room / 2), Math.floor(room / 2));
}

function collectCoins() {
    var reach = bird_radius + S.coin_radius;
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        if (bottom.coin !== null && Math.abs(bottom.centerx() - bird_x) < reach && Math.abs(bottom.coin - bird_y) < reach) {
            coins += 1;
            coins_this_run += 1;
            coin_pops.push([bottom.centerx(), bottom.coin, 0]);
            playSound("coin");
            bottom.coin = null;
        }
    });
}

function drawCoins() {
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        if (bottom.coin === null) return;
        // Each coin spins at its own moment, so a row of them never turns together.
        var frame = S.COIN_SPIN[(Math.floor(ambient_frames / 6) + bottom.h) % S.COIN_SPIN.length];
        var sprite = getSprite("coin", frame, 3);
        screen.drawImage(sprite, bottom.centerx() - Math.floor(sprite.width / 2), bottom.coin - Math.floor(sprite.height / 2));
    });
    coin_pops.forEach(function (pop) { drawText("+1", 2, [pop[0], pop[1] - 20 - pop[2]], SUN, INK); });
}

function updateCoinPops() {
    coin_pops.forEach(function (pop) { pop[2] += 1; });
    coin_pops = coin_pops.filter(function (pop) { return pop[2] < S.coin_pop_frames; });
}

function countFoundDogs() {
    return countKeys(unlocked_pets) - STARTER_PETS.length;
}

function getPillarsNeeded() {
    // Failed short flights keep their progress; long flights still find at most one pet.
    var found = countFoundDogs();
    if (found < S.pillars_for_first_dogs.length) return S.pillars_for_first_dogs[found];
    return getGapBetweenDogs(PETS.length - STARTER_PETS.length);
}

function getGapBetweenDogs(petsToFind) {
    return S.pillars_between_dogs;
}

function petLimitReached() {
    return newly_found_dogs.length >= S.pets_per_run_limit;
}

function getLockedPets() {
    var locked = [];
    for (var index = 0; index < PETS.length; index++) if (!unlocked_pets[index]) locked.push(index);
    return locked;
}

function chooseNextDog(locked) {
    // The list follows the data file, so its last pet is the most recently added one.
    if (Math.random() < S.recent_pet_chance) return locked[locked.length - 1];
    return choice(locked);
}

function assignDog(pair) {
    var locked = getLockedPets();
    var dogOnScreen = pipes.some(function (other) { return other[1].dog !== null; });
    if (petLimitReached() || !locked.length || dogOnScreen || pillars_since_dog < getPillarsNeeded()) return false;
    if (locked.indexOf(next_dog) < 0) next_dog = chooseNextDog(locked);
    pair[1].dog = next_dog;
    return true;
}

function getPillarsLeft() {
    if (petLimitReached() || countKeys(unlocked_pets) >= PETS.length) return null;
    return Math.max(0, getPillarsNeeded() - pillars_since_dog);
}

function collectPassedDogs() {
    // No message here: a new friend stays a secret until the crash screen reveals it.
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        if (bottom.dog !== null && bottom.right() < bird_x - bird_radius) {
            var pet = bottom.dog;
            bottom.dog = null;
            if (petLimitReached() || unlocked_pets[pet]) return;
            unlocked_pets[pet] = true;
            newly_found_dogs.push(pet);
            track("pet_found", {pet: PETS[pet].id, score: score});
            pillars_since_dog = 0;
            saveProgress();
        }
    });
}

function saveProgress() {
    if (dev_mode) return;  // The developer link never touches the real save.
    // Ids, not list positions: removing one pet later must not shift everyone else's.
    var progress = JSON.stringify({
        unlocked: sortedIds(unlocked_pets),
        pillars: pillars_since_dog,
        selected: PETS[selected_character].id,
        welcomed: sortedIds(welcomed_pets),
        owned: sortedIds(owned_pets),
        coins: coins,
        furniture: Object.keys(owned_furniture).sort(),
        stored_furniture: Object.keys(stored_furniture).filter(function (id) { return owned_furniture[id]; }).sort(),
        furniture_places: furniture_places,
        language: language,
        park_pets: park_shown_chosen ? park_shown.map(function (pet) { return PETS[pet].id; }) : null,
        garden: garden_owned,
        garden_pets: garden_shown_chosen ? garden_shown.map(function (pet) { return PETS[pet].id; }) : null,
        park_room: park_room,
        hoodie: Object.keys(hoodie_pets).sort(),
        liked: Object.keys(liked_pets).sort(),
        likes_unsent: Object.keys(likes_unsent).sort()
    });
    try {
        window.localStorage.setItem(WEB_PROGRESS_KEY, progress);
    } catch (error) {}  // The game still works; this visit's dogs just will not be remembered.
}

function refundOutfits(saved) {
    // Coins back for every outfit bought for the old "my look" person. Saves from before the
    // person was redrawn (no "avatar_version") used the first price list.
    if (!Array.isArray(saved.outfits)) return false;
    var prices = S.OUTFIT_REFUNDS[saved.avatar_version === 2 ? 2 : 1], paid = {};
    saved.outfits.forEach(function (id) {
        if (typeof id === "string" && prices.hasOwnProperty(id) && !paid[id]) {
            paid[id] = true;
            coins += prices[id];
        }
    });
    return true;
}

function loadProgress() {
    var saved = {};
    try {
        var text = window.localStorage.getItem(WEB_PROGRESS_KEY);
        saved = text ? JSON.parse(text) : {};
    } catch (error) {
        saved = {};
    }
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) saved = {};
    function addIds(ids, set) {
        if (!Array.isArray(ids)) return;
        ids.forEach(function (id) {
            if (Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, id)) set[PET_INDEX_BY_ID[id]] = true;
        });
    }
    addIds(saved.unlocked, unlocked_pets);
    addIds(saved.welcomed, welcomed_pets);
    addIds(saved.owned, owned_pets);
    var pillars = saved.pillars;
    pillars_since_dog = typeof pillars === "number" && pillars % 1 === 0 ? pillars : 0;
    // A count far past the goal was left by the old full-album bug: start this friend's wait over.
    if (pillars_since_dog > 2 * getPillarsNeeded()) pillars_since_dog = 0;
    var savedCoins = saved.coins;
    coins = typeof savedCoins === "number" && savedCoins % 1 === 0 && savedCoins >= 0 ? savedCoins : 0;
    if (Array.isArray(saved.furniture)) {
        saved.furniture.forEach(function (id) {
            if (typeof id === "string" && Object.prototype.hasOwnProperty.call(FURNITURE_BY_ID, id)) owned_furniture[id] = true;
        });
    }
    stored_furniture = {};
    if (Array.isArray(saved.stored_furniture)) {
        saved.stored_furniture.forEach(function (id) {
            if (typeof id === "string" && Object.prototype.hasOwnProperty.call(owned_furniture, id)) stored_furniture[id] = true;
        });
    }
    var places = saved.furniture_places && typeof saved.furniture_places === "object" ? saved.furniture_places : {};
    Object.keys(owned_furniture).forEach(function (id) {
        var place = places[id];
        var good = Array.isArray(place) && place.length === 2 && place.every(function (value) {
            return typeof value === "number" && value % 1 === 0;
        });
        furniture_places[id] = good ? place : FURNITURE_BY_ID[id].place.slice();
    });
    if (LANGUAGES.indexOf(saved.language) >= 0) language = saved.language;
    if (Array.isArray(saved.park_pets)) {
        park_shown = saved.park_pets.filter(function (id) {
            return Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, id);
        }).map(function (id) { return PET_INDEX_BY_ID[id]; }).slice(0, park_most_pets);
        park_shown_chosen = true;
    }
    garden_owned = saved.garden === true;
    if (garden_owned && Array.isArray(saved.garden_pets)) {
        garden_shown = saved.garden_pets.filter(function (id) {
            return Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, id);
        }).map(function (id) { return PET_INDEX_BY_ID[id]; }).slice(0, park_most_pets);
        garden_shown_chosen = true;
    }
    park_room = garden_owned && saved.park_room === GARDEN ? GARDEN : 0;
    // The "my look" person was taken out of the park: outfits bought for it are paid back.
    var refunded = refundOutfits(saved);
    [["liked", liked_pets], ["likes_unsent", likes_unsent]].forEach(function (pair) {
        if (!Array.isArray(saved[pair[0]])) return;
        saved[pair[0]].forEach(function (id) {
            if (typeof id === "string" && Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, id)) pair[1][id] = true;
        });
    });
    if (Array.isArray(saved.hoodie)) {
        saved.hoodie.forEach(function (id) {
            if (typeof id === "string" && Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, id)) hoodie_pets[id] = true;
        });
    }
    var selected = PET_INDEX_BY_ID[saved.selected];
    if (selected !== undefined && unlocked_pets[selected]) setPilot(selected);
    if (refunded) saveProgress();  // Saved without the outfits at once, so the coins are never paid back twice.
}

function track(event, details) {
    if (dev_mode) return;  // The developer's own playing is not counted.
    // The page only defines this when an analytics key was set at build time.
    try {
        if (window.flightFriendsTrack) window.flightFriendsTrack(event, JSON.stringify(details || {}));
    } catch (error) {}  // Statistics must never be able to stop the game.
}

function getPilotId() {
    return PETS[selected_character].id;
}

function getQueryValue(name) {
    var query = window.location.search.replace(/^\?/, "");
    var parts = query ? query.split("&") : [];
    for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split("=");
        try {
            if (decodeURIComponent(pair[0].replace(/\+/g, " ")) === name) {
                return decodeURIComponent((pair[1] || "").replace(/\+/g, " "));
            }
        } catch (error) {}
    }
    return null;
}

function getLinkedPetId() {
    // A pet's own link looks like: .../flight-friends/?pet=doudou
    return getQueryValue("pet");
}

// The developer's own link: .../flight-friends/?dev=ddd36bc8a1d6
// It gives every pet, piece of furniture and outfit plus lots of coins, sends no statistics,
// and never saves, so the real progress in this browser stays exactly as it was.
var DEV_KEY = "ddd36bc8a1d6";
var dev_mode = false;

function isDevLink() {
    return getQueryValue("dev") === DEV_KEY;
}

function giveEverything() {
    PETS.forEach(function (pet, index) { unlocked_pets[index] = true; });
    FURNITURE.forEach(function (item) {
        owned_furniture[item.id] = true;
        if (!furniture_places[item.id]) furniture_places[item.id] = item.place.slice();
    });
    garden_owned = true;
    coins = 99999;
}

function isOwnerLink() {
    // The owner's email link adds one more part: .../?pet=doudou&owner=1
    return getQueryValue("owner") === "1";
}

function giveOwnerReward(pet) {
    // Runs once per pet: the crown, plus a random friend the owner has not met yet.
    owned_pets[pet] = true;
    var locked = getLockedPets();
    var bonus = sample(locked, Math.min(S.owner_bonus_size, locked.length));
    bonus.forEach(function (index) { unlocked_pets[index] = true; });
    return bonus;
}

function getContributorNumber(pet) {
    var count = 0;
    for (var index = 0; index <= pet; index++) if (!PETS[index].founder) count += 1;
    return count;
}

function applyPetLink(petId, isOwner) {
    // One owner's link can bring several pets, with commas: ?pet=haishen,buding&owner=1
    var pets = [];
    (petId === null ? [] : String(petId).split(",")).forEach(function (one) {
        one = one.trim();
        if (!Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, one)) return;
        var pet = PET_INDEX_BY_ID[one];
        if (pets.indexOf(pet) < 0) pets.push(pet);
    });
    if (!pets.length) return false;
    linked_pet = pets[0];
    linked_pets = pets;
    // Unlocked first, so a bonus friend is never one of the pets this link already brings.
    pets.forEach(function (pet) { unlocked_pets[pet] = true; });
    var pages = [];
    pets.forEach(function (pet) {
        var newOwner = !!isOwner && !owned_pets[pet];
        // Opening the same link again goes straight to the game.
        if (newOwner || !welcomed_pets[pet]) {
            var bonus = newOwner ? giveOwnerReward(pet) : [];
            pages.push([pet, newOwner, bonus]);
            welcomed_pets[pet] = true;
            track("pet_link_welcome", {pet: PETS[pet].id, owner: newOwner, bonus: bonus.length});
        }
    });
    setPilot(pets[0]);
    welcome_pet = pets[0];
    link_page_queue = pages;
    showNextLinkPage();
    saveProgress();
    return true;
}

function showNextLinkPage() {
    // Each pet from the link gets its own page, one after another.
    var page = link_page_queue.shift();
    if (page) {
        link_page_pet = page[0];
        link_page_is_owner = page[1];
        link_page_bonus = page[2];
    } else {
        link_page_pet = null;
    }
}

// -------------------------
// Game state
// -------------------------
function resetBird() {
    bird_y = 300;
    bird_velocity = 0;
}

function updateBird() {
    bird_velocity = Math.min(bird_velocity + gravity, maximum_fall_speed);
    bird_y += bird_velocity;
}

function resetGame() {
    resetBoardRun();
    resetBird();
    newly_found_dogs.length = 0;
    pipes = [createPipe()];
    score = 0;
    pipe_scroll_remainder = 0.0;
    started = false;
    game_over = false;
    new_best = false;
    paused = false;
    paused_plane = null;
    death_started_at = null;
    explosion_particles = [];
    death_image = null;
    current_theme = 0;
    previous_theme = null;
    theme_fade = 1.0;
    flap_puffs = [];
    score_pop_frames = 0;
    obstacles_until_animal = chooseNextAnimalDelay();
    album_open = false;
    park_open = false;
    album_page = 0;
    weather = "clear";
    next_weather = null;
    weather_amount = 0.0;
    weather_starts_at = null;
    weather_ends_at = null;
    last_weather = null;
    welcome_pet = null;
    coins_this_run = 0;
    coin_pops = [];
}

function onCharacterScreen() {
    return !started && !game_over && death_started_at === null;
}

function setPilot(index) {
    selected_character = index;
    pilot_head = characterHeads[index];
    if (getSlotPets().indexOf(index) < 0) partner_slot_pet = index;
}

function selectCharacter(index) {
    if (!onCharacterScreen() || !(index >= 0 && index < PETS.length) || !unlocked_pets[index]) return false;
    setPilot(index);
    return true;
}

function openUploadForm() {
    track("upload_click", {pet: getPilotId()});
    // If the browser blocks the new tab, open the form in this tab instead.
    var opened = null;
    try { opened = window.open(UPLOAD_FORM_URL, "_blank"); } catch (error) {}
    if (!opened) window.location.href = UPLOAD_FORM_URL;
}

function getPetOrder() {
    // Unlocked pets come first, so four friends fill cards 1 to 4 and the locked
    // ones follow. Within each group: the linked pet, then founders, then the rest.
    var base = linked_pets.slice();
    FOUNDER_PETS.forEach(function (pet) { if (base.indexOf(pet) < 0) base.push(pet); });
    for (var pet = 0; pet < PETS.length; pet++) if (base.indexOf(pet) < 0) base.push(pet);
    return base.filter(function (pet) { return unlocked_pets[pet]; })
        .concat(base.filter(function (pet) { return !unlocked_pets[pet]; }));
}

function getSlotPets() {
    var slots = getPetOrder().slice(0, 7);
    // With more than seven friends, the last card shows the one picked from the album.
    if (unlocked_pets[partner_slot_pet] && slots.indexOf(partner_slot_pet) < 0) slots[6] = partner_slot_pet;
    return slots;
}

function useNewDog() {
    // On the crash screen, each press of C moves on to the next dog found in this run.
    if (game_over && newly_found_dogs.length) {
        var position = newly_found_dogs.indexOf(selected_character);
        setPilot(newly_found_dogs[(position + 1) % newly_found_dogs.length]);
        saveProgress();
    }
}

function getMedal(points) {
    // The best medal these points earn, as a number into MEDALS, or null.
    var earned = null;
    MEDALS.forEach(function (medal, number) { if (points >= medal[0]) earned = number; });
    return earned;
}


function recordRunStart() {
    runs_this_visit += 1;
    run_started_at = ticks();
    track("game_start", {pet: getPilotId(), run: runs_this_visit,
                         pets_unlocked: countKeys(unlocked_pets), collection_limit: S.pets_per_run_limit});
}

function flapOrStart() {
    if (paused || (death_started_at !== null && !game_over)) return;
    if (game_over) resetGame();
    if (!started) recordRunStart();
    started = true;
    game_over = false;
    bird_velocity = jump_strength;
    flap_puffs.push([bird_x - 34, bird_y + 12, 0]);
    playSound("flap");
}

function getAlbumPagePets() {
    var first = album_page * album_page_size;
    return getPetOrder().slice(first, first + album_page_size);
}

function chooseAlbumPet(position) {
    var pagePets = getAlbumPagePets();
    if (position < pagePets.length && selectCharacter(pagePets[position])) album_open = false;
}

function numberKey(event) {
    // "1" to "8" give 0 to 7; anything else gives -1.
    return event.type === "key" && /^[1-8]$/.test(event.key) ? Number(event.key) - 1 : -1;
}

function handleAlbum(event) {
    var pages = Math.floor((PETS.length - 1) / album_page_size) + 1;
    if (event.type === "key") {
        var number = numberKey(event);
        if (event.key === "Escape" || event.key === "8") {
            album_open = false;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            album_page = pmod(album_page + (event.key === "ArrowLeft" ? -1 : 1), pages);
        } else if (number >= 0 && number < album_page_size) {
            chooseAlbumPet(number);
        }
        return true;  // Keys belong to the album, so space cannot start a game behind it.
    }
    if (event.type === "click") {
        if (album_previous_button.contains(event.x, event.y)) {
            album_page = pmod(album_page - 1, pages);
        } else if (album_next_button.contains(event.x, event.y)) {
            album_page = pmod(album_page + 1, pages);
        } else if (start_button.contains(event.x, event.y)) {
            album_open = false;
        } else {
            character_cards.forEach(function (rect, position) {
                if (rect.contains(event.x, event.y)) chooseAlbumPet(position);
            });
        }
        return true;
    }
    return false;
}

function handleLinkPage(event) {
    // The page sits on top of everything until the player accepts the new friend.
    if (link_page_pet === null) return false;
    var closes = (event.type === "key" && (event.key === " " || event.key === "Enter")) ||
                 (event.type === "click" && link_page_button.contains(event.x, event.y));
    if (closes) showNextLinkPage();
    return true;
}

function handleCharacterSelection(event) {
    if (!onCharacterScreen()) return false;
    if (park_open) return handlePark(event);
    if (quiz_open) return handleQuiz(event);
    if (catch_open) return handleCatch(event);
    if (album_open) return handleAlbum(event);
    var slotPets = getSlotPets();
    if (event.type === "key") {
        var number = numberKey(event);
        if (number >= 0 && number < slotPets.length) {
            selectCharacter(slotPets[number]);
            return true;
        }
        if (event.key === "8") {
            album_open = true;
            return true;
        }
        if (event.key === "h" || event.key === "H") {
            openPark();
            return true;
        }
        if ((event.key === "f" || event.key === "F") && QUIZ_ENABLED) {
            openQuiz();
            return true;
        }
        if (event.key === "c" || event.key === "C") {
            openCatch();
            return true;
        }
        if (event.key === "l") {
            switchLanguage();
            return true;
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            var direction = event.key === "ArrowLeft" ? -1 : 1;
            // Locked cards are skipped: the arrows only move between pets you own.
            var owned = slotPets.filter(function (pet) { return unlocked_pets[pet]; });
            var position = owned.indexOf(selected_character);
            selectCharacter(owned[pmod(position + direction, owned.length)]);
            return true;
        }
    }
    if (event.type === "click") {
        for (var i = 0; i < slotPets.length; i++) {
            if (character_cards[i].contains(event.x, event.y)) {
                selectCharacter(slotPets[i]);
                return true;
            }
        }
        if (album_card.contains(event.x, event.y)) {
            album_open = true;
            return true;
        }
        if (park_button.contains(event.x, event.y)) {
            openPark();
            return true;
        }
        if (QUIZ_ENABLED && quiz_button.contains(event.x, event.y)) {
            openQuiz();
            return true;
        }
        if (catch_button.contains(event.x, event.y)) {
            openCatch();
            return true;
        }
        if (language_button.contains(event.x, event.y)) {
            switchLanguage();
            return true;
        }
        if (start_button.contains(event.x, event.y)) {
            flapOrStart();
            return true;
        }
        if (UPLOAD_FORM_URL && upload_button.contains(event.x, event.y)) {
            openUploadForm();
            return true;
        }
    }
    return false;
}

function handleDeath() {
    // A collision can touch both an obstacle and a screen edge in the same frame.
    if (!started) return;
    var medal = getMedal(score);
    track("game_over", {pet: getPilotId(), run: runs_this_visit, score: score,
                        seconds: Math.round((ticks() - run_started_at) / 1000),
                        dogs_found: newly_found_dogs.length, coins: coins_this_run,
                        pets_unlocked: countKeys(unlocked_pets), collection_limit: S.pets_per_run_limit,
                        medal: medal === null ? "none" : MEDALS[medal][2]});
    saveProgress();
    death_image = makePlaneSprite(true);
    started = false;
    death_started_at = ticks();
    playSound("crash");
    explosion_particles = [];
    var colors = [[255, 230, 80], [255, 150, 35], [255, 75, 30]];
    for (var i = 0; i < 64; i++) {
        var angle = Math.PI * 2 * i / 64;
        var speed = 140 + Math.random() * 240;
        explosion_particles.push([Math.cos(angle) * speed, Math.sin(angle) * speed, randint(5, 11), choice(colors)]);
    }
}

function circle(color, alpha, x, y, radius, width) {
    if (radius <= 0) return;
    screen.beginPath();
    if (width) {
        screen.strokeStyle = css(color, alpha);
        screen.lineWidth = width;
        screen.arc(x, y, Math.max(0.5, radius - width / 2), 0, Math.PI * 2);
        screen.stroke();
    } else {
        screen.fillStyle = css(color, alpha);
        screen.arc(x, y, radius, 0, Math.PI * 2);
        screen.fill();
    }
}

function drawDeathEffect() {
    var elapsed = (ticks() - death_started_at) / 1000;
    var progress = Math.min(elapsed / (death_duration / 1000), 1);
    var centerY = Math.max(bird_radius, Math.min(HEIGHT - bird_radius, bird_y));
    var i;

    if (elapsed < 0.9) {
        var remaining = 1 - elapsed / 0.9;
        for (i = 0; i < explosion_particles.length; i += 6) {
            var smoke = explosion_particles[i];
            circle([70, 55, 65], 100 * remaining, Math.floor(bird_x + smoke[0] * elapsed * 0.3),
                   Math.floor(centerY + smoke[1] * elapsed * 0.2 - elapsed * 45), Math.floor(10 + elapsed * 30));
        }
        if (elapsed < 0.55) {
            var waveFade = 1 - elapsed / 0.55;
            [[1, [255, 230, 130]], [0.75, [255, 120, 35]]].forEach(function (wave) {
                circle(wave[1], 220 * waveFade, bird_x, Math.floor(centerY),
                       Math.floor((20 + elapsed * 260) * wave[0]), Math.max(1, Math.floor(7 * waveFade)));
            });
        }
        if (elapsed < 0.35) {
            var radius = 24 + 65 * Math.sin(Math.PI * elapsed / 0.35);
            [[1, [255, 65, 20]], [0.72, [255, 165, 25]], [0.4, [255, 245, 170]]].forEach(function (flame) {
                screen.fillStyle = css(flame[1], 255 * (1 - elapsed / 0.35));
                screen.beginPath();
                for (var point = 0; point < 24; point++) {
                    var angle = Math.PI * 2 * point / 24;
                    var length = radius * flame[0] * (point % 2 === 0 ? 1 : 0.6);
                    screen.lineTo(bird_x + Math.cos(angle) * length, centerY + Math.sin(angle) * length);
                }
                screen.closePath();
                screen.fill();
            });
        }
        explosion_particles.forEach(function (particle) {
            var vx = particle[0], vy = particle[1];
            var x = Math.floor(bird_x + vx * elapsed);
            var y = Math.floor(centerY + vy * elapsed + 150 * elapsed * elapsed);
            screen.strokeStyle = css(particle[3], 220 * remaining);
            screen.lineWidth = 2;
            screen.beginPath();
            screen.moveTo(Math.floor(x - vx * 0.035), Math.floor(y - vy * 0.035));
            screen.lineTo(x, y);
            screen.stroke();
            circle(particle[3], 255 * remaining, x, y, Math.max(1, Math.floor(particle[2] * remaining)));
        });
    }

    var displayY = centerY - 45 * Math.sin(Math.PI * progress) + 50 * progress * progress;
    displayY = Math.max(bird_radius, Math.min(HEIGHT - bird_radius, displayY));
    drawTurned(death_image, bird_x, Math.floor(displayY), 180 * Math.min(elapsed / 0.6, 1));

    if (elapsed < 0.7) {
        var textScale = 5 + Math.floor(2 * Math.min(elapsed / 0.1, 1));
        var width = boomImage.width * textScale, height = boomImage.height * textScale;
        var left = bird_x + 30 - Math.floor(width / 2);
        var top = Math.floor(centerY - 75 - elapsed * 35) - Math.floor(height / 2);
        left = Math.max(6, Math.min(WIDTH - 6 - width, left));
        top = Math.max(6, Math.min(HEIGHT - 6 - height, top));
        screen.save();
        screen.imageSmoothingEnabled = false;
        screen.globalAlpha = Math.max(0, Math.min(1, (0.7 - elapsed) / 0.2));
        screen.drawImage(boomImage, left, top, width, height);
        screen.restore();
    }
}

function getShakeOffset(elapsed) {
    // A hard jolt that dies away quickly, like a phone buzzing in the hand.
    if (elapsed >= shake_duration) return [0, 0];
    var strength = shake_strength * Math.pow(1 - elapsed / shake_duration, 2);
    return [Math.round(Math.sin(elapsed * 120) * strength), Math.round(Math.cos(elapsed * 97) * strength)];
}

var shakeCopy = null;
function shakeScreen() {
    // Shake only the picture; the collision positions never move.
    var elapsed = (ticks() - death_started_at) / 1000;
    var offset = getShakeOffset(elapsed);
    if (offset[0] || offset[1]) {
        if (!shakeCopy || shakeCopy.width !== canvas.width) shakeCopy = makeCanvas(canvas.width, canvas.height);
        var pen = shakeCopy.getContext("2d");
        pen.clearRect(0, 0, shakeCopy.width, shakeCopy.height);
        pen.drawImage(canvas, 0, 0);
        // The unmoved picture stays underneath, so no gap shows at the edges.
        screen.drawImage(shakeCopy, offset[0], offset[1], WIDTH, HEIGHT);
    }
    if (elapsed < 0.08) {  // A brief hot flash.
        screen.save();
        screen.globalCompositeOperation = "lighter";
        screen.fillStyle = "rgb(90,40,30)";
        screen.fillRect(0, 0, WIDTH, HEIGHT);
        screen.restore();
    }
}

// -------------------------
// Weather and scenery
// -------------------------
function weatherAllowed(kind, theme) {
    var themes = S.WEATHER_THEMES[kind] || [0, 1, 2];
    return (kind === "clear" || WEATHERS.includes(kind)) && themes.includes(theme);
}

function updateWeather() {
    // About every 25 obstacles a spell of weather rolls in, lasts weather_lasts points, then clears.
    var target = started ? Math.floor(score / points_per_theme) % SKY_THEMES.length : current_theme;
    if (!weatherAllowed(weather, target) || (next_weather !== null && !weatherAllowed(next_weather, target))) next_weather = "clear";
    if (started) {
        if (weather_starts_at === null) {
            weather_starts_at = score + randint(S.weather_gap[0], S.weather_gap[1]);
        }
        if (weather_ends_at === null && score >= weather_starts_at) {
            // Never the same weather twice in a row.
            next_weather = choice(WEATHERS.filter(function (kind) { return kind !== last_weather && weatherAllowed(kind, target); }));
            last_weather = next_weather;
            weather_ends_at = score + S.weather_lasts;
        } else if (weather_ends_at !== null && score >= weather_ends_at) {
            next_weather = "clear";
            weather_ends_at = null;
            weather_starts_at = score + randint(S.weather_gap[0], S.weather_gap[1]);
        }
    }
    var step = 1 / S.weather_fade_frames;
    if (next_weather === null) {
        weather_amount = Math.min(1.0, weather_amount + step);
    } else {
        weather_amount = Math.max(0.0, weather_amount - step);
        if (weather_amount === 0.0) {
            weather = next_weather;
            next_weather = null;
        }
    }
}

function updateScenery() {
    if (!paused) {
        ambient_frames += 1;
        updateWeather();
    }
    if (started && !paused) {
        world_scroll += getDifficulty(score)[1];
        flap_puffs.forEach(function (puff) {
            puff[0] -= 4;
            puff[2] += 1;
        });
        flap_puffs = flap_puffs.filter(function (puff) { return puff[2] < 24; });
        score_pop_frames = Math.max(0, score_pop_frames - 1);
        updateCoinPops();
    } else if (onCharacterScreen()) {
        world_scroll += 0.8;  // Let the world drift gently behind the menu.
        if (park_open) updatePark();
        if (quiz_open) updateQuiz();
        if (catch_open) updateCatch();
    }
    var targetTheme = Math.floor(score / points_per_theme) % SKY_THEMES.length;
    if (targetTheme !== current_theme) {
        previous_theme = current_theme;
        current_theme = targetTheme;
        theme_fade = 0.0;
    } else if (previous_theme !== null && !paused) {
        theme_fade = Math.min(1.0, theme_fade + 1 / S.theme_fade_frames);
        if (theme_fade === 1.0) previous_theme = null;
    }
    syncPageSky();
}

function syncPageSky() {
    // The web page behind the game shows the same sky as the game.
    if (page_theme !== current_theme) {
        page_theme = current_theme;
        document.body.setAttribute("data-theme", String(current_theme));
    }
}

function blitWrapped(layer, y, speedFactor, alpha) {
    // Distant layers move more slowly, which makes the flat scene feel deep.
    if (alpha <= 0) return;
    var offset = pmod(Math.floor(world_scroll * speedFactor), WIDTH);
    screen.globalAlpha = alpha / 255;
    screen.drawImage(layer, -offset, y);
    screen.drawImage(layer, WIDTH - offset, y);
    screen.globalAlpha = 1;
}

function getSceneLayers() {
    if (previous_theme === null) return [[scenery[current_theme], 255]];
    return [[scenery[previous_theme], 255], [scenery[current_theme], Math.round(255 * theme_fade)]];
}

function getSunAndMoonLayers() {
    if (previous_theme === null) return [[scenery[current_theme].body, 255]];
    // The old one leaves during the first half and the new one arrives in the second.
    return [[scenery[previous_theme].body, Math.round(255 * Math.max(0, 1 - theme_fade * 2))],
            [scenery[current_theme].body, Math.round(255 * Math.max(0, theme_fade * 2 - 1))]];
}

function drawBackground() {
    var layers = getSceneLayers();
    layers.forEach(function (layer) {
        screen.globalAlpha = layer[1] / 255;
        screen.drawImage(layer[0].sky, 0, 0);
    });
    screen.globalAlpha = 1;
    getSunAndMoonLayers().forEach(function (layer) {
        var alpha = layer[1];
        if (weather === "rain" || weather === "storm") alpha = Math.round(alpha * (1 - 0.6 * weather_amount));
        if (alpha <= 0) return;
        screen.globalAlpha = alpha / 255;
        screen.drawImage(layer[0], sky_body_center[0] - Math.floor(layer[0].width / 2),
                         sky_body_center[1] - Math.floor(layer[0].height / 2));
    });
    screen.globalAlpha = 1;
    layers.forEach(function (layer) { blitWrapped(layer[0].clouds, 10, 0.1, layer[1]); });
    layers.forEach(function (layer) { blitWrapped(layer[0].far, HEIGHT - 260, 0.2, layer[1]); });
    layers.forEach(function (layer) { blitWrapped(layer[0].near, HEIGHT - 190, 0.4, layer[1]); });
    var theme = SKY_THEMES[current_theme];
    drawGroundAnimals(theme.tint);
    if (theme.stars) drawFireflies(); else drawDaytimeAnimals();
}

function multiplyScreen(red, green, blue) {
    screen.save();
    screen.globalCompositeOperation = "multiply";
    screen.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    screen.fillRect(0, 0, WIDTH, HEIGHT);
    screen.restore();
}

function drawWeatherBehind() {
    if (!weatherAllowed(weather, current_theme)) return;
    // Fog and gloom sit behind the obstacles, so the way through always stays clear.
    if (weather === "fog") {
        var strength = SKY_THEMES[current_theme].stars ? 55 : 125;
        var alpha = Math.round(strength * weather_amount);
        blitWrapped(fogLayer, 120, 0.3, alpha);
        blitWrapped(fogLayer, 330, 0.5, alpha);
    } else if (weather === "rain" || weather === "storm") {
        // A cool gray-blue light, like a cloudy afternoon, and heavy clouds drifting over the sun.
        multiplyScreen(255 - Math.round(66 * weather_amount), 255 - Math.round(50 * weather_amount),
                       255 - Math.round(24 * weather_amount));
        getSceneLayers().forEach(function (layer) {
            blitWrapped(layer[0].rain_clouds, 0, 0.15, Math.round(layer[1] * 0.92 * weather_amount));
        });
        if (weather === "storm") drawLightning(weather_amount);
    } else if (weather === "meteors") {
        drawMeteors(ambient_frames, weather_amount);
    } else if (weather === "snow") {
        multiplyScreen(255 - Math.round(23 * weather_amount), 255 - Math.round(13 * weather_amount), 255);
    } else if (weather === "leaves") {
        multiplyScreen(255, 255 - Math.round(14 * weather_amount), 255 - Math.round(26 * weather_amount));
        blitWrapped(autumnLayer, 0, 0.25, Math.round(255 * weather_amount));
    } else if (weather === "osmanthus") {
        blitWrapped(osmanthusLayer, 0, 0.25, Math.round(255 * weather_amount));
    } else if (weather === "petals") {
        // A faint pink wash, and blossom branches drifting past overhead.
        var fade = 22 * weather_amount;
        multiplyScreen(255, Math.round(255 - fade), Math.round(255 - fade * 0.6));
        blitWrapped(blossomLayer, 0, 0.45, Math.round(255 * weather_amount));
    }
}

function drawRain(amount) {
    if (amount <= 0) return;
    var blockWidth = S.RAIN_BLOCK[0], blockHeight = S.RAIN_BLOCK[1];
    screen.save();
    S.RAIN_LAYERS.forEach(function (layer, layerNumber) {
        screen.globalAlpha = layer.opacity * amount / 255;
        for (var number = 0; number < layer.count; number++) {
            var seed = (number * 127 + layerNumber * 311) % 997;
            var x = pmod(seed * 73 - ambient_frames * layer.drift, WIDTH + 40) - 20;
            var y = pmod(seed * 193 + ambient_frames * layer.fall, HEIGHT + 60) - 40;
            for (var block = 0; block < layer.blocks; block++) {
                fillRect(layer.tail, Math.floor(x) + Math.floor(block / 2), Math.floor(y) - block * blockHeight, blockWidth, blockHeight);
            }
        }
    });
    screen.restore();
}

function drawSplash(x, y, age) {
    // Two drops jump up, spread out and fall away.
    var shape = S.SPLASH_SHAPES[Math.floor(age * S.SPLASH_SHAPES.length / S.splash_frames)];
    shape.forEach(function (place) { fillRect(S.SPLASH_COLOR, x + place[0] - 1, y + place[1] - 1, 2, 2); });
}

function drawSplashes(amount) {
    // Splashes on the meadow: each spot splashes, rests, then moves somewhere new.
    var count = Math.round(10 * amount);
    for (var number = 0; number < count; number++) {
        var time = ambient_frames + number * 11, age = time % 36;
        if (age < S.splash_frames) drawSplash((number * 173 + Math.floor(time / 36) * 311) % WIDTH, HEIGHT - 10, age);
    }
    // And on the grass on top of the ground blocks.
    if (amount < 0.5) return;
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        for (var spot = 0; spot < 2; spot++) {
            var blockTime = ambient_frames + bottom.h * 5 + spot * 17, blockAge = blockTime % 30;
            if (blockAge < S.splash_frames) {
                drawSplash(bottom.x + 10 + (Math.floor(blockTime / 30) * 37 + spot * 29) % (bottom.w - 20),
                           bottom.y + 5, blockAge);
            }
        }
    });
}

function getSnowPosition(number, frame) {
    var depth = number % S.SNOW_FALL_SPEEDS.length;
    var sway = (S.SNOW_SWAY + depth * 2) * Math.sin(frame / (S.SNOW_SWAY_FRAMES + depth * 15) + number);
    var x = 20 + pmod(number * 73, WIDTH - 40) + sway;
    // Re-enter above the sky instead of wrapping in through either side.
    var y = pmod(number * 131 + frame * S.SNOW_FALL_SPEEDS[depth], HEIGHT + 20) - 10;
    return [x, y];
}

function drawWeatherArt(kind, index, x, y, alpha) {
    var rect = S.WEATHER_FRAMES[kind][index];
    screen.save();
    screen.globalAlpha = (alpha === undefined ? 255 : alpha) / 255;
    screen.drawImage(weatherSheet, rect[0], rect[1], rect[2], rect[3], Math.round(x), Math.round(y), rect[2], rect[3]);
    screen.restore();
}

function drawSnow(count) {
    for (var number = 0; number < count; number++) {
        var point = getSnowPosition(number, ambient_frames), size = number % 5 === 0 ? 1 : 0;
        var tilt = [0, 1, 2, 1][(Math.floor(ambient_frames / (38 + number % 5 * 5)) + number) % 4];
        drawWeatherArt("snow", number % 3 * 6 + size * 3 + tilt, point[0], point[1],
                       Math.round((size === 0 ? 225 : 255) * weather_amount));
    }
}

function makePetalFrames(cell) {
    // One petal seen face on, tilted and edge on. Playing them in turn makes it tumble.
    var colors = {s: "rgb(222,104,146)", p: "rgb(246,164,192)", l: "rgb(255,222,232)"};
    var drawings = [[".s.s.", "slpps", "slpps", ".pps.", "..s.."], ["slpps", ".pps.", "..s.."], ["sppps"]];
    var frames = drawings.map(function (drawing) {
        var frame = makeCanvas(drawing[0].length * cell, drawing.length * cell), pen = frame.getContext("2d");
        drawing.forEach(function (line, row) {
            for (var column = 0; column < line.length; column++) {
                if (line[column] === ".") continue;
                pen.fillStyle = colors[line[column]];
                pen.fillRect(column * cell, row * cell, cell, cell);
            }
        });
        return frame;
    });
    frames.push(frames[1]);  // Back through the tilt, so the tumble loops smoothly.
    return [0, 90, 180, 270].map(function (turn) {
        return frames.map(function (frame) {
            var sideways = turn === 90 || turn === 270;
            var turned = makeCanvas(sideways ? frame.height : frame.width, sideways ? frame.width : frame.height);
            var pen = turned.getContext("2d");
            pen.translate(turned.width / 2, turned.height / 2);
            pen.rotate(-turn * Math.PI / 180);
            pen.drawImage(frame, -frame.width / 2, -frame.height / 2);
            return turned;
        });
    });
}

var nearPetalFrames = makePetalFrames(3), farPetalFrames = makePetalFrames(2);

function drawPetals(count) {
    for (var number = 0; number < count; number++) {
        // Every third petal is closer: larger, and falling faster.
        var near = number % 3 === 0;
        var drift = 1.3 + number % 4 * 0.3 + (near ? 0.6 : 0);
        var x = pmod(number * 97 - ambient_frames * drift + 34 * Math.sin(ambient_frames / 45 + number), WIDTH + 40) - 20;
        var y = pmod(number * 113 + ambient_frames * (0.8 + number % 3 * 0.3 + (near ? 0.5 : 0)) +
                     10 * Math.sin(ambient_frames / 22 + number * 2), HEIGHT + 40) - 20;
        var frames = (near ? nearPetalFrames : farPetalFrames)[number % 4];
        screen.drawImage(frames[(Math.floor(ambient_frames / (9 + number % 5 * 2)) + number) % 4], Math.floor(x), Math.floor(y));
    }
}

function drawDandelions(count) {
    for (var number = 0; number < count; number++) {
        var depth = number % 3;
        var phase = ambient_frames / (105 + depth * 22) + number * 2.3;
        var x = pmod(number * 137 - ambient_frames * (0.55 + depth * 0.25) + 24 * Math.sin(phase), WIDTH + 60) - 30;
        var y = pmod(number * 179 - ambient_frames * (0.12 + depth * 0.06) + 15 * Math.sin(phase * 1.3), HEIGHT + 40) - 20;
        var tilt = (Math.floor(ambient_frames / 25) + number) % 4;
        drawWeatherArt("dandelions", depth * 4 + tilt, x, y, Math.round((155 + depth * 35) * weather_amount));
    }
}

function drawOsmanthus(count) {
    for (var number = 0; number < count; number++) {
        var near = number % 3 === 0;
        var x = pmod(number * 97 - ambient_frames * (1.0 + number % 4 * 0.22) + 26 * Math.sin(ambient_frames / 52 + number), WIDTH + 40) - 20;
        var y = pmod(number * 113 + ambient_frames * (1.1 + number % 3 * 0.25) + 7 * Math.sin(ambient_frames / 30 + number * 2), HEIGHT + 40) - 20;
        var tilt = (Math.floor(ambient_frames / 14) + number) % 4;
        drawWeatherArt("osmanthus", (near ? 4 : 0) + tilt, x, y, Math.round(235 * weather_amount));
    }
}

function drawWeatherInFront() {
    if (!weatherAllowed(weather, current_theme)) return;
    // Thin and sparse on purpose: it must never hide an obstacle's edge.
    if (weather === "rain" || weather === "storm") {
        drawRain(weather_amount);
        drawSplashes(weather_amount);
    }
    else if (weather === "leaves") drawLeaves(Math.round(24 * weather_amount));
    else if (weather === "snow") drawSnow(Math.round(42 * weather_amount));
    else if (weather === "dandelions") drawDandelions(Math.round(32 * weather_amount));
    else if (weather === "osmanthus") drawOsmanthus(Math.round(30 * weather_amount));
    else if (weather === "petals") drawPetals(Math.round(42 * weather_amount));
}



var meteorLayers;
function drawMeteors(frame, amount) {
    if (amount <= 0) return;
    // Paint at game resolution so the pixel edges match the Python version.
    var layers = meteorLayers || (meteorLayers = [makeCanvas(800, 600), makeCanvas(800, 600)]);
    var glow = layers[0].getContext("2d"), light = layers[1].getContext("2d");
    glow.clearRect(0, 0, 800, 600); light.clearRect(0, 0, 800, 600);
    function color(ctx, rgb, alpha) {
        ctx.strokeStyle = ctx.fillStyle = "rgba(" + rgb + "," + Math.round(alpha) / 255 + ")";
    }
    function line(ctx, rgb, alpha, x, y, ex, ey, width) {
        color(ctx, rgb, alpha); ctx.lineWidth = width;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ex, ey); ctx.stroke();
    }
    function circle(ctx, rgb, alpha, x, y, radius) {
        color(ctx, rgb, alpha); ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    }
    for (var n = 0; n < 12; n++) {
        var depth = n % 3, lifetime = [94, 108, 120][depth];
        var age = (frame + n * 27 + (n % 3) * 9) % 320;
        if (age >= lifetime) continue;
        var speed = [4.2, 5.1, 6.2][depth], slope = .46 + (n % 4) * .035;
        var x = 400 + (n * 179 % 400) - age * speed;
        var y = -55 + (n * 67 % 160) + age * speed * slope;
        var fade = Math.min(1, age / 9, (lifetime - age) / 24) * amount;
        var tailLength = [86, 124, 168][depth];
        for (var segment = 47; segment >= 0; segment--) {
            var t = segment / 48, strength = Math.pow(1 - t, 1.7) * fade;
            var px = Math.round((x + t * tailLength) / 2) * 2;
            var py = Math.round((y - t * tailLength * slope) / 2) * 2;
            var next = Math.min(1, t + 1 / 48);
            var ex = Math.round((x + next * tailLength) / 2) * 2;
            var ey = Math.round((y - next * tailLength * slope) / 2) * 2;
            var width = Math.max(1, Math.round((2 + depth) * (1 - t)));
            line(glow, "83,139,225", 58 * strength, px, py, ex, ey, width * 2 + 8);
            line(light, "133,198,255", 210 * strength, px, py, ex, ey, width * 2);
            if (t < .7) line(light, "224,242,255", 245 * strength, px, py, ex, ey, 2);
        }
        var px = Math.round(x / 2) * 2, py = Math.round(y / 2) * 2, radius = 2 + depth;
        circle(glow, "112,171,255", 80 * fade, px, py, radius + 9);
        circle(light, "187,222,255", 240 * fade, px, py, radius + 1);
        circle(light, "255,250,223", 255 * fade, px - 1, py + 1, radius);
        for (var spark = 0; spark < 4; spark++) {
            var distance = 15 + ((age * 1.9 + spark * 23 + n * 11) % (tailLength - 15));
            var spread = Math.sin(spark * 4.1 + n) * (2 + distance * .035);
            var sx = Math.round((x + distance) / 2) * 2;
            var sy = Math.round((y - distance * slope + spread) / 2) * 2;
            color(light, "187,217,255", 150 * fade * (1 - distance / tailLength));
            light.fillRect(sx, sy, 2, 2);
        }
    }
    layers.forEach(function (layer) { screen.drawImage(layer, 0, 0); });
}

function drawLightning(amount) {
    var pulse = Math.max(0, 1 - Math.abs(ambient_frames % 360 - 12) / 12) * amount;
    if (pulse <= 0) return;
    screen.save();
    screen.globalAlpha = Math.round(18 * pulse) / 255;
    screen.fillStyle = "rgb(224,236,255)"; screen.fillRect(0, 0, WIDTH, HEIGHT);
    screen.globalAlpha = Math.round(210 * pulse) / 255;
    screen.fillStyle = "rgb(236,244,255)";
    screen.beginPath();
    S.LIGHTNING_POINTS.forEach(function (point, index) {
        if (index === 0) screen.moveTo(point[0], point[1]); else screen.lineTo(point[0], point[1]);
    });
    screen.closePath(); screen.fill(); screen.restore();
}

function drawLeaves(count) {
    for (var number = 0; number < count; number++) {
        var near = number % 4 === 0;
        var x = pmod(number * 101 - ambient_frames * (0.55 + number % 3 * 0.15) +
                     (near ? 44 : 28) * Math.sin(ambient_frames / (85 + number % 4 * 12) + number), WIDTH + 80) - 40;
        var y = pmod(number * 127 + ambient_frames * (0.6 + number % 3 * 0.12 + (near ? 0.12 : 0)) +
                     8 * Math.sin(ambient_frames / 65 + number), HEIGHT + 80) - 40;
        var turn = (Math.floor(ambient_frames / (14 + number % 5 * 3)) + number) % 8;
        drawWeatherArt("maple", number % 3 * 16 + (near ? 8 : 0) + turn, x, y,
                       Math.round((near ? 255 : 230) * weather_amount));
    }
}

function drawFireflies() {
    // Each firefly follows its own wave and glows on and off as time passes.
    var time = ambient_frames / 60;
    for (var index = 0; index < 14; index++) {
        var x = pmod(index * 61 - world_scroll * 0.3 + 18 * Math.sin(time + index), WIDTH);
        var y = 400 + index * 13 % 150 + 12 * Math.sin(time * 1.4 + index * 2);
        if (Math.sin(time * 2 + index * 1.7) > -0.2) {
            fillRect([150, 170, 70], Math.floor(x) - 2, Math.floor(y) - 2, 8, 8);
            fillRect([246, 250, 140], Math.floor(x), Math.floor(y), 4, 4);
        }
    }
}

function drawDaytimeAnimals() {
    // A small flock crosses the sky, then loops around to the other side.
    [[0, 0], [46, -18], [92, 10]].forEach(function (offset, index) {
        var x = WIDTH + 120 - pmod(ambient_frames * 1.5 + offset[0], WIDTH + 320);
        var y = 76 + offset[1] + 10 * Math.sin(ambient_frames / 40 + index);
        var wingFrame = (Math.floor(ambient_frames / 10) + index) % 2;
        screen.drawImage(getSprite("bird", wingFrame, 2), Math.floor(x), Math.floor(y));
    });
    // Butterflies flap quickly while drifting in loose waves over the meadow.
    for (var index = 0; index < 2; index++) {
        var x = pmod(index * 397 + 40 - world_scroll * 0.6 + 30 * Math.sin(ambient_frames / 45 + index), WIDTH);
        var y = 455 + index * 19 % 70 + 14 * Math.sin(ambient_frames / 28 + index * 2);
        var wingFrame = (Math.floor(ambient_frames / 7) + index) % 2;
        screen.drawImage(getSprite("butterfly", wingFrame, 2), Math.floor(x), Math.floor(y));
    }
}

function drawGroundAnimals(tint) {
    // A fox trots slower than the world scrolls, and a rabbit hops along behind it.
    var span = WIDTH + 240;
    var foxX = pmod(ambient_frames * 1.1 - world_scroll * 0.55 + 330, span) - 120;
    var frame = Math.floor(ambient_frames / 8) % 2;
    screen.drawImage(getSprite("running_fox", frame, 3, tint), Math.floor(foxX), HEIGHT - 58);
    var rabbitX = pmod(ambient_frames * 0.7 - world_scroll * 0.55 + 40, span) - 120;
    var hop = Math.abs(Math.sin(ambient_frames / 14)) * 16;
    screen.drawImage(getSprite("rabbit", getBlinkFrame(2), 2, tint), Math.floor(rabbitX), Math.floor(HEIGHT - 60 - hop));
}

function drawForeground() {
    getSceneLayers().forEach(function (layer) { blitWrapped(layer[0].foreground, HEIGHT - 30, 1.0, layer[1]); });
}

function drawFlyingPlane() {
    var sprite = paused ? paused_plane : (framePlane = makePlaneSprite(started, framePlane));
    // Tilt the picture with the climb or dive; the collision box does not turn.
    screen.save();
    screen.imageSmoothingEnabled = true;
    drawTurned(sprite, bird_x, Math.floor(bird_y), bird_velocity * plane_tilt_per_speed);
    screen.restore();
}

function drawFlapPuffs() {
    flap_puffs.forEach(function (puff) {
        var size = 14 - Math.floor(puff[2] / 2);
        var x = puff[0] - Math.floor(size / 2), y = puff[1] - Math.floor(size / 2);
        fillRect(INK, x - 2, y - 2, size + 4, size + 4);
        fillRect(CREAM, x, y, size, size);
    });
}

// -------------------------
// Score plate and menus
// -------------------------
function drawHud() {
    var plate = new Rect(14, 14, 170, 76);
    drawPixelPanel(plate);
    drawFittedText(tr("score"), [54, 38], 64);
    drawText(String(score), score_pop_frames ? 4 : 3, [128, 36], RED);
    drawFittedText(tr("best_short", {n: best_score}), [plate.centerx(), 69], plate.w - 12, FOREST);
    drawCoinCounter();
    // Always in the same place, so the player can watch the next friend come closer.
    drawNextFriendProgress();
}


function drawCoinCounter() {
    var plate = new Rect(WIDTH - 142, 14, 128, 52);
    drawPixelPanel(plate);
    blitCentered(getSprite("coin", 0, 3), plate.x + 30, plate.centery());
    drawText(String(coins), 3, [plate.x + 84, plate.centery()], DARK_RED);
}

function drawNextFriendProgress(bar) {
    if (petLimitReached() && countKeys(unlocked_pets) < PETS.length) {
        bar = bar || new Rect(14, 96, 170, 36);
        drawPixelPanel(bar, LEAF, INK, 3);
        drawFittedText(tr("friend_run_done"), bar.center(), bar.w - 8, CREAM);
        return;
    }
    var left = getPillarsLeft();
    if (left === null) return;
    var needed = getPillarsNeeded();
    bar = bar || new Rect(14, 96, 170, 36);
    drawPixelPanel(bar, CREAM, INK, 3);
    var filled = bar.inflate(-8, -8);
    filled.w = Math.round(filled.w * (needed - left) / needed);
    fillRect(SUN, filled.x, filled.y, filled.w, filled.h);
    drawFittedText(left ? tr("friend_left", {n: left}) : tr("friend_here"), bar.center(), bar.w - 8);
}

var headTops = new Map();
function getHeadTop(picture) {
    // The first row with fur in the middle of the picture: the top of the head,
    // even when ears stick up higher at the sides. Worked out once per picture.
    if (headTops.has(picture)) return headTops.get(picture);
    var row = 0;
    try {
        var copy = makeCanvas(W(picture), H(picture)), pen = copy.getContext("2d");
        pen.drawImage(picture, 0, 0, W(picture), H(picture));  // At its size on screen.
        var middle = Math.floor(W(picture) / 2);
        var data = pen.getImageData(middle - 3, 0, 7, H(picture)).data;
        search: for (var y = 0; y < H(picture); y++) {
            for (var x = 0; x < 7; x++) {
                if (data[(y * 7 + x) * 4 + 3] > 128) { row = y; break search; }
            }
        }
    } catch (error) {}  // If the picture cannot be read, the crown simply sits at the top.
    headTops.set(picture, row);
    return row;
}

function drawCrown(centerX, top, cell) {
    cell = cell || 3;
    var pixels = S.CROWN_PIXELS;
    var left = centerX - Math.floor(pixels[0].length * cell / 2);
    // The dark layer is drawn one cell bigger all round, which makes the outline.
    [[INK, cell], [[255, 200, 62], 0]].forEach(function (layer) {
        screen.fillStyle = css(layer[0], 255);
        pixels.forEach(function (line, row) {
            for (var column = 0; column < line.length; column++) {
                if (line[column] === "#") {
                    screen.fillRect(left + column * cell - layer[1], top + row * cell - layer[1],
                                    cell + layer[1] * 2, cell + layer[1] * 2);
                }
            }
        });
    });
}

function blitCentered(picture, centerX, centerY) {
    drawPicture(picture, centerX - Math.floor(W(picture) / 2), centerY - Math.floor(H(picture) / 2));
}

function drawPetCard(card, pet, number, selected) {
    drawPixelPanel(card, selected ? SUN : CREAM);
    blitCentered(characterPortraits[pet], card.x + 44, card.y + 74);
    if (owned_pets[pet]) drawCrown(card.right() - 24, card.y + 6);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, selected ? LEAF : SAND, INK, 0);
    drawText(String(number), 2, badge.center(), selected ? CREAM : INK);
    var textX = card.x + 133;
    drawFittedText(getPetName(pet), [textX, card.y + 32], 112);
    getPetIntro(pet).forEach(function (line, lineNumber) {
        drawFittedText(line, [textX, card.y + 68 + lineNumber * 26], 108, selected ? INK : FOREST);
    });
}

function drawLockedCard(card, pet, number) {
    drawPixelPanel(card, SAND);
    blitCentered(getSilhouette(pet), card.x + 44, card.y + 74);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, CREAM, INK, 0);
    drawText(String(number), 2, badge.center());
    drawText("？？？", 2, [card.x + 135, card.y + 50]);
    drawFittedText(tr("locked_1"), [card.x + 135, card.y + 80], 100, DARK_RED);
    drawFittedText(tr("locked_2"), [card.x + 135, card.y + 104], 100, DARK_RED);
}

function drawAlbumCard(card) {
    drawPixelPanel(card, LEAF);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, SAND, INK, 0);
    drawText("8", 2, badge.center());
    drawFittedText(tr("album"), [card.centerx() + 16, card.y + 26], 130, CREAM);
    drawText(countKeys(unlocked_pets) + " / " + PETS.length, 3, [card.centerx(), card.y + 62], SUN, INK);
    if (countKeys(unlocked_pets) >= PETS.length) {
        drawText(tr("album_done"), 2, [card.centerx(), card.y + 104], SUN, INK);
    } else {
        drawNextFriendProgress(new Rect(card.x + 9, card.y + 86, card.w - 18, 34));
    }
}

function drawAlbum() {
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawText(tr("album"), 3, ribbon.center(), CREAM);
    drawFittedText(tr("album_hint", {n: countKeys(unlocked_pets), total: PETS.length}), [400, 104], 760, CREAM, 2, INK);
    getAlbumPagePets().forEach(function (pet, position) {
        if (unlocked_pets[pet]) drawPetCard(character_cards[position], pet, position + 1, pet === selected_character);
        else drawLockedCard(character_cards[position], pet, position + 1);
    });
    var pages = Math.floor((PETS.length - 1) / album_page_size) + 1;
    [[album_previous_button, tr("previous")], [album_next_button, tr("next")]].forEach(function (item) {
        drawPixelPanel(item[0], CREAM, INK, 4);
        drawText(item[1], 2, item[0].center());
    });
    drawText(tr("page", {n: album_page + 1, total: pages}), 2, [400, 418], CREAM, INK);
    drawPixelPanel(start_button, LEAF);
    drawFittedText(tr("album_back"), start_button.center(), start_button.w - 16, CREAM, 3);
}

var mouseX = -1, mouseY = -1;

function drawCharacterSelection() {
    var now = ticks();
    // A sine wave swings smoothly between -1 and 1, which makes things bob.
    var bob = Math.round(Math.sin(now / 300) * 4);
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawFittedText(tr("choose_title"), ribbon.center(), ribbon.w - 16, CREAM, 3);
    drawText(tr("choose_hint"), 2, [400, 104], CREAM, INK);
    framePlane = makePlaneSprite(true, framePlane);
    blitCentered(framePlane, 150, 78 + bob);

    var slotPets = getSlotPets();
    slotPets.forEach(function (pet, position) {
        var rect = character_cards[position], number = position + 1;
        if (!unlocked_pets[pet]) {
            drawLockedCard(rect, pet, number);
            return;
        }
        var selected = pet === selected_character;
        var hovered = rect.contains(mouseX, mouseY);
        // Only the picture lifts; the clickable rectangle stays where it was.
        drawPetCard(rect.move(0, selected ? bob - 6 : hovered ? -4 : 0), pet, number, selected);
    });
    drawAlbumCard(album_card.move(0, album_card.contains(mouseX, mouseY) ? -4 : 0));

    var name = getPetName(selected_character);
    // Little animals perch on the cards, which rest on their top edge.
    [["fox", 0, 32], ["hedgehog", 1, 24], ["frog", 2, 168], ["rabbit", 3, 126]].forEach(function (item) {
        var sprite = getSprite(item[0], getBlinkFrame(item[1]));
        var perch = character_cards[item[1]];
        var lift = slotPets[item[1]] === selected_character ? bob - 6 : 0;
        screen.drawImage(sprite, perch.x + item[2] - Math.floor(sprite.width / 2), perch.y + lift + 3 - sprite.height);
    });
    drawParkButton();
    drawLanguageButton();
    // The squirrel sits on the park button's roof; the duckling waddles in the corner.
    var squirrel = getSprite("squirrel", getBlinkFrame(56));
    screen.drawImage(squirrel, park_button.right() - 14 - Math.floor(squirrel.width / 2), park_button.y + 3 - squirrel.height);
    if (QUIZ_ENABLED) drawQuizButton();
    else drawCatchButton();
    // The duckling sits on the footprint button, as if it left the print.
    var duckling = getSprite("duckling", getBlinkFrame(744));
    screen.drawImage(duckling, quiz_button.x + 22 - Math.floor(duckling.width / 2), quiz_button.y + 3 - duckling.height);

    var line = tr("pet_line", {name: name, intro: getIntroText(selected_character), best: best_score, coins: coins});
    drawFittedText(line, [400, 402], 780, SUN, 2, INK);
    if (selected_character === welcome_pet) {
        drawFittedText(tr("welcome", {name: name}), [400, 430], 780, SUN, 2, INK);
    } else if (owned_pets[selected_character]) {
        drawFittedText(tr("thanks_owner", {name: name}), [400, 430], 780, SUN, 2, INK);
    } else {
        drawFittedText(tr("how_to"), [400, 430], 780, CREAM, 2, INK);
    }

    var pressed = Math.floor(now / 500) % 2;  // Alternate every half second to invite a press.
    drawPixelPanel(start_button.move(0, 2 * pressed), LEAF, INK, 6 - 2 * pressed);
    drawFittedText(tr("start"), start_button.move(0, 2 * pressed).center(), start_button.w - 16, CREAM, 3);
    if (UPLOAD_FORM_URL) {
        var hovered = upload_button.contains(mouseX, mouseY);
        var upload = upload_button.move(0, hovered ? -2 : 0);
        drawPixelPanel(upload, hovered ? SUN : CREAM, INK, 4);
        drawFittedText(tr("upload"), upload.center(), upload.w - 12);
    }
    // A solid plate keeps the instructions readable while animals wander behind it.
    drawPixelPanel(new Rect(108, 510, 584, 66), CREAM, INK, 4);
    drawFittedText(tr(isTouchScreen ? "keys_touch" : "keys"), [400, 528], 570);
    drawFittedText(tr(score_storage_available ? "quit_web" : "no_save_web"), [400, 556], 570, FOREST);
}

var new_dogs_card = new Rect(210, 210, 380, 150);

function drawSunRays(area) {
    // Slowly turning rays, kept inside the area so they never run under other text.
    var turn = ticks() / 1600;
    var center = area.center();
    screen.save();
    screen.beginPath();
    screen.rect(area.x, area.y, area.w, area.h);
    screen.clip();
    screen.fillStyle = "rgb(255,206,90)";
    for (var number = 0; number < 12; number++) {
        var start = turn + Math.PI * 2 * number / 12, end = start + Math.PI * 2 / 24;
        screen.beginPath();
        screen.moveTo(center[0], center[1]);
        screen.lineTo(center[0] + Math.cos(start) * 400, center[1] + Math.sin(start) * 400);
        screen.lineTo(center[0] + Math.cos(end) * 400, center[1] + Math.sin(end) * 400);
        screen.closePath();
        screen.fill();
    }
    screen.restore();
}

function drawOnlyNewDog(area, pet) {
    var portrait = getFittedPortrait(pet, 92, 110);
    var hop = Math.abs(Math.round(Math.sin(ticks() / 180) * 6));
    blitCentered(portrait, area.x + 76, area.centery() - hop);
    drawFittedText(getPetName(pet), [area.x + 242, area.y + 30], 200, INK, 3);
}

function drawOneOfManyNewDogs(cell, pet, large) {
    if (pet === selected_character) {
        var light = cell.inflate(-4, -2);
        fillRect(CREAM, light.x, light.y, light.w, light.h);
    }
    // Large cells have room for the introduction; small ones show only the name.
    var portrait = getFittedPortrait(pet, large ? 56 : cell.h - 18, cell.w - 8);
    drawPicture(portrait, cell.centerx() - Math.floor(W(portrait) / 2), cell.y + 2);
    if (large) {
        drawFittedText(getPetName(pet), [cell.centerx(), cell.y + 70], cell.w - 4);
    } else {
        drawText(getPetName(pet), 1, [cell.centerx(), cell.bottom() - 8]);
    }
}

function drawNewDogs() {
    var found = newly_found_dogs, card = new_dogs_card;
    drawPixelPanel(card, SUN, INK, 4);
    drawText(found.length === 1 ? tr("new_one") : tr("new_many", {n: found.length}), 2,
             [card.centerx(), card.y + 22], DARK_RED);
    var area = new Rect(card.x + 8, card.y + 38, card.w - 16, card.h - 46);
    if (found.length === 1) {
        drawOnlyNewDog(area, found[0]);
    } else {
        // A longer list simply makes more, smaller cells, so every dog always fits.
        var rows = found.length <= 3 ? 1 : 2;
        var columns = Math.ceil(found.length / rows);
        var cellWidth = Math.floor(area.w / columns), cellHeight = Math.floor(area.h / rows);
        found.forEach(function (pet, position) {
            var row = Math.floor(position / columns), column = position % columns;
            drawOneOfManyNewDogs(new Rect(area.x + column * cellWidth, area.y + row * cellHeight, cellWidth, cellHeight),
                                 pet, rows === 1);
        });
    }
    if (found.indexOf(selected_character) >= 0) {
        var name = getPetName(selected_character);
        drawFittedText(tr(found.length === 1 ? "swapped_one" : "swapped_many", {name: name}), [400, 384], 440, FOREST);
    } else {
        drawText(tr(found.length === 1 ? "press_c_one" : "press_c_many"), 2, [400, 384], DARK_RED);
    }
    drawText(tr(isTouchScreen ? "again_touch" : "again"), 2, [400, 412]);
    drawText(tr("r_back"), 2, [400, 438], FOREST);
}

function drawOverlay(alpha) {
    screen.fillStyle = css(INK, alpha);
    screen.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawLinkPage() {
    var pet = link_page_pet, name = getPetName(pet), owner = link_page_is_owner;
    drawOverlay(150);
    var panel = new Rect(110, 62, 580, 500);
    var ribbon = new Rect(130, 24, 540, 72);
    drawPixelPanel(panel);

    // The pet stands in a little window of sunlight.
    var lightWindow = new Rect(150, 112, 500, 176);
    fillRect([255, 228, 150], lightWindow.x, lightWindow.y, lightWindow.w, lightWindow.h);
    drawSunRays(lightWindow);
    // The owner's pet is a little smaller and lower, to leave room for the crown on its head.
    var portrait = getFittedPortrait(pet, owner ? 136 : 150, 220);
    var hop = Math.abs(Math.round(Math.sin(ticks() / 180) * 8));
    var left = lightWindow.centerx() - Math.floor(W(portrait) / 2);
    var top = lightWindow.centery() + (owner ? 14 : 6) - hop - Math.floor(H(portrait) / 2);
    drawPicture(portrait, left, top);
    if (owner) {
        // The crown sits on top of the head, sinking one block into the fur.
        var crownCell = 6;
        var crownBottom = top + getHeadTop(portrait) + crownCell;
        drawCrown(left + Math.floor(W(portrait) / 2), crownBottom - S.CROWN_PIXELS.length * crownCell, crownCell);
    }

    drawPixelPanel(ribbon, owner ? SUN : LEAF);
    drawFittedText(owner ? tr("link_owner", {name: name}) : tr("link_new"), ribbon.center(), ribbon.w - 16,
                   owner ? INK : CREAM, 3);
    drawText(name, 3, [400, 316]);

    if (owner) {
        drawFittedText(tr("contributor", {n: getContributorNumber(pet)}), [400, 386], 540, DARK_RED);
        drawFittedText(tr("crown", {name: name}), [400, 416], 540);
        if (link_page_bonus.length) {
            var names = link_page_bonus.map(getPetName).join(tr("names_joiner"));
            drawFittedText(tr("bonus", {names: names}), [400, 444], 540);
        }
    } else {
        drawFittedText(tr("joined", {name: name}), [400, 392], 540, DARK_RED);
        if (UPLOAD_FORM_URL) {
            drawText(tr("want_aboard"), 2, [400, 424]);
            drawFittedText(tr("upload_hint"), [400, 452], 540, FOREST);
        }
    }

    var pressed = Math.floor(ticks() / 500) % 2;
    var button = link_page_button.move(0, 2 * pressed);
    drawPixelPanel(button, LEAF, INK, 6 - 2 * pressed);
    drawFittedText(tr("accept"), button.center(), button.w - 16, CREAM, 3);
}

// -------------------------
// Pet park: a cozy room where your pets and your own little person hang out.
// -------------------------
var FURNITURE = S.FURNITURE, FURNITURE_BY_ID = {};
FURNITURE.forEach(function (item) { FURNITURE_BY_ID[item.id] = item; });
var park_scale = S.park_scale, park_pet_scale = S.park_pet_scale, park_floor = S.park_floor;
var park_wall_bottom = S.park_wall_bottom, park_most_pets = S.park_most_pets;
var park_walk_speed = S.park_walk_speed, park_seat_chance = S.park_seat_chance;
var park_spin_chance = S.park_spin_chance, park_play_chance = S.park_play_chance;
var park_play_gap = S.park_play_gap;
var park_hop_frames = S.park_hop_frames, park_message_frames = S.park_message_frames;
var park_climb_frames = S.park_climb_frames, park_climb_pause = S.park_climb_pause, park_climb_arc = S.park_climb_arc;
var park_action_frames = S.park_action_frames, park_choices_per_page = S.park_choices_per_page;
var park_tree_pause = S.park_tree_pause, park_tree_jump_frames = S.park_tree_jump_frames;
var park_toy_chance = S.park_toy_chance, park_run_speed = S.park_run_speed, park_ball_roll_frames = S.park_ball_roll_frames;
var park_meal_gap = S.park_meal_gap, park_eat_rhythm = S.park_eat_rhythm;
var park_drag_start = S.park_drag_start, park_fall_speed = S.park_fall_speed, park_drop_reach = S.park_drop_reach;
var park_shop_per_page = S.park_shop_per_page;
var park_cell_width = S.park_cell_width, park_cell_height = S.park_cell_height, park_ground = S.park_ground;
var PARK_PET_INFO = S.PARK_PET_INFO, ANIMAL_POSES = S.ANIMAL_POSES;
var owned_furniture = {};
var stored_furniture = {};  // Still owned, but hidden until retrieved from the shop.
var park_trashcan = new Rect(700, 128, 84, 80);
var furniture_places = {};  // Furniture id -> [x, y], the middle of its bottom edge on screen.
var park_open = false, park_pets = [], park_message = null;  // park_message: [text, frames left]
var park_panel = null;  // What the side panel shows: null, "pet", "shop" or "pets".
var park_selected = null;  // The pet whose card is open in the side panel.
var park_carrying = null;  // Id of the furniture being moved.
var park_grab = [0, 0];  // From the pointer to the furniture's bottom middle, so it does not jump.
var park_holding = false;  // True while the pointer is pressed, so letting go puts the furniture down.
var park_press = null;  // {walker, x, y} right after pressing on a pet, until it is dragged or let go.
var park_held = null;  // The pet hanging from the pointer by the scruff of its neck.
var park_ball_roll = null;  // {from, to, frame} while the ball rolls after a kick.
var park_shop_page = 0;
// The second room: a backyard garden, bought once. Each room has its own furniture and pets.
var GARDEN = S.GARDEN, garden_price = S.garden_price, park_slide_frames = S.park_slide_frames;
var park_swim_frames = S.park_swim_frames, park_block_margin = S.park_block_margin, park_slide_shift = S.park_slide_shift;
var park_seesaw_beat = S.park_seesaw_beat, park_pair_chance = S.park_pair_chance;
var park_room = 0;  // Which room the park shows: 0 the living room, 1 the garden.
var garden_owned = false;
var garden_confirm = 0;  // Frames left to click the arrow again and buy the garden.
var garden_shown = [], garden_shown_chosen = false;  // Like park_shown, for the garden.
var furniture_frames = {};  // Each moving piece's last picture, to play a sound when it changes.
var park_room_left = new Rect(8, 252, 56, 76), park_room_right = new Rect(736, 252, 56, 76);
var gardenPicture = null;
var park_shown = [], park_shown_chosen = false;  // The pets the player chose for the room.
var park_choice_page = 0;
var HOODIE_ENABLED = S.HOODIE_ENABLED;  // The free hoodie try-on is switched off for now; its code is kept for later.
var hoodie_pets = {};  // Ids of the pets trying on the free yellow hoodie.
var hoodieSheets = {};  // Pet number -> its sheet with the hoodie drawn on (null while it downloads).
var park_button = new Rect(10, 496, 94, 96);
var park_back_button = new Rect(14, 14, 150, 48);
var park_shop_button = new Rect(14, 70, 150, 48);
var park_pets_button = new Rect(14, 126, 150, 48);
var park_side = new Rect(552, 116, 236, 470);
var park_close_button = new Rect(park_side.right() - 48, park_side.y + 10, 36, 36);
var like_button = new Rect(park_side.x + 16, park_side.bottom() - 66, park_side.w - 32, 50);
var like_photo_shrink = S.like_photo_shrink;  // The most the card's photo gets smaller for long lines.
// The hoodie is switched off; if it comes back, its button sits above the likes and the card needs a new layout.
var hoodie_button = new Rect(park_side.x + 16, park_side.bottom() - 126, park_side.w - 32, 50);
var park_choice_previous = new Rect(park_side.x + 14, park_side.bottom() - 52, 60, 40);
var park_choice_next = new Rect(park_side.right() - 74, park_side.bottom() - 52, 60, 40);
var parkRoom = null, lampGlow = null, parkSheets = [];  // A sheet holds every pose of one pet.

function getParkKind(pet) { return PARK_PET_INFO[pet].kind; }
function getBreedName(pet) { return language === "zh" ? PARK_PET_INFO[pet].breed : PARK_PET_INFO[pet].breed_en; }
function getItemName(item) { return language === "zh" ? item.name : item.name_en; }

function getPetSheet(pet) {
    if (HOODIE_ENABLED && hoodie_pets[PETS[pet].id] && getParkKind(pet) !== "human") {
        if (hoodieSheets[pet] === undefined) {
            // Only downloaded the first time this pet tries the hoodie on; until then it wears its fur.
            hoodieSheets[pet] = null;
            loadImage(PETS[pet].image + ".hoodie.png").then(function (image) {
                hoodieSheets[pet] = image;
                scruffCache = {};
            }).catch(function () { delete hoodieSheets[pet]; });
        }
        if (hoodieSheets[pet]) return hoodieSheets[pet];
    }
    return parkSheets[pet];
}

// -------------------------
// Likes: how many players think each pet is cute
// -------------------------
// Random starting counts (30 to 50) from the Python game; real likes from all players are added on top.
var PET_LIKE_BASE = S.PET_LIKE_BASE, like_refresh_ms = S.like_refresh_ms;
var pet_like_counts = {};  // Pet id -> real likes from all players, as the server last said.
var liked_pets = {};  // Pet ids this player has liked: each pet can be liked once.
var likes_unsent = {};  // Likes the server has not counted yet; they still show as +1 here.
var likes_busy = false, likes_last_fetch = null;

function getLikeStart(id) {
    if (Object.prototype.hasOwnProperty.call(PET_LIKE_BASE, id)) return PET_LIKE_BASE[id];
    var total = 0;  // A pet added later gets its own steady number between 30 and 50.
    for (var i = 0; i < id.length; i++) total += id.charCodeAt(i);
    return 30 + total % 21;
}

function getLikeCount(pet) {
    var id = PETS[pet].id;
    return getLikeStart(id) + (pet_like_counts[id] || 0) + (likes_unsent[id] ? 1 : 0);
}

function syncLikes() {
    // Sends any new likes, then reads every pet's total. The developer link only reads.
    var waiting = dev_mode ? [] : Object.keys(likes_unsent), sent = [];
    var sends = waiting.map(function (id) {
        return fetch(LEADERBOARD_URL + "/rest/v1/pet_likes", {
            method: "POST",
            headers: {apikey: LEADERBOARD_KEY, "Content-Type": "application/json", Prefer: "return=minimal"},
            body: JSON.stringify({pet_id: id, player_id: getBoardPlayerId()})
        }).then(function (answer) {
            if (answer.ok || answer.status === 409) sent.push(id);  // 409: the server already has it.
        })["catch"](function () {});  // No internet: it is sent next time.
    });
    return Promise.all(sends).then(function () {
        return askBoard("GET", "pet_like_counts?select=pet_id,likes");
    }).then(function (rows) {
        var counts = {};
        rows.forEach(function (row) { counts[row.pet_id] = row.likes; });
        pet_like_counts = counts;
        sent.forEach(function (id) { delete likes_unsent[id]; });  // Now inside the totals.
        if (sent.length) saveProgress();
    })["catch"](function () {}).then(function () { likes_busy = false; });
}

function refreshLikes(now) {
    var time = Date.now();
    if (likes_busy) return;
    if (!now && likes_last_fetch !== null && time - likes_last_fetch < like_refresh_ms) return;
    likes_busy = true;
    likes_last_fetch = time;
    syncLikes();
}

function likePet(pet) {
    var id = PETS[pet].id;
    if (liked_pets[id]) return;  // One like per pet.
    liked_pets[id] = true;
    likes_unsent[id] = true;  // Shows at once, even before the server hears about it.
    track("pet_like", {pet: id});
    saveProgress();
    refreshLikes(true);
}

var greyHeart = null;
function getGreyHeart() {
    // The same heart in shades of grey, made once.
    if (greyHeart) return greyHeart;
    var heart = getSprite("heart", 0, 3);
    greyHeart = makeCanvas(heart.width, heart.height);
    var pen = greyHeart.getContext("2d");
    pen.drawImage(heart, 0, 0);
    var picture = pen.getImageData(0, 0, heart.width, heart.height), data = picture.data;
    for (var i = 0; i < data.length; i += 4) {
        var grey = Math.round(data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11);
        data[i] = data[i + 1] = data[i + 2] = grey;
    }
    pen.putImageData(picture, 0, 0);
    return greyHeart;
}

function drawLikeButton(pet) {
    var liked = !!liked_pets[PETS[pet].id];
    var hovered = like_button.contains(mouseX, mouseY) && !liked;
    drawPixelPanel(like_button, hovered ? SUN : (liked ? CREAM : [255, 205, 210]), INK, 3);
    // A grey heart turns red once liked.
    blitCentered(liked ? getSprite("heart", 0, 3) : getGreyHeart(), like_button.centerx() - 44, like_button.centery());
    drawFittedText(tr(liked ? "liked" : "like"), [like_button.centerx() + 16, like_button.centery()], 110,
                   liked ? DARK_RED : INK);
    tr("like_count", {count: getLikeCount(pet)}).split("\n").forEach(function (line, row) {
        drawFittedText(line, [park_side.centerx(), like_button.y - 46 + row * 25], park_side.w - 20, FOREST);
    });
}

function toggleHoodie(pet) {
    var id = PETS[pet].id;
    if (hoodie_pets[id]) delete hoodie_pets[id];
    else hoodie_pets[id] = true;
    scruffCache = {};  // Remembered from the old sheet.
    saveProgress();
}

function getWalkerBox(pet) { return PARK_PET_INFO[pet].box; }

function getFurniturePlace(item) {
    return furniture_places[item.id] || item.place;
}

function getFurnitureRect(item) {
    var rows = SPRITES[item.id][0];
    var width = rows[0].length * park_scale, height = rows.length * park_scale;
    var place = getFurniturePlace(item);
    return new Rect(place[0] - Math.floor(width / 2), place[1] - height, width, height);
}

function getRoomFurniture(room) {
    // The shop sells, and the room shows, only the furniture of the room on screen.
    if (room === undefined) room = park_room;
    return FURNITURE.filter(function (item) { return (item.room || 0) === room; });
}

function isPlaced(item) {
    // Bought, not in storage, and in the room on screen.
    return !!owned_furniture[item.id] && !stored_furniture[item.id] && (item.room || 0) === park_room;
}

function getPlacedFurniture() {
    // Owned furniture from the back of the room to the front; flat rugs lie under everything.
    var placed = FURNITURE.filter(isPlaced);
    function depth(item) { return item.flat ? -1 : getFurniturePlace(item)[1]; }
    return placed.sort(function (a, b) { return depth(a) - depth(b); });
}

function canUse(item, kind) {
    // Some furniture is only for cats (the cat tree) or only for dogs (the dog bed).
    return !(item.cats_only && kind !== "cat") && !(item.dogs_only && kind !== "dog");
}

function getParkSeats() {
    // Every spot on placed furniture where a pet could sit, as screen positions.
    var seats = [];
    FURNITURE.forEach(function (item) {
        if (!isPlaced(item) || item.id === park_carrying) return;
        var rect = getFurnitureRect(item);
        var shifts = item.seat_shift ? item.seat_shift[getFurnitureFrame(item)] : null;
        item.seats.forEach(function (seat, number) {
            var x = seat[0] + (shifts ? shifts[number][0] : 0), y = seat[1] + (shifts ? shifts[number][1] : 0);
            seats.push({id: item.id + ":" + number, item: item.id, x: rect.x + x * park_scale,
                        y: rect.y + y * park_scale, bottom: rect.bottom()});
        });
    });
    return seats;
}

function getBlockers() {
    // Ground that pets walk round instead of through: a pool, or the base of a dog house.
    var blockers = [];
    getPlacedFurniture().forEach(function (item) {
        if (!item.solid || item.id === park_carrying) return;
        var rect = getFurnitureRect(item);
        if (item.flat) rect.h += 16;  // Not right in front of it either, where it would look like standing in it.
        else rect = new Rect(rect.x, rect.bottom() - 48, rect.w, 48);
        blockers.push(rect.inflate(park_block_margin, 4));
    });
    return blockers;
}

function pickFloorSpot() {
    var spot, blockers = getBlockers();
    for (var tries = 0; tries < 20; tries++) {
        spot = [randint(park_floor[0], park_floor[1]), randint(park_floor[2], park_floor[3])];
        if (!blockers.some(function (box) { return box.contains(spot[0], spot[1]); })) break;
    }
    return spot;
}

function crosses(box, start, end) {
    // Whether the straight way from start to end goes through the box: looks every 4 pixels.
    var steps = Math.max(1, Math.floor(Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)) / 4));
    for (var step = 0; step <= steps; step++) {
        if (box.contains(start[0] + (end[0] - start[0]) * step / steps, start[1] + (end[1] - start[1]) * step / steps)) return true;
    }
    return false;
}

function getDetour(start, target) {
    // The next corner to head for when a pool or a dog house is in the way, or null.
    // Pets go round behind it if there is room there, otherwise round the front.
    var blockers = getBlockers();
    for (var index = 0; index < blockers.length; index++) {
        var box = blockers[index], corner;
        if (box.contains(start[0], start[1]) || box.contains(target[0], target[1]) || !crosses(box, start, target)) continue;
        var x = start[0], y = start[1];
        var far = target[0] < box.centerx() ? box.x - 1 : box.right() + 1;
        if (box.x <= x && x < box.right()) {
            corner = [far, y];  // Behind or in front of it: along the edge to the corner nearer the target.
        } else {
            var side = x < box.x ? box.x - 1 : box.right() + 1;
            if (target[1] < box.y) corner = [side, box.y - 1];  // Up the side, then straight there.
            else if (target[1] >= box.bottom()) corner = [side, box.bottom() + 1];
            else if (box.y <= y && y < box.bottom()) {
                corner = [side, box.y - 1 >= park_floor[2] ? box.y - 1 : box.bottom() + 1];  // Round behind it (or in front).
            } else corner = [far, y];  // Already at a corner: across to the other side.
        }
        if (corner[0] !== x || corner[1] !== y) return corner;
    }
    return null;
}

function startAction(walker, action, frames) {
    frames = frames || park_action_frames[action];
    walker.action = action;
    walker.timer = randint(frames[0], frames[1]);
}

function startSeatAction(walker) {
    // Each piece of furniture has its own things to do: rest in the dog bed or crib,
    // play on the cat tree. Some of them last longer there than on the floor.
    var item = getSeatItem(walker);
    var action = choice(item.seat_actions || ["sit", "sit", "lie"]);
    startAction(walker, action, (item.stay || {})[action]);
    if (item.faces) walker.left = item.faces[getSeatNumber(walker)];  // Back to back in the hammock, head out of the dog house.
    if (item.splash) playSound("splash");
}

function walkTo(walker, target, plan, seat) {
    walker.action = "walk";
    walker.target = target;
    walker.plan = plan || null;
    walker.seat = seat || null;
    walker.route = [];
    walker.toy = null;
    walker.run = false;
}

function getFurnitureSpot(item, point) {
    // A point in the furniture picture's own pixels, as a position on screen.
    var rect = getFurnitureRect(item);
    return [rect.x + point[0] * park_scale, rect.y + point[1] * park_scale];
}

function getSeatItem(walker) { return FURNITURE_BY_ID[walker.seat.split(":")[0]]; }
function getSeatNumber(walker) { return Number(walker.seat.split(":")[1]); }

function getClimbSpot(walker, step) {
    // Step 0 is the base of the cat tree and step 1, 2, 3 the levels above it.
    // "floor" is the spot on the floor where the cat lands when it gets down.
    if (step === "floor") return walker.floor;
    var item = getSeatItem(walker);
    return getFurnitureSpot(item, step === 0 ? item.climb : item.seats[step - 1]);
}

function getTreeFoot(item, seat) {
    // The floor just in front of the furniture, where a jump up starts and ends:
    // the base of a cat tree, or right below the seat on a crib or sofa.
    var x = getFurnitureSpot(item, item.climb ? item.climb : item.seats[seat || 0])[0];
    var rect = getFurnitureRect(item);
    var y = item.back_foot ? rect.y - 4 : rect.bottom() + 6;  // Into the pool from behind it.
    return [Math.min(Math.max(x, park_floor[0]), park_floor[1]), Math.min(Math.max(y, park_floor[2]), park_floor[3])];
}

function getSeatFoot(walker) { return getTreeFoot(getSeatItem(walker), getSeatNumber(walker)); }

function getJumpFrames(walker) {
    // Jumps on the cat tree are slower, so the cat looks calm instead of in a hurry.
    return getSeatItem(walker).climb ? park_tree_jump_frames : park_climb_frames;
}

function startClimbJump(walker, here) {
    // Crouch on this step, then jump to the next step on the route. On the cat tree the cat
    // first sits a while on each level and looks around.
    var item = getSeatItem(walker);
    var onTree = item.climb && !item.quick && here !== "floor";
    walker.action = "climb";
    walker.here = here;
    walker.timer = (onTree ? randint(park_tree_pause[0], park_tree_pause[1]) : park_climb_pause) + getJumpFrames(walker);
}

function moveLevel(walker, level) {
    // From one level of the cat tree to another, through every level in between.
    var here = getSeatNumber(walker) + 1, there = level + 1, step = there > here ? 1 : -1;
    walker.route = [];
    for (var at = here + step; at !== there + step; at += step) walker.route.push(at);
    walker.seat = getSeatItem(walker).id + ":" + level;
    startClimbJump(walker, here);
}

function climbDown(walker) {
    // Back down the way it came, one level at a time, then a last jump to the floor.
    // From a crib or sofa it is a single jump down.
    var here = getSeatNumber(walker) + 1;
    walker.floor = getSeatFoot(walker);
    walker.route = [];
    if (getSeatItem(walker).climb) for (var step = here - 1; step >= 0; step--) walker.route.push(step);
    walker.route.push("floor");
    startClimbJump(walker, here);
}

function updateClimb(walker) {
    var start = getClimbSpot(walker, walker.here), end = getClimbSpot(walker, walker.route[0]);
    walker.left = end[0] < start[0];
    walker.timer -= 1;
    var frames = getJumpFrames(walker);
    var inAir = frames - walker.timer;  // Below zero while still crouching.
    if (inAir <= 0) {
        walker.x = start[0];
        walker.y = start[1];
        return;
    }
    // Along a straight line from step to step, plus an arc, so it is a real jump.
    var part = inAir / frames;
    walker.x = start[0] + (end[0] - start[0]) * part;
    walker.y = start[1] + (end[1] - start[1]) * part - Math.sin(Math.PI * part) * park_climb_arc;
    if (walker.timer > 0) return;
    var here = walker.route.shift();
    walker.x = end[0];
    walker.y = end[1];
    if (walker.route.length) {
        startClimbJump(walker, here);
    } else if (here === "floor") {
        var item = getSeatItem(walker);
        walker.seat = null;
        walker.just_left = item.id;  // Next time it picks something else.
        if (item.splash) {
            walker.wet = true;  // Out of the pool: a good shake first, water flying off.
            startAction(walker, "landed", S.park_shake_frames);
        } else rest(walker);
    } else {
        walker.target = end;
        startSeatAction(walker);
    }
}

function getParkChoices() {
    // Every unlocked animal can live in the room. The human pet card is left out,
    // because the player's own little person lives there instead.
    return getPetOrder().filter(function (pet) { return unlocked_pets[pet] && getParkKind(pet) !== "human"; });
}

function getShownPets(room) {
    // Each room has its own pets, at most park_most_pets, and a pet lives in one room at a time.
    // Until the player picks, the first pets live inside and the next ones in the garden.
    if (room === undefined) room = park_room;
    var choices = getParkChoices();
    if (room === 0) {
        var inside = park_shown.filter(function (pet) { return choices.indexOf(pet) >= 0; }).slice(0, park_most_pets);
        return inside.length || park_shown_chosen ? inside : choices.slice(0, park_most_pets);
    }
    var living = getShownPets(0);
    var left = choices.filter(function (pet) { return living.indexOf(pet) < 0; });
    var shown = garden_shown.filter(function (pet) { return left.indexOf(pet) >= 0; }).slice(0, park_most_pets);
    return shown.length || garden_shown_chosen ? shown : left.slice(0, park_most_pets);
}

function makeWalker(pet) {
    var spot = pickFloorSpot();
    var walker = {pet: pet, x: spot[0], y: spot[1], left: Math.random() < 0.5, target: spot,
                  plan: null, seat: null, partner: null, hop: 0, route: [], here: null, floor: null,
                  toy: null, run: false, kicks: 0, fall: 0, sway: 0, sway_speed: 0, hold_at: spot.slice(), held_frames: 0, laps: 0, game: "play", circle: [spot, 0], full: 0};
    startAction(walker, "sit");
    walker.timer = randint(30, 200);  // Everyone gets going soon after the door opens.
    return walker;
}

function makeParkPets() {
    park_pets = getShownPets().map(makeWalker);
    park_pets.forEach(function (walker) { walker.full = randint(0, park_meal_gap[0]); });  // Not everyone is hungry at once.
}

function rest(walker) {
    var kind = getParkKind(walker.pet);
    var action = Math.random() < S.park_nap_chance[kind] ? "lie" : "sit";
    startAction(walker, action, (kind === "dog" ? S.park_dog_rest : S.park_cat_rest)[action]);
}

function letGo(walker) {
    // Ends a game or a pat for both friends, so neither waits for the other forever.
    var partner = walker.partner;
    walker.partner = null;
    if (!partner || partner.partner !== walker) return;
    partner.partner = null;
    if (partner.action === "walk") {
        partner.plan = null;
    } else if (["ready", "play", "sniff", "circle"].indexOf(partner.action) >= 0) {
        rest(partner);
        partner.timer = 60;
    }
}

function isFreeDog(walker) {
    // A dog resting on the floor, not busy with a friend, can be asked to play.
    return getParkKind(walker.pet) === "dog" && !walker.partner && !walker.seat &&
           ["sit", "lie"].indexOf(walker.action) >= 0;
}

function startPlay(walker, other, game) {
    game = game || "play";
    var gap = game === "sniff" ? S.park_sniff_gap : game === "circle" ? S.park_circle_size[0] : park_play_gap;
    var depth = game === "circle" ? S.park_circle_size[1] : 0;
    var middle, blockers = getBlockers();
    for (var tries = 0; tries < 20; tries++) {  // Somewhere the game does not run through the pool.
        middle = [randint(park_floor[0] + gap, park_floor[1] - gap), randint(park_floor[2] + depth, park_floor[3] - depth)];
        var area = new Rect(middle[0] - gap, middle[1] - depth, gap * 2 + 1, depth * 2 + 1);
        if (!blockers.some(function (box) { return area.collides(box); })) break;
    }
    walkTo(walker, [middle[0] - gap, middle[1]], "ready");
    walkTo(other, [middle[0] + gap, middle[1]], "ready");
    walker.game = other.game = game;
    walker.partner = other;
    other.partner = walker;
}

function pickFarSpot(walker) {
    var farthest = pickFloorSpot(), distance = -1;
    for (var i = 0; i < 6; i++) {
        var spot = pickFloorSpot(), d = Math.pow(spot[0] - walker.x, 2) + Math.pow(spot[1] - walker.y, 2);
        if (d > distance) { farthest = spot; distance = d; }
    }
    return farthest;
}

function startChase(walker, other) {
    walkTo(walker, pickFarSpot(walker), "flee");
    walkTo(other, [walker.x, walker.y], "chase");
    walker.run = other.run = true;
    walker.laps = randint(2, 4);
    walker.partner = other;
    other.partner = walker;
}

function endChase(walker) {
    var partner = walker.partner;
    letGo(walker);
    [walker, partner].forEach(function (dog) {
        if (dog) { startAction(dog, "proud"); dog.hop = park_hop_frames; }
    });
}

function runInCircle(walker) {
    var middle = walker.circle[0];
    var angle = walker.circle[1] + (walker.circle_duration - walker.timer) * S.park_circle_speed;
    walker.x = middle[0] + Math.cos(angle) * S.park_circle_size[0];
    walker.y = middle[1] + Math.sin(angle) * S.park_circle_size[1];
    walker.left = -Math.sin(angle) < 0;
}

function startTogether(walker, partner) {
    var game = walker.game || "play";
    startAction(walker, game); startAction(partner, game); partner.timer = walker.timer;
    if (game === "circle") {
        var middle = [(walker.x + partner.x) / 2, (walker.y + partner.y) / 2];
        var first = walker.x > partner.x ? 0 : Math.PI;
        walker.circle = [middle, first]; partner.circle = [middle, first + Math.PI];
        walker.circle_duration = partner.circle_duration = walker.timer;
    }
    walker.left = partner.x < walker.x;
    partner.left = walker.x < partner.x;
}

function chooseNext(walker) {
    letGo(walker);
    walker.toy = null;
    if (!walker.seat && walker.y > park_floor[3]) {
        // Done at a bowl by the front edge: step back onto the floor first.
        walkTo(walker, [walker.x, park_floor[3]]);
        return;
    }
    if (walker.seat) {
        var item = getSeatItem(walker);
        if (Math.random() < (item.stay_chance || 0)) {
            // Happy where it is: another nap or game here, or up or down to another free level.
            var taken = {}, levels = [];
            park_pets.forEach(function (other) { if (other !== walker && other.seat) taken[other.seat] = true; });
            if (item.climb) {
                item.seats.forEach(function (seat, level) {
                    if (level !== getSeatNumber(walker) && !taken[item.id + ":" + level]) levels.push(level);
                });
            }
            if (levels.length && Math.random() < 0.35) moveLevel(walker, choice(levels));
            else startSeatAction(walker);
        } else if (item.slide_end) {
            startSlide(walker);  // The way down from the slide is the chute.
        } else {
            climbDown(walker);  // Gets down from the furniture before anything else.
        }
        return;
    }
    var kind = getParkKind(walker.pet);
    var dogs = park_pets.filter(function (other) { return other !== walker && isFreeDog(other); });
    var chance = Math.random();
    if (kind === "dog" && dogs.length && chance < park_play_chance) {
        var game = choice(["play", "circle", "circle", "chase", "sniff"]), other = choice(dogs);
        if (game === "chase") startChase(walker, other); else startPlay(walker, other, game);
    }
    else wander(walker);
}

function getFreeToys(walker) {
    // Bowls and toys this pet may use that nobody else is using right now.
    var kind = getParkKind(walker.pet), busy = {};
    park_pets.forEach(function (other) { if (other !== walker && other.toy) busy[other.toy] = true; });
    return FURNITURE.filter(function (item) {
        // A pet that has just eaten leaves the bowls alone for a while.
        return ((item.bowl && walker.full <= 0) || item.toy) && isPlaced(item) && item.id !== park_carrying &&
               !busy[item.id] && canUse(item, kind);
    });
}

function getToySpot(walker, item, place) {
    // Where a pet stands to use a bowl or toy: beside it, with its mouth or paws over it.
    place = place || getFurniturePlace(item);
    var x = item.spot ? getFurnitureSpot(item, item.spot)[0] : place[0];
    var side = walker.x < x ? -1 : 1;
    var half = Math.floor(getWalkerBox(walker.pet)[2] * park_pet_scale / 2);
    var reach = item.spot ? 20 : half - 16;
    // A pet at a bowl stands just behind it, so the bowl is drawn over its muzzle.
    var y = place[1] + (item.spot ? 2 : -2);
    if (item.bowl) {
        var mouth = S.PET_EATING_MOUTHS[PETS[walker.pet].id] || [40,50];
        reach = Math.abs(mouth[0] - park_cell_width / 2) * park_pet_scale;
        var rim = place[1] - SPRITES[item.id][0].length * park_scale + park_scale;
        y = rim + (S.park_ground + 2 - mouth[1]) * park_pet_scale;
    }
    // A bowl by the front edge still gets the pet's muzzle right in it.
    return [Math.min(Math.max(x + side * reach, park_floor[0]), park_floor[1]),
            Math.min(Math.max(y, park_floor[2]), park_floor[3] + (item.bowl ? 8 : 0))];
}

function goToToy(walker, item) {
    var plan = item.bowl ? "eat" : item.id === "ball" ? "ball" : "bat";
    walkTo(walker, getToySpot(walker, item), plan);
    walker.toy = item.id;
    if (plan === "ball") walker.kicks = randint(2, 4);
}

function faceToy(walker) {
    var item = FURNITURE_BY_ID[walker.toy];
    var x = item.spot ? getFurnitureSpot(item, item.spot)[0] : getFurniturePlace(item)[0];
    walker.left = x < walker.x;
}

function kickBall(walker) {
    // The dog noses the ball away and runs after it, a few times, then is very pleased with itself.
    var item = FURNITURE_BY_ID.ball, place = getFurniturePlace(item);
    var away = place[0] >= walker.x ? 1 : -1;
    var x = place[0] + away * randint(90, 200);
    if (x < park_floor[0] || x > park_floor[1]) x = place[0] - away * randint(90, 200);  // Bounces back off the wall.
    var end = [snap(Math.min(Math.max(x, park_floor[0]), park_floor[1])), snap(randint(park_floor[2], park_floor[3]))];
    park_ball_roll = {from: place.slice(), to: end, frame: 0};
    walker.kicks -= 1;
    if (walker.kicks > 0) {
        walkTo(walker, getToySpot(walker, item, end), "ball");
        walker.toy = "ball";
        walker.run = true;
    } else {
        startAction(walker, "proud");
        walker.hop = park_hop_frames;
    }
}

function getWaitingSeats(walker, free) {
    // Free seats on a seesaw or hammock where a friend already sits and waits.
    var riders = {};
    park_pets.forEach(function (other) {
        if (other !== walker && other.seat && ["walk", "climb"].indexOf(other.action) < 0) riders[getSeatItem(other).id] = true;
    });
    return free.filter(function (seat) { return FURNITURE_BY_ID[seat.item].pair && riders[seat.item]; });
}

function wander(walker) {
    var kind = getParkKind(walker.pet);
    var taken = {};
    park_pets.forEach(function (other) { if (other !== walker && other.seat) taken[other.seat] = true; });
    // The piece it just got down from is left out once, so it does not hop straight back on.
    var justLeft = walker.just_left;
    walker.just_left = null;
    var free = getParkSeats().filter(function (seat) {
        return !taken[seat.id] && seat.item !== justLeft && canUse(FURNITURE_BY_ID[seat.item], kind);
    });
    var waiting = getWaitingSeats(walker, free);
    if (waiting.length && Math.random() < park_pair_chance) {
        var friendSeat = choice(waiting);  // A friend is waiting on the seesaw: go and join it.
        walkTo(walker, getTreeFoot(FURNITURE_BY_ID[friendSeat.item], Number(friendSeat.id.split(":")[1])), "climb", friendSeat.id);
        return;
    }
    var toys = getFreeToys(walker);
    if (toys.length && Math.random() < park_toy_chance) {
        goToToy(walker, choice(toys));  // A snack, a drink or a game.
        return;
    }
    var chance = Math.random();
    if (free.length && chance < park_seat_chance) {
        // Favorite toys ("weight") are picked more often than a plain seat.
        var weighted = [];
        free.forEach(function (one) { for (var i = 0; i < (FURNITURE_BY_ID[one.item].weight || 1); i++) weighted.push(one); });
        var seat = choice(weighted), item = FURNITURE_BY_ID[seat.item];
        // Walks to the furniture first, then jumps up: level by level on a cat tree,
        // in one go onto a crib or sofa or into a box.
        walkTo(walker, getTreeFoot(item, Number(seat.id.split(":")[1])), "climb", seat.id);
    } else if (chance > 1 - park_spin_chance) {
        startAction(walker, "spin");  // Chasing its own tail, round and round on the spot.
    } else if (chance < 0.6) {
        walkTo(walker, pickFloorSpot());
    } else {
        rest(walker);
    }
}

function arrive(walker) {
    var plan = walker.plan;
    walker.plan = null;
    if (plan === "ready") startAction(walker, "ready");
    else if (plan === "seat") startSeatAction(walker);
    else if (plan === "climb") {
        walker.floor = [walker.x, walker.y];
        walker.route = [];
        // The base, then each level up to its own; straight up onto a crib or sofa.
        if (getSeatItem(walker).climb) {
            for (var step = 0; step <= getSeatNumber(walker) + 1; step++) walker.route.push(step);
        } else {
            walker.route.push(getSeatNumber(walker) + 1);
        }
        startClimbJump(walker, "floor");
    } else if ((plan === "eat" || plan === "bat") && walker.toy) {
        faceToy(walker);
        startAction(walker, plan);
        if (plan === "eat") walker.full = randint(park_meal_gap[0], park_meal_gap[1]);
    } else if (plan === "ball" && walker.toy) {
        kickBall(walker);
    }
    else if (plan === "flee" && walker.partner) {
        walker.laps -= 1;
        if (walker.laps > 0) { walkTo(walker, pickFarSpot(walker), "flee"); walker.run = true; }
        else endChase(walker);
    } else rest(walker);
}

function getSeatSpot(seatId) {
    var seats = getParkSeats();
    for (var i = 0; i < seats.length; i++) {
        if (seats[i].id === seatId) return [seats[i].x, seats[i].y];
    }
    return null;
}

function rollBall() {
    // The kicked ball rolls fast, then slows down before it stops.
    if (park_ball_roll === null) return;
    if (!owned_furniture.ball || stored_furniture.ball || park_carrying === "ball") {
        park_ball_roll = null;
        return;
    }
    park_ball_roll.frame += 1;
    var part = park_ball_roll.frame / park_ball_roll_frames, eased = 1 - (1 - part) * (1 - part);
    var from = park_ball_roll.from, to = park_ball_roll.to;
    furniture_places.ball = [snap(from[0] + (to[0] - from[0]) * eased), snap(from[1] + (to[1] - from[1]) * eased)];
    if (park_ball_roll.frame >= park_ball_roll_frames) {
        furniture_places.ball = to.slice();
        park_ball_roll = null;
    }
}

function startSlide(walker) {
    // On its back down the top edge of the chute, then a hop onto the grass at its end.
    var item = getSeatItem(walker), land = getFurnitureSpot(item, item.slide_end);
    land = [Math.min(Math.max(land[0], park_floor[0]), park_floor[1]), Math.min(Math.max(land[1], park_floor[2]), park_floor[3])];
    var top = getFurnitureSpot(item, item.chute[0]), bottom = getFurnitureSpot(item, item.chute[1]);
    walker.slide = [top, bottom, land];
    walker.x = top[0];
    walker.y = top[1];
    walker.left = bottom[0] < top[0];
    startAction(walker, "slide", [park_slide_frames, park_slide_frames]);
    playSound("slide");
}

function updateSlide(walker) {
    // Slow at the top and faster and faster on the way down.
    walker.timer -= 1;
    var part = 1 - walker.timer / park_slide_frames, from = walker.slide[0], to = walker.slide[1];
    walker.x = from[0] + (to[0] - from[0]) * part * part;
    walker.y = from[1] + (to[1] - from[1]) * part * part;
    if (walker.timer <= 0) {
        var land = walker.slide[2];  // Off the end and onto the grass.
        walker.seat = null;
        walker.x = land[0];
        walker.y = land[1];
        walker.target = land.slice();
        startAction(walker, "proud");  // So much fun.
        walker.hop = park_hop_frames;
    }
}

function swimAcross(walker) {
    // Paddling slowly from one side of the pool to the other, turning round at each end.
    var reach = getSeatItem(walker).swim * park_scale;
    var turn = (ambient_frames + walker.pet * 37) * 2 * Math.PI / park_swim_frames;
    walker.x += snap(reach * Math.sin(turn), park_pet_scale);
    walker.y += snap(2 * Math.sin(turn * 4), park_pet_scale);  // Bobbing in the water.
    walker.left = Math.cos(turn) < 0;
}

function getRiders(item) {
    // Pets sitting or lying on this piece now (not still walking there or jumping on).
    return park_pets.filter(function (walker) {
        return walker.seat && walker.seat.split(":")[0] === item.id && walker !== park_held &&
               ["walk", "climb", "slide"].indexOf(walker.action) < 0;
    });
}

function isPaired(walker) {
    // Two friends together on a seesaw or a hammock.
    if (!walker.seat || walker.action === "walk" || walker.action === "climb") return false;
    var item = getSeatItem(walker);
    return !!item.pair && getRiders(item).length >= 2;
}

function playFurnitureSounds() {
    // The swing creaks at one end of each swing, and the seesaw boings as it goes down.
    getPlacedFurniture().forEach(function (item) {
        if (item.motion !== "swing" && item.motion !== "seesaw") return;
        var frame = getFurnitureFrame(item), before = furniture_frames[item.id];
        furniture_frames[item.id] = frame;
        if (before === undefined || before === frame) return;
        if (item.motion === "swing" && frame === 1) playSound("creak");
        else if (item.motion === "seesaw" && getRiders(item).length >= 2) playSound("boing");
    });
}

function updateHeld(walker) {
    walker.held_frames += 1;
    // The held pet swings like a pendulum under the pointer and slowly comes to rest.
    walker.sway_speed = (walker.sway_speed - walker.sway * 0.08) * 0.92;
    walker.sway = Math.min(Math.max(walker.sway + walker.sway_speed, -30), 30);
}

function updatePark() {
    if (park_message !== null) {
        park_message[1] -= 1;
        if (park_message[1] <= 0) park_message = null;
    }
    garden_confirm = Math.max(0, garden_confirm - 1);
    rollBall();
    playFurnitureSounds();
    park_pets.forEach(function (walker) {
        if (walker.action !== "landed") walker.wet = false;
        walker.hop = Math.max(0, walker.hop - 1);
        walker.full = Math.max(0, walker.full - 1);
        if (walker.seat && getSeatItem(walker).no_bounce) walker.hop = 0;
        if (walker === park_held) {
            updateHeld(walker);
            return;
        }
        if (walker.seat) {
            // Furniture can be moved, so a seat is looked up again every frame.
            var spot = getSeatSpot(walker.seat);
            if (spot === null) walkTo(walker, pickFloorSpot());
            else if (walker.plan === "climb") walker.target = getSeatFoot(walker);
            else if (walker.action !== "climb" && walker.action !== "slide") walker.target = spot;
        }
        if (walker.fall > 0) {
            walker.fall = Math.max(0, walker.fall - park_fall_speed);  // Dropping back down after being let go.
            return;
        }
        if (walker.action === "walk" && walker.plan === "chase") {
            if (!walker.partner) { walker.plan = null; walker.run = false; }
            else {
                walker.target = [walker.partner.x, walker.partner.y];
                if (Math.sqrt(Math.pow(walker.partner.x - walker.x, 2) + Math.pow(walker.partner.y - walker.y, 2)) < 40) {
                    walker.left = walker.partner.x < walker.x; return;
                }
            }
        }
        if (walker.action === "walk") {
            var speed = walker.run ? (walker.plan === "chase" ? S.park_chase_speed : park_run_speed) : park_walk_speed;
            var heading = getDetour([walker.x, walker.y], walker.target) || walker.target;
            var dx = heading[0] - walker.x, dy = heading[1] - walker.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= speed) {
                walker.x = heading[0];
                walker.y = heading[1];
                if (heading[0] === walker.target[0] && heading[1] === walker.target[1]) arrive(walker);
            } else {
                if (Math.abs(dx) > 1) walker.left = dx < 0;
                walker.x += dx / distance * speed;
                walker.y += dy / distance * speed;
            }
            return;
        }
        if (walker.action === "climb") {
            updateClimb(walker);
            return;
        }
        if (walker.action === "slide") {
            updateSlide(walker);
            return;
        }
        if (walker.action === "bat" && walker.toy === "chime" && ambient_frames % 26 === 16) playSound("chime");  // Each swipe rings it.
        if (walker.seat) {
            walker.x = walker.target[0];
            walker.y = walker.target[1];
            if (walker.action === "swim") swimAcross(walker);
        }
        var partner = walker.partner;
        if (walker.action === "ready" && partner && partner.action === "ready") {
            startTogether(walker, partner);
            return;
        }
        if (walker.action === "circle") runInCircle(walker);
        if (walker.action === "spin" && walker.timer % 10 === 0) walker.left = !walker.left;  // Turning after its tail.
        walker.timer -= 1;
        if (walker.timer <= 0) chooseNext(walker);
    });
}

function openPark() {
    park_open = true;
    park_message = null;
    park_carrying = park_held = park_press = park_ball_roll = null;
    if (!garden_owned) park_room = 0;
    closeParkSide();
    makeParkPets();
    track("park_open", {furniture: countKeys(owned_furniture), coins: coins, pets: park_pets.length,
                        room: park_room, garden: garden_owned});
}

function switchRoom(room) {
    // Through the door to the other room: its own furniture and its own pets.
    if (park_carrying !== null) dropFurniture();
    if (park_held !== null) dropPet(park_held.hold_at[0], park_held.hold_at[1]);
    closeParkSide();
    park_room = room;
    park_ball_roll = park_press = null;
    garden_confirm = park_shop_page = 0;
    furniture_frames = {};
    makeParkPets();
    saveProgress();
}

function getRoomArrow() {
    // The living room has an arrow out to the garden on the right; the garden has one back on the left.
    return park_room === 0 ? park_room_right : park_room_left;
}

function pressRoomArrow() {
    // The first click on the locked garden asks, the second one buys it.
    if (park_room === GARDEN || garden_owned) {
        switchRoom(1 - park_room);
    } else if (coins < garden_price) {
        sayInPark("garden_short", {count: garden_price - coins});
    } else if (garden_confirm <= 0) {
        garden_confirm = park_message_frames;
        sayInPark("garden_confirm", {price: garden_price});
    } else {
        coins -= garden_price;
        garden_owned = true;
        playSound("buy");
        track("garden_buy", {price: garden_price, coins_left: coins});
        switchRoom(GARDEN);
        sayInPark("garden_bought");
    }
}

function closePark() {
    if (park_carrying !== null) dropFurniture();
    if (park_held !== null) dropPet(park_held.hold_at[0], park_held.hold_at[1]);
    park_open = false;
}

function sayInPark(key, values) {
    park_message = [tr(key, values), park_message_frames];
}

function buyFurniture(item) {
    if (owned_furniture[item.id]) return false;
    if (coins < item.price) {
        sayInPark("coins_short", {count: item.price - coins});
        return false;
    }
    coins -= item.price;
    playSound("buy");
    owned_furniture[item.id] = true;
    furniture_places[item.id] = item.place.slice();
    saveProgress();
    sayInPark("bought", {name: getItemName(item)});
    park_pets.forEach(function (walker) { walker.hop = park_hop_frames; });  // Everyone jumps for joy.
    track("furniture_buy", {item: item.id, price: item.price, coins_left: coins});
    return true;
}

function snap(value, grid) {
    // Round to the pixel grid, so things move in whole blocks like the room.
    grid = grid || park_scale;
    return Math.round(value / grid) * grid;
}

function getCarriedPlace(item, x, y) {
    // Furniture stays on the floor and inside the room, wherever the pointer goes.
    var half = Math.floor(getFurnitureRect(item).w / 2);
    var placeX = Math.min(Math.max(x + park_grab[0], half + 8), WIDTH - half - 8);
    var placeY = Math.min(Math.max(y + park_grab[1], park_wall_bottom + 4), HEIGHT - 8);
    return [snap(placeX), snap(placeY)];
}

function pickUpFurniture(item, position) {
    var place = getFurniturePlace(item);
    if (!position) {
        // From the shop: it hangs under the pointer by its middle until the next click.
        park_grab = [0, Math.floor(getFurnitureRect(item).h / 2)];
        park_holding = false;
    } else {
        park_grab = [place[0] - position[0], place[1] - position[1]];
        park_holding = true;
    }
    delete stored_furniture[item.id];
    park_carrying = item.id;
    closeParkSide();
    park_pets.forEach(function (walker) {
        if (walker.seat && walker.seat.split(":")[0] === item.id) {
            walker.hop = park_hop_frames;  // Pets sitting on it hop off.
            letGo(walker);
            walkTo(walker, pickFloorSpot());
        } else if (walker.toy === item.id && walker !== park_held) {
            rest(walker);  // The bowl or toy is gone, so it stops eating or playing.
            walker.toy = null;
            walker.run = false;
            walker.plan = null;
        }
    });
    if (!position) moveCarried(mouseX, mouseY);
}

function moveCarried(x, y) {
    var item = FURNITURE_BY_ID[park_carrying];
    furniture_places[item.id] = getCarriedPlace(item, x, y);
}

function dropFurniture(position) {
    var item = FURNITURE_BY_ID[park_carrying];
    var storing = position && park_trashcan.contains(position[0], position[1]);
    if (storing) stored_furniture[item.id] = true;
    park_carrying = null;
    park_holding = false;
    saveProgress();
    sayInPark(storing ? "stored" : "placed", {name: getItemName(item)});
}

function getHang(pet) {
    // From the pointer, which holds the scruff just behind the head, down to the feet.
    var grab = getScruff(pet, ANIMAL_POSES.indexOf("held0"), false);
    return grab[2] * park_pet_scale - grab[1];
}

function pickUpPet(walker, x, y) {
    // Picked up by the scruff of the neck: whatever it was doing stops, and it hangs from the pointer.
    if (park_panel === "pet") closeParkSide();  // The card would hide the room while the pet is carried around.
    playSound("pick_up");
    letGo(walker);
    walker.action = "held";
    walker.seat = walker.plan = walker.toy = null;
    walker.route = [];
    walker.run = false;
    walker.hop = walker.fall = walker.sway = walker.sway_speed = 0;
    walker.hold_at = [x, y];
    walker.held_frames = 0;
    park_held = walker;
    park_press = null;
    moveHeld(x, y);
}

function moveHeld(x, y) {
    var walker = park_held;
    walker.sway_speed -= (x - walker.hold_at[0]) * 0.5;  // Swings the other way when moved.
    walker.hold_at = [x, y];
    walker.x = x;
    walker.y = y + getHang(walker.pet);
}

function dropPet(x, y) {
    // Let go: it lands on a free seat close by, or drops to the floor and shakes itself off.
    var walker = park_held;
    park_held = null;
    playSound("put_down");
    var feetX = x, feetY = y + getHang(walker.pet), kind = getParkKind(walker.pet), taken = {}, near = null;
    park_pets.forEach(function (other) { if (other !== walker && other.seat) taken[other.seat] = true; });
    getParkSeats().forEach(function (seat) {
        if (taken[seat.id] || !canUse(FURNITURE_BY_ID[seat.item], kind)) return;
        var distance = Math.sqrt((seat.x - feetX) * (seat.x - feetX) + (seat.y - feetY) * (seat.y - feetY));
        if (distance <= park_drop_reach && (near === null || distance < near.distance)) {
            near = {distance: distance, seat: seat};
        }
    });
    if (near !== null) {
        walker.seat = near.seat.id;
        walker.x = near.seat.x;
        walker.y = near.seat.y;
        walker.target = [walker.x, walker.y];
        startSeatAction(walker);
    } else {
        walker.x = Math.min(Math.max(feetX, park_floor[0]), park_floor[1]);
        walker.y = Math.min(Math.max(feetY, park_floor[2]), park_floor[3]);
        walker.target = [walker.x, walker.y];
        startAction(walker, "landed");
    }
    walker.fall = Math.max(0, walker.y - feetY);
    walker.sway = walker.sway_speed = 0;
}

function toggleParkPet(pet) {
    // Picking a pet brings it into this room, even from the other room; picking it again sends it out.
    var rooms = [getShownPets(0), getShownPets(GARDEN)];
    var shown = rooms[park_room];
    var at = shown.indexOf(pet);
    if (at >= 0) {
        shown.splice(at, 1);
        park_pets.filter(function (walker) { return walker.pet === pet; }).forEach(function (walker) {
            letGo(walker);
            park_pets.splice(park_pets.indexOf(walker), 1);
        });
    } else if (shown.length >= park_most_pets) {
        sayInPark("room_full", {count: park_most_pets});
        return;
    } else {
        var other = rooms[1 - park_room], there = other.indexOf(pet);
        if (garden_owned && there >= 0) {
            other.splice(there, 1);  // It moves over from the other room.
            sayInPark("moved_room", {name: getPetName(pet)});
        }
        shown.push(pet);
        var walker = makeWalker(pet);
        walker.hop = park_hop_frames;
        park_pets.push(walker);
    }
    park_shown = rooms[0];
    park_shown_chosen = true;
    if (garden_owned) {
        garden_shown = rooms[GARDEN];
        garden_shown_chosen = true;
    }
    saveProgress();
}

function getParkPetRect(walker, lift) {
    // The whole picture cell; the feet touch the bottom edge at (x, y).
    var scale = park_pet_scale;
    var width = park_cell_width * scale, height = park_cell_height * scale;
    var top = snap(walker.y - (lift || 0), scale) - (park_ground + 2) * scale;
    return new Rect(snap(walker.x - width / 2, scale), top, width, height);
}

function getParkPetHitRect(walker) {
    var cell = getParkPetRect(walker);
    var box = getWalkerBox(walker.pet);
    var x = walker.left ? park_cell_width - box[0] - box[2] : box[0];
    var scale = park_pet_scale;
    return new Rect(cell.x + x * scale, cell.y + box[1] * scale, box[2] * scale, box[3] * scale);
}

// Where things go in the side panel.
function getShopRow(index) {
    return new Rect(park_side.x + 10, park_side.y + 58 + index * 51, park_side.w - 20, 46);
}

function getChoiceCard(index) {
    return new Rect(park_side.x + 12 + index % 2 * 108, park_side.y + 84 + Math.floor(index / 2) * 86, 104, 82);
}

function closeParkSide() {
    park_panel = null;
    park_selected = null;
}

function openParkPanel(name) {
    park_panel = park_panel === name ? null : name;  // The same button closes it again.
    park_selected = null;
}

function handleParkSide(x, y) {
    if (park_close_button.contains(x, y)) {
        closeParkSide();
    } else if (park_panel === "shop") {
        var shopPages = Math.ceil(getRoomFurniture().length / park_shop_per_page);
        if (park_choice_previous.contains(x, y)) park_shop_page = pmod(park_shop_page - 1, shopPages);
        else if (park_choice_next.contains(x, y)) park_shop_page = pmod(park_shop_page + 1, shopPages);
        getShopPage().forEach(function (item, index) {
            if (getShopRow(index).contains(x, y) && (owned_furniture[item.id] || buyFurniture(item))) {
                pickUpFurniture(item);
            }
        });
    } else if (park_panel === "pets") {
        var choices = getParkChoices();
        var pages = Math.max(1, Math.ceil(choices.length / park_choices_per_page));
        if (pages > 1 && park_choice_previous.contains(x, y)) park_choice_page = pmod(park_choice_page - 1, pages);
        else if (pages > 1 && park_choice_next.contains(x, y)) park_choice_page = pmod(park_choice_page + 1, pages);
        var start = park_choice_page * park_choices_per_page;
        choices.slice(start, start + park_choices_per_page).forEach(function (pet, index) {
            if (getChoiceCard(index).contains(x, y)) toggleParkPet(pet);
        });
    } else if (park_panel === "pet" && park_selected !== null) {
        if (HOODIE_ENABLED && hoodie_button.contains(x, y) && getParkKind(park_selected.pet) !== "human") toggleHoodie(park_selected.pet);
        else if (like_button.contains(x, y)) likePet(park_selected.pet);
    }
}

function isOutsideFurniture(walker) {
    // While jumping between the floor and a seat, the first half (going in) or the last half
    // (getting out) is in front of the furniture, so a box's front wall does not cover it then.
    if (walker.action !== "climb") return false;
    var part = (getJumpFrames(walker) - walker.timer) / getJumpFrames(walker);
    if (walker.here === "floor") return part < 0.5;
    return walker.route.length > 0 && walker.route[0] === "floor" && part >= 0.5;
}

function getParkPetDepth(walker) {
    if (walker.action === "eat" && FURNITURE_BY_ID[walker.toy] && FURNITURE_BY_ID[walker.toy].bowl)
        return getFurnitureRect(FURNITURE_BY_ID[walker.toy]).bottom() - 1;
    if (walker.seat && walker.action !== "walk") {
        return getFurnitureRect(getSeatItem(walker)).bottom() + (isOutsideFurniture(walker) ? 3 : 1);
    }
    // A patting hand reaches over the dog, so the person goes in front.
    return walker.y;
}

function handlePark(event) {
    if (event.type === "key") {
        if (event.key === "Escape" || event.key === "h" || event.key === "H") {
            if (park_held !== null) dropPet(park_held.hold_at[0], park_held.hold_at[1]);
            else if (park_carrying !== null) dropFurniture();
            else if (park_panel !== null) closeParkSide();
            else closePark();
        }
        return true;  // Keys belong to the park, so space cannot start a game behind it.
    }
    if (event.type === "move") {
        if (park_carrying !== null) {
            moveCarried(event.x, event.y);
        } else if (park_held !== null) {
            moveHeld(event.x, event.y);
        } else if (park_press !== null) {
            // Pressing on a pet and moving the pointer picks it up; a still press is just a click.
            var moved = Math.sqrt(Math.pow(event.x - park_press.x, 2) + Math.pow(event.y - park_press.y, 2));
            if (moved > park_drag_start) pickUpPet(park_press.walker, event.x, event.y);
        }
        return true;
    }
    if (event.type === "up") {
        // Letting go after pressing on furniture or a pet puts it down: that is a drag.
        if (park_held !== null) dropPet(event.x, event.y);
        else if (park_carrying !== null && park_holding) dropFurniture([event.x, event.y]);
        else if (park_press !== null) {
            // Let go without moving: that was a tap, so now the pet's card opens.
            park_panel = "pet";
            park_selected = park_press.walker;
            refreshLikes(false);
        }
        park_holding = false;
        park_press = null;
        return true;
    }
    if (event.type !== "click") return false;
    var x = event.x, y = event.y;
    if (park_carrying !== null) {
        moveCarried(x, y);
        park_holding = true;
        return true;
    }
    if (park_back_button.contains(x, y)) {
        closePark();
        return true;
    }
    var buttons = [[park_shop_button, "shop"], [park_pets_button, "pets"]];
    for (var b = 0; b < buttons.length; b++) {
        if (buttons[b][0].contains(x, y)) {
            openParkPanel(buttons[b][1]);
            return true;
        }
    }
    if (park_panel !== null && park_side.contains(x, y)) {
        handleParkSide(x, y);
        return true;
    }
    if (getRoomArrow().contains(x, y)) {
        pressRoomArrow();
        return true;
    }
    var front = park_pets.slice().sort(function (a, b) { return getParkPetDepth(b) - getParkPetDepth(a); });
    for (var i = 0; i < front.length; i++) {  // The front one first.
        if (getParkPetHitRect(front[i]).contains(x, y)) {
            front[i].hop = park_hop_frames;
            // Moving now picks it up; letting go without moving opens its card.
            park_press = {walker: front[i], x: x, y: y};
            playSound("pet_tap");
            return true;
        }
    }
    var placed = getPlacedFurniture();
    for (var j = placed.length - 1; j >= 0; j--) {
        if (getFurnitureRect(placed[j]).contains(x, y)) {
            pickUpFurniture(placed[j], [x, y]);
            return true;
        }
    }
    closeParkSide();
    return true;
}

function getParkPose(walker) {
    var action = walker.action, pose;
    if (action === "climb") {
        // Crouched while getting ready, stretched out in the air. A long wait on the cat tree
        // is spent sitting and looking around first.
        var frames = getJumpFrames(walker);
        return walker.timer < frames ? "play1" : "sit0";
    } else if (action === "eat") {
        // Head down in the bowl for a while, then lifted to chew.
        return ambient_frames % (park_eat_rhythm[0] + park_eat_rhythm[1]) < park_eat_rhythm[0] ? "eat0" : "eat1";
    } else if (action === "bat") {
        return isSwiping() ? "bat1" : "bat0";
    } else if (action === "sit" && isPaired(walker) && getSeatItem(walker).motion === "seesaw") {
        pose = ["happy", park_seesaw_beat];  // Up and down with a friend: so happy.
    } else {
        pose = {walk: ["walk", walker.run ? 6 : 12], spin: ["walk", 5], lie: ["lie", 50], play: ["play", 14],
                sniff: ["walk", 40], circle: ["walk", 6], proud: ["happy", 12],
                landed: ["sit", 6], held: ["held", 12], slide: ["slide", 8], swim: ["walk", 10]}[action] || ["sit", 24];
    }
    // Playing dogs take turns: one bows while the other jumps.
    var turn = action === "play" && walker.left ? 1 : 0;
    return pose[0] + (Math.floor(ambient_frames / pose[1]) + turn) % 2;
}

function describeParkAction(walker) {
    var action = walker.action, partner = walker.partner;
    var friend = partner ? getPetName(partner.pet) : "";
    if (walker.seat && (action !== "walk" || walker.plan === "climb")) {
        var place = getItemName(FURNITURE_BY_ID[walker.seat.split(":")[0]]);
        if (language !== "zh") place = place.toLowerCase();  // "Resting on the sofa"
        var item = getSeatItem(walker);
        if (action === "climb" || action === "walk") return tr(item.climb ? "doing_climb" : "doing_jump", {place: place});
        if (action === "slide") return tr("doing_slide");
        if (item.doing) return tr(item.doing);
        if (item.front) return tr("doing_inside", {place: place});
        var key = {lie: "doing_seat_nap", play: "doing_seat_play"}[action];
        return tr(key || "doing_seat", {place: place});
    }
    var toy = walker.toy ? FURNITURE_BY_ID[walker.toy] : null;
    if (toy && (action === "walk" || action === "eat")) {
        if (toy.bowl) return tr(toy.drink ? "doing_drink" : action === "eat" ? "doing_eat" : "doing_go_eat");
        return tr(toy.doing || (toy.id === "ball" ? "doing_ball" : "doing_bat"));
    }
    if (action === "walk" && (walker.plan === "chase" || walker.plan === "flee") && partner)
        return tr("doing_" + walker.plan, {friend: friend});
    if (action === "walk") return partner ? tr("doing_meet", {friend: friend}) : tr("doing_walk");
    return tr("doing_" + action, {friend: friend});
}

function getFurnitureIcon(name) {
    var rows = SPRITES[name][0];
    var scale = Math.max(1, Math.min(Math.floor(40 / rows[0].length), Math.floor(40 / rows.length)));
    return getSprite(name, 0, scale);
}

function drawSheetCell(sheet, column, place, mirrored) {
    if (mirrored) {
        // Mirror the picture so the pet faces the way it walks.
        screen.save();
        screen.translate(place.x + place.w, place.y);
        screen.scale(-1, 1);
        screen.drawImage(sheet, column * park_cell_width, 0, park_cell_width, park_cell_height, 0, 0, place.w, place.h);
        screen.restore();
    } else {
        screen.drawImage(sheet, column * park_cell_width, 0, park_cell_width, park_cell_height,
                         place.x, place.y, place.w, place.h);
    }
}

function getClimbPictureLift(walker) {
    // Cancel the sprite's built-in hop; the climb path controls its actual height.
    if (walker.action === "climb" && walker.timer < getJumpFrames(walker)) {
        return -PARK_PET_INFO[walker.pet].jump_offset * park_pet_scale;
    }
    return 0;
}

function drawParkPet(walker) {
    var column = ANIMAL_POSES.indexOf(getParkPose(walker));
    var action = walker.action;
    var lift = (walker.hop ? Math.sin(Math.PI * walker.hop / park_hop_frames) * 28 : 0) + walker.fall;
    if (action === "spin" && Math.floor(ambient_frames / 5) % 2) lift += 4;  // Little hops while turning round.
    var onSeat = walker.seat && action !== "walk";
    var box = getParkPetHitRect(walker);
    if (!onSeat) {
        // A blocky shadow on the floor.
        var shadowWidth = box.w - 8, left = snap(box.centerx() - shadowWidth / 2), shadowTop = snap(walker.y) - 6;
        screen.fillStyle = css(INK, 50);
        screen.fillRect(left + 4, shadowTop, shadowWidth - 8, 4);
        screen.fillRect(left, shadowTop + 4, shadowWidth, 4);
    }
    if (onSeat && getSeatItem(walker).no_bounce) lift = 0;
    lift += getClimbPictureLift(walker);
    var place = getParkPetRect(walker, lift);
    if (action === "landed" && walker.timer > 15) place.x += Math.floor(ambient_frames / 3) % 2 ? 2 : -2;  // Shaking its fur.
    if (action === "slide") place = place.move(park_slide_shift[0] * (walker.left ? -1 : 1), park_slide_shift[1]);
    var item = onSeat ? getSeatItem(walker) : null;
    var bend = item && item.bend && action !== "climb", cover = item && item.front && !isOutsideFurniture(walker);
    if (bend || cover) drawRider(walker, column, place, item, bend, cover);
    else drawSheetCell(getPetSheet(walker.pet), column, place, walker.left);
    if (action === "swim") drawSwimRipples(walker);
    if (action === "eat" && walker.toy) drawCrumbs(FURNITURE_BY_ID[walker.toy]);
    if (action === "landed" && walker.wet && walker.timer > 15) drawPoolSplash(walker);  // Drops flying off its fur.
    if (action === "swim" && ambient_frames % park_swim_frames < 90) drawPoolSplash(walker);  // A burst each time it sets off.
    var top = box.y - Math.round(lift);
    if (action === "lie") {
        // Little z's float up from a napping pet.
        for (var number = 0; number < 2; number++) {
            var rise = (ambient_frames + number * 40) % 80;
            drawText("z", 2 + number, [box.right() - 4 + Math.floor(rise / 8), top + 10 - Math.floor(rise / 2)], CREAM, INK);
        }
    } else if (action === "proud" || walker.hop ||
               ((action === "play" || action === "sniff" || action === "circle" || isPaired(walker)) &&
                Math.floor(ambient_frames / 30) % 2)) {
        var heart = getSprite("heart", 0, action === "play" ? 3 : park_scale);
        var bob = Math.floor(ambient_frames / 12) % 2 * 4;
        screen.drawImage(heart, snap(box.centerx()) - Math.floor(heart.width / 2), top - 4 - bob - heart.height);
    }
    if (walker === park_selected) {
        var arrow = getSprite("arrow", 0, park_scale);
        var arrowBob = Math.floor(ambient_frames / 12) % 2 * 4;
        screen.drawImage(arrow, snap(box.centerx()) - Math.floor(arrow.width / 2), top - 30 - arrowBob - arrow.height);
    }
}

var riderCanvas = null;

function drawRider(walker, column, place, item, bend, cover) {
    // A pet in or on a piece that is not flat. In the hammock each thin column of the picture goes
    // down as far as the cloth under it, so the body follows the curve. Then the front of the piece
    // (the dog house wall, the pool's water, the hammock's cloth) is drawn again only over this pet,
    // so pets walking past are never covered by it.
    if (!riderCanvas) riderCanvas = makeCanvas(place.w, place.h + 32);
    var paper = riderCanvas.getContext("2d"), sheet = getPetSheet(walker.pet), scale = park_pet_scale;
    paper.imageSmoothingEnabled = false;
    paper.clearRect(0, 0, riderCanvas.width, riderCanvas.height);
    // The head is not bent: it moves as one piece, resting where the cloth is under it, and the
    // neck eases from the body's curve to the head's height, so the face never gets squashed.
    var seatX = bend ? item.seats[getSeatNumber(walker)][0] : 0, width = place.w;
    function getDrop(column_x) {
        return (getHammockCurve(seatX + (column_x + scale / 2 - width / 2) / park_scale) - getHammockCurve(seatX)) * park_scale;
    }
    var eyeX = (S.LYING_EYES[PETS[walker.pet].id] || [40, 44])[0];
    var neck = (eyeX - S.park_head_reach) * scale;
    if (walker.left) neck = width - neck;
    var head = bend ? getDrop(walker.left ? width - eyeX * scale : eyeX * scale) : 0;
    for (var source = 0; source < park_cell_width; source++) {
        var column_x = (walker.left ? park_cell_width - 1 - source : source) * scale;
        var drop = 0;
        if (bend) {
            var intoHead = (walker.left ? neck - column_x : column_x - neck) / scale;  // Cells past the neck.
            var blend = Math.min(Math.max((intoHead + S.park_neck_cells) / S.park_neck_cells, 0), 1);
            drop = snap(getDrop(column_x) * (1 - blend) + head * blend, scale);
        }
        paper.drawImage(sheet, column * park_cell_width + source, 0, 1, park_cell_height, column_x, drop, scale, place.h);
    }
    if (cover) {
        var rect = getFurnitureRect(item), front = item.id + "_front";
        var frame = Math.min(getFurnitureFrame(item), SPRITES[front].length - 1);
        paper.globalCompositeOperation = "source-atop";  // Only where the pet already is.
        paper.drawImage(getSprite(front, frame, park_scale), rect.x - place.x, rect.y - place.y);
        paper.globalCompositeOperation = "source-over";
    }
    screen.drawImage(riderCanvas, place.x, place.y);
}

function getHammockCurve(x) {
    // The top of the hammock's cloth in each column, without rounding: high at the ropes, low in the middle.
    var start = S.HAMMOCK_ENDS[0], end = S.HAMMOCK_ENDS[1];
    x = Math.min(Math.max(x, start), end);
    return 9 + 7 * Math.sin(Math.PI * (x - start) / (end - start));
}

function drawSwimRipples(walker) {
    // Little light waves on the water where the swimming dog's body goes in.
    var water = getFurnitureRect(getSeatItem(walker)).y + S.POOL_FRONT * park_scale;
    var box = getParkPetHitRect(walker), wave = Math.floor(ambient_frames / 10) % 2 * 4;
    [box.x + 6 - wave, box.right() - 22 + wave].forEach(function (x) { fillRect(SPRITE_COLORS.c, snap(x, 2), water, 16, 4); });
}

function drawPoolSplash(walker) {
    // Drops of water flying up around a dog playing in the pool.
    var box = getParkPetHitRect(walker);
    for (var number = 0; number < 3; number++) {
        var step = (ambient_frames + number * 11) % 33;
        var dropX = snap(box.centerx() + (number - 1) * (18 + Math.floor(step / 2)), 2);
        var dropY = snap(walker.y - 20 - Math.floor(step * (33 - step) / 14), 2);
        fillRect(INK, dropX - 1, dropY - 1, 6, 6);
        fillRect(SPRITE_COLORS.c, dropX, dropY, 4, 4);
    }
}

function drawCrumbs(item) {
    // Little bits of food, or drops of water, popping up from the bowl.
    var place = getFurniturePlace(item), color = SPRITE_COLORS[item.drink ? "S" : "t"];
    for (var number = 0; number < 2; number++) {
        var step = (ambient_frames + number * 15) % 30;
        var x = snap(place[0] + (number * 2 - 1) * (6 + Math.floor(step / 2)), 2);
        var y = snap(place[1] - 22 - Math.floor(step * (30 - step) / 18), 2);
        fillRect(INK, x - 1, y - 1, 6, 6);
        fillRect(color, x, y, 4, 4);
    }
}

var scruffCache = {};
function getScruff(pet, column, left) {
    var key = [pet, column, left].join("|");
    if (scruffCache[key]) return scruffCache[key];
    var cell = makeCanvas(park_cell_width, park_cell_height), pen = cell.getContext("2d");
    pen.drawImage(getPetSheet(pet), column * park_cell_width, 0, park_cell_width, park_cell_height,
                  0, 0, park_cell_width, park_cell_height);
    var data = pen.getImageData(0, 0, park_cell_width, park_cell_height).data;
    var top = park_cell_height, bottom = 0;
    for (var y = 0; y < park_cell_height; y++) for (var x = 0; x < park_cell_width; x++) {
        if (data[(y * park_cell_width + x) * 4 + 3]) { top = Math.min(top, y); bottom = Math.max(bottom, y + 1); }
    }
    var row = top + Math.round((bottom - top) * 0.28), first = park_cell_width, last = 0;
    for (var xx = 0; xx < park_cell_width; xx++) if (data[(row * park_cell_width + xx) * 4 + 3]) {
        first = Math.min(first, xx); last = Math.max(last, xx);
    }
    var back = first * park_pet_scale + 6;
    if (left) back = park_cell_width * park_pet_scale - 1 - back;
    scruffCache[key] = [back, row * park_pet_scale, bottom];
    return scruffCache[key];
}

function drawHeldPet(walker) {
    var column = ANIMAL_POSES.indexOf("held" + Math.floor(walker.held_frames / 12) % 2);
    var scale = park_pet_scale, width = park_cell_width * scale, height = park_cell_height * scale;
    var grab = getScruff(walker.pet, ANIMAL_POSES.indexOf("held0"), walker.left);
    var floorY = Math.min(Math.max(walker.y, park_floor[2]), park_floor[3]);
    screen.fillStyle = css(INK, 40);
    screen.fillRect(snap(walker.x - 24), snap(floorY) - 6, 48, 8);
    screen.save(); screen.translate(walker.hold_at[0], walker.hold_at[1]);
    screen.rotate(-Math.max(-12, Math.min(12, walker.sway * 0.6)) * Math.PI / 180);
    screen.translate(-grab[0], -grab[1]);
    if (walker.left) { screen.translate(width, 0); screen.scale(-1, 1); }
    screen.drawImage(getPetSheet(walker.pet), column * park_cell_width, 0, park_cell_width, park_cell_height, 0, 0, width, height);
    screen.restore();
    if (walker.held_frames < 40 || walker.held_frames % 90 < 20) {
        var mark = getSprite("startle", 0, 2);
        screen.drawImage(mark, walker.hold_at[0] + (walker.left ? -60 : 32), walker.hold_at[1] - 8);
    }
}


function fitPetCard(lines) {
    // The likes take the bottom of the card. Long lines (a long breed, an English sentence) make
    // the photo smaller; if even that is not enough, the "founding friend" line steps aside.
    var room = like_button.y - 62 - (park_side.y + 236);
    function height(rows) {
        var total = 0;
        rows.forEach(function (row) { total += splitTextLines(row[0], 2, park_side.w - 20).length * 28 + 12; });
        return total;
    }
    if (height(lines) - room > like_photo_shrink) lines = [lines[0], lines[2]];
    return [Math.min(like_photo_shrink, Math.max(0, height(lines) - room)), lines];
}

function drawParkPetSide(walker) {
    var pet = walker.pet;
    drawText(getPetName(pet), 3, [park_side.centerx() - 16, park_side.y + 32]);
    var lines = [[tr("breed_line", {breed: getBreedName(pet)}), INK],
                 [tr(PETS[pet].founder ? "founder" : "submitted"), INK],
                 [tr("doing_line", {doing: describeParkAction(walker)}), DARK_RED]];
    var fitted = fitPetCard(lines), shrink = fitted[0];
    lines = fitted[1];
    var frame = new Rect(park_side.x + 38, park_side.y + 62, park_side.w - 76, 140 - shrink);
    drawPixelPanel(frame, SAND, INK, 0);
    blitCentered(getFittedPortrait(pet, 120 - shrink, frame.w - 16), frame.centerx(), frame.centery());
    var y = park_side.y + 236 - shrink;
    lines.forEach(function (line) {
        // Long lines wrap onto the next row, and everything below moves down to make room.
        y += drawWrappedText(line[0], [park_side.centerx(), y], park_side.w - 20, line[1]) * 28 + 12;
    });
    drawLikeButton(pet);
    if (!HOODIE_ENABLED || getParkKind(pet) === "human") return;  // Switched off, and cut for four legs anyway.
    var wearing = !!hoodie_pets[PETS[pet].id];
    var hovered = hoodie_button.contains(mouseX, mouseY);
    drawPixelPanel(hoodie_button, hovered ? SUN : (wearing ? CREAM : [255, 226, 120]), INK, 3);
    drawFittedText(tr(wearing ? "hoodie_off" : "hoodie_on"), hoodie_button.center(), hoodie_button.w - 16);
}

function getShopPage() {
    // The shop shows a few items at a time; the arrows at the bottom turn the page.
    return getRoomFurniture().slice(park_shop_page * park_shop_per_page, (park_shop_page + 1) * park_shop_per_page);
}

function drawParkShop() {
    drawText(tr("shop"), 3, [park_side.centerx() - 20, park_side.y + 30]);  // Clear of the close button.
    [[park_choice_previous, "<"], [park_choice_next, ">"]].forEach(function (pair) {
        drawPixelPanel(pair[0], pair[0].contains(mouseX, mouseY) ? SUN : CREAM, INK, 3);
        drawText(pair[1], 2, pair[0].center());
    });
    var pages = Math.ceil(getRoomFurniture().length / park_shop_per_page);
    drawText((park_shop_page + 1) + "/" + pages, 2, [park_side.centerx(), park_choice_next.centery()], FOREST);
    getShopPage().forEach(function (item, index) {
        var row = getShopRow(index);
        var owned = owned_furniture[item.id];
        var hovered = row.contains(mouseX, mouseY);
        var fill = hovered ? SUN : (owned || coins >= item.price ? CREAM : [226, 210, 180]);
        drawPixelPanel(row, fill, INK, 0);
        blitCentered(getFurnitureIcon(item.id), row.x + 30, row.centery());
        drawFittedText(getItemName(item), [row.x + 104, row.centery()], 100);
        if (owned) {
            drawFittedText(tr(stored_furniture[item.id] ? "retrieve" : "move"), [row.right() - 34, row.centery()], 56, FOREST);
        } else {
            blitCentered(getSprite("coin", 0, 2), row.right() - 56, row.centery());
            drawText(String(item.price), 2, [row.right() - 26, row.centery()], DARK_RED);
        }
    });
}

function drawParkChoices() {
    drawFittedText(tr("choose_pets"), [park_side.centerx() - 20, park_side.y + 30], 170, INK, 3);
    var shown = getShownPets();
    drawFittedText(tr(park_room === 0 ? "in_room" : "in_garden", {count: shown.length, most: park_most_pets}),
                   [park_side.centerx(), park_side.y + 62], park_side.w - 20, FOREST);
    var elsewhere = garden_owned ? getShownPets(1 - park_room) : [];
    var choices = getParkChoices();
    var start = park_choice_page * park_choices_per_page;
    choices.slice(start, start + park_choices_per_page).forEach(function (pet, index) {
        var card = getChoiceCard(index);
        var chosen = shown.indexOf(pet) >= 0;
        drawPixelPanel(card, chosen ? SUN : (card.contains(mouseX, mouseY) ? SAND : CREAM), INK, 0);
        blitCentered(getFittedPortrait(pet, 48, 60), card.centerx(), card.y + 30);
        drawFittedText(getPetName(pet), [card.centerx(), card.bottom() - 16], card.w - 8);
        if (elsewhere.indexOf(pet) >= 0) {
            drawFittedText(tr(park_room === 0 ? "tag_garden" : "tag_living"), [card.x + 30, card.y + 10], 56, FOREST, 1);
        }
        if (chosen) {
            var tick = new Rect(card.right() - 24, card.y + 4, 20, 20);
            drawPixelPanel(tick, LEAF, INK, 0);
            screen.strokeStyle = css(CREAM, 255);  // A tick mark.
            screen.lineWidth = 3;
            screen.beginPath();
            screen.moveTo(tick.x + 5, tick.y + 10);
            screen.lineTo(tick.x + 9, tick.y + 14);
            screen.lineTo(tick.x + 15, tick.y + 6);
            screen.stroke();
        }
    });
    if (choices.length > park_choices_per_page) {
        [[park_choice_previous, "<"], [park_choice_next, ">"]].forEach(function (pair) {
            drawPixelPanel(pair[0], pair[0].contains(mouseX, mouseY) ? SUN : CREAM, INK, 3);
            drawText(pair[1], 2, pair[0].center());
        });
    }
}

function drawParkSide() {
    if (park_panel === null) return;
    drawPixelPanel(park_side);
    if (park_panel === "shop") drawParkShop();
    else if (park_panel === "pets") drawParkChoices();
    else drawParkPetSide(park_selected);
    drawPixelPanel(park_close_button, park_close_button.contains(mouseX, mouseY) ? SUN : CREAM, INK, 3);
    drawText("×", 2, park_close_button.center());
}

function isSwiping() { return ambient_frames % 26 >= 16; }

function getFurnitureFrame(item) {
    var motion = item.motion;
    if (item.id === "ball") return park_ball_roll !== null ? Math.floor(ambient_frames / 5) % 2 : 0;
    if (motion === "batted") {
        var cat = park_pets.filter(function (walker) { return walker.toy === item.id && walker.action === "bat"; })[0];
        if (!cat) return 0;  // Nobody is playing, so it hangs still.
        if (isSwiping()) return cat.left ? 3 : 2;  // Knocked away from the cat.
        return Math.floor(ambient_frames / 45) % 2;  // Swaying a little between swipes.
    }
    if (motion === "ripple") return Math.floor(ambient_frames / 30) % 2;
    if (motion === "swing" || motion === "sway") {
        // Back and forth while someone is on it; still when it is empty.
        return getRiders(item).length ? Math.floor(ambient_frames / (motion === "swing" ? 14 : 24)) % 4 : 0;
    }
    if (motion === "seesaw") {
        var ends = {};
        getRiders(item).forEach(function (walker) { ends[getSeatNumber(walker)] = true; });
        if (ends[0] && ends[1]) return 1 + Math.floor(ambient_frames / park_seesaw_beat) % 2;  // Up and down with a friend.
        return ends[0] ? 1 : ends[1] ? 2 : 0;  // One pet alone sits on the low end.
    }
    return 0;
}

function drawRoomArrow() {
    // A big arrow at the side of the room: out to the garden (with its price until it is bought) or back in.
    var arrow = getRoomArrow(), hovered = arrow.contains(mouseX, mouseY);
    var nudge = Math.floor(ambient_frames / 20) % 2 * 4 * (park_room === 0 ? 1 : -1);
    var shown = arrow.move(nudge, hovered ? -2 : 0);
    drawPixelPanel(shown, hovered || (garden_confirm && park_room === 0) ? SUN : CREAM, INK, 4);
    var pointing = park_room === 0 ? 1 : -1, middleX = shown.centerx(), middleY = shown.y + 26;
    screen.beginPath();
    screen.moveTo(middleX - 10 * pointing, middleY - 14);
    screen.lineTo(middleX + 12 * pointing, middleY);
    screen.lineTo(middleX - 10 * pointing, middleY + 14);
    screen.closePath();
    screen.fillStyle = css(park_room === 0 ? LEAF : FOREST, 255);
    screen.fill();
    screen.strokeStyle = css(INK, 255);
    screen.lineWidth = 3;
    screen.stroke();
    drawFittedText(tr(park_room === 0 ? "to_garden" : "to_living"), [shown.centerx(), shown.bottom() - 16], shown.w - 6, INK, 1);
    if (park_room === 0 && !garden_owned) {
        // The price under the arrow until the garden is bought.
        var price = new Rect(shown.centerx() - 14 - 42, shown.bottom() + 6, 84, 30);
        drawPixelPanel(price, CREAM, INK, 0);
        blitCentered(getSprite("coin", 0, 2), price.x + 14, price.centery());
        drawText(String(garden_price), 2, [price.centerx() + 10, price.centery()], DARK_RED);
    }
}

function drawPark() {
    screen.drawImage(park_room === 0 ? parkRoom : gardenPicture, 0, 0, WIDTH, HEIGHT);
    if (isPlaced(FURNITURE_BY_ID.lamp)) {
        var shade = getFurnitureRect(FURNITURE_BY_ID.lamp);
        screen.drawImage(lampGlow, shade.centerx() - lampGlow.width / 2, shade.y + 12 - lampGlow.height / 2);
    }
    // Furniture and pets from the back of the room to the front; flat rugs first.
    var layers = [];
    getPlacedFurniture().forEach(function (item) {
        if (item.id === park_carrying) return;
        var rect = getFurnitureRect(item);
        var frame = getFurnitureFrame(item);
        layers.push({depth: item.flat ? -1 : rect.bottom(), kind: 0, sprite: item.id, frame: frame, rect: rect});
    });
    park_pets.forEach(function (walker) {
        if (walker !== park_held) layers.push({depth: getParkPetDepth(walker), kind: 1, walker: walker});
    });
    layers.sort(function (a, b) { return a.depth - b.depth || a.kind - b.kind; });
    layers.forEach(function (layer) {
        if (layer.kind === 1) drawParkPet(layer.walker);
        else screen.drawImage(getSprite(layer.sprite, layer.frame, park_scale), layer.rect.x, layer.rect.y);
    });
    // The dangling feather (or chime) stays in front of the swiping paw instead of disappearing behind the cat's head.
    getPlacedFurniture().forEach(function (item) {
        if (!item.tip || item.id === park_carrying || !park_pets.some(function (walker) {
            return walker.toy === item.id && walker.action === "bat";
        })) return;
        var tipRect = getFurnitureRect(item), area = item.tip.map(function (n) { return n * park_scale; });
        var tip = getSprite(item.id, getFurnitureFrame(item), park_scale);
        screen.drawImage(tip, area[0], area[1], area[2], area[3], tipRect.x + area[0], tipRect.y + area[1], area[2], area[3]);
    });
    if (park_carrying !== null) {
        // Held furniture floats a little above its shadow.
        var held = getFurnitureRect(FURNITURE_BY_ID[park_carrying]);
        screen.fillStyle = css(INK, 70);
        screen.fillRect(held.x, held.bottom() - 6, held.w, 8);
        screen.drawImage(getSprite(park_carrying, 0, park_scale), held.x, held.y - 12);
    }
    if (park_held !== null) drawHeldPet(park_held);
    drawRoomArrow();
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawFittedText(tr(park_room === 0 ? "park" : "garden"), ribbon.center(), ribbon.w - 20, CREAM, 3);
    [[park_back_button, tr(isTouchScreen ? "back_touch" : "back_esc"), null], [park_shop_button, tr("shop"), "shop"],
     [park_pets_button, tr("pets_button"), "pets"]].forEach(function (row) {
        var button = row[0];
        var hovered = button.contains(mouseX, mouseY) || (row[2] !== null && park_panel === row[2]);
        var shown = button.move(0, hovered ? -2 : 0);
        drawPixelPanel(shown, hovered ? SUN : CREAM, INK, 4);
        drawFittedText(row[1], shown.center(), button.w - 12);
    });
    drawCoinCounter();
    if (park_carrying !== null) {
        var hoveredBin = park_trashcan.contains(mouseX, mouseY);
        drawPixelPanel(park_trashcan, hoveredBin ? SUN : CREAM, INK, 4);
        var bx = park_trashcan.centerx(), by = park_trashcan.y + 10;
        fillRect(FOREST, bx - 10, by, 20, 4);
        fillRect(INK, bx - 22, by + 6, 44, 5);
        fillRect(FOREST, bx - 18, by + 14, 36, 30);
        [-8, 4].forEach(function (dx) { fillRect(CREAM, bx + dx, by + 19, 4, 20); });
        drawFittedText(tr("storage_bin"), [bx, park_trashcan.bottom() - 14], 78, FOREST);
    }
    var line;
    if (park_held !== null) line = tr("pet_drag_hint");
    else if (park_carrying !== null) line = tr("drag_hint");
    else if (park_message !== null) line = park_message[0];
    else if (!getRoomFurniture().some(function (item) { return owned_furniture[item.id]; })) {
        line = tr(park_room === 0 ? "park_hint_empty" : "garden_hint_empty");
    }
    else line = tr("park_hint");
    drawFittedText(line, [400, 98], 460, park_message || park_carrying !== null || park_held !== null ? SUN : CREAM, 2, INK);
    drawParkSide();
}

// -------------------------
// Footprint quiz: guess whose footprint it is
// -------------------------
var TRACK_ANIMALS = S.TRACK_ANIMALS, TRACK_IDS = S.TRACK_IDS;
var quiz_questions = S.quiz_questions, quiz_choices = S.quiz_choices;
var quiz_coins_per_right = S.quiz_coins_per_right, quiz_perfect_bonus = S.quiz_perfect_bonus;
var quiz_fact_delay = S.quiz_fact_delay, quiz_reveal_frames = S.quiz_reveal_frames;
var quiz_wiggle_frames = S.quiz_wiggle_frames, TRACK_SIZE = S.TRACK_SIZE, QUIZ_CELL = S.QUIZ_CELL;
var trackSheet = null, quizAnimalSheet = null;  // Pictures drawn by the Python game, one animal after another.
var quiz_open = false, quiz = null;
var quiz_button = new Rect(696, 496, 94, 96);
var quiz_back_button = new Rect(14, 14, 150, 48);
var quiz_track_card = new Rect(285, 146, 230, 230);
var quiz_picture_card = new Rect(48, 128, 300, 300);
var quiz_next_button = new Rect(412, 470, 316, 60);
var quiz_again_button = new Rect(150, 486, 240, 60);
var quiz_leave_button = new Rect(410, 486, 240, 60);

function getQuizChoiceButton(index) { return new Rect(52 + index * 241, 414, 214, 76); }

function getTrackAnimal(animal) { return TRACK_ANIMALS[TRACK_IDS.indexOf(animal)]; }
function getTrackName(animal) { return getTrackAnimal(animal)[language === "zh" ? "name" : "name_en"]; }
function getTrackFact(animal) { return getTrackAnimal(animal)[language === "zh" ? "fact" : "fact_en"]; }

function shuffle(items) {
    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), kept = items[i];
        items[i] = items[j];
        items[j] = kept;
    }
    return items;
}

function makeQuizQuestions() {
    // Five different animals; each comes with two wrong answers, mixed in at random places.
    return sample(TRACK_IDS, quiz_questions).map(function (answer) {
        var others = sample(TRACK_IDS.filter(function (animal) { return animal !== answer; }), quiz_choices - 1);
        return {answer: answer, choices: shuffle(others.concat([answer])), picked: null};
    });
}

function startQuiz() {
    quiz = {questions: makeQuizQuestions(), number: 0, frames: 0, done: false, earned: 0};
}

function openQuiz() {
    quiz_open = true;
    startQuiz();
    track("quiz_open", {coins: coins});
}

function closeQuiz() { quiz_open = false; }

function getQuizQuestion() { return quiz.questions[Math.min(quiz.number, quiz_questions - 1)]; }

function countQuizRight() {
    return quiz.questions.filter(function (question) { return question.picked === question.answer; }).length;
}

function pickQuizAnswer(index) {
    var question = getQuizQuestion();
    if (quiz.done || question.picked !== null || index < 0 || index >= question.choices.length) return false;
    question.picked = question.choices[index];
    quiz.frames = 0;
    track("quiz_answer", {animal: question.answer, right: question.picked === question.answer, number: quiz.number + 1});
    return true;
}

function getQuizCoins(right) {
    return right * quiz_coins_per_right + (right === quiz_questions ? quiz_perfect_bonus : 0);
}

function nextQuizQuestion() {
    if (quiz.done || getQuizQuestion().picked === null) return false;
    quiz.number += 1;
    quiz.frames = 0;
    if (quiz.number >= quiz_questions) {
        // The end: coins for every right answer, saved straight away.
        var right = countQuizRight();
        quiz.done = true;
        quiz.earned = getQuizCoins(right);
        coins += quiz.earned;
        saveProgress();
        track("quiz_finish", {right: right, coins_earned: quiz.earned, coins: coins});
    }
    return true;
}

function updateQuiz() {
    if (quiz === null) return;
    quiz.frames += 1;
    if (!quiz.done && getQuizQuestion().picked !== null && quiz.frames >= quiz_reveal_frames) nextQuizQuestion();
}

function handleQuiz(event) {
    var asking = !quiz.done && getQuizQuestion().picked === null;
    if (event.type === "key") {
        var number = numberKey(event);
        if (event.key === "Escape") closeQuiz();
        else if (asking && number >= 0 && number < quiz_choices) pickQuizAnswer(number);
        else if (event.key === " " || event.key === "Enter") {
            if (quiz.done) startQuiz();
            else nextQuizQuestion();
        } else if (event.key === "l") switchLanguage();
        return true;
    }
    if (event.type === "click") {
        var x = event.x, y = event.y;
        if (quiz_back_button.contains(x, y) || (quiz.done && quiz_leave_button.contains(x, y))) closeQuiz();
        else if (quiz.done) {
            if (quiz_again_button.contains(x, y)) startQuiz();
        } else if (asking) {
            for (var i = 0; i < quiz_choices; i++) {
                if (getQuizChoiceButton(i).contains(x, y)) pickQuizAnswer(i);
            }
        } else nextQuizQuestion();  // A tap anywhere moves on.
        return true;
    }
    return true;
}

function drawTrack(animal, x, y, scale) {
    var index = TRACK_IDS.indexOf(animal);
    screen.drawImage(trackSheet, index * TRACK_SIZE, 0, TRACK_SIZE, TRACK_SIZE, x, y, TRACK_SIZE * scale, TRACK_SIZE * scale);
}

function drawQuizButton() {
    var hovered = quiz_button.contains(mouseX, mouseY);
    var button = quiz_button.move(0, hovered ? -3 : 0);
    drawPixelPanel(button, hovered ? SUN : CREAM, INK, 4);
    drawTrack("dog", button.centerx() - Math.floor(TRACK_SIZE / 2), button.y + 8, 1);
    drawFittedText(tr("quiz_button"), [button.centerx(), button.bottom() - 20], button.w - 8);
}

function drawQuizProgress() {
    // One square per question: green for right, red for wrong, empty for still to come.
    quiz.questions.forEach(function (question, number) {
        var x = 318 + number * 34, fill = CREAM;
        if (question.picked !== null) fill = question.picked === question.answer ? LEAF : RED;
        fillRect(INK, x, 548, 26, 26);
        fillRect(fill, x + 3, 551, 20, 20);
    });
}

function drawQuizAnimal(animal, centerX, centerY, scale, frames) {
    var frame = Math.floor(frames / quiz_wiggle_frames) % 2, index = TRACK_IDS.indexOf(animal), size = QUIZ_CELL * scale;
    screen.drawImage(quizAnimalSheet, frame * QUIZ_CELL, index * QUIZ_CELL, QUIZ_CELL, QUIZ_CELL,
                     centerX - Math.floor(size / 2), centerY - Math.floor(size / 2), size, size);
}

function drawQuizButtonPanel(rect, fill, label, color) {
    var hovered = rect.contains(mouseX, mouseY);
    var shown = rect.move(0, hovered ? -3 : 0);
    drawPixelPanel(shown, hovered ? SUN : fill, INK, 4);
    drawFittedText(label, shown.center(), shown.w - 16, hovered ? INK : color, 3);
}

function drawQuiz() {
    drawOverlay(90);
    drawPixelPanel(new Rect(20, 92, 760, 494));
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawFittedText(tr("quiz_title"), ribbon.center(), ribbon.w - 20, CREAM, 3);
    var hovered = quiz_back_button.contains(mouseX, mouseY);
    var back = quiz_back_button.move(0, hovered ? -2 : 0);
    drawPixelPanel(back, hovered ? SUN : CREAM, INK, 4);
    drawFittedText(tr(isTouchScreen ? "back_touch" : "back_esc"), back.center(), back.w - 12);
    drawCoinCounter();
    if (quiz.done) {
        drawQuizResults();
        return;
    }
    var question = getQuizQuestion();
    drawQuizProgress();
    if (question.picked === null) drawQuizQuestion(question);
    else drawQuizAnswer(question);
}

function drawQuizQuestion(question) {
    drawFittedText(tr("quiz_ask", {n: quiz.number + 1, total: quiz_questions}), [400, 122], 700, INK, 3);
    var card = quiz_track_card;
    fillRect(INK, card.x, card.y, card.w, card.h);
    fillRect(SAND, card.x + 4, card.y + 4, card.w - 8, card.h - 8);
    drawTrack(question.answer, card.centerx() - TRACK_SIZE * 5 / 2, card.centery() - TRACK_SIZE * 5 / 2, 5);
    question.choices.forEach(function (animal, index) {
        drawQuizButtonPanel(getQuizChoiceButton(index), CREAM, (index + 1) + "  " + getTrackName(animal), INK);
    });
    drawFittedText(tr(isTouchScreen ? "quiz_keys_touch" : "quiz_keys"), [400, 516], 700, FOREST);
}

function drawQuizAnswer(question) {
    var answer = question.answer, frames = quiz.frames, right = question.picked === answer;
    var card = quiz_picture_card;
    fillRect(INK, card.x, card.y, card.w, card.h);
    fillRect([196, 228, 246], card.x + 4, card.y + 4, card.w - 8, card.h - 8);
    fillRect([150, 200, 110], card.x + 4, card.y + 214, 292, 82);
    // The picture pops in with a little bounce, then the foot keeps wiggling.
    var bounce = Math.round(Math.abs(Math.sin(Math.min(frames, 24) / 24 * Math.PI)) * -16);
    drawQuizAnimal(answer, card.centerx(), card.centery() + 6 + bounce, 8, frames);
    var banner = new Rect(400, 124, 340, 60);
    drawPixelPanel(banner, right ? LEAF : RED, INK, 4);
    drawFittedText(tr(right ? "quiz_right" : "quiz_wrong"), banner.center(), banner.w - 16, CREAM, 3);
    drawFittedText(tr("quiz_it_was", {name: getTrackName(answer)}), [570, 216], 340, INK, 3);
    if (frames >= quiz_fact_delay) {
        var slide = Math.max(0, 30 - (frames - quiz_fact_delay) * 3);
        var box = new Rect(392 + slide, 250, 356, 204);
        drawPixelPanel(box, SAND, INK, 4);
        drawFittedText(tr("did_you_know"), [box.centerx(), box.y + 26], box.w - 20, DARK_RED, 3);
        drawWrappedText(getTrackFact(answer), [box.centerx(), box.y + 66], box.w - 48, INK,
                        language === "en" ? 2 : 3, language === "en" ? 30 : 38);
    }
    var last = quiz.number === quiz_questions - 1, next = quiz_next_button;
    fillRect(SHADOW.slice(0, 3), next.x, next.bottom() + 6, next.w, 6);
    var left = 1 - Math.min(frames, quiz_reveal_frames) / quiz_reveal_frames;
    fillRect(SUN, next.x, next.bottom() + 6, Math.round(next.w * left), 6);
    drawPixelPanel(next, LEAF, INK, 4);
    var label = (last ? "quiz_results" : "quiz_next") + (isTouchScreen ? "_touch" : "");
    drawFittedText(tr(label), next.center(), next.w - 16, CREAM, 3);
}

function drawQuizResults() {
    var right = countQuizRight();
    drawFittedText(tr("quiz_score", {right: right, total: quiz_questions}), [400, 140], 700, INK, 4);
    var line = right === quiz_questions ? tr("quiz_perfect", {n: quiz.earned}) : tr("quiz_coins", {n: quiz.earned});
    drawFittedText(line, [400, 196], 700, DARK_RED, 3);
    // Every animal from this game waves goodbye; the ones you got right stand on green.
    quiz.questions.forEach(function (question, number) {
        var x = 112 + number * 144, y = 330;
        fillRect(INK, x - 62, y - 62, 124, 124);
        fillRect(question.picked === question.answer ? [214, 238, 196] : [246, 214, 206], x - 59, y - 59, 118, 118);
        drawQuizAnimal(question.answer, x, y, 4, quiz.frames + number * 7);
        drawFittedText(getTrackName(question.answer), [x, y + 84], 130);
    });
    drawQuizButtonPanel(quiz_again_button, LEAF, tr("quiz_again"), CREAM);
    drawQuizButtonPanel(quiz_leave_button, CREAM, tr(isTouchScreen ? "back_touch" : "back_esc"), INK);
}

function drawParkButton() {
    var hovered = park_button.contains(mouseX, mouseY);
    var button = park_button.move(0, hovered ? -3 : 0);
    drawPixelPanel(button, hovered ? SUN : CREAM, INK, 4);
    var house = getSprite("house", 0, 3);
    screen.drawImage(house, button.centerx() - Math.floor(house.width / 2), button.y + 10);
    drawFittedText(tr("park_button"), [button.centerx(), button.bottom() - 20], button.w - 8);
}

var language_button = new Rect(14, 18, 96, 44);

function drawLanguageButton() {
    // Shows the other language, so the player knows what a click will switch to.
    var hovered = language_button.contains(mouseX, mouseY);
    var button = language_button.move(0, hovered ? -2 : 0);
    drawPixelPanel(button, hovered ? SUN : CREAM, INK, 4);
    drawFittedText(tr("switch_language"), button.center(), button.w - 12);
}

function switchLanguage() {
    language = language === "zh" ? "en" : "zh";
    saveProgress();
    track("language_switch", {language: language});
    showPageLanguage();
}

function showPageLanguage() {
    // The page around the game follows too: its tab title and the words of the language attribute.
    document.title = tr("title");
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
}

// -------------------------
// Snack Catch: slide to move your pet and catch the falling food, but not the food
// that is bad for cats and dogs.
// -------------------------
var QUIZ_ENABLED = S.QUIZ_ENABLED;  // The footprint quiz is switched off for now; its code is kept for later.
var CATCH_FOODS = S.CATCH_FOODS, CATCH_GOOD = S.CATCH_GOOD, CATCH_BAD = S.CATCH_BAD;
var catchBackgrounds = {};
var CATCH_BACKGROUNDS = S.CATCH_BACKGROUNDS;
var catch_hearts = S.catch_hearts, catch_frames = S.catch_frames, catch_countdown = S.catch_countdown;
var catch_points_per_food = S.catch_points_per_food, catch_points_per_coin = S.catch_points_per_coin;
var catch_spawn_lanes = S.catch_spawn_lanes, catch_spawn_gap = S.catch_spawn_gap;
var catch_fall_speed = S.catch_fall_speed, catch_bad_share = S.catch_bad_share;
var catch_move_speed = S.catch_move_speed, catch_scale = S.catch_scale, catch_ground = S.catch_ground;
var catch_per_page = S.catch_per_page;
var catch_open = false;
var catch_round = null;  // The round: its stage ("choose", "play" or "done"), the pet, the food and the hearts.
var catch_button = new Rect(696, 496, 94, 96);  // Where the footprint button used to be.
var catch_back_button = new Rect(14, 14, 150, 48);
var catch_again_button = new Rect(70, 486, 210, 60);
var catch_change_button = new Rect(295, 486, 210, 60);
var catch_leave_button = new Rect(520, 486, 210, 60);
var catch_previous = new Rect(40, 432, 60, 40);
var catch_next = new Rect(700, 432, 60, 40);
var catch_keys = {};  // Arrow keys being held down right now.
var catch_last_mouse = null;

window.addEventListener("keydown", function (event) { catch_keys[normalKey(event)] = true; });
window.addEventListener("keyup", function (event) { catch_keys[normalKey(event)] = false; });
window.addEventListener("blur", function () { catch_keys = {}; });

function getCatchCard(index) { return new Rect(52 + index % 4 * 178, 148 + Math.floor(index / 4) * 140, 164, 132); }

function getFoodName(food) { return CATCH_FOODS[food][language === "zh" ? "name" : "name_en"]; }

function openCatch() {
    catch_open = true;
    catch_round = {stage: "choose", page: 0, pet: null};
    track("catch_open", {coins: coins});
}

function closeCatch() { catch_open = false; }

function startCatch(pet) {
    // Each new round draws its scene at random, so no order can be learned; it then stays
    // fixed for the whole round.
    var background = CATCH_BACKGROUNDS[Math.floor(Math.random() * CATCH_BACKGROUNDS.length)];
    catch_round = {stage: "play", page: catch_round ? catch_round.page : 0, pet: pet, x: WIDTH / 2,
                   aim: WIDTH / 2, left: false, moving: false, food: [], pops: [], hearts: catch_hearts,
                   caught: 0, frames: -catch_countdown, next_food: 0, happy: 0, hurt: 0, earned: 0, background: background, bad_caught: [], score: 0, bad_credit: randomBetween(.25, .75), lanes: [], last_lane: -1};
    catch_last_mouse = mouseX;
    track("catch_start", {pet: PETS[pet].id});
}

function getCatchProgress() { return Math.max(0, Math.min(1, catch_round.frames / catch_frames)); }

function between(pair, part) { return pair[0] + (pair[1] - pair[0]) * part; }

function randomBetween(low, high) { return low + Math.random() * (high - low); }

function dropFood() {
    var round = catch_round, part = getCatchProgress();
    round.bad_credit += between(catch_bad_share, part);
    var bad = round.bad_credit >= 1 - 1e-9;
    if (bad) round.bad_credit -= 1;
    if (!round.lanes.length) {
        round.lanes = Array.from({length: catch_spawn_lanes}, function (_, i) { return i; });
        for (var i = round.lanes.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var swap = round.lanes[i]; round.lanes[i] = round.lanes[j]; round.lanes[j] = swap;
        }
        if (round.lanes[round.lanes.length - 1] === round.last_lane) {
            var swap = round.lanes[0]; round.lanes[0] = round.lanes[round.lanes.length - 1];
            round.lanes[round.lanes.length - 1] = swap;
        }
    }
    var lane = round.lanes.pop(); round.last_lane = lane;
    var x = 50 + (lane + randomBetween(.15, .85)) * (WIDTH - 100) / catch_spawn_lanes;
    var list = bad ? CATCH_BAD : CATCH_GOOD;
    var food = list[Math.floor(Math.random() * list.length)];
    var speed = between(catch_fall_speed, part) + randomBetween(-.1, .1);
    round.food.push({food: food, x: x, y: -30, speed: speed});
    round.next_food = Math.round(between(catch_spawn_gap, part) * randomBetween(.94, 1.06));
}

function getCatchMouth() {
    // The part of the pet that catches food: the top half of its picture, where its head is.
    var box = PARK_PET_INFO[catch_round.pet].box;
    var cellWidth = park_cell_width * catch_scale;
    var left = catch_round.x - cellWidth / 2 + (box[0] + box[2] * 0.12) * catch_scale;
    var top = catch_ground - (park_ground + 2) * catch_scale + box[1] * catch_scale;
    return new Rect(Math.round(left), Math.round(top), Math.round(box[2] * 0.76 * catch_scale),
                    Math.round(box[3] * 0.55 * catch_scale));
}

function finishCatch() {
    if (!catch_round || catch_round.stage !== "play") return;
    catch_round.stage = "done";
    var survived = catch_round.hearts > 0 && catch_round.frames >= catch_frames;
    catch_round.earned = survived ? Math.floor(catch_round.score / catch_points_per_coin) : 0;
    coins += catch_round.earned;
    saveProgress();
    track("catch_finish", {pet: PETS[catch_round.pet].id, hearts: catch_round.hearts, caught: catch_round.caught,
                           score: catch_round.score, survived: survived, coins_earned: catch_round.earned, coins: coins});
}

function updateCatch() {
    var round = catch_round;
    if (round === null || round.stage !== "play") return;
    round.frames += 1;
    round.happy = Math.max(0, round.happy - 1);
    round.hurt = Math.max(0, round.hurt - 1);
    // The pointer or a finger sliding sideways sets where the pet runs; so do held arrow keys.
    if (mouseX !== catch_last_mouse) {
        round.aim = mouseX;
        catch_last_mouse = mouseX;
    }
    if (!catch_keys.ArrowLeft !== !catch_keys.ArrowRight) round.aim = round.x + (catch_keys.ArrowLeft ? -60 : 60);
    // The pet runs towards the aim, never faster than catch_move_speed.
    var aim = Math.min(Math.max(round.aim, 60), WIDTH - 60);
    var step = Math.max(-catch_move_speed, Math.min(catch_move_speed, (aim - round.x) * 0.3));
    round.moving = Math.abs(step) > 0.8;
    if (round.moving) round.left = step < 0;
    round.x += step;
    round.pops.forEach(function (pop) { pop.frames += 1; });
    round.pops = round.pops.filter(function (pop) { return pop.frames < 50; });
    if (round.frames < 0) return;  // Still counting down.
    round.next_food -= 1;
    if (round.next_food <= 0) dropFood();
    var mouth = getCatchMouth();
    round.food.slice().forEach(function (item) {
        item.y += item.speed;
        if (mouth.contains(item.x, item.y)) {
            round.food.splice(round.food.indexOf(item), 1);
            eatCatchFood(item);
        } else if (item.y > HEIGHT + 30) {
            round.food.splice(round.food.indexOf(item), 1);  // Missed: no harm done.
        }
    });
    if (round.hearts <= 0 || round.frames >= catch_frames) finishCatch();
}

function eatCatchFood(item) {
    var round = catch_round, food = item.food;
    if (CATCH_FOODS[food].good) {
        round.caught += 1;
        round.score += catch_points_per_food;
        round.happy = 24;
        playSound("good_food");
        round.pops.push({text: "+" + catch_points_per_food, color: LEAF, x: item.x, y: item.y, frames: 0});
    } else {
        round.hearts = Math.max(0, round.hearts - 1);
        round.happy = 0;
        round.hurt = 40;
        playSound("bad_food");
        playSound("lose_heart");
        if (round.bad_caught.indexOf(food) < 0) round.bad_caught.push(food);
        round.pops.push({text: tr("catch_bad", {name: getFoodName(food)}), color: RED, x: item.x, y: item.y, frames: 0});
    }
}

function handleCatch(event) {
    var stage = catch_round.stage;
    if (event.type === "key") {
        if (event.key === "Escape") {
            if (stage === "play") catch_round.stage = "choose";
            else closeCatch();
        } else if (stage === "play" && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
            catch_round.aim = catch_round.x + (event.key === "ArrowLeft" ? -90 : 90);
        } else if (stage === "done" && (event.key === " " || event.key === "Enter")) {
            startCatch(catch_round.pet);
        } else if (event.key === "l") switchLanguage();
        return true;
    }
    if (event.type === "click") {
        var x = event.x, y = event.y;
        if (stage === "play") {
            catch_round.aim = x;  // A tap also moves the pet there.
            if (catch_back_button.contains(x, y)) catch_round.stage = "choose";
        } else if (catch_back_button.contains(x, y) || (stage === "done" && catch_leave_button.contains(x, y))) {
            closeCatch();
        } else if (stage === "done") {
            if (catch_again_button.contains(x, y)) startCatch(catch_round.pet);
            else if (catch_change_button.contains(x, y)) catch_round.stage = "choose";
        } else {
            var choices = getParkChoices();
            var pages = Math.max(1, Math.ceil(choices.length / catch_per_page));
            if (pages > 1 && catch_previous.contains(x, y)) catch_round.page = pmod(catch_round.page - 1, pages);
            else if (pages > 1 && catch_next.contains(x, y)) catch_round.page = pmod(catch_round.page + 1, pages);
            var page = choices.slice(catch_round.page * catch_per_page, (catch_round.page + 1) * catch_per_page);
            for (var i = 0; i < page.length; i++) {
                if (getCatchCard(i).contains(x, y)) {
                    startCatch(page[i]);
                    break;
                }
            }
        }
        return true;
    }
    return true;
}

function drawCatchPet(pet, pose, left, scale, centerX, bottom, cropped, sick) {
    // The same pixel pet as in the park, drawn bigger. Cropped pictures keep only the part
    // the pet fills, so it sits nicely inside a card.
    var column = ANIMAL_POSES.indexOf(pose);
    var sx = column * park_cell_width, sy = 0, sw = park_cell_width, sh = park_cell_height;
    if (cropped) {
        var box = PARK_PET_INFO[pet].box;
        sx += box[0]; sy = box[1]; sw = box[2]; sh = box[3];
    }
    var width = sw * scale, height = sh * scale;
    var picture = makeCanvas(width, height), pen = picture.getContext("2d");
    pen.imageSmoothingEnabled = false;
    if (left) { pen.translate(width, 0); pen.scale(-1, 1); }
    pen.drawImage(getPetSheet(pet), sx, sy, sw, sh, 0, 0, width, height);
    screen.drawImage(picture, Math.round(centerX - width / 2), Math.round(bottom - height));
}

function drawCatchButton() {
    var hovered = catch_button.contains(mouseX, mouseY);
    var button = catch_button.move(0, hovered ? -3 : 0);
    drawPixelPanel(button, hovered ? SUN : CREAM, INK, 4);
    blitCentered(getSprite("bone", 0, 3), button.centerx() - 14, button.y + 26);
    blitCentered(getSprite("fish", 0, 3), button.centerx() + 14, button.y + 36);
    drawFittedText(tr("catch_button"), [button.centerx(), button.bottom() - 20], button.w - 8);
}

function drawCatchTop(title) {
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawFittedText(title, ribbon.center(), ribbon.w - 20, CREAM, 3);
    var hovered = catch_back_button.contains(mouseX, mouseY);
    var back = catch_back_button.move(0, hovered ? -2 : 0);
    drawPixelPanel(back, hovered ? SUN : CREAM, INK, 4);
    drawFittedText(tr(isTouchScreen ? "back_touch" : "back_esc"), back.center(), back.w - 12);
    drawCoinCounter();
}

function drawFoodRow(foods, left, y) {
    foods.forEach(function (food, number) { blitCentered(getSprite(food, 0, 3), left + number * 44, y); });
}

function drawCatchChoose() {
    drawOverlay(90);
    drawPixelPanel(new Rect(20, 92, 760, 494));
    drawCatchTop(tr("catch_title"));
    drawFittedText(tr("catch_pick"), [400, 124], 700);
    var choices = getParkChoices();
    var page = choices.slice(catch_round.page * catch_per_page, (catch_round.page + 1) * catch_per_page);
    page.forEach(function (pet, index) {
        var card = getCatchCard(index), hovered = card.contains(mouseX, mouseY), lift = hovered ? -3 : 0;
        drawPixelPanel(card.move(0, lift), hovered ? SUN : CREAM, INK, 4);
        var pose = hovered ? "happy" + (Math.floor(ambient_frames / 18) % 2) : "sit0";
        drawCatchPet(pet, pose, false, park_pet_scale, card.centerx(), card.bottom() - 34 + lift, false, false);
        drawFittedText(getPetName(pet), [card.centerx(), card.bottom() - 18 + lift], card.w - 10);
    });
    if (choices.length > catch_per_page) {
        [[catch_previous, "<"], [catch_next, ">"]].forEach(function (pair) {
            drawPixelPanel(pair[0], pair[0].contains(mouseX, mouseY) ? SUN : CREAM, INK, 3);
            drawText(pair[1], 2, pair[0].center());
        });
    }
    // Which food is good and which is bad, before the game starts.
    drawFittedText(tr("catch_good"), [150, 476], 150, FOREST);
    drawFoodRow(CATCH_GOOD, 240, 476);
    drawFittedText(tr("catch_bad_food"), [470, 476], 150, DARK_RED);
    drawFoodRow(CATCH_BAD, 560, 476);
    drawFittedText(tr("catch_hint"), [400, 540], 700, INK);
}

function drawCatchHearts(hearts, left, top, scale) {
    for (var number = 0; number < catch_hearts; number++) {
        var heart = getSprite("heart", 0, scale, number < hearts ? undefined : [110, 110, 110]);
        screen.drawImage(heart, left + number * (heart.width + 6), top);
    }
}

function drawCatchPlay() {
    var round = catch_round;
    screen.drawImage(catchBackgrounds[round.background], 0, 0, WIDTH, HEIGHT);
    round.food.forEach(function (item) { blitCentered(getSprite(item.food, 0, 4), Math.round(item.x), Math.round(item.y)); });
    var pose;
    if (round.hurt) pose = "hurt" + (Math.floor(round.hurt / 10) % 2);
    else if (round.happy) pose = "happy" + Math.floor(round.happy / 8) % 2;
    else if (round.moving) pose = "walk" + Math.floor(ambient_frames / 8) % 2;
    else pose = "sit" + Math.floor(ambient_frames / 30) % 2;
    var shake = round.hurt ? (Math.floor(ambient_frames / 3) % 2 ? 4 : -4) : 0;
    var lift = round.happy > 12 ? 8 : 0;
    screen.fillStyle = css(INK, 50);
    screen.fillRect(Math.round(round.x) - 45, catch_ground - 6, 90, 10);
    drawCatchPet(round.pet, pose, round.left, catch_scale, Math.round(round.x) + shake,
                 catch_ground + 2 * catch_scale - lift, false, round.hurt > 0);
    round.pops.forEach(function (pop) {
        drawText(pop.text, 2, [Math.round(pop.x), Math.round(pop.y) - pop.frames], pop.color, INK);
    });
    // The top: time left, hearts and how much food so far.
    drawCatchTop(tr("catch_count", {n: round.score}));
    drawCatchHearts(round.hearts, 18, 74, 5);
    var bar = new Rect(250, 86, 300, 16), left = 1 - getCatchProgress();
    fillRect(INK, bar.x - 3, bar.y - 3, bar.w + 6, bar.h + 6);
    fillRect(CREAM, bar.x, bar.y, bar.w, bar.h);
    fillRect(left > 0.25 ? LEAF : RED, bar.x, bar.y, Math.round(bar.w * left), bar.h);
    if (round.frames < 0) {
        var number = Math.floor(-round.frames / Math.floor(catch_countdown / 3)) + 1;
        drawText(String(Math.min(3, number)), 8, [400, 280], SUN, INK);
        drawFittedText(tr("catch_hint"), [400, 360], 600, CREAM, 2, INK);
    }
}

function drawCatchDone() {
    var round = catch_round;
    drawCatchPlay();
    drawOverlay(110);
    drawPixelPanel(new Rect(60, 150, 680, 410));
    var banner = new Rect(220, 120, 360, 64);
    drawPixelPanel(banner, round.hearts > 0 ? LEAF : RED);
    drawFittedText(tr(round.hearts > 0 ? "catch_time_up" : "catch_no_hearts"), banner.center(), banner.w - 20, CREAM, 3);
    drawCatchHearts(round.hearts, 400 - Math.floor((3 * 41 - 6) / 2), 198, 5);
    drawFittedText(tr("catch_result", {n: round.score}), [400, 256], 600);
    drawFittedText(tr("catch_reward", {hearts: round.hearts, n: round.earned}), [400, 296], 600, DARK_RED, 3);
    drawWrappedText(tr("catch_tip"), [400, 330], 600, FOREST);
    // The pet cheers when there are hearts left, and sits quietly when there are none.
    var pose = round.hearts > 0 ? "happy" + Math.floor(ambient_frames / 20) % 2 : "sit0";
    drawCatchPet(round.pet, pose, false, park_pet_scale, 400, 474, true, false);
    [[catch_again_button, "quiz_again", LEAF], [catch_change_button, "catch_change", CREAM],
     [catch_leave_button, isTouchScreen ? "back_touch" : "back_esc", CREAM]].forEach(function (entry) {
        var button = entry[0], hovered = button.contains(mouseX, mouseY), shown = button.move(0, hovered ? -3 : 0);
        drawPixelPanel(shown, hovered ? SUN : entry[2], INK, 4);
        drawFittedText(tr(entry[1]), shown.center(), shown.w - 16, hovered || entry[2] === CREAM ? INK : CREAM, 2);
    });
}

function drawCatch() {
    if (catch_round.stage === "choose") drawCatchChoose();
    else if (catch_round.stage === "play") drawCatchPlay();
    else drawCatchDone();
}

function drawMessagePanel() {
    if (link_page_pet !== null) {
        drawLinkPage();
        return;
    }
    if (onCharacterScreen()) {
        if (park_open) drawPark();
        else if (quiz_open) drawQuiz();
        else if (catch_open) drawCatch();
        else if (album_open) drawAlbum();
        else drawCharacterSelection();
        return;
    }
    drawOverlay(120);
    var panel = new Rect(170, 130, 460, 340);
    var ribbon = new Rect(210, 96, 380, 72);
    drawPixelPanel(panel);
    drawPixelPanel(ribbon, game_over ? RED : LEAF);
    var again = tr(isTouchScreen ? "again_touch" : "again");

    if (paused) {
        drawText(tr("paused"), 4, ribbon.center(), CREAM);
        drawText(tr("score_line", {n: score}), 3, [400, 240]);
        drawFittedText(tr("resume"), [400, 310], 440, DARK_RED, 3);
        drawText(tr("r_back"), 2, [400, 400], FOREST);
    } else if (game_over && newly_found_dogs.length) {
        drawText(tr("crashed"), 4, ribbon.center(), CREAM);
        var runMedal = getMedal(score);
        drawFittedText(tr("run_line", {score: score, medal: runMedal === null ? "" : "  ·  " + getMedalName(runMedal),
                                       best: best_score, coins: coins_this_run, record: new_best ? tr("record_note") : ""}),
                       [400, 190], 440);
        drawSunRays(new_dogs_card.inflate(24, 16));
        drawNewDogs();
    } else if (game_over) {
        drawText(tr("crashed"), 4, ribbon.center(), CREAM);
        drawText(tr("run_score", {n: score}), 3, [400, 212]);
        var medal = getMedal(score);
        if (medal !== null) blitCentered(getSprite(MEDALS[medal][2], 0, 3), 578, 212);
        drawText(tr("best_score", {n: best_score}), 3, [400, 262], DARK_RED);
        if (new_best) {
            var record = new Rect(280, 292, 240, 40);
            drawPixelPanel(record, SUN, INK, 0);
            drawText(tr("new_best"), 2, record.center());
        }
        drawFittedText(again, [400, 366], 440, INK, 3);
        drawText(tr("r_back"), 2, [400, 412], FOREST);
        if (score_storage_available) drawFittedText(tr("run_coins", {n: coins_this_run, total: coins}), [400, 442], 440, DARK_RED);
    }

    [["fox", 204], ["rabbit", 596]].forEach(function (item) {
        var sprite = getSprite(item[0], getBlinkFrame(item[1]), 2);
        screen.drawImage(sprite, item[1] - Math.floor(sprite.width / 2), panel.bottom() - 8 - sprite.height);
    });
    if (game_over) drawBoard();
    if (!score_storage_available) drawFittedText(tr("no_save_web"), [400, 444], 440, DARK_RED);
}

// -------------------------
// Steady steps of one sixtieth of a second, whatever the screen's frame rate.
// -------------------------
var step_milliseconds = S.step_milliseconds;
var time_bank = 0.0;
var recent_frame_times = [];

function getStepsDue(elapsedMilliseconds) {
    var limit = step_milliseconds * S.maximum_steps_per_frame;
    recent_frame_times.push(Math.min(elapsedMilliseconds, limit));
    if (recent_frame_times.length > 8) recent_frame_times.shift();
    var average = recent_frame_times.reduce(function (sum, value) { return sum + value; }, 0) / recent_frame_times.length;
    time_bank = Math.min(time_bank + average, limit);
    // A steady 60 Hz screen gets exactly one step per frame.
    if (Math.abs(average - step_milliseconds) < S.steady_frame_tolerance) {
        time_bank = (time_bank - step_milliseconds) * 0.9;
        return 1;
    }
    var steps = Math.floor((time_bank + S.step_tolerance) / step_milliseconds);
    time_bank -= steps * step_milliseconds;
    return steps;
}

function updateGameStep() {
    if (started && !paused) {
        updateBird();
        movePipes(score);
        if (pipes[pipes.length - 1][0].x < WIDTH - pipe_spacing) {
            var newPair = createPipe(score, getGapCenter(pipes[pipes.length - 1]));
            if (!assignDog(newPair)) assignCreature(newPair);
            assignCoin(newPair);
            pipes.push(newPair);
        }
        if (pipes[0][0].right() < 0) {
            pipes.shift();
            score += 1;
            score_pop_frames = 12;
            // Only counted while a friend is still waiting to be found. Counting on with a full
            // album used to make the next new pet appear on the very first pillar.
            if (countKeys(unlocked_pets) < PETS.length && !petLimitReached()) pillars_since_dog += 1;
            updateBestScore();
        }
        collectPassedDogs();
        collectCoins();
        var birdRect = new Rect(Math.floor(bird_x - bird_radius), Math.floor(bird_y - bird_radius),
                                bird_radius * 2, bird_radius * 2);
        for (var i = 0; i < pipes.length; i++) {
            if (birdRect.collides(pipes[i][0]) || birdRect.collides(pipes[i][1])) {
                handleDeath();
                break;
            }
        }
        if (bird_y - bird_radius < 0) handleDeath();
        if (bird_y + bird_radius > HEIGHT) handleDeath();
    }
    updateScenery();
}

function rebuildPhotos() {
    // Photos are shrunk to exactly the screen pixels they cover, so they are made again
    // whenever the window, and so the number of real pixels, changes.
    characterHeads = characterImages.map(function (head) { return scaleCharacterHead(head, S.head_height); });
    characterPortraits = characterImages.map(function (head) { return fitCharacterPortrait(head, 76, 72); });
    pilot_head = characterHeads[selected_character];
    fittedPortraits = {};
    silhouettes = {};
}

function updateResolution() {
    var box = canvas.getBoundingClientRect();
    var wanted = box.width ? box.width / WIDTH * (window.devicePixelRatio || 1) : 1;
    // Quarter steps, so a slowly resized window does not redo the photos every frame.
    wanted = Math.max(1, Math.min(MAXIMUM_RES, Math.ceil(wanted * 4 - 0.05) / 4));
    if (wanted === RES && canvas.width === Math.round(WIDTH * RES)) return;
    RES = wanted;
    canvas.width = Math.round(WIDTH * RES);
    canvas.height = Math.round(HEIGHT * RES);
    rebuildPhotos();
}

function drawFrame() {
    updateResolution();
    // Everything below draws on the 800 x 600 game grid; this scales it to the real pixels.
    screen.setTransform(canvas.width / WIDTH, 0, 0, canvas.height / HEIGHT, 0, 0);
    screen.imageSmoothingEnabled = false;  // Pixel art and pixel letters keep hard edges.
    screen.globalAlpha = 1;
    screen.globalCompositeOperation = "source-over";
    drawBackground();
    drawWeatherBehind();
    // Animals first, so ducking moves them behind their soil blocks.
    drawCreatures();
    drawWaitingDogs();
    pipes.forEach(function (pair) {
        screen.drawImage(getObstacleImage(pair[0].w, pair[0].h, true), pair[0].x, pair[0].y);
        screen.drawImage(getObstacleImage(pair[1].w, pair[1].h, false), pair[1].x, pair[1].y);
    });
    drawCoins();
    drawForeground();
    drawWeatherInFront();
    if (death_started_at !== null) {
        drawDeathEffect();
    } else if (!onCharacterScreen()) {
        drawFlapPuffs();
        drawFlyingPlane();
    }
    if (!onCharacterScreen()) drawHud();
    if (death_started_at !== null) shakeScreen();
    if (paused || (!started && (death_started_at === null || game_over))) drawMessagePanel();
    drawSoundButton();
    if (dev_mode) drawText("DEV", 2, [772, 14], SUN, INK);
}

// -------------------------
// Sound
// -------------------------
// The notes come from the Python game (game_sound.py), so both versions sound the same.
var SOUND_EFFECTS = S.SOUND_EFFECTS, MUSIC = S.MUSIC;
var sound_on = false;  // Every visit starts silent; the speaker button turns sound and music on.
var sound_button = new Rect(WIDTH - 54, 72, 40, 38);  // Under the coins, the same place on every screen.
var audio = null, audioOut = null;
var music_playing = null, musicBus = null, musicNodes = [], musicNextLoop = 0;
var sound_log = [];  // The last sounds played, for the tests.
var NOTE_STEPS = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11};

function getAudio() {
    // Browsers only allow sound after the player touches the page, so it starts on the first tap.
    if (audio) return audio;
    var Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return null;
    try {
        audio = new Context();
        audioOut = audio.createGain();
        audioOut.gain.value = 0.8;
        audioOut.connect(audio.destination);
    } catch (error) {
        audio = null;
    }
    return audio;
}

function notePitch(name) {
    var step = NOTE_STEPS[name[0]] + (name.indexOf("#") >= 0 ? 1 : 0);
    var octave = parseInt(name[name.length - 1], 10);
    return 440 * Math.pow(2, (step + 12 * (octave + 1) - 69) / 12);
}

function getTuneNotes(tune) {
    var eighth = 60 / tune.tempo / 2, notes = [], longest = 0;
    tune.tracks.forEach(function (track) {
        var steps = track.notes.split(/\s+/).filter(function (step) { return step; });
        longest = Math.max(longest, steps.length);
        steps.forEach(function (step, index) {
            if (step === "-" || step === ".") return;
            var held = 1;
            while (index + held < steps.length && steps[index + held] === "-") held += 1;
            var pitch = notePitch(step);
            var sounding = held * eighth * (track.short || 0.9);  // Small "short" values make plucked notes.
            notes.push([index * eighth, sounding, track.wave, pitch, pitch, track.volume]);
        });
    });
    return {notes: notes, length: longest * eighth};
}

function playNote(note, at, bus) {
    // One note: [start, length, wave, start pitch, end pitch, loudness].
    var start = at + note[0], length = note[1], source;
    if (note[2] === "noise") {
        // Rough hiss that changes value at the note's pitch, like the Python version.
        var count = Math.max(1, Math.floor(length * audio.sampleRate));
        var buffer = audio.createBuffer(1, count, audio.sampleRate), data = buffer.getChannelData(0);
        var phase = 0, held = 0;
        for (var i = 0; i < count; i++) {
            var step = (note[3] + (note[4] - note[3]) * i / count) / audio.sampleRate;
            if (Math.floor(phase + step) !== Math.floor(phase)) held = Math.random() * 2 - 1;
            phase += step;
            data[i] = held;
        }
        source = audio.createBufferSource();
        source.buffer = buffer;
    } else {
        source = audio.createOscillator();
        source.type = note[2];
        source.frequency.setValueAtTime(note[3], start);
        source.frequency.linearRampToValueAtTime(note[4], start + length);
    }
    var loudness = audio.createGain();
    loudness.gain.setValueAtTime(0.0001, start);
    loudness.gain.linearRampToValueAtTime(note[5], start + 0.004);  // A quick start, so notes don't click...
    loudness.gain.exponentialRampToValueAtTime(0.0001, start + length);  // ...and a fading end.
    source.connect(loudness);
    loudness.connect(bus);
    source.start(start);
    source.stop(start + length + 0.02);
    return source;
}

function playSound(name) {
    if (!sound_on || !getAudio()) return;
    SOUND_EFFECTS[name].forEach(function (note) { playNote(note, audio.currentTime + 0.01, audioOut); });
    sound_log.push(name);
    if (sound_log.length > 20) sound_log.shift();
}

function getMusicName() {
    // Each place has its own tune; the menu shares the flying tune.
    return park_open ? "park" : catch_open ? "catch" : "flight";
}

function stopMusic() {
    musicNodes.forEach(function (node) { try { node.stop(); } catch (error) {} });
    musicNodes = [];
    if (musicBus) musicBus.disconnect();
    musicBus = null;
}

function updateMusic() {
    var wanted = sound_on && audio ? getMusicName() : null;
    if (wanted !== music_playing) {
        stopMusic();
        music_playing = wanted;
        if (!wanted) return;
        musicBus = audio.createGain();
        musicBus.connect(audioOut);
        musicNextLoop = audio.currentTime + 0.05;
    }
    if (!wanted) return;
    // The whole loop is handed to the browser a little before it is due, so it never stutters.
    if (musicNextLoop < audio.currentTime) musicNextLoop = audio.currentTime + 0.05;
    if (musicNextLoop - audio.currentTime < 1) {
        var tune = getTuneNotes(MUSIC[wanted]);
        musicNodes = musicNodes.filter(function (node) { return node.endsAt > audio.currentTime; });
        tune.notes.forEach(function (note) {
            var node = playNote(note, musicNextLoop, musicBus);
            node.endsAt = musicNextLoop + note[0] + note[1] + 0.05;
            musicNodes.push(node);
        });
        musicNextLoop += tune.length;
    }
}

function toggleSound() {
    sound_on = !sound_on;
    if (sound_on && getAudio() && audio.state === "suspended") audio.resume();
    updateMusic();
}

function drawSoundButton() {
    var hovered = sound_button.contains(mouseX, mouseY) && !isTouchScreen;
    drawPixelPanel(sound_button, hovered ? SUN : CREAM, INK, 3);
    var x = sound_button.x + 8, y = sound_button.centery();
    // A little speaker: a box and a cone.
    screen.fillStyle = css(INK);
    screen.fillRect(x, y - 4, 6, 8);
    screen.beginPath();
    screen.moveTo(x + 5, y - 4); screen.lineTo(x + 12, y - 10); screen.lineTo(x + 12, y + 10); screen.lineTo(x + 5, y + 4);
    screen.closePath();
    screen.fill();
    screen.lineWidth = sound_on ? 2 : 3;
    if (sound_on) {
        screen.strokeStyle = css(INK);
        [4, 9].forEach(function (radius) {  // Sound waves.
            screen.beginPath();
            screen.arc(x + 12, y, radius, -1.1, 1.1);
            screen.stroke();
        });
    } else {
        screen.strokeStyle = css(RED);
        screen.beginPath();
        screen.moveTo(x + 16, y - 6); screen.lineTo(x + 26, y + 6);
        screen.moveTo(x + 26, y - 6); screen.lineTo(x + 16, y + 6);
        screen.stroke();
    }
}

// -------------------------
// Keyboard, mouse and touch
// -------------------------
var events = [];
var isTouchScreen = false;
var GAME_KEYS = {" ": true, "Enter": true, "Escape": true, "ArrowLeft": true, "ArrowRight": true,
                 "ArrowUp": true, "ArrowDown": true};

function normalKey(event) {
    if (event.key === " " || event.key === "Spacebar" || event.code === "Space" || event.keyCode === 32) return " ";
    if (event.key === "Esc") return "Escape";
    if (event.key === "Left") return "ArrowLeft";
    if (event.key === "Right") return "ArrowRight";
    if (event.key && event.key.length === 1) return event.key.toLowerCase();
    return event.key || "";
}

// -------------------------
// The leaderboard: everyone's best runs, kept online in a Supabase table called "scores".
// Anyone may read it or add a score; nobody can change or delete one.
// -------------------------
var LEADERBOARD_URL = S.LEADERBOARD_URL, LEADERBOARD_KEY = S.LEADERBOARD_KEY;
var board_size = S.board_size, board_name_length = S.board_name_length;
var board_rows = [], board_loaded = false, board_offline = false;
var board_entry_open = false, board_sent = false, board_checked = false;
var board_web_refresh_ms = 8000;  // The page asks for the newest board this often, so it stays live.
var BOARD_ID_KEY = "flight_friends_player_id", BOARD_NAME_KEY = "flight_friends_nickname";
var board_player_id = null;

function getBoardPlayerId() {
    // A random name for this browser, made once, so one player keeps one place.
    if (board_player_id) return board_player_id;
    try { board_player_id = window.localStorage.getItem(BOARD_ID_KEY); } catch (error) {}
    if (!board_player_id) {
        board_player_id = "web-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
        try { window.localStorage.setItem(BOARD_ID_KEY, board_player_id); } catch (error) {}
    }
    return board_player_id;
}

function getTopPlayers(rows) {
    // Each player counts once, with their best run: the rows already come highest first.
    var top = [], seen = {};
    rows.forEach(function (row) {
        if (!seen[row.player_id]) {
            seen[row.player_id] = true;
            top.push(row);
        }
    });
    return top.slice(0, board_size);
}

function canJoinBoard(runScore, rows, playerId) {
    // True if this run would earn a place on the board, or a better place for this player.
    if (runScore <= 0 || dev_mode) return false;
    var top = getTopPlayers(rows);
    for (var i = 0; i < top.length; i++) {
        if (top[i].player_id === playerId) return runScore > top[i].score;
    }
    return top.length < board_size || runScore > top[top.length - 1].score;
}

function askBoard(method, path, body) {
    return fetch(LEADERBOARD_URL + "/rest/v1/" + path, {
        method: method,
        headers: {apikey: LEADERBOARD_KEY, "Content-Type": "application/json", Prefer: "return=minimal"},
        body: body === undefined ? undefined : JSON.stringify(body)
    }).then(function (answer) {
        if (!answer.ok) throw new Error("board " + answer.status);
        return answer.text();
    }).then(function (text) { return text ? JSON.parse(text) : null; });
}

function fetchBoard() {
    return askBoard("GET", "scores?select=player_id,name,score&order=score.desc,created_at.asc&limit=200")
        .then(function (rows) {
            board_rows = rows;
            board_loaded = true;
            board_offline = false;
        })["catch"](function () { board_offline = true; });  // No internet: the game carries on.
}

function keepBoardFresh() {
    fetchBoard();
    window.setInterval(function () {
        // Only while someone could be looking at it, and never mid-flight.
        if (!document.hidden && (!started || game_over)) fetchBoard();
    }, board_web_refresh_ms);
}

// The nickname box is a real text field laid over the game, so phones show their keyboard
// and Chinese input works.
var boardForm = document.createElement("form");
var boardInput = document.createElement("input");
var boardButton = document.createElement("button");
boardForm.style.cssText = "position:fixed;display:none;margin:0;padding:0;z-index:5;";
boardInput.maxLength = 8;
boardInput.autocomplete = "off";
boardInput.style.cssText = "box-sizing:border-box;display:block;width:100%;border:2px solid #1c1c24;" +
    "background:#fff;color:#1c1c24;padding:0 6px;font:inherit;text-align:center;outline:none;";
boardButton.type = "submit";
boardButton.style.cssText = "box-sizing:border-box;display:block;margin:6px auto 0;border:3px solid #1c1c24;" +
    "background:#488a42;color:#fff4dc;font:inherit;cursor:pointer;";
boardForm.appendChild(boardInput);
boardForm.appendChild(boardButton);
document.body.appendChild(boardForm);
boardForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendBoardName();
});

function showBoardForm() {
    // Puts the form over the box drawn in the board panel, at the canvas's current size.
    var box = canvas.getBoundingClientRect(), scale = box.width / WIDTH;
    boardForm.style.left = (box.left + 646 * scale) + "px";
    boardForm.style.top = (box.top + 382 * scale) + "px";
    boardForm.style.width = (136 * scale) + "px";
    boardForm.style.fontSize = Math.max(12, Math.round(15 * scale)) + "px";
    boardInput.style.height = (30 * scale) + "px";
    boardInput.placeholder = tr("board_name_hint");
    boardButton.textContent = tr("board_ok");
    boardButton.style.width = (96 * scale) + "px";
    boardButton.style.height = (30 * scale) + "px";
    boardForm.style.display = "block";
}

function hideBoardForm() {
    boardForm.style.display = "none";
    if (document.activeElement === boardInput) boardInput.blur();
}

function checkBoardPlace() {
    // Called once when a run ends: a good enough score opens the nickname box.
    if (board_checked) return;
    board_checked = true;
    if (!board_loaded || !canJoinBoard(score, board_rows, getBoardPlayerId())) return;
    board_entry_open = true;
    var saved = "";
    try { saved = window.localStorage.getItem(BOARD_NAME_KEY) || ""; } catch (error) {}
    boardInput.value = saved.slice(0, board_name_length);
    showBoardForm();
    if (!isTouchScreen) boardInput.focus();  // So space types a letter instead of restarting.
}

function sendBoardName() {
    var name = boardInput.value.split(/\s+/).filter(Boolean).join(" ").slice(0, board_name_length);
    if (!name || !board_entry_open) return;
    try { window.localStorage.setItem(BOARD_NAME_KEY, name); } catch (error) {}
    board_entry_open = false;
    board_sent = true;
    hideBoardForm();
    track("board_join", {score: score});
    askBoard("POST", "scores", {player_id: getBoardPlayerId(), name: name, score: score})
        ["catch"](function () { board_offline = true; })
        .then(fetchBoard);
}

function resetBoardRun() {
    board_entry_open = false;
    board_sent = false;
    board_checked = false;
    hideBoardForm();
}

var BOARD_ROW_FILLS = [[255, 232, 150], [232, 234, 242], [244, 214, 186]];  // Gold, silver, bronze.
var BOARD_FADED = [170, 142, 112];  // Soft brown for empty places and hints.

function drawBoard() {
    // A panel beside the game-over card: the three best players of everyone, each on a
    // little card with a gold, silver or bronze medal.
    var panel = new Rect(636, 130, 156, 340);
    drawPixelPanel(panel);
    var ribbon = new Rect(630, 114, 168, 42);
    drawPixelPanel(ribbon, SUN, INK, 4);
    drawFittedText(tr("board_title"), ribbon.center(), ribbon.w - 16, INK);
    var top = getTopPlayers(board_rows), me = board_loaded ? getBoardPlayerId() : null;
    for (var place = 0; place < board_size; place++) {
        var row = new Rect(644, 166 + place * 64, 140, 60);
        var player = place < top.length ? top[place] : null;
        var mine = player !== null && player.player_id === me;
        drawPixelPanel(row, BOARD_ROW_FILLS[place], mine ? LEAF : INK, 0);
        blitCentered(getSprite(MEDALS[2 - place][2], 0, 2), row.x + 22, row.centery());
        if (player === null) {
            var note = "board_open";
            if (place === 0 && !top.length) note = board_offline ? "board_offline" : board_loaded ? "board_open" : "board_loading";
            drawFittedText(tr(note), [row.x + 88, row.centery()], 100, BOARD_FADED);
            continue;
        }
        drawFittedText(player.name + (mine ? tr("board_you") : ""), [row.x + 88, row.y + 18], 100);
        drawFittedText(tr("board_points", {n: player.score}), [row.x + 88, row.y + 43], 100, DARK_RED);
    }
    if (board_entry_open) {
        drawFittedText(tr("board_made"), [panel.centerx(), 368], panel.w - 12, RED);
        showBoardForm();  // Follows the canvas if the window is resized.
    } else if (board_sent) {
        drawFittedText(tr("board_sent"), [panel.centerx(), 404], panel.w - 12, FOREST);
    } else {
        drawWrappedText(tr("board_hint"), [panel.centerx(), 386], panel.w - 20, BOARD_FADED, 2, 26);
    }
}

window.addEventListener("keydown", function (event) {
    if (event.target === boardInput) return;  // Typing a nickname must not steer the plane.
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    var key = normalKey(event);
    if (GAME_KEYS[key]) event.preventDefault();  // Space and arrows must not scroll the page.
    if (event.repeat) return;  // Holding a key down counts once, like the desktop game.
    events.push({type: "key", key: key});
});

function toGamePosition(clientX, clientY) {
    var box = canvas.getBoundingClientRect();
    return [Math.floor((clientX - box.left) * WIDTH / box.width), Math.floor((clientY - box.top) * HEIGHT / box.height)];
}

function wakeAudio(place) {
    // Phones only let a page start sound inside the touch itself, not a frame later.
    if (!sound_on && !sound_button.contains(place[0], place[1])) return;
    if (getAudio() && audio.state === "suspended") audio.resume();
}

function pointerDown(clientX, clientY) {
    var place = toGamePosition(clientX, clientY);
    wakeAudio(place);
    mouseX = place[0];
    mouseY = place[1];
    events.push({type: "click", x: place[0], y: place[1]});
}

function pointerMove(clientX, clientY) {
    var place = toGamePosition(clientX, clientY);
    mouseX = place[0];
    mouseY = place[1];
    // Only furniture being dragged needs every move; everything else just reads mouseX and mouseY.
    if (park_open && (park_carrying !== null || park_held !== null || park_press !== null)) {
        events.push({type: "move", x: place[0], y: place[1]});
    }
}

function pointerUp(clientX, clientY) {
    // A release outside the game still counts, so dragged furniture is never stuck to the pointer.
    var place = toGamePosition(clientX, clientY);
    wakeAudio(place);
    if (park_open) events.push({type: "up", x: place[0], y: place[1]});
}

if (window.PointerEvent) {
    canvas.addEventListener("pointerdown", function (event) {
        if (event.pointerType === "touch") isTouchScreen = true;
        if (event.button !== undefined && event.button !== 0) return;
        event.preventDefault();
        canvas.focus && canvas.focus();
        pointerDown(event.clientX, event.clientY);
    });
    canvas.addEventListener("pointermove", function (event) {
        pointerMove(event.clientX, event.clientY);
    });
    window.addEventListener("pointerup", function (event) {
        pointerUp(event.clientX, event.clientY);
    });
} else {
    canvas.addEventListener("touchstart", function (event) {
        isTouchScreen = true;
        event.preventDefault();
        var touch = event.changedTouches[0];
        pointerDown(touch.clientX, touch.clientY);
    });
    canvas.addEventListener("mousedown", function (event) {
        if (event.button === 0) pointerDown(event.clientX, event.clientY);
    });
    canvas.addEventListener("mousemove", function (event) {
        pointerMove(event.clientX, event.clientY);
    });
    canvas.addEventListener("touchmove", function (event) {
        event.preventDefault();
        pointerMove(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    });
    window.addEventListener("mouseup", function (event) { pointerUp(event.clientX, event.clientY); });
    window.addEventListener("touchend", function (event) {
        pointerUp(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    });
}

function handleEvent(event) {
    if (event.type === "click" && sound_button.contains(event.x, event.y)) {
        toggleSound();  // Before anything else, so the tap never also flies the plane.
        return;
    }
    if (handleLinkPage(event) || handleCharacterSelection(event)) return;
    if (event.type === "key") {
        if (event.key === "p" && started) {
            paused = !paused;
            paused_plane = paused ? makePlaneSprite(true) : null;
        }
        if (event.key === "c") useNewDog();
        if (event.key === " ") flapOrStart();
        if (event.key === "r") resetGame();
    }
    // A tap or click anywhere in flight works like the space bar, so phones can play too.
    if (event.type === "click" && !paused && !onCharacterScreen()) flapOrStart();
}

// -------------------------
// Loading and the main loop
// -------------------------
function loadImage(name) {
    // A weak connection sometimes drops one file, so each picture gets three tries.
    return new Promise(function (resolve, reject) {
        var tries = 0;
        function attempt() {
            var image = new Image();
            image.onload = function () { resolve(image); };
            image.onerror = function () {
                tries += 1;
                if (tries < 3) setTimeout(attempt, 800 * tries);
                else reject(new Error("Could not download " + name));
            };
            image.src = asset(name) + (tries ? "&try=" + tries : "");
        }
        attempt();
    });
}

function toCanvas(image) {
    var picture = makeCanvas(image.width, image.height);
    picture.getContext("2d").drawImage(image, 0, 0);
    return picture;
}

function joinPhoto(colors, outline) {
    // The colors come from a small JPEG; the outline keeps only the pet's head visible.
    var picture = toCanvas(colors), pen = picture.getContext("2d");
    pen.globalCompositeOperation = "destination-in";
    pen.drawImage(outline, 0, 0, picture.width, picture.height);
    return picture;
}

var lastTick = 0;

function finishCrash() {
    if (death_started_at === null || ticks() - death_started_at < death_duration) return;
    if (!game_over && newly_found_dogs.length) playSound("new_friend");  // The crash card shows the new friend.
    game_over = true;
}

function frame() {
    while (events.length) handleEvent(events.shift());
    var now = ticks();
    var steps = getStepsDue(now - lastTick);
    for (var i = 0; i < steps; i++) updateGameStep();
    lastTick = now;
    finishCrash();
    if (game_over) checkBoardPlace();
    drawFrame();
    updateMusic();
    if (park_open) refreshLikes(false);
    window.requestAnimationFrame(frame);
}

function showProblem(message) {
    var box = document.getElementById("infobox");
    if (box) {
        box.style.display = "block";
        box.textContent = message;
    }
}

function start() {
    var names = ["font.png", "plane.png", "scenery/fog.png", "scenery/blossom.png", "scenery/osmanthus.png", "scenery/autumn.png", "scenery/weather.png"];
    var layers = ["sky", "body", "clouds", "far", "near", "foreground", "rain_clouds"];
    SKY_THEMES.forEach(function (theme, index) {
        layers.forEach(function (layer) { names.push("scenery/" + layer + "_" + index + ".png"); });
    });
    names.push("park/room.png", "park/garden.png", "park/glow.png", "quiz/tracks.png", "quiz/animals.png");
    CATCH_BACKGROUNDS.forEach(function (kind) { names.push("catch/" + kind + ".png"); });
    PETS.forEach(function (pet) {
        names.push(pet.image + ".jpg", pet.image + ".mask.png", pet.image + ".park.png");
    });
    Promise.all(names.map(loadImage)).then(function (images) {
        var byName = {};
        names.forEach(function (name, index) { byName[name] = images[index]; });
        fontSheet = byName["font.png"];
        planeImage = byName["plane.png"];
        fogLayer = byName["scenery/fog.png"];
        blossomLayer = byName["scenery/blossom.png"];
        osmanthusLayer = byName["scenery/osmanthus.png"];
        autumnLayer = byName["scenery/autumn.png"];
        weatherSheet = byName["scenery/weather.png"];
        scenery = SKY_THEMES.map(function (theme, index) {
            var scene = {};
            layers.forEach(function (layer) { scene[layer] = byName["scenery/" + layer + "_" + index + ".png"]; });
            return scene;
        });
        CATCH_BACKGROUNDS.forEach(function (kind) { catchBackgrounds[kind] = byName["catch/" + kind + ".png"]; });
        parkRoom = byName["park/room.png"];
        gardenPicture = byName["park/garden.png"];
        lampGlow = byName["park/glow.png"];
        trackSheet = byName["quiz/tracks.png"];
        quizAnimalSheet = byName["quiz/animals.png"];
        parkSheets = PETS.map(function (pet) { return byName[pet.image + ".park.png"]; });
        characterImages = PETS.map(function (pet) {
            return joinPhoto(byName[pet.image + ".jpg"], byName[pet.image + ".mask.png"]);
        });
        RES = 0;  // Forces the first measurement to make the photos.
        updateResolution();

        try {
            best_score = loadBestScore();
        } catch (error) {
            score_storage_available = false;
        }
        dev_mode = isDevLink();
        loadProgress();
        if (dev_mode) giveEverything();
        showPageLanguage();
        resetGame();
        applyPetLink(getLinkedPetId(), isOwnerLink());
        track("game_ready", {pet: getPilotId(), pets_unlocked: countKeys(unlocked_pets)});
        document.getElementById("infobox").style.display = "none";
        keepBoardFresh();
        lastTick = ticks();
        window.requestAnimationFrame(frame);
    })["catch"](function (error) {
        showProblem(tr("load_failed"));
        if (window.console) console.error(error);
    });
}

// A small window for checking the game from the browser's console.
window.flightFriends = {
    state: function () {
        return {score: score, started: started, game_over: game_over, selected: getPilotId(),
                sound: {on: sound_on, music: music_playing, played: sound_log.slice()},
                unlocked: sortedIds(unlocked_pets), slots: getSlotPets().map(function (pet) { return PETS[pet].id; }),
                link_page: link_page_pet === null ? null : PETS[link_page_pet].id, owned: sortedIds(owned_pets),
                bonus: link_page_bonus.map(function (pet) { return PETS[pet].id; }), weather: weather,
                coins: coins, coins_this_run: coins_this_run, medal_banner: null,
                language: language,
                park: {open: park_open, message: park_message && park_message[0], room: park_room, garden: garden_owned,
                       garden_pets: getShownPets(GARDEN).map(function (pet) { return PETS[pet].id; }),
                       frames: getPlacedFurniture().reduce(function (all, item) { all[item.id] = getFurnitureFrame(item); return all; }, {}),
                       furniture: Object.keys(owned_furniture).sort(), places: furniture_places,
                       carrying: park_carrying, panel: park_panel,
                       hoodie: Object.keys(hoodie_pets).sort(),
                       liked: Object.keys(liked_pets).sort(),
                       likes: park_selected ? getLikeCount(park_selected.pet) : null,
                       shown: getShownPets().map(function (pet) { return PETS[pet].id; }),
                       selected: park_selected ? PETS[park_selected.pet].id : null,
                       card: park_selected ? describeParkAction(park_selected) : null,
                       pets: park_pets.map(function (walker) {
                           function id(pet) { return PETS[pet].id; }
                           return {id: id(walker.pet), action: walker.action, seat: walker.seat, toy: walker.toy,
                                   held: walker === park_held, fall: walker.fall,
                                   partner: walker.partner ? id(walker.partner.pet) : null,
                                   x: Math.round(walker.x), y: Math.round(walker.y),
                                   hit: getParkPetHitRect(walker).center()};
                       })},
                pipes: pipes.length, bird_y: bird_y, velocity: bird_velocity,
                next_gap: (function () {
                    for (var i = 0; i < pipes.length; i++) {
                        if (pipes[i][0].right() > bird_x - bird_radius) return getGapCenter(pipes[i]);
                    }
                    return null;
                })(), best: best_score, pillars: pillars_since_dog,
                found: newly_found_dogs.map(function (pet) { return PETS[pet].id; })};
    },
    difficulty: getDifficulty,
    pillarsNeeded: getPillarsNeeded,
    gapBetweenDogs: getGapBetweenDogs,
    setScore: function (value) { score = value; },
    setCoins: function (value) { coins = value; },
    furnitureCenter: function (id) { return getFurnitureRect(FURNITURE_BY_ID[id]).center(); },
    shopRow: function (index) { return getShopRow(index).center(); },
    choiceCard: function (index) { return getChoiceCard(index).center(); },
    quizChoice: function (index) { return getQuizChoiceButton(index).center(); },
    quiz: function () {
        if (quiz === null) return {open: quiz_open};
        var question = getQuizQuestion();
        return {open: quiz_open, number: quiz.number, done: quiz.done, earned: quiz.earned, right: countQuizRight(),
                answer: question.answer, choices: question.choices.slice(), picked: question.picked, frames: quiz.frames};
    },
    catchGame: function () {
        if (catch_round === null) return {open: catch_open};
        var round = catch_round;
        return {open: catch_open, stage: round.stage, background: round.background, pet: round.pet === null ? null : PETS[round.pet].id,
                x: round.x, hearts: round.hearts, caught: round.caught, score: round.score, frames: round.frames, earned: round.earned,
                food: (round.food || []).map(function (item) { return [item.food, Math.round(item.x), Math.round(item.y)]; }),
                mouth: round.stage === "play" ? getCatchMouth().center() : null};
    },
    catchCard: function (index) { return getCatchCard(index).center(); },
    dropSnack: function (food) {
        // Puts one snack right above the pet's mouth, for testing.
        var mouth = getCatchMouth();
        catch_round.food = [{food: food, x: mouth.centerx(), y: mouth.y - 4, speed: 3}];
        catch_round.next_food = 999;
    },
    buttons: function () {
        return {language: language_button.center(), pets: park_pets_button.center(),
                shop: park_shop_button.center(), park: park_button.center(), quiz: quiz_button.center(), catchGame: catch_button.center(),
                catchAgain: catch_again_button.center(), catchChange: catch_change_button.center(), catchLeave: catch_leave_button.center(),
                next: quiz_next_button.center(), again: quiz_again_button.center(), hoodie: hoodie_button.center(), like: like_button.center(),
                sound: sound_button.center(), room: getRoomArrow().center()};
    },
    up: function (x, y) { handleEvent({type: "up", x: x, y: y}); },
    move: function (x, y) {
        mouseX = x;
        mouseY = y;
        handleEvent({type: "move", x: x, y: y});
    },
    seedPlay: function (a, b) {
        function find(id) {
            return park_pets.filter(function (walker) { return PETS[walker.pet].id === id; })[0];
        }
        startPlay(find(a), find(b));
    },
    setPillars: function (value) { pillars_since_dog = value; },
    setWeather: function (value) { weather = value; next_weather = null; weather_amount = 1; },
    crash: handleDeath,
    key: function (key) { handleEvent({type: "key", key: key}); },
    click: function (x, y) { handleEvent({type: "click", x: x, y: y}); },
    // Runs whole game steps right now, even while the page is in a background tab.
    steps: function (count, autopilot) {
        for (var i = 0; i < count; i++) {
            if (autopilot && started) {
                var gap = window.flightFriends.state().next_gap || 300;
                if (bird_y > gap + 25 && bird_velocity > -1) flapOrStart();
            }
            updateGameStep();
            finishCrash();
            if (game_over) checkBoardPlace();
        }
        drawFrame();
        return window.flightFriends.state();
    },
    flap: flapOrStart
};

if (!window.Promise || !window.requestAnimationFrame || !canvas.getContext) {
    showProblem(tr("old_browser"));
} else {
    start();
}
})();
