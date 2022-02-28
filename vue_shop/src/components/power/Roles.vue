<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/welcome' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- table -->
      <el-table :data="roleList" style="width: 100%" :border="true">
        <!-- 展开列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['borBottom', index == 0 ? 'borderTop' : '', 'ycenter']"
              v-for="(item, index) in scope.row.children"
              :key="item.id"
            >
              <!-- 一级权限 -->
              <el-col :span="5">
                <el-tag @close="open(scope.row, item.id)">{{
                  item.authName
                }}</el-tag
                ><i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级权限  -->
              <el-col :span="19">
                <el-row
                  :class="[index2 != 0 ? 'borderTop' : '', 'ycenter']"
                  v-for="(item2, index2) in item.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      @close="open(scope.row, item2.id)"
                      type="success"
                      plain
                      closable
                      >{{ item2.authName }}</el-tag
                    ><i class="el-icon-caret-right"></i>
                  </el-col>
                  <!-- 三级权限 -->
                  <el-col :span="18">
                    <el-tag
                      @close="open(scope.row, item3.id)"
                      closable
                      v-for="(item3, index3) in item2.children"
                      :key="item3.id"
                      type="warning"
                      plain
                      >{{ item3.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              @click="assignPermissions(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分配权限对话框 -->
      <el-dialog
        title="分配权限对话框"
        :visible.sync="showassignPermissions"
        width="30%"
      >
        <!-- 树形控件 -->
        <el-tree
          node-key="id"
          :default-checked-keys="defKeys"
          :default-expand-all="true"
          :data="assignList"
          :props="defaultProps"
          show-checkbox
          @node-click="handleNodeClick"
          ref='treeRef'
        ></el-tree>
        <!-- 底部 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="showassignPermissions = false">取 消</el-button>
          <el-button type="primary" @click="getListKeys()"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleList: [],
      /* 控制权限对话框的显示 */
      showassignPermissions: false,
      /* 权限全部数据 */
      assignList: [],
      defaultProps: {
        children: 'children', //按什么往下分
        label: 'authName', //下一层的名字
      },
      /* 默认被选中的控件id值 */
      defKeys: [105],
      /* 当前分配角色的id */
      rolesid:null
    }
  },
  created() {
    this.getRolesList()
  },
  methods: {
    /* 获取角色列表数据 */
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status == 200) {
        this.roleList = res.data
      } else {
        this.$message.error('角色权限列表数据获取失败')
      }
    },
    /* 根据id删除对应权限 */
    async open(id1, id2) {
      const boolean = await this.$confirm(
        '此操作将永久删除该权限, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).catch((err) => err)
      if (boolean == 'confirm') {
        const { data: res } = await this.$http.delete(
          'roles/' + id1.id + '/rights/' + id2
        )
        if (res.meta.status == 200) {
          id1.children = res.data
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
      }
    },
    /* 分配权限方法 */
    async assignPermissions(row) {
      this.rolesid=row.id
      const { data: res } = await this.$http.get('rights/tree')
      if (res.meta.status == 200) {
        this.assignList = res.data
      } else {
        this.$message({
          type: 'error',
          message: '获取数据失败!',
        })
      }
      this.defKeys=[]
      this.getLeafKeys(row, this.defKeys)
      this.showassignPermissions = !this.showassignPermissions
    },
    /*  */
    handleNodeClick() {
      console.log(11);
    },
    /* 通过递归，获取角色下所有三级权限的id */
    getLeafKeys(node, arr) {
      if (node.children) {
        node.children.forEach((item) => {
          this.getLeafKeys(item, arr)
        })
      } else {
        return arr.push(node.id)
      }
    },
    async getListKeys(){
      const Keys=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()]
      /* 把字符串转换成以逗号拼接的字符 */
      const idStr=Keys.join(',')
      const {data:res}= await this.$http.post('roles/'+ this.rolesid+'/rights',{rids:idStr})
      if(res.meta.status==200){
         this.$message.success('修改角色权限成功')
         this.getRolesList()
      }else{
        this.$message.error('修改角色权限失败')
      }
      this.showassignPermissions= false
    }
  },
}
</script>


<style  scoped>
.el-tag {
  margin-left: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.borderTop {
  border-top: 1px solid rgb(211, 211, 211);
}
.borBottom {
  border-bottom: 1px solid rgb(211, 211, 211);
}
.ycenter {
  display: flex;
  align-items: center;
}
</style>