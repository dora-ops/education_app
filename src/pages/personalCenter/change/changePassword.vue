<template>
  <div id='changePassword'>
    <top :title='title' :back='back'></top>
    <div class='context'>
      <el-form :model="customer" :rules="rules" ref="ruleForm" label-width="110px">
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="customer.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" prop="checkPass">
          <el-input type="password" v-model="customer.checkPass"></el-input>
        </el-form-item>
      </el-form>
      <el-button id="saveBtn" @click="saveBtn('ruleForm')" type="primary" round>确认修改</el-button>
    </div>
  </div>
</template>

<script>

import top from '@/components/top'

export default {
  name: 'changePassword',
  data () {
      var checkPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.customer.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      back: 1,
      title: '密码修改',
      customer:{
        password: '',
        id: this.$store.getters.user.id,
        checkPass: '',
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: checkPass, trigger: 'blur' }
        ]
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
          this.$http.put('/api/costomers/changePassword', {
            customer:this.customer
          }).then((res) => {
            this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              });
            this.$store.commit("updateUserPassword",this.customer.password)
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
  #changePassword .el-form-item__error{
    left: 35px;
  }
</style>