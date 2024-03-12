<script setup lang="ts">
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="tab-pane fade">
    <slot></slot>
  </div>
</template>

<style scoped></style>
