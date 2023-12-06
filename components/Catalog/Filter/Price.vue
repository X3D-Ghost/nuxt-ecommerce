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
  headerClass: String,
  bodyClass: String,
  bottomClass: String,
});
const emit = defineEmits(["change", "update:modelValue"]);

const rangeValue = ref([
  props.modelValue[0] || props.min,
  props.modelValue[1] || props.max,
]);

function update(val, index: number) {
  if (!!index?.toString()) {
    let tmp_arr = [...rangeValue.value];
    tmp_arr[index] = val;
    rangeValue.value = tmp_arr;
  } else {
    rangeValue.value = val;
  }
  emit("update:modelValue", rangeValue.value);
  emit("change", rangeValue.value);
}
function filterChange(e) {
  const filerParam = {
    name: "price",
    value: props.modelValue,
  };
  emit("update:modelValue", filerParam);
}
</script>

<template>
  <div class="filter-price">
    <div class="filter-price__header" :class="headerClass">
      <slot name="header">
        <p class="filter-price__title">Цена</p>
      </slot>
    </div>
    <div class="d-flex filter-price__form-body" :class="bodyClass">
      <slot
        name="input-min-price"
        v-bind="{ filterChange, rangeValue, min, max, update }"
      >
        <InputField v-model.lazy.number="rangeValue[0]" />
      </slot>
      <slot
        name="input-max-price"
        v-bind="{ filterChange, rangeValue, min, max, update }"
      >
        <InputField v-model.lazy.number="rangeValue[1]" />
      </slot>
      <slot name="currency">
        <span>{{ currency }}</span>
      </slot>
    </div>
    <div class="filter-price__bottom" :class="bottomClass">
      <slot
        name="after"
        v-bind="{ filterChange, min, max, rangeValue, update }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-price {
  &__header {
  }
  &__title {
  }
  &__form-body {
  }
  &__bottom {
  }
}
</style>
