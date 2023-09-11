<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid px-xl-5">
    <div v-for="item in items" class="g-col-lg-3 g-col-md-4 g-col-6">
      <ProductCard
        :name="item.name"
        :price="item.price"
        :slug="item.slug"
        :id="item.id"
        :images="item.images"
        :key="`product-${item.id}`"
      />
    </div>
  </div>
</template>

<style scoped></style>
