<template>
  <div class="main" ref="main">
    <Home-header></Home-header>
    <button @click="reloaded" style="position: relative;top:61px">刷新</button>
    <el-row :gutter="10" style="position: relative;top:61px;left: 0;right:0;bottom:0;z-index:-1;overflow: hidden;">
      <el-col :xs="16" :sm="12" :md="8" :lg="5" :xl="6" class="home-tree">
        <Home-tree></Home-tree>
      </el-col>
      <el-col :xs="8" :sm="12" :md="16" :lg="19" :xl="16" class="ifram">
        <router-view/>   
      </el-col>
    </el-row>

    <!-- <router-view/> -->
    <!-- <Home-list></Home-list> -->
    <!-- <Home-card :cardList="cardList"></Home-card>  -->
  </div>
</template>

<script>
import HomeHeader from "@/components/Header"
import HomeList from "./components/List"
import HomeCard from "./components/Card"
import HomeTree from "./components/Tree"
import axios from 'axios';
export default {
  inject: ['reload'],
  name: 'Home',
  data () {
    return {
      height:"",
      cardList:[]
    }
  },
  components:{
    HomeHeader,
    HomeList,
    HomeCard,
    HomeTree
  },
  created(){
    // this.$router.push({ path: '/testFirst' })
  },
  mounted(){
    // window.addEventListener("scroll",this.windowScroll());
    this.height= window.screen.height
    this.getInfo();
    // window.addEventListener("scroll",this.getScroll());
    let box = this.$refs.main
    // 监听这个dom的scroll事件
    box.addEventListener('scroll', () => {
        this.getScroll();
    }, false)
    
  },
  activated(){
    // window.addEventListener("scroll",this.handleScroll());
  },
  methods:{
    getScroll(){
        let box = this.$refs.main
        this.scrollTop = box.scrollTop;;
        console.log(this.scrollTop)
        if (!!document.documentElement.scrollTop &&document.documentElement.scrollTop >= 300){            
            alert(111)
        }
    },
    getInfo(){
      axios.get('/static/mock/index.json')
      .then(
        this.remind
      )
    },
    remind(res){
      console.log(res)
      res=res.data;
      if(res.ret&&res.data){
        this.cardList=res.data.listAll
      }
    },
    reloaded(){
      this.reload();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.main
  background-color rgba(248,248,249,1)
  position fixed
  left 0
  top 0
  right 0
  height 100%
  overflow-y: hidden; 
  .ifram
    height 100vh
    overflow auto
  
</style>
