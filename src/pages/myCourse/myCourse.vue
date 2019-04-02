<template>
  <div>
    <top v-bind:title="title"></top>
    <div v-if="ifBuy == '0'" class="context center" >
      <h1>暂无课程</h1>
      <p @click="switchTo2">去逛逛</p>
    </div>
    <div v-else class="context">
      <div class='myClass' v-for="item in myClass" v-bind:key="item.id" @click="chooseThis(item.id)">
        <p id='name'>{{item.name}}</p>
        <img src="../../../static/img/icon/time.png" style="float:left;width:16px;height:16px">
        <p id='time'>开始时间:{{item.startDate}}-结束时间：{{item.endDate}}</p>
        <p id='teacher'>开课老师：{{item.teacher}}</p>
      </div>
    </div>
    <bottom v-bind:switchValue="switchValue"></bottom>
  </div>
</template>

<script>

import top from '@/components/top'
import bottom from '@/components/bottom'
// import * as moment from 'moment'

export default {
  name: 'studyCourse',
  components:{top,bottom},
  data () {
    return {
      title:'我的课程',
      switchValue:1,
      myClass:[],
      ifBuy: ''
    };
  },

//   computed: {},

//   mounted: {},

  methods: {
    chooseThis(id){//班级id
    
    },
    getCourse(){
      const moment=  this.$moment;
      console.log(this.$store.getters.user)
      if(this.$store.getters.user.ifBuy == '0'){
        this.ifBuy = '0'
      }else if(this.$store.getters.user.ifBuy == '1'){
          
        let courses =JSON.parse(this.$store.getters.user.courses) 
       
        this.$http.get('/api/classes/getMyClasses/',{params:
        {courses: courses}
        }).then((res) => {
          console.log(res.data)
          this.myClass = res.data
          for(let i = 0;i<= this.myClass.length;i++){
            this.myClass[i].startDate = moment(this.myClass[i].startDate).format('MM-DD-YYYY')
            this.myClass[i].endDate = moment(this.myClass[i].endDate).format('MM-DD-YYYY')
          }
        })
      }
      console.log(this.ifBuy)
    },
    dateFormat(date){
      arr = date.split("-");
      console.log(arr)
      
    },
    switchTo2(){
      this.$router.push({name:'buyCourse'})
      // this.$router.replace('/buyCourse')
    }
  },
  created(){
    this.getCourse();
  }
}

</script>
<style lang='scss' scoped>
  .context{
    margin-top: 20%;
  }
  .center{
    margin-top: 30%;
    text-align: center
  }
  .center h1{
    color: rgba(192, 181, 181,0.5);
  }
  .center p{
    color: #1296db;
  }
  .myClass{
    background-color: white;
    padding: 5px;
    margin-top: 10px;
  }
  #name{
    font-size: 20px;
    margin: 0;
  }
  img {
    width: 16px;
    height: 16px;
    margin: 8px 5px 0px 0px;
  }
  #time{
    font-size: 16px;
    margin: 0;
    color: #bfbfbf;
    margin: 5px;
  }
  #teacher{
    margin: 10px 0px 0px 0px;
  }
</style>