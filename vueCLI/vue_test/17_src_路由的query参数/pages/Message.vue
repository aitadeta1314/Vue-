<template>
  <ul>
    <li v-for="m in messageList" :key="m.id">
        <!-- 1. 跳转路由并携带query参数， to的字符串写法。-->
        <!-- to加冒号表示""里面作为一个js表达式去解析，加``表示模板字符串写法。模版字符串混着js变量，使用${js变量}。 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

        <!-- 2. 跳转路由并携带query参数， to的对象写法。-->
        <router-link :to="{
            path:'/home/message/detail',
            query:m
        }">
            {{ m.title }}
        </router-link>
        
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
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>