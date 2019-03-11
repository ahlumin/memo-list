import FireStore from "./firestore.js";
import Transform from "./transform.js";

async function selectUsers() {
  const querySnapshot = await FireStore.selectUsers();
  const users = Transform.transformUsers(querySnapshot);
  return users;
}

async function checkUserExist(email) {
  const querySnapshot = await FireStore.selectUser(email);
  return querySnapshot.empty === false;
}

async function registerUser(uid, email) {
  const result = await FireStore.addUser(uid, email);
  return result;
}

export default {
  selectUsers,
  checkUserExist,
  registerUser
};
