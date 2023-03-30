<template>
    <!-- 组件的结构 -->
    <div>
        <p>学生姓名：{{ name }}</p>
        <p>学生性别：{{ sex }}</p>
    </div>
</template>

<script>

export default {
    name: 'Student',
    data() {
        return {
            name: 'FLJ',
            sex: 男,
        }
    },

}


</script>