<template>
  <div class="wrapper-card">
    <div
      class="container"
      v-for="(items, indexs) of listAll"
      :key="indexs + '00'"
    >

      <div class="list" @mouseleave="handleonMouseout(indexs)">
        <div class="title">
          <h1>{{ items.type }}</h1>
          <h2>{{ items.des }}</h2>
        </div>
        <div class="info" v-for="(item, index) of items.list" :key="index" @mouseenter="handleonMouseover([indexs, index])">
          <div
            class="info-item-active"
            v-if="item.visibility"
            
            
          >
            <div class="number">
              {{ item.number }}
            </div>
            <div class="content">
              <div class="content-title" @click="pathTo(item.id)">
                {{ item.title }}
              </div>
              <div class="content-author">{{ item.author }}</div>
              <div class="content-extra">
                <span>{{ item.extraInfo[0] }}</span>
                <span class="separator"></span>
                <span>{{ item.extraInfo[1] }}</span>
              </div>
            </div>
            <div class="image">
              <img :src="item.image" @click="pathTo(item.id)" />
            </div>
          </div>
          <div
            class="info-item"
            v-else
          >
            <div :class="item.number == 1 ? 'number-active' : 'number'">
              {{ item.number }}
            </div>
            <div class="content">
              <div class="content-title">{{ item.title }}</div>
              <div class="content-extra">{{ item.extraInfo[0] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  inject: ['reload'],
  name: "HomeCard",
  data() {
    return {
      listAll: []
    };
  },
  props: {
    cardList: {
      type: Array
    }
  },
  created(){
    this.getInfo();
  },
  methods: {
    handleonMouseover([indexs, index]) {
        let list = this.listAll[indexs].list;
        list.forEach((item,num)=>{
            if(num==index){
                item.visibility = true;
            }else{
                item.visibility = false;
            }
        })
    },
    handleonMouseout(index) {
          let list = this.listAll[index].list;
          list.forEach(value => {
            if (value.number == 1) {
            value.visibility = true;
            } else {
            value.visibility = false;
            }
          });
    },
    pathTo(id) {
      this.$router.push({ name: "Detail", query: { id: id } });
    },
    getInfo(){
      axios.get('/static/mock/index.json')
      .then(
        this.remind
      )
    },
    remind(res){
      console.log(res)
      res=res.data;
      if(res.ret&&res.data){
        this.listAll=res.data.listAll
      }
    }
  },
  watch: {
    cardList() {
      this.listAll = this.cardList;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper-card
    display: flex;
    flex-flow: row wrap;
    padding 0 150px;
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
