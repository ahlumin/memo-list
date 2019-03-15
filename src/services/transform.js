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

function transformRecords(querySnapshot) {
  const data = { ids: [] };
  querySnapshot.forEach(doc => {
    data[doc.id] = Object.assign({}, doc.data());
    data.ids.push(doc.id);
  });
  return data;
}

export default {
  transformUsers,
  transformRecords
};
