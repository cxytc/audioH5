import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入Vant3
import vant from "vant";
import "vant/lib/index.css";

// 引入NutUI
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

// 引入全局的接口
import request from "@/assets/api/api";

/* 全局注册 */
import "lib-flexible";
let app = createApp(App);

app.config.globalProperties.$request = request;

// createApp(App).use(store).use(router).use(vant).mount("#app");
app.use(store);
app.use(router);
app.use(vant);
app.use(NutUI);
app.mount("#app");
