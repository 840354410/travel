<template>
    <div class="container">
        <div class="icons">
            <div class="icon">
                <span class="icon-img"></span>
                <div class="icon-title">原创作品</div>
            </div>
            <div class="iconfont">&#xe618;</div>
            <div class="icon">原创写作</div>
            <div class="iconfont">&#xe618;</div>
            <div class="icon">原创丝剩</div>
        </div>
        <div class="title">
            <h1>原创丝剩</h1>
        </div>
        <!-- <div class="wrapper">
            <div class="wraper-img">
                <img src="https://img1.doubanio.com/icon/up194770568-7.jpg">
            </div>
        </div> -->

    </div>
</template>
<script>
export default {
    name: 'detailIcon',
    data(){
        return{
            
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
    position: relative;
    padding: 0px 0 10px;
    .icons
        position absolute
        top 13px;
        display flex;
        align-items center;
        justify-content start
        color #3e4347
        width 40%
        margin-left 30%
        .icon
            display: flex;
            font-size 14px
            padding: 0 12px;
            height: 26px;
            border-radius: 26px;
            background-color: rgba(255,255,255,0.5);
            color: var(--grayBlack);
            line-height: 26px;
            .icon-img
                display inline-block
                width 18px
                height 22px
                margin 2px 2px
                background-image:url(https://img3.doubanio.com/f/ark/550595bc8dd03bda8a2b77cab9f3e4288ad4b50f/pics/store/column/icon-column.svg);
            .icon-title
                display inline-block
                margin-left 2px
    .title
        width 40%
        margin 100px 30% 40px
        text-align center
        z-index 2
    .wrapper
        z-index 9999

    
</style>