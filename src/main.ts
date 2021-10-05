import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./theme/pink/pink.less";
import "./theme/dark/dark.less";

createApp(App).use(store).use(router).mount("#app");
// app?.config?.globalProperties?.$ELEMENT = {}
