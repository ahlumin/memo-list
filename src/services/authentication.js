import Firebase from "./firebase.js";
require("firebase/auth");
const provider = new Firebase.auth.GoogleAuthProvider();

export default {
  signIn: function() {
    return Firebase.auth().signInWithPopup(provider);
  },
  checkAuth: function() {
    return new Promise(resolve => {
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
};
