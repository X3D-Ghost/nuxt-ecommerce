<script setup lang="ts">
const props = defineProps({
  slug: String,
  order: String,
  label: String,
});
const { query } = useRoute();
</script>

<template>
  <NuxtLink
    :to="{ query: { ...query, orderby: slug, order: order } }"
    class="sorting-item"
    >{{ label }}</NuxtLink
  >
</template>

<style lang="scss">
.sorting-item {
  text-decoration: none;
}
</style>
