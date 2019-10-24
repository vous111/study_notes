<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      };
    },
    methods: {
      imgLoad() {
        // 判断所有的图片都加载完了，那么进行一次回调就可以了(此方法有问题，有些图片加载失败)
        // if (++this.counter === this.imagesLength) {
        //   this.$emit("imageLoad");
        //   console.log('推送imageLoad');
        // }
        // console.log('imgLoad:',this.counter);
        this.$emit("imageLoad");

      }
    },
    watch: {
      detailInfo() {
        // 获取图片的个数
        this.imagesLength = this.detailInfo.detailImage[0].list.length;
        // console.log("watch:",this.imagesLength);
      }
    }
  };
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
   padding:0 15px;
  }
  /* .clearfix:after {
    content: " ";
    display: block;;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
} */
  .start,
  .end {
    /* display: block; */
    width: 100px;
    height: 1px;
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
    background-color: #a3a3a3;
    position: relative;
  }
  .start {
    float: left;

    /* margin-left: 10px;
    text-align: left; */
  }

  .end {
    float: right;

    /* text-align: right;
    margin-right: 10px; */
  }

  .start:before, .end:after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333333;
    bottom: 0;
  }
  .end::after{
    right: 0;
  }
  .desc{
    padding:15px 0;
    font-size: 14px;
  }
  
  .info-key{
    margin: 10px 0 10px 15px;
    color:#333;
    font-size: 15px;
  }

  .info-list img{
    width: 100%;
  }
</style>
