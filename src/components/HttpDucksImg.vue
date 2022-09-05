<script setup>
import { computed } from "@vue/reactivity";

const { id } = defineProps(["id"]);

const code = computed(() => id);
</script>

<template>
  <div class="http-ducks-code">{{ code }}</div>
  <div class="http-ducks-img">
    <img :src="'https://random-d.uk/api/http/' + id" :alt="id" />
  </div>
</template>

<style>
.http-ducks-code {
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.http-ducks-img {
  display: flex;
  justify-content: center;
}
</style>
