self.addEventListener("install", async (event) => {
  console.log("Installing service worker...");
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  return null;
});

self.addEventListener("push", (event) => {
  new Notification("Hora de beber água!", {
    body: "Não se esqueça de beber o seu copo de água.",
    icon: "icon-192.png",
  });
});
