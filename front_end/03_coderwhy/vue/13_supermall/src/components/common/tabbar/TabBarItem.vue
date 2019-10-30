<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor:{
        type:String,
        default:"#fd7f97"
        // 类型是对象或者数组时，默认值必须是一个函数
        // default(){
        //   return "#fd7f97"
        // }
      }
    },
		data() {
			return {
				// isActive: false
      };
    },
    computed:{
      isActive(){
        // 获取当前路由的path然后和传过来的path对比，如果不等于-1就返回true
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 使用v-bind：动态绑定style，并把该style抽到一个计算属性里面来控制
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
	};
</script>

<style scoped>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
		cursor: hand;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		margin-bottom: 2px;
		vertical-align: middle;
	}
</style>
