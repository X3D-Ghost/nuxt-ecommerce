<script setup lang="ts">
const emit = defineEmits(["submit"]);

function submit() {
  emit("submit");
}
</script>

<template>
  <form class="quick-buy" @submit="submit">
    <slot name="before"></slot>
    <slot>
      <button>Купить в 1 клик</button>
    </slot>
  </form>
</template>

<style scoped></style>
