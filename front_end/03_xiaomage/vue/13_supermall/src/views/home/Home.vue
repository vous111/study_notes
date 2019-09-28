<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图组件 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐组件 -->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选 ']" @tabClick='tabClick'></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
  import HomeSwiper from './childCnps/HomeSwiper.vue'
  import HomeRecommendView from './childCnps/HomeRecommendView.vue'
  import HomeFeatureView from './childCnps/HomeFeatureView.vue'

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList from 'components/content/goods/GoodsList';

  import { getHomeMultidata, getHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType:'pop'
      };
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },

      /**
      * 网络请求相关方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
      },
      getHomeGoods(type){
        // js取对象属性事，点方法后面跟的必须是一个指定的属性名称，而中括号方法里面可以是变量
        this.goods[type].page += 1
        const page = this.goods[type].page 
        getHomeGoods(type, page).then(res => {
          console.log('getHomeGoods', res);
          this.goods[type].list.push(...res.data.list)
      });
      }
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
    width: 100%;
    top:0;
    left:0;
    right: 0;
    z-index: 100;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9; /*数字越大越在上面一层*/
  }
</style>
