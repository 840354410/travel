<template>
    <div>
        <div class="title">城市选择
            <router-link to="/">
                <div class="iconfont back-icon">&#xe685;</div>
            </router-link>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
        

    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variable.styl"
.title
    background-color $bgColor
    height $titleHeight
    line-height $titleHeight
    color #ffffff
    text-align center
    font-size .32rem
.back-icon
    width .64rem
    position absolute
    left 0
    top 0
    color #ffffff
    font-size .4rem
    text-align center     
</style>