<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const input = ref(2);

const hasOutput = computed(() => input.value);
</script>

<template>
  <div class="number-input">
    <div class="form-field">
      <label for="number-input">Input</label>
      <input name="number-input" id="number-input" v-model="input" />
    </div>

    <div v-if="hasOutput" class="number-input-output">
      <strong>Output</strong> <span>{{ input }}</span>
    </div>
  </div>
</template>

<style>
.number-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.number-input-output {
  margin-top: 2em;
  font-size: 2em;
}
</style>
