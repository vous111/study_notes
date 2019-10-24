<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <!-- li{$}*100 -->
      <!-- 因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM -->
      <cart-list-item v-for="(item, index) in cartList" :key='index' :item-info='item'></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import CartListItem from './CartListItem.vue';

  import { mapGetters } from "vuex";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CartList",
    components: {
      CartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(["cartList"])
    },
    activated(){
      // 往购物车添加数据的时候，better-scroll并不知道，所以需要刷新
      this.$refs.scroll.refresh()
    }
  };
</script>

<style scoped>
  .cart-list {
    height:  calc(100% - 44px - 49px - 40px);
  }
  .content {
    overflow: hidden;
    height: 100%;
  }
</style>
