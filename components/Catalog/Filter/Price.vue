<script setup lang="ts">
const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 0 },
  currency: {
    type: String,
    default: "руб",
  },
  modelValue: {
    type: Array,
    default: () => [null, null],
  },
});
const emit = defineEmits(["change", "update:modelValue"]);

const rangeValue = ref([
  props.modelValue[0] || props.min,
  props.modelValue[1] || props.max,
]);

function update(val: number[]) {
  rangeValue.value = val;
  emit("update:modelValue", val);
  emit("change", val);
}
function filterChange(e) {
  const filerParam = {
    name: "price",
    value: props.modelValue,
  };
  emit("update:modelValue", filerParam);
}

watch(
  () => rangeValue,
  (val) => {
    console.log(val, "price changed");
    filterChange(val);
  }
);
</script>

<template>
  <div class="filter-price">
    <slot name="header"><p>Цена</p></slot>
    <div class="d-flex">
      <slot name="input-min-price" v-bind="filterChange">
        <InputField v-model.lazy.number="rangeValue[0]" />
      </slot>
      <slot name="input-max-price" v-bind="filterChange">
        <InputField v-model.lazy.number="rangeValue[1]" />
      </slot>
      <slot name="currency">
        <span>{{ currency }}</span>
      </slot>
    </div>
    <slot
      name="after"
      v-bind="{ filterChange, min, max, rangeValue, update }"
    />
  </div>
</template>

<style scoped></style>
