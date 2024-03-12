<script setup lang="ts">
import { computed, defineEmits } from "vue";
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  text: { type: String },
  id: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <slot name="before"></slot>
    <input
      class="form-check-input"
      type="checkbox"
      :id="id"
      v-model="model"
      :value="value"
      v-bind="$attrs"
    />
    <slot name="label">
      <label class="form-check-label" :for="id">
        {{ text }}
      </label>
    </slot>
    <slot name="after"></slot>
  </div>
</template>

<style scoped></style>
