<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avator-box">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user1"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            prefix-icon="iconfont icon-lock3"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 登陆表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456",
      },
      // 登陆表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置表单数据
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login(){
      this.$refs.loginFormRef.validate(async (valid)=>{
        if(!valid) return
        // 验证通过发起请求
        const {data:res} = await this.$http.post("login",this.loginForm)
        console.log(res)
        // if(res.meta.status!="200") return this.$message.error('用户名或密码错误')
        // this.$message.success('登陆成功')
        // // 登录成功后的token保存到sessionStorage中，让token在会话期间生效
        // window.sessionStorage.setItem('token',res.data.token)
        // 使用编程式导航跳转到主页
        this.$router.push('/home')
      })
    }
  },
};
</script>
<style lang="less" scoped>
.login-container {
  position: relative;
  background: #2b4b6b;
  height: 100%;
  .login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 390px;
    background: #fff;
    border-radius: 3px;
    .avator-box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 0 10px #ddd;
      padding: 10px;
      background: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .login-form {
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>