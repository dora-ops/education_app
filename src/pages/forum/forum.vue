<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <img id='add' @click="addPost" src="../../../static/img/icon/add.png"/>
    <div class="context" >
      <div class='allPost' v-for="item in allPost" v-bind:key="item.id">
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
      title: "留言板",
      switchValue: 3,
      allPost: []
    };
  },

  components: { top, Bottom },

  computed: {},

  created() {
    this.getPost();
  },

  methods: {
    addPost() {
      this.$router.push({ name: "addPost" });
    },
    getPost() {
        var sql='select * from posts'
      this.$http.post("/api/base/action", {sql:sql}).then(res => {
     
        this.allPost = res.data.reverse();
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#add {
  position: fixed;
  z-index: 1000;
  width: 28px;
  left: 83%;
  top: 3%;
}
.context {
  margin-top: 65px;
  margin-bottom: 20%;
  background:rgb(247,247,247);
}
.allPost {
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