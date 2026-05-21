const CACHE_NAME = 'Prof Omego';
const ASSETS = ['index.html', 'manifest.json', 'icon-512.png', 'UNIPORT-LOGO.png', 'prof.png', 'apple-icon.png'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
