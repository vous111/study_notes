<template>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex : 0
      };
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick', index)
      },
      backClick(){
        this.$router.back()
      }
    }
  };
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 3.7vw;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img{
    margin-top: 11px;
  }
</style>
