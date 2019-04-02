<template>
  <div>
      <top :title='title' :back='back'></top>
      <div id='up'>
        <p class='border' @click="change('changePhoto')">修改头像</p>
        <p class='border' @click="change('changeName')">修改名字</p>
        <p class='border' @click="change('changePasssword')">修改密码</p>
        <p @click="change('changeTel')">修改手机</p>          
      </div>
      <div id='bottom' @click="exit">
          <p>退出登录</p>
      </div>
  </div>
</template>

<script>

import top from '@/components/top'

export default {
  name: 'chooseEdit',
  data () {
    return {
        back: 1,
        title:'个人信息'
    };
  },

  components: {top},

  computed: {},

  mounted: {},

  methods: {
    change(name){
      this.$router.push({name: name})
    },
    exit(){
      this.$router.push({name: 'login'})
      sessionStorage.setItem('userInfo',{})
    }
  }
}

</script>
<style lang='scss' scoped>
  #up{
      margin-top: 20%;
      background: white;
      padding-left: 5%
  }
  #bottom{
      margin-top: 5%;
      background: white;
      text-align: center;
  }
  .border{
      
      border-bottom: 1px rgb(231, 228, 228) solid
  }
  p{
      font-size: 18px;
      line-height: 40px;
      margin: 0;
  }
</style>