
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
    "revision": "79bf576c32720599dfc59fe7077945ab"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "88f0f172de50e4fb6d4bccafedb23427"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3f71765b47124a940bf83df5ad4b8c9f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "0377f2dca4d16673c30c2e5b4aadb2d3"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "cae5208363c21ca179da6b36eca778f4"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "5fa7e0dc596197468e26274315825be4"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "d0a8182ae46731e916bb1dcb5a8d9e25"
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

