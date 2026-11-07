var GAME_DATA = {"settings":{"WIDTH":800,"HEIGHT":600,"INK":[52,32,20],"CREAM":[255,241,208],"SAND":[247,214,158],"RED":[226,52,52],"DARK_RED":[158,28,44],"SUN":[255,200,62],"LEAF":[72,138,66],"FOREST":[38,96,58],"SHADOW":[52,32,20,120],"WEB_SCORE_KEY":"flight_friends_best_score","WEB_PROGRESS_KEY":"flight_friends_pets","bird_x":150,"bird_radius":20,"head_height":48,"pillars_for_first_dogs":[8,25],"pillars_for_whole_album":600,"fewest_pillars_between_dogs":20,"most_pillars_between_dogs":60,"recent_pet_chance":0.25,"album_page_size":8,"owner_bonus_size":1,"head_sway_speed":2,"head_sway_angle":8,"plane_tilt_per_speed":1.5,"gravity":0.25,"jump_strength":-5,"maximum_fall_speed":5,"death_duration":900,"shake_duration":0.55,"shake_strength":18,"pipe_width":80,"starting_pipe_gap":280,"minimum_pipe_gap":160,"gap_reduction_per_point":0.5,"starting_pipe_speed":5.5,"maximum_pipe_speed":8,"speed_increase_per_point":0.01,"starting_shift_margin":0.45,"maximum_shift_margin":0.7,"shift_margin_increase_per_point":0.001,"pipe_spacing":300,"points_per_theme":15,"WEATHERS":["rain","snow","fog","petals"],"weather_chance":0.25,"weather_fade_frames":60,"theme_fade_frames":90,"fewest_obstacles_between_animals":1,"most_obstacles_between_animals":3,"hanging_animal_chance":0.35,"creature_scale":3,"creature_hide_distance":70,"GROUND_CREATURES":["fox","rabbit","hedgehog","frog","squirrel","duckling","raccoon","badger","tortoise","capybara","red_panda","mole"],"HANGING_CREATURES":["bat","sloth","monkey","opossum","hanging_parrot"],"sky_body_center":[600,170],"step_milliseconds":16.666666666666668,"step_tolerance":2,"maximum_steps_per_frame":6,"steady_frame_tolerance":1.2,"SPRITE_COLORS":{"K":[52,32,20],"O":[240,138,52],"o":[204,98,38],"W":[255,244,222],"B":[28,18,18],"P":[244,150,160],"L":[232,226,214],"G":[172,166,158],"T":[214,170,118],"t":[150,100,62],"D":[96,62,42],"Y":[255,214,80],"y":[245,146,50],"E":[116,194,88],"e":[72,144,72],"V":[128,102,168],"v":[88,70,126],"R":[226,72,72],"S":[92,158,204],"s":[250,196,76],"M":[214,132,70],"m":[150,84,42],"A":[214,222,232],"a":[140,152,170]},"BOOM_LETTERS":[["#####.","##..##","##..##","#####.","##..##","##..##","#####."],[".####.","##..##","##..##","##..##","##..##","##..##",".####."],[".####.","##..##","##..##","##..##","##..##","##..##",".####."],["##...##","###.###","#######","##.#.##","##...##","##...##","##...##"],["##","##","##","##","##","..","##"]],"CROWN_PIXELS":["#..#..#","##.#.##","#######","#######"],"RAIN_LAYERS":[{"count":46,"blocks":2,"fall":9,"drift":2,"tail":[112,134,166],"head":[150,174,208]},{"count":22,"blocks":3,"fall":15,"drift":3,"tail":[104,136,184],"head":[206,226,252]}],"RAIN_BLOCK":[2,6],"SPLASH_COLOR":[214,232,252],"SPLASH_SHAPES":[[[-2,-2],[2,-2]],[[-4,-5],[-2,-2],[2,-2],[4,-5]],[[-6,-4],[6,-4]]],"splash_frames":12,"coin_chance":0.5,"coin_radius":18,"coin_pop_frames":30,"COIN_SPIN":[0,1,2,1],"MEDALS":[[20,"铜牌","bronze_medal"],[60,"银牌","silver_medal"],[100,"金牌","gold_medal"]],"medal_banner_frames":150,"FURNITURE":[{"id":"food_bowl","name":"食盆","price":5,"place":[640,560],"seats":[]},{"id":"plant","name":"盆栽","price":8,"place":[744,452],"seats":[]},{"id":"cushion","name":"软垫","price":10,"place":[192,564],"seats":[[9,3]]},{"id":"rug","name":"地毯","price":15,"place":[400,568],"seats":[],"flat":true},{"id":"lamp","name":"落地灯","price":20,"place":[252,452],"seats":[]},{"id":"sofa","name":"小沙发","price":25,"place":[588,452],"seats":[[9,8],[17,8]]},{"id":"cat_tree","name":"猫爬架","price":30,"place":[112,452],"seats":[[7,9],[19,21]]},{"id":"crib","name":"婴儿床","price":40,"place":[400,452],"seats":[[16,9]]}],"park_scale":4,"park_floor":[70,730,486,584],"park_walk_speed":1.2,"park_seat_chance":0.45,"park_hop_frames":30,"park_message_frames":150},"sprites":{"fox":[["..K..........K..",".KOK........KOK.",".KOOK......KOOK.",".KOBOKKKKKKOBOK.",".KOOOOOOOOOOOOK.","KOOOOOOOOOOOOOOK","KOOBBOOOOOOBBOOK","KWWOOOOOOOOOOWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","...KOOWWWWOOK...","...KOOWWWWOOKKK.","...KOOOOOOOOKOOK","...KOKKOOKKOKOWK","...KKK.KK.KKKKK."],["..K..........K..",".KOK........KOK.",".KOOK......KOOK.",".KOBOKKKKKKOBOK.",".KOOOOOOOOOOOOK.","KOOOOOOOOOOOOOOK","KOOKKOOOOOOKKOOK","KWWOOOOOOOOOOWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","...KOOWWWWOOK...","...KOOWWWWOOKKK.","...KOOOOOOOOKOOK","...KOKKOOKKOKOWK","...KKK.KK.KKKKK."]],"rabbit":[["..KK......KK..",".KLLK....KLLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLLKKKKKKLLK.","KLLLLLLLLLLLLK","KLLBBLLLLBBLLK","KPPLLLPPLLLPPK",".KLLLLKKLLLLK.","..KKLLLLLLKK..","..KLLWWWWLLK..","..KLLWWWWLLKKK","..KLKLLLLKLKWK","..KKK.KK.KKKK."],["..KK......KK..",".KLLK....KLLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLPK....KPLK.",".KLLKKKKKKLLK.","KLLLLLLLLLLLLK","KLLKKLLLLKKLLK","KPPLLLPPLLLPPK",".KLLLLKKLLLLK.","..KKLLLLLLKK..","..KLLWWWWLLK..","..KLLWWWWLLKKK","..KLKLLLLKLKWK","..KKK.KK.KKKK."]],"hedgehog":[["...K..K..K..K.....","..KDKKDKKDKKDK....",".KDDtDDtDDtDDDK...","KDtDDtDDtDDtDDDK..","KDDtDDtDDtDDKKKK..","KDtDDtDDtDKTTTTTK.","KDDtDDtDDKTTBBTTTK","KDtDDtDDKTTTTTTTBK",".KDDDDDKTTPTTTTTK.","..KTTKKKKTTKKKKK..","..KKK....KKK......"],["...K..K..K..K.....","..KDKKDKKDKKDK....",".KDDtDDtDDtDDDK...","KDtDDtDDtDDtDDDK..","KDDtDDtDDtDDKKKK..","KDtDDtDDtDKTTTTTK.","KDDtDDtDDKTTKKTTTK","KDtDDtDDKTTTTTTTBK",".KDDDDDKTTPTTTTTK.","..KTTKKKKTTKKKKK..","..KKK....KKK......"]],"frog":[["...KKK....KKK...","..KWWWK..KWWWK..","..KWBBK..KBBWK..",".KEEEEKKKKEEEEK.","KEEEEEEEEEEEEEEK","KPPEEEEEEEEEEPPK","KEEKEEEEEEEEKEEK","KEEEKKKKKKKKEEEK",".KEEEeeeeeeEEEK.","KeeKEEEKKEEEKeeK","KKKKKKK..KKKKKKK"],["...KKK....KKK...","..KWWWK..KWWWK..","..KKKKK..KKKKK..",".KEEEEKKKKEEEEK.","KEEEEEEEEEEEEEEK","KPPEEEEEEEEEEPPK","KEEKEEEEEEEEKEEK","KEEEKKKKKKKKEEEK",".KEEEeeeeeeEEEK.","KeeKEEEKKEEEKeeK","KKKKKKK..KKKKKKK"]],"squirrel":[["...........KKKK.","..K..K....KtttTK",".KtKKtK..KtttttK",".KttttK..KttKKtK","KtBBttK..KtK.KtK","KtttttK..KKK.KtK","KPTTtK......KttK",".KKTttKKKKKKttK.","..KTTttttttttK..","..KTTTttttttK...","..KTKTTtttttK...","..KKKTTtKKttK...","....KKKK.KKKK..."],["...........KKKK.","..K..K....KtttTK",".KtKKtK..KtttttK",".KttttK..KttKKtK","KtKKttK..KtK.KtK","KtttttK..KKK.KtK","KPTTtK......KttK",".KKTttKKKKKKttK.","..KTTttttttttK..","..KTTTttttttK...","..KTKTTtttttK...","..KKKTTtKKttK...","....KKKK.KKKK..."]],"duckling":[["....KKKKKK....","...KYYYYYYK...","..KYYYYYYYYK..","..KYBBYYBBYK..","..KYYKyyKYYK..","..KPYYyyYYPK..",".KYYYYYYYYYYK.","KYYKYYYYYYKYYK","KYK.KYYYYK.KYK",".K..KYYYYK..K.","....KKKKKK....","....yyK.yyK...","...yyyK.yyyK.."],["....KKKKKK....","...KYYYYYYK...","..KYYYYYYYYK..","..KYKKYYKKYK..","..KYYKyyKYYK..","..KPYYyyYYPK..",".KYYYYYYYYYYK.","KYYKYYYYYYKYYK","KYK.KYYYYK.KYK",".K..KYYYYK..K.","....KKKKKK....","....yyK.yyK...","...yyyK.yyyK.."]],"bat":[["....K....K....","....K....K....","...KVVVVVVK...","..KVvVVVVvVK..",".KVvVVVVVVvVK.","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK",".KVvVVVVVVvVK.","..KKVVVVVVKK..","...KWBWWBWK...","...KWWPPWWK...","..KVKVVVVKVK..","..KK.KKKK.KK.."],["....K....K....","....K....K....","...KVVVVVVK...","..KVvVVVVvVK..",".KVvVVVVVVvVK.","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK","KVvVVVVVVVVvVK",".KVvVVVVVVvVK.","..KKVVVVVVKK..","...KWKWWKWK...","...KWWPPWWK...","..KVKVVVVKVK..","..KK.KKKK.KK.."]],"sloth":[["..KK........KK..","..KtK......KtK..","..KtK......KtK..","..KtKKKKKKKKtK..","..KttttttttttK..",".KttTTTTTTTTttK.",".KtTDDTTTTDDTtK.",".KtTDBTTTTBDTtK.",".KtTTTTKKTTTTtK.",".KttTPTTTTPTttK.","..KtttTTTTtttK..","..KttttttttttK..","...KttttttttK...","....KKttttKK....","......KKKK......"],["..KK........KK..","..KtK......KtK..","..KtK......KtK..","..KtKKKKKKKKtK..","..KttttttttttK..",".KttTTTTTTTTttK.",".KtTDDTTTTDDTtK.",".KtTDDTTTTDDTtK.",".KtTTTTKKTTTTtK.",".KttTPTTTTPTttK.","..KtttTTTTtttK..","..KttttttttttK..","...KttttttttK...","....KKttttKK....","......KKKK......"]],"raccoon":[["..KK........KK..",".KGGK......KGGK.",".KGGKKKKKKKKGGK.","KGGGGGGGGGGGGGGK","KGKKKKGGGGKKKKGK","KKKBWKKGGKKWBKKK","KGKKKKWWWWKKKKGK",".KGGWWWBBWWWGGK.","..KKKWWWWWWKKK..","...KGGGGGGGGK...","...KGGLLLLGGKKK.","...KGKGGGGKGKDGK","...KKK.KK.KKKKK."],["..KK........KK..",".KGGK......KGGK.",".KGGKKKKKKKKGGK.","KGGGGGGGGGGGGGGK","KGKKKKGGGGKKKKGK","KKKKKKKGGKKKKKKK","KGKKKKWWWWKKKKGK",".KGGWWWBBWWWGGK.","..KKKWWWWWWKKK..","...KGGGGGGGGK...","...KGGLLLLGGKKK.","...KGKGGGGKGKDGK","...KKK.KK.KKKKK."]],"badger":[["...KK......KK...","..KWWKKKKKKWWK..",".KWWKKWWWWKKWWK.",".KWKKKWWWWKKKWK.","KWWKWKWWWWKWKWWK","KWWKKKWWWWKKKWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","..KGGGGGGGGGGK..","..KGGGGGGGGGGK..","..KGKKGGGGKKGK..","..KKK.KKKK.KKK.."],["...KK......KK...","..KWWKKKKKKWWK..",".KWWKKWWWWKKWWK.",".KWKKKWWWWKKKWK.","KWWKKKWWWWKKKWWK","KWWKKKWWWWKKKWWK",".KWWWWWBBWWWWWK.","..KKWWWWWWWWKK..","..KGGGGGGGGGGK..","..KGGGGGGGGGGK..","..KGKKGGGGKKGK..","..KKK.KKKK.KKK.."]],"tortoise":[["......KKKKKK........","....KKEeEEeEKK......","...KeEEKEEKEEeK.....","..KEEeEEKKEEeEEK.KK.",".KeEEKEEeEEKEEeEKTTK",".KEeEEKKEEKKEEeEKTBK","KEEEEEEEEEEEEEEEETTK","KKKKKKKKKKKKKKKKKTK.",".KTTK.......KTTK.K..",".KKKK.......KKKK...."],["......KKKKKK........","....KKEeEEeEKK......","...KeEEKEEKEEeK.....","..KEEeEEKKEEeEEK.KK.",".KeEEKEEeEEKEEeEKTTK",".KEeEEKKEEKKEEeEKTKK","KEEEEEEEEEEEEEEEETTK","KKKKKKKKKKKKKKKKKTK.",".KTTK.......KTTK.K..",".KKKK.......KKKK...."]],"capybara":[["..............KK....","....KKKKKKKKKKttK...","...KTTTTTTTTTTTTTK..","..KTTTTTTTTTTTTBBTK.","..KTTTTTTTTTTTTBBTTK","..KtTTTTTTTTTTTTTTDK","..KttTTTTTTTTTTTTTDK","...KtttttttTTTTTTKK.","...KttKKKKKKKKttK...","...KtK........KtK...","...KKK........KKK..."],["..............KK....","....KKKKKKKKKKttK...","...KTTTTTTTTTTTTTK..","..KTTTTTTTTTTTTTTTK.","..KTTTTTTTTTTTTKKTTK","..KtTTTTTTTTTTTTTTDK","..KttTTTTTTTTTTTTTDK","...KtttttttTTTTTTKK.","...KttKKKKKKKKttK...","...KtK........KtK...","...KKK........KKK..."]],"red_panda":[["..KK........KK..",".KWWK......KWWK.",".KOoKKKKKKKKoOK.","KooooooooooooooK","KoWWooooooooWWoK","KWBBWooooooWBBWK","KWWWWWWBBWWWWWWK",".KWWWWWWWWWWWWK.","..KKooooooooKK..","...KDDooooDDKKK.","...KDDooooDDoWK.","...KDKDDDDKDKoWK","...KKK.KK.KKKKK."],["..KK........KK..",".KWWK......KWWK.",".KOoKKKKKKKKoOK.","KooooooooooooooK","KoWWooooooooWWoK","KWKKWooooooWKKWK","KWWWWWWBBWWWWWWK",".KWWWWWWWWWWWWK.","..KKooooooooKK..","...KDDooooDDKKK.","...KDDooooDDoWK.","...KDKDDDDKDKoWK","...KKK.KK.KKKKK."]],"mole":[["....KKKKKK....","...KDDDDDDK...","..KDDDDDDDDK..","..KDBDDDDBDK..",".KDDDDPPDDDDK.",".KDDDKPPKDDDK.","KDDDDDDDDDDDDK","KWWKDDDDDDKWWK","KWWKDDDDDDKWWK","KKKKKKKKKKKKKK"],["....KKKKKK....","...KDDDDDDK...","..KDDDDDDDDK..","..KDKDDDDKDK..",".KDDDDPPDDDDK.",".KDDDKPPKDDDK.","KDDDDDDDDDDDDK","KWWKDDDDDDKWWK","KWWKDDDDDDKWWK","KKKKKKKKKKKKKK"]],"monkey":[["...KtK....KtK...","...KtK....KtK...","...KtK....KtK...","...KttKKKKttK...","...KttttttttK...","..KKttttttttKK..",".KTtKtTTTTtKtTK.",".KTtKTBTTBTKtTK.","..KKTTTTTTTTKK..","...KTTKKKKTTK...","...KTTTPPTTTK...","....KtttttK.....","...KttttttK.KK..","...KttKKttKKtK..","...KKK..KKK.KK.."],["...KtK....KtK...","...KtK....KtK...","...KtK....KtK...","...KttKKKKttK...","...KttttttttK...","..KKttttttttKK..",".KTtKtTTTTtKtTK.",".KTtKTKTTKTKtTK.","..KKTTTTTTTTKK..","...KTTKKKKTTK...","...KTTTPPTTTK...","....KtttttK.....","...KttttttK.KK..","...KttKKttKKtK..","...KKK..KKK.KK.."]],"opossum":[["......KK......","......KPK.....","......KPK.....",".....KGGK.....","....KGGGGK....","...KGGGGGGK...","..KGGGGGGGGK..","..KGGLGGLGGK..","..KGGGGGGGGK..","...KGGGGGGK...","..KPKLLLLKPK..","..KPLLLLLLPK..","...KLBLLBLK...","...KLLLLLLK...","....KLPPLK....",".....KKKK....."],["......KK......","......KPK.....","......KPK.....",".....KGGK.....","....KGGGGK....","...KGGGGGGK...","..KGGGGGGGGK..","..KGGLGGLGGK..","..KGGGGGGGGK..","...KGGGGGGK...","..KPKLLLLKPK..","..KPLLLLLLPK..","...KLKLLKLK...","...KLLLLLLK...","....KLPPLK....",".....KKKK....."]],"hanging_parrot":[["...K....K...","...K....K...","..KRRRRRRK..","..KRRRRRRK..",".KEEEEEEEEK.",".KEeEEEEeEK.",".KEeEEEEeEK.",".KEEEEEEEEK.",".KeEEEEEEeK.","..KEEEEEEK..","..KEBEEBEK..","..KEEEEEEK..","...KEyyEK...","....KyyK....",".....KK....."],["...K....K...","...K....K...","..KRRRRRRK..","..KRRRRRRK..",".KEEEEEEEEK.",".KEeEEEEeEK.",".KEeEEEEeEK.",".KEEEEEEEEK.",".KeEEEEEEeK.","..KEEEEEEK..","..KEKEEKEK..","..KEEEEEEK..","...KEyyEK...","....KyyK....",".....KK....."]],"running_fox":[["................K..K..","...............KOKKOK.","KKK............KOOOOOK","KWOKKKKKKKKKKKKOOBOOOB","KWOOOOOOOOOOOOOOOOOWWK",".KKOOOOOOOOOOOOOOWWKK.","...KOOOOOOOOOOOOWKK...","...KOOKOOOOOOKOOK.....","..KOKK.KOK.KOK.KOK....","..KK....KK..KK..KK...."],["................K..K..","...............KOKKOK.","KKK............KOOOOOK","KWOKKKKKKKKKKKKOOBOOOB","KWOOOOOOOOOOOOOOOOOWWK",".KKOOOOOOOOOOOOOOWWKK.","...KOOOOOOOOOOOOWKK...","...KOOKOOOOOOKOOK.....","....KOK..KOKOK..KOK...","....KK....KKK....KK..."]],"deer":[["..................K..K..","..................KK.K..","...................KKK..","..................KttK.K","..................KtttKK","..................KtBttK","..................KttWWK",".KK...............KtttK.","KWWKKKKKKKKKKKKKKKtttK..","KWtttttttttttttttttttK..",".KtWtttWtttWtttttttttK..",".KtttWtttWtttttttttWWK..",".KttttttttttttttttWWK...",".KtttKKKKKKKKKKKtttK....","..KtK..........KtK......","..KtK..........KtK......","..KtK..........KtK......","..KKK..........KKK......"]],"bird":[["..KK.....KK..",".KRRK...KRRK.","..KRRK.KRRK..","...KRRKRRK.K.","....KRRRKKYK.",".....KKK..K.."],[".............",".............","...KKK...K...","..KRRRKKKYK..",".KRRRRRRK.K..","KRRK.KRRK...."]],"butterfly":[["KK.K.KK","KsK.KsK","KssKssK",".KsKsK.","KsKKKsK","KK...KK"],["...K...","..KsK..",".KssK..","..KsK..",".KsKK..",".KK...."]],"coin":[["....KKKK....","..KKYYYYKK..",".KWWYYYYYYK.",".KWYDYYDYYK.","KYDYDYYDYDyK","KYDYYYYYYDyK","KYYYYDDYYYyK","KYYYDDDDYYyK","KYYYDDDDYYyK",".KYYYDDYYyK.","..KKyyyyKK..","....KKKK...."],["....KKKK....","...KYYYYK...","...KWYYyK...","...KWDYyK...","...KYDDyK...","...KYYDyK...","...KYDDyK...","...KDDDyK...","...KYDDyK...","...KYYYyK...","...KyyyyK...","....KKKK...."],[".....KK.....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....","....KYyK....",".....KK....."]],"bronze_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KMMMMMMK.","KMWMMMMmmK","KMWMMMMmmK","KMMMMMMmmK","KMMMMMmmmK",".KmmmmmmK.","..KKKKKK.."]],"silver_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KAAAAAAK.","KAWAAAAaaK","KAWAAAAaaK","KAAAAAAaaK","KAAAAAaaaK",".KaaaaaaK.","..KKKKKK.."]],"gold_medal":[[".KKK..KKK.",".KRK..KSK.","..KRKKSK..","..KRKKSK..","...KKKK...","..KKKKKK..",".KYYYYYYK.","KYWYYYYyyK","KYWYYYYyyK","KYYYYYYyyK","KYYYYYyyyK",".KyyyyyyK.","..KKKKKK.."]],"cat_tree":[["..........................","..........................","..........................","..........................","..........................","..........................","..........................","..........................","KKKKKKKKKKKKKK............","KVVVVVVVVVVVVK............","KVVVVVVVVVVVVK............","KVVVVVVVVVVVVK............","KVVVVVVVVVVVVK............","KKKKKKKKKKKKKK............",".....KTTK.................",".....KttK.................",".....KTTK.................",".....KTTK.................",".....KttK.................",".....KTTK.................",".....KTTK...KKKKKKKKKKKKKK",".....KttK...KVVVVVVVVVVVVK",".....KTTK...KVVVVVVVVVVVVK",".....KTTK...KVVVVVVVVVVVVK",".....KttK...KVVVVVVVVVVVVK",".....KTTK...KKKKKKKKKKKKKK",".....KTTK.........KTTK.K..",".....KttK.........KttK.K..",".....KTTK.........KTTK.K..",".....KTTK.........KTTK.K..",".....KttK.........KttKKKKK",".....KTTK.........KTTKRRRK",".....KTTK.........KTTKRRRK",".....KttK.........KttKRRRK",".....KTTK.........KTTKKKKK",".....KTTK.........KTTK....",".....KttK.........KttK....",".....KTTK.........KTTK....",".....KTTK.........KTTK....",".....KttK.........KttK....","KKKKKKKKKKKKKKKKKKKKKKKKKK","KttttttttttttttttttttttttK","KttttttttttttttttttttttttK","KttttttttttttttttttttttttK","KttttttttttttttttttttttttK","KKKKKKKKKKKKKKKKKKKKKKKKKK"]],"crib":[["KKK..........................KKK","KtK..........................KtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtK...tt..tt..tt..tt..tt..tt.KtK","KtKKKKttKKttKKttKKttKKttKKttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKPPttPPttPPttPPttPPttPPttKKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKTTTTTTTTTTTTTTTTTTTTTTTTTTKtK","KtKKKKKKKKKKKKKKKKKKKKKKKKKKKKtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KtK..........................KtK","KKK..........................KKK"]],"sofa":[["..KKKKKKKKKKKKKKKKKKKKKK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","..KOOOOOOOOOOoOOOOOOOOOK..","KKKKKOOOOOOOOoOOOOOOOKKKKK","KOOOKOOOOOOOOoOOOOOOOKOOOK","KOOOKKKKKKKKKKKKKKKKKKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKOOOOOOOOOOOOOOOOKOOOK","KOOOKKKKKKKKKKKKKKKKKKOOOK","KKKKKKKKKKKKKKKKKKKKKKKKKK","KKooooooooooooooooooooooKK",".KKKKKKKKKKKKKKKKKKKKKKKK.","..DD..................DD.."]],"lamp":[[".KKKKKKKK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KYYYYYYK.",".KyyyyyyK.",".KKKKKKKK.","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","....DD....","..KKKKKK..","..KttttK..","..KttttK..","..KKKKKK.."]],"cushion":[["KKKKKKKKKKKKKKKKKK","KSSSSSSSSSSSSSSSSK","KSSKKKKKKKKKKKKSSK","KSSKWWWWWWWWWWKSSK","KSSKKKKKKKKKKKKSSK","KSSSSSSSSSSSSSSSSK","KKKKKKKKKKKKKKKKKK"]],"plant":[[".....KK.....","....KEEK....",".KK.KEeK.KK.","KEEKKEeKKEEK","KEeEKEeKEeEK",".KEeEEeEEeK.","..KKEEeEKK..","....KeEK....","..KKKKKKKK..","..KOOOOOOK..","..KKKKKKKK..","...KOOOOK...","...KOooOK...","...KOooOK...","....KKKK...."]],"food_bowl":[["..tDtTDt..","KKKKKKKKKK","KRRRRRRRRK",".KRRWRRRK.","..KKKKKK.."]],"rug":[["............KKKKKKKKKKKKKKKKKKKK............","......KKKKWWWWPPPPPPPPPPPPPPPPWWWWKKKK......","...KKKWWWPPPPPPPPRRRRRRRRRRPPPPPPPPWWWKKK...",".KKWWWPPPPPPRRRRRRRRRRRRRRRRRRRRPPPPPPWWWKK.","KKWWWPPPPPRRRRRRRRRRRRRRRRRRRRRRRRPPPPPWWWKK","KKWWWPPPPPRRRRRRRRRRRRRRRRRRRRRRRRPPPPPWWWKK",".KKWWWPPPPPPRRRRRRRRRRRRRRRRRRRRPPPPPPWWWKK.","...KKKWWWPPPPPPPPRRRRRRRRRRPPPPPPPPWWWKKK...","......KKKKWWWWPPPPPPPPPPPPPPPPWWWWKKKK......","............KKKKKKKKKKKKKKKKKKKK............"]],"house":[[".......KK.......","......KRRK......",".....KRRRRK.....","....KRRRRRRK....","...KRRRRRRRRK...","..KRRRRRRRRRRK..",".KKKKKKKKKKKKKK.","..KWWWWWWWWWWK..","..KWKKKWWKKKWK..","..KWKSKWWKtKWK..","..KWKKKWWKtKWK..","..KWWWWWWKtKWK..","..KWWWWWWKyKWK..","..KKKKKKKKKKKK.."]],"heart":[[".KK.KK.","KRRKRRK","KRWRRRK",".KRRRK.","..KRK..","...K..."]]},"sky_themes":[{"sky":[[132,208,186],[214,234,184],[255,240,190]],"body":[255,226,112],"stars":0,"cloud":[255,255,244],"far":[128,176,158],"snow":[238,246,228],"near":[92,164,84],"tree":[50,118,70],"tint":null,"ground":[72,142,70],"rain_cloud":[128,136,152]},{"sky":[[236,120,92],[255,176,104],[255,226,150]],"body":[255,240,170],"stars":0,"cloud":[255,214,176],"far":[176,106,104],"snow":[255,220,190],"near":[130,132,62],"tree":[78,88,48],"tint":[255,214,176],"ground":[104,108,52],"rain_cloud":[150,126,132]},{"sky":[[14,22,58],[28,46,88],[54,88,104]],"body":[245,240,210],"stars":90,"cloud":[66,84,122],"far":[36,56,92],"snow":[120,142,170],"near":[28,72,66],"tree":[14,46,50],"tint":[110,130,176],"ground":[20,54,54],"rain_cloud":[46,56,86]}],"pets":[{"id":"shuaige","name":"帅哥","intro":["爱动物的","人类"],"founder":true,"starter":true,"image":"pets/shuaige"},{"id":"erbao","name":"二宝","intro":["爱吃醋的","贵宾"],"founder":true,"starter":true,"image":"pets/erbao"},{"id":"sherry","name":"Sherry","intro":["淡淡的","雪纳瑞"],"founder":true,"starter":false,"image":"pets/sherry"},{"id":"jiuyue","name":"九月","intro":["调皮的","贵宾"],"founder":true,"starter":false,"image":"pets/jiuyue"},{"id":"jiaoquan","name":"焦圈","intro":["爱打呼噜","的法斗"],"founder":true,"starter":false,"image":"pets/jiaoquan"},{"id":"duoli","name":"多莉","intro":["毛茸茸的","贵宾"],"founder":true,"starter":false,"image":"pets/duoli"},{"id":"celina","name":"Celina","intro":["爱哼唧的","腊肠"],"founder":true,"starter":false,"image":"pets/celina"},{"id":"guaiguai","name":"乖乖","intro":["贪吃","的比熊"],"founder":false,"starter":false,"image":"pets/guaiguai"},{"id":"xunshan","name":"巡山","intro":["傲娇","的暹罗"],"founder":false,"starter":false,"image":"pets/xunshan"},{"id":"xiaobuding","name":"小布丁","intro":["爱扑人的","拉布拉多"],"founder":false,"starter":false,"image":"pets/xiaobuding"}],"form_url":"https://v.wjx.cn/vm/td6GJBG.aspx","font":{"height":16,"letters":{" ":[0,0,6],"!":[6,0,4],"\"":[10,0,6],"#":[16,0,7],"$":[23,0,6],"%":[29,0,8],"&":[37,0,7],"'":[44,0,4],"(":[48,0,6],")":[54,0,6],"*":[60,0,6],"+":[66,0,6],",":[72,0,4],"-":[76,0,6],".":[82,0,4],"/":[86,0,6],"0":[92,0,6],"1":[98,0,6],"2":[104,0,6],"3":[110,0,6],"4":[116,0,6],"5":[122,0,6],"6":[128,0,6],"7":[134,0,6],"8":[140,0,6],"9":[146,0,6],":":[152,0,4],";":[156,0,4],"<":[160,0,5],"=":[165,0,6],">":[171,0,5],"?":[176,0,6],"A":[182,0,8],"B":[190,0,7],"C":[197,0,7],"D":[204,0,7],"E":[211,0,7],"F":[218,0,7],"G":[225,0,7],"H":[232,0,7],"I":[239,0,4],"J":[243,0,6],"K":[249,0,7],"L":[256,0,6],"M":[262,0,8],"N":[270,0,7],"O":[277,0,8],"P":[285,0,7],"Q":[292,0,8],"R":[300,0,7],"S":[307,0,7],"T":[314,0,8],"U":[322,0,7],"V":[329,0,8],"W":[337,0,10],"X":[347,0,8],"Y":[355,0,8],"[":[363,0,6],"\\":[369,0,6],"]":[375,0,6],"^":[381,0,6],"_":[387,0,6],"a":[393,0,6],"b":[399,0,6],"c":[405,0,6],"d":[411,0,6],"e":[417,0,6],"f":[423,0,5],"g":[428,0,6],"h":[434,0,6],"i":[440,0,4],"j":[444,0,4],"k":[448,0,6],"l":[454,0,4],"m":[458,0,8],"n":[466,0,6],"o":[472,0,6],"p":[478,0,6],"q":[484,0,6],"r":[490,0,5],"s":[495,0,6],"t":[501,0,5],"u":[506,0,6],"v":[512,0,6],"w":[518,0,8],"x":[526,0,6],"y":[532,0,6],"z":[538,0,6],"{":[544,0,7],"|":[551,0,4],"}":[555,0,7],"·":[562,0,12],"“":[574,0,12],"”":[586,0,12],"、":[598,0,12],"。":[610,0,12],"《":[622,0,12],"》":[634,0,12],"一":[646,0,12],"丁":[658,0,12],"上":[670,0,12],"下":[682,0,12],"专":[694,0,12],"个":[706,0,12],"中":[718,0,12],"主":[730,0,12],"乐":[742,0,12],"乖":[754,0,12],"九":[766,0,12],"也":[778,0,12],"了":[790,0,12],"二":[802,0,12],"人":[814,0,12],"仅":[826,0,12],"们":[838,0,12],"件":[850,0,12],"伙":[862,0,12],"会":[874,0,12],"传":[886,0,12],"伴":[898,0,12],"位":[910,0,12],"你":[922,0,12],"保":[934,0,12],"停":[946,0,12],"傲":[958,0,12],"像":[970,0,12],"儿":[982,0,12],"入":[994,0,12],"全":[1006,0,12],"共":[0,16,12],"关":[12,16,12],"具":[24,16,12],"再":[36,16,12],"冠":[48,16,12],"出":[60,16,12],"击":[72,16,12],"分":[84,16,12],"到":[96,16,12],"刷":[108,16,12],"前":[120,16,12],"加":[132,16,12],"动":[144,16,12],"励":[156,16,12],"升":[168,16,12],"半":[180,16,12],"卡":[192,16,12],"去":[204,16,12],"发":[216,16,12],"只":[228,16,12],"可":[240,16,12],"吃":[252,16,12],"吧":[264,16,12],"呼":[276,16,12],"和":[288,16,12],"哥":[300,16,12],"哼":[312,16,12],"唧":[324,16,12],"啦":[336,16,12],"噜":[348,16,12],"器":[360,16,12],"回":[372,16,12],"园":[384,16,12],"图":[396,16,12],"圈":[408,16,12],"土":[420,16,12],"在":[432,16,12],"地":[444,16,12],"块":[456,16,12],"坠":[468,16,12],"垫":[480,16,12],"外":[492,16,12],"多":[504,16,12],"太":[516,16,12],"失":[528,16,12],"奖":[540,16,12],"好":[552,16,12],"始":[564,16,12],"娇":[576,16,12],"婴":[588,16,12],"子":[600,16,12],"字":[612,16,12],"它":[624,16,12],"宝":[636,16,12],"宠":[648,16,12],"家":[660,16,12],"宾":[672,16,12],"小":[684,16,12],"就":[696,16,12],"局":[708,16,12],"屋":[720,16,12],"屏":[732,16,12],"属":[744,16,12],"山":[756,16,12],"巡":[768,16,12],"差":[780,16,12],"已":[792,16,12],"币":[804,16,12],"布":[816,16,12],"帅":[828,16,12],"带":[840,16,12],"幕":[852,16,12],"床":[864,16,12],"开":[876,16,12],"录":[888,16,12],"得":[900,16,12],"心":[912,16,12],"想":[924,16,12],"戏":[936,16,12],"成":[948,16,12],"我":[960,16,12],"或":[972,16,12],"战":[984,16,12],"戴":[996,16,12],"扑":[1008,16,12],"打":[0,32,12],"把":[12,32,12],"拉":[24,32,12],"择":[36,32,12],"按":[48,32,12],"挑":[60,32,12],"换":[72,32,12],"接":[84,32,12],"控":[96,32,12],"搭":[108,32,12],"操":[120,32,12],"收":[132,32,12],"放":[144,32,12],"数":[156,32,12],"文":[168,32,12],"斗":[180,32,12],"新":[192,32,12],"旧":[204,32,12],"时":[216,32,12],"明":[228,32,12],"是":[240,32,12],"暂":[252,32,12],"暹":[264,32,12],"最":[276,32,12],"月":[288,32,12],"有":[300,32,12],"本":[312,32,12],"机":[324,32,12],"来":[336,32,12],"架":[348,32,12],"柱":[360,32,12],"格":[372,32,12],"栽":[384,32,12],"档":[396,32,12],"次":[408,32,12],"欢":[420,32,12],"比":[432,32,12],"毛":[444,32,12],"毯":[456,32,12],"沙":[468,32,12],"没":[480,32,12],"法":[492,32,12],"浏":[504,32,12],"淡":[516,32,12],"游":[528,32,12],"灯":[540,32,12],"点":[552,32,12],"焦":[564,32,12],"熊":[576,32,12],"爬":[588,32,12],"爱":[600,32,12],"片":[612,32,12],"版":[624,32,12],"牌":[636,32,12],"物":[648,32,12],"猫":[660,32,12],"玩":[672,32,12],"瑞":[684,32,12],"用":[696,32,12],"画":[708,32,12],"留":[720,32,12],"登":[732,32,12],"的":[744,32,12],"皇":[756,32,12],"皮":[768,32,12],"盆":[780,32,12],"空":[792,32,12],"穿":[804,32,12],"第":[816,32,12],"类":[828,32,12],"素":[840,32,12],"纪":[852,32,12],"纳":[864,32,12],"继":[876,32,12],"续":[888,32,12],"网":[900,32,12],"罗":[912,32,12],"置":[924,32,12],"肠":[936,32,12],"能":[948,32,12],"腊":[960,32,12],"自":[972,32,12],"色":[984,32,12],"茸":[996,32,12],"莉":[1008,32,12],"获":[0,48,12],"落":[12,48,12],"行":[24,48,12],"览":[36,48,12],"角":[48,48,12],"解":[60,48,12],"试":[72,48,12],"请":[84,48,12],"调":[96,48,12],"谢":[108,48,12],"负":[120,48,12],"责":[132,48,12],"败":[144,48,12],"贪":[156,48,12],"贵":[168,48,12],"起":[180,48,12],"跳":[192,48,12],"软":[204,48,12],"载":[216,48,12],"达":[228,48,12],"过":[240,48,12],"迎":[252,48,12],"返":[264,48,12],"还":[276,48,12],"这":[288,48,12],"进":[300,48,12],"退":[312,48,12],"送":[324,48,12],"选":[336,48,12],"透":[348,48,12],"遇":[360,48,12],"部":[372,48,12],"都":[384,48,12],"醋":[396,48,12],"里":[408,48,12],"金":[420,48,12],"鉴":[432,48,12],"铜":[444,48,12],"银":[456,48,12],"锁":[468,48,12],"键":[480,48,12],"闭":[492,48,12],"集":[504,48,12],"雪":[516,48,12],"面":[528,48,12],"页":[540,48,12],"额":[552,48,12],"飞":[564,48,12],"食":[576,48,12],"首":[588,48,12],"马":[600,48,12],"高":[612,48,12],"齐":[624,48,12],"！":[636,48,12],"，":[648,48,12],"／":[660,48,12],"：":[672,48,12],"？":[684,48,12],"～":[696,48,12]}}};
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

function measureText(text) {
    var width = 0;
    letterList(text).forEach(function (letter) {
        var place = D.font.letters[letter];
        if (place) width += place[2];
    });
    return width;
}

function writeLetters(pen, text, color, left, top) {
    var sheet = getTintedSheet(color), height = D.font.height, x = left;
    letterList(text).forEach(function (letter) {
        var place = D.font.letters[letter];
        if (!place) return;
        if (place[2] > 0) pen.drawImage(sheet, place[0], place[1], place[2], height, x, top, place[2], height);
        x += place[2];
    });
}

// Render small, sharp letters, then enlarge each pixel by a whole number.
function renderGameText(text, scale, color, outline) {
    var key = text + "|" + scale + "|" + color + "|" + outline;
    if (textCache[key]) return textCache[key];
    var width = measureText(text), height = D.font.height;
    var edge = outline ? 2 : 0;
    var small = makeCanvas(width + edge, height + edge);
    var pen = small.getContext("2d");
    if (outline) {
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) writeLetters(pen, text, outline, x, y);
        }
        writeLetters(pen, text, color, 1, 1);
    } else {
        writeLetters(pen, text, color, 0, 0);
    }
    var label = makeCanvas(small.width * scale, small.height * scale);
    var big = label.getContext("2d");
    big.imageSmoothingEnabled = false;
    big.drawImage(small, 0, 0, label.width, label.height);
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
var weather = "clear", next_weather = null, weather_amount = 0.0, weather_stage = null, weather_used = false;
var SKY_THEMES = D.sky_themes;
var current_theme = 0, previous_theme = null, theme_fade = 1.0, page_theme = 0;
var world_scroll = 0.0;
var flap_puffs = [];
var score_pop_frames = 0;
var ambient_frames = 0;
// Points needed, name, picture. Reaching one during a run pops up a banner.
var MEDALS = S.MEDALS, medal_banner_frames = S.medal_banner_frames;
var medal_banner = null;  // [medal number, first time ever?, frames shown so far]
var best_before_run = 0;  // The best score when this run began, to spot a first medal.

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
var fogLayer = null, blossomLayer = null;

function makePlaneSprite(shake, target) {
    // Pop the head above the cockpit, keeping the chin tucked behind the sill.
    var size = Math.round(192 * RES);
    var sprite = target && target.width === size ? target : makeCanvas(size, size);
    sprite.lw = sprite.lh = 192;
    var pen = sprite.getContext("2d");
    pen.setTransform(1, 0, 0, 1, 0, 0);
    pen.clearRect(0, 0, size, size);
    pen.setTransform(size / 192, 0, 0, size / 192, 0, 0);
    var angle = 0;
    if (shake) angle = head_sway_angle * Math.sin(ticks() / 1000 * Math.PI * 2 * head_sway_speed);
    var radians = angle * Math.PI / 180;
    var half = H(pilot_head) / 2;
    var centerX = Math.round(103 - half * Math.sin(radians));
    var centerY = Math.round(95 - half * Math.cos(radians));
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
    // The first dogs come quickly; after that, finding one takes some flying.
    var found = countFoundDogs();
    if (found < S.pillars_for_first_dogs.length) return S.pillars_for_first_dogs[found];
    return getGapBetweenDogs(PETS.length - STARTER_PETS.length);
}

function getGapBetweenDogs(petsToFind) {
    var gap = Math.floor(S.pillars_for_whole_album / Math.max(1, petsToFind));
    return Math.max(S.fewest_pillars_between_dogs, Math.min(S.most_pillars_between_dogs, gap));
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
    if (!locked.length || dogOnScreen || pillars_since_dog < getPillarsNeeded()) return false;
    if (locked.indexOf(next_dog) < 0) next_dog = chooseNextDog(locked);
    pair[1].dog = next_dog;
    return true;
}

function getPillarsLeft() {
    if (countKeys(unlocked_pets) >= PETS.length) return null;
    return Math.max(0, getPillarsNeeded() - pillars_since_dog);
}

function collectPassedDogs() {
    // No message here: a new friend stays a secret until the crash screen reveals it.
    pipes.forEach(function (pair) {
        var bottom = pair[1];
        if (bottom.dog !== null && bottom.right() < bird_x - bird_radius) {
            unlocked_pets[bottom.dog] = true;
            newly_found_dogs.push(bottom.dog);
            track("pet_found", {pet: PETS[bottom.dog].id, score: score});
            bottom.dog = null;
            pillars_since_dog = 0;
            saveProgress();
        }
    });
}

function saveProgress() {
    // Ids, not list positions: removing one pet later must not shift everyone else's.
    var progress = JSON.stringify({
        unlocked: sortedIds(unlocked_pets),
        pillars: pillars_since_dog,
        selected: PETS[selected_character].id,
        welcomed: sortedIds(welcomed_pets),
        owned: sortedIds(owned_pets),
        coins: coins,
        furniture: Object.keys(owned_furniture).sort()
    });
    try {
        window.localStorage.setItem(WEB_PROGRESS_KEY, progress);
    } catch (error) {}  // The game still works; this visit's dogs just will not be remembered.
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
    var savedCoins = saved.coins;
    coins = typeof savedCoins === "number" && savedCoins % 1 === 0 && savedCoins >= 0 ? savedCoins : 0;
    if (Array.isArray(saved.furniture)) {
        saved.furniture.forEach(function (id) {
            if (typeof id === "string" && Object.prototype.hasOwnProperty.call(FURNITURE_BY_ID, id)) owned_furniture[id] = true;
        });
    }
    var selected = PET_INDEX_BY_ID[saved.selected];
    if (selected !== undefined && unlocked_pets[selected]) setPilot(selected);
}

function track(event, details) {
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
    if (petId === null || !Object.prototype.hasOwnProperty.call(PET_INDEX_BY_ID, petId)) return false;
    var pet = PET_INDEX_BY_ID[petId];
    linked_pet = pet;
    unlocked_pets[pet] = true;
    setPilot(pet);
    welcome_pet = pet;
    var newOwner = !!isOwner && !owned_pets[pet];
    // Opening the same link again goes straight to the game.
    if (newOwner || !welcomed_pets[pet]) {
        link_page_pet = pet;
        link_page_is_owner = newOwner;
        link_page_bonus = newOwner ? giveOwnerReward(pet) : [];
        welcomed_pets[pet] = true;
        track("pet_link_welcome", {pet: petId, owner: newOwner, bonus: link_page_bonus.length});
    }
    saveProgress();
    return true;
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
    resetBird();
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
    newly_found_dogs.length = 0;
    weather = "clear";
    next_weather = null;
    weather_amount = 0.0;
    weather_stage = null;
    weather_used = false;
    welcome_pet = null;
    coins_this_run = 0;
    coin_pops = [];
    medal_banner = null;
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
    var base = linked_pet === null ? [] : [linked_pet];
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

function getNextMedal(points) {
    for (var number = 0; number < MEDALS.length; number++) {
        if (points < MEDALS[number][0]) return number;
    }
    return null;
}

function checkMedal() {
    MEDALS.forEach(function (medal, number) {
        if (score === medal[0]) medal_banner = [number, best_before_run < medal[0], 0];
    });
}

function updateMedalBanner() {
    if (medal_banner === null) return;
    medal_banner[2] += 1;
    if (medal_banner[2] >= medal_banner_frames) medal_banner = null;
}

function recordRunStart() {
    best_before_run = best_score;
    runs_this_visit += 1;
    run_started_at = ticks();
    track("game_start", {pet: getPilotId(), run: runs_this_visit});
}

function flapOrStart() {
    if (paused || (death_started_at !== null && !game_over)) return;
    if (game_over) resetGame();
    if (!started) recordRunStart();
    started = true;
    game_over = false;
    bird_velocity = jump_strength;
    flap_puffs.push([bird_x - 34, bird_y + 12, 0]);
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
    if (closes) link_page_pet = null;
    return true;
}

function handleCharacterSelection(event) {
    if (!onCharacterScreen()) return false;
    if (park_open) return handlePark(event);
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
                        medal: medal === null ? "none" : MEDALS[medal][2]});
    saveProgress();
    death_image = makePlaneSprite(true);
    started = false;
    death_started_at = ticks();
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
function updateWeather() {
    // Weather is a small surprise: one short spell at most, then the sky clears again.
    if (started) {
        var stage = Math.floor(score / points_per_theme);
        if (stage !== weather_stage) {
            weather_stage = stage;
            if (weather !== "clear") {
                next_weather = "clear";
            } else if (stage > 0 && !weather_used && Math.random() < S.weather_chance) {
                next_weather = choice(WEATHERS);
                weather_used = true;
            }
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
        updateMedalBanner();
    } else if (onCharacterScreen()) {
        world_scroll += 0.8;  // Let the world drift gently behind the menu.
        if (park_open) updatePark();
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
        if (weather === "rain") alpha = Math.round(alpha * (1 - 0.6 * weather_amount));  // Hidden by rain clouds.
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
    // Fog and gloom sit behind the obstacles, so the way through always stays clear.
    if (weather === "fog") {
        var strength = SKY_THEMES[current_theme].stars ? 55 : 125;
        var alpha = Math.round(strength * weather_amount);
        blitWrapped(fogLayer, 120, 0.3, alpha);
        blitWrapped(fogLayer, 330, 0.5, alpha);
    } else if (weather === "rain") {
        // A cool gray-blue light, like a cloudy afternoon, and heavy clouds drifting over the sun.
        multiplyScreen(255 - Math.round(66 * weather_amount), 255 - Math.round(50 * weather_amount),
                       255 - Math.round(24 * weather_amount));
        getSceneLayers().forEach(function (layer) {
            blitWrapped(layer[0].rain_clouds, 0, 0.15, Math.round(layer[1] * 0.92 * weather_amount));
        });
    } else if (weather === "petals") {
        // A faint pink wash, and blossom branches drifting past overhead.
        var fade = 22 * weather_amount;
        multiplyScreen(255, Math.round(255 - fade), Math.round(255 - fade * 0.6));
        blitWrapped(blossomLayer, 0, 0.45, Math.round(255 * weather_amount));
    }
}

function drawRain(amount) {
    // Two layers of drops: far ones short, dim and slow; near ones long, bright and fast.
    var blockWidth = S.RAIN_BLOCK[0], blockHeight = S.RAIN_BLOCK[1];
    S.RAIN_LAYERS.forEach(function (layer, layerNumber) {
        var count = Math.round(layer.count * amount);
        for (var number = 0; number < count; number++) {
            var x = pmod(number * 89 + layerNumber * 41 - ambient_frames * layer.drift, WIDTH + 40) - 20;
            var y = pmod(number * 137 + layerNumber * 59 + ambient_frames * layer.fall, HEIGHT + 60) - 40;
            // The drop falls a little to the left, so each higher block sits one pixel to the right.
            for (var block = 0; block < layer.blocks; block++) {
                fillRect(block === 0 ? layer.head : layer.tail, x + block, y - block * blockHeight, blockWidth, blockHeight);
            }
        }
    });
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

function drawSnow(count) {
    screen.fillStyle = "rgb(245,250,255)";
    for (var number = 0; number < count; number++) {
        var x = pmod(number * 73 + 20 * Math.sin(ambient_frames / 40 + number), WIDTH);
        var y = pmod(number * 131 + ambient_frames * (1.2 + number % 3 * 0.5), HEIGHT);
        var size = 3 + number % 3;
        screen.fillRect(Math.floor(x), Math.floor(y), size, size);
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

function drawWeatherInFront() {
    // Thin and sparse on purpose: it must never hide an obstacle's edge.
    if (weather === "rain") {
        drawRain(weather_amount);
        drawSplashes(weather_amount);
    }
    else if (weather === "snow") drawSnow(Math.round(70 * weather_amount));
    else if (weather === "petals") drawPetals(Math.round(42 * weather_amount));
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
    drawText("得分", 2, [54, 38]);
    drawText(String(score), score_pop_frames ? 4 : 3, [128, 36], RED);
    drawText("最高 " + best_score, 2, [plate.centerx(), 69], FOREST);
    drawCoinCounter();
    drawMedalProgress();
    // Always in the same place, so the player can watch the next friend come closer.
    drawNextFriendProgress();
    drawMedalBanner();
}

function drawMedalProgress() {
    // Under the coins: the next medal and how far away it is.
    var plate = new Rect(WIDTH - 142, 72, 128, 40);
    drawPixelPanel(plate, CREAM, INK, 3);
    var upcoming = getNextMedal(score);
    var shown, label;
    if (upcoming === null) {
        shown = MEDALS.length - 1;
        label = "集齐！";
    } else {
        shown = upcoming;
        label = "还差" + (MEDALS[upcoming][0] - score);
        // The bar fills up from the last medal (or zero) to the next one.
        var start = upcoming ? MEDALS[upcoming - 1][0] : 0;
        var filled = plate.inflate(-8, -8);
        filled.w = Math.round(filled.w * (score - start) / (MEDALS[upcoming][0] - start));
        fillRect(SUN, filled.x, filled.y, filled.w, filled.h);
    }
    blitCentered(getSprite(MEDALS[shown][2], 0, 2), plate.x + 24, plate.centery());
    drawText(label, 2, [plate.x + 78, plate.centery()]);
}

function drawMedalBanner() {
    if (medal_banner === null || !started) return;
    var number = medal_banner[0], firstTime = medal_banner[1], age = medal_banner[2];
    // Drops in from above, waits, then rises away.
    var hidden = Math.max(0, 12 - age, age - (medal_banner_frames - 12));
    var banner = new Rect(210, 150 - hidden * 14, 380, 76);
    drawPixelPanel(banner, SUN);
    blitCentered(getSprite(MEDALS[number][2], 0, 4), banner.x + 44, banner.centery());
    var title = (firstTime ? "首次获得" : "获得") + MEDALS[number][1] + "！";
    drawText(title, 3, [banner.centerx() + 34, banner.centery() - 12], DARK_RED);
    drawText(MEDALS[number][0] + " 分达成", 2, [banner.centerx() + 34, banner.centery() + 20]);
}

function drawCoinCounter() {
    var plate = new Rect(WIDTH - 142, 14, 128, 52);
    drawPixelPanel(plate);
    blitCentered(getSprite("coin", 0, 3), plate.x + 30, plate.centery());
    drawText(String(coins), 3, [plate.x + 84, plate.centery()], DARK_RED);
}

function drawNextFriendProgress(bar) {
    var left = getPillarsLeft();
    if (left === null) return;
    var needed = getPillarsNeeded();
    bar = bar || new Rect(14, 96, 170, 36);
    drawPixelPanel(bar, CREAM, INK, 3);
    var filled = bar.inflate(-8, -8);
    filled.w = Math.round(filled.w * (needed - left) / needed);
    fillRect(SUN, filled.x, filled.y, filled.w, filled.h);
    drawText(left ? "新伙伴还差" + left : "就在前面！", 2, bar.center());
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
    var info = PETS[pet];
    drawPixelPanel(card, selected ? SUN : CREAM);
    blitCentered(characterPortraits[pet], card.x + 44, card.y + 74);
    if (owned_pets[pet]) drawCrown(card.right() - 24, card.y + 6);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, selected ? LEAF : SAND, INK, 0);
    drawText(String(number), 2, badge.center(), selected ? CREAM : INK);
    var textX = card.x + 135;
    drawText(info.name, 2, [textX, card.y + 32]);
    info.intro.forEach(function (line, lineNumber) {
        drawText(line, 2, [textX, card.y + 68 + lineNumber * 26], selected ? INK : FOREST);
    });
}

function drawLockedCard(card, pet, number) {
    drawPixelPanel(card, SAND);
    blitCentered(getSilhouette(pet), card.x + 44, card.y + 74);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, CREAM, INK, 0);
    drawText(String(number), 2, badge.center());
    drawText("？？？", 2, [card.x + 135, card.y + 50]);
    drawText("飞行中", 2, [card.x + 135, card.y + 80], DARK_RED);
    drawText("可遇到", 2, [card.x + 135, card.y + 104], DARK_RED);
}

function drawAlbumCard(card) {
    drawPixelPanel(card, LEAF);
    var badge = new Rect(card.x + 8, card.y + 8, 30, 30);
    drawPixelPanel(badge, SAND, INK, 0);
    drawText("8", 2, badge.center());
    drawText("宠物图鉴", 2, [card.centerx() + 16, card.y + 26], CREAM);
    drawText(countKeys(unlocked_pets) + " / " + PETS.length, 3, [card.centerx(), card.y + 62], SUN, INK);
    if (getPillarsLeft() === null) {
        drawText("全部集齐！", 2, [card.centerx(), card.y + 104], SUN, INK);
    } else {
        drawNextFriendProgress(new Rect(card.x + 9, card.y + 86, card.w - 18, 34));
    }
}

function drawAlbum() {
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawText("宠物图鉴", 3, ribbon.center(), CREAM);
    drawText("已收集 " + countKeys(unlocked_pets) + " / " + PETS.length + "，点击已解锁的宠物就能换它出战",
             2, [400, 104], CREAM, INK);
    getAlbumPagePets().forEach(function (pet, position) {
        if (unlocked_pets[pet]) drawPetCard(character_cards[position], pet, position + 1, pet === selected_character);
        else drawLockedCard(character_cards[position], pet, position + 1);
    });
    var pages = Math.floor((PETS.length - 1) / album_page_size) + 1;
    [[album_previous_button, "上一页"], [album_next_button, "下一页"]].forEach(function (item) {
        drawPixelPanel(item[0], CREAM, INK, 4);
        drawText(item[1], 2, item[0].center());
    });
    drawText("第 " + (album_page + 1) + " / " + pages + " 页", 2, [400, 418], CREAM, INK);
    drawPixelPanel(start_button, LEAF);
    drawText("返回选角 · 按 Esc", 3, start_button.center(), CREAM);
}

var mouseX = -1, mouseY = -1;

function drawCharacterSelection() {
    var now = ticks();
    // A sine wave swings smoothly between -1 and 1, which makes things bob.
    var bob = Math.round(Math.sin(now / 300) * 4);
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawText("选择你的飞行搭档", 3, ribbon.center(), CREAM);
    drawText("点击角色或按 1～8 选择", 2, [400, 104], CREAM, INK);
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

    var info = PETS[selected_character];
    // Little animals perch on the cards, which rest on their top edge.
    [["fox", 0, 32], ["hedgehog", 1, 24], ["frog", 2, 168], ["rabbit", 3, 126]].forEach(function (item) {
        var sprite = getSprite(item[0], getBlinkFrame(item[1]));
        var perch = character_cards[item[1]];
        var lift = slotPets[item[1]] === selected_character ? bob - 6 : 0;
        screen.drawImage(sprite, perch.x + item[2] - Math.floor(sprite.width / 2), perch.y + lift + 3 - sprite.height);
    });
    drawParkButton();
    // The squirrel sits on the park button's roof; the duckling waddles in the corner.
    var squirrel = getSprite("squirrel", getBlinkFrame(56));
    screen.drawImage(squirrel, park_button.right() - 14 - Math.floor(squirrel.width / 2), park_button.y + 3 - squirrel.height);
    var duckling = getSprite("duckling", getBlinkFrame(744));
    screen.drawImage(duckling, 744 - Math.floor(duckling.width / 2), HEIGHT - 8 - duckling.height);

    drawText(info.name + "：" + info.intro.join("") + "  ·  最高分：" + best_score + "  ·  宠物币：" + coins, 2, [400, 402], SUN, INK);
    if (selected_character === welcome_pet) {
        drawText("欢迎登机，" + info.name + "！按空格键马上起飞", 2, [400, 430], SUN, INK);
    } else if (owned_pets[selected_character]) {
        drawText("谢谢你把" + info.name + "带上飞机！", 2, [400, 430], SUN, INK);
    } else {
        drawText("操控飞机，穿过土块，接上柱子上的“？？？”新伙伴！", 2, [400, 430], CREAM, INK);
    }

    var pressed = Math.floor(now / 500) % 2;  // Alternate every half second to invite a press.
    drawPixelPanel(start_button.move(0, 2 * pressed), LEAF, INK, 6 - 2 * pressed);
    drawText("开始游戏 · 按空格键", 3, start_button.move(0, 2 * pressed).center(), CREAM);
    if (UPLOAD_FORM_URL) {
        var hovered = upload_button.contains(mouseX, mouseY);
        var upload = upload_button.move(0, hovered ? -2 : 0);
        drawPixelPanel(upload, hovered ? SUN : CREAM, INK, 4);
        drawText("上传我的宠物！", 2, upload.center());
    }
    // A solid plate keeps the instructions readable while animals wander behind it.
    drawPixelPanel(new Rect(108, 510, 584, 66), CREAM, INK, 4);
    drawText(isTouchScreen ? "点击屏幕：上升  |  P：暂停／继续  |  R：返回选角"
                           : "空格键：上升  |  P：暂停／继续  |  R：返回选角", 2, [400, 528]);
    drawText(score_storage_available ? "关闭网页退出" : "最高分仅在本次打开时保留", 2, [400, 556], FOREST);
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
    var info = PETS[pet];
    var portrait = getFittedPortrait(pet, 92, 110);
    var hop = Math.abs(Math.round(Math.sin(ticks() / 180) * 6));
    blitCentered(portrait, area.x + 76, area.centery() - hop);
    drawText(info.name, 3, [area.x + 242, area.y + 30]);
    drawText(info.intro.join(""), 2, [area.x + 242, area.y + 76], FOREST);
}

function drawOneOfManyNewDogs(cell, pet, large) {
    var info = PETS[pet];
    if (pet === selected_character) {
        var light = cell.inflate(-4, -2);
        fillRect(CREAM, light.x, light.y, light.w, light.h);
    }
    // Large cells have room for the introduction; small ones show only the name.
    var portrait = getFittedPortrait(pet, large ? 56 : cell.h - 18, cell.w - 8);
    drawPicture(portrait, cell.centerx() - Math.floor(W(portrait) / 2), cell.y + 2);
    if (large) {
        drawText(info.name, 2, [cell.centerx(), cell.y + 70]);
        drawText(info.intro.join(""), 1, [cell.centerx(), cell.y + 92], FOREST);
    } else {
        drawText(info.name, 1, [cell.centerx(), cell.bottom() - 8]);
    }
}

function drawNewDogs() {
    var found = newly_found_dogs, card = new_dogs_card;
    drawPixelPanel(card, SUN, INK, 4);
    drawText(found.length === 1 ? "新伙伴登机！" : "本局解锁 " + found.length + " 位新伙伴！", 2,
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
        var name = PETS[selected_character].name;
        drawText(found.length === 1 ? "已换上" + name : "已换上" + name + "，按 C 换下一只", 2, [400, 384], FOREST);
    } else {
        drawText(found.length === 1 ? "按 C 换它出战" : "按 C 挑一只出战", 2, [400, 384], DARK_RED);
    }
    drawText(isTouchScreen ? "点击屏幕再来一次" : "按空格键再来一次", 2, [400, 412]);
    drawText("R：返回选角", 2, [400, 438], FOREST);
}

function drawOverlay(alpha) {
    screen.fillStyle = css(INK, alpha);
    screen.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawLinkPage() {
    var pet = link_page_pet, info = PETS[pet], owner = link_page_is_owner;
    drawOverlay(150);
    var panel = new Rect(110, 62, 580, 500);
    var ribbon = new Rect(130, 24, 540, 72);
    drawPixelPanel(panel);

    // The pet stands in a little window of sunlight.
    var lightWindow = new Rect(150, 112, 500, 176);
    fillRect([255, 228, 150], lightWindow.x, lightWindow.y, lightWindow.w, lightWindow.h);
    drawSunRays(lightWindow);
    var portrait = getFittedPortrait(pet, 150, 220);
    var hop = Math.abs(Math.round(Math.sin(ticks() / 180) * 8));
    var left = lightWindow.centerx() - Math.floor(W(portrait) / 2);
    var top = lightWindow.centery() + 6 - hop - Math.floor(H(portrait) / 2);
    drawPicture(portrait, left, top);
    if (owner) drawCrown(left + Math.floor(W(portrait) / 2), top + 2, 5);

    drawPixelPanel(ribbon, owner ? SUN : LEAF);
    drawText(owner ? "谢谢你，" + info.name + "的主人！" : "获得新伙伴！", 3, ribbon.center(), owner ? INK : CREAM);
    drawText(info.name, 3, [400, 316]);
    drawText(info.intro.join(""), 2, [400, 354], FOREST);

    if (owner) {
        drawText("你是第 " + getContributorNumber(pet) + " 位送宠物登机的主人", 2, [400, 386], DARK_RED);
        drawText("奖励：" + info.name + "的卡片戴上专属皇冠", 2, [400, 416]);
        if (link_page_bonus.length) {
            var names = link_page_bonus.map(function (index) { return PETS[index].name; }).join("、");
            drawText("奖励：额外解锁 " + names, 2, [400, 444]);
        }
    } else {
        drawText(info.name + "已加入你的图鉴，马上带它起飞吧", 2, [400, 392], DARK_RED);
        if (UPLOAD_FORM_URL) {
            drawText("你家宠物也想登机？", 2, [400, 424]);
            drawText("在选角页点“上传我的宠物！”，还有主人奖励", 2, [400, 452], FOREST);
        }
    }

    var pressed = Math.floor(ticks() / 500) % 2;
    var button = link_page_button.move(0, 2 * pressed);
    drawPixelPanel(button, LEAF, INK, 6 - 2 * pressed);
    drawText("收下 · 按空格键", 3, button.center(), CREAM);
}

// -------------------------
// Pet park: a cozy room where unlocked pets walk around, and pet coins buy furniture.
// -------------------------
var FURNITURE = S.FURNITURE, FURNITURE_BY_ID = {};
FURNITURE.forEach(function (item) { FURNITURE_BY_ID[item.id] = item; });
var park_scale = S.park_scale, park_floor = S.park_floor;
var park_walk_speed = S.park_walk_speed, park_seat_chance = S.park_seat_chance;
var park_hop_frames = S.park_hop_frames, park_message_frames = S.park_message_frames;
var owned_furniture = {};
var park_open = false, park_pets = [], park_message = null;  // park_message: [text, frames left]
var park_button = new Rect(10, 496, 94, 96);
var park_back_button = new Rect(14, 14, 150, 48);
var parkRoom = null, lampGlow = null, parkPetFrames = [];  // Frames: two walking steps per pet.

function getFurnitureRect(item) {
    var rows = SPRITES[item.id][0];
    var width = rows[0].length * park_scale, height = rows.length * park_scale;
    return new Rect(item.place[0] - Math.floor(width / 2), item.place[1] - height, width, height);
}

function getParkSeats() {
    // Every spot on owned furniture where a pet could sit, as screen positions.
    var seats = [];
    FURNITURE.forEach(function (item) {
        if (!owned_furniture[item.id]) return;
        var rect = getFurnitureRect(item);
        item.seats.forEach(function (seat, number) {
            seats.push({id: item.id + ":" + number, x: rect.x + seat[0] * park_scale,
                        y: rect.y + seat[1] * park_scale, bottom: rect.bottom()});
        });
    });
    return seats;
}

function pickFloorSpot() {
    return [randint(park_floor[0], park_floor[1]), randint(park_floor[2], park_floor[3])];
}

function makeParkPets() {
    park_pets = [];
    getPetOrder().forEach(function (pet) {
        if (!unlocked_pets[pet]) return;
        var spot = pickFloorSpot();
        park_pets.push({pet: pet, x: spot[0], y: spot[1], target: spot, seat: null, left: false,
                        sitting: false, wait: randint(20, 120), hop: 0});
    });
}

function chooseParkTarget(walker) {
    var taken = {};
    park_pets.forEach(function (other) { if (other !== walker && other.seat) taken[other.seat] = true; });
    var free = getParkSeats().filter(function (seat) { return !taken[seat.id]; });
    walker.sitting = false;
    if (free.length && Math.random() < park_seat_chance) {
        var seat = choice(free);
        walker.seat = seat.id;
        walker.target = [seat.x, seat.y];
    } else {
        walker.seat = null;
        walker.target = pickFloorSpot();
    }
}

function updatePark() {
    if (park_message !== null) {
        park_message[1] -= 1;
        if (park_message[1] <= 0) park_message = null;
    }
    park_pets.forEach(function (walker) {
        walker.hop = Math.max(0, walker.hop - 1);
        if (walker.wait > 0) {
            walker.wait -= 1;
            if (walker.wait === 0) chooseParkTarget(walker);
            return;
        }
        var dx = walker.target[0] - walker.x, dy = walker.target[1] - walker.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= park_walk_speed) {
            walker.x = walker.target[0];
            walker.y = walker.target[1];
            walker.sitting = walker.seat !== null;
            walker.wait = randint(120, 360);
        } else {
            if (Math.abs(dx) > 1) walker.left = dx < 0;
            walker.x += dx / distance * park_walk_speed;
            walker.y += dy / distance * park_walk_speed;
        }
    });
}

function openPark() {
    park_open = true;
    park_message = null;
    makeParkPets();
    track("park_open", {furniture: countKeys(owned_furniture), coins: coins});
}

function buyFurniture(item) {
    if (owned_furniture[item.id]) return false;
    if (coins < item.price) {
        park_message = ["还差 " + (item.price - coins) + " 个宠物币，去飞一局吧！", park_message_frames];
        return false;
    }
    coins -= item.price;
    owned_furniture[item.id] = true;
    saveProgress();
    park_message = ["解锁了" + item.name + "！", park_message_frames];
    park_pets.forEach(function (walker) { walker.hop = park_hop_frames; });  // Everyone jumps for joy.
    track("furniture_buy", {item: item.id, price: item.price, coins_left: coins});
    return true;
}

function snap(value) {
    // Round to the 4-pixel grid, so pets move in whole blocks like the rest of the room.
    return Math.round(value / park_scale) * park_scale;
}

function getParkStep(walker) {
    // Legs alternate while walking; standing or sitting pets keep still.
    return walker.wait === 0 ? Math.floor(ambient_frames / 8) % 2 : 0;
}

function getParkPetRect(walker, lift) {
    var picture = parkPetFrames[walker.pet][0];
    var width = picture.width * park_scale, height = picture.height * park_scale;
    return new Rect(snap(walker.x - width / 2), snap(walker.y - height - (lift || 0)), width, height);
}

function handlePark(event) {
    if (event.type === "key") {
        if (event.key === "Escape" || event.key === "h" || event.key === "H") park_open = false;
        return true;  // Keys belong to the park, so space cannot start a game behind it.
    }
    if (event.type === "click") {
        if (park_back_button.contains(event.x, event.y)) {
            park_open = false;
            return true;
        }
        for (var i = park_pets.length - 1; i >= 0; i--) {
            if (getParkPetRect(park_pets[i]).contains(event.x, event.y)) {
                park_pets[i].hop = park_hop_frames;
                return true;
            }
        }
        for (var j = FURNITURE.length - 1; j >= 0; j--) {
            var item = FURNITURE[j];
            if (!owned_furniture[item.id] && getFurnitureRect(item).contains(event.x, event.y)) {
                buyFurniture(item);
                return true;
            }
        }
        return true;
    }
    return false;
}

function drawSpriteAt(name, scale, x, y, alpha) {
    var sprite = getSprite(name, 0, scale);
    if (alpha !== undefined) screen.globalAlpha = alpha;
    screen.drawImage(sprite, x, y);
    screen.globalAlpha = 1;
}

function drawParkPet(walker) {
    var picture = parkPetFrames[walker.pet][getParkStep(walker)];
    var lift = walker.hop ? Math.sin(Math.PI * walker.hop / park_hop_frames) * 28 : 0;
    var width = picture.width * park_scale;
    if (!walker.sitting) {
        // A blocky shadow on the floor, two grid rows tall.
        var shadowWidth = width - 16, left = snap(walker.x - shadowWidth / 2), top = snap(walker.y) - 6;
        screen.fillStyle = css(INK, 50);
        screen.fillRect(left + 4, top, shadowWidth - 8, 4);
        screen.fillRect(left, top + 4, shadowWidth, 4);
    }
    var place = getParkPetRect(walker, lift);
    if (walker.left) {
        // Mirror the picture so the pet faces the way it walks.
        screen.save();
        screen.translate(place.x + place.w, place.y);
        screen.scale(-1, 1);
        screen.drawImage(picture, 0, 0, place.w, place.h);
        screen.restore();
    } else {
        screen.drawImage(picture, place.x, place.y, place.w, place.h);
    }
    if (walker.hop) {
        var heart = getSprite("heart", 0, park_scale);
        screen.drawImage(heart, snap(place.centerx()) - Math.floor(heart.width / 2), place.y - 4 - heart.height);
    }
}

function drawPark() {
    screen.drawImage(parkRoom, 0, 0, WIDTH, HEIGHT);
    if (owned_furniture.lamp) {
        var shade = getFurnitureRect(FURNITURE_BY_ID.lamp);
        screen.drawImage(lampGlow, shade.centerx() - lampGlow.width / 2, shade.y + 12 - lampGlow.height / 2);
    }
    // Flat things first, then everything else from the back of the room to the front.
    var seats = getParkSeats(), seatBottoms = {};
    seats.forEach(function (seat) { seatBottoms[seat.id] = seat.bottom; });
    var layers = [];
    FURNITURE.forEach(function (item) {
        var rect = getFurnitureRect(item);
        layers.push({depth: item.flat ? -1 : rect.bottom(), kind: 0, item: item, rect: rect});
    });
    park_pets.forEach(function (walker) {
        var depth = walker.sitting ? (seatBottoms[walker.seat] || 0) + 1 : walker.y;
        layers.push({depth: depth, kind: 1, walker: walker});
    });
    layers.sort(function (a, b) { return a.depth - b.depth || a.kind - b.kind; });
    layers.forEach(function (layer) {
        if (layer.kind === 1) drawParkPet(layer.walker);
        else drawSpriteAt(layer.item.id, park_scale, layer.rect.x, layer.rect.y,
                          owned_furniture[layer.item.id] ? undefined : 70 / 255);
    });
    // Price tags on top, so a pet walking past never hides one.
    FURNITURE.forEach(function (item) {
        if (owned_furniture[item.id]) return;
        var rect = getFurnitureRect(item);
        var hovered = rect.contains(mouseX, mouseY);
        var tag = new Rect(0, 0, 96, 34);
        tag.x = rect.centerx() - 48;
        tag.y = Math.min(rect.centery(), HEIGHT - 26) - 17 - (hovered ? 3 : 0);
        drawPixelPanel(tag, coins >= item.price ? SUN : CREAM, INK, 3);
        var coin = getSprite("coin", 0, 2);
        screen.drawImage(coin, tag.x + 20 - Math.floor(coin.width / 2), tag.centery() - Math.floor(coin.height / 2));
        drawText(String(item.price), 2, [tag.x + 60, tag.centery()]);
        if (hovered) drawText(item.name, 2, [tag.centerx(), tag.y - 16], CREAM, INK);
    });
    var ribbon = new Rect(236, 16, 328, 62);
    drawPixelPanel(ribbon, LEAF);
    drawText("宠物乐园", 3, ribbon.center(), CREAM);
    var backHovered = park_back_button.contains(mouseX, mouseY);
    var back = park_back_button.move(0, backHovered ? -2 : 0);
    drawPixelPanel(back, backHovered ? SUN : CREAM, INK, 4);
    drawText(isTouchScreen ? "返回" : "返回 · Esc", 2, back.center());
    drawCoinCounter();
    var line;
    if (park_message !== null) line = park_message[0];
    else if (countKeys(owned_furniture) === FURNITURE.length) line = "小屋布置好啦！点点宠物，它们会开心地跳起来";
    else line = "点击半透明的家具，用飞行中收集的宠物币解锁";
    drawText(line, 2, [400, 98], park_message ? SUN : CREAM, INK);
}

function drawParkButton() {
    var hovered = park_button.contains(mouseX, mouseY);
    var button = park_button.move(0, hovered ? -3 : 0);
    drawPixelPanel(button, hovered ? SUN : CREAM, INK, 4);
    var house = getSprite("house", 0, 3);
    screen.drawImage(house, button.centerx() - Math.floor(house.width / 2), button.y + 10);
    drawText("乐园", 2, [button.centerx(), button.bottom() - 20]);
}

function drawMessagePanel() {
    if (link_page_pet !== null) {
        drawLinkPage();
        return;
    }
    if (onCharacterScreen()) {
        if (park_open) drawPark();
        else if (album_open) drawAlbum();
        else drawCharacterSelection();
        return;
    }
    drawOverlay(120);
    var panel = new Rect(170, 130, 460, 340);
    var ribbon = new Rect(210, 96, 380, 72);
    drawPixelPanel(panel);
    drawPixelPanel(ribbon, game_over ? RED : LEAF);
    var again = isTouchScreen ? "点击屏幕再来一次" : "按空格键再来一次";

    if (paused) {
        drawText("暂停一下", 4, ribbon.center(), CREAM);
        drawText("得分：" + score, 3, [400, 240]);
        drawText("按 P 继续飞行", 3, [400, 310], DARK_RED);
        drawText("R：返回选角", 2, [400, 400], FOREST);
    } else if (game_over && newly_found_dogs.length) {
        drawText("坠机啦！", 4, ribbon.center(), CREAM);
        var runMedal = getMedal(score);
        drawText("本局 " + score + (runMedal === null ? "" : "  ·  " + MEDALS[runMedal][1]) + "  ·  最高 " + best_score + "  ·  宠物币 +" + coins_this_run + (new_best ? "  新纪录！" : ""),
                 2, [400, 190]);
        drawSunRays(new_dogs_card.inflate(24, 16));
        drawNewDogs();
    } else if (game_over) {
        drawText("坠机啦！", 4, ribbon.center(), CREAM);
        drawText("本局得分：" + score, 3, [400, 212]);
        var medal = getMedal(score);
        if (medal !== null) blitCentered(getSprite(MEDALS[medal][2], 0, 3), 578, 212);
        drawText("最高分：" + best_score, 3, [400, 262], DARK_RED);
        if (new_best) {
            var record = new Rect(280, 292, 240, 40);
            drawPixelPanel(record, SUN, INK, 0);
            drawText("刷新个人纪录！", 2, record.center());
        }
        drawText(again, 3, [400, 366]);
        drawText("R：返回选角", 2, [400, 412], FOREST);
        if (score_storage_available) drawText("本局宠物币 +" + coins_this_run + "  ·  共 " + coins, 2, [400, 442], DARK_RED);
    }

    [["fox", 204], ["rabbit", 596]].forEach(function (item) {
        var sprite = getSprite(item[0], getBlinkFrame(item[1]), 2);
        screen.drawImage(sprite, item[1] - Math.floor(sprite.width / 2), panel.bottom() - 8 - sprite.height);
    });
    if (!score_storage_available) drawText("最高分仅在本次打开时保留", 2, [400, 444], DARK_RED);
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
            pillars_since_dog += 1;
            checkMedal();
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

window.addEventListener("keydown", function (event) {
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

function pointerDown(clientX, clientY) {
    var place = toGamePosition(clientX, clientY);
    mouseX = place[0];
    mouseY = place[1];
    events.push({type: "click", x: place[0], y: place[1]});
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
        var place = toGamePosition(event.clientX, event.clientY);
        mouseX = place[0];
        mouseY = place[1];
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
        var place = toGamePosition(event.clientX, event.clientY);
        mouseX = place[0];
        mouseY = place[1];
    });
}

function handleEvent(event) {
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
                else reject(new Error("没能下载 " + name));
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

function frame() {
    while (events.length) handleEvent(events.shift());
    var now = ticks();
    var steps = getStepsDue(now - lastTick);
    for (var i = 0; i < steps; i++) updateGameStep();
    lastTick = now;
    if (death_started_at !== null && ticks() - death_started_at >= death_duration) game_over = true;
    drawFrame();
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
    var names = ["font.png", "plane.png", "scenery/fog.png", "scenery/blossom.png"];
    var layers = ["sky", "body", "clouds", "far", "near", "foreground", "rain_clouds"];
    SKY_THEMES.forEach(function (theme, index) {
        layers.forEach(function (layer) { names.push("scenery/" + layer + "_" + index + ".png"); });
    });
    names.push("park/room.png", "park/glow.png");
    PETS.forEach(function (pet) {
        names.push(pet.image + ".jpg", pet.image + ".mask.png", pet.image + ".pixel0.png", pet.image + ".pixel1.png");
    });
    Promise.all(names.map(loadImage)).then(function (images) {
        var byName = {};
        names.forEach(function (name, index) { byName[name] = images[index]; });
        fontSheet = byName["font.png"];
        planeImage = byName["plane.png"];
        fogLayer = byName["scenery/fog.png"];
        blossomLayer = byName["scenery/blossom.png"];
        scenery = SKY_THEMES.map(function (theme, index) {
            var scene = {};
            layers.forEach(function (layer) { scene[layer] = byName["scenery/" + layer + "_" + index + ".png"]; });
            return scene;
        });
        parkRoom = byName["park/room.png"];
        lampGlow = byName["park/glow.png"];
        parkPetFrames = PETS.map(function (pet) {
            return [byName[pet.image + ".pixel0.png"], byName[pet.image + ".pixel1.png"]];
        });
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
        loadProgress();
        resetGame();
        applyPetLink(getLinkedPetId(), isOwnerLink());
        track("game_ready", {pet: getPilotId(), pets_unlocked: countKeys(unlocked_pets)});
        document.getElementById("infobox").style.display = "none";
        lastTick = ticks();
        window.requestAnimationFrame(frame);
    })["catch"](function (error) {
        showProblem("加载失败，请刷新页面再试");
        if (window.console) console.error(error);
    });
}

// A small window for checking the game from the browser's console.
window.flightFriends = {
    state: function () {
        return {score: score, started: started, game_over: game_over, selected: getPilotId(),
                unlocked: sortedIds(unlocked_pets), slots: getSlotPets().map(function (pet) { return PETS[pet].id; }),
                link_page: link_page_pet === null ? null : PETS[link_page_pet].id, owned: sortedIds(owned_pets),
                bonus: link_page_bonus.map(function (pet) { return PETS[pet].id; }), weather: weather,
                coins: coins, coins_this_run: coins_this_run, medal_banner: medal_banner,
                park: {open: park_open, message: park_message && park_message[0],
                       furniture: Object.keys(owned_furniture).sort(),
                       sitting: park_pets.filter(function (walker) { return walker.sitting; }).length,
                       pets: park_pets.map(function (walker) { return PETS[walker.pet].id; })},
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
            if (death_started_at !== null && ticks() - death_started_at >= death_duration) game_over = true;
        }
        drawFrame();
        return window.flightFriends.state();
    },
    flap: flapOrStart
};

if (!window.Promise || !window.requestAnimationFrame || !canvas.getContext) {
    showProblem("这个浏览器太旧了，请换用新版 Chrome、Edge 或 Safari");
} else {
    start();
}
})();
