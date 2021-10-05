import { createStore } from "vuex";
import setting from "./modules/setting";
import user from "./modules/user";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    setting,
    user,
  },
});
