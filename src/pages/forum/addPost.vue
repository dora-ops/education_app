<template>
  <div id='addPost'>
    <div><top v-bind:title="title" :back='back'></top></div>
    <div>
      <input class="title" type="text" v-model='post.editTitle' placeholder="请输入标题">
    </div>
    <div id='content'>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 15}"
        placeholder="请输入内容"
        class="content"
        v-model="post.content">
      </el-input>
    </div>
    <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div id='bottom' @click="submit">
      <p>提交</p>
    </div>
  </div>
</template>

<script>

import top from '@/components/top'

export default {
  name:'addPost',
  data () {
    return {
      title: '编辑',
      back: 1,
      post:{
        editTitle: '',
        content: '',
        name:this.$store.getters.user.name,
        dialogImageUrl: '',
        dateTime: ''
      },
      dialogVisible: false
    };
  },

  components: {top},

  computed: {},

  mounted: {},

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit(){

    }
  }
}

</script>
<style lang='scss' scoped>
  #addPost{
    background: white;
  }
  .title{
    padding-top: 19%;
    background:white;
    height: 40px;
    width: 95%;
    padding-left: 17px;
    font-size: 18px;
    border: none;
    color: #606266
  }
  #content {
    border-top:1px solid rgb(231, 228, 228);
    font-size: 18px;
  }
  #bottom{
    margin-top: 5%;
    background: white;
    text-align: center;
    border-top: 1px solid rgb(231, 228, 228);
    border-bottom: 1px solid rgb(231, 228, 228);
  }
</style>
<style>
  .el-textarea__inner{
    border-radius: 0;
    border: none;
    font-size: 18px;
    color: black;
  }
  textarea{
    border: none;
    font-size: 18px;
    color: black;
  }
</style>