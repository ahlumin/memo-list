const firebase = require("firebase/app");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBzFQMFo8w-x42skkGUFsaq1P3y_5KltO0",
  authDomain: "accounting-55f19.firebaseapp.com",
  databaseURL: "https://accounting-55f19.firebaseio.com",
  projectId: "accounting-55f19",
  storageBucket: "accounting-55f19.appspot.com",
  messagingSenderId: "726377193451"
});

export default firebase;
