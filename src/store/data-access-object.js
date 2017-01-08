var _ = require('lodash');

var dao = module.exports = {};

dao.getAccountingData = (year, month) => {

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
        setTimeout(resolve, 1000, data);
    })
}