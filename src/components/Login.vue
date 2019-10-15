<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <div class="head">
        <img src="../assets/984894.jpg" alt />
      </div>
      <el-form-item autofocus label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('form')" type="primary">登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 24, message: '长度在 3 到 24 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 24, message: '长度在 3 到 24 个字符', trigger: 'change' }
        ]

      }
    }
  },
  methods: {
    async  submitForm (formName) {
      try {
        await this.$refs.form.validate()
        console.log(this.form)
        const res = await this.$axios.post('login', this.form)
        console.log(res)
        const { status, msg } = res.data.meta
        if (status === 200) {
          this.$message({
            type: 'success',
            message: '登陆成功',
            duration: 1000
          })
          this.$router.push({ name: 'index' })
        } else {
          this.$message({
            type: 'error',
            message: msg,
            duration: 1500
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
$bgColor: #2d434c;
.login {
  width: 100%;
  height: 100%;
  background: $bgColor;
  overflow: hidden;

  .el-form {
    width: 400px;
    padding: 75px 20px 20px;
    background: #fff;
    margin: 300px auto;
    border-radius: 20px;
    position: relative;
    .head {
      overflow: hidden;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 3px 8px #888888;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
      }
    }
  }
}
</style>
