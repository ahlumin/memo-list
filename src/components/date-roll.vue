<template>      
    <div class="date-roll">
        <span class="left">
            <a href="javascript:;" @click.prevent="lastMonth">上個月</a>
        </span>
        <span class="center"><a href="javascript:;" @click="reload">{{ date }}</a></span>
        <span class="right">
            <a href="javascript:;" @click.prevent="nextMonth">下個月</a>
        </span>
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
        height:40px;
        margin:15px 0;
        padding:5px;
    }

    .date-roll span{
        float:left;
        font-weight:bolder;
    }

    .date-roll span.center{
        width:80%;
        text-align:center;
        font-size:36px;
    }

    .date-roll span.left{
        width:10%;
    }

    .date-roll span.right{
        width:10%;
    }
</style>