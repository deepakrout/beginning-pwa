var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/help/' })
        .then(() => {
            console.log(`Service Worker registered!`);
        });
}

window.addEventListener('beforeinstallprompt', () => {
    console.log('Begore install prompt fired');
    event.preventDefault();
    return false;
});

var promise = new Promise((res, rej) => {

});