<script setup lang="ts">
const props = defineProps({
  min: Number,
  max: Number,
  currency: {
    type: String,
    default: "руб",
  },
});
const emit = defineEmits(["change"]);

const price = reactive({ min: 0, max: 9999 });
price.min = props.min;
price.max = props.max;
function update() {
  emit("change");
}
function filterChange(e) {
  console.log("changed", e);
  const filerParam = {
    name: "price",
    value: `${price.min}-${price.max}`,
  };
  emit("change", filerParam);
}
</script>

<template>
  <div class="filter-price">
    <slot name="header"><p>Цена</p></slot>
    <div class="d-flex">
      <slot name="input-min-price" v-bind="filterChange">
        <InputField
          v-model="price.min"
          :value="price.min"
          @input="filterChange"
        />
      </slot>
      <slot name="input-max-price" v-bind="filterChange">
        <InputField
          v-model="price.max"
          :value="price.max"
          @input="filterChange"
        />
      </slot>
      <span>{{ currency }}</span>
    </div>
  </div>
</template>

<style scoped></style>
