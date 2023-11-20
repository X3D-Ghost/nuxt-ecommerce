<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  gridClass: [String, Array],
  itemClass: [String, Array],
  isLoading: {
    type: Boolean,
  },
  skeletonCount: {
    type: Number,
    default: 12,
  },
});
</script>

<template>
  <div class="product-list">
    <slot name="before-grid"></slot>
    <div v-if="isLoading" class="grid" :class="gridClass">
      <slot name="loading">
        <template v-for="i in skeletonCount" :key="`skeleton-${i}`">
          <slot name="skeleton-item"></slot>
        </template>
      </slot>
    </div>
    <div v-else class="grid" :class="gridClass">
      <slot>
        <div
          v-for="item in items"
          class="g-col-lg-3 g-col-md-4 g-col-6"
          :class="itemClass"
        >
          <slot name="item" v-bind="item">
            <ProductCard
              v-bind="item"
              :name="item.name"
              :price="item.price"
              :slug="item.slug"
              :id="item.id"
              :images="item.images"
              :key="`product-${item.id}`"
            />
          </slot>
        </div>
      </slot>
    </div>
    <slot name="after-grid"></slot>
  </div>
</template>

<style scoped></style>
