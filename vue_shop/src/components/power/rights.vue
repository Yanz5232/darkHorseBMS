<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图 -->
    <el-card>
      <!-- table区域 -->
      <el-table :data="RightsList" style="width: 100%" :border="true">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="authName" label="权限等级" >
        </el-table-column>
        <el-table-column prop="path" label="路径" >
        </el-table-column>
        <el-table-column  label="权限等级" >
           <template slot-scope="scope">
                  <el-tag v-if="scope.row.level==0">一级</el-tag>
                  <el-tag v-else-if="scope.row.level==1" type="success">二级</el-tag>
                  <el-tag v-else type="warning">三级</el-tag>
           </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
          RightsList:[]
    }
  },
  created() {
    this.getRightsList()
  },
  methods:{
    async getRightsList(){
      const{data:res} =await this.$http.get('rights/list',{type:Array})
      if(res.meta.status==200){
         this.RightsList=res.data
      }else{
        this.$message.error('获取权限列表数据失败')
      }
      
      
    }
  }
}
</script>

<style scoped>
</style>