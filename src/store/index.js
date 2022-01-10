import Vue from "vue";
import Vuex from "vuex";
import list from "@/store/modules/list.store";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { list },
  plugins: [createPersistedState()],
});
