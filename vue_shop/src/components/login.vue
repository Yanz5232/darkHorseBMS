<template>
  <div id="login">
    <div class="login-box">
      <!-- 头像区 -->
      <div class="login-top">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      <!-- 登入表单区 -->
      <el-form
        ref="loginform"
        label-width="80px"
        :model="form"
        :rules="rules"
        class="form-login"
      >
        <el-form-item label="用户名：" prop="username"
          ><!-- prop="username绑定验证规则 -->
          <el-input
            prefix-icon="iconfont icon-xuesheng"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            prefix-icon="iconfont icon-shatan_beibao"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button @click="login" type="primary">登入</el-button>
          <el-button @click="reselt" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456',
      },
      //创建验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 5,
            max: 16,
            message: "长度在 5 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    reselt() {
      //清除表单验证提示信息
      this.$refs.loginform.resetFields();
      this.form.username == null;
      this.form.password == null;
    },
    login() {
                                     //表单校验通过的回调函数
      this.$refs.loginform.validate(async (boolean, object) => {
        if (boolean) {
          var { data:res } = await this.$http.post("login", this.form);
          if (res.meta.status != 200) {
            return  this.$message.error('登入失败')
          } else {
            //保存token
            window.sessionStorage.setItem('token',res.data.token)
            //通过编程试导航跳转页面
            this.$router.push('/home')
            return this.$message.success('登入成功')
          }
        } else {
          console.log(boolean);
        }
      });
    },
  },
};
</script>

<style  scoped>
#login {
  height: 100%;
  background: rgb(42, 75, 105);
}
.login-box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-top {
  height: 130px;
  width: 130px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px #eee solid;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  background: white;
}
.login-top img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #eee;
}
.margin-top {
  margin-top: 50px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.form-login {
  width: 100%;
  position: absolute;
  bottom: 0px;
  box-sizing: border-box;
  padding: 0px 20px;
}
</style>