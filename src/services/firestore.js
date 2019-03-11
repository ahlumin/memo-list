import Firebase from "./firebase.js";
require("firebase/firestore");
const db = Firebase.firestore();

function selectUsers() {
  return db.collection("users").get();
}

function selectUser(email) {
  return db
    .collection("users")
    .where("email", "==", email)
    .get();
}

function addUser(uid, email) {
  return db.collection("users").add({
    email,
    uid
  });
}

export default {
  selectUsers,
  selectUser,
  addUser
};
