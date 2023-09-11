<script setup lang="ts">
import { computed, defineEmits } from "vue";

const props = defineProps({
  name: String,
  slug: String,
  type: String,
  order_by: String,
  has_archives: Boolean,
  values: {
    type: Array,
    default: () => [],
  },
  value: {
    type: [String, Number],
    default: null,
  },
  modelValue: { type: [Array, Boolean] },
});
const emit = defineEmits(["update:modelValue", "change"]);
function valueChange(name, value) {
  emit("change");
}

function selectAll() {
  if (selectedValues.value.length === props.values.length) {
    selectedValues.value = [];
  } else {
    selectedValues.value = props.values.map((item) => {
      console.log(item.value);
      return item.value;
    });
  }
}

const totalCount = computed(() =>
  props.values.reduce((acc, item) => acc + item.count, 0)
);

const selectedValues = ref([]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function filterChange(e) {
  console.log("changed", e);
  const filerParam = {
    name: props.slug,
    value: selectedValues.value,
  };
  emit("change", filerParam);
}
</script>

<template>
  <CatalogFilterParamTitle> {{ name }} </CatalogFilterParamTitle>
  <div class="bg-light p-4 mb-30">
    <!--    <div
      class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
    >
      <input
        type="checkbox"
        class="custom-control-input"
        :checked="value"
        id="price-all"
        @change="selectAll"
      />
      <label class="custom-control-label" for="price-all">Все</label>
      &lt;!&ndash;      <span class="badge border fw-normal">{{ totalCount }}</span>&ndash;&gt;
    </div>-->
    <InputCheckbox
      label="Все"
      v-model="selectedValues"
      :id="`${name}-all`"
      :checked="selectedValues.length === values.length"
      @change="selectAll"
    ></InputCheckbox>
    <div
      v-for="filterValue in values"
      class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
    >
      <!--      <input
        type="checkbox"
        class="custom-control-input"
        id="price-1"
        :checked="filterValue === value"
        @change="valueChange(filterValue.name, filterValue.value)"
      />
      <label class="custom-control-label" for="price-1">{{
        filterValue.name
      }}</label>-->
      <InputCheckbox
        :label="filterValue.name"
        v-model="selectedValues"
        :value="filterValue.value"
        :id="`${name}-${filterValue.value}`"
        @change="filterChange"
      ></InputCheckbox>
      <!--      <span class="badge border fw-normal">{{ filterValue.count }}</span>-->
    </div>
  </div>
</template>

<style scoped></style>
