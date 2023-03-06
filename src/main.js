import { createApp } from "vue";

import App from "@/App/App.vue";
import "@/assets/css/tailwind.css";
import "@/assets/css/main.css";
import router from "@/router/index.js";
createApp(App).use(router).mount("#app");
