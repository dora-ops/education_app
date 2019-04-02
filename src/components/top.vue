<template>
  <div class='atTop'>
    <img v-if="back==1" id='back' @click="backTo" src="../../static/img/icon/back.png"/>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'top',
  props:{title:String,back:Number},
  data () {
    return {
      // back: 0,
      // title: '联系'
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

  methods: {
    backTo(){
      history.back(-1);
    }
  }
}

</script>
<style lang='scss' scoped>
  .atTop{
    width: 100%;
    position: fixed;
    z-index: 999;
    text-align:center;
    border-bottom: 1px solid rgb(231, 228, 228);
    background-color: white;    
    // background-color: white;
    // height: 10%;
  }
  .atTop h2{
    margin-top: 5%;
    font-size: 22px;
    font-weight: normal;
  }
  #back{
    float: left;
    position: absolute;
    top:50%;
    left: 10%;
    transform:translate(-50%,-50%);
  }
  
</style>