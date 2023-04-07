<template>
  <div class="school">
    <h1>学校名称: {{ name }}</h1>
    <h1>学校地址: {{ address }}</h1>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '浙江大学',
            address: '浙江大学国家大学科技园'
        }
    },
}
</script>

<style>

.school {
    background-color: yellow;
}

</style>