const state = {
  list: [
    { id: 1, title: "Поймать кота" },
    { id: 2, title: "Сварить компот(не из кота)" },
  ],
};

const mutations = {
  ADD_TODO(state, payload) {
    let lastid = state.list.length + 1;
    let addedTodo = payload;
    addedTodo.id = lastid++;
    state.list.push(addedTodo);
  },
  REMOVE_TODO(state, id) {
    let index = state.list.findIndex((n) => n.id === id);
    state.list.splice(index, 1);
  },
  EDIT_TODO(state, payload) {
    let id = state.list.findIndex((n) => n.id === payload.id);
    state.list.splice(id, 1);
    state.list.push(payload);
  },
};
const actions = {
  editTodo({ commit }, payload) {
    commit("EDIT_TODO", payload);
  },
  addTodo({ commit }, payload) {
    commit("ADD_TODO", payload);
  },
  removeTodo({ commit }, payload) {
    commit("REMOVE_TODO", payload);
  },
};
export default {
  state,
  mutations,
  actions,
};
