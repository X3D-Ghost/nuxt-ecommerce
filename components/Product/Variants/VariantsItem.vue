<script setup lang="ts">
const props = defineProps({
  // text: String,
  value: [String, Number],
  // slug: String,
  modelValue: {
    type: Object,
    // required: true,
  },
});
</script>

<template>
  <div class="variants-item">
    <button class="btn">{{ value }}</button>
  </div>
</template>

<style scoped></style>
