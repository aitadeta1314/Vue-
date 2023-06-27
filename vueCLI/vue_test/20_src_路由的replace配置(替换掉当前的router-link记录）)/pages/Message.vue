<template>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- ！！！Query写法 -->
            <!-- 1. 跳转路由并携带query参数， to的字符串写法。-->
            <!-- to加冒号表示""里面作为一个js表达式去解析，加``表示模板字符串写法。模版字符串混着js变量，使用${js变量}。 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

            <!-- 2. 跳转路由并携带query参数， to的对象写法。-->
            <!-- replace 替换掉当前的记录（当前的这条router-link），路由跳转时候默认是push。 -->
            <router-link replace :to="{
            // path:'/home/message/detail', // 简化前，写完成路径；
            name: 'xiangqing',              // 简化后，直接通过名字跳转。
            query:m
        }">
                {{ m.title }}
            </router-link>

            <!-- ！！！Param写法 -->
            <!-- 1. route-link字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

            <!-- 2. route-link to的对象写法 -->
            <!-- <router-link :to="{
            // path:'/home/message/detail', // 这样写会报错的！
            name: 'xiangqing', // to的对象写法必须使用命名路由（name配置项），使用path配置项会报错
            params:m
        }">
            {{ m.title }}
        </router-link> -->
        </li>
        <router-view></router-view>
    </ul>

</template>
<script>

export default {
    name: "Message",
    data() {
        return {
            messageList: [
                { id: "001", title: "消息001", otherInfo: '其他信息001' },
                { id: "002", title: "消息002", otherInfo: '其他信息002' },
                { id: "003", title: "消息003", otherInfo: '其他信息003' },
            ],
        };
    },
};
</script>