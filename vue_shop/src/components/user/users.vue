<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <!-- 第一列 -->
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <!-- 输入框 -->
            <el-input
              placeholder="请输入内容"
              clearable
              @clear="getUserList"
              v-model="UserInfo.query"
              class="input-with-select"
            >
              <!-- 所搜按钮 -->
              <el-button
                class="a"
                slot="append"
                icon="el-icon-search"
                @click="getUserList"
              ></el-button>
            </el-input>
          </div>
        </el-col>
        <!-- 第二列 -->
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button @click="dialogVisible = true" type="primary"
              >添加用户</el-button
            >
          </div>
        </el-col>
      </el-row>
      <!-- table区域 -->
      <el-table :data="UserList" style="width: 100%" :border="true">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="电话号号码"> </el-table-column>
        <el-table-column prop="role_name" label="角色" width="180">
        </el-table-column>
        <el-table-column prop="" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="userstatechange(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="displayUsers(scope.row.id)"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              type="danger"
              @click="open(scope.row.id)"
              icon="el-icon-delete"
            ></el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色"
              placement="top-start"
              :enterable="false"
            >
              <el-button
                @click="addrole(scope.row)"
                type="warning"
                icon="el-icon-setting"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="UserInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="UserInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%"
      @close="adduser(1)"
    >
      <!-- 内容区 -->
      <el-form
        :model="addform"
        ref="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addform.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addform.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addform.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addform.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!--  底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduser(1)">取 消</el-button>
        <el-button type="primary" @click="adduser(2)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户信息对话框 -->
    <el-dialog
      title="修改用户信息"
      :visible.sync="deitDialogVisible"
      width="30%"
      @close="hidedisplayuser(1)"
    >
      <!-- 内容区 -->
      <el-form
        :model="editform"
        :rules="editformRules"
        ref="editformRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名">
          <el-input disabled v-model="editform.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editform.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="mobile">
          <el-input v-model="editform.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!--  底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="hidedisplayuser(1)">取 消</el-button>
        <el-button type="primary" @click="hidedisplayuser(2)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 给用户添加角色对话框 -->
    <el-dialog title="添加角色" :visible.sync="showaddrole" width="30%" @close="hiderole">
      <!-- 内容区域 -->
      <p>当前用户：{{ roleinfo.username }}</p>
      <p>当前角色：{{ roleinfo.role_name }}</p>
      <!-- 选择器 -->
      <span>分配角色</span
      ><el-select v-model="selectrole" placeholder="请选择">
        <el-option
          v-for="item in roleList"
          :key="item.id"
          :label="item.roleName"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="showaddrole = false">取 消</el-button>
        <el-button type="primary" @click="saverole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    /* 自定义验证邮箱规则 */
    var checkEmail = (rule, value, cd) => {
      /* 验证邮箱正则表达式 */
      const regemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (regemail.test(value)) {
        /* 合法邮箱 */
        return cd()
      }
      cd(new Error('请输入合法的邮箱'))
    }
    /* 自定义验证手机号规则 */
    var checkMobile = (rule, value, cd) => {
      /* 验证手机号正则表达式 */
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        /* 合法邮箱 */
        return cd()
      }
      cd(new Error('请输入正确的手机号'))
    }
    return {
      UserInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2,
      },
      //添加的用户数据
      addform: {
        username: null,
        password: null,
        email: null,
        mobile: null,
      },
      //修改的用户数据
      editform: {
        id: null,
        username: null,
        password: null,
        email: null,
        mobile: null,
      },
      /* 用户列表 */
      UserList: null,
      /* 用户总人数 */
      total: null,
      value: true,
      /* 控制添加列表对话框 */
      dialogVisible: false,
      /* 控制x修改列表对话框 */
      deitDialogVisible: false,
      /* 表单校验规则 */
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' },
        ],
        mobile: [
          { required: true, message: '请输入用户手机', trigger: 'blur' },
          {
            validator: checkMobile,
            trigger: 'blur',
          },
        ],
      },
      editformRules: {
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' },
        ],
        mobile: [
          { required: true, message: '请输入用户手机', trigger: 'blur' },
          {
            validator: checkMobile,
            trigger: 'blur',
          },
        ],
      },
      /* 控制给用户添加角色对话框 */
      showaddrole: false,
      /* 需要被分配角色的数据 */
      roleinfo: {},
      /* 角色列表数据 */
      roleList: [],
      /* seelect组件双向绑定的数据 */
      selectrole: null,
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    //获取用户数据列表方法
    async getUserList() {
      var { data: res } = await this.$http.get('users', {
        params: this.UserInfo,
      })
      if (res.meta.status == 300) {
        this.$message.error('users列表数据获取失败')
      } else {
        this.UserList = res.data.users
        this.total = res.data.total
      }
    },
    handleSizeChange(newpagesize) {
      this.UserInfo.pagesize = newpagesize
      this.getUserList()
    },
    handleCurrentChange(newpagenum) {
      this.UserInfo.pagenum = newpagenum
      this.getUserList()
    },
    /* 修改用户状态方法 */
    async userstatechange(object) {
      console.log(object)
      var { data: res } = await this.$http.put(
        'users/' + object.id + '/state/' + object.mg_state
      )
      console.log(res)
      if (res.meta.status == 200) {
        this.$message.success('用户状态修改成功！')
      } else {
        this.$message.error('用户状态修改失败！')
      }
    },
    /* 添加用户方法 */
    adduser(n) {
      if (n == 2) {
        this.$refs.ruleForm.validate(async (boolen) => {
          if (boolen) {
            const { data: res } = await this.$http.post('users', this.addform)
            console.log(res)
            if (res.meta.status == 201) {
              this.$message.success('用户添加成功')
              this.getUserList()
            } else {
              this.$message.error('用户添加失败')
            }
            this.dialogVisible = false
          } else {
            this.$message.error('请输入正确的用户信息')
          }
        })
      } else {
        this.dialogVisible = false
        this.addform.username = null
        this.addform.password = null
        this.addform.email = null
        this.addform.mobile = null
        this.$refs.ruleForm.resetFields()
      }
    },
    /* 修改用户方法 */
    async displayUsers(id) {
      const { data: res } = await this.$http.get('users/' + id)
      if (res.meta.status == 200) {
        this.editform = res.data
        this.deitDialogVisible = true
      } else {
        this.$message.error('修改用户的信息获取失败失败！')
      }
    },
    hidedisplayuser(n) {
      if (n == 2) {
        this.$refs.editformRef.validate(async (boolen) => {
          if (boolen) {
            const { data: res } = await this.$http.put(
              'users/' + this.editform.id,
              { email: this.editform.email, mobile: this.editform.mobile }
            )
            if (res.meta.status == 200) {
              this.$message.success('用户修改成功')
              this.getUserList()
            } else {
              this.$message.error('用户修改失败')
              return
            }
            this.deitDialogVisible = false
          }
        })
      } else {
        this.$refs.editformRef.clearValidate()
        this.deitDialogVisible = false
      }
    },
    /* 是否删除用户方法 */
    open(id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const { data: res } = await this.$http.delete('users/' + id, {
            id: id,
          })
          if (res.meta.status == 200) {
            this.getUserList()
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!',
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    /* 给用户分配角色方法 */
    async addrole(row) {
      this.roleinfo = row
      /* 展示对话框之前获取角色列表 */
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status == 200) {
        this.roleList = res.data
      } else {
        this.$message.error('角色列表获取失败')
      }
      this.showaddrole = true
    },
    /* 更新用户角色方法 */
    async saverole() {
      if (this.selectrole) {
        const { data: res } = await this.$http.put(
          'users/' + this.roleinfo.id + '/role',{rid:this.selectrole}
        )
        if (res.meta.status == 200) {
          this.getUserList()
          this.$message.success('更新角色成功')
        } else {
          this.$message.error('更新角色失败')
        }
        this.showaddrole = false
      } else {
        this.$message.error('请选择要绑定的角色')
      }
    },
    /* 关闭对话框重置select组件的默认选中值 */
    hiderole(){
      this.selectrole=null
    }
  },
}
</script>

<style scoped>
.el-input__inner {
  width: 40%;
}
.el-pagination {
  margin-top: 15px;
}
.el-table {
  margin-top: 15px;
}
</style>