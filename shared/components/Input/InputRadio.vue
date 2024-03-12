<script setup lang="ts">
const props = defineProps({
  label: String,
  id: String,
  name: String,
  value: {},
  modelValue: {},
});
const isChecked = computed(() => {
  return props.modelValue === props.value;
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="custom-control custom-radio custom-control-inline">
    <input
      type="radio"
      class="custom-control-input"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label class="custom-control-label" :for="id">
      {{ label }}
      <slot v-if="!label"></slot>
    </label>
  </div>
</template>

<style scoped></style>
