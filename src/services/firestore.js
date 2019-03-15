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
  return db
    .collection("users")
    .doc(email)
    .set({
      email,
      uid
    });
}

function selectRecords(email, year, month) {
  return db
    .collection("users")
    .doc(email)
    .collection("records")
    .where("year", "==", year)
    .where("month", "==", month)
    .get();
}

function addRecord(email, year, month, day, consume, isCredit) {
  return db
    .collection("users")
    .doc(email)
    .collection("records")
    .add({
      year,
      month,
      day,
      consume,
      isCredit
    });
}

export default {
  selectUsers,
  selectUser,
  addUser,
  selectRecords,
  addRecord
};
