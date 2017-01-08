<template>      
    <div class="calculate-panel">
        {{ msg }}
    </div>
</template>

<script>
    module.exports={
        data(){
            return{
                msg:'this is calculate-panel'
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