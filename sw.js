const CACHE_NAME = "rally-boyz-v1";
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(["./", "./index.html", "./manifest.json"]))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
// Network-first; Firebase calls always go straight to the network.
self.addEventListener("fetch", e => {
  const u = e.request.url;
  if (u.includes("googleapis.com") || u.includes("gstatic.com") || u.includes("firebaseio.com")) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE_NAME).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
