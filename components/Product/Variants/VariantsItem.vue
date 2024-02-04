<script setup lang="ts">
const props = defineProps({
  value: [String, Number],
  modelValue: {
    type: Object,
  },
});
</script>

<template>
  <div class="variants-item">
    <button class="btn">{{ value }}</button>
  </div>
</template>

<style scoped></style>
