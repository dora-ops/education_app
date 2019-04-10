<template>
  <div id=changePhoto>
    <top :title='title' :back='back'></top>
    <el-upload
        class="avatar-uploader content"
        :action='uploadUrl()'
        :show-file-list="ture"
        :on-error='uploadError()'
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
  </div>
</template>

<script>

import top from '@/components/top'
import { customers,resource} from "../../../sqlMap.js";
export default {
  name: 'changePhoto',
  data () {
    return {
      title:'头像修改',
      back:1,
      imageUrl: ''
    };
  },

  components: {top},

  computed: {},

  mounted: {},
  created(){
    var user = this.$store.getters.user;
    var sql=customers.getUserInfo.replace('?',user.id)
    this.$http.post("/api/base/action", { sql: sql }).then(res => {
        user=res.data[0]
        sql=resource.getResource.replace('?', user.photo)
        this.$http.post("/api/base/action", { sql: sql }).then(res => {
           var r= res.data[0]
           this.imageUrl='http://localhost:3000/'+r.fileName
        })
    })
  },

  methods: {
    uploadUrl() {
      var url = 'http://localhost:3000/api/base/upload' // 生产环境和开发环境的判断
      return url
    },
    uploadError() {
    //   this.$message.error('上传失败，请重新上传')
      // this.showNoticeUploading = false
    },
    handleAvatarSuccess(res, file) {
        var user = this.$store.getters.user;
        var id=res[0];
        var sql=customers.updateUserPhoto.replace('?',id).replace('?',user.id)
         this.$http.post("/api/base/action", { sql: sql }).then(res => {})
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    // beforeAvatarUpload(file) {
    //     const isJPG = file.type === 'image/jpeg';
    //     const isPNG = file.type === 'image/png';
    //     const isLt2M = file.size / 1024 / 1024 < 2;

    //     if (!isJPG&&!isPNG) {
    //       this.$message.error('上传头像图片只能是 JPG 格式或 PNG格式!');
    //     }
    //     if (!isLt2M) {
    //       this.$message.error('上传头像图片大小不能超过 2MB!');
    //     }

    //     if(isJPG && isLt2M == true){
    //       console.log(file);

    //       //将文件转化为formdata数据上传
    //       let fd = new FormData()
    //       fd.append('file', file)
    //       console.log(fd)
       
    //     // post上传图片

    //        let that = this
         
    //         new Promise(function (resolve, reject) {
    //             that.axios.post('/file/imgUpload', fd, 
    //                   {
    //                   headers: {
    //                   'Content-Type': 'multipart/form-data'
    //                   }
    //                 }).then((response) => {
    //                    that.imgId = response.data.data
    //                     resolve(that.imgId);
    //                 }).catch((error) =>{
    //                     this.$message.error('头像上传失败，请重新上传!');
    //                 })
    //                }).then(function (id){
    //                that.axios.get('/file/view/'+id)
    //                 .then((response) => {
    //                      that.imageUrl = response.request.responseURL;
    //                  })
    //           })         
    //     }
    //     return isJPG && isLt2M;
    // }
  }
}

</script>
<style lang='scss' scoped>
  #changePhoto .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  #changePhoto .content{
      text-align: center;
      margin-top: 30%;
  }

</style>
<style>
  #changePhoto .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  #changePhoto .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  #changePhoto .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
</style>