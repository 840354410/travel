<template>
    <div class="container" ref="main">
        <h1>类型选择</h1>
    </div>
</template>
<script>
export default {
    name: 'HomeList',
    data(){
        return{
            option:1
        }
        
    },
    props:{
        
    },
    computed:{
        
    }
}
</script>
<style lang="stylus" scoped>
.container
    margin 80px 200px
    height 3000px
    background-color red
</style>