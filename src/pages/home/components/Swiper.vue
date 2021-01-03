<template>
    <div class="swiper-wrapper-div">
        <swiper :options="swiperOptions" v-if="visibleness">
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" />
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    data(){
        return{
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop:true
            }
        }
        
    },
    props:{
        list:Array
    },
    computed:{
        visibleness(){
            return this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper-wrapper-div >>> .swiper-pagination-bullet-active
    background-color #FFF
.swiper-wrapper-div
    width 100%
    padding-bottom 31.25%
    height 0px
    background-color red
    overflow hidden
    img 
        width 100%
</style>