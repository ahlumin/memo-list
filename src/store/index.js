const Vue = require('vue');
const Vuex = require('vuex');
const dao = require('data-access-object');
var _ = require('lodash');

const store = new Vuex.Store({
    state:{
        data:[],
        dateYear:{
            type:Number,
            value:null
        },
        dateMonth:{
            type:Number,
            value:null
        }
    },
    getters:{
        totalIncome:state => {
            return _.sumBy(state.data, o => o.income);
        },
        totalCost: state => {
            return _.sumBy(state.data, o => o.cost);
        }
    },
    mutations:{
        async mFetch(state){
          var data = await dao.getAccountingData(state.dateYear, state.dateMonth) 

          var list = [];
          _.forOwn(data.val(), (value, key)=>{
            value.key = key;
            list.push(value);
          });

          state.data = _.orderBy(list, o=>o.created_datetime, 'desc');
        },
        async mAdd(state, item){
            let result = await dao.addItem(item, state.dateYear, state.dateMonth);
        },
        async mEdit(state, item){
            let result = await dao.editItem(item, state.dateYear, state.dateMonth);
        }
    },
    actions:{
        initDate(context){
            //初始化日期
            let _date = new Date();
            context.state.dateYear = _date.getFullYear();
            context.state.dateMonth = _date.getMonth() + 1;
        },
        lastMonth(context){
            // 往前一個月
            let _month = context.state.dateMonth;
            _month -= 1;
            context.state.dateMonth = _month === 0 ? 12 : _month;
            context.state.dateYear = _month === 0 ? context.state.dateYear - 1 : context.state.dateYear;
            context.commit('mFetch')
        },
        nextMonth(context){
            // 往後一個月
            let _month = context.state.dateMonth;
            _month += 1;
            context.state.dateMonth = _month === 13 ? 1 : _month;
            context.state.dateYear = _month === 13 ? context.state.dateYear + 1 : context.state.dateYear;      
            context.commit('mFetch')
        },
        fetch(context){
            // 載入當月資料
            context.commit('mFetch')
        },
        addItem(context, item){
            context.commit('mAdd', item);
            context.commit('mFetch');
        },
        editItem(context, item){
            context.commit('mEdit', item);
            context.commit('mFetch');
        }
    }
});

module.exports = store