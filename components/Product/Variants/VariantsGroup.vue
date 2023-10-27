<script setup lang="ts">
const props = defineProps({
  text: String,
  id: Number,
  options: Array,
});
console.log({ props });
</script>

<template>
  <div class="variants-group">
    <p>{{ text }}</p>
    <div class="variants__list">
      <template v-for="option in options">
        <slot name="item" v-bind="{ value: option, text, id }">
          <ProductVariantsItem :value="option"> </ProductVariantsItem>
        </slot>
      </template>
    </div>
  </div>
</template>

<style scoped>
.variants-group {
  display: flex;
  flex-wrap: wrap;
}
.variants__list {
  display: inline-flex;
}
</style>
