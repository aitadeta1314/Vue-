<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <!-- 命名路由 -->
                    <router-link class="list-group-item" active-class="active" :to="{name: 'xinwen',}">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- include="News" 表示缓存News组件；如果不写include，则表示缓存所有出现在此位置的组件。
                注意：这里写的News为组件名 -->
                
            <!-- 1. 如果想缓存一个组件 -->
            <!-- <keep-alive include="News"> -->
            <!-- <keep-alive include="News_Peiqi"> -->

            <!-- 2. 如果想缓存多个组件，使用数组写法，如下： -->
            <keep-alive :include="['News_Peiqi', 'Message']">
                <router-view></router-view>
            </keep-alive>

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