<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <img id='add' @click="addPost" src="../../../static/img/icon/add.png"/>
    <div class="context" >
      <div class='allCourse' v-for="item in allCourse" v-bind:key="item.id">
        <h2 id='title'>{{item.title}}</h2>
        <p id='abstract'>{{item.content}}</p>
        <p id='author'>作者:{{item.uid}}</p>
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
#title {
  margin: 10px 0 5px 10px;
}
#author {
  color: #c0bdbda9;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px 0 12px;
}
#abstract {
  margin: 10px 0px 0px 0px;
  color: #bfbfbf;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-indent:2em;
}
</style>