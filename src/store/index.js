const Vue = require('vue');
const Vuex = require('vuex');
const dao = require('data-access-object');

const store = new Vuex.Store({
    state:{
        msg:null,
        dateYear:{
            type:Number,
            value:null
        },
        dateMonth:{
            type:Number,
            value:null
        }
    },
    mutations:{
        async mFetch(state){
          state.msg = await dao.ddd(state.dateYear, state.dateMonth) 
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
        }
    }
});

module.exports = store