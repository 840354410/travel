<template>
    <div class="wrapper">
        <div class="wrapper-card">
            <div class="container" v-for="(items,index) of listAll" :key="index+'00'">
                <div class="list">
                    <div class="title">
                        <h1>{{items.type}}</h1>
                        <h2>{{items.des}}</h2>
                    </div>
                    <div class="info" v-for="(item,index) of items.list" :key="index">
                        <div class="info-item-active" v-if="item.visibility" @mouseenter="handleonMouseover([items.type,item.id])" @mouseleave="handleonMouseout([items.type,item.id])">
                            <div :class="item.number==1?'number-active':'number'">{{item.number}}</div>
                            <div class="content">
                                <div class="content-title" @click="pathTo(item.id)">{{item.title}}</div>
                                <div class="content-author">{{item.author}}</div>
                                <div class="content-extra">
                                    <span>{{item.extraInfo[0]}}</span>
                                    <span class="separator"></span>
                                    <span>{{item.extraInfo[1]}}</span>
                                </div>
                            </div>
                            <div class="image">
                                <img :src="item.image" @click="pathTo(item.id)">
                            </div>
                        </div>
                        <div class="info-item" v-if="!item.visibility" @mouseenter="handleonMouseover([items.type,item.id])" @mouseleave="handleonMouseout([items.type,item.id])">
                            <div :class="item.number==1?'number-active':'number'">{{item.number}}</div>
                            <div class="content">
                                <div class="content-title">{{item.title}}</div>
                                <div class="content-extra">{{item.extraInfo[0]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
                
    </div>
</template>
<script>
export default {
    name: 'HomeCard',
    data(){
        return{
            listAll:[]
            
        }
        
    },
    props:{
        cardList:{
            type:Array
        }
    },
    methods:{
        handleonMouseover([type,id]){
            this.listAll.map(item=>{
                if(item.type==type){
                    let list=item.list
                    list.map(value=>{
                        if(value.id==id){
                            value.visibility=true
                        }else{
                            value.visibility=false
                        }
                    })
                }
            })
        },
        handleonMouseout([type,id]){
            this.listAll.map(item=>{
                if(item.type==type){
                    let list=item.list
                    list.map(value=>{
                        if(value.number==1){
                            value.visibility=true
                        }else{
                            value.visibility=false
                        }
                    })
                }
            })
        },
        pathTo(id){
            this.$router.push({ name: 'Detail' ,query: {"id": id}});
        }
    },
    watch:{
        cardList(){
            this.listAll=this.cardList
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper
    margin 0 100px
    padding 0 60px
    .wrapper-card
        display: flex;
        flex-flow: row wrap;
        margin: 0 -8px 20px;
        .container
            width: 25%;
            box-sizing:border-box;
            .list
                box-sizing: border-box;
                margin: 0 8px 40px;
                background-color #fff
                .title
                    padding: 20px;
                    h1
                        color: #bb996d;
                        font-size: 18px;
                        line-height: 22px;
                        margin 0px
                    h2
                        height 30px
                        margin-top: 2px;
                        margin-bottom: 0px;
                        color: var(--gray);
                        font-weight: normal;
                        font-size: 12px;
                .info-item-active
                    display: flex;
                    padding: 10px 20px;
                    .number-active
                        color #fa595f
                        float left
                        width 26px
                    .number
                        float left
                        color #ff9e2c
                        width 26px
                    .content
                        display flex
                        flex 1
                        flex-direction column
                        .content-title
                            margin-bottom: 2px;
                            white-space: normal;
                        .content-author
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-bottom: 12px;
                            color: var(--grayBlack50);
                            font-size: 12px;
                        .content-extra
                            font-size: 12px;
                            .separator
                                width: 2px;
                                height: 10px;
                                display: inline-block;
                                margin: 0 10px;
                                background: #ddd;
                                vertical-align: -1px;
                    .image
                        flex: none;
                        width: 80px;
                        height: 120px;
                        margin-left: 5px;
                        img 
                            width 100%
                .info-item
                    display: block;
                    padding: 10px 20px;
                    .number-active
                        color #fa595f
                        float left
                        width 26px
                    .number
                        float left
                        color #ff9e2c
                        width 26px
                    .content
                        display flex
                        flex 1
                        .content-title
                            font-size 14px
                            flex 1
                        .content-extra
                            color: #777;
                            text-align: right;
                            font-size: 12px;
                    
</style>