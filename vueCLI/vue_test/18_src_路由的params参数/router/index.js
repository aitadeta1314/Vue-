// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

/// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          name: "xinwen", // 命名路由
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "xiangqing", // 命名路由name,作用：简化路由的跳转。
              path: "detail/:id/:title", // params传参，to的字符串写法。使用占位声明接收params参数。
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});
