<script setup lang="ts">
const props = defineProps({
  label: String,
  id: Number,
  options: Array,
  modelValue: {
    type: Object,
    required: true,
  },
});
console.log({ props });
</script>

<template>
  <div class="variants-group">
    <slot name="label" :label="label">
      <p>{{ label }}</p>
    </slot>
    <div class="variants__list">
      <template v-for="option in options">
        <slot name="item" v-bind="{ value: option, label, id }">
          <ProductVariantsItem :value="option"> </ProductVariantsItem>
        </slot>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.variants-group {
  //display: flex;
  //flex-wrap: wrap;
}
.variants__list {
  display: inline-flex;
}
</style>
