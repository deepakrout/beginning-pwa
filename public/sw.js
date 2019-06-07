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

self.addEventListener('activate', (event) => {
    console.log(`[Service Worker] Activating Service Worker`, event);
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log(`[Service Worker] Fetching something...`, event);
    event.respondWith(fetch(event.request));
});