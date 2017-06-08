const Vuex = require('vuex');
const dao = require('./data-access-object');


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
        },
        dateDay:{
            type:Number,
            value:null
        },
        loginInfo:{
            isLogin:false,
            user:'',
            token:''
        }
    },
    getters:{
        totalIncome:state => {
            return state.data.reduce((acu, cur,idx,arr)=>{
                return acu += parseInt(cur.income)
            }, 0);
        },
        totalCost: state => {
            return state.data.reduce((acu, cur,idx,arr)=>{
                return acu += parseInt(cur.cost)
            }, 0);
        }
    },
    mutations:{
        fetch(state, list){
          state.data = _.orderBy(list, o=>o.created_datetime, 'desc');
        }
    },
    actions:{
        async login(context){

            let check = await dao.checkAuth();
            if(check)
            {
                context.dispatch('fetch');
                return;
            }

            let info = await dao.login();
            if(info)
            {
                context.state.loginInfo.isLogin = true;
                context.state.loginInfo.user = info.user.uid;
                context.dispatch('fetch');
            }


        },
        async fetch(context){

            var data = await dao.getAccountingData(context.state.dateYear, context.state.dateMonth, context.state.loginInfo.user);

            var list = [];
            _.forOwn(data.val(), (value, key)=>{
                value.key = key;
                list.push(value);
            });
            context.commit('fetch', list)
        },
        initDate(context){
            //初始化日期
            let _date = new Date();
            context.state.dateYear = _date.getFullYear();
            context.state.dateMonth = _date.getMonth() + 1;
            context.state.dateDay = _date.getDate();
        },
        lastMonth(context){
            // 往前一個月
            let _month = context.state.dateMonth;
            _month -= 1;
            context.state.dateMonth = _month === 0 ? 12 : _month;
            context.state.dateYear = _month === 0 ? context.state.dateYear - 1 : context.state.dateYear;
            context.dispatch('fetch');
        },
        nextMonth(context){
            // 往後一個月
            let _month = context.state.dateMonth;
            _month += 1;
            context.state.dateMonth = _month === 13 ? 1 : _month;
            context.state.dateYear = _month === 13 ? context.state.dateYear + 1 : context.state.dateYear;
            context.dispatch('fetch')
        },
        async addItem(context, item){
            let result = await dao.addItem(item, context.state.dateYear, context.state.dateMonth);
            if(result){
                context.dispatch('fetch');
            }
            else{
                alert('error');
            }
        },
        async editItem(context, item){
            let result = await dao.editItem(item, context.state.dateYear, context.state.dateMonth);
        }
    }
});

module.exports = store
