<template>
  <div class="item">
    <input type="checkbox" />
    <div class="todo">
      <h3>{{ item.title }}</h3>
      <span>{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
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
  }
}
</style>
