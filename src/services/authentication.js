import Firebase from "./firebase.js";
require("firebase/auth");
const provider = new Firebase.auth.GoogleAuthProvider();

function signIn() {
  return Firebase.auth().signInWithPopup(provider);
}

function checkAuth() {
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

function getUserInfo() {
  return Firebase.auth().currentUser;
}

export default {
  signIn,
  checkAuth,
  getUserInfo
};
