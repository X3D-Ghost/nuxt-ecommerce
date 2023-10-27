<script setup lang="ts">
const props = defineProps({
  slug: String,
  order: String,
  label: String,
});
</script>

<template>
  <NuxtLink :to="{ query: { orderby: slug, order: order } }">{{
    label
  }}</NuxtLink>
</template>

<style scoped></style>
