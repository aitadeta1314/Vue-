<template>
  <div>
    <!-- ref: id的替代者 -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref='btn' @click="showLastDOM">点我获取上一个DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components: {
        School,
    },
    data() {
        return {
            msg: '你好啊，Vue!'
        }
    },
    methods: {
        showLastDOM() {
            console.log(this)
            console.log(this.$refs.title) // 真实DOM元素
            console.log(this.$refs.btn) // 真实DOM元素
            console.log(this.$refs.sch) // School组件的实例对象(vc)
            console.log(this.$refs)
        }
    },
}
</script>
