<template>
    <div class="calculate-panel">
        <span>TOTAL </span>
        <span class="income">INCOME:{{ totalIncome | numberWithCommas }}</span>
        <span class="cost">COST:{{ totalCost | numberWithCommas }}</span>
    </div>
</template>

<script>
    module.exports={
        computed:{
            totalIncome(){
                return this.$store.getters.totalIncome;
            },
            totalCost(){
                return this.$store.getters.totalCost;
            }
        },
        filters:{
            numberWithCommas(val){
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

<style>
    .calculate-panel{
        display:inline-block;
        text-align:center;
        position:fixed;
        bottom:0;
        right:0;
        width:100%;
        padding:5px;
        font-weight:bolder;
        font-size:36px;
        background-color:#C1E1A6;
    }

    .calculate-panel .income{
        color:blue;
        font-size:50px;
        margin:0 30px;
    }

    .calculate-panel .cost{
        color:red;
        font-size:50px;
    }
</style>
