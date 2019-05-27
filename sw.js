
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
    "revision": "5492b2dd858cb51097f0eb087ae4b8a3"
  },
  {
    "url": "static/css/main.34de6062.chunk.css",
    "revision": "d4920c6f452b98a23976e5f89e35158e"
  },
  {
    "url": "static/js/2.5663e8c0.chunk.js",
    "revision": "00c725db6f88e17e34f55a07a8a5bd98"
  },
  {
    "url": "static/js/main.c0f476a0.chunk.js",
    "revision": "0743e7fa1c239a06cec0bc958f58b164"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);

/* custom cache rules*/
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
    blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
  });

