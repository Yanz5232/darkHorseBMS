(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users_rights_roles"],{"057f":function(e,t,r){var n=r("fc6a"),a=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):a(n(e))}},"0858":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.RightsList,border:!0}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限等级"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.level?r("el-tag",[e._v("一级")]):1==t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},a=[],o=r("1da1"),i=(r("96cf"),{data:function(){return{RightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list",{type:Array});case 2:r=t.sent,n=r.data,200==n.meta.status?e.RightsList=n.data:e.$message.error("获取权限列表数据失败");case 5:case"end":return t.stop()}}),t)})))()}}}),s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,"58f3d843",null);t["default"]=c.exports},"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("785a"),i=r("17c2"),s=r("9112"),l=function(e){if(e&&e.forEach!==i)try{s(e,"forEach",i)}catch(t){e.forEach=i}};for(var c in a)a[c]&&l(n[c]&&n[c].prototype);l(o)},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"1c1e":function(e,t,r){"use strict";r("3a59")},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,l,"next",e)}function l(e){n(i,a,o,s,l,"throw",e)}s(void 0)}))}}},3024:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"}},[e._v("添加角色")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roleList,border:!0}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(n,a){return r("el-row",{key:n.id,class:["borBottom",0==a?"borderTop":"","ycenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{on:{close:function(r){return e.open(t.row,n.id)}}},[e._v(e._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(n.children,(function(n,a){return r("el-row",{key:n.id,class:[0!=a?"borderTop":"","ycenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",plain:"",closable:""},on:{close:function(r){return e.open(t.row,n.id)}}},[e._v(e._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(n.children,(function(n,a){return r("el-tag",{key:n.id,attrs:{closable:"",type:"warning",plain:""},on:{close:function(r){return e.open(t.row,n.id)}}},[e._v(e._s(n.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"}},[e._v("删除")]),r("el-button",{attrs:{type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.assignPermissions(t.row)}}},[e._v("分配权限")])]}}])})],1),r("el-dialog",{attrs:{title:"分配权限对话框",visible:e.showassignPermissions,width:"30%"},on:{"update:visible":function(t){e.showassignPermissions=t}}},[r("el-tree",{ref:"treeRef",attrs:{"node-key":"id","default-checked-keys":e.defKeys,"default-expand-all":!0,data:e.assignList,props:e.defaultProps,"show-checkbox":""},on:{"node-click":e.handleNodeClick}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showassignPermissions=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getListKeys()}}},[e._v("确 定")])],1)],1)],1)],1)},a=[];function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){if(Array.isArray(e))return o(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function l(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||s(e)||l(e)||c()}var f=r("1da1"),d=(r("159b"),r("99af"),r("a15b"),r("96cf"),{data:function(){return{roleList:[],showassignPermissions:!1,assignList:[],defaultProps:{children:"children",label:"authName"},defKeys:[105],rolesid:null}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:r=t.sent,n=r.data,200==n.meta.status?e.roleList=n.data:e.$message.error("角色权限列表数据获取失败");case 5:case"end":return t.stop()}}),t)})))()},open:function(e,t){var r=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=n.sent,"confirm"!=a){n.next=9;break}return n.next=6,r.$http.delete("roles/"+e.id+"/rights/"+t);case 6:o=n.sent,i=o.data,200==i.meta.status?(e.children=i.data,r.$message({type:"success",message:"删除成功!"})):r.$message({type:"error",message:"删除失败!"});case 9:case"end":return n.stop()}}),n)})))()},assignPermissions:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.rolesid=e.id,r.next=3,t.$http.get("rights/tree");case 3:n=r.sent,a=n.data,200==a.meta.status?t.assignList=a.data:t.$message({type:"error",message:"获取数据失败!"}),t.defKeys=[],t.getLeafKeys(e,t.defKeys),t.showassignPermissions=!t.showassignPermissions;case 9:case"end":return r.stop()}}),r)})))()},handleNodeClick:function(){},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.getLeafKeys(e,t)}))},getListKeys:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),n=r.join(","),t.next=4,e.$http.post("roles/"+e.rolesid+"/rights",{rids:n});case 4:a=t.sent,o=a.data,200==o.meta.status?(e.$message.success("修改角色权限成功"),e.getRolesList()):e.$message.error("修改角色权限失败"),e.showassignPermissions=!1;case 8:case"end":return t.stop()}}),t)})))()}}}),p=d,m=(r("1c1e"),r("2877")),h=Object(m["a"])(p,n,a,!1,null,"751be5ae",null);t["default"]=h.exports},"3a59":function(e,t,r){},"428f":function(e,t,r){var n=r("da84");e.exports=n},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),s=r("68ee"),l=r("07fa"),c=r("8418"),u=r("9a1f"),f=r("35a1");e.exports=function(e){var t=a(e),r=s(this),d=arguments.length,p=d>1?arguments[1]:void 0,m=void 0!==p;m&&(p=n(p,d>2?arguments[2]:void 0,2));var h,g,b,v,y,w,x=f(t),_=0;if(!x||this==Array&&i(x))for(h=l(t),g=r?new this(h):Array(h);h>_;_++)w=m?p(t[_],_):t[_],c(g,_,w);else for(v=u(t,x),y=v.next,g=r?new this:[];!(b=y.call(v)).done;_++)w=m?o(v,p,[b.value,_],!0):b.value,c(g,_,w);return g.length=_,g}},5895:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.UserInfo.query,callback:function(t){e.$set(e.UserInfo,"query",t)},expression:"UserInfo.query"}},[r("el-button",{staticClass:"a",attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1)]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加用户")])],1)])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.UserList,border:!0}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"180"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话号号码"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色",width:"180"}}),r("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.userstatechange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.displayUsers(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.open(t.row.id)}}}),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分配角色",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.addrole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.UserInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.UserInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){return e.adduser(1)}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.addform,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addform.username,callback:function(t){e.$set(e.addform,"username",t)},expression:"addform.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addform.password,callback:function(t){e.$set(e.addform,"password",t)},expression:"addform.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addform.email,callback:function(t){e.$set(e.addform,"email",t)},expression:"addform.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addform.mobile,callback:function(t){e.$set(e.addform,"mobile",t)},expression:"addform.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.adduser(1)}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.adduser(2)}}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户信息",visible:e.deitDialogVisible,width:"30%"},on:{"update:visible":function(t){e.deitDialogVisible=t},close:function(t){return e.hidedisplayuser(1)}}},[r("el-form",{ref:"editformRef",staticClass:"demo-ruleForm",attrs:{model:e.editform,rules:e.editformRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editform.username,callback:function(t){e.$set(e.editform,"username",t)},expression:"editform.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editform.email,callback:function(t){e.$set(e.editform,"email",t)},expression:"editform.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"mobile"}},[r("el-input",{model:{value:e.editform.mobile,callback:function(t){e.$set(e.editform,"mobile",t)},expression:"editform.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.hidedisplayuser(1)}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.hidedisplayuser(2)}}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.showaddrole,width:"30%"},on:{"update:visible":function(t){e.showaddrole=t},close:e.hiderole}},[r("p",[e._v("当前用户："+e._s(e.roleinfo.username))]),r("p",[e._v("当前角色："+e._s(e.roleinfo.role_name))]),r("span",[e._v("分配角色")]),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectrole,callback:function(t){e.selectrole=t},expression:"selectrole"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showaddrole=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saverole}},[e._v("确 定")])],1)],1)],1)},a=[],o=r("1da1"),i=(r("96cf"),{data:function(){var e=function(e,t,r){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(n.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var n=/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(n.test(t))return r();r(new Error("请输入正确的手机号"))};return{UserInfo:{query:"",pagenum:1,pagesize:2},addform:{username:null,password:null,email:null,mobile:null},editform:{id:null,username:null,password:null,email:null,mobile:null},UserList:null,total:null,value:!0,dialogVisible:!1,deitDialogVisible:!1,rules:{username:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,max:15,message:"长度在 3 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机",trigger:"blur"},{validator:t,trigger:"blur"}]},editformRules:{email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机",trigger:"blur"},{validator:t,trigger:"blur"}]},showaddrole:!1,roleinfo:{},roleList:[],selectrole:null}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.UserInfo});case 2:r=t.sent,n=r.data,300==n.meta.status?e.$message.error("users列表数据获取失败"):(e.UserList=n.data.users,e.total=n.data.total);case 5:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.UserInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.UserInfo.pagenum=e,this.getUserList()},userstatechange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/"+e.id+"/state/"+e.mg_state);case 2:n=r.sent,a=n.data,200==a.meta.status?t.$message.success("用户状态修改成功！"):t.$message.error("用户状态修改失败！");case 5:case"end":return r.stop()}}),r)})))()},adduser:function(e){var t=this;2==e?this.$refs.ruleForm.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return e.next=3,t.$http.post("users",t.addform);case 3:n=e.sent,a=n.data,201==a.meta.status?(t.$message.success("用户添加成功"),t.getUserList()):t.$message.error("用户添加失败"),t.dialogVisible=!1,e.next=10;break;case 9:t.$message.error("请输入正确的用户信息");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(this.dialogVisible=!1,this.addform.username=null,this.addform.password=null,this.addform.email=null,this.addform.mobile=null,this.$refs.ruleForm.resetFields())},displayUsers:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:n=r.sent,a=n.data,200==a.meta.status?(t.editform=a.data,t.deitDialogVisible=!0):t.$message.error("修改用户的信息获取失败失败！");case 5:case"end":return r.stop()}}),r)})))()},hidedisplayuser:function(e){var t=this;2==e?this.$refs.editformRef.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}return e.next=3,t.$http.put("users/"+t.editform.id,{email:t.editform.email,mobile:t.editform.mobile});case 3:if(n=e.sent,a=n.data,200!=a.meta.status){e.next=10;break}t.$message.success("用户修改成功"),t.getUserList(),e.next=12;break;case 10:return t.$message.error("用户修改失败"),e.abrupt("return");case 12:t.deitDialogVisible=!1;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(this.$refs.editformRef.clearValidate(),this.deitDialogVisible=!1)},open:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("users/"+e,{id:e});case 2:n=r.sent,a=n.data,200==a.meta.status?(t.getUserList(),t.$message({type:"success",message:"删除成功!"})):t.$message({type:"error",message:"删除失败!"});case 5:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},addrole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleinfo=e,r.next=3,t.$http.get("roles");case 3:n=r.sent,a=n.data,200==a.meta.status?t.roleList=a.data:t.$message.error("角色列表获取失败"),t.showaddrole=!0;case 7:case"end":return r.stop()}}),r)})))()},saverole:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.selectrole){t.next=9;break}return t.next=3,e.$http.put("users/"+e.roleinfo.id+"/role",{rid:e.selectrole});case 3:r=t.sent,n=r.data,200==n.meta.status?(e.getUserList(),e.$message.success("更新角色成功")):e.$message.error("更新角色失败"),e.showaddrole=!1,t.next=10;break;case 9:e.$message.error("请选择要绑定的角色");case 10:case"end":return t.stop()}}),t)})))()},hiderole:function(){this.selectrole=null}}}),s=i,l=(r("772f"),r("2877")),c=Object(l["a"])(s,n,a,!1,null,"08d2529a",null);t["default"]=c.exports},"746f":function(e,t,r){var n=r("428f"),a=r("1a2d"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});a(t,e)||i(t,e,{value:o.f(e)})}},"772f":function(e,t,r){"use strict";r("c0a3")},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),i=new R(n||[]);return o._invoke=$(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",m="completed",h={};function g(){}function b(){}function v(){}var y={};l(y,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(E([])));x&&x!==r&&n.call(x,o)&&(y=x);var _=v.prototype=g.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,o,i,s){var l=u(e[a],e,o);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var a;function o(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function $(e,t,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return P()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?m:d,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function E(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return b.prototype=v,l(_,"constructor",v),l(v,"constructor",b),b.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},k(L.prototype),l(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new L(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(_),l(_,s,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:E(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){a(e,"throw",i)}}},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),i=r("a640"),s=[].join,l=a!=Object,c=i("join",",");n({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a4d3:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),i=r("c430"),s=r("83ab"),l=r("4930"),c=r("d039"),u=r("1a2d"),f=r("e8b5"),d=r("1626"),p=r("861d"),m=r("d9b5"),h=r("825a"),g=r("7b0b"),b=r("fc6a"),v=r("a04b"),y=r("577e"),w=r("5c6c"),x=r("7c73"),_=r("df75"),k=r("241c"),L=r("057f"),$=r("7418"),O=r("06cf"),j=r("9bf2"),S=r("d1e7"),R=r("6eeb"),E=r("5692"),P=r("f772"),C=r("d012"),U=r("90e3"),A=r("b622"),N=r("e538"),I=r("746f"),T=r("d44e"),F=r("69f3"),V=r("b727").forEach,z=P("hidden"),K="Symbol",q="prototype",D=A("toPrimitive"),G=F.set,B=F.getterFor(K),J=Object[q],Z=a.Symbol,M=o("JSON","stringify"),Y=O.f,H=j.f,Q=L.f,W=S.f,X=E("symbols"),ee=E("op-symbols"),te=E("string-to-symbol-registry"),re=E("symbol-to-string-registry"),ne=E("wks"),ae=a.QObject,oe=!ae||!ae[q]||!ae[q].findChild,ie=s&&c((function(){return 7!=x(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Y(J,t);n&&delete J[t],H(e,t,r),n&&e!==J&&H(J,t,n)}:H,se=function(e,t){var r=X[e]=x(Z[q]);return G(r,{type:K,tag:e,description:t}),s||(r.description=t),r},le=function(e,t,r){e===J&&le(ee,t,r),h(e);var n=v(t);return h(r),u(X,n)?(r.enumerable?(u(e,z)&&e[z][n]&&(e[z][n]=!1),r=x(r,{enumerable:w(0,!1)})):(u(e,z)||H(e,z,w(1,{})),e[z][n]=!0),ie(e,n,r)):H(e,n,r)},ce=function(e,t){h(e);var r=b(t),n=_(r).concat(me(r));return V(n,(function(t){s&&!fe.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?x(e):ce(x(e),t)},fe=function(e){var t=v(e),r=W.call(this,t);return!(this===J&&u(X,t)&&!u(ee,t))&&(!(r||!u(this,t)||!u(X,t)||u(this,z)&&this[z][t])||r)},de=function(e,t){var r=b(e),n=v(t);if(r!==J||!u(X,n)||u(ee,n)){var a=Y(r,n);return!a||!u(X,n)||u(r,z)&&r[z][n]||(a.enumerable=!0),a}},pe=function(e){var t=Q(b(e)),r=[];return V(t,(function(e){u(X,e)||u(C,e)||r.push(e)})),r},me=function(e){var t=e===J,r=Q(t?ee:b(e)),n=[];return V(r,(function(e){!u(X,e)||t&&!u(J,e)||n.push(X[e])})),n};if(l||(Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,t=U(e),r=function(e){this===J&&r.call(ee,e),u(this,z)&&u(this[z],t)&&(this[z][t]=!1),ie(this,t,w(1,e))};return s&&oe&&ie(J,t,{configurable:!0,set:r}),se(t,e)},R(Z[q],"toString",(function(){return B(this).tag})),R(Z,"withoutSetter",(function(e){return se(U(e),e)})),S.f=fe,j.f=le,O.f=de,k.f=L.f=pe,$.f=me,N.f=function(e){return se(A(e),e)},s&&(H(Z[q],"description",{configurable:!0,get:function(){return B(this).description}}),i||R(J,"propertyIsEnumerable",fe,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),V(_(ne),(function(e){I(e)})),n({target:K,stat:!0,forced:!l},{for:function(e){var t=y(e);if(u(te,t))return te[t];var r=Z(t);return te[t]=r,re[r]=t,r},keyFor:function(e){if(!m(e))throw TypeError(e+" is not a symbol");if(u(re,e))return re[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!s},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:de}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:pe,getOwnPropertySymbols:me}),n({target:"Object",stat:!0,forced:c((function(){$.f(1)}))},{getOwnPropertySymbols:function(e){return $.f(g(e))}}),M){var he=!l||c((function(){var e=Z();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))}));n({target:"JSON",stat:!0,forced:he},{stringify:function(e,t,r){var n,a=[e],o=1;while(arguments.length>o)a.push(arguments[o++]);if(n=t,(p(t)||void 0!==e)&&!m(e))return f(t)||(t=function(e,t){if(d(n)&&(t=n.call(this,e,t)),!m(t))return t}),a[1]=t,M.apply(null,a)}})}if(!Z[q][D]){var ge=Z[q].valueOf;R(Z[q],D,(function(){return ge.apply(this,arguments)}))}T(Z,K),C[z]=!0},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("5e77").EXISTS,o=r("9bf2").f,i=Function.prototype,s=i.toString,l=/^\s*function ([^ (]*)/,c="name";n&&!a&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},c0a3:function(e,t,r){},d28b:function(e,t,r){var n=r("746f");n("iterator")},e01a:function(e,t,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("1a2d"),s=r("1626"),l=r("861d"),c=r("9bf2").f,u=r("e893"),f=o.Symbol;if(a&&s(f)&&(!("description"in f.prototype)||void 0!==f().description)){var d={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new f(e):void 0===e?f():f(e);return""===e&&(d[t]=!0),t};u(p,f);var m=p.prototype=f.prototype;m.constructor=p;var h=m.toString,g="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=h.call(e);if(i(d,e))return"";var r=g?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},e538:function(e,t,r){var n=r("b622");t.f=n},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("e8b5"),o=r("68ee"),i=r("861d"),s=r("23cb"),l=r("07fa"),c=r("fc6a"),u=r("8418"),f=r("b622"),d=r("1dde"),p=d("slice"),m=f("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var r,n,f,d=c(this),p=l(d),b=s(e,p),v=s(void 0===t?p:t,p);if(a(d)&&(r=d.constructor,o(r)&&(r===Array||a(r.prototype))?r=void 0:i(r)&&(r=r[m],null===r&&(r=void 0)),r===Array||void 0===r))return h.call(d,b,v);for(n=new(void 0===r?Array:r)(g(v-b,0)),f=0;b<v;b++,f++)b in d&&u(n,f,d[b]);return n.length=f,n}})}}]);
//# sourceMappingURL=users_rights_roles.da3ee8a0.js.map