<template>
  <div>
    <top v-bind:title="title"></top>
    <div v-if="ifBuy == '0'" class="context center" >
      <h1>暂无课程</h1>
      <p @click="switchTo2">去逛逛</p>
    </div>
    <div v-else class="context">
      <div class='myClass' v-for="(itemCourse,index) in courseList" >
        <p id='courseName'>课程:{{itemCourse.name}}</p>
        <div v-for="(item,j) in itemCourse.classList"  @click="chooseThis(item.id)">
             <p id='className'>班级:{{item.name}}</p>
             <img src="../../../static/img/icon/time.png" style="float:left;width:16px;height:16px">
        <p id='time'>时间：{{item.startDate}} - {{item.endDate}}</p>
        <p id='teacher'>开课老师：{{item.teacher}}</p>
        </div>
       
      </div>
    </div>
    <bottom v-bind:switchValue="switchValue"></bottom>
  </div>
</template>

<script>
import top from "@/components/top";
import bottom from "@/components/bottom";
import { customers, courses, classes } from "../../sqlMap.js";
// import * as moment from 'moment'

export default {
  name: "studyCourse",
  components: { top, bottom },
  data() {
    return {
      title: "我的课程",
      switchValue: 1,
      courseList: [],
      ifBuy: ""
    };
  },

  //   computed: {},

  //   mounted: {},

  methods: {
    chooseThis(id) {
      //班级id
      this.$router.push("courseDetail/" + id);
    },
    getCourse(item) {
      //   console.log(this.$store.getters.user)
      var user = this.$store.getters.user;
      if (this.$store.getters.user.ifBuy == "0") {
        this.ifBuy = "0";
      } else if (this.$store.getters.user.ifBuy == "1") {
        var sql = customers.getUserInfo.replace("?", user.id);
        this.$http.post("/api/base/action", { sql: sql }).then(res => {
          user = res.data[0];
          let courseList =
            user.courses != (null || undefined) ? JSON.parse(user.courses) : [];
          sql = courses.getCourseList(courseList);
          this.$http.post("/api/base/action", { sql: sql }).then(async res => {
            var data = res.data;
            var pList = [];
            for (var i = 0; i < data.length; i++) {
              var course = data[i];
              if (course.classes) {
                var classList = JSON.parse(course.classes);
                sql = classes.getClassList(classList);
                var p = this.$http.post("/api/base/action", { sql: sql });

                pList.push(p);
              } else {
                pList.push(
                  new Promise(function(resolve, reject) {
                    resolve(null);
                  })
                );
              }
              this.courseList[i] = course;
            }

            var resList = await Promise.all(pList);
            // debugger
            var courseList= this.courseList
            for (let i = 0; i < resList.length; i++) {
              const res = resList[i];
              var c=courseList[i]
            //   debugger
              if (res) {
                var data = res.data;
                
                // this.$set(this.courseList[i], "classList", null);
                // this.courseList[i].classList=new Array()
                for (var j = 0; j < data.length; j++) {
                  //   debugger;
                  if (data[j].startDate) {
                    data[j].startDate = this.$moment(data[j].startDate).format(
                      "YYYY.MM.DD"
                    );
                  }
                  if (data[j].endDate) {
                    data[j].endDate = this.$moment(data[j].endDate).format(
                      "YYYY.MM.DD"
                    );
                  }
                //   debugger
                //   this.$set(this.courseList[i].classList, j, data[j]);
                }
                // this.courseList[i].classList=data
                c.classList=data
                  this.$set(this.courseList[i], "classList", data);
              } else {
                // this.courseList[i].classList=[]
                c.classList=[]
                 this.$set(this.courseList[i], "classList", []);
              }
              courseList[i]=c
            }
            // this.courseList=courseList
            //   resList.forEach(res => {

            //     i++
            //   });
            console.log(this.courseList,'我的');
            this.$forceUpdate();
          });
        });
      }
    },
    dateFormat(date) {
      arr = date.split("-");
      console.log(arr);
    },
    switchTo2() {
      this.$router.push({ name: "buyCourse" });
      // this.$router.replace('/buyCourse')
    }
  },
  created() {
    this.getCourse();
  }
};
</script>
<style lang='scss' scoped>
.context {
  margin-top: 20%;
}
.center {
  margin-top: 30%;
  text-align: center;
}
.center h1 {
  color: rgba(192, 181, 181, 0.5);
}
.center p {
  color: #1296db;
}
.myClass {
  background-color: white;
  padding: 5px;
  margin-top: 10px;
  border-top: #bfbfbf 1px solid;
  border-bottom: #bfbfbf 1px solid;
}
#courseName {
  font-size: 26px;
  margin: 0;
  color:rgb(156, 189, 226);
  text-align: center;
}
#className {
  font-size: 20px;
  margin: 15px 0 0 0;
}
img {
  width: 16px;
  height: 16px;
  margin: 8px 5px 0px 0px;
}
#time {
  font-size: 16px;
  margin: 0;
  color: #bfbfbf;
  margin: 5px;
}
#teacher {
  margin: 10px 0px 10px 0px;
}
</style>