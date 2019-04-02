<template>
  <div>
    <div id="context">
      <div id='context1'>
        <div id='photo'></div>
        <p>{{personal.name}}</p>
        <img @click='edit' id='edit' src='../../../static/img/icon/edit.png'/>
      </div>
    </div>
    <bottom v-bind:switchValue="switchValue"></bottom>
  </div>
</template>

<script>

import bottom from '@/components/bottom'

export default {
  name: 'personalCenter',
  components:{bottom},
  data () {
    return {
      switchValue:4,
      personal:{
        name: this.$store.getters.user.name,
      },
      changePhoto:false,
    };
  },

  computed: {},

  mounted: {},

  methods: {
    edit(){
      this.$router.push({name:'chooseEdit'})
    }
  }
}

</script>
<style lang='scss' scoped>
  #context{
    margin-top: 0px;
  }
  #context1{
    padding: 30px 0px 30px 30px;
    background: #75caf8;
    height: 33px;
    text-align: center;
    box-shadow: darkgrey 0px 2px 10px 1px ;
  }
  #photo{
    border: white solid 2px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    float: left;
    background: url('../../../static/img/icon/photo.png') no-repeat 50% 50%;
    background-color: white;
    background-size: 70%;
    box-shadow: darkgrey 0px 5px 10px 1px ;
  }
  #context1 p{
    color: white;
    font-size: 22px;
    margin-top: 25px;
    float: left;
    margin-left: 18px;
    width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  #edit{
    width: 6%;
    float: left;
    margin-top: 28px;
    margin-left: 12px;
  }
</style>