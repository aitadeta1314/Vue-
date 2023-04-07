<template>
    <div class="student">
        <h1>{{ msg }}</h1>
        <h1>学生姓名: {{ name }}</h1>
        <h1>学生性别: {{ sex }}</h1>
        <h1>学生年龄: {{ myAge }}</h1>
        <button @click="add">点我年龄加1</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '我是一个提示msg',
            myAge: this.age, // 外部传入的值是不能改变的，也就是props里的值不能改变，若要改变，需要在data里转换一下。
        }
    },
    methods: {
      add() {
        this.myAge++
      }
    },
    // props: ['name', 'sex', 'age'] // 写法1：简单写法，由外部传入值显示
    // props: {     // 写法2： 指定传入限制类型
    //   name: String,
    //   sex: String,
    //   age: Number,
    // }
    props: {
      name: {
        type: String,
        required: true,
      },
      sex: {
        type: String,
      },
      age: {
        type: Number,
        default: 99,
      },
    }
}
</script>

<style>
.student {
    background-color: yellow;
}
</style>