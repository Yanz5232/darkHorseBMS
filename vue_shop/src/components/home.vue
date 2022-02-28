<template>
  <el-container class="box">
    <!--  页面头部 -->
    <el-header class="head">
      <img src="../assets/images/heima.png" alt="" />
      <h1 class="title">电商后台管理系统</h1>
      <el-button class="head-button" @click="outlogin" type="warning"
        >退出</el-button
      >
    </el-header>
    <!--   页面主题 -->
    <el-container>
      <!--    页面左边 -->
      <el-aside class="left" :width="iscollapse ? '64px' :'200px'">
        <div class="toggle-button" @click="collect">| | |</div>
        <!--    页面左边菜单区 -->
        <el-menu
          :default-active="DefaultActive"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#f09EFF"
          :unique-opened='true'
          :collapse="iscollapse"
          :collapse-transition='false'
          :router="true"
        >
        <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="(item,index) in MenuList" :key="item.id">
           <!--  一级菜单模板区 -->
            <template slot="title">
              <i :class="icons[index]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item @click="active(items.path)" class="el-icon-menu" v-for="items in item.children" :index="'/home/'+items.path" :key="items.id" > {{items.authName}}</el-menu-item>

          </el-submenu>

        </el-menu>

      </el-aside>
      <!--   页面右边 -->
      <el-main class="min">
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created(){
    this.getmenulist()
    this.DefaultActive=window.sessionStorage.getItem('active')
  },
  computed:{
  },
  data(){
     return{
        MenuList:null,
        iscollapse:false,
        DefaultActive:'',
        icons:['el-icon-user-solid','el-icon-s-goods','el-icon-s-help','el-icon-s-help','el-icon-s-opportunity']
     }
  },
  methods: {
    //退出登入
    outlogin() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    //获取菜单栏数据
    async getmenulist(){
     var {data:res}= await this.$http.get('menus')
     if(res.meta.status!==200) return this.$message.error('菜单获取失败')
     this.MenuList=res.data
    },
    //折叠菜单栏
    collect(){
      this.iscollapse=!this.iscollapse
    },
    active(path){
      window.sessionStorage.setItem('active','/home/'+path)
       this.DefaultActive='/home/'+path
    }
  },
}
</script>

<style  scoped>
.toggle-button{
  background: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color:white;
  text-align: center;
  cursor: pointer;
}
.el-menu{
  border: transparent;
}
a{
  text-decoration: none;
  color:white;
}
.box {
  height: 100%;
}
.head {
  background: rgb(54, 61, 64);
}
.left {
  background: rgb(49, 55, 67);
}
.min {
  background: rgb(233, 237, 240);
}
.title {
  display: inline-block;
  vertical-align: middle;
  color: white;
  margin-left: 10px;
  font-weight: 300;
}
.head img {
  vertical-align: middle;
}
.head-button {
  vertical-align: middle;
  position: absolute;
  right: 30px;
  top: 8px;
}
</style>