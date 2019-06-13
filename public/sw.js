// Executed when the app is installed

self.addEventListener('install', (event) => {
    console.log(`[Service Worker] Installing Service Worker`, event);
    event.waitUntil(
        cache.open('static')
        .then((cache) => {
            console.log(`[Serviceworker] Pre-Caching App Shell`);
            cache.add('/src/js/app.js');
        })
    )
});

// Activating Service Worker Code. Previous Service worker may be running 
self.addEventListener('activate', (event) => {
    console.log(`[Service Worker] Activating Service Worker`, event);
    return self.clients.claim();
});

// Fetch event code 
self.addEventListener('fetch', (event) => {
    console.log(`[Service Worker] Fetching something...`, event);
    event.respondWith(fetch(event.request));
});

//TODO: cache more items below

// TODO: add code for restoring from cache

// TODO: Complete the caching and offline capability