<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 搜索和添加商品按钮区 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            @clear="getGoodsList"
            placeholder="请输入内容"
            v-model="goodsInfo.query"
            clearable
          >
            <el-button
              @click="getGoodsList"
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addgood" type="primary">添加商品</el-button>
        </el-col>
      </el-row>
      <!-- table表格区 -->
      <el-table :data="goodsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column
          label="商品价格(元)"
          prop="goods_price"
        ></el-table-column>
        <el-table-column label="商品重量" prop="goods_weight"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | dateFormat }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="editgood(scope.row)"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              @click="remgood(scope.row)"
              type="danger"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="goodsInfo.pagenum"
      :page-sizes="[10, 12, 13, 15]"
      :page-size="goodsInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 请求goods列表请求体 */
      goodsInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10,
      },
      /* 商品列表 */
      goodsList: [],
      /* 商品列表数据总数 */
      total: 0,
    }
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('goods', {
        params: this.goodsInfo,
      })
      if (res.meta.status == 200) {
        this.goodsList = res.data.goods
        this.total = res.data.total
      } else {
        this.$message.error('请求失败')
      }
    },
    /* 页码大小变动的函数 */
    handleSizeChange(newpagesize) {
      this.goodsInfo.pagesize = newpagesize
      this.getGoodsList()
    },
    /* 当前页变动的函数 */
    handleCurrentChange(newpagenum) {
      this.goodsInfo.pagenum = newpagenum
      this.getGoodsList()
    },
    /* 修改商品 */
    editgood() {},
    /* 删除商品 */
    remgood(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const { data: res } = await this.$http.delete('goods/' + row.goods_id)
          if (res.meta.status == 200) {
            this.getGoodsList()
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
          } else {
            this.$message({
              type: 'info',
              message: '已取消删除',
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
    /* 添加商品 */
    addgood(){
      this.$router.push('goods/add')
    }
  },
  created() {
    this.getGoodsList()
  },
}
</script>

<style scoped>
.el-pagination {
  margin-top: 15px;
}
.el-table {
  margin-top: 15px;
}
</style>