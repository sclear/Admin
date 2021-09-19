const stateDefault = {
  activeMenu: "/element",
  isCollapse: false,
};

export default {
  namespaced: true,
  state(): typeof stateDefault {
    return stateDefault;
  },
  mutations: {
    MENU_ACTIVE(state: typeof stateDefault, menu: string): void {
      state.activeMenu = menu;
    },
    UPDATE_COLLAPSE(state: typeof stateDefault): void {
      state.isCollapse = !state.isCollapse;
    },
  },
};
