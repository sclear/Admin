import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./theme/register";

createApp(App).use(store).use(router).mount("#app");
