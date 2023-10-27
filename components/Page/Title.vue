<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1 class="page-title">
    <slot>{{ title }}</slot>
  </h1>
</template>

<style scoped></style>
