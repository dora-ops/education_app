<template>
  <div class="citem imooc-flex" :class="{'istop': course.istop}">
    <!-- <div class="icon" :style="{width: width, height: height}">
      <img :src="course.icon">
    </div> -->
    <div class="info imooc-flex imooc-flex-column imooc-flex-around border-bottom">
      <h2 class="title hide-text-2">{{ course.name }}</h2>
      <div class="timeColor hide-text-2">{{ course.startDate }}-{{course.endDate}}</div>
      <div class="teacher hide-text-2">{{ course.teacher }}</div>
      
      <div class="people cr-basic fz-small" v-if="course.type">{{ course.type }}{{course.level}} &#8901; {{ course.teacher }}在教</div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default() {
        return {
          name: "",
          intro: "",
          level: "",
          teacher: "",
          price: ""
        };
      }
    },
    width: {
      default() {
        return "auto";
      }
    },
    height: {
      default() {
        return "auto";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$active: #ebebeb;
// 列表公共样式（实战推荐、新上好课）
.citem {
  
  &:active {
    background-color: $active;
  }
  margin: 0;
  .icon {
    margin-right: 1rem;
    img {
      height: 100%;
    }
  }
  .info {
    flex: 1;
    .title {
      padding: 0;
      margin: 0;
    }
    .timeColor{
      color:  #bfbfbf;
    }
    .teacher{
      margin-bottom: 10px;
    }
  }
  // 置顶样式
  &.istop {
    position: relative;
    padding: 1rem;
    color: #fff;
    line-height: 1.7;
    a {
      color: #fff;
    }
    .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .people {
      color: #fff;
    }
    .money {
      color: #fff;
    }
  }
}
</style>
