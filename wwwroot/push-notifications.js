// (function () {
  window.blazorPushNotifications = {
    sendNotification: () => {
      new Notification("Hora de beber água!", {
        body: "Não se esqueça de beber o seu copo de água.",
        icon: "icon-192.png",
      });
    },
  };
// });