import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import './styles.css';

createApp(App).use(router).mount("#app");
