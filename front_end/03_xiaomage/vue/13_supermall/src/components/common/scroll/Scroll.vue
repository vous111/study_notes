<template>
  <!-- ref如果是绑定在组件中，那么通过this.$refs.refname获取到的是一个组件对象 -->
  <!-- ref如果是绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        scroll: null
      };
    },
    // 组件创建完成后调用
    mounted() {
      // 1.创建对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, // button不受此约束，但是其他标签受此约束，要想能监听点击需要设置为true
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // console.log(this.scroll);
      // 2.监听滚动的位置
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit('scroll', position) //发射自定义事件
      });

      // 3.监听上拉事件
      this.scroll.on('pullingUp', ()=>{
        this.$emit('pullingUp')
      })
    },
    methods: {
      // this.scroll && 这里使用逻辑与的原因是，可能图片加载完成该组件还未加载
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time); // 第三个参数为时间
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        // console.log('---');
        this.scroll && this.scroll.refresh()
      }
    }
  };
</script>

<style scoped></style>
