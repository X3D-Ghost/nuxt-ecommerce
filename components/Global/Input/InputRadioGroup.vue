<script setup lang="ts">
const props = defineProps({
  value: String || Number,
  options: Array,
  name: String,
});
</script>

<template>
  <div class="input-radio-group">
    <InputRadio v-for="option in options" :name="name" />
  </div>
</template>

<style scoped></style>
