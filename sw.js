var staticCacheName = 'ver1'
var cacheFiles = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./data/restaurants.json',
	'./js/dbhelper.js',
	'./js/main.js',
	'./js/restaurant_info.js'
]

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Installed')
	e.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching cacheFiles')
			return cache.addAll(cacheFiles);
		})
	)
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activated')
	e.waitUntil(
		caches.keys().then(function (NewCacheNames) {
			return Promise.all(NewCacheNames.map(function (cacheName) {
					if (cacheName !== staticCacheName) {
						console.log('[ServiceWorker] Removing cache files')
						return caches.delete(cacheName);
					}
			}));
		})
	);
});

// Source: https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network
self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] Fetching');
	event.respondWith(
		caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

/*
alternative notes from Udacity Lesson method

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activated')
	e.waitUntil(
		caches.keys().then(function (NewCacheNames) {
			return Promise.all(
				NewCacheNames.filter(function (cacheName) {
					return cacheName.startsWith('ver-') &&
						cacheName != staticCacheName;
				}).map(function (cacheName) {
					return cache.delete(cacheName);
					console.log('[ServiceWorker] Removing cache files')
				})
			);
		})
	);
})
*/