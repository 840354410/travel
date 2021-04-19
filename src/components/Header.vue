<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#000">
      <div class="title"></div>
      <el-menu-item index="1" style="margin-left:300px">原创首页</el-menu-item>
      <el-menu-item index="2" disabled>完本</el-menu-item>
      <el-menu-item index="3" disabled>排行</el-menu-item>
      <el-menu-item index="4" disabled>悬疑</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '1',
      scrollTop:""
    }
  },
  methods: {
      
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
  position fixed
  left 0 
  right 0
  top 0
.title
  font-size 14px
  position absolute
  top 10px
  left 20px
.title:before
  background-image url("https://img3.doubanio.com/f/ark/e5ba4576facb8314d5164025be4204b9b0ba0aec/pics/logo/nav.svg")
  display inline-block
  width 180px
  height 29px
  content ""
  background-size 100% 100%
.title:after
  content "优质类型小说平台"
  position absolute
  left 46px
  top 28px
</style>
