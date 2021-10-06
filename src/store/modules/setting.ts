const stateDefault = {
  activeMenu: "/element",
  isCollapse: false,
  isSearch: false,
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
    OPEN_SEARCH(state: typeof stateDefault, type: boolean | undefined): void {
      if (typeof type === "boolean") {
        state.isSearch = type;
      } else state.isSearch = !state.isSearch;
    },
  },
};
