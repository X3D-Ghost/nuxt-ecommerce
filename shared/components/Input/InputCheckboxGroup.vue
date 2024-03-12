<script setup lang="ts">
const props = defineProps({
  options: Array,
});
const emit = defineEmits(["update"]);
</script>

<template>
  <div>
    <InputCheckbox
      v-for="option in options"
      :text="option.name"
      v-model="selectedValues"
      :value="option.value"
      :id="`${name}-${option.value}`"
      @change="emit('update')"
    ></InputCheckbox>
  </div>
</template>

<style scoped></style>
