<template>
  <div>
    <div><top v-bind:title="title" :back='back'></top></div>
    <div class="context" >
        <!-- <p id='name'>{{cls.name}}——{{cls.course}}</p> -->
      <div class='allCourse' v-for="item in allCourse" v-bind:key="item.id">
        <p id='name'>{{item.originalname}}</p>
        <!-- <p id='price'>老师{{item.teacher}}</p> -->
        <!-- <p id='price'></p> -->
        <p id='abstract'><video :src="'http://localhost:3000/'+item.fileName"  width="320" height="240" controls="controls"></video></p>
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
      back: 1,
      switchValue:2,
      allCourse: [],
      cls:{}
    };
  },

  components: {top,Bottom},

  methods: {
    getClass(id) {
      var sql = classes.getClassResource.replace("?",id);
    //   this.courseId = item.id;
      this.$http.post("/api/base/action", { sql: sql }).then(res => {
        var cls = res.data[0];
        this.cls=cls;
        this.title = this.cls.name

        if (cls.resource!=undefined&&cls.resource!=null) {
            var resource=JSON.parse(cls.resource); 
            sql=classes.getResource(resource)
             this.$http.post("/api/base/action", { sql: sql }).then(res => {
                 this.allCourse = res.data;
                 
             })
        }
        
      });
    },
    chooseCourse(name){
    
    }
  },

  created(){
    var id = this.$router.currentRoute.params.id;
    this.getClass(id)
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