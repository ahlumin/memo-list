var _ = require('lodash');
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

firebase.initializeApp({
    apiKey: "AIzaSyCxHrDeo5P69D_gYrJWnbgIKaoicx_r_Mc",
    authDomain: "memo-list.firebaseapp.com",
    databaseURL: "https://memo-list.firebaseio.com",
    storageBucket: "memo-list.appspot.com",
    messagingSenderId: "160163264460"
});


var dao = module.exports = {};

dao.login = () =>{
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    return firebase.auth().signInWithPopup(provider);
};

dao.getAccountingData = (year, month, user) => {
    var qryDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(qryDate).once('value');
};

dao.addItem = (item, year, month) => {
    var chilDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(chilDate).push(item);
};

dao.editItem = (item, year, month) => {
    var chilDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(chilDate + '/' + item.key).update(item);
};

