const C='neon-pacman-2026-11-26-seo-offline-v4';
const APP_ENTRY = new URL('./', self.location.href).href;
const APP_PATH = new URL(APP_ENTRY).pathname;
const LEGACY_PATH = new URL('index.html', APP_ENTRY).pathname;
const entryRequest = () => new Request(APP_ENTRY, { cache: 'reload', redirect: 'error' });
const cachedEntry = async () => (await caches.open(C)).match(APP_ENTRY);
async function navigationNetworkFirst(request) {
  let response;
  try { response = await fetch(request); }
  catch { return (await cachedEntry()) || Response.error(); }
  if (response.ok && !response.redirected && response.url === APP_ENTRY &&
      (response.headers.get('content-type') || '').toLowerCase().includes('text/html')) {
    try { await (await caches.open(C)).put(APP_ENTRY, response.clone()); } catch {}
  }
  return response;
}
const A=[entryRequest(),'./ag-language-menu.js','./neon-standard.css','./neon-standard.js','./pwa-install.js','./neon-adsterra-loader.js','./manifest.webmanifest','./icons/neon-pacman-192.png','./icons/neon-pacman-512.png'];self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('neon-pacman-')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;if(r.mode==='navigate'){const u=new URL(r.url);if(u.pathname!==APP_PATH&&u.pathname!==LEGACY_PATH)return;e.respondWith(navigationNetworkFirst(r));return}e.respondWith(caches.match(r).then(x=>x||fetch(r).then(y=>{if(y.ok)caches.open(C).then(c=>c.put(r,y.clone()));return y})))});
