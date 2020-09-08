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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ff0;
    height: 200px;
    width: 50%;
    overflow: hidden;
  }
  .main img {
    width: 90%;
  }
  .main span {
    background-color: rgba(0,0,0,0.2);
    color: #ffffff;
  
    
  }
</style>