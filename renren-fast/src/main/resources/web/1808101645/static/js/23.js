webpackJsonp([23],{YbVU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("oZaA"),i=n("E4LH"),a={data:function(){return{dynamicMenuRoutes:[]}},components:{SubMenu:s.default},computed:{sidebarLayoutSkin:{get:function(){return this.$store.state.common.sidebarLayoutSkin}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold}},menuList:{get:function(){return this.$store.state.common.menuList},set:function(t){this.$store.commit("common/updateMenuList",t)}},menuActiveName:{get:function(){return this.$store.state.common.menuActiveName},set:function(t){this.$store.commit("common/updateMenuActiveName",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(t){this.$store.commit("common/updateMainTabsActiveName",t)}}},watch:{$route:"routeHandle"},created:function(){this.menuList=JSON.parse(sessionStorage.getItem("menuList")||"[]"),this.dynamicMenuRoutes=JSON.parse(sessionStorage.getItem("dynamicMenuRoutes")||"[]"),this.routeHandle(this.$route)},methods:{routeHandle:function(t){if(t.meta.isTab){var e=this.mainTabs.filter(function(e){return e.name===t.name})[0];if(!e){if(t.meta.isDynamic&&!(t=this.dynamicMenuRoutes.filter(function(e){return e.name===t.name})[0]))return console.error("未能找到可用标签页!");e={menuId:t.meta.menuId||t.name,name:t.name,title:t.meta.title,type:Object(i.c)(t.meta.iframeUrl)?"iframe":"module",iframeUrl:t.meta.iframeUrl||""},this.mainTabs=this.mainTabs.concat(e)}this.menuActiveName=e.menuId+"",this.mainTabsActiveName=e.name}}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"site-sidebar",class:"site-sidebar--"+t.sidebarLayoutSkin},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":t.menuActiveName||"home",collapse:t.sidebarFold,collapseTransition:!1}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){t.$router.push({name:"home"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"shouye"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])],1),t._v(" "),n("el-submenu",{attrs:{index:"demo"}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"shoucang"}}),t._v(" "),n("span",[t._v("demo")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"demo-echarts"},on:{click:function(e){t.$router.push({name:"demo-echarts"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"tubiao"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("echarts")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"demo-ueditor"},on:{click:function(e){t.$router.push({name:"demo-ueditor"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"editor"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("ueditor")])],1)],2),t._v(" "),t._l(t.menuList,function(e){return n("sub-menu",{key:e.menuId,attrs:{menu:e,dynamicMenuRoutes:t.dynamicMenuRoutes}})})],2)],1)])},staticRenderFns:[]},m=n("VU/8")(a,o,!1,null,null,null);e.default=m.exports}});