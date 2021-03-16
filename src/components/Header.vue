<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0" disabled class="title">豆瓣阅读</el-menu-item>
      <el-menu-item index="1">原创首页</el-menu-item>
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
      activeIndex: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.title
  font-size 24px
  padding-right 50px
</style>
