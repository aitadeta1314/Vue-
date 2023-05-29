<template>
    <div class="app">
        <Count />
    </div>
</template>

<script>
import Count from "./components/Count.vue";

export default {
    name: "App",
    components: {
        Count,
    },

};
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>