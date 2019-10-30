<template>
  <div class="check-button" :class="{check:isChecked}" @click="buttonClick">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default{ 
    name:"CheckButton",
    props:{
      isChecked:{
        type: Boolean,
        default:false
      }
    },
    methods:{
      buttonClick(){
        this.$emit('checkBtnClick')
        // 此处可在父组件使用@click.native
      }
    }
  }
</script>

<style scoped>
  .check-button{
    /* background-color: var(--color-tint); */
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check{
    border-color:var(--color-tint);
    background-color: var(--color-tint);
  }
</style>