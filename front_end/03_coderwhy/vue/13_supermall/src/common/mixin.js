import {debounce} from "common/utils.js"
import BackTop from 'components/content/backTop/BackTop';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh:null
    };
  },
  mounted() {
    // 1.监听item中图片加载完成
    // 设置防抖函数，防止短时间内多次调用refresh
    this.newRefresh = debounce(this.$refs.scroll.refresh, 200);

    // 对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('我是混入');
  }
};


export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return{
      isBackTopShow:false
    }
  },
  methods:{
    backClick(){
      // 父组件访问子组件可以使用 $refs.refName
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}