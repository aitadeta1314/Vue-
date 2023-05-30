<template>
    <div>
        <h1>当前求和为: {{ sum }}</h1>
        <h2>当前求和为: {{ bigSum }}</h2>
        <h2>我在{{ company }}, 学习{{ which }}</h2>
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
/// 引入mapState
import { mapState, mapGetters } from 'vuex'

export default {
    name: "Count",
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        /// 靠程序员自己生成的计算属性
        // sum() {
        //     return this.$store.state.sum
        // },
        // company() {
        //     return this.$store.state.company
        // },
        // which() {
        //     return this.$store.state.which
        // },
        /// 将mapState中的Map值 合并到 computed的Map中来。
        /// 借助mapState生成计算属性，从state中读取数据。（!!!! 对象写法)
        // ...mapState({sum: 'sum', company: 'company', which:'which'}),

        /// 借助mapState生成计算属性，从state中读取数据。（!!!! 数组写法)
        ...mapState(['sum', 'company', 'which']),

        /******** ***********/
        // bigSum() {
        //     return this.$store.getters.bigSum;
        // },
        /// 借助mapGetters生成计算属性，从getters中读取数据。（!!!! 对象写法)
        // ...mapGetters({bigSum: 'bigSum'}),
        
        /// 借助mapGetters生成计算属性，从getters中读取数据。（!!!! 数组写法)
        ...mapGetters(['bigSum']),
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
    mounted() {
        console.log(mapState({sum: 'sum', company: 'company', which:'which'}))
    },
}
</script>