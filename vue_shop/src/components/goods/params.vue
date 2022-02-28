<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card>
      <!-- 警告只能选中三级菜单 -->
      <el-alert
        show-icon
        title="注意：只允许第三季分类设置相关参数!"
        type="warning"
        :closable="false"
        ><i></i
      ></el-alert>
      <!-- 选择分类商品id -->
      <el-row>
        <el-col>
          <span>选择商品分类:</span>
          <!-- 级联选择器 -->
          <el-cascader
            v-model="CateValue"
            :options="cateList"
            @change="handleChange"
            :props="caseProps"
            clearable
          ></el-cascader>
        </el-col>
      </el-row>
      <!-- tabs标签 -->
      <el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- 动态参数 -->
          <el-tab-pane label="动态参数" name="many">
            <el-button
              type="primary"
              :disabled="isdisabled"
              @click="addparameter"
              >添加参数</el-button
            >
            <!-- 动态参数表格 -->
            <el-table :data="cateid" border stripe>
              <el-table-column type="expand">
                <template slot-scope="scope">
                  <el-tag
                    v-for="(item, i) in scope.row.attr_vals"
                    :key="i"
                    closable
                    @close='handleClose(i,scope.row)'
                    >{{ item }}</el-tag
                  >
                  <el-input
                    class="input-new-tag"
                    v-if="scope.row.boolean"
                    v-model="scope.row.value"
                    ref="saveTagInput"
                    size="small"
                    @blur="handleInputConfirm(scope.row)"
                    @keyup.enter.native="handleInputConfirmEnter(scope.row)"
                  >
                  </el-input>
                  <el-button
                    v-else
                    class="button-new-tag"
                    @click="showInput(scope.row)"
                    >+ New Tag</el-button>
                </template>
              </el-table-column>
              <el-table-column type="index" label="#"></el-table-column>
              <el-table-column
                label="参数名称"
                prop="attr_name"
              ></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    @click="showeditdadog(scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    @click="remparameterok(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <!-- 静态属性 -->
          <el-tab-pane label="静态属性" name="only">
            <el-button
              type="primary"
              :disabled="isdisabled"
              @click="addattribute"
              >添加属性</el-button
            >
            <!-- 静态属性表格 -->
            <el-table :data="cateid" border stripe>
              <el-table-column type="expand">
                <template slot-scope="scope">
                  <el-tag
                    v-for="(item, i) in scope.row.attr_vals"
                    :key="i"
                    closable
                    @close='handleClose(i,scope.row)'
                    >{{ item }}</el-tag
                  >
                  <el-input
                    class="input-new-tag"
                    v-if="scope.row.boolean"
                    v-model="scope.row.value"
                    ref="saveTagInput"
                    size="small"
                    @blur="handleInputConfirm(scope.row)"
                    @keyup.enter.native="handleInputConfirmEnter(scope.row)"
                  >
                  </el-input>
                  <el-button
                    v-else
                    class="button-new-tag"
                    @click="showInput(scope.row)"
                    >+ New Tag</el-button>
                </template>
              </el-table-column>
              <el-table-column type="index" label="#"></el-table-column>
              <el-table-column
                label="属性名称"
                prop="attr_name"
              ></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    @click="showeditdadog(scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    @click="remparameterok(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-card>
    <!-- 添加动态参数对话框 -->
    <el-dialog
      title="添加动态参数"
      @close="hideaddparameter"
      :visible.sync="showaddparameter"
      width="30%"
    >
      <!-- 内容区域 -->
      <el-form
        :model="addparameterForm"
        :rules="parameterFormRules"
        ref="addparameterRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="动态参数：" prop="attr_name">
          <el-input v-model="addparameterForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="showaddparameter = false">取 消</el-button>
        <el-button type="primary" @click="addparameterok">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加静态属性对话框 -->
    <el-dialog
      title="添加静态属性"
      @close="hideaddattribute"
      :visible.sync="showaddattribute"
      width="30%"
    >
      <!-- 内容区域 -->
      <el-form
        :model="addattributeForm"
        :rules="attributFormRules"
        ref="addattributeRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="静态属性：" prop="attr_name">
          <el-input v-model="addattributeForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="showaddattribute = false">取 消</el-button>
        <el-button type="primary" @click="addattributeok">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改动态参数静态属性对话框 -->
    <el-dialog
      :title="'修改' + isparameter"
      :visible.sync="showeditparameter"
      width="30%"
      @close="hideparameterattributdiadog"
    >
      <!-- 内容区域 -->
      <el-form
        :model="editparameterForm"
        :rules="parameterFormRules"
        ref="editattributeRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item :label="isparameter + ':'" prop="attr_name">
          <el-input v-model="editparameterForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="showeditparameter = false">取 消</el-button>
        <el-button type="primary" @click="editparameterok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 商品分类列表数据 */
      cateList: [],
      /* 双向绑定的分类id */
      CateValue: [],
      /* 级联选择器的显示规则 */
      caseProps: {
        label: 'cat_name',
        value: 'cat_id',
        children: 'children',
      },
      /* 被激活页签的名称 */
      activeName: 'many',
      /* 商品参数属性数据 */
      cateid: [],
      /* 控制添加动态参数对话框 */
      showaddparameter: false,
      /* 添加动态参数form表单值 */
      addparameterForm: {
        attr_name: '',
        attr_sel: 'many',
      },
      /* 添加动态参数form表单验证规则 */
      parameterFormRules: {
        attr_name: [
          { required: true, message: '请输入动态参数名称', trigger: 'blur' },
        ],
      },
      /* 添加静态属性form表单验证规则 */
      attributFormRules: {
        attr_name: [
          { required: true, message: '请输入静态参数名称', trigger: 'blur' },
        ],
      },
      /* 添加静态属性form表单值 */
      addattributeForm: {
        attr_name: '',
        attr_sel: 'only',
      },
      /* 控制添加静态属性对话框 */
      showaddattribute: false,
      /* 添加静态属性form表单验证规则 */
      attributeFormRules: {
        attr_name: [
          { required: true, message: '请输入动态参数名称', trigger: 'blur' },
        ],
      },
      /* 控制修改动态参数对话框 */
      showeditparameter: false,
      /* 修改动态参数表单绑定的值 */
      editparameterForm: {},
    }
  },
  methods: {
    /* 获取商品分类方法 */
    async getcateList() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status == 200) {
        this.cateList = res.data
      } else {
        this.$message.error('获取商品分类数据失败')
      }
    },
    /* 级联选择器change事件 */
    async handleChange() {
      if (this.CateValue.length < 3) {
        this.CateValue = []
        this.cateid=[]
      } else {
        /* 级联选择器选中就马上获取对应商品参数 */
        this.getattributeparameterList()
      }
    },
    /* 获取选中商品的参数 */
    async getattributeparameterList() {
      const { data: res } = await this.$http.get(
        'categories/' + this.CateValue[2] + '/attributes',
        { params: { sel: this.activeName } }
      )
      if (res.meta.status == 200) {
        res.data.forEach((item) => {
          item.attr_vals = item.attr_vals ? item.attr_vals.split(' ') : []
          /* 自己绑定每行数据的+New Tag按钮 */
          item.boolean=false
           /* 自己绑定每行数据的+New Tag按钮的input的值 */
          item.value=''
        })
        this.cateid = res.data
      } else {
        this.$message.error('获取商品数据失败')
      }
    },
    /* tabs页签被点击触发的方法 */
    async handleClick() {
      const { data: res } = await this.$http.get(
        'categories/' + this.CateValue[2] + '/attributes',
        { params: { sel: this.activeName } }
      )
      if (res.meta.status == 200) {
        this.cateid = res.data
      } else {
        this.$message.error('获取商品数据失败')
      }
    },
    /* 添加动态参数按钮单击方法 */
    addparameter() {
      this.showaddparameter = true
    },
    /* 添加静态属性按钮单击方法 */
    addattribute() {
      this.showaddattribute = true
    },
    /* 关闭添加动态参数属性方法 */
    hideaddparameter() {
      this.$refs.addparameterRef.resetFields()
    },
    /* 关闭添加静态属性方法 */
    hideaddattribute() {
      this.$refs.addattributeRef.resetFields()
    },
    /* 添加动态参数对话框确定按钮 */
    async addparameterok() {
      this.$refs.addparameterRef.validate(async (Boolean) => {
        if (Boolean) {
          const { data: res } = await this.$http.post(
            'categories/' + this.CateValue[2] + '/attributes',
            this.addparameterForm
          )
          if (res.meta.status == 201) {
            this.$message.success('添加动态参数成功')
            this.getattributeparameterList()
            this.showaddparameter = false
          } else {
            this.$message.error('添加动态参数失败')
          }
        } else {
          this.$message.error('添加失败')
        }
      })
    },
    /* 添加静态属性对话框确定按钮 */
    addattributeok() {
      this.$refs.addattributeRef.validate(async (Boolean) => {
        if (Boolean) {
          const { data: res } = await this.$http.post(
            'categories/' + this.CateValue[2] + '/attributes',
            this.addattributeForm
          )
          if (res.meta.status == 201) {
            this.$message.success('添加静态属性成功')
            this.getattributeparameterList()
            this.showaddattribute = false
          } else {
            this.$message.error('添加静态属性失败')
          }
        } else {
          this.$message.error('添加失败')
        }
      })
    },
    /* 单击修改按钮触发的事件 */
    async showeditdadog(row) {
      const { data: res } = await this.$http.get(
        'categories/' + row.cat_id + '/attributes/' + row.attr_id,
        { params: { attr_sel: this.activeName } }
      )
      if (res.meta.status == 200) {
        this.editparameterForm = res.data
        this.showeditparameter = true
      } else {
        this.$message.error('动态参数获取失败失败')
      }
    },
    /* 修改动态参数静态属性对话框确定按钮  */
    editparameterok() {
      this.$refs.editattributeRef.validate(async (boolean) => {
        if (boolean) {
          const { data: res } = await this.$http.put(
            'categories/' +
              this.CateValue[2] +
              '/attributes/' +
              this.editparameterForm.attr_id,
            {
              attr_name: this.editparameterForm.attr_name,
              attr_sel: this.activeName,
            }
          )
          if (res.meta.status == 200) {
            this.getattributeparameterList()
            this.$message.success('修改参数成功')
            this.showeditparameter = false
          } else {
            this.$message.error('修改参数失败')
          }
        } else {
          this.$message.error('修改参数失败')
        }
      })
    },
    /* 删除动态参数静态属性对话框确定按钮  */
    async remparameterok(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            'categories/' + this.CateValue[2] + '/attributes/' + row.attr_id
          )
          if (res.meta.status == 200) {
            this.getattributeparameterList()
            this.$message.success('删除参数成功')
            this.showeditparameter = false
          } else {
            this.$message.error('删除参数失败')
          }
        })
        .catch(() => {
          this.$message.success('取消成功')
        })
    },
    /* 修改动态参数静态属性对话框被关闭的函数 */
    hideparameterattributdiadog() {
      this.$refs.editattributeRef.clearValidate()
    },
    /* 切换+New Tag显示 */
    showInput(row){
      row.boolean=true
      /* 让文本框自动获得焦点 */
      /* nextTick函数 就是当页面上元素被重新渲染完比之后，才会回调的函数 */
      this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    /* 离开input显示 +New Tag*/
    handleInputConfirm(row){
      row.value=''
      row.boolean=false
    },
    /* 离开input或按下回车键显示 +New Tag*/
    async handleInputConfirmEnter(row){
      if(row.value.trim().lenght==0){
        row.value=''
        row.boolean=false
      }else{
        row.attr_vals.push(row.value.trim())
        /* const{data:res}= await this.$http.put('categories/'+this.CateValue[2] + '/attributes/' + row.attr_id,
        {attr_name:row.attr_name,attr_sel:row.attr_sel,attr_vals:row.attr_vals.join(' ')}
        )
        if (res.meta.status == 200) {
            this.$message.success('添加成功')
        } else {
            this.$message.error('添加失败')
        } */
        this.saveAttrVlas(row)
        row.value=''
        row.boolean=false
      }
    },
    /* 将attr_vals的操作保存到数据库 */
    async saveAttrVlas(row){
     const{data:res}= await this.$http.put('categories/'+this.CateValue[2] + '/attributes/' + row.attr_id,
        {attr_name:row.attr_name,attr_sel:row.attr_sel,attr_vals:row.attr_vals.join(' ')}
        )
        if (res.meta.status == 200) {
            this.$message.success('添加成功')
        } else {
            this.$message.error('添加失败')
        }
    },
    /* 删除tag标签 */
    handleClose(i,row){
     row.attr_vals.splice(i,1)
      this.saveAttrVlas(row)
    }
  },
  created() {
    this.getcateList()
  },
  computed: {
    /* 控制添加参数 添加属性按钮是否能点击 */
    isdisabled() {
      if (this.CateValue.length < 3) {
        return true
      } else {
        return false
      }
    },
    /* 判断是打开静态属性对话框还是动态参数对话框 */
    isparameter() {
      if (this.activeName == 'many') {
        return '动态参数'
      } else {
        return '静态属性'
      }
    },
  },
}
</script>

<style scoped>
.el-row {
  margin-top: 15px;
}
.el-cascader {
  margin-left: 5px;
}
.el-table {
  margin-top: 15px;
}
.el-tag {
  margin: 0px 10px;
}
.el-input{
  width: 150px;
}
</style>