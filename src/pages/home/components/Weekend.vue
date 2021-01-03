<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <div class="recommend border-bottom" v-for="item in list" :key="item.id">
            <div class="recommend-img-wrapper">
                <img class="recommend-img" :src="item.imgUrl" />
            </div>
            <div class="recommend-info">
                <p class="recommend-title">{{item.title}}</p>
                <p class="recommend-desc">{{item.desc}}</p>
            </div>         
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeWeekend",
    data(){
        return{
            
        }
    },
    props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
.title
    height .8rem
    line-height .8rem
    text-indent .2rem
    background-color #eee
.recommend
    // height 4.2rem
    .recommend-img-wrapper
        padding-bottom 33.9%
        height 0
        overflow hidden
        .recommend-img
            width 100%
            // height 100%
    .recommend-info
        padding .1rem
        .recommend-title
            font-size .32rem
            line-height .54rem
            // height .54rem
        .recommend-desc
            color #888
            line-height .4rem
</style>