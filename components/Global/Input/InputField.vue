<script setup lang="ts">
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  value: {},
});
const emit = defineEmits(["input"]);
let val = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", parseInt(value));
  },
});
</script>

<template>
  <div class="form-group">
    <label class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :type="type"
      :placeholder="placeholder"
      v-model="val"
    />
  </div>
</template>

<style scoped></style>
