<template>
    <h1>{{msg}}</h1>
</template>

<script>
    module.exports ={
        data:function(){
            return{
                msg:'Hello World Shit La sdsdf'
            }
        },
        created(){
            console.log('done at:' + Date.now());
        }
    }
</script>

<style>
    h1{
        background-color:red;
    }
</style>

