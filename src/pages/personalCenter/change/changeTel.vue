<template>
  <div id='changeTel'>
    <top :title='title' :back='back'></top>
    <div class='context'>
      <el-form :model="customer" :rules="rules" ref="ruleForm" label-width="110px">
        <el-form-item label="联系方式:" prop="tel">
          <el-input v-model="customer.tel"></el-input>
        </el-form-item>
      </el-form>
      <el-button id="saveBtn" @click="saveBtn('ruleForm')" type="primary" round>确认修改</el-button>
    </div>
  </div>
</template>

<script>

import top from '@/components/top'

export default {
  name: 'changeTel',
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
    return {
      back: 1,
      title: '电话修改',
      customer:{
        tel: '',
        id: this.$store.getters.user.id,
      },
      rules: {
        tel: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
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
          this.$http.put('/api/costomers/changeTel', {
            customer:this.customer
          }).then((res) => {
            if(!res.data){
              this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              });
              this.$store.commit("updateUserTel",this.customer.tel)
              history.back(-1);
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
  #changeTel .el-form-item__error{
    left: 35px;
  }
</style>