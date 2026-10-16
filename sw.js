// Forma service worker (build 2.2.0-2026-10-16-f2eae99f5f-generic). Caches only the listed app files. Never caches other requests,
// never serves the app shell for non-navigation requests, and never touches API or account traffic.
var CACHE = 'forma-f2eae99f5f', ASSETS = ["./", "index.html", "config.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('message', function (e) { if (e.data === 'skipWaiting') self.skipWaiting(); });
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var url = new URL(req.url); if (url.origin !== self.location.origin) return;
  var path = url.pathname.replace(self.registration.scope.replace(self.location.origin, ''), '') || './';
  var listed = ASSETS.indexOf(path) >= 0 || ASSETS.indexOf('./' + path) >= 0;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) { if (r.ok && listed) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put('index.html', cp); }); } return r; }, function () { return caches.match('index.html'); }));
    return;
  }
  if (!listed) return;
  e.respondWith(caches.match(req).then(function (hit) { return hit || fetch(req).then(function (r) { if (r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); } return r; }); }));
});
