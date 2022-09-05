import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import HttpDucks from "./components/HttpDucks.vue";
import HttpDucksImg from "./components/HttpDucksImg.vue";
import DuckGifs from "./components/DuckGifs.vue";
import NumberInput from "./components/NumberInput.vue";
import DateParsing from "./components/DateParsing.vue";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/http-ducks",
      component: HttpDucks,
    },
    {
      path: "/http-ducks/:id",
      component: HttpDucksImg,
      props: true,
    },
    {
      path: "/duck-gifs",
      component: DuckGifs,
    },
    {
      path: "/number-input",
      component: NumberInput,
    },
    {
      path: "/date-parsing",
      component: DateParsing,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
