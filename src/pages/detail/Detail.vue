<template>
  <div class="container">
    <detail-header></detail-header>
    <div class="image"></div>
    <div class="contain-icons">
      <div class="contain-icons-button">
        <span class="icon-img"></span>
        <div class="icon-title">原创作品</div>
      </div>
      <span class="iconfont">&#xe618;</span>
      <div class="contain-icons-button">原创写作</div>
      <span class="iconfont">&#xe618;</span>
      <div class="contain-icons-button">{{ list.name }}</div>
    </div>
    <h1>{{ list.name }}</h1>
    <div class="author">
      <img class="list-img" :src="list.img" />
      <div>{{ list.author }}</div>
    </div>

    <div class="message">
      <span class="iconfont">&#xe60a;</span>
      <span>{{ list.message }}</span>
    </div>
    <div class="abstract">
      <span>{{ list.abstraction }}</span>
    </div>
    <div class="contract">
      <img
        src="https://img3.doubanio.com/f/ark/194e1e765a170032e61aadd737d5b25c6ddca6c3/pics/common/profile/icon-contract-badge.svg"
      />
      <label class="contract-icon">签约作品</label>
      <span></span>
      <img
        src="https://img3.doubanio.com/f/ark/194e1e765a170032e61aadd737d5b25c6ddca6c3/pics/common/profile/icon-contract-badge.svg"
      />
      <label class="contract-icon">已定价</label>
    </div>

    <ul class="cleanfloat">
      <li :class="[list.score >= 2 ? 'hs' : '']">&#9733;</li>
      <li :class="[list.score >= 4 ? 'hs' : '']">&#9733;</li>
      <li :class="[list.score >= 6 ? 'hs' : '']">&#9733;</li>
      <li :class="[list.score >= 8 ? 'hs' : '']">&#9733;</li>
      <li :class="[list.score >= 10 ? 'hs' : '']">&#9733;</li>
      <span>{{ list.score }}</span>
      <span>{{ list.introNumber }}</span>
    </ul>
    <div class="tig-container">
      <span class="iconfont">&#xe747;</span>
      <span class="tigName">{{ list.type }}</span>
      <span class="iconfont">&#xeba0;</span>
      <span
        class="tigName"
        v-for="(item, index) in list.tigName"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div class="button-wrapper">
      <div class="button-number">
        <label>字数</label>
        <label>{{ list.wordNumber }}</label>
      </div>
      <div class="button-number">
        <label>阅读</label>
        <label>{{ list.readNumber }}</label>
      </div>
      <div class="button-number">
        <label>加入书架</label>
        <label>{{ list.collectionNumber }}</label>
      </div>
      <div class="button-number">
        <label>推荐票</label>
        <label>{{ list.recommendNumber }}</label>
      </div>
    </div>
    <div class="introduce-title">简介</div>
    <div
      class="introduce-content"
      v-for="(item, index) in list.introduce"
      :key="index"
    >
      {{ item }}
    </div>
    <div
      class="introduce-content"
      v-for="(item, index) in list.introduce"
      :key="index"
    >
      {{ item }}
    </div>
    <div
      class="introduce-content"
      v-for="(item, index) in list.introduce"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
import detailHeader from "@/components/Header";
export default {
  name: "bookInformation",
  data() {
    return {
      id: "",
      list: {}
    };
  },
  created() {
    this.getInfo();
  },
  components: {
    detailHeader
  },
  methods: {
    getInfo() {
      this.id = this.$route.query.id;
      var data = new FormData();
      data.append("id", this.id);
      axios.post(`${this.baseURL}/getDetail.php?`, data).then(res => {
        console.log(res.data);
        this.list = res.data;
      });
    }
  }
};
</script>

<style scoped>
.icon-img {
  display: inline-block;
  width: 18px;
  height: 22px;
  margin: 2px 2px;
  background-image: url("https://img3.doubanio.com/f/ark/550595bc8dd03bda8a2b77cab9f3e4288ad4b50f/pics/store/column/icon-column.svg");
}
.icon-title {
  display: inline-block;
  line-height: 26px;
}
.container {
  text-align: center;
  background-color: #f3f3f3;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.image::after{
    content:'';
    background-image:  linear-gradient(to top,#f3f3f3,rgba(255,255,255,0));
    /* display: block; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.image {
  position: absolute;
  background-image:url("../../assets/image/banner.jpg") ;
  background-size: 100% 300px;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 300px;
}
.contain-icons {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px 0px 20px -30%;
}
.contain-icons-button {
  display: flex;
  /* vertical-align: center; */
  font-size: 14px;
  padding: 0 12px;
  height: 26px;
  border-radius: 26px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  line-height: 26px;
}
.list-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.author {
  margin-bottom: 30px;
}
.icon {
  width: 15px;
  height: 15px;
}
.message {
  margin-top: 30px;
  font-size: 14px;
  color: #ff9327;
}
.abstract {
  margin-top: 28px;
  font-size: 14px;
}
.contract {
  display: flex;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.contract span:after {
  content: "www";
}
.contract img {
  margin-left: 12px;
}
.contract img {
  width: 12px;
  display: block;
  margin-top: 2px;
  margin-right: 2px;
}

.tig-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tigName {
  color: #fff;
  background-color: #389eac;
  padding: 2px 10px;
  border-radius: 40px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  margin: 0 4px;
}
.button-number {
  background-color: white;
  display: inline-block;
  width: 10%;
  margin: 20px 1% 10px;
  padding: 10px 0;
}
.button-number label {
  display: inline-block;
  width: 60%;
}
.introduce-title {
  text-align: left;
  background-color: #e3e6e7;
  width: 46%;
  margin: auto;
  padding: 8px 0px 8px 8px;
  font-size: 14px;
}
.introduce-content {
  text-align: left;
  width: 46%;
  margin: auto;
  padding: 8px 0px 8px 8px;
}

.cleanfloat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
}
.cleanfloat span {
  margin: 2px 4px 0px 4px;
  font-size: 12px;
}

.cleanfloat::after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
ul li {
  list-style: none;
  float: left;
  font-size: 16px;
  margin: 2px;
  color: #ccc;
  cursor: pointer;
}
.hs {
  color: #f00;
}
</style>
