<template>
    <div class="app">
        <date-roll></date-roll>
        <item-list></item-list>
        <calculate-panel></calculate-panel>
    </div>
</template>

<script>
    module.exports ={
        store:require('../store/index.js'),
        components:{
            dateRoll:require('./date-roll'),
            itemList:require('./item-list'),
            calculatePanel:require('./calculate-panel')
        }
    }
</script>

<style>
    .app{
        width:800px;
        margin:0 auto;
    }
    h1{
        background-color:red;
    }
</style>
