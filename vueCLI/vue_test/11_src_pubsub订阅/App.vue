<template>
    <div class="app">
        <School />
        <Student />
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
    name: "App",
    components: {
        Student,
        School,
    },

};
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>