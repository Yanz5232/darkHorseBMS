<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 添加按钮 -->
      <el-row>
        <el-col>
          <el-button @click="showcatedialog" type="primary">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格区 -->
      <tree-table
        :data="cateList"
        border
        :selection-type="false"
        :show-index="true"
        :columns="columns"
        class="tree-table"
      >
        <!-- 是否有效列模板 -->
        <template slot="isOk" slot-scope="scope">
          <i
            v-if="scope.row.cat_deleted == false"
            class="el-icon-success"
            style="color: green"
          ></i>
          <i v-else style="color: red" class="el-icon-error"></i>
        </template>
        <!-- 排序列模板 -->
        <template slot="order" slot-scope="scope">
          <el-tag v-if="scope.row.cat_level == 0">一级</el-tag>
          <el-tag v-else-if="scope.row.cat_level == 1" type="success"
            >二级</el-tag
          >
          <el-tag v-else-if="scope.row.cat_level == 2" type="warning"
            >三级</el-tag
          >
        </template>
        <!-- 操作列 -->
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
        </template>
      </tree-table>
      <!-- 分页区 -->
      <el-row>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[5, 7, 8, 10]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-row>
    </el-card>
    <!-- 添加分类对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="isshowcatedialog"
      width="30%"
      @close="hidedialog"
    >
      <!-- 内容区域 -->
      <el-form
        ref="addFateFormRef"
        :rules="addFateFormRules"
        :model="addFateForm"
        label-width="100px"
      >
        <el-form-item label="分类名称：" prop="cat_name">
          <el-input v-model="addFateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类：">
          <!-- 级联选择器 -->
          <el-cascader
            v-model="addCateValue"
            :options="ParentCateList"
            @change="handleChange"
            :props="caseProps"
            collapse-tags
            clearable
            change-on-select
          ></el-cascader>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addcate">取 消</el-button>
        <el-button type="primary" @click="addcate">确 定</el-button>
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
      /* 查询商品分类列表条件数据 */
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      total: 0,
      /* tree-table */
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          /* 表示将当前列定义为模板列 */
          type: 'template',
          /* 表是当前这一列使用的摸吧名称 */
          template: 'isOk',
        },
        {
          label: '排序',
          /* 表示将当前列定义为模板列 */
          type: 'template',
          /* 表是当前这一列使用的摸吧名称 */
          template: 'order',
        },
        {
          label: '操作',
          /* 表示将当前列定义为模板列 */
          type: 'template',
          /* 表是当前这一列使用的摸吧名称 */
          template: 'opt',
        },
      ],
      /* 控制添加分类对话框 */
      isshowcatedialog: false,
      /* 添加分类的数据对象 */
      addFateForm: {
        /* 要添加分类的名称 */
        cat_name: '',
        /* 父级分类id */
        cat_pid: 0,
        /* 分类的等级，默认要添加的是一级分类 */
        cat_level: 0,
      },
      /* 父级分类列表数据 */
      ParentCateList: [],
      /* 添加分类商品校验规则 */
      addFateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名', trigger: 'blur' },
        ],
      },
      /* 双向绑定要添加的父类id */
      addCateValue: [],
      /* 级联选择器展示列表数据的规则 */
      caseProps: {
        label: 'cat_name',
        value: 'cat_id',
        children: 'children',
      },
    }
  },
  methods: {
    async getcateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.queryInfo,
      })
      if (res.meta.status == 200) {
        this.cateList = res.data.result
        this.total = res.data.total
      } else {
        this.$message.error('获取商品分类数据失败')
      }
    },
    /* 每页几条发生变动的方法 */
    handleSizeChange(newsize) {
      this.queryInfo.pagesize = newsize
      this.getcateList()
    },
    /* 页码之发生变动的方法 */
    handleCurrentChange(newnum) {
      this.queryInfo.pagenum = newnum
      this.getcateList()
    },
    /* 显示添加分类对话框方法 */
    showcatedialog() {
      this.getParentCateList()
      this.isshowcatedialog = true
    },
    /* 获取父级分类列表 */
    async getParentCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: {
          type: 2,
        },
      })
      if (res.meta.status == 200) {
        this.ParentCateList = res.data
      } else {
        this.$message.error('获取商品分类数据失败')
      }
    },
    /* 级联选择器发生别化时触发的方法 */
    handleChange() {
      if (this.addCateValue.length > 0) {
        this.addFateForm.cat_pid =
          this.addCateValue[this.addCateValue.length - 1]
        /* 为当前分类的等级赋值 */
        this.addFateForm.cat_level = this.addCateValue.length
      } else {
        this.addFateForm.cat_pid = 0
        /* 为当前分类的等级赋值 */
        this.addFateForm.cat_level = 0
      }
    },
    /* 添加表单 */
    addcate() {
      this.$refs.addFateFormRef.validate(async (Boolean) => {
        if (Boolean) {
          const { data: res } = await this.$http.post(
            'categories',
            this.addFateForm
          )
          if (res.meta.status == 201) {
            this.$message.success('添加分类成功！')
            this.getcateList()
            this.isshowcatedialog = false
          } else {
            this.$message.error('添加分类失败！')
          }
        } else {
          this.$message.error('表单验证不通过')
        }
      })
    },
    /* 添加分类对话框关闭触发的事件 */
    hidedialog() {
      this.$refs.addFateFormRef.resetFields()
      this.addCateValue = null
      this.addFateForm.cat_level = 0
      this.addFateForm.cat_pid = 0
    },
    
  },
  created() {
    this.getcateList()
  },
}
</script>

<style  scoped>
.tree-table {
  margin-top: 15px;
}
</style>