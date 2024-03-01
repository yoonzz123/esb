import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router/router";

loadFonts();

const app = createApp(App);

app.use(store);
app.use(vuetify);
app.use(router);
app.mount("#app");
