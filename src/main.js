import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Vue2TouchEvents from 'vue2-touch-events'

import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(Vue2TouchEvents)
app.use(pinia);
app.use(router);
app.mount("#app");
