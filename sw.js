
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
    "url": "images/wine01.jpg",
    "revision": "fb883bbe2aae60f4585ae33b93862916"
  },
  {
    "url": "images/wine02.jpg",
    "revision": "d0e6061e11ad74d99d86414e35f9e361"
  },
  {
    "url": "images/wine03.jpg",
    "revision": "2eba4795f43afcc6be5c13772c5d460e"
  },
  {
    "url": "images/wine04.jpg",
    "revision": "8cbe960b030290c94722f08442b23c21"
  },
  {
    "url": "images/wine05.jpg",
    "revision": "cdb476565e57e51eb8551a93741f4a67"
  },
  {
    "url": "index.html",
    "revision": "957d72c158c692d55dadb0c77d3250d0"
  },
  {
    "url": "static/css/main.34de6062.chunk.css",
    "revision": "d4920c6f452b98a23976e5f89e35158e"
  },
  {
    "url": "static/js/2.1b6b1f4f.chunk.js",
    "revision": "97108794388ceebc808152573422b86b"
  },
  {
    "url": "static/js/main.b899ad75.chunk.js",
    "revision": "b4585275782ebb223d17798b3aa0cd86"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);

/* custom cache rules*/



