console.log('Service Worker: Registered');

const cacheName = "app-static-v1";
/*
 ** Cached URLs
 */
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

/*
 ** Listen for installation event
 */
self.addEventListener('install', function(e) {
    // add cacheFiles to the cache when installation is completed
    e.waitUntil(
        // caches.open(cacheName).then(cache =>
        //     return {
        //         cacheaddAll(cacheFiles);
        //     }
        // ));
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles);
        }))
});