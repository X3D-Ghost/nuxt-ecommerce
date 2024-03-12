<script setup lang="ts">
const props = defineProps({
  label: String,
  name: String,
});
</script>

<template>
  <button class="nav-item nav-link text-dark" data-bs-toggle="tab">
    {{ label }}
  </button>
</template>

<style scoped></style>
