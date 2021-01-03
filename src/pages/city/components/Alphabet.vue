<template>
    <div>
        <div class="list">
            <div v-for="(item,key) in cities" :key="key" @click="handlePost(key)">{{key}}</div>
        </div>        
    </div>
</template>
<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
        handlePost(e){
            this.$emit("handlePost",e);
        }

    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variable.styl"
.list
    position fixed
    right 0
    top 1.58rem
    bottom 0
    display flex
    flex-direction column
    justify-content  center
    //注意，常理来说justify-content与align-items默认分别处理项目横轴，纵轴的对齐方式，但如果我们修改了flex-direction为column，
    //它们处理的轴向会交换，也就是justify-content处理纵轴，align-items处理横轴。
    div
        line-height .4rem
        color $bgColor
</style>