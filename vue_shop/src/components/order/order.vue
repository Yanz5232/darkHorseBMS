<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图去 -->
    <el-card>
      <el-row>
        <el-col :span="8">
          <!-- 搜索输入框 -->
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 订单table区域 -->
      <el-table :data="orderList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="订单编号" prop="order_number"></el-table-column>
        <el-table-column label="订单价格" prop="order_price"></el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.pay_status == '1'" type="success"
              >已付款</el-tag
            >
            <el-tag v-else type="danger">未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"></el-table-column>
        <el-table-column label="下单时间">
          <template slot-scope="scope">
            {{ scope.row.create_time | dateFormat }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="editlocalhost"
            ></el-button>
            <el-button type="success" icon="el-icon-location" @click="showProgress"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10, 12, 13, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 修改地址对话框 -->
    <el-dialog
      title="修改地址"
      :visible.sync="editlocalhostdialog"
      width="30%"
      @close="localhostDiadogclose"
    >
      <!-- 内容区域 -->
      <el-form
        :model="editLocalhostForm"
        :rules="editLocalhostRules"
        ref="editLocalhostRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="省市区/县" prop="address1">
          <el-cascader
            :options="cityData"
            v-model="editLocalhostForm.address1"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="editLocalhostForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editlocalhostdialog = false">取 消</el-button>
        <el-button type="primary" @click="editlocalhostdialogOkBut"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 物流进度对话框 -->
    <el-dialog
      title="物流进度"
      :visible.sync="progressVisible"
      width="30%"
    >
      <!-- 内容区域 -->
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="progressVisible = false">取 消</el-button>
        <el-button type="primary" @click="progressVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import cityData from './citydata.js'
export default {
  data() {
    return {
      /* get参数请求体 */
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10,
      },
      /* 订单数据列表 */
      orderList: [],
      /* 订单总数 */
      total: 0,
      /* 控制修改地址对话框的显示和隐藏 */
      editlocalhostdialog: false,
      /* 修改表单的绑定值 */
      editLocalhostForm: {
        address1: [],
        address2: '',
      },
      /* 修改表单验证规则 */
      editLocalhostRules: {
        address1: [
          { required: true, message: '请选择省市区/县', trigger: 'blur' },
        ],
        address2: [
          { required: true, message: '请选择详细地址', trigger: 'blur' },
        ],
      },
      /* 省市区/县数据 */
      cityData,
      /* 控制物流进度对话框的显示和隐藏 */
      progressVisible:false,
      /* 物流状态数据 */
      progressInfo:[]
    }
  },
  methods: {
    /* 获取商品订单列表数据方法 */
    async getOrderList() {
      const { data: res } = await this.$http.get('orders', {
        params: this.queryInfo,
      })
      if (res.meta.status == 200) {
        this.orderList = res.data.goods
        this.total = res.data.total
      } else {
        this.$message.error('请求数据失败')
      }
    },
    /*  */
    handleSizeChange(newsize) {
      this.queryInfo.pagesize = newsize
      this.getOrderList()
    },
    /*  */
    handleCurrentChange(newnum) {
      this.queryInfo.pagenum = newnum
      this.getOrderList()
    },
    /* 修改按钮单击事件 */
    editlocalhost() {
      this.editlocalhostdialog = true
    },
    /* 修改地址表单关闭事件 */
    localhostDiadogclose() {
      this.$refs.editLocalhostRef.resetFields()
    },
    /* 修改地址对话框的确定事件 */
    editlocalhostdialogOkBut() {
      this.editlocalhostdialog = false
    },
    /* 物流进度按钮单击事件 */
    async showProgress(){                             
       const {data:res}=await this.$http.get('http://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text=804909574412544580')
      if (res.meta.status == 200) {
        this.progressInfo=res.data
        console.log(this.progressInfo); 
      } else {
        this.$message.error('请求数据失败')
      } 
      this.progressVisible=true
    },
  },
  created() {
    this.getOrderList()
  },
}
</script>

<style  scoped>
.el-table {
  margin-top: 15px;
}
</style>