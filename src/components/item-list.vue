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

                <li>
                    <span class="item"><span @click="add">+</span><input type="text" v-model="dataAdd.item" /></span>
                    <span class="income"><input type="text" class="right" v-model="dataAdd.income" /></span>
                    <span class="cost"><input type="text" class="right" v-model="dataAdd.cost" /></span>
                    <span class="isCredit"><input type="checkbox" v-model="dataAdd.isCredit" /></span>
                    <span class="datetime"><input type="text" class="right datepicker" v-model="dataAdd.date" /></span>
                </li>

                <li v-for="one in data">
                    <span class="item">{{ one.item }}</span>
                    <span class="income">{{ one.income }}</span>
                    <span class="cost">{{ one.cost }}</span>
                    <span class="isCredit"><input type="checkbox" disabled v-model="one.isCredit" /></span>
                    <span class="datetime">{{ one.created_datetime }}</span>
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
                    date:'2017/01/15',
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
                var item = {
                    item: this.dataAdd.item,
                    income:this.dataAdd.income,
                    cost:this.dataAdd.cost,
                    isCredit:this.dataAdd.isCredit,
                    created_datetime:this.dataAdd.date
                }
                this.$store.dispatch('addItem', item)
            }
        },
        created(){
            this.$store.dispatch('fetch');

            $('.datepicker').datepicker();
        }
    }
</script>

<style>
    .item-list{
        height:1500px;
    }
        .item-list input{
            background-color:#FDF3E7;
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