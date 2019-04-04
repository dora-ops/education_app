<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <div class="context" >
      <div class='allCourse' v-for="item in classList" v-bind:key="item.id">
        <p id='name'>{{item.name}}</p>
        <p id='price'>老师{{item.teacher}}</p>
        <!-- <p id='price'></p> -->
        <p id='abstract'>人数{{item.peopleQTY}}开始时间:{{item.startDate}}-结束时间:{{item.endDate}}</p>
      </div>
    </div>
    <!-- <div><Bottom v-bind:switchValue="switchValue"></Bottom></div> -->
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
      title:'',
      switchValue:2,
      allCourse: [],
      classList:[]
    };
  },

  components: {top,Bottom},

  methods: {
    getCourse(name){
          var  sql=classes.getCourseClass.replace('?',name)
           this.$http.post("/api/base/action", { sql: sql }).then(res => {
               var data = res.data;
               this.classList = data;
           });
     
    },
    chooseCourse(name){
    
    }
  },

  created(){
    var course_name=this.$router.currentRoute.params.name
    this.title=course_name
    this.getCourse(course_name)
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
    color:orange;
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