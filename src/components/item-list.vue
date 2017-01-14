<template>
    <div class="item-list">
            <ul>
                <li>
                    <span class="item">項目</span>
                    <span class="income">收入</span>
                    <span class="cost">花費</span>
                    <span class="isCredit">刷卡</span>
                    <span class="datetime">時間</span>
                </li>

                <li @keyup.enter="add">
                    <span class="item"><input type="text" v-model="dataAdd.item" /></span>
                    <span class="income"><input type="number" class="right" v-model="dataAdd.income" /></span>
                    <span class="cost"><input type="number" class="right" v-model="dataAdd.cost" /></span>
                    <span class="isCredit"><input type="checkbox" v-model="dataAdd.isCredit" /></span>
                    <span class="datetime"><input type="text" class="right" v-model="dataAdd.date" /></span>
                </li>

                <li v-for="one in data" @keyup.enter="edit(one)">
                    <span class="item"><input type="text" v-model="one.item" /></span>
                    <span class="income"><input type="number" v-model="one.income" /></span>
                    <span class="cost"><input type="number" v-model="one.cost" /></span>
                    <span class="isCredit"><input type="checkbox" v-model="one.isCredit" /></span>
                    <span class="datetime"><input type="text" v-model="one.created_datetime" /></span>
                </li>
            </ul>
    </div>
</template>

<script>
    module.exports={
        data(){
            return {
                dataAdd:{
                    item:'',
                    income:null,
                    cost:null,
                    isCredit:false,
                    date:''
                }
            }
        },
        computed:{
            data(){
                return this.$store.state.data
            }
        },
        methods:{
            add(){
                let item = {
                    item: this.dataAdd.item,
                    income:this.dataAdd.income || 0,
                    cost:this.dataAdd.cost || 0,
                    isCredit:this.dataAdd.isCredit,
                    created_datetime:this.dataAdd.date
                }

                if(!item.item || !item.created_datetime) return;
                else if (!item.cost && !item.income) return;

                var _tempDate = item.created_datetime.split('/');
                item.created_datetime = _tempDate[0] + '/' + ('00' + _tempDate[1]).slice(-2) + '/' + ('00' + _tempDate[2]).slice(-2);
                
                this.$store.dispatch('addItem', item)
            },
            edit(dataEdit){
                
                let item = {
                    key : dataEdit.key,
                    item: dataEdit.item,
                    income:dataEdit.income || 0,
                    cost:dataEdit.cost || 0,
                    isCredit:dataEdit.isCredit,
                    created_datetime:dataEdit.created_datetime
                }

                this.$store.dispatch('editItem', item);
            }
        },
        created(){
            this.$store.dispatch('login');
            //this.$store.dispatch('fetch');
            this.dataAdd.date = '2017/1/14';
        }
    }
</script>

<style>
    .item-list{
        padding-bottom:77px;
    }
        .item-list li{
            margin:15px 0;
        }
        .item-list input{
            background-color:#F6F6F6;
            border:0px;
            border-bottom:solid 1px #3B3738;
            display: inline-block;
        }

        .item-list input.right{
            text-align:right;
            width:100px;
        }

    .item-list .item{
        display: inline-block;
        width:380px;
    }
        .item-list .error{
            background-color:red;
        }

    .item-list .income{
        display: inline-block;
        width:100px;
        text-align:right;
    }

    .item-list .cost{
        display: inline-block;
        width:100px;
        text-align:right;
    }

    .item-list .isCredit{
        display: inline-block;
        width:70px;
        text-align:center;
    }

    .item-list .datetime{
        display: inline-block;
        width:130px;
        text-align:right;
    }
</style>