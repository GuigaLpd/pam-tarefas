const CACHE_NAME = "tarefas";
const FILES_TO_CACHE = [
  '/pam-tarefas/',
  '/pam-tarefas/index.html',
  '/pam-tarefas/style.css',
  '/pam-tarefas/script.js',
  '/pam-tarefas/manifest.json',
  '/pam-tarefas/imgs/img.png',
  '/pam-tarefas/imgs/img2.png'
];

self.addEventListener("install", (event) => {
    caches.open("tarefas").then((cache) => {
        console.log("Cache aberto")
        cache.addAll(FILES_TO_CACHE);
    });
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});