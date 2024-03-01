<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList"]),
    personList() {
        /// 不借助mapState，纯自己手写；
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    firstPersonName() {
        return this.$store.getters['personOptions.firstPersonName']
    }
  },
  methods: {
    add() {
        let person = {'id': nanoid.id, 'name':this.name,}
        // this.$store.state.personOptions.add(person)
        this.$store.commit('personOptions/ADD_PERSON', person)
        this.name = ''
    },
    addWang() {
        let person = {'id': nanoid.id, 'name':this.name,}
        this.$store.dispatch('personOptions/addPersonWang', person)
        this.name = ''
    }
  },
};
</script>