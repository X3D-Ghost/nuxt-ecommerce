<script setup lang="ts">
const props = defineProps({
  items: Array,
  modelValue: {
    type: Object,
    required: true,
  },
});

// const attributes = computed(() => props.items.map((item) => item.attributes));
</script>

<template>
  <div class="product-variants">
    <template v-for="item in items" :key="`variant-${item.id}`">
      <slot name="group" v-bind="item">
        <ProductVariantsGroup v-bind="item" v-model="modelValue[item.id]">
          <template #label="{ label }">
            <slot
              name="label"
              :label="label"
              :modelValue="modelValue[item.id]"
            ></slot>
          </template>
          <template #item="slotProps">
            <slot name="item" v-bind="slotProps"></slot>
          </template>
        </ProductVariantsGroup>
      </slot>
    </template>
  </div>
</template>

<style scoped></style>
