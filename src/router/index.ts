import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw, //类型
    Router,
  } from "vue-router";
  
  const routes: Array<RouteRecordRaw> = [
  {
      path: "/",
      name: "home",
      component: () =>
      //路由懒加载
        import(/* webpackChunkName: "Home" */ "../views/home/index.vue"),
    },
  ];
  
  const router: Router = createRouter({
     //createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
     //createWebHashHistory路由模式路径带#号
    history: createWebHashHistory(),
    routes,
  })
  
  export default router;  //导出
  