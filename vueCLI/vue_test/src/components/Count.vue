<template>
    <div>
        <h1>当前求和为: {{ $store.state.sum }}</h1>
        <h2>当前求和为: {{ $store.getters.bigSum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: "Count",
    data() {
        return {
            n: 1,
        }
    },
    methods: {
        increment() {
            // this.$store.dispatch("jia", this.n)
            /// 可以直接commit调用，类似顾客，不经过服务员dispatch，直接后厨commit
            this.$store.commit("JIA", this.n)
        },
        decrement() {
            // this.$store.dispatch("jian", this.n)
            this.$store.commit("JIAN", this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n)
        },
    },
}
</script>