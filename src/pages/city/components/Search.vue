<template>
    <div>
    <div class="wrap">
        <input class="wrap-input" placeholder="搜索城市" />
        <!-- <span class="iconfont wrap-icon">&#xe6ed;</span> -->
    </div>
    <!-- <div class="test border-topbottom" >111</div> -->
    </div>
</template>
<script>
export default {
    name:"CitySearch",
    data(){
        return{
            
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variable.styl"

.wrap
    position relative
    height .72rem
    line-height .72rem
    background-color $bgColor
    padding 0 .2rem
    .wrap-input
        line-height .62rem
        width 100%
        text-align center
        border-radius .06rem
        color #666

</style>