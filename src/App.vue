<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class='child-view'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    // '$route' (to, from) {
    //   if (to.path == '/') {
    //     this.transitionName = 'slide-right';
    //   } else {
    //     this.transitionName = 'slide-left';
    //   }
    // }
  }
}
</script>

<style lang="scss">
@import "@/public/stylesheets/main.scss";
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; */
    height: 100%;
  }
  .child-view {
    background: rgb(247,247,247);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(.55, 0, .1, 1);
  }
 .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(60px, 0);
    transform: translate(60px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-60px, 0);
    transform: translate(-60px, 0);
  }
</style>
