
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

/* injection point for manifest files.  */
workbox.precaching.precacheAndRoute([]);



/* custom cache rules*/

// workbox.routing.registerRoute(
//     /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
//     new workbox.strategies.StaleWhileRevalidate({
//         cacheName: 'images',
//     })
// );

// workbox.routing.registerRoute(
//     /\.(?:js|css|html)$/,
//     new workbox.strategies.StaleWhileRevalidate({
//         cacheName: 'static-resources',
//     })
// );


self.addEventListener('fetch', (event) => {

    const StaleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
    event.respondWith(StaleWhileRevalidate.handle({ event }));

});



