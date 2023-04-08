<template>
  <div>
    <!-- 全局过滤器函数 -->
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <!-- 全局指令fbind -->
    <input type="text" v-fbind:value="name">
    <!-- 原型方法 -->
    <button @click="hello">点我使用hello方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "浙江大学啊",
      address: "浙江杭州",
    };
  },
};
</script>

