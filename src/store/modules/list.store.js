const state = {
  list: [
    { id: 1, title: "todo1", description: "tododescr1" },
    { id: 2, title: "todo2", description: "tododescr2" },
  ],
};

const mutations = {
  ADD_TODO(state, payload) {
    state.list.push(...payload);
  },
  REMOVE_TODO(state, id) {
    console.log(state, id);
  },
};
export default {
  state,
  mutations,
};
