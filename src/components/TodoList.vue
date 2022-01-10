<template>
  <div class="list">
    <div>
      <div class="input">
        <label>Заголовок</label>
        <input type="text" v-model="item.title" />
      </div>
      <button @click="addTodo">Save</button>
    </div>
    <todo-item v-for="(todo, id) in data" :key="id" :item="todo"></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  data() {
    return {
      data: this.$store.state.list.list,
      item: {},
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.item);
      this.item = {};
    },
  },
};
</script>

<style>
.input {
  display: flex;
  margin: 12px;
}
.list {
}
</style>
