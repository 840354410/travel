<template>
    <div class="container" ref="main">
        <h1>second</h1>
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
    margin 40px 100px
    height calc(100vh - 141px)
    background-color red
</style>