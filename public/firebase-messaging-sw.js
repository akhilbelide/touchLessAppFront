// importScripts('/__/firebase/7.15.0/firebase-app.js');
// importScripts('/__/firebase/7.15.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();



 importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

 firebase.initializeApp({
    apiKey: "AIzaSyCVyqgt8LCea-OfRR0SUIxwv01euCJBlhM",
    authDomain: "appstore-8276c.firebaseapp.com",
    databaseURL: "https://appstore-8276c.firebaseio.com",
    projectId: "appstore-8276c",
    storageBucket: "appstore-8276c.appspot.com",
    messagingSenderId: "338063380625",
    appId: "1:338063380625:web:3c70003e1e8ed763caef30",
    measurementId: "G-HG3V9ZDDJ6"
  });

 const messaging = firebase.messaging();



messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
});
// [END background_handler]