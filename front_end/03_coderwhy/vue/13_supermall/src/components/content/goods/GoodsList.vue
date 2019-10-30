<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default{
    name:"GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;/* 让弹性盒元素在必要的时候拆行 */
    justify-content: space-around; /*在弹性盒对象的 <div> 元素中的各项周围留有空白*/

    padding: 2px; /*这里目的是使得左右两张图片的间隔等宽，需要微调*/
  }
  
</style>