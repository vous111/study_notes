<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- 复制一份tabControl，实现tabControl吸顶效果 -->
    <tab-control class="tab-control" 
    :titles="['流行', '新款', '精选 ']" 
    @tabClick='tabClick' 
    ref="tabControl1"
    v-show="isTabFixed"/>

    <!-- 重构滚动条 -->
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"  
    @scroll="contentScroll" 
    @pullingUp="loadMore">
      <!-- 给子组件传值时，不加冒号会直接将参数当做字符串传过去 -->
      <!-- 轮播图组件 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!-- 推荐组件 -->
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行', '新款', '精选 ']" 
                  @tabClick='tabClick' 
                  ref="tabControl2"/>
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

  import { getHomeMultidata, getHomeGoods } from "network/home";

  import {debounce} from "common/utils.js"
  import {BACK_POSITION} from "common/const.js"
  import {itemListenerMixin, backTopMixin} from "common/mixin.js"

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
      // BackTop,
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
        // isBackTopShow:false,
        tabOffsetTop:0 ,
        isTabFixed:false,
        saveY:0,
      };
    },
    mixins:[itemListenerMixin, backTopMixin],
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
      // ！！！！！！一定要在组件加载完成再去监听事件
      // 1.监听item中图片加载完成
      // 设置防抖函数，防止短时间内多次调用refresh
      
      // 在mixin中实现
      // const refresh = debounce(this.$refs.scroll.refresh, 200)
      // // 对监听的事件进行保存
      // this.homeItemListener = ()=>{
      //   refresh()
      // }
      // this.$bus.$on('itemImageLoad',this.homeItemListener)
      // 手动点击一次
      this.tabClick(0)
    },
    // 在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // 1.保存y值
      this.saveY = this.$refs.scroll.getCurrentY()
      // 2.取消全局事件的监听
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{
      /**
       * 事件监听相关方法
       */
      // 防抖函数

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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      // backClick(){
      //   // 父组件访问子组件可以使用 $refs.refName
      //   this.$refs.scroll.scrollTo(0,0)
      // },
      contentScroll(position){
        // console.log(position);
        // 1.判断BackTop是否显示
        this.isBackTopShow = (-position.y) > BACK_POSITION

        // 2.决定tabControl是否吸顶(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
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
        // console.log('轮播图加载完成', res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
      },
      getHomeGoods(type){
        // js取对象属性时，点后面跟的必须是一个指定的属性名称，而中括号里面可以是变量
        const page = this.goods[type].page  + 1
        getHomeGoods(type, page).then(res => {
          // console.log('getHomeGoods', res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
      });
      },
      swiperImageLoad(){
        // 获取tab-control的offsetTop
        // 所有的组件都有一个属性$el：用于获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop) 
        // offsetTop 指 obj 距离上方或上层控件的位置,整型,单位像素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
    }
  };
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh; /*vh: 相对于视窗的高度, 视窗被均分为100单位的vh; */
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 原在使用浏览器原生滚动时，为了让导航栏不跟随一起滚动*/
    /* position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 100; */
  }

 /* z-index 数字越大越在上面一层*/
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  } */

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

  .tab-control{
    position: relative;
    z-index: 9;
  }

</style>
