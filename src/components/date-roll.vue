<template>      
    <div class="date-roll">
        <button @click="lastMonth">上</button>
        <a href="javascript:;" @click="reload">{{ date }}</a>
        <button @click="nextMonth">下</button>
    </div>
</template>

<script>
    module.exports={
        computed:{
            date(){
                let _year = this.$store.state.dateYear;
                let _month = this.$store.state.dateMonth.toString()
                return _year + '/' + ("00" + _month).substring(_month.length);
            }
        },
        methods:{
            lastMonth(){
                this.$store.dispatch('lastMonth');
            },
            nextMonth(){
                this.$store.dispatch('nextMonth');
            },
            reload(){
                this.$store.dispatch('fetch');
            }
        },
        created(){
            this.$store.dispatch('initDate');
        }
    }
</script>

<style>
    .date-roll{
        border:solid 1px black;
        margin-top:15px;
        padding:5px;
    }
</style>