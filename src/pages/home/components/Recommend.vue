<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <div class="recommend border-bottom" v-for="item in list" :key="item.id">
            <img class="recommend-img" :src="item.imgUrl" />
            <div class="recommend-info">
               <p class="recommend-title">{{item.title}}</p>
                <p class="recommend-desc">{{item.desc}}</p>
                <button class="recommend-button">查看详情</button> 
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
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
    height 1.9rem
    display flex
    // background-color #ccc
    .recommend-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .recommend-info
        flex 1
        padding .1rem
        .recommend-title
            font-size .32rem
            line-height .54rem
            // height .54rem
        .recommend-desc
            color #ccc
            line-height .4rem
        .recommend-button
            line-height .44rem
            padding .08rem .2rem
            border-radius .1rem
            margin-top .16rem
            background-color #f00
            color #fff
</style>