import { createApp } from "vue";

import App from "@/App/App.vue";
import "@/assets/css/main.css";
import router from "@/router/index.js";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/tailwind.css";
createApp(App).use(router).use(Antd).mount("#app");
