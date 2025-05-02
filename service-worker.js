const cacheName = "lora-chat-cache-v1";
const filesToCache = [
  "/lora_chat.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// 安裝時快取檔案
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// 擷取請求時從快取回傳
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
