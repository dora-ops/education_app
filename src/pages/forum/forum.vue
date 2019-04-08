<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <img id='add' @click="addPost" src="../../../static/img/icon/add.png"/>
    <div class="context" >
      <div class='allCourse' v-for="item in allCourse" v-bind:key="item.id">
        <p id='name'>标题:{{item.title}}</p>
        <p id='price'>用户:{{item.uid}}</p>
        <p id='abstract'>内容：{{item.content}}</p>
      </div>
    </div>
    <div><Bottom v-bind:switchValue="switchValue"></Bottom></div>
  </div>
</template>

<script>
import top from "@/components/top";
import Bottom from "@/components/bottom";

export default {
  name: "forum",
  data() {
    return {
      title: "论坛",
      switchValue: 3,
      allCourse: []
    };
  },

  components: { top, Bottom },

  computed: {},

  created() {
    this.getCourse();
  },

  methods: {
    addPost() {
      this.$router.push({ name: "addPost" });
    },
    getCourse() {
        var sql='select * from posts'
      this.$http.post("/api/base/action", {sql:sql}).then(res => {
     
        this.allCourse = res.data;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#add {
  position: absolute;
  z-index: 1000;
  width: 28px;
  left: 83%;
  top: 3%;
}
.context {
  margin-top: 65px;
}
.allCourse {
  background-color: white;
  padding: 5px;
  margin-top: 10px;
}
#name {
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 5px;
}
#price {
  color: orange;
  font-size: 24px;
  font-weight: bold;
  float: right;
  margin-top: -35px;
  margin-right: 20px;
  margin-bottom: 0px;
}
#abstract {
  margin: 10px 0px 0px 0px;
  color: #bfbfbf;
  // width: 80%;
}
</style>