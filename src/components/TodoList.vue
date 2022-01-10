<template>
  <div class="list">
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
    };
  },
};
</script>

<style>
.list {
  
}
</style>
