
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
    "url": "index.html",
    "revision": "b10ece1f49503a7c894c4a4f3c8e80a2"
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



