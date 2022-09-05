<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const backendDate = ref("2022-08-18T14:30:15.750Z");

const frontendDate = computed(() => backendDate.value);
</script>

<template>
  <div class="date-parsing">
    <code>{{ backendDate }}</code>
    <br />
    <h1>{{ frontendDate }}</h1>
  </div>
</template>

<style>
.date-parsing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
