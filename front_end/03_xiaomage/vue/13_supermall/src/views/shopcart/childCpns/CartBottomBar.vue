<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button
        @click.native="checkedChange"
        :is-checked="isAllSelect"
        class="check-button"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计:{{ totalPrice }}</div>
    <div class="caculate-price" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  import {mapGetters} from 'vuex';

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    methods: {
      checkedChange() {
        let isAllSelect = this.isAllSelect
        // for (let i of this.$store.getters.cartList) {
        //   if (isAllSelect) {
        //     i.checked = false;
        //   } else {
        //     i.checked = true;
        //   }
        // }

        // if(this.isAllSelect){
        //   this.cartList.forEach(item=> item.checked = false)
        // }else{
        //   this.cartList.forEach(item=> item.checked = true)
        // }

        this.cartList.forEach(item=> item.checked = !isAllSelect)
      },
      calcClick(){
        if(!this.isAllSelect){
          this.$toast.show('请选择购买的商品', 2000)
        }
      }
    },
    computed: {
      ...mapGetters(['cartList', 'cartLength']),
      totalPrice() {
        return (
          "￥" +
          this.cartList
            .filter(item => {
              return item.checked;
            })
            .reduce((preValue, item) => {
              return preValue + item.price * item.count;
            }, 0)
            .toFixed(2)
        );
      },
      isAllSelect() {
        if(this.cartLength === 0) return false

        // return this.cartList.filter(item => {
        //     return item.checked;
        //   }).length === this.cartLength
        return !this.cartList.find(item=>!item.checked)
      },
      checkLength(){
        return this.cartList.filter(item => {
            return item.checked;
          }).length
      },
      // checkedCartList(){
      //   return this.cartList.filter(item => {
      //       return item.checked;
      //     })
      // }
    }
  };
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
    font-size: 14px;
  }

  .check-all {
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 60px;
    /* justify-content: center; */
    /* width: 20px; */
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 3px;
  }

  .total-price {
    margin-left: 30px;
    flex:1
  }

  .caculate-price{
    width: 80px;
    background-color: var(--color-tint);
    color: #fff;
    text-align: center;
  }
</style>
