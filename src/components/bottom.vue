<template>
  <div class='atBottom'>
    <ul>
      <a v-if='switchValue == 1' class="study_blue"><li>学习</li></a>
      <a v-else class="study_grey" @click="switchTo('/myCourse')"><li>学习</li></a>

      <a v-if='switchValue == 2' class="course_blue"><li>课程</li></a>
      <a v-else class="course_grey" @click="switchTo('/buyCourse')"><li>课程</li></a>

      <a v-if='switchValue == 3' class="forum_blue"><li>社区</li></a>
      <a v-else class="forum_grey" @click="switchTo('/forum')"><li>社区</li></a>

      <a v-if='switchValue == 4' class="personal_blue"><li>我</li></a>
      <a v-else class="personal_grey" @click="switchTo('/personalCenter')"><li>我</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name:'bottom',
  props:{switchValue:Number},
  data () {
    return {
      // switchValue: 1
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

  methods: {
    switchTo(path){
      this.$router.replace(path)
    }
  }
}

</script>
<style lang='scss' scoped>
  ul{
    text-align:center;
    padding: 0px;
    height: 100%;
    margin: 0px;
    background-color: white;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ul a li{
    list-style:none;
    display: block;
    text-align:center;
  }
  ul a{
    // height: 89%;
    padding-top: 11%;
    width: 25%;
    line-height: 100%;
    color: grey;
    display: block;
    text-align:center;
  }
  a:active{
    color: rgb(156, 189, 226);
    // background: #7bd7e7;
  }
  .atBottom{
    border-top: 1px solid rgb(231, 228, 228);
    bottom:0;
    width: 100%;
    height: 10%;
    position: fixed;
    z-index: 999;
  }
  .study_blue{
    background: url('../../static/img/icon/studyCourse_blue.png') no-repeat center 15%;
    background-size: 30%;
    color: rgb(156, 189, 226);
  }
  .course_blue{
    background: url('../../static/img/icon/buyCourse_blue.png') no-repeat center 15%;
    background-size: 30%;
    color: rgb(156, 189, 226);
  }
  .forum_blue{
    background: url('../../static/img/icon/forum_blue.png') no-repeat center 15%;
    background-size: 30%;
    color: rgb(156, 189, 226);
  }
  .personal_blue{
    background: url('../../static/img/icon/personalCenter_blue.png') no-repeat center 15%;
    background-size: 30%;
    color: rgb(156, 189, 226);
  }
  .study_grey{
    background: url('../../static/img/icon/studyCourse_grey.png') no-repeat center 15%;
    background-size: 30%;
  }
  .course_grey{
    background: url('../../static/img/icon/buyCourse_grey.png') no-repeat center 15%;
    background-size: 30%;
  }
  .forum_grey{
    background: url('../../static/img/icon/forum_grey.png') no-repeat center 15%;
    background-size: 30%;
  }
  .personal_grey{
    background: url('../../static/img/icon/personalCenter_grey.png') no-repeat center 15%;
    background-size: 30%;
  }
</style>