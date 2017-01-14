var _ = require('lodash');
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var appFirebase = firebase.initializeApp({
    apiKey: "AIzaSyCxHrDeo5P69D_gYrJWnbgIKaoicx_r_Mc",
    authDomain: "memo-list.firebaseapp.com",
    databaseURL: "https://memo-list.firebaseio.com",
    storageBucket: "memo-list.appspot.com",
    messagingSenderId: "160163264460"
});

var dao = module.exports = {};

function datata(year, month){
    const rawdata = [
            {
                item:'aaaaaa',
                income:0,
                cost:90,
                isCredit:true,
                created_datetime:'2017/01/15',
            },
            {
                item:'bbbbbb',
                income:0,
                cost:10,
                isCredit:false,
                created_datetime:'2017/01/07',
            },
            {
                item:'cccccc',
                income:0,
                cost:15,
                isCredit:false,
                created_datetime:'2017/01/02',
            },
            {
                item:'dddddd',
                income:10,
                cost:0,
                isCredit:false,
                created_datetime:'2017/01/01',
            },
            {
                item:'eeeeee',
                income:0,
                cost:100,
                isCredit:false,
                created_datetime:'2016/12/31',
            }
        ];
    var qryDate = year + '/' + ('00' + month).substring(month.toString().length);
    var data = _.filter(rawdata, o=>{
        return o.created_datetime.indexOf(qryDate) >= 0;
    });

    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 1000, _.orderBy(data, o => o.created_datetime, 'desc'));
    });
}

dao.getAccountingData = (year, month) => {

/*
    var data = (async function(){
        return await datata(year, month);
    })();


    return data;
*/


    var qryDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(qryDate).once('value');
    
}

dao.addItem = (item, year, month) => {
    var chilDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(chilDate).push(item);
};

dao.editItem = (item, year, month) => {
    var chilDate = year + '/' + ('00' + month).substring(month.toString().length);
    return firebase.database().ref('accounting').child(chilDate + '/' + item.key).update(item);
};