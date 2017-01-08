<template>      
    <div class="calculate-panel">
        TOTAL COST:{{ totalCost }}
    </div>
</template>

<script>
    module.exports={
        computed:{
            totalCost(){
                //TODO:vuex getter
                return 0;
            }
        }
    }
</script>

<style>
    .calculate-panel{
        display:inline-block;
        position:fixed;
        bottom:0;
        border:solid 1px black;
        width:800px;
        padding:5px;
    }
</style>