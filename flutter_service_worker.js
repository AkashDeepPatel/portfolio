'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7c239f2741c113032bf9678d76b26c06",
".git/config": "d3bdc9ab27d58ca238cd2a3b500025a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a0504370d23ebe8e20d4c318161b1bb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1a29cda2d45cf974942f227aa302ff2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cba65f25d60c057211f9354aabc375fb",
".git/logs/refs/heads/main": "609120f41e49e87e740e57f08d54a8f4",
".git/logs/refs/remotes/origin/main": "1235b08cdf8c1531f03e0fd7a10e83bf",
".git/objects/03/bf58c86ec6ca06bd66aa60e9d7c5b5eab2853c": "603bb6205b3fc5f506d81925715bb6cd",
".git/objects/07/d508ee763e8226a80d67ae2ad2cd4cc4a04de5": "c05c629faa1d252c66b4c9e086cf1bd4",
".git/objects/09/7b5f4cbef8eaf962561a044ba7326345510e32": "17ab8212acd06a0f50215ee93c479d8a",
".git/objects/0c/ad68d8ac72a93c358d94243481829b84b26cf3": "28458a3b18afb4f11c409de299340629",
".git/objects/0e/2042fae7f6bdb505738d00846da4dbaa226f38": "3a6e737256fd0af5728fbef73c279cf0",
".git/objects/0e/f2098bdb83c39cdcf162c9946c32309e952d4d": "5b5ba115dda97267b5776edb8fe0b20b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/1a1d1b15945898eb6161c9adabc9f05f145ba7": "44d1fca4f6252befbd7d952a7d27f6a6",
".git/objects/17/ac4b48c52b449bbf1e76e2a72ed72ca76120ca": "bc99df4da79437ee9ea0208f7a0ac0f5",
".git/objects/18/ce4ee6b099fa9e610a5b48a816a7772726d4f9": "0d49f2a7ebad3e5e3600001e02a11abe",
".git/objects/19/3e384143cc7ad4e45799f0074ae125af8476c6": "a5bbc69f2426ac0d9f5e9ad24efb45f0",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1b/51234fed5cca90d8ba9b535f8bbdd248ddbd06": "947b92bd8d947a31e66f7d3be815e790",
".git/objects/1d/6db1e098607514705106ff1308202d8f6f658e": "39bcab93b4c5a59e85420de802977b5c",
".git/objects/1d/9a6c9bb19a277389c1e5aa93beb6e5dbd66d9d": "8d0f80d20f354cad75d0cf00936827d8",
".git/objects/22/8c8a0a151a93d2562b7a0009ff647c768a67f5": "e6ecf8fb18bc80553f3c90d3d8bf971e",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/254fba7967dcf654df117265a5519b37e85c69": "e48cbc85e6a0b36fa2d23a74c80b59c6",
".git/objects/24/c00bc64653cde4ec9e78565b564792fdf714d0": "6e31382b94a0ec60617534f092fba1c7",
".git/objects/29/12bf2bdc0c3156e8718d23e780322e45cb07e6": "58179169038ddf122946ccb32b3b499d",
".git/objects/29/1af4c5e3f5cfbb39616b6f95f64abc8ea1b90e": "b14a39822d7267b7240e20a615b47111",
".git/objects/29/37fd57bf9d22e7c0b86a5142655421a35e5407": "c69a80ab14273254036d8b6777d42793",
".git/objects/2a/be6eb32ae18192b088283d915a0ffec4f4bff0": "67b0f515a077c4ebad523aad5f86457a",
".git/objects/2c/008f3af55fce09869bb860f4423aa6be4bb34a": "e4432d208975a9eb66ca2f277b435fbb",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/34/46e1b539500e87222ca48ae43bb88aade659ab": "fcb1d918aefcae633ab226c066c529b9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3f/8bba346ef7fffc338983658cfbbecc01e2c652": "353fa52975f69bd626185b857f86c2aa",
".git/objects/43/daa53f8b3ac9d025a820ddff2e8c8c65bc61b4": "ba7607cc47e8b9cb8f70d3fc49b5fd30",
".git/objects/47/7fa12026f663470bd36258803f04153b98704f": "7216a3060a22d2b96db843671eed96e1",
".git/objects/48/1d5c42165f4e283bc6d37ca35ee8c8cdafce08": "b9ace0ef8f86c63cde4b9c403f26aa65",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/d53a610a555ad70ba24668e3b6b3d1aa4cdb6d": "ab2a2d417471b5735972c9110a22db3a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/dde50f41b68dca08d783eaa3e2fa989009a877": "7b90e848b2771f08a927b77288f694ce",
".git/objects/54/8618083ff19f4b59f15e34105ccb62f6fff1bd": "f17d91087e279ccf562ae62e1307d5fc",
".git/objects/55/0433932fa0e5dd4f9dd781df72641c95b83779": "bdace4cabd8a7baa9bfbe21d70fa22d9",
".git/objects/55/5a59d13aee2f6f5351b1fda27872a9bcaeedef": "99e42865e158c2a2c41d00869766154f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/f61edbaa8bf43150a4dddc2d2d067d255b1ce8": "85394de28f1d5202a6a8e8e984738016",
".git/objects/57/a08bac34a8acdfe15f422ed03e8b2bd68b007d": "6c0bd716563294aff89a0deb68910c7d",
".git/objects/5e/582736de9eec4d4d0a771c279b8f26680c1679": "f253aaf63c851056c3affd18ce44eeb4",
".git/objects/5f/aa45abcc05b5dd7cdb1a15d6cc05264a9806ed": "baf10c0f6d29cb5763262c284d01cd32",
".git/objects/61/31ae29794fefff84f30d317afeb8d8e05287c3": "84b8e553042b4f3dbe972f3232a73f79",
".git/objects/62/acbd6dcef33e4586db2dd269cb1ea32ddd990b": "84530013b5043cdba8965dcf3c8d1fc5",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/b24136dd563f8d3e71ef6eaf021c4857679df7": "89dd6139f761d8a82762fe53fac15732",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/b8267e5b5a8460ddc5cd347cb7c6be5fc17f87": "1f0b437de7f9bee03e356f8f06c3dee0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/18a4e594a167fcfcc776029af87a920a3ab67b": "9a73becd5195b3568adcb6533a80500f",
".git/objects/7a/8ae128a4b848d71037bc1c768445d352f09d87": "b6b4c5650e5abe953812ea7d528178a7",
".git/objects/81/c1d70315e9cb5ce41be5a7f9e924cbe939ffe9": "5dcdf3a91f89f7e9836f299d14d61559",
".git/objects/82/e0608d4d6a7ee3e4d5f57485ad00190a27fe03": "39cf6c03af8f6a6f76b1daff66fc86fe",
".git/objects/85/98f3f128c0e7c9fa9c975e5a13e3bae260b882": "861465f930b3b217c24bfd4838ea7678",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/c4511d6ec0372ca6d2dda6371a96556acf6c96": "e0738452e23bbcbb94d303fb895ab080",
".git/objects/94/8166ef76a05e7b91e4b3c8e5eadfcd5ded4511": "c2cb82d810ebddf981ca690cd7594818",
".git/objects/99/884ccc7a1499d8a92e3a4c161f17ec67c9c621": "4c571173447b3b3e2371faf07fa73ce6",
".git/objects/9c/0f99b5e2bf985ca25280547ce1b761c61424eb": "3fb7772d6d30477b9fcc03646bd0e772",
".git/objects/9e/7d221fdf39eebc2defbc5885a658504ad8da9a": "686e728c8bf057388569bd47845529ad",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bfb9539f18c859ecedcf832b2dc2415169b617": "3111c04e335e42311a63a572cf37320d",
".git/objects/a3/1d9197be7c8e269236737067727d63bd9df049": "a5e87ccdeec87f468adf277fb8b98d62",
".git/objects/a3/ec9fcccdfc7f146f920a0e99cc84fa22282fd4": "90963888b80fe8e00372a623d4e6b235",
".git/objects/a5/3122b6fb6b3ec90dceb8d493d808b06c51b910": "5965c79dafbfe3742203c34efc5a1eac",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/db246c0e1e568ff71d9112502cac9181a207a5": "0f7a1f0573a3bad2adfdc7cc566dbfcb",
".git/objects/b2/d7e41d9b1cd1a73cc498487620008d8ede3421": "7585a32aacf01bcf68b29fe45764f4db",
".git/objects/b3/9fe5e081f0a74e96a81ec02bea5d1714f94eaa": "cba16cf94bd91b08deea46581ca12794",
".git/objects/b4/df122adb1bf5bc15f49b8e304cde915625a9a1": "3e39b0131dff398fcb75756d4bae5006",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/6967cc600de6336d102f1f2ce2866e15a51f8c": "b9f6b03407c400c48877d25ced5d52ab",
".git/objects/bb/de15bad7d05c86f46873128f884336acdda41d": "aba6470a63c7853e18f41f853ccd284e",
".git/objects/bc/46029c1e9f67937438d541929a133acdfe2cd9": "5e615b3babdded47832eb1518ce2e8b6",
".git/objects/c1/981b84d092fb05c396ab4e3e378c514a813bda": "d6a38d30d8422d3c586efb29856b302c",
".git/objects/c7/a88c01a35ccaa1fb32782b430c7a9dffd9185e": "b8c31a05e92b0dcedd0233dedbaab4a5",
".git/objects/ca/77905fffbbf6e191ea2d0350ee3d0d93ae2a5d": "1803cbfda78f2ca16f97e13389cdbb87",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/ce/38bde765daaec36377b8875977ad7be313e099": "8555343ca8d251624d9a9362a8f147a6",
".git/objects/cf/91c1308157c7f0802c583c653e296cbcc76aad": "58a59d89a9e31cb3d67622199b500f24",
".git/objects/d1/41aec260f38e4a036d9c5d467d97060a940d64": "9eeb82cb86ce2550787dcd76db232a30",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d6/093d634aeeb38297e66adedae64a8fcec02278": "97cb1432949da8dddd82584f823e8517",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f25ed22418bf613c2c4276cf9ac27b5aab2412": "32bd9887c1fafbaf6c006ab5ca37424d",
".git/objects/d8/f92d49373310fc8ed0b2a47da92e422f4498ad": "a4f17262e97331486eb31a2e52be9a34",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e3/203f53406092537e2ea689b3ce51a097c6dccc": "95e3d334e0bca02b60e307f6919144fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/04a5b2a2ea706be456fd3ea56f4f26a9328f07": "4a5a03d29816f15871947ee403104f70",
".git/objects/ea/141fda6a99022e33e4d48e1397776e3781faef": "95b9952fc56b9ec0d76ec3493415aa3a",
".git/objects/ea/5a25cfc682ecebda0ea8da30bb8d22351783d1": "c22acd5093c7d3281745ac147c296080",
".git/objects/ea/9f321ec14b0628effb128a5fbf411ed62945b8": "ea5c6801c716227314df3d07420c26ef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/673350cea4bfc69486986cacbc56ebb8ed5b04": "705e4aef962db9e256d9ed1d25f20eed",
".git/objects/fa/882e504f41f10af8ecdbe016b7e77459bad010": "4b63f1ed694e08ae68600074aeb32e9b",
".git/objects/fe/89e615fc3b7fbb4a33e6e101d7b06a3b54dddd": "9547cf99d6ff37247773342bc026b390",
".git/ORIG_HEAD": "44a410623602dcbb7f70cc3172c418bc",
".git/refs/heads/main": "44a410623602dcbb7f70cc3172c418bc",
".git/refs/remotes/origin/main": "44a410623602dcbb7f70cc3172c418bc",
"assets/AssetManifest.json": "7f7c28205400d1d50d68a32d5deebbf0",
"assets/assets/bg.jpg": "ba353591b9df0240f091d6f1cc213a60",
"assets/assets/bg.png": "c6f56031c490a1840876cad1a99252e5",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/logoAD.png": "6f993f7c14cc1e1b6027b9084f3ff942",
"assets/assets/profileImage.jpg": "61758fd7fd445e66422c173e7de2f82f",
"assets/assets/profileImage.png": "6afff4fcc3b867480362a7f9c0f2cc86",
"assets/assets/projects/bakery.png": "62d9a77276b2964cfb6aef273a4a578a",
"assets/assets/projects/bakeryIcon.png": "dbb2b606bc6bad800794d79402927b5e",
"assets/assets/projects/bitsis.png": "ea19e5a917af56d45324c5a522934916",
"assets/assets/projects/bitsisIcon.png": "2085fc5e49eddcac71110635d05cb1b9",
"assets/assets/projects/flashChat.png": "3a7bfcb79e06a93d8ee6dc6a3d8082bb",
"assets/assets/projects/flashChatIcon.png": "e4339619b7dc7a47599203ddce9dbae6",
"assets/assets/projects/todoey.png": "2a5bfe3c9e1abd9a692b6f601a70944d",
"assets/assets/projects/todoeyIcon.png": "6c789bb32a64d5ef71cff4d050bc9a28",
"assets/assets/radialBackground.png": "feb626494625c95e16570bbe398c5bf5",
"assets/assets/skills/api-48.png": "9eb1224f2a26964cf74967bcacd21bc0",
"assets/assets/skills/c++-48.png": "b8a1078d92d851db2364d5e405a0649d",
"assets/assets/skills/c-programming-48.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/skills/css3-48.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/skills/dart-48.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/skills/firebase-48.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/skills/flutter-48.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/skills/github-48.png": "f92022d57499aede3ae2a6caf95ea846",
"assets/assets/skills/html-5-48.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/skills/java-48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/skills/javascript-48.png": "d8b359bb45cbe32632e8fc7901b27615",
"assets/assets/skills/json-48.png": "9e71d92f96aa0412d2f5a2b8628d7d20",
"assets/assets/skills/material-ui-48.png": "90271ab85509bd448f946c6aec6336a3",
"assets/assets/skills/programming.gif": "82796510d41e19c1ce907b3db2725c0a",
"assets/assets/skills/python-48.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/skills/source-code-48.png": "bdd148dace8e36f2d8799c7e1c2e2a81",
"assets/assets/skills/sql-48.png": "f86409a79ad9f07aaaece03530de2e6d",
"assets/assets/socials/facebook.gif": "575ad1504a7f101239a693c88cb28285",
"assets/assets/socials/github.gif": "d87188bed77928ed7538833a03a9b858",
"assets/assets/socials/instagram.gif": "92a4ef87e6cb8d1b4c5d7e8a6f2092f0",
"assets/assets/socials/linkedin.gif": "11c96a7734046da714156a1d3c2cf347",
"assets/assets/socials/twitter.gif": "b74e515a0c76206b496fac336ce5ce86",
"assets/assets/work_experience/biya.png": "9e2946123670e554c24d81036e30f652",
"assets/assets/work_experience/mys.jpeg": "6c02e6c99dfa4244868b5587087a0bed",
"assets/assets/work_experience/tsf.png": "1b2c7a6db251301c8e1581e5561498e0",
"assets/FontManifest.json": "2e600557b8e1ad409131d9a9f308766f",
"assets/fonts/ArgentumNovus-ExtraBold.ttf": "86bcc9c20e3c9a256ebe8f7edf577768",
"assets/fonts/ArgentumNovus-Regular.ttf": "2cea55798726e7c90d3465e2a91bee62",
"assets/fonts/ArgentumNovus-SemiBold.ttf": "2ece63bdf5b73992c3cd914ca47d492a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "4b920da6a8c9156c8366017760c82a5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55f337bcb98e45b6a12293fbd9fa84c6",
"/": "55f337bcb98e45b6a12293fbd9fa84c6",
"main.dart.js": "e30420aa4d791f12b21f010e115164ad",
"manifest.json": "3bc26a3740a98f40257fabb2c5877703",
"version.json": "a375c2e5dfddf5de2f384a62fe371d4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
