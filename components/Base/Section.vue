<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: "full",
    validator(value) {
      return ["thin", "normal", "wide", "full"].includes(value);
    },
  },
  title: {
    type: String,
    default: null,
  },
});
const containerType = computed(() => {
  switch (props.width) {
    case "thin":
      return "-thin";
      break;
    case "normal":
      return "";
      break;
    case "wide":
      return "-wide";
      break;
    case "full":
      return "-fluid";
      break;
  }
});
</script>

<template>
  <section :class="`container${containerType}`">
    <h2
      v-if="$slots.title || props.title"
      class="section-title position-relative text-uppercase mx-xl-5 mb-4"
    >
      <span v-if="$slots.title" class="bg-secondary pe-3">
        <slot name="title" />
      </span>
      <span v-if="props.title && !$slots.title" class="bg-secondary pe-3">
        {{ props.title }}
      </span>
    </h2>
    <slot />
  </section>
</template>

<style scoped></style>
