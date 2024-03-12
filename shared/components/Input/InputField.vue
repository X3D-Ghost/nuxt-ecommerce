<script setup lang="ts">
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  modelValue: {
    type: [String, Number],
    default: null,
  },
});
const emit = defineEmits(["input", "change", "update:modelValue"]);
const updateValue = (event) => {
  const inputValue = event.target.value;
  if (inputValue !== props.modelValue) {
    emit("update:modelValue", inputValue);
  }
};
</script>

<template>
  <div class="form-group">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<style scoped></style>
