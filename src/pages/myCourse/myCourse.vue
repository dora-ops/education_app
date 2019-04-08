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
import top from "@/components/top";
import bottom from "@/components/bottom";
import { customers } from "../../sqlMap.js";
// import * as moment from 'moment'

export default {
  name: "studyCourse",
  components: { top, bottom },
  data() {
    return {
      title: "我的课程",
      switchValue: 1,
      myClass: [],
      ifBuy: ""
    };
  },

  //   computed: {},

  //   mounted: {},

  methods: {
    chooseThis(id) {
      //班级id
       this.$router.push('courseDetail/'+id)
    },
    getCourse(item) {
      const moment = this.$moment;
      //   console.log(this.$store.getters.user)
      var user = this.$store.getters.user;
      if (this.$store.getters.user.ifBuy == "0") {
        this.ifBuy = "0";
      } else if (this.$store.getters.user.ifBuy == "1") {
        var sql = customers.getUserInfo.replace("?", user.id);
        this.$http.post("/api/base/action", { sql: sql }).then(res => {
          user = res.data[0];
          let courses =
            user.courses != (null || undefined) ? JSON.parse(user.courses) : [];
          this.$http
            .get("/api/classes/getMyClasses/", {
              params: { courses: courses }
            })
            .then(res => {
              var data = res.data;
              for (let i = 0; i < data.length; i++) {
                data[i].startDate = moment(data[i].startDate).format(
                  "MM-DD-YYYY"
                );
                data[i].endDate = moment(data[i].endDate).format("MM-DD-YYYY");
              }
              this.myClass = data;
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
}
#name {
  font-size: 20px;
  margin: 0;
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
  margin: 10px 0px 0px 0px;
}
</style>