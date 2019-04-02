<template>
  <div>
    <div><top v-bind:title="title"></top></div>
    <img id='add' @click="addPost" src="../../../static/img/icon/add.png"/>
    <div><Bottom v-bind:switchValue="switchValue"></Bottom></div>
  </div>
</template>

<script>

import top from '@/components/top'
import Bottom from '@/components/bottom'

export default {
  name: 'forum',
  data () {
    return {
      title:'论坛',
      switchValue:3,
      posts:[],
    };
  },

  components: {top,Bottom},

  computed: {},

  mounted: {},

  methods: {
    addPost(){
      this.$router.push({name:'addPost'})
    }
  }
}

</script>
<style lang='scss' scoped>
  #add{
    position: absolute;
    z-index: 1000;
    width: 28px;
    left: 83%;
    top: 3%;
  }
</style>