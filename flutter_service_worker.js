'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7f7c28205400d1d50d68a32d5deebbf0",
"assets/assets/bg.jpg": "ba353591b9df0240f091d6f1cc213a60",
"assets/assets/bg.png": "c6f56031c490a1840876cad1a99252e5",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/logoAD.png": "6f993f7c14cc1e1b6027b9084f3ff942",
"assets/assets/profileImage.jpg": "61758fd7fd445e66422c173e7de2f82f",
"assets/assets/profileImage.png": "6afff4fcc3b867480362a7f9c0f2cc86",
"assets/assets/projects/bakery.png": "7e8c350921ff7684d330c317a42ca8cc",
"assets/assets/projects/bakeryIcon.png": "dbb2b606bc6bad800794d79402927b5e",
"assets/assets/projects/bitsis.png": "e22e9ffc37589d50e9661aaded82de52",
"assets/assets/projects/bitsisIcon.png": "2085fc5e49eddcac71110635d05cb1b9",
"assets/assets/projects/flashChat.png": "85c60eea7b53ec70db2a48fe067730bb",
"assets/assets/projects/flashChatIcon.png": "e4339619b7dc7a47599203ddce9dbae6",
"assets/assets/projects/todoey.png": "52f30dd2914f71c5acd56b5bf7badddc",
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
"index.html": "4e1b2f28e7776ff97093d13a5f6dbb19",
"/": "4e1b2f28e7776ff97093d13a5f6dbb19",
"main.dart.js": "2517cc2b086353a09583b03858d730af",
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
