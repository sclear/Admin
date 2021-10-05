const stateDefault = {
  isLogin: false,
};

export default {
  namespaced: true,
  state(): typeof stateDefault {
    return stateDefault;
  },
  mutations: {
    UPDATE_LOGIN(state: typeof stateDefault, isLogin: boolean): void {
      state.isLogin = isLogin;
    },
  },
};
