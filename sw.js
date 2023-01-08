self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./src/style.css", "./images/fire192.png"]);
    })
  );
});

self.addEventListener("fetch", (evnt) => {
  console.log(`Intercepting fetch request for : ${evnt.request.url}`);
  evnt.respondWith(
    caches.match(evnt.request).then((response) => {
      return response || fetch(evnt.request);
    })
  );
});
