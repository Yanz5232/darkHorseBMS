<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航 -->
    <el-card>
      <!-- 警告区域 -->
      <el-alert
        :closable="false"
        title="添加商品信息"
        type="info"
        center
        show-icon
      >
      </el-alert>
      <!-- 步骤条 -->
      <el-steps
        :space="200"
        :active="activeStep - 0"
        align-center
        finish-status="success"
      >
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- 表单 -->
      <el-form
        :model="addForm"
        label-position="top"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 左边tabs列表 -->
        <el-tabs
          v-model="activeStep"
          :tab-position="'left'"
          style="height: 100%"
          :before-leave="beforeleave"
          @tab-click="tabclick"
        >
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price" type="number">
              <el-input v-model="addForm.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight" type="number">
              <el-input v-model="addForm.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number" type="number">
              <el-input v-model="addForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
              <!-- 级联选择器 -->
              <el-cascader
                v-model="addForm.goods_cat"
                :options="CateList"
                :props="CateListCascader"
                @change="handleChange"
                expand-trigger="hover"
              ></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <el-form-item
              :label="item.attr_name"
              v-for="item in manyTableDate"
              :key="item.attr_id"
            >
              <!-- 复选框组 -->
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox
                  border
                  :label="cd"
                  v-for="(cd, i) in item.attr_vals"
                  :key="i"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">
            <el-form-item
              :label="item.attr_name"
              v-for="item in onlyTableDate"
              :key="item.attr_id"
            >
              <el-input v-model="item.attr_vals"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              class="upload-demo"
              action="http://127.0.0.1:8888/api/private/v1/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
              :headers="headerObj"
              :on-success="handleSuccess"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <!-- 富文本编辑器组件 -->
            <quill-editor v-model="addForm.goods_introduce"> </quill-editor>
            <!-- 添加商品按钮 -->
            <el-button class="addbut" type="primary" @click="addbut"
              >添加商品</el-button
            >
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    <!-- 图片预览对话框 -->
    <el-dialog title="图片预览" :visible.sync="previewVisible" width="50%">
      <img :src="previewPath" alt="" class="previewimg" />
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      /* 商品分类数据 */
      CateList: [],
      /* 控制当前在哪个步骤 */
      activeStep: '0',
      /* 添加表单数据 */
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        goods_cat: [],
        pics: [],
        goods_introduce: '',
        attrs: [],
      },
      /* 动态参数列表 */
      manyTableDate: [],
      /* 静态属性列表 */
      onlyTableDate: [],
      /* 添加表单验证规则 */
      addFormRules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' },
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
        ],
        goods_cat: [
          { required: true, message: '请选择商品分类', trigger: 'blur' },
        ],
      },
      /* 级联选择器规则 */
      CateListCascader: {
        label: 'cat_name',
        children: 'children',
        value: 'cat_id',
      },
      /* 上传图片请求头 */
      headerObj: {
        Authorization: window.sessionStorage.getItem('token'),
      },
      /* 预览图片路径 */
      previewPath: '',
      /* 控制图片预览对话框 */
      previewVisible: false,
    }
  },
  methods: {
    /* 获取商品分类列表 */
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status == 200) {
        this.CateList = res.data
        console.log(this.CateList)
      } else {
        this.$message.error('请求数据失败')
      }
    },
    /* 级联选择器change事件 */
    handleChange() {
      if (this.addForm.goods_cat.length < 3) {
        this.addForm.goods_cat = []
      }
    },
    /* 切换标签页触发的函数 */
    beforeleave(newactive, oldactive) {
      if (this.addForm.goods_cat.length != 3 && this.activeStep == '0') {
        this.$message.error('请选择商品分类')
        return false
      }
    },
    /* tab标签页被点击的事件 */
    async tabclick() {
      if (this.activeStep == '1') {
        const { data: res } = await this.$http.get(
          'categories/' + this.addForm.goods_cat[2] + '/attributes',
          { params: { sel: 'many' } }
        )
        if (res.meta.status == 200) {
          res.data.forEach((item) => {
            item.attr_vals =
              item.attr_vals.length === 0 ? [] : item.attr_vals.split(' ')
          })
          this.manyTableDate = res.data
          return
        } else {
          this.$message.error('请求数据失败')
          return
        }
      }
      if (this.activeStep == '2') {
        const { data: res } = await this.$http.get(
          'categories/' + this.addForm.goods_cat[2] + '/attributes',
          { params: { sel: 'only' } }
        )
        if (res.meta.status == 200) {
          this.onlyTableDate = res.data
        } else {
          this.$message.error('请求数据失败')
        }
      }
    },
    /* 预览图片函数 */
    handlePreview(file) {
      this.previewPath = file.response.data.url
      this.previewVisible = true
    },
    /* 单击图片右上角的叉号触发的函数 */
    handleRemove(file) {
      const filePath = file.response.data.tmp_path
      const i = this.addForm.pics.findIndex((x) => {
        x.pic === filePath
      })
      this.addForm.pics.splice(i, 1)
      console.log(this.addForm.pics)
    },
    /* 图片上传成功调用的函数 */
    handleSuccess(response) {
      const picInfo = { pic: response.data.tmp_path }
      this.addForm.pics.push(picInfo)
    },
    /* 添加商品按钮点击事件 */
    addbut() {
      this.$refs.addFormRef.validate(async (Boolean) => {
        if (Boolean) {
          /* 深拷贝 */
          const form = _.cloneDeep(this.addForm)
          form.goods_cat = form.goods_cat.join(',')
          this.manyTableDate.forEach((item) => {
            const newInfo = {
              attr_id: item.attr_id,
              attr_value: item.attr_vals,
            }
            this.addForm.attrs.push(newInfo)
          })
          this.onlyTableDate.forEach((item) => {
            const newInfo = {
              attr_id: item.attr_id,
              attr_value: item.attr_vals,
            }
            this.addForm.attrs.push(newInfo)
          })
          form.attrs = this.addForm.attrs
          const { data: res } = await this.$http.post('goods', form)
          if (res.meta.status == 201) {
            this.$message.success('添加商品成功')
            this.$router.push('/home/goods')
          } else {
            this.$message.error('添加商品失败')
          }
        } else {
          this.$message.error('请填写表单必填项')
        }
      })
    },
  },
  created() {
    this.getCateList()
  },
}
</script>

<style  scoped>
.el-steps {
  margin-top: 15px;
  margin-left: 220px;
}
.el-step__title {
  font-size: 15px;
}
.el-checkbox {
  margin: 0 8px 0 0 !important;
}
.previewimg {
  width: 100%;
}
.addbut {
  margin-top: 15px;
}
</style>