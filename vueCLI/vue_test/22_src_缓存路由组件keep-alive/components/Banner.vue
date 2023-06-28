<template>
    <div>
        <h2>Vue Router use from Banner Component</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="testGo">测试一下go方法</button>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    methods: {
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();
        },
        testGo() {
            // go方法传入一个数字（例如3），传入正数是往前走3步，传入负数是后退步数。
            this.$router.go(3)
        }
    },  
}
</script>