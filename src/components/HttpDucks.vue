<script setup>
import { computed } from "@vue/reactivity";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { getList } from "../ducks.api";

const loading = ref(false);
const httpDucks = ref([]);

const sortedHttpDucks = computed(() =>
  Array.from(httpDucks.value).sort((first, second) => {
    const firstHttpCode = first;
    const secondHttpCode = second;

    return firstHttpCode - secondHttpCode;
  })
);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { http } = await getList();
    if (http) {
      httpDucks.value = http;
    }
  } catch (error) {
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h1>HTTP Ducks</h1>

  <h3 v-if="loading">Loading...</h3>

  <div v-else class="http-ducks">
    <router-link
      v-for="(http, index) in sortedHttpDucks"
      :key="index"
      :to="'/http-ducks/' + http"
      class="http-ducks-item"
      >{{ http.split(".")[0] }}</router-link
    >
  </div>
</template>

<style>
.http-ducks {
  display: flex;
  flex-wrap: wrap;
}

.http-ducks-item {
  display: block;
  padding: 1em;
  margin: 0.4em;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.4em;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: #1e1e1e;
}

.http-ducks-item:hover {
  background-color: #eeeeee;
}
</style>
