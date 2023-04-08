<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我获取名称</button>
  </div>
</template>

<script>
import { hunhe } from "@/mixin";

export default {
  name: "School",
  data() {
    return {
      name: "浙江大学",
      address: "浙江杭州",
    };
  },
  mixins: [hunhe],
};
</script>

