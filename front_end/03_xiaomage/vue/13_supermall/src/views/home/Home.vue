<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 重构滚动条 -->
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"  
    @scroll="contentScroll" 
    @pullingUp="loadMore">
      <!-- 给子组件传值时，不加冒号会直接将参数当做字符串传过去 -->
      <!-- 轮播图组件 -->
      <home-swiper :banners="banners"/>
      <!-- 推荐组件 -->
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选 ']" @tabClick='tabClick'></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 监听组件点击事件：@click.native -->
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childCnps/HomeSwiper.vue'
  import HomeRecommendView from './childCnps/HomeRecommendView.vue'
  import HomeFeatureView from './childCnps/HomeFeatureView.vue'

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from 'components/common/scroll/Scroll';
  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList from 'components/content/goods/GoodsList';
  import BackTop from 'components/content/backTop/BackTop';

  import { getHomeMultidata, getHomeGoods } from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
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
        currentType:'pop',
        isBackTopShow:false
      };
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      },
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      // ！！！！！！一定要在组件加载完成在去监听事件
      // 监听item中图片加载完成
      // 设置防抖函数，防止短时间内多次调用refresh
      const refresh = this.debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },

    methods:{
      /**
       * 事件监听相关方法
       */
      // 防抖函数
      debounce(func, dalay=500){
        let timer = null;
        // ...args接收数组
        return function(...args){
          if(timer) clearTimeout(timer)
          timer = setTimeout(()=>{
            func.apply(this, args)
          },dalay)
          // 关于apply方法: https://www.cnblogs.com/xiaohongwu/archive/2011/06/15/2081237.html
        }
      },
      tabClick(index){
        // console.log(index);
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
      backClick(){
        // 父组件访问子组件可以使用 $refs.refName
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // console.log(position);
        this.isBackTopShow = -position.y > 1000
      },
      // @pullingUp="loadMore"
      loadMore(){
        // console.log('上拉加载更多');
        // 获取当前分类
        this.getHomeGoods(this.currentType)
      },

      /**
      * 网络请求相关方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        console.log('轮播图加载完成', res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
      },
      getHomeGoods(type){
        // js取对象属性事，点方法后面跟的必须是一个指定的属性名称，而中括号方法里面可以是变量
        const page = this.goods[type].page  + 1
        getHomeGoods(type, page).then(res => {
          // console.log('getHomeGoods', res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
      });
      }
    }
  };
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh; /*vh: 相对于视窗的高度, 视窗被均分为100单位的vh; */
    position: relative;
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

  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px
  } */

  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
