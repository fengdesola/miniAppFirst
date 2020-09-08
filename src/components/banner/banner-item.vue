<template>
<div class="main" @click="itemClick">
  <img :src="imgUrl" alt="">
  <span>{{title}}</span>
</div>
  
</template>

<script>
export default {
  props:{
    imgUrl:{
      type: String,
      default:'',
      require: true,
    },
    title:{
      type: String,
      default:'',
      require: true,
    },
    data:{
      type: Object,
      default:{},
      require: true,
    }
  },
  data(){
    return {

    }
  },
  methods:{
    itemClick(){
      this.$emit('itemClick', this.data);
    }
  }

}
</script>

<style scoped>
  .main {
    position: relative;
    background-color: #ff0;
    height: 300px;
    width: 100%;
  }
  .main img {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .main span {
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    /* background-color: #000; */
    color: #ffffff;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 4px;
  
    
  }
</style>