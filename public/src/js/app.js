if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/help/' })
        .then(() => {
            console.log(`Service Worker registered!`);
        });
}