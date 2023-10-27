<script setup lang="ts">
const props = defineProps({
  items: Array,
});

// const attributes = computed(() => props.items.map((item) => item.attributes));
</script>

<template>
  <div class="product-variants">
    <template v-for="item in items" :key="`variant-${item.id}`">
      <slot name="group" v-bind="item">
        <ProductVariantsGroup v-bind="item">
          <template #item="slotProps">
            <slot name="item" v-bind="slotProps"></slot>
          </template>
        </ProductVariantsGroup>
      </slot>
    </template>
  </div>
</template>

<style scoped></style>
