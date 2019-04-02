<template>
  <div ref="register" id='register'>
    <img class="logo" src="../../../static/img/login/logo.png"/>
    <div class='content'>
      <el-form status-icon :rules="rules" ref='registerForm' label-position="right" label-width="110px" :model="registerForm">
        <el-form-item label="姓名" prop='name'>
          <el-input size="medium" v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input size="medium" v-model="registerForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input size="medium" type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input size="medium" type="password" v-model="registerForm.password2"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: center;">
      <el-button @click="addCustomer('registerForm')" type="primary" >立即注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    var checkTel = (rule, value, callback) => {
      setTimeout(() => {
        if (!(/^1[34578]\d{9}$/.test(value))) {
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback();
        }
      }, 1000);
    };
    var checkPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm:{
        name: '',
        tel: '',
        password: '',
        password2: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: checkPass, trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    addCustomer(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/api/costomers/addCustomer', {
            name: this.registerForm.name,
            tel: this.registerForm.tel, 
            password: this.registerForm.password
          }).then((res) => {
            if(!res.data){
              this.$message({
                showClose: true,
                message: '注册成功',
                type: 'success'
              });
              this.$router.push({name:'login'})
            }else{
              this.$message({
                showClose: true,
                message: res.data,
                type: 'warning'
              });
            }
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
  .logo {
    width: 100%;
  }
  .content{
    margin-top: 15%;
    text-align: center;
    margin-bottom: 15%;
  }
  
  .el-input{
    width: 75%;
    margin-left: -50px;
  }
  .el-form-item__label{
    font-size: 16px;
  }
  .el-form-item__content{
    margin-left: 50px;
  }
</style>
<style>
  #register .el-form-item__error{
    left: 7px;
  }
</style>