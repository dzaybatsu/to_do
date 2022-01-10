<template>
  <label class="item">
    <input type="checkbox" />

    <div class="todo">
      <h3 v-if="!isEditable" @click="isEditable = true">{{ item.title }}</h3>
      <input type="text" v-else v-model="item.title" @change="change" />
      {{ item.id }}
      <button @click="remove(item.id)">remove</button>
    </div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      isEditable: false,
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    change() {
      this.isEditable = false;
      this.$store.dispatch("editTodo", this.item);
    },
    remove(id) {
      this.$store.dispatch("removeTodo", id);
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: center;
  border: 1px solid;
  margin: 10px;
  background: rgb(176, 176, 189);
  .todo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
}
</style>
