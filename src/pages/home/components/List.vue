<template>
    <div class="container">
        <div class="type">
            <h1 class="title">排行</h1>
            <div class="wrapper border-bottom">
                <div class="wrapper-list">
                    <div class="target" :class="option==1?'active':''">全部排行</div>
                    <div class="target">原创</div>
                    <div class="target">悬疑</div>
                    <div class="target">女性</div>
                    <div class="target">幻想</div>
                    <div class="target">文艺</div>
                    <div class="target">历史</div>
                </div>
            </div>
        </div>
        <div class="list">
            <h2 class="list-title">综合排行</h2>
        </div>
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
    margin 20px 100px
    padding 0 60px
    .border-bottom
        border-bottom 1px solid #eee
        .wrapper-list
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            list-style:none;
            .active
                color: var(--grayBlack);
                font-weight: bold;
            div
                position: relative;
                display: inline-block;
                padding: 10px 20px;
                color: var(--grayBlack50);
                white-space: nowrap;
                font-size: 16px;
    .list-title
        margin 40px 0

        
</style>