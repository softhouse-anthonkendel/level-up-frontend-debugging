<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { getList } from "../ducks.api";

const loading = ref(false);
const duckGifs = ref([]);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { gifs } = getList();
    if (gifs) {
      duckGifs.value = gifs;
    }
  } catch (error) {
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h1>Duck gifs</h1>

  <h3 v-if="loading">Loading...</h3>

  <div v-else class="duck-gifs">
    <img
      v-for="(gif, index) in duckGifs"
      :key="index"
      :src="'https://random-d.uk/api/' + gif"
      :alt="gif"
      class="duck-gifs-img"
    />
  </div>
</template>

<style>
.duck-gifs {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.duck-gifs-img {
  height: 300px;
  width: 300px;
  margin: 0;
  padding: 0;
}
</style>
