
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

/* injection point for manifest files.  */
workbox.precaching.precacheAndRoute([
  {
    "url": "icons/icon-128x128.png",
    "revision": "baa5857f10f5b1d33843e39199e3ce65"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "0cda01648a179f428bba600f4e720cf8"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "287da07c89b149450a3a1e6a6cd67e84"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "81d0b4e36bb35a91dd9c0ab7c9b58903"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "a3673873678c2f7df20a9d1935e89bf3"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "5cb31d58f3a50353fafd7adf6d59f56d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c9ecaac62ba7303ef85f0a47673f985d"
  },
  {
    "url": "index.html",
    "revision": "eb4d20a65f45bb1b5293ee9f1d11521c"
  },
  {
    "url": "static/css/main.34de6062.chunk.css",
    "revision": "d4920c6f452b98a23976e5f89e35158e"
  },
  {
    "url": "static/js/2.07227b38.chunk.js",
    "revision": "1ba0842daeb56914bd0cfb75da0ece68"
  },
  {
    "url": "static/js/main.0d0aec34.chunk.js",
    "revision": "201eabbaad9e495cb942d29a1b0fb7c6"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);

/* custom cache rules*/



