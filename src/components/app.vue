<template>
    <h1>{{msg}}</h1>
</template>

<script>
    module.exports ={
        data:function(){
            return{
                msg:'Hello World Shit'
            }
        },
        created:function(){
            console.log('done');
        }
    }
</script>

<style>
    h1{
        background-color:red;
    }
</style>

