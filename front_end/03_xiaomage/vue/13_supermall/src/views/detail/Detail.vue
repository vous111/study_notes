<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="titleClick" ref="detailNavBar"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
        <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll> 

    <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>

    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from './childCnps/DetailNavBar';
  import DetailSwiper from './childCnps/DetailSwiper';
  import DetailBaseInfo from './childCnps/DetailBaseInfo';
  import DetailShopInfo from './childCnps/DetailShopInfo';
  import DetailGoodsInfo from './childCnps/DetailGoodsInfo';
  import DetailParamInfo from './childCnps/DetailParamInfo';
  import DetailCommentInfo from './childCnps/DetailCommentInfo';
  import DetailBottomBar from './childCnps/DetailBottomBar';

  import GoodsList from 'components/content/goods/GoodsList';
  import BackTop from 'components/content/backTop/BackTop';

  import Scroll from 'components/common/scroll/Scroll';

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'

  import {itemListenerMixin, backTopMixin} from "common/mixin.js"
  import {debounce} from "common/utils.js"
  import {BACK_POSITION} from "common/const.js"

  import {mapActions} from 'vuex';

  export default{
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopYs:null,
        currentIndex:0,
      }
    },
    mixins:[itemListenerMixin, backTopMixin],
    created(){
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据id请求详情数据
      getDetail(this.iid).then(res =>{
        // console.log(res);
        const data = res.result
        // 1. 获取顶部轮播数据
        this.topImages = data.itemInfo.topImages
        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        // 4. 保存商品的详情数据
        this.detailInfo = data.detailInfo
        // 5. 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 6.获取评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        
        // this.$nextTick(()=>{
        //   // 根据最新的数据，对应的DOM是已经被渲染出来的，但是图片依然没有加载完(目前获取到的offsetTop不包含其中的图片高度)
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // })

      // 3.请求推荐数据
      getRecommend().then(res=>{
        this.recommends = res.data.list
        // console.log(res.data.list);
      })

      // 4.给getThemeTopYs赋值(对给this.themeTopYs赋值的操作进行防抖)
      this.getThemeTopYs = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          // 将this.themeTopYs新增一个最大值
          // this.themeTopYs.push(Number.MAX_VALUE)
          // console.log(this.themeTopYs);
      }, 200)
      }); 
    },
    mounted(){

    },
    destroyed(){
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods:{
      ...mapActions(['addCart']),
      imageLoad(){
        this.newRefresh()
        this.getThemeTopYs()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
        // console.log(-this.themeTopYs[index]);
      },
      contentScroll(position){
        // 1.获取y值
        const positionY = -position.y 
        // 2.positonY和主题中的值进行对比
        let length = this.themeTopYs.length
        for(let i in this.themeTopYs){
          // i是字符串
          i = parseInt(i)
          
          // if(this.$refs.detailNavBar.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length-1 && positionY >= this.themeTopYs[i]))){
          //   // this.currentIndex = i
          //   // console.log(this.$refs.detailNavBar.currentIndex);
          //   this.$refs.detailNavBar.currentIndex = i
          //   // console.log(i);
          // }
          
          // 简便方案，将this.themeTopYs新增一个最大值 Number.MAX_VALUE
          // if(this.$refs.detailNavBar.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          //   this.$refs.detailNavBar.currentIndex = i
          // }

          // 其实只用判断 positionY >= this.themeTopYs[i]就行了
         if(this.$refs.detailNavBar.currentIndex !== i && positionY >= this.themeTopYs[i]){
            this.$refs.detailNavBar.currentIndex = i
          }

        }
        // if(positionY > 0 && positionY < this.themeTopYs[1]){
        //   this.$refs.detailNavBar.currentIndex = 0
        // }else if(positionY >= this.themeTopYs[1] && positionY < this.themeTopYs[2]){
        //   this.$refs.detailNavBar.currentIndex = 1
        // }else if(positionY >= this.themeTopYs[2] && positionY < this.themeTopYs[3]){
        //   this.$refs.detailNavBar.currentIndex = 2
        // }else if(positionY >= this.themeTopYs[3]){
        //   this.$refs.detailNavBar.currentIndex = 3
        // }

        // 2.是否显示回到顶部
        this.isBackTopShow = positionY > BACK_POSITION

      },
      // backClick(){
      //   // 父组件访问子组件可以使用 $refs.refName
      //   this.$refs.scroll.scrollTo(0,0)
      // },
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车(1.Promise 2.mapActions)
        this.addCart(product).then(res=>{
          // console.log('这是$toast--->',this.$toast.methods['show']());
          this.$toast.show(res, 2000)
        })

        // this.$store.commit('addCart', product)
        // this.$store.dispatch('addCart', product).then(res=>{
        //   console.log(res);
        // })
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    overflow: hidden;
    /* position: fixed;
    top:44px;
    bottom: 50px;
    left: 0;
    right: 0; */
    background-color: #fff;
    height: calc(100% - 44px - 50px);
  }


</style>