import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyCVyqgt8LCea-OfRR0SUIxwv01euCJBlhM",
    authDomain: "appstore-8276c.firebaseapp.com",
    databaseURL: "https://appstore-8276c.firebaseio.com",
    projectId: "appstore-8276c",
    storageBucket: "appstore-8276c.appspot.com",
    messagingSenderId: "338063380625",
    appId: "1:338063380625:web:3c70003e1e8ed763caef30",
    measurementId: "G-HG3V9ZDDJ6"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BAG_NVYCGEYJLViwkfz98DidTRFEK5ZAMxhVbDsZNmkFuofLczkdBZzCvjvfg6oyGZUotRHkmYEMoRHepOPssww"
);
export { messaging };