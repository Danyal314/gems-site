'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "10d79379291cde1a1bfd6ddac8e1d6e8",
".git/config": "0171432517c216bc05e14bca5d5ba76c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "7c5760f1525f64f80e43e912d785ccad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "642945b034ee981af5761807466b984a",
".git/logs/refs/heads/master": "642945b034ee981af5761807466b984a",
".git/logs/refs/remotes/origin/master": "9493348a257dbd5439c953fea93080be",
".git/objects/02/7502d3a5eaf2c09f30a6f5ba3217d29c9b246d": "0e04505bffba042c04717a9fc0c667ff",
".git/objects/0e/28a65f65356f93f07d6f8bcc77821e4f614581": "3a297705f30c10713c0e8ef790147d49",
".git/objects/10/13736665d05ec03cb3e6cc8812c9b7f64f8d6a": "0d08a432b968270a6061ab001232d304",
".git/objects/11/686cb69bdb00ab5781bf803be9d840f28d8692": "710ec69c5233700b746d967a717a7bdc",
".git/objects/16/8fed7873fa3716c96e412e9a08a706595db7f8": "b4953ca5e8bb8e8e695ee8f0d5afd687",
".git/objects/26/fd1dd2617e2745a1da29ccb87a4e8d8cd5ce94": "384cbe1315f67b3a27b5bc24aa0cb103",
".git/objects/28/eda7958dff3782063530b7a1fb4be77e6242f9": "ee2c386d358170a1824fccc53842b664",
".git/objects/2b/b00be5139d82d166df716298044be389245c73": "1d8c1f4f08ea62c87cdcc07a06655a9d",
".git/objects/2b/dc97a7a4d70994f7a8dc7f9650322bcd3fa5a8": "b2602f31ef7bec61b11d540ffc2ea52e",
".git/objects/2d/e40d14e69dd068db499fb786be7d9a23569ef6": "c1890f6b435dfb926f1b5e7cddcac21e",
".git/objects/30/4543799568e5720e05da1ef6bb42f37be124de": "2d306cb50dd38b287a8fe9c7d4200eee",
".git/objects/30/cff0cd541fa08c872af1ee819bb761a9279669": "60e63d9180ca70e859eef6d12d122360",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/19235630552c9cd024e4bcd292ac443b45ecdb": "2e378c683498c2a527b744b36d82f192",
".git/objects/33/61adf01cbeab9bcdc7f54576e7d12462c19033": "c129cb560ac50292274961d522463907",
".git/objects/35/1aaa65f604ed7a760bb71e294e9114a82b7a9f": "6759b041915c2049d7d41766057b6408",
".git/objects/37/a8e20269cead85cc575311d4298dbcd7e85ab0": "6fd3e4ff386fc7f7ef608d59d25e444c",
".git/objects/38/294f11568c2bd654d43c5615740f4abdae7962": "268af81eef74a5367b7ab8ce17ab1828",
".git/objects/3c/ad49e4ab71044649b9a46ca739ad63de1666e6": "4da1044119294719fd4bfaed36d633c8",
".git/objects/3d/fe069edac63707ec3e3e8bfe9ace7ae7807c04": "b5cdd45b43619fc4f5362208a6c9ea2b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/3959b31526cbc766a00ab4f9c4988061a54848": "bd7b300be5f7fc766dc5ae89778e8508",
".git/objects/4f/2c1983e8742f4f606a1f6defa51d549024caca": "092661da2cd0eca3e382351c164412c5",
".git/objects/51/308319fa0f42f8a2a2a0fdca319564de6e788d": "9a2f5a0aa62578d163f4b744c05ad1b6",
".git/objects/51/e736c50e8c9205a5504cbd6136089c4a42f5e3": "4773eabe57ca83a3b833d9d90a054cb2",
".git/objects/57/734681549b5b0885b11ca999023bd62e2e818b": "a2d7f93972751058d3fc95e5f9048fb9",
".git/objects/5d/68e6c41beca4184e2f5fafb86e0cb7979626a2": "e1880110944006b5804a9daa7543af2a",
".git/objects/64/19dab932c8dcf75d16181e7c92d95345d93daa": "9382bab03d8df7e6668700daef11fe4d",
".git/objects/6c/0dab8a8adf5323e7ed8d51d6334acd866cd1e6": "707b9052d452c3b2d9c1c4182b57c831",
".git/objects/6c/c0598b2cb203dfaac6c38c86d1c2720b9e4812": "b672c4f5c0469c99daf0dabc72c74644",
".git/objects/6d/d9a9c33f91cfbf1539d46afd5e850677eb5951": "2475934e50b70c41381fe28a21dea898",
".git/objects/6f/183ec5d88a2cab00aed3973c15ec8a285646bd": "5567f1b3800cf7e5abb83b0671706eb7",
".git/objects/75/5e88b8388f4556c15a85eec648440abc035ff6": "2807e8dc1a0500c82156216617c6a7fa",
".git/objects/75/8a4ab079934997c3c7ddb38eb993003e70148c": "1f8a1fac8bf9134170e749862f8ec881",
".git/objects/77/d6d49edbff3fd75547ed4a59f9383ec72c2db4": "35cc67936383670d91f9a54c934a00e0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/f493ab64d3cfcd6bf03c3a0d16113162ae6356": "8e0b37cad165762a505f861f54acc2a2",
".git/objects/7d/2f22b1bb5190b3834c0571a453aebad7ff09f9": "a94740dfedee0786f648d86004a507bf",
".git/objects/82/9cac8a59192cbdc960ff6aaf4d8f40910f314a": "981835eae0a155a52ed0b5bc0816469b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/bab13e1d3044dfa29bd0000983f4aeee1ebaa0": "40e33b736b2018533f1be8bb25c95b49",
".git/objects/93/0467d6fa5c2cccaa55b5c19380b30d75cebac4": "14fde0bc10ffd3d9352884c258078dc0",
".git/objects/94/5e263ec2db5e894c6d1f07b3ef53645e686dbd": "b4de1b9a32aca0e63beeb680603f1533",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/bfd5e1f1864c09ed4154da12befcd873de2350": "478a0a4c8bb1aa7e606c2bc4af9df8ed",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/85c0843d101c25a4439e3fa706869235bef808": "7e8850763c451c9f1cee78484e7caa2e",
".git/objects/b7/41552a1ecce6060cc31bc7ecce11ea850084c2": "87b2b5ac02a99f31005a6f9010e002eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c4ea92c39d40cac166c6dab6fb7bb66ed7177f": "9315172553c1b5a0bbe1b7c3d3001356",
".git/objects/bb/0a378d49b11857b8b49ecfb08201c2642d9815": "203c907f0a14e758e06cc54e13a5eec3",
".git/objects/be/cab99880763b0aa654322951f295cc6a0fdbcc": "c3f196778f28bac8cb2215a3620b3893",
".git/objects/c0/14ac5e1353f2368b24fbdf2fa1b02df9e05fc8": "e0fae3f7161e3e167ad6b9214c9f171a",
".git/objects/c7/651c94aee083b31776e6bd39f98e7e911950ab": "bf234732f0f94d38b5c0b6ab2303bbab",
".git/objects/ce/4eea20eb08693d262e5a68780c379ea0c3f721": "f77fbf7635afbf9970f311f70f1ae37d",
".git/objects/d0/26978eed44a5480abfbb096bac9210ee5c1cdf": "c0071cb5b051e339fee340eacf59b8a6",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d4/07e05bde08bc6f087b9f67d4691c829cf33fab": "e86d9aac7d0f39613eea5000d6a8a83f",
".git/objects/d7/60ba7dd8261afaa491c31c9ab62589a2b18a64": "039856770e8d21ecc55746befa1092ca",
".git/objects/e1/7a50f3adc7a506e5ea3ccd4a3a0c8c6ff2d892": "ba168419a6ba9e12d1efc03ae5e6500a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/a2275482efe29063f4a18745dec9c1e06ac801": "a40ee3da9fc8b89fdfdec46339b48f5d",
".git/objects/eb/2dc13b877c9a19bbcc9d3112d0aee1b1660092": "a328738a8130ccae8d67b5bb5203982b",
".git/objects/ed/d3b4393642f53c62041d8aee71bc983b523a6a": "33014802fa1533bf510dbe5371208e4d",
".git/objects/ef/639767cb1e82c8ebdfe6bf9f5044e87bceda44": "05d098a9fcdc9836287690c0a004517f",
".git/objects/f4/7a7507944d2e0eacf56ffacf5ed9b2790c7723": "880312a745c983fcc277a33f4e77fd66",
".git/refs/heads/master": "094a3d0561b8e0243d101ecd27ddb616",
".git/refs/remotes/origin/master": "094a3d0561b8e0243d101ecd27ddb616",
"assets/AssetManifest.json": "26cb7577c9cd2275de41dd8cb70f28ea",
"assets/assets/Gemstone.json": "167d6c4a7d516a194191ccc930844506",
"assets/assets/img/blue-diamond-no-bg.png": "2ee38514a0637dd8e7da3ca44dda3844",
"assets/assets/img/coal-no-bg.png": "8784f55c13b10fed5536fda03ce525ff",
"assets/assets/img/dia-no-bg.png": "57e27c9fd0dea9b1d7e71ec93b33314e",
"assets/assets/img/emer-no-bg.png": "d61299c606906a18cff78921564d9694",
"assets/assets/img/gold-no-bg.png": "9502a221865321c83acc4fbc2fcf30de",
"assets/assets/img/pink-diamond-no-bg.png": "460b7a3419f7b953a52559bc9f4ac689",
"assets/assets/img/ruby-no-bg.png": "99cb118f8a962bf8ff7093cc016ca06a",
"assets/assets/img/sap-no-bg.png": "9473ebbf873ba7ad3bee73174de9c2b6",
"assets/assets/img/stone-no-bg.png": "8aca338eebf71f9a83f6968001855182",
"assets/FontManifest.json": "5aa46bf329aa516c8b4d0b23ec919f6e",
"assets/fonts/HoltwoodOneSC-Regular.ttf": "97e22ea45ce550f7759caab955fc2591",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d7a7c90cd75a368fc4756b8ff734458b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/blue-diamond-no-bg.png": "2ee38514a0637dd8e7da3ca44dda3844",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c89018569c43c03e149257b8283cd0f6",
"/": "c89018569c43c03e149257b8283cd0f6",
"main.dart.js": "55141360dc88a39d3b30e7aeb98cf9f7",
"manifest.json": "9771a5be62c41e28e381988a528b20bc",
"version.json": "7d251d5c644d0395e96178bad17320c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
