<template>
    <div class="item-list">
            {{ msg }} <br/>
    </div>
</template>

<script>
    module.exports={
        computed:{
            msg(){
                return this.$store.state.msg
            }
        },
        created(){
            this.$store.dispatch('fetch');
        }
    }
</script>

<style>
    .item-list{
        height:1500px;
    }
</style>