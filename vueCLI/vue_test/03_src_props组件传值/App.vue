<template>
    <div>
        <!-- v-bind:age 简写为 :age="XXX"。 XXX是作为表达式处理的。 -->
        <Student name="flj" :age="18" sex="男"></Student>
        <Student name="ooo"  sex="男"></Student>
    </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name: 'App',
    components: {
        Student,
    },
    data() {
        return {
            msg: '你好啊，Vue!'
        }
    },

}
</script>
