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
        <!-- <button @click="increment">+</button>
        <button @click="decrement">-</button> -->
        <!-- 使用mapMutations方法传参的方式 -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
/// 引入mapState
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: "Count",
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        
        /// 1. 靠程序员自己生成的计算属性
        // sum() {
        //     return this.$store.state.sum
        // },
        // company() {
        //     return this.$store.state.company
        // },
        // which() {
        //     return this.$store.state.which
        // },

        /// 2. 将mapState中的Map值 合并到 computed的Map中来 ...mapState()
        /// ...为`展开运算符`。
        /// 第一种写法：借助mapState生成计算属性，从state中读取数据。（!!!! 对象写法)
        // ...mapState({sum: 'sum', company: 'company', which:'which'}),

        /// 借助mapState生成计算属性，从state中读取数据。（!!!! 数组写法)
        /// >>>> @@@### 生成的计算属性的名sum,需要和state中读取的名sum一致，才可以用数组写法。<<<<
        ...mapState(['sum', 'company', 'which']),

        /******** ***********/
        // bigSum() {
        //     return this.$store.getters.bigSum;
        // },
        /// 3. 借助mapGetters生成计算属性，从getters中读取数据。（!!!! 对象写法)
        // ...mapGetters({bigSum: 'bigSum'}),

        /// 借助mapGetters生成计算属性，从getters中读取数据。（!!!! 数组写法)
        ...mapGetters(['bigSum']),
    },
    methods: {
        /// 程序员自己写的方法
        // increment() {
        //     // this.$store.dispatch("jia", this.n)
        //     /// 可以直接commit调用，类似顾客，不经过服务员dispatch，直接后厨commit
        //     this.$store.commit("JIA", this.n)
        // },
        // decrement() {
        //     // this.$store.dispatch("jian", this.n)
        //     this.$store.commit("JIAN", this.n)
        // },
        /// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({increment: "JIA", decrement: "JIAN"}),

        /// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
        /// 生成的方法名跟commit中的名字相同时使用。
        // ...mapMutations(["JIA", "JIAN"]),

        /*********** */
        // 程序员亲自写的方法。
        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },
        /// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
        ...mapActions({incrementOdd: "jiaOdd", incrementWait: "jiaWait"}),

        /// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
        /// 生成的方法名跟actions中的名字相同时使用。
        // ...mapActions(["jiaOdd", "jiaWait"]),
    },
    mounted() {
        console.log(mapState({sum: 'sum', company: 'company', which:'which'}))
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 一样的写法，只不过 js中 key自动转化为字符串。
        console.log(mapState({'sum': 'sum', 'company': 'company', 'which':'which'}))
    },
}
</script>