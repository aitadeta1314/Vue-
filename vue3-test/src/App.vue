<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHell0">说话</button>
</template>

<script>

export default {
  name: 'App',
  setup() {
    // 数据
    let name = 'FLJ'
    let age = 18

    // 方法
    function sayHell0() {
      alert(`我叫${name}, 我${age}岁了, 你好啊！`)
    }

    return {
      name,
      age,
      sayHell0,
    }
  }
}
</script>
