const MANIFEST_REV = '67e429d0' // rewritten by md5s.plx on each build
importScripts('./md5s.js')

const CACHE_PREFIX = 'gear-'
const ASSET_EXT = /\.(webp|jpg|jpeg|png|gif|pdf|js|css)$/i
const FONT_DIR = /\/vendor\/fonts\//i
const SHELL_URLS = ['./', './index.html']

function isAssetPath(pathname) {
  return ASSET_EXT.test(pathname) || FONT_DIR.test(pathname)
}

function manifestEntries() {
  return Object.keys(md5s)
    .filter(k => isAssetPath(k))
    .map(k => FONT_DIR.test(k) ? k : `${k}?${(md5s[k] || '').substr(0, 5)}`)
}

function djb2(s) {
  let h = 5381
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0
  return h.toString(36)
}

function currentCacheName() {
  return CACHE_PREFIX + djb2(manifestEntries().sort().join('\n'))
}

let cacheProgress = { done: 0, total: 0, complete: false }

async function broadcast(msg) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true })
  clients.forEach(c => c.postMessage(msg))
}

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(currentCacheName())
    const urls = SHELL_URLS.concat(manifestEntries())
    cacheProgress = { done: 0, total: urls.length, complete: false }
    broadcast({ type: 'cache-progress', ...cacheProgress })
    await Promise.all(
      urls.map(u =>
        cache.add(new Request(u, { cache: 'reload' }))
          .catch(err => console.warn('sw precache miss', u, err))
          .finally(() => {
            cacheProgress.done++
            broadcast({ type: 'cache-progress', ...cacheProgress })
          })
      )
    )
    cacheProgress.complete = true
    broadcast({ type: 'cache-progress', ...cacheProgress })
    self.skipWaiting()
  })())
})

async function currentStatus() {
  // If an install is in progress in this SW lifetime, report that.
  if (cacheProgress.total > 0 && !cacheProgress.complete) {
    return { ...cacheProgress }
  }
  // Otherwise inspect the actual cache — survives SW termination.
  const expected = SHELL_URLS.concat(manifestEntries()).length
  const cache = await caches.open(currentCacheName()).catch(() => null)
  const keys = cache ? await cache.keys() : []
  const done = keys.length
  return { done, total: expected, complete: done >= expected && expected > 0 }
}

self.addEventListener('message', (e) => {
  if (e.data === 'cache-status') {
    const src = e.source
    if (!src) return
    currentStatus().then(p => src.postMessage({ type: 'cache-progress', ...p }))
  }
})

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = currentCacheName()
    const names = await caches.keys()
    await Promise.all(
      names
        .filter(n => n.startsWith(CACHE_PREFIX) && n !== keep)
        .map(n => caches.delete(n))
    )
    self.clients.claim()
  })())
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return

  const isHTML =
    req.mode === 'navigate' ||
    /\.html?$/i.test(url.pathname) ||
    url.pathname === '/' ||
    url.pathname.endsWith('/')

  if (isHTML) {
    e.respondWith((async () => {
      const cache = await caches.open(currentCacheName())
      try {
        const fresh = await fetch(req, { cache: 'reload' })
        if (fresh.ok) cache.put(req, fresh.clone())
        return fresh
      } catch {
        const hit = (await cache.match(req)) ||
                    (await cache.match('./index.html')) ||
                    (await cache.match('./'))
        return hit || new Response('Offline', { status: 503, statusText: 'Offline' })
      }
    })())
    return
  }

  if (isAssetPath(url.pathname)) {
    const isFont = FONT_DIR.test(url.pathname)
    e.respondWith((async () => {
      const cache = await caches.open(currentCacheName())
      // Fonts have no cache-busting query string; match loosely. Everything
      // else uses its hash query as the freshness signal — strict match only.
      const hit = isFont
        ? (await cache.match(req)) ||
          (await cache.match(req, { ignoreSearch: true, ignoreVary: true }))
        : await cache.match(req)
      if (hit) return hit
      try {
        const fresh = await fetch(req)
        if (fresh.ok) cache.put(req, fresh.clone())
        return fresh
      } catch {
        return new Response('', { status: 504, statusText: 'Offline' })
      }
    })())
  }
})
