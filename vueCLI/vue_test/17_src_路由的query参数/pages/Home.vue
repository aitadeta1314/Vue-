<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <!-- 必须带着/home，父亲级下的路径 -->
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    // beforeDestroy() {
    //     console.log('Home组件被销毁了')
    // },
    // mounted() {
    //     // 每个组件中的this.$route不一样。而this.$router则都是一样的
    //     console.log('Home组件挂载了', this)
    // },
}
</script>