<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartList from './childCpns/CartList.vue'
  import CartBottomBar from './childCpns/CartBottomBar.vue'

  import NavBar from 'components/common/navbar/NavBar'

  import {mapGetters} from 'vuex'

  export default{
    name:"Shopcart",
    data(){
      return{
        count:0
      }
    },
    components:{
      NavBar,
      CartBottomBar,
      CartList
    },
    computed:{
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length:'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;

  }
</style>