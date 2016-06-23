//--------------------------------------PERSONAJES------------------------------------------------

//---------ARRAYS Y MIERDAS-----------
/*198 nombres masculinos*/
var nombresM = ["Akami", "Aki", "Akihiko", "Akihiro", "Akio", "Akira", "Akiyama", "Amida", "Arata", "Atsushi", "Botan", "Dai", "Daichi", "Daiki", "Daisuke", "Eiji", "Fudo", "Fujita", "Fumio", "Goro", "Hachiro", "Hajime", "Haru", "Haruo", "Hideaki", "Hideki", "Hideo", "Hikaru", "Hiro", "Hiroaki", "Hiroki", "Hiromasa", "Hiromi", "Hiroshi", "Hiroyuki", "Hisao", "Hisashi", "Hisoka", "Hitoshi", "Hotaka", "Ichiro", "Isamu", "Isao", "Isas", "Iwao", "Izanagi", "Jiro", "Jo", "Joji", "Jun", "Jun'ichi", "Juro", "Kanaye", "Kane", "Kano", "Katashi", "Katsu", "Katsuo", "Katsuro", "Kazuhiko", "Kazuhiro", "Kazuki", "Kazuo", "Keiichi", "Keiji", "Ken", "Kenichi", "Kenji", "Kenshin", "Kenta", "Kichiro", "Kin", "Kioshi", "Kisho", "Kiyoshi", "Kohaku", "Koichi", "Koji", "Kunio", "Kuro", "Kyo", "Madoka", "Makoto", "Mamoru", "Manabu", "Masa", "Masaaki", "Masahiko", "Masahiro", "Masakazu", "Masaki", "Masanori", "Masao", "Masaru", "Masashi", "Masato", "Masayoshi", "Masayuki", "Masuyo", "Michi", "Michio", "Miki", "Mikio", "Minori", "Minoru", "Mitsuo", "Mitsuru", "Nao", "Naoki", "Naoko", "Noboru", "Nobu", "Nobuo", "Nobuyuki", "Nori", "Norio", "Osamu", "Rafu", "Raiden", "Ringo", "Rokuro", "Ronin", "Ryo", "Ryoichi", "Ryota", "Ryozo", "Ryuichi", "Ryuu", "Saburo", "Sadao", "Samuru", "Satoru", "Satoshi", "Seiichi", "Seiji", "Senichi", "Shichiro", "Shig", "Shigekazu", "Shigeo", "Shigeru", "Shima", "Shin", "Shinichi", "Shinji", "Shiro", "Shoichi", "Shoji", "Shuichi", "Shuji", "Shunichi", "Sin'ichi", "Susumu", "Tadao", "Tadashi", "Takahiro", "Takao", "Takashi", "Takayuki", "Takehiko", "Takeo", "Takeshi", "Takeshi", "Takumi", "Tama", "Tamotsu", "Taro", "Tatsuo", "Tatsuya", "Teruo", "Tetsip", "Tetsuya", "Tomi", "Tomio", "Toru", "Toshi", "Toshiaki", "Toshihiro", "Toshio", "Toshiyuki", "Toyo", "Tsuneo", "Tsutomu", "Tsuyoshi", "Uyeda", "Yasahiro", "Yasuhiro", "Yasuo", "Yasushi", "Yemon", "Yogi", "Yoichi", "Yori", "Yoshi", "Yoshiaki", "Yoshihiro", "Yoshikazu", "Yoshimitsu", "Yoshinori", "Yoshio", "Yoshiro", "Yoshito", "Yoshiyuki", "Yuichi", "Yuji", "Yuki", "Yukio", "Yuri", "Yutaka", "Yuu", "Yuudai"];
/*198 nombres femeninos*/
var nombresF = ["Ai", "Aiko", "Aiya", "Akane", "Akiko", "Akira", "Amaya", "Ami", "Annaisha", "Anzu", "Aratani", "Asa", "Au", "Ayaka", "Ayame", "Ayumi", "Chiasa", "Chieko", "Chika", "Chinami", "Chiyoko", "Cho", "Dai", "Daruma", "Den", "Emiko", "Ena", "Eri", "Eshima", "Fuji", "Fumiko", "Gen", "Gina", "Hanako", "Hanan", "Haru", "Haruka", "Hatsu", "Hayami", "Hekima", "Hidéyo", "Hikaru", "Hiriko", "Hiroko", "Hisa", "Hoshi", "Humiya", "Ima", "Isamu", "Jin", "Jun", "Kaedé", "Kaiyo", "Kaméyo", "Kame", "Kameyo", "Kano", "Kaori", "Kata", "Katsumi", "Kazashi", "Kazue", "Kazumi", "Keiko", "Kichi", "Kiko", "Kikuë", "Kimi", "Kioko", "Kishi", "Kiwa", "Kiyoko", "Koemi", "Kohana", "Koko", "Koma", "Koto", "Kozakura", "Kukiko", "Kumi", "Kura", "Kurva", "Kyoto", "Leiko", "Madoka", "Mai", "Maiko", "Majime", "Mamiko", "Manami", "Maria", "Maru", "Masako", "Masumi", "Matsuko", "Mayoko", "Mië", "Michiko", "Midori", "Miki", "Mikie", "Miné", "Minako", "Mirai", "Misaki", "Misao", "Mitsu", "Miyah", "Miyo", "Miyuki", "Momo", "Morie", "Morina", "Mura", "Mutsuko", "Namika", "Nana", "Nanami", "Nao", "Nara", "Narumi", "Natsuko", "Nayoko", "ori", "Nozomi", "Nyoko", "Orino", "Rai", "Ran", "Reiko", "Rieko", "Rikona", "Rin", "Rini", "Risa", "Rui", "Ruri", "Ryoko", "Sachi", "Sadashi", "Sai", "Sakae", "Sakiko", "Sakurako", "Sango", "Satchiko", "Satoko", "Sayoko", "Seijun", "Seina", "Sen", "Shaiwase", "Shigé", "Shiho", "Shika", "Shinju", "Shinobu", "Shiori", "Shizu", "Shoma", "Someina", "Sorano", "Suki", "Sumiye", "Suté", "Suzuë", "Suzume", "Také", "Takako", "Takara", "Taki", "Tamaki", "Tamane", "Tami", "Tamiko", "Tani", "Taree", "Tatsu", "Toki", "Tokiwa", "Tomiju", "Tomone", "Tora", "Toshi", "Tsuru", "Ume", "Umi", "Utano", "Wakumi", "Wattan", "Yo", "Yoko", "Yori", "Yoshima", "Yoshino", "Yuka", "Yume", "Yumi", "Yuri"];
/*500 apellidos*/
var apellidos = ["Satou", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Itou", "Yamamoto", "Nakamura", "Ohayashi", "Kobayashi", "Katou", "Kichida", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto", "Ine", "Inoue", "Saitou", "Kimura", "Hayashi", "Rin", "Kiyomizu", "Shimizu", "Yamasaki", "Ikeda", "Abe", "Mori", "Hashimoto", "Yamashita", "Ishikawa", "Nakashima", "Maeda", "Fujita", "Ogawa", "Kokawa", "Okada", "Gatou", "Gotou", "Hasegawa", "Hayagawa", "Samurakami", "Murakami", "Kondou", "Chikafuji", "Ishii", "Sakamoto", "Endou", "Aoki", "Fujii", "Nishimura", "Fukuda", "Oota", "Miura", "Fujihara", "Okamoto", "Matsuda", "Saitou", "Nakagawa", "Nakano", "Harada", "Ono", "Kono", "Sanu", "Takeuchi", "Tamura", "Kaneko", "Wada", "Nakayama", "Ishida", "Ageda", "Ueda", "Kamida", "Jouda", "Morita", "Hara", "Shibata", "Sakai", "Sakei", "Kudou", "Kodou", "Yokoyama", "Miyazaki", "Miyamoto", "Uchida", "Kouki", "Takaki", "Andou", "Taniguchi", "Oono", "Imai", "Maruyama", "Kouda", "Takata", "Kawano", "Kouno", "Fujimoto", "Ojima", "Kojima", "Takeda", "Murata", "Agano", "Ueno", "Sugiyama", "Masuda", "Sugahara", "Hirano", "Oyama", "Koyama", "Ootsuka", "Kubo", "Chiba", "Matsui", "Iwasaki", "Noguchi", "Matsuo", "Kishita", "Kikuchi", "Nomura", "Sano", "Watanabe", "Arai", "Shini", "Nii", "Sugimoto", "Oonishi", "Sakurai", "Kogawa", "Furukawa", "Ichikawa", "Shimada", "Komatsu", "Kouno", "Takano", "Mizuno", "Kichikawa", "Yoshikawa", "Yamauchi", "Nishida", "Kikuchi", "Saikawa", "Nishikawa", "Kitamura", "Hamada", "Ikarashi", "Yasuda", "Nakada", "Kawaguchi", "Hirata", "Heida", "Kawasaki", "Azuma", "Tou", "Higashi", "Iida", "Honda", "Kubota", "Yoshimura", "Tsuji", "Kan", "Seki", "Nakanishi", "Fukushima", "Iwata", "Hatsutori", "Toiguchi", "Higuchi", "Kawakami", "Matsuoka", "Nagai", "Yamanaka", "Taguchi", "Morimoto", "Yano", "Akiyama", "Tsuchiya", "Ishihara", "Matsushita", "Umaba", "Baba", "Oohashi", "Yoshioka", "Matsuura", "Oike", "Koike", "Asano", "Ookubo", "Kumagai ", "Kumatani", "Araki", "Noda", "Kawamura", "Hoshino", "Hirose", "Ootani", "Kurota", "Ozaki", "Tanabe", "Eida", "Nagata", "Matsumura", "Bouzuki", "Mochizuki", "Motsuzuki", "Hori", "Naitou", "Kanno", "Sugano", "Nishiyama", "Ooshima", "Hirai", "Iwamoto", "Katayama", "Sawada", "Honma", "Hayakawa", "Yokota", "Arai", "Okazaki", "Kamuta", "Ooishi", "Narita", "Oda", "Koda", "Miyata", "Ishibashi", "Sutou", "Shinohara", "Hagiwara", "Kouyama", "Takayama", "Konishi", "Kurihara", "Matsubara", "Itou", "Miyake", "Fukui", "Ozawa", "Kozawa", "Nan", "Minami", "Oomori", "Okumura", "Kataoka", "Uchiyama", "Kuhabara", "Kuwabara", "Oka", "Takuda", "Tomita", "Sekiguchi", "Matsunaga", "Okuta", "Kitakawa", "Koga", "Uenohara", "Kamihara", "Hagi", "Yagi", "Kino", "Yoshino", "Shiraishi", "Imamura", "Kawashima", "Uemura", "Kamimura", "Jouon", "Koizumi", "Nakao", "Aoyama", "Hirayama", "Makino", "Terada", "Shibutani", "Okamura", "Kodama", "Sakaguchi", "Kaai", "Kawai", "Ooyama", "Daisen", "Oota", "Tada", "Onodera", "Miyashita", "Ogura", "Kokura", "Takeda", "Chikuda", "Adachi", "Ogasahara", "Amano", "Tenno", "Murayama", "Sakai", "Sai", "Nishi", "Sugiura", "Sakata", "Ohara", "Kohara", "Toyota", "Kawamura", "Koumura", "Taketou", "Butou", "Mutou", "Kakuta", "Sumita", "Shinoda", "Suitani", "Mizutani", "Nemoto", "Memoto", "Sekine", "Morishita", "Nakai", "Kanda", "Kouda", "Tashima", "Ueda", "Tsukamoto", "Sakuma", "Iitsuka", "Meshizuka", "Maekawa", "Abe", "Asai", "Yamane", "Shirai", "Shiroi", "Hakui", "Hirai", "Miyakawa", "Okabe", "Oosawa", "Ookawa", "Daikawa", "Osada", "Chouda", "Nagata", "Horiuchi", "Inagaki", "Wakabayashi", "Matsusaki", "Enomoto", "Moriyama", "Kamitani", "Kouya", "Shintani", "Nakazawa", "Eguchi", "Nakatani", "Hatakeyama", "Koku", "Tani", "Hazama", "Oikawa", "Oyokawa", "Shikikawa", "Hosokawa", "Mikami", "Imano", "Konno", "Nishio", "Adachi", "Tashiro", "Iijima", "Ishizuka", "Tsuda", "Kishimoto", "Arakawa", "Nakahara", "Nagao", "Tsuchii", "Doi", "Honda", "Morikawa", "Miyoshi", "Toda", "Kanai", "Komeda", "Maida", "Yoneda", "Inaba", "Okano", "Muramatsu", "Matsuyama", "Saiki", "Sahaku", "Nishioka", "Kai", "Hoshi", "Nakashima", "Iwai", "Kuroki", "Tsutsumi", "Kanada", "Kaneda", "Nozaki", "Ochiai", "Hotsuda", "Izumi", "Nishino", "Chouda", "Machida", "Saitou", "Yamagishi", "Arata", "Shinden", "Niita", "Koda", "Furuta", "Tokunaga", "Kurokawa", "Takisawa", "Kawata", "Yamakawa", "Sugita", "Tsuchida", "Toda", "Kasahara", "Kanazawa", "Okuyama", "Sangi", "Miki", "Suda", "Umeta", "Murai", "Nonaka", "Horie", "Ootake", "Kawabata", "Oomura", "Kishi", "Hidaka", "Kajihara", "Hirota", "Fujisawa", "Nishimoto", "Iguchi", "Mukai", "Ooki", "Ooba", "Matsushima", "Takenaka", "Sakakihara", "Fujikawa", "Yoshimoto", "Kawahara", "Yasui", "Ouchi", "Oouchi", "Takeshita", "Yoshihara", "Fujioka", "Shiyouji", "Tsukada", "Fukumoto", "Yanagisawa", "Takashima", "Otani", "Kotani", "Fujimura", "Kunai", "Miyauchi", "Takemoto", "Tanikawa", "Yagawa", "Uno", "Ogata", "Okuno", "Miyazawa", "Kubota", "Shimoda", "Kitano", "Kurita", "Ishikuno", "Kamei", "Chouno", "Nagano", "Tairakawa", "Hirakawa", "Fujino", "Miyanohara", "Miyabara", "Nagashima", "Kawamoto", "Shigeki", "Moki", "Moteki", "Sanwa", "Miwa", "Shitamura", "Yamamura", "Tanba", "Niwa", "Takai", "Kotani", "Furutani", "Yoshizawa", "Aoyagi", "Takemura", "Ideguchi", "Deguchi", "Ogino", "Shimada", "Komori", "Kurosawa", "Tahara", "Tawara", "Takase", "Inada", "Ooki", "Oogusuku", "Daijou", "Susui", "Tsutsui", "Fukuoka", "Yokoi", "Oohira", "Ohira", "Taihei", "Miyagi", "Oohara", "Fukunaga", "Hayashida", "Shinosaki", "Tominaga", "Nagaoka", "Mizokuchi", "Kanausuku", "Kanegi", "Kinjou", "Yamaoka", "Hiramatsu", "Kitahara", "Asada", "Echi", "Ochi", "Kochi", "Tsuruta", "Takei", "Yanagita", "Nagano", "Oota", "Daita", "Nishizawa", "Irie", "Yuasa", "Nagasawa", "Souma", "Ishiyama", "Sonoda", "Takamatsu", "Horikawa", "Ninomiya", "Nimiya", "Usui", "Tazuka", "Tezuka", "Numata", "Kawano", "Kouno", "Ishizaki", "Fukasawa", "Hanada", "Higa", "Hiyoshi", "Ikegami", "Shinoda", "Hiraoka", "Tanimoto", "Koide", "Sugihara", "Negishi", "Saibara", "Nishihara", "Kasai", "Seto", "Tabata", "Nozawa", "Katagiri", "Hamaguchi", "Ootsuki", "Shimura", "Aizawa", "Yajima", "Osaka", "Kosaka", "Kurata", "Hino", "Fukuhara", "Kanou", "Senda", "Chida", "Horiguchi", "Araya", "Shintani", "Niiya", "Kawahara", "Gouhara", "Matsuno", "Murase", "Tokuta", "Kan", "Suga", "Taue", "Tagami", "Morioka", "Tomita", "Yoshii", "Kashiwagi", "Hakugi", "Shimasaki", "Kitajima", "Hamasaki", "Hamano", "Uchiumi", "Utsumi", "Shirakawa", "Nakamoto", "Hatakenaka", "Iwase", "Oyanagi", "Koyanagi", "Akimoto", "Sanya", "Mitani", "Oosaki", "Daisaki", "Akita", "Haraguchi"];
/*811 ciudades*/
var ciudades = ["Nagoya", "Toyohashi", "Okazaki", "Ichinomiya", "Seto", "Handa", "Kasugai", "Toyokawa", "Tsushima", "Hekinan", "Kariya", "Toyota", "Anjō", "Nishio", "Gamagōri", "Inuyama", "Tokoname", "Kōnan", "Komaki", "Inazawa", "Tōkai", "Ōbu", "Chita", "Chiryū", "Owariasahi", "Takahama", "Iwakura", "Toyoake", "Nisshin", "Tahara", "Aisai", "Kiyosu", "Shinshiro", "Kitanagoya", "Yatomi", "Miyoshi", "Ama", "Akita", "Ōdate", "Kazuno", "Daisen", "Katagami", "Kitaakita", "Oga", "Yurihonjō", "Yuzawa", "Semboku", "Yokote", "Nikaho", "Noshiro", "Hachinohe", "Kuroishi", "Misawa", "Mutsu", "Towada", "Tsugaru", "Goshogawara", "Aomori", "Hirakawa", "Hirosaki", "Chiba", "Chōshi", "Ichikawa", "Funabashi", "Tateyama", "Kisarazu", "Matsudo", "Noda", "Mobara", "Narita", "Sakura", "Tōgane", "Narashino", "Kashiwa", "Katsuura", "Ichihara", "Nagareyama", "Yachiyo", "Abiko", "Kamagaya", "Kimitsu", "Futtsu", "Urayasu", "Yotsukaidō", "Sodegaura", "Yachimata", "Inzai", "Shiroi", "Tomisato", "Kamogawa", "Asahi", "Isumi", "Sōsa", "Minamibōsō", "Katori", "Sanmu", "Matsuyama", "Niihama", "Shikokuchūō", "Seiyo", "Tōon", "Saijō", "Ōzu", "Imabari", "Yawatahama", "Iyo", "Uwajima", "Fukui", "Tsuruga", "Obama", "Ōno", "Katsuyama", "Sabae", "Awara", "Echizen", "Sakai", "Fukuoka", "Kurume", "Ōmuta", "Nōgata", "Tagawa", "Yanagawa", "Yame", "Chikugo", "Ōkawa", "Yukuhashi", "Buzen", "Nakama", "Kitakyūshū", "Ogōri", "Chikushino", "Kasuga", "Ōnojō", "Munakata", "Dazaifu", "Koga", "Fukutsu", "Ukiha", "Miyawaka", "Asakura", "Iizuka", "Kama", "Miyama", "Itoshima", "Aizuwakamatsu", "Fukushima", "Kōriyama", "Sukagawa", "Sōma", "Iwaki", "Tamura", "Shirakawa", "Nihonmatsu", "Minamisōma", "Date", "Kitakata", "Motomiya", "Gifu", "Ōgaki", "Takayama", "Tajimi", "Seki", "Nakatsugawa", "Mino", "Mizunami", "Hashima", "Minokamo", "Toki", "Kakamigahara", "Kani", "Yamagata", "Mizuho", "Hida", "Motosu", "Gujō", "Gero", "Ena", "Kaizu", "Maebashi", "Takasaki", "Kiryū", "Isesaki", "Ōta", "Numata", "Tatebayashi", "Fujioka", "Shibukawa", "Annaka", "Tomioka", "Midori", "Hiroshima", "Onomichi", "Kure", "Fukuyama", "Mihara", "Fuchū", "Miyoshi", "Shōbara", "Ōtake", "Takehara", "Higashihiroshima", "Hatsukaichi", "Akitakata", "Etajima", "Sapporo", "Hakodate", "Otaru", "Asahikawa", "Muroran", "Obihiro", "Yūbari", "Iwamizawa", "Abashiri", "Rumoi", "Tomakomai", "Wakkanai", "Bibai", "Ashibetsu", "Ebetsu", "Akabira", "Monbetsu", "Mikasa", "Nemuro", "Chitose", "Takikawa", "Sunagawa", "Utashinai", "Fukagawa", "Furano", "Noboribetsu", "Eniwa", "Date", "Kitahiroshima", "Ishikari", "Shibetsu", "Kushiro", "Hokuto", "Kitami", "Nayoro", "Kobe", "Himeji", "Amagasaki", "Akashi", "Nishinomiya", "Ashiya", "Itami", "Aioi", "Toyooka", "Kakogawa", "Akō", "Takarazuka", "Miki", "Takasago", "Kawanishi", "Ono", "Sanda", "Kasai", "Sasayama", "Yabu", "Tamba", "Minamiawaji", "Asago", "Awaji", "Shisō", "Nishiwaki", "Tatsuno", "Sumoto", "Katō", "Mito", "Hitachi", "Tsuchiura", "Yūki", "Ryūgasaki", "Shimotsuma", "Jōsō", "Hitachiōta", "Takahagi", "Kitaibaraki", "Toride", "Ushiku", "Tsukuba", "Hitachinaka", "Kashima", "Itako", "Moriya", "Hitachiōmiya", "Naka", "Bandō", "Inashiki", "Chikusei", "Kasumigaura", "Kamisu", "Namegata", "Koga", "Ishioka", "Sakuragawa", "Hokota", "Kasama", "Tsukubamirai", "Omitama", "Kanazawa", "Nonoichi", "Nanao", "Komatsu", "Suzu", "Hakui", "Kahoku", "Hakusan", "Nomi", "Kaga", "Wajima", "Morioka", "Kamaishi", "Ōfunato", "Rikuzentakata", "Kitakami", "Miyako", "Hachimantai", "Ichinoseki", "Tōno", "Hanamaki", "Ninohe", "Ōshū", "Kuji", "Takizawa", "Takamatsu", "Marugame", "Sakaide", "Zentsūji", "Sanuki", "Higashikagawa", "Mitoyo", "Kan'onji", "Kagoshima", "Kanoya", "Makurazaki", "Akune", "Izumi", "Ibusuki", "Minamisatsuma", "Nishinoomote", "Tarumizu", "Satsumasendai", "Hioki", "Soo", "Ichikikushikino", "Kirishima", "Shibushi", "Amami", "Minamikyūshū", "Isa", "Aira", "Yokohama", "Yokosuka", "Kawasaki", "Hiratsuka", "Kamakura", "Fujisawa", "Odawara", "Chigasaki", "Zushi", "Sagamihara", "Miura", "Hadano", "Atsugi", "Yamato", "Isehara", "Ebina", "Zama", "Minamiashigara", "Ayase", "Kōchi", "Sukumo", "Aki", "Tosashimizu", "Susaki", "Tosa", "Muroto", "Nankoku", "Shimanto", "Kami", "Kōnan", "Kumamoto", "Yatsushiro", "Hitoyoshi", "Arao", "Minamata", "Tamana", "Yamaga", "Kikuchi", "Uto", "Kami-Amakusa", "Uki", "Aso", "Kōshi", "Amakusa", "Kyoto", "Fukuchiyama", "Maizuru", "Ayabe", "Uji", "Miyazu", "Kameoka", "Jōyō", "Mukō", "Nagaokakyō", "Yawata", "Kyōtanabe", "Kyōtango", "Nantan", "Kizugawa", "Yokkaichi", "Matsusaka", "Kuwana", "Suzuka", "Nabari", "Owase", "Kameyama", "Toba", "Inabe", "Shima", "Iga", "Ise", "Kumano", "Tsu", "Sendai", "Ishinomaki", "Shiogama", "Shiroishi", "Natori", "Kakuda", "Tagajō", "Iwanuma", "Tome", "Kurihara", "Higashimatsushima", "Kesennuma", "Ōsaki", "Miyazaki", "Miyakonojō", "Nobeoka", "Nichinan", "Kobayashi", "Hyūga", "Kushima", "Saito", "Ebino", "Matsumoto", "Okaya", "Suwa", "Suzaka", "Komoro", "Komagane", "Ōmachi", "Iiyama", "Iida", "Chino", "Shiojiri", "Nagano", "Chikuma", "Tōmi", "Nakano", "Saku", "Azumino", "Ueda", "Ina", "Nagasaki", "Sasebo", "Shimabara", "Ōmura", "Tsushima", "Iki", "Gotō", "Isahaya", "Saikai", "Hirado", "Unzen", "Matsuura", "Minamishimabara", "Nara", "Yamatotakada", "Yamatokōriyama", "Tenri", "Kashihara", "Sakurai", "Gojō", "Gose", "Ikoma", "Kashiba", "Katsuragi", "Uda", "Niigata", "Nagaoka", "Kashiwazaki", "Shibata", "Ojiya", "Kamo", "Mitsuke", "Murakami", "Myōkō", "Jōetsu", "Sado", "Agano", "Uonuma", "Minami-Uonuma", "Itoigawa", "Tōkamachi", "Sanjō", "Tainai", "Gosen", "Tsubame", "Ōita", "Beppu", "Nakatsu", "Hita", "Saiki", "Usuki", "Tsukumi", "Taketa", "Bungotakada", "Usa", "Bungo-ōno", "Kitsuki", "Yufu", "Kunisaki", "Okayama", "Kurashiki", "Tsuyama", "Tamano", "Kasaoka", "Ibara", "Sōja", "Takahashi", "Niimi", "Bizen", "Setouchi", "Akaiwa", "Maniwa", "Mimasaka", "Asakuchi", "Naha", "Ishigaki", "Ginowan", "Urasoe", "Nago", "Itoman", "Okinawa", "Tomigusuku", "Uruma", "Miyakojima", "Nanjō", "Osaka", "Sakai", "Kishiwada", "Toyonaka", "Ikeda", "Suita", "Izumiōtsu", "Takatsuki", "Kaizuka", "Moriguchi", "Hirakata", "Ibaraki", "Yao", "Izumisano", "Tondabayashi", "Neyagawa", "Kawachinagano", "Matsubara", "Daitō", "Izumi", "Minoh", "Kashiwara", "Habikino", "Kadoma", "Settsu", "Takaishi", "Fujiidera", "Higashiōsaka", "Sennan", "Shijōnawate", "Katano", "Ōsakasayama", "Hannan", "Tosu", "Imari", "Kashima", "Taku", "Karatsu", "Ogi", "Saga", "Ureshino", "Takeo", "Kanzaki", "Kawagoe", "Kawaguchi", "Gyōda", "Chichibu", "Tokorozawa", "Hannō", "Kazo", "Higashimatsuyama", "Sayama", "Hanyū", "Kōnosu", "Ageo", "Sōka", "Koshigaya", "Warabi", "Toda", "Iruma", "Asaka", "Shiki", "Wakō", "Niiza", "Okegawa", "Kuki", "Kitamoto", "Yashio", "Fujimi", "Misato", "Hasuda", "Sakado", "Satte", "Tsurugashima", "Hidaka", "Yoshikawa", "Saitama", "Kumagaya", "Kasukabe", "Fujimino", "Fukaya", "Honjō", "Ōtsu", "Hikone", "Ōmihachiman", "Kusatsu", "Moriyama", "Rittō", "Kōka", "Yasu", "Konan", "Takashima", "Higashiōmi", "Maibara", "Nagahama", "Matsue", "Izumo", "Masuda", "Yasugi", "Gōtsu", "Unnan", "Hamada", "Ōda", "Shizuoka", "Hamamatsu", "Numazu", "Atami", "Mishima", "Fujinomiya", "Itō", "Shimada", "Iwata", "Yaizu", "Kakegawa", "Fujieda", "Gotenba", "Fukuroi", "Fuji", "Shimoda", "Susono", "Kosai", "Izu", "Omaezaki", "Kikugawa", "Izunokuni", "Makinohara", "Utsunomiya", "Ashikaga", "Tochigi", "Kanuma", "Oyama", "Mooka", "Ōtawara", "Yaita", "Nasushiobara", "Sano", "Sakura", "Nasukarasuyama", "Shimotsuke", "Nikkō", "Tokushima", "Naruto", "Komatsushima", "Anan", "Yoshinogawa", "Mima", "Awa", "Miyoshi", "Hachiōji", "Tachikawa", "Musashino", "Mitaka", "Ōme", "Fuchū", "Akishima", "Chōfu", "Machida", "Koganei", "Kodaira", "Hino", "Higashimurayama", "Kokubunji", "Kunitachi", "Fussa", "Komae", "Higashiyamato", "Kiyose", "Higashikurume", "Musashimurayama", "Tama", "Inagi", "Hamura", "Akiruno", "Nishitōkyō", "Special wards of Tokyo", "Adachi", "Arakawa", "Bunkyo", "Chiyoda", "Chūō", "Edogawa", "Itabashi", "Katsushika", "Kita", "Koto", "Meguro", "Minato", "Nakano", "Nerima", "Ōta", "Setagaya", "Shibuya", "Shinagawa", "Shinjuku", "Suginami", "Sumida", "Taitō", "Toshima", "Tottori", "Yonago", "Kurayoshi", "Sakaiminato", "Toyama", "Uozu", "Himi", "Namerikawa", "Tonami", "Oyabe", "Nanto", "Takaoka", "Imizu", "Kurobe", "Wakayama", "Kainan", "Tanabe", "Gobō", "Arida", "Shingū", "Kinokawa", "Hashimoto", "Iwade", "Yamagata", "Yonezawa", "Shinjō", "Sagae", "Kaminoyama", "Murayama", "Nagai", "Tendō", "Higashine", "Obanazawa", "Nan'yō", "Tsuruoka", "Sakata", "Ube", "Hōfu", "Kudamatsu", "Mine", "Shūnan", "Hikari", "Shimonoseki", "Yanai", "Hagi", "Nagato", "San'yō-Onoda", "Yamaguchi", "Iwakuni", "Kōfu", "Fujiyoshida", "Tsuru", "Ōtsuki", "Nirasaki", "Minami-Alps", "Kai", "Fuefuki", "Hokuto", "Uenohara", "Yamanashi", "Kōshū", "Chūō"];
/*8 complexion*/
var complexion = [
    huesos = {nombre: "Saco de huesos", fuerza: 1, destreza: 3, carisma: 2, salud: 9, aguante: 9},
    delgada = {nombre: "Delgada", fuerza: 2, destreza: 3, carisma: 4, salud: 10, aguante: 10},
    normal = {nombre: "Normal", fuerza: 3, destreza: 3, carisma: 3, salud: 10, aguante: 10},
    rellenita = {nombre: "Curvilinea", fuerza: 3, destreza: 3, carisma: 2, salud: 11, aguante: 9},
    grasa = {nombre: "Bola de grasa", fuerza: 4, destreza: 2, carisma: 1, salud: 12, aguante: 8},
    enfermiza = {nombre: "Enfermiza", fuerza: 1, destreza: 2, carisma: 1, salud: 8, aguante: 7},
    fuerte = {nombre: "Cachas", fuerza: 5, destreza: 3, carisma: 6, salud: 12, aguante: 11},
    atletica = {nombre: "Atletica", fuerza: 5, destreza: 3, carisma: 5, salud: 12, aguante: 12}
]
/*10 personalidad*/
var personalidades = [
    rebelde = {nombre: "Rebelde", fuerza: 2, destreza: 1, carisma: 2, inteligencia: 0, salud: 2, aguante: 2},
    seductora = {nombre: "Seductora", fuerza: 0, destreza: 0, carisma: 4, inteligencia: 1, salud: 1, aguante: 1},
    demente = {nombre: "Demente", fuerza: 2, destreza: 2, carisma: -2, inteligencia: -2, salud: 7, aguante: 0},
    agresiva = {nombre: "Agresiva", fuerza: 3, destreza: 2, carisma: -1, inteligencia: 0, salud: 2, aguante: 2},
    pacifica = {nombre: "Pacífica", fuerza: 0, destreza: 0, carisma: 1, inteligencia: 1, salud: 1, aguante: 1},
    amistosa = {nombre: "Amistosa", fuerza: 0, destreza: 0, carisma: 2, inteligencia: 1, salud: 1, aguante: 1},
    solitaria = {nombre: "Solitaria", fuerza: 1, destreza: 1, carisma: -1, inteligencia: 3, salud: 1, aguante: 1},
    analitica = {nombre: "Analítica", fuerza: 0, destreza: 0, carisma: 2, inteligencia: 4, salud: 1, aguante: 1},
    alegre = {nombre: "Alegre", fuerza: 0, destreza: 1, carisma: 3, inteligencia: 1, salud: 2, aguante: 41},
    depresiva = {nombre: "Depresiva", fuerza: 0, destreza: 0, carisma: -1, inteligencia: 3, salud: 4, aguante: -1}
]
/*24 clubs*/
var clubs = [
    ninguno = {nombre: "Ninguno"},
    buscabroncas = {nombre: "Buscabroncas"},
    natación = {nombre: "Natación"},
    canto = {nombre: "Canto"},
    ajedrez = {nombre: "Ajedréz"},
    atletismo = {nombre: "Atletismo"},
    fotografía = {nombre: "Fotografía"},
    mangakas = {nombre: "Otaku"},
    boxeo = {nombre: "Boxeo"},
    judo = {nombre: "Judo"},
    sumo = {nombre: "Sumo"},
    dibujo = {nombre: "Dibujo"},
    cocina = {nombre: "Cocina"},
    encargadoDeClase = {nombre: "Encargado de clase"},
    baseball = {nombre: "Baseball"},
    baloncesto = {nombre: "Baloncesto"},
    futbol = {nombre: "Futbol"},
    ceremoniaDelTe = {nombre: "Ceremonia del té"},
    bandaDeMusica = {nombre: "Banda de música"},
    kendo = {nombre: "Kendo"},
    kyudo = {nombre: "Kyūdō"},
    cine = {nombre: "Cine"},
    ciencias = {nombre: "Ciencias"},
    ingles = {nombre: "Inglés"},
    danza = {nombre: "Danza"}
]
/*42 retratos*/
var retratosM = [];
var retratosF = [];
while (retratosM.length < 21) {
    var randomnumber = Math.ceil(Math.random() * 21)
    var found = false;
    for (var i = 0; i < retratosM.length; i++) {
        if (retratosM[i] == randomnumber) {
            found = true;
            break
        }
    }
    if (!found)retratosM[retratosM.length] = randomnumber;
}
while (retratosF.length < 21) {
    var randomnumber = Math.ceil(Math.random() * 21)
    var found = false;
    for (var i = 0; i < retratosF.length; i++) {
        if (retratosF[i] == randomnumber) {
            found = true;
            break
        }
    }
    if (!found)retratosF[retratosF.length] = randomnumber;
}
/*60 objetos */
var numArmas = 60;
var sorteoArma = [];
while (sorteoArma.length < 60) {
    var randomnumber = Math.ceil(Math.random() * 60)
    var found = false;
    for (var i = 0; i < sorteoArma.length; i++) {
        if (sorteoArma[i] == randomnumber) {
            found = true;
            break
        }
    }
    if (!found)sorteoArma[sorteoArma.length] = randomnumber;
}
var objetos = [
    abanico = {nombre: "Abanico"},
    arco = {nombre: "Arco"},
    ballesta = {nombre: "Ballesta"},
    banjo = {nombre: "Banjo"},
    bastonAturdimiento = {nombre: "Baston de aturdimiento"},
    bate = {nombre: "Bate"},
    bateMetalico = {nombre: "Bate de aluminio"},
    biblia = {nombre: "Biblia"},
    binoculares = {nombre: "Binoculares"},
    bomba = {nombre: "Bomba"},
    boomerang = {nombre: "Boomerang"},
    botiquin = {nombre: "Botiquín"},
    cadena = {nombre: "Cadena"},
    cerbatana = {nombre: "Cerbatana"},
    chalecoAntibalas = {nombre: "Chaleco antibalas"},
    cianuro = {nombre: "Cianuro"},
    cuchillo = {nombre: "Cuchillo"},
    cuerda = {nombre: "Cuerda"},
    dardos = {nombre: "Dardos"},
    escopeta = {nombre: "Escopeta"},
    escudo = {nombre: "Escudo"},
    fusil = {nombre: "Fusil"},
    gafasVisionNocturna = {nombre: "Gafas de visión nocturna"},
    gameboy = {nombre: "Gameboy"},
    granada = {nombre: "Granada"},
    granadaHumo = {nombre: "Granada de humo"},
    guantesBoxeo = {nombre: "Guantes de boxeo"},
    hacha = {nombre: "Hacha"},
    honda = {nombre: "Honda"},
    hoz = {nombre: "Hoz"},
    jeringaAnestesia = {nombre: "Jeringa con Anestesia"},
    katana = {nombre: "Katana"},
    látigo = {nombre: "Látigo"},
    mascaraKabuki = {nombre: "Máscara Kabuki"},
    maza = {nombre: "Maza"},
    megafono = {nombre: "Megáfono"},
    minas = {nombre: "Minas"},
    nunchaku = {nombre: "Nunchaku"},
    pala = {nombre: "Pala"},
    paloClavo = {nombre: "Palo con clavo"},
    patines = {nombre: "Patines"},
    picahielo = {nombre: "Picahielo"},
    pistola = {nombre: "Pistola"},
    pistolaAgua = {nombre: "Pistola de agua"},
    porra = {nombre: "Porra"},
    puñosAmericanos = {nombre: "Puños americanos"},
    radarCollares = {nombre: "Radar de collares"},
    red = {nombre: "Red"},
    revólver = {nombre: "Revólver"},
    rifle = {nombre: "Rifle"},
    sai = {nombre: "Sai"},
    sarten = {nombre: "Sartén"},
    shamisen = {nombre: "Shamisen"},
    shurikens = {nombre: "Shurikens"},
    skate = {nombre: "Skate"},
    subfusil = {nombre: "Subfusil"},
    taser = {nombre: "Taser"},
    tenedor = {nombre: "Tenedor"},
    tiara = {nombre: "Tiara"},
    tirachinas = {nombre: "Tirachinas"},
    zippo = {nombre: "Zippo"}
]

//tirada D100
function tirada() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

//---------CREACIÓN---------------------------
//Personaje femenino
function PersonajeF() {
    //atributos, personalidad, complexión y actividades
    var tiradaPersonalidad = tirada();
    if (tiradaPersonalidad <= 10) {
        this.personalidad = alegre;
    } else if (tiradaPersonalidad <= 20) {
        this.personalidad = rebelde;
    } else if (tiradaPersonalidad <= 38) {
        this.personalidad = seductora;
    } else if (tiradaPersonalidad <= 40) {
        this.personalidad = demente;
    } else if (tiradaPersonalidad <= 50) {
        this.personalidad = agresiva;
    } else if (tiradaPersonalidad <= 60) {
        this.personalidad = pacifica;
    } else if (tiradaPersonalidad <= 70) {
        this.personalidad = amistosa;
    } else if (tiradaPersonalidad <= 80) {
        this.personalidad = solitaria;
    } else if (tiradaPersonalidad <= 90) {
        this.personalidad = analitica;
    } else {
        this.personalidad = depresiva;
    }
    var tiradaComplexion = tirada();
    if (tiradaComplexion <= 10) {
        this.complexion = huesos;
    } else if (tiradaComplexion <= 20) {
        this.complexion = delgada;
    } else if (tiradaComplexion <= 38) {
        this.complexion = normal;
    } else if (tiradaComplexion <= 40) {
        this.complexion = rellenita;
    } else if (tiradaComplexion <= 50) {
        this.complexion = grasa;
    } else if (tiradaComplexion <= 60) {
        this.complexion = fuerte;
    } else if (tiradaComplexion <= 70) {
        this.complexion = atletica;
    } else {
        this.complexion = enfermiza;
    }
    var tiradaActividades = tirada();
    if (tiradaActividades <= 3) {
        this.actividades = ingles;
    } else if (tiradaActividades <= 8) {
        this.actividades = buscabroncas;
    } else if (tiradaActividades <= 9) {
        this.actividades = natación;
    } else if (tiradaActividades <= 12) {
        this.actividades = canto;
    } else if (tiradaActividades <= 16) {
        this.actividades = ajedrez;
    } else if (tiradaActividades <= 18) {
        this.actividades = atletismo;
    } else if (tiradaActividades <= 21) {
        this.actividades = fotografía;
    } else if (tiradaActividades <= 26) {
        this.actividades = mangakas;
    } else if (tiradaActividades <= 27) {
        this.actividades = dibujo;
    } else if (tiradaActividades <= 30) {
        this.actividades = cocina;
    } else if (tiradaActividades <= 36) {
        this.actividades = encargadoDeClase;
    } else if (tiradaActividades <= 42) {
        this.actividades = baseball;
    } else if (tiradaActividades <= 43) {
        this.actividades = baloncesto;
    } else if (tiradaActividades <= 44) {
        this.actividades = futbol;
    } else if (tiradaActividades <= 45) {
        this.actividades = ceremoniaDelTe;
    } else if (tiradaActividades <= 48) {
        this.actividades = bandaDeMusica;
    } else if (tiradaActividades <= 51) {
        this.actividades = kendo;
    } else if (tiradaActividades <= 54) {
        this.actividades = kyudo;
    } else if (tiradaActividades <= 57) {
        this.actividades = cine;
    } else if (tiradaActividades <= 60) {
        this.actividades = ciencias;
    } else if (tiradaActividades <= 63) {
        this.actividades = danza;
    } else if (tiradaActividades <= 68) {
        this.actividades = boxeo;
    } else if (tiradaActividades <= 69) {
        this.actividades = judo;
    } else {
        this.actividades = ninguno;
    }
    this.fuerza = Math.floor(Math.random() * 5 + 1) + this.complexion.fuerza + this.personalidad.fuerza;
    this.destreza = Math.floor(Math.random() * 5 + 1) + this.complexion.destreza + this.personalidad.destreza;
    this.carisma = Math.floor(Math.random() * 5 + 1) + this.complexion.carisma + this.personalidad.carisma;
    this.inteligencia = Math.floor(Math.random() * 5 + 1) + this.personalidad.inteligencia;
    this.salud = Math.floor(Math.random() * 5 + 1) + this.complexion.salud + this.personalidad.salud;
    this.aguante = Math.floor(Math.random() * 5 + 1) + this.complexion.aguante + this.personalidad.aguante;


    //nombre completo y numero
    this.nombre = nombresF[Math.floor(Math.random() * 199)];
    this.apellido = apellidos[Math.floor(Math.random() * 500)];
    this.numeroAlumno = numeroAlumno;
    this.retrato = "f (" + retratosF[numRetratoF] + ").jpeg";
    //sexo y orientación sexual
    this.sexo = "Femenino";
    var tiradaOrientacion = tirada();
    if (tiradaOrientacion <= 85) {
        this.orientacionSexual = "Heterosexual";
    } else if (tiradaOrientacion <= 90) {
        this.orientacionSexual = "Homosexual";
    } else if (tiradaOrientacion <= 98) {
        this.orientacionSexual = "Bisexual";
    } else {
        this.orientacionSexual = "Asexual";
    }
    //edad
    var tiradaEdad = tirada();
    if (tiradaEdad <= 90) {
        this.edad = 16;
    }
    else if (tiradaEdad <= 98) {
        this.edad = 17;
        this.inteligencia++;
    } else {
        this.edad = 18;
        this.inteligencia++;
        this.carisma++;
    }
    //altura
    var tiradaAltura = tirada();
    if (tiradaAltura <= 75) {
        this.altura = (Math.random() * (1.75 - 1.65) + 1.65).toFixed(2);
    }
    else if (tiradaAltura <= 97) {
        this.altura = (Math.random() * (1.65 - 1.50) + 1.50).toFixed(2);
        this.destreza++;
        this.carisma++;
    } else {
        this.altura = (Math.random() * (2.05 - 1.75) + 1.85).toFixed(2);
        this.destreza--;
        this.carisma--;
    }
    //arma
    this.arma = objetos[sorteoArma[sorteoArmas] - 1];
    //incrementos
    numeroAlumno++;
    numRetratoF++;
    sorteoArmas++;
}

//Personaje masculino
function PersonajeM() {
    //atributos, personalidad y complexión
    var tiradaPersonalidad = tirada();
    if (tiradaPersonalidad <= 10) {
        this.personalidad = alegre;
    } else if (tiradaPersonalidad <= 20) {
        this.personalidad = rebelde;
    } else if (tiradaPersonalidad <= 38) {
        this.personalidad = seductora;
    } else if (tiradaPersonalidad <= 40) {
        this.personalidad = demente;
    } else if (tiradaPersonalidad <= 50) {
        this.personalidad = agresiva;
    } else if (tiradaPersonalidad <= 60) {
        this.personalidad = pacifica;
    } else if (tiradaPersonalidad <= 70) {
        this.personalidad = amistosa;
    } else if (tiradaPersonalidad <= 80) {
        this.personalidad = solitaria;
    } else if (tiradaPersonalidad <= 90) {
        this.personalidad = analitica;
    } else {
        this.personalidad = depresiva;
    }
    var tiradaComplexion = tirada();
    if (tiradaComplexion <= 10) {
        this.complexion = huesos;
    } else if (tiradaComplexion <= 20) {
        this.complexion = delgada;
    } else if (tiradaComplexion <= 38) {
        this.complexion = normal;
    } else if (tiradaComplexion <= 40) {
        this.complexion = rellenita;
    } else if (tiradaComplexion <= 50) {
        this.complexion = grasa;
    } else if (tiradaComplexion <= 60) {
        this.complexion = fuerte;
    } else if (tiradaComplexion <= 70) {
        this.complexion = atletica;
    } else {
        this.complexion = enfermiza;
    }
    var tiradaActividades = tirada();
    if (tiradaActividades <= 3) {
        this.actividades = ingles;
    } else if (tiradaActividades <= 5) {
        this.actividades = buscabroncas;
    } else if (tiradaActividades <= 9) {
        this.actividades = natación;
    } else if (tiradaActividades <= 13) {
        this.actividades = canto;
    } else if (tiradaActividades <= 15) {
        this.actividades = ajedrez;
    } else if (tiradaActividades <= 18) {
        this.actividades = atletismo;
    } else if (tiradaActividades <= 21) {
        this.actividades = fotografía;
    } else if (tiradaActividades <= 23) {
        this.actividades = mangakas;
    } else if (tiradaActividades <= 28) {
        this.actividades = dibujo;
    } else if (tiradaActividades <= 31) {
        this.actividades = cocina;
    } else if (tiradaActividades <= 33) {
        this.actividades = encargadoDeClase;
    } else if (tiradaActividades <= 35) {
        this.actividades = baseball;
    } else if (tiradaActividades <= 38) {
        this.actividades = baloncesto;
    } else if (tiradaActividades <= 42) {
        this.actividades = futbol;
    } else if (tiradaActividades <= 47) {
        this.actividades = ceremoniaDelTe;
    } else if (tiradaActividades <= 48) {
        this.actividades = bandaDeMusica;
    } else if (tiradaActividades <= 51) {
        this.actividades = kendo;
    } else if (tiradaActividades <= 54) {
        this.actividades = kyudo;
    } else if (tiradaActividades <= 57) {
        this.actividades = cine;
    } else if (tiradaActividades <= 60) {
        this.actividades = ciencias;
    } else if (tiradaActividades <= 65) {
        this.actividades = danza;
    } else if (tiradaActividades <= 66) {
        this.actividades = boxeo;
    } else if (tiradaActividades <= 69) {
        this.actividades = judo;
    } else if (tiradaActividades <= 75 && this.complexion.nombre === "Bola de grasa") {
        this.actividades = sumo;
    } else {
        this.actividades = ninguno;
    }
    this.fuerza = Math.floor(Math.random() * 5 + 1) + this.complexion.fuerza + this.personalidad.fuerza;
    this.destreza = Math.floor(Math.random() * 5 + 1) + this.complexion.destreza + this.personalidad.destreza;
    this.carisma = Math.floor(Math.random() * 5 + 1) + this.complexion.carisma + this.personalidad.carisma;
    this.inteligencia = Math.floor(Math.random() * 5 + 1) + this.personalidad.inteligencia;
    this.salud = Math.floor(Math.random() * 5 + 1) + this.complexion.salud + this.personalidad.salud;
    this.aguante = Math.floor(Math.random() * 5 + 1) + this.complexion.aguante + this.personalidad.aguante;

    //nombre completo, numero y retrato
    this.nombre = nombresM[Math.floor(Math.random() * 199)];
    this.apellido = apellidos[Math.floor(Math.random() * 500)];
    this.numeroAlumno = numeroAlumno;
    this.retrato = "m (" + retratosF[numRetratoF] + ").jpeg";
    //sexo y orientación sexual
    this.sexo = "Masculino";
    var tiradaOrientacion = tirada();
    if (tiradaOrientacion <= 87) {
        this.orientacionSexual = "Heterosexual";
    }
    else if (tiradaOrientacion <= 94) {
        this.orientacionSexual = "Homosexual";
    } else if (tiradaOrientacion <= 98) {
        this.orientacionSexual = "Bisexual";
    } else {
        this.orientacionSexual = "Asexual";
    }
    //edad
    var tiradaEdad = tirada();
    if (tiradaEdad <= 75) {
        this.edad = 16;
    }
    else if (tiradaEdad <= 95) {
        this.edad = 17;
        this.inteligencia++;
    } else {
        this.edad = 18;
        this.inteligencia++;
        this.carisma++;
    }
    //altura
    var tiradaAltura = tirada();
    if (tiradaAltura <= 85) {
        this.altura = (Math.random() * (1.75 - 1.65) + 1.65).toFixed(2);
    }
    else if (tiradaAltura <= 89) {
        this.altura = (Math.random() * (1.65 - 1.50) + 1.55).toFixed(2);
        this.destreza++;
        this.carisma--;
    } else {
        this.altura = (Math.random() * (2.03 - 1.75) + 1.85).toFixed(2);
        this.destreza--;
        this.carisma++;
    }
    //arma
    this.arma = objetos[sorteoArma[sorteoArmas] - 1];
    //incrementos
    numeroAlumno++;
    numRetratoM++;
    sorteoArmas++;
}

//--Array personajes--
var personajes = [];
var personaje;
var numeroAlumno = 1;
var numRetratoM = 0;
var numRetratoF = 0;
var sorteoArmas = 0;
for (i = 1; i <= 42; i++) {
    personaje = new PersonajeM();
    personajes.push(personaje);
    personaje = new PersonajeF();
    personajes.push(personaje);
}
var letra = ["A", "B", "C", "D"];
var clase = "Escuela Media Superior de la prefectura de " + ciudades[Math.floor(Math.random() * 810)] + " " + Math.floor(Math.random() * 4 + 1) + "-" + letra[Math.floor(Math.random() * 4)];