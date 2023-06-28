// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const router = new VueRouter({
    routes: [
        {
            name: "guanyu",
            path: "/about",
            component: About,
        },
        {
            name: 'zhuye',
            path: "/home",
            component: Home,
            children: [
                {
                    name: "xinwen", // 命名路由
                    path: "news",
                    component: News,
                },
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "xiangqing", // 命名路由name,作用：简化路由的跳转。
                            path: "detail", // query传参，to的字符串写法。
                            // path: "detail/:id/:title", // params传参，to的字符串写法。使用占位声明接收params参数。
                            component: Detail,
                            // props第一种写法(用的非常少，死数据)，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            //   props: {'a': 1, 'b': 'hello'},

                            // props第二种写法，值为bool类型，若bool类型为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props: true,

                            // props第二种写法，值为函数(功能强大，可以接收query配置的参数)
                            // props: function() {
                            // } 
                            // 简写1：
                            // props($route) {
                            //     return {'id': $route.query.id, 'title': $route.query.title}
                            // }
                            // // 简写2：{query}为解构赋值写法
                            // props({query}) {
                            //     return {'id': query.id, 'title': query.title}
                            // }
                            // // 简写3：{query}为解构赋值写法， 连续解构赋值写法。
                            // props({query: {id, title}}) {
                            //     return {'id': id, 'title': title}
                            // }
                            // 简写4：为啥要单独定义呢？？，query传过来啥，我传出去啥
                            props({query}) {
                                return query
                            }
                        },
                    ],
                },
            ],
        },
    ],
});

// 全局前置路由守卫 ———— 初始化的时候被调用，每次路由切换之前被调用。
router.beforeEach((to, from, next) => {
    console.log('@')
    console.log(to)
    console.log(from)
    /// 调用next才会跳转
    // next()
    // !!! 加上判断就会控制是否跳转到对应的路由
    if (to.name === 'xinwen' || to.name === 'xiaoxi') {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            // 拦截
            alert('学校名称不对')
        }
    } else {
        next();
    }

});

/// 创建并暴露一个路由器
export default router;