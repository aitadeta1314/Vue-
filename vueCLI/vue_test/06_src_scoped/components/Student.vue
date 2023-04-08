<template>
  <div class="demo">
    <h1>学生姓名: {{ name }}</h1>
    <h1 class="atlijun">学生年龄: {{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个提示msg",
      name: "FLJ",
      age: 29,
    };
  },
};
</script>

<!-- scoped: 防止样式影响其他组件的写法。让样式在局部生效，防止冲突。 -->
<!-- 默认是css写法 -->
<!-- <style scoped>
.demo {
    background-color: yellow;
}
</style> -->

<!-- lang表示语言，有css\less-loader两种 -->
<!-- less写法：语法嵌套 -->
<style lang="less" scoped>
.demo {
  background-color: yellow;
  .atlijun {
    font-size: 40px;
  }
}
</style>