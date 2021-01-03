<template>
    <div>
        <City-header></City-header>
        <City-search></City-search>
        <City-list :hot="hot" :cities="cities" :choice="choice"></City-list>
        <City-alphabet :cities="cities" @handlePost="handleGet"></City-alphabet>
    </div>
</template>
<script>
import CityHeader from '@/pages/city/components/Header';
import CitySearch from '@/pages/city/components/Search';
import CityList from '@/pages/city/components/List';
import CityAlphabet from '@/pages/city/components/Alphabet';
//import axios from 'axios';
export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            hot:[],
            cities:{},
            choice:""
        }
    },
    mounted(){
        this.getInfo();
    },
    methods:{
        getInfo(){
            this.axios.get('/static/mock/city.json')
            .then(
                this.remind
            )
        },
        remind(res){
            res=res.data;
            if(res.ret&&res.data){
                this.hot=res.data.hotCities;
                this.cities=res.data.cities;
            }
        },
        handleGet(e){
            this.choice=e;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>