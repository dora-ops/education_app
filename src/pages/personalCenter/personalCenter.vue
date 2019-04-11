<template>
    <div>
        <div id="context">
            <div id='context1'>
                <div @click="changeImg" id='photo' :style="{backgroundImage:'url(' + personal.url + ')'}" class='background'></div>
                <p>{{personal.name}}</p>
                <!-- <img @click='edit' id='edit' src="../../../static/img/icon/edit.png" /> -->
            </div>
            <div id='up'>
              <p class='border' @click="change('changeName')">修改名字</p>
              <p class='border' @click="change('changePasssword')">修改密码</p>
              <p @click="change('changeTel')">修改手机</p>          
            </div>
            <div id='bottom' @click="exit">
                <p>退出登录</p>
            </div>
        </div>
        <bottom v-bind:switchValue="switchValue"></bottom>
    </div>
</template>

<script>
import bottom from "@/components/bottom";
import { resource, customers } from "../../sqlMap.js";
export default {
  name: "personalCenter",
  components: { bottom },
  data() {
    return {
      switchValue: 4,
      personal: {
        name: this.$store.getters.user.name,
        url: "../../../static/img/icon/edit.png"
      },
      changePhoto: false
    };
  },

  computed: {},

  created() {
    //  var user=JSON.parse(sessionStorage.getItem('userInfo'))
    var user = this.$store.getters.user;
    var sql = customers.getUserInfo.replace("?", user.id);
    this.$http.post("/api/base/action", { sql: sql }).then(res => {
      user = res.data[0];
      sql = resource.getResource.replace("?", user.photo);
      this.$http.post("/api/base/action", { sql: sql }).then(res => {
        var r = res.data[0];
        this.personal.url = "http://localhost:3000/" + r.fileName;
      });
    });
  },

  methods: {
    // edit() {
    //   this.$router.push({ name: "chooseEdit" });
    // },
    changeImg(){
      this.$router.push({ name: "changePhoto" });
    },
    change(name){
      this.$router.push({name: name})
    },
    exit(){
      this.$router.push({name: 'login'})
      sessionStorage.setItem('userInfo',{})
    }
  }
};
</script>
<style lang='scss' scoped>
#context {
  margin-top: 0px;
}
#context1 {
  padding: 30px 0px 30px 30px;
  background: #75caf8;
  height: 33px;
  text-align: center;
  box-shadow: darkgrey 0px 2px 10px 1px;
}
#photo {
  border: white solid 2px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  float: left;

  background-color: white;
  background-size: 70%;
  box-shadow: darkgrey 0px 5px 10px 1px;
}
#context1 p {
  color: white;
  font-size: 22px;
  margin-top: 25px;
  float: left;
  margin-left: 18px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
#edit {
  width: 6%;
  float: left;
  margin-top: 28px;
  margin-left: 12px;
}
.background{
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
#up{
      margin-top: 10%;
      background: white;
      padding-left: 5%
  }
  #bottom{
      margin-top: 5%;
      background: white;
      text-align: center;
  }
  .border{
      
      border-bottom: 1px rgb(231, 228, 228) solid
  }
  p{
      font-size: 18px;
      line-height: 40px;
      margin: 0;
  }
</style>