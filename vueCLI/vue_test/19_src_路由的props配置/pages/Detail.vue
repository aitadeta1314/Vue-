<template>
  <ul>
    <!-- props形式接收的参数。 -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <li>消息其他信息：{{ otherInfo }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['id', 'title', 'otherInfo'],
  mounted() {
    console.log(this.$route);
  }
};
</script>