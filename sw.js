self.addEventListener("install", (event) => {
    caches.open("tarefas").then((cache) => {
        console.log("Cache aberto")
        cache.addAll();
    });
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});