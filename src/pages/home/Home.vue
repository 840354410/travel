<template>
  <div>
    <Home-header :city="city"></Home-header>
    <Home-swiper :list="swiperList"></Home-swiper>
    <Home-icon :list="iconList"></Home-icon>
    <Home-recommend :list="recommendList"></Home-recommend>
    <Home-weekend :list="weekendList"></Home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcon from "./components/Icon"
import HomeRecommend from "./components/Recommend"
import HomeWeekend from "./components/Weekend"
import axios from 'axios';
export default {
  name: 'Home',
  data () {
    return {
      city:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  mounted(){
    this.getInfo();
  },
  methods:{
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
        this.city=res.city;
        
        this.swiperList=res.data.swiperList;
        this.iconList=res.data.iconList;
        this.recommendList=res.data.recommendList;
        this.weekendList=res.data.weekendList
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
