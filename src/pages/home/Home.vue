<template>
  <div class="container">
    <Home-header></Home-header>
    <Home-list></Home-list>
    <Home-card :cardList="cardList"></Home-card> 
  </div>
</template>

<script>
import HomeHeader from "@/components/Header"
import HomeList from "./components/List"
import HomeCard from "./components/Card"
import axios from 'axios';
export default {
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
  },
  mounted(){
    this.height= window.screen.height
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
        this.cardList=res.data.listAll
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.container
  background-color rgba(248,248,249,1)
  .wrapper
    margin 0 100px
    padding 0 60px
    .wrapper-card
      display: flex;
      flex-flow: row wrap;
      margin: 0 -8px 20px;
</style>
