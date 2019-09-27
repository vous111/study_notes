<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图组件 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐组件 -->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '经典']"></tab-control>

    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maxime quo distinctio exercitationem praesentium quas similique dolor error illum debitis esse vitae recusandae, soluta nesciunt fugit unde odio provident minima!Lorem
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maxime quo distinctio exercitationem praesentium quas similique dolor error illum debitis esse vitae recusandae, soluta nesciunt fugit unde odio provident minima!Lorem
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maxime quo distinctio exercitationem praesentium quas similique dolor error illum debitis esse vitae recusandae, soluta nesciunt fugit unde odio provident minima!Lorem
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maxime quo distinctio exercitationem praesentium quas similique dolor error illum debitis esse vitae recusandae, soluta nesciunt fugit unde odio provident minima!Lorem
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maxime quo distinctio exercitationem praesentium quas similique dolor error illum debitis esse vitae recusandae, soluta nesciunt fugit unde odio provident minima!Lorem
  </div>
</template>

<script>
  import HomeSwiper from './childCnps/HomeSwiper.vue'
  import HomeRecommendView from './childCnps/HomeRecommendView.vue'
  import HomeFeatureView from './childCnps/HomeFeatureView.vue'

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from 'components/content/tabControl/TabControl';

  import { getHomeMultidata } from "network/home";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      TabControl,
    },
    data() {
      return {
        banners: [],
        recommends: []
      };
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
  };
</script>

<style>
  #home{
    padding-top: 44px;
    /* height: 100vh;
    position: relative; */
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px
  }
</style>
