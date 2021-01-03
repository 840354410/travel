<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe685;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe6ed;</span>
        <input />
    </div>
    <router-link to="/city">
      <div class="header-right">
          {{city}}
          <span class="iconfont">&#xe684;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      
    }
  },
  props:{
    city:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
    line-height :.86rem
    background-color :#00bcd4
    display :flex
    flex-direction :row
    color :#FFF
    .header-left
        width:.64rem
        text-align :center
        .back-icon
            text-align :center
            font-size .4rem
    .header-input
        flex:1
        background-color :#FFF
        margin-left :.2rem
        margin-top :.12rem
        height:.64rem
        line-height :.64rem
        color :#CCC
        padding-left 5px
    .header-right
        width :1.24rem
        text-align center
        color #fff
    
</style>
