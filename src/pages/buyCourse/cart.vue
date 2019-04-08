<template>
  <transition name="slideright">
    <div class="cart">
      <!-- 头部 -->
      <imooc-header title="购物车"></imooc-header>

      <!-- 主要内容 -->
      <div class="imooc-container">
        <!-- 列表 -->
        <ul class="shop-list">
          <li class="shop-item imooc-flex" v-for="(shop, index) in shoplist" :key="index">
            <div class="checkbox-wrapper imooc-flex imooc-flex-center mr-10" @click="checkItem(index)">
              <div class="checkbox" :class="{'checked': shop.checked}"></div>
            </div>
            <div class="shop-container" @click="delshop(index)">
              <imooc-citem :course="shop" width="10rem" height="7rem"></imooc-citem>
            </div>
          </li>
        </ul>

        <!-- 暂无商品 -->
        <!-- <div class="no-shop" v-if="shoplist.length == 0">
          <img src="@/public/images/no-shop.png">
          <p>暂无商品</p>
        </div> -->
      </div>

      <!-- 底部 -->
      <div class="footer imooc-flex">
        <div class="checkbox-wrapper imooc-flex imooc-flex-center mr-10" @click="checkAll">
          <div class="checkbox" :class="{'checked': all}"></div>
          <span class="ml-10">全选</span>
        </div>
        <div class="money imooc-flex imooc-flex-center">
          <span>合计: <span class="cr-main">{{ total }}</span></span>
        </div>
        <div class="btn buy-btn" @click="pay" :class="{'disabled': total == 0}">去结算</div>
      </div>
    </div>
  </transition>
</template>

<script>
import header from "@/components/header";
import citem from "@/components/citem";
import { classes, customers } from "../../sqlMap.js";

export default {
  data() {
    return {
      all: false,
      shoplist: [],
      user: JSON.parse(sessionStorage.userInfo),
      courseId: ""
    };
  },
  methods: {
    async pay() {
      if (this.total) {
        var user = this.user;
        var classes = user.classes ==null||undefined?[] :JSON.parse(user.classes);
        var courses = user.courses==null||undefined?[] :JSON.parse(user.courses);
        for (let i = 0; i < this.shoplist.length; i++) {
          const item = this.shoplist[i];
          if (item.checked) {
            classes.push(item.id);
          }
        }
        courses.push(this.courseId)
        //去重
        classes = Array.from(new Set(classes)) ;
        courses = Array.from(new Set(courses));
        var sql = customers.buyClasses
          .replace("?", JSON.stringify(courses))
          .replace("?", JSON.stringify(classes))
          .replace("?", user.id);
        alert(`一共支付${this.total}元`);
        this.$http.post("/api/base/action", { sql: sql }).then(res => {});
        
      } else {
        this.$toast.show(`请勾选商品`);
      }
    },
    checkItem(index) {
      var item = this.shoplist[index];
      var checked = !item.checked;
      this.$set(item, "checked", checked);
      //  item.checked=checked
      //   this.shoplist[index]=item
    },
    checkAll() {
      var checked = !this.all;
      this.shoplist.forEach(item => {
        this.$set(item, "checked", checked);
      });
      this.all = checked;
    },
    delshop(index) {
      if (confirm("需要删除该商品吗?")) {
        // 购物车的数据
        let shopCartInfo = JSON.parse(this.$storage.get("shopCartInfo"));

        // 删除
        shopCartInfo.splice(index, 1);
        this.$storage.set("shopCartInfo", shopCartInfo);
        this.$store.commit("set_shopCartInfo", shopCartInfo);
      }
    },
    getCourse(item) {
      var sql = classes.getCourseClass.replace("?", item.name);
      this.courseId = item.id;
      this.$http.post("/api/base/action", { sql: sql }).then(res => {
        var data = res.data;
        data.forEach(cla => {
          cla.icon = "../../../static/img/cart.png";
          cla.price = item.price;
        });
        this.shoplist = data;
      });
    },
    
  },
  computed: {
    // shoplist() {

    //   return this.$store.state.shopCartInfo || mockList;
    // },
    total() {
      var money = 0;
      this.shoplist.forEach(item => {
        if (item.checked) {
          money += item.price;
        }
      });
      return money;
    }
  },
  created() {
    var item = this.$router.currentRoute.params.item;

    this.getCourse(item);
  },
  components: {
    "imooc-header": header,
    "imooc-citem": citem
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/main.scss";
// @import "@/public/stylesheets/util.scss";
@import "@/public/stylesheets/theme.scss";

.cart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  background-color: #fff;
}
.imooc-container {
  padding: 5rem 1.5rem;
  min-height: 100vh;
}
.checkbox-wrapper {
  .checkbox {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.1rem solid #ebebeb;
    transition: all 0.1s ease-in;
    &.checked {
      border-color: $main;
      border-width: 0.3rem;
    }
  }
}
.shop-item {
  margin-bottom: 1rem;
  .icon {
    width: 8rem;
  }
  .info {
    flex: 1;
  }
}
.footer {
  .checkbox-wrapper {
    padding-left: 1rem;
  }
  .money {
    flex: 1;
  }
  .buy-btn {
    width: 10rem;
    padding: 1.5rem;
    background-color: $main;
    text-align: center;
    color: #fff;
    transition: all 0.3s ease-in;
    &.disabled {
      background-color: #2b343b;
    }
  }
}
.no-shop {
  width: 20rem;
  text-align: center;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
