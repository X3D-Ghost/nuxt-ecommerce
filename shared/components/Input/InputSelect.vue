<script setup lang="ts">
const props = defineProps({
  options: Array,
  label: String,
  id: String,
  value: {},
});
const emit = defineEmits(["input", "change"]);
let val = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("change", value);
  },
});
</script>

<template>
  <div class="form-group">
    <label class="form-label" :for="id">{{ label }}</label>
    <select :id="id" class="form-select" v-model="val" :aria-label="label">
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
