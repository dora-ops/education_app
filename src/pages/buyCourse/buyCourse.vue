<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <div class="context" >
      <div class='allCourse' v-for="item in allCourse" v-bind:key="item.id" @click="chooseCourse(item)">
        <p id='name'>{{item.name}}</p>
        <p id='price'>￥{{item.price}}</p>
        <p id='abstract'>{{item.abstract}}</p>
      </div>
    </div>
    <div><Bottom v-bind:switchValue="switchValue"></Bottom></div>
  </div>
</template>

<script>

import top from '@/components/top'
import Bottom from '@/components/bottom'
import {classes} from "../../sqlMap.js";
export default {
  name: 'buyCourse',
  data () {
    return {
      title:'全部课程',
      switchValue:2,
      allCourse: []
    };
  },

  components: {top,Bottom},

  computed: {},

  mounted: {},

  methods: {
    getCourse(){
      this.$http.get('/api/courses/getAllCourse',{
      }).then((res) => {
        this.allCourse = res.data
      })
    },
    chooseCourse(item){
         this.$router.push({path:'cart/'+item.id,query:{
             item: JSON.stringify(item) 
         }})
    //   var  sql=classes.getCourseClass.replace('?',name)
    //        this.$http.post("/api/base/action", { sql: sql }).then(res => {
    //            var data = res.data;
    //            this.classList = data;
    //        });
    }
  },

  created(){
    this.getCourse()
  }
}

</script>
<style lang='scss' scoped>
  .context{
    margin-top: 65px;
  }
  .allCourse{
    background-color: white;
    padding: 5px;
    margin-top: 10px;
  }
  #name{
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  #price{
    color:rgb(156, 189, 226);
    font-size: 24px;
    font-weight: bold;
    float: right;
    margin-top: -35px;
    margin-right: 20px;
    margin-bottom: 0px;
    
  }
  #abstract{
    margin: 10px 0px 0px 0px;
    color: #bfbfbf;
    // width: 80%;
  }
</style>