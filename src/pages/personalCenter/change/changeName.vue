<template>
  <div id='changeName'>
    <top :title='title' :back='back'></top>
    <div class='context'>
      <el-form :model="customer" :rules="rules" ref="ruleForm" label-width="90px">
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="customer.name"></el-input>
        </el-form-item>
      </el-form>
      <el-button id="saveBtn" @click="saveBtn('ruleForm')" type="primary" round>确认修改</el-button>
    </div>
  </div>
</template>

<script>

import top from '@/components/top'

export default {
  name: 'changeName',
  data () {
    return {
      back: 1,
      title: '名字修改',
      customer:{
        name: '',
        id: this.$store.getters.user.id,
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
      }
    };
  },

  components: {top},

  computed: {},

  mounted: {},

  methods: {
    saveBtn(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.put('/api/costomers/changeName', {
            customer:this.customer
          }).then((res) => {
            this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              });
            this.$store.commit("updateUserName",this.customer.name)
            history.back(-1);
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}

</script>
<style lang='scss' scoped>
  .context{
    margin-top: 30%;
    text-align: center;
  }
  .el-input{
    width: 75%;
    // margin-left: -50px;
  }
  .el-form-item__label{
    font-size: 16px;
  }
  .el-form-item__content{
    margin-left: 50px;
  }
  #saveBtn{
    margin-top: 10%;
  }
</style>
<style>
  #changeName .el-form-item__error{
    left: 35px;
  }
</style>