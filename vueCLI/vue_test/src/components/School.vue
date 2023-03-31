<template>
    <!-- 组件的结构 -->
    <div id="demo">
        <p>{{ name }}</p>
        <p>{{ univercity }}</p>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
    // 暴露出来这个组件，
    // 1. 
    // export const school = Vue.extend({
    //     data() {
    //         return {
    //             name: 'FLJ',
    //             univercity: '浙大',
    //         }
    //     },

    // })
    // 2.统一暴露 export {school, xxx}
    // const school = Vue.extend({
    //     data() {
    //         return {
    //             name: 'FLJ',
    //             univercity: '浙大',
    //         }
    //     },

    // })
    // export {school}

    // 3. 默认暴露, 
    // const school = Vue.extend({
    //     data() {
    //         return {
    //             name: 'FLJ',
    //             univercity: '浙大',
    //         }
    //     },

    // })
    // export default school
    // !!! 简写形式如下:
    // export default Vue.extend({
    //     data() {
    //         return {
    //             name: 'FLJ',
    //             univercity: '浙大',
    //         }
    //     },

    // }) 
    // 更简写 =>👇🏻
    export default {
        name: 'School',
        data() {
            return {
                name: 'FLJ',
                univercity: '浙大',
            }
        },

    }
    

</script>

<style>
    /* 组件样式 */
    #demo {
        background-color: aquamarine;
    }
</style>