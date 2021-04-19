<template>
    <div class="container" ref="main">
        <h1>first</h1>
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
    margin 40px 100px 0px
    height 100vh
    background-color red
</style>