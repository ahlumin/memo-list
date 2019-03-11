/**
 * transform firebase data to array.
 * @param {object} querySnapshot firebase query return
 * @returns {array} users' data
 */
function transformUsers(querySnapshot) {
  const data = [];
  querySnapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return data;
}

export default {
  transformUsers
};
