
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
    "revision": "5bdd22f3747dfc302301c7f6963ee08d"
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
    "url": "static/js/main.9ea56aa2.chunk.js",
    "revision": "9eb0ea58465958cd1c3007e95708ddf9"
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

