<template>
    <swiper :options="swiperOptions">
        <swiper-slide v-for="(page,index) in iconList" :key="index">
            <div class="icons">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
export default {
    name:'HomeIcon',
    data(){
        return{
            swiperOptions: {
                // loop:true
                autoplay:false
            }
        }
    },
    props:{
        list:Array
    },
    computed:{
        iconList(){
            let pages=[];
            this.list.forEach((item,index)=>{
                let page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages;
            console.log(pages)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixin.styl";
.icons
    height 0px
    width 100%
    padding-bottom 50%
    overflow hidden
    margin-top .1rem
    .icon
        float left
        position  relative
        height 0px
        width 25%
        padding-bottom 25%
        box-sizing border-box
        overflow hidden
        .icon-img
            position  absolute
            left 0
            right 0
            top 0
            bottom 0.44rem
            padding .1rem
            img 
                display block
                margin 0 auto
                height  100%
        .icon-desc
            text-align center
            line-height 0.44rem
            height 0.44rem
            position  absolute
            left 0
            right 0
            bottom 0
            color #333
            ellipsis()
        
            
            
</style>