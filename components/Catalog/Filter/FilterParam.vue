<script setup lang="ts">
import { computed, defineEmits } from "vue";
import FilterParamBody from "~/components/Catalog/Filter/FilterParamBody.vue";

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
  noTitle: Boolean,
  itemComponent: {
    type: [Object, String],
    default: "div",
  },
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
// Object.assign(selectedValues, props.value);
selectedValues.value.push(...props.value);

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
  <component :is="itemComponent" class="filter__param" :title="name">
    <slot v-bind="{ filterChange, values, name }">
      <slot v-if="!noTitle" name="header" :title="name">
        <CatalogFilterParamTitle> {{ name }} </CatalogFilterParamTitle>
      </slot>
      <FilterParamBody>
        <!--        <InputCheckbox
          label="Все"
          v-model="selectedValues"
          :id="`${name}-all`"
          :checked="selectedValues.length === values.length"
          @change="selectAll"
        ></InputCheckbox>-->
        <template v-for="filterValue in values" :key="filterValue.value">
          <slot
            name="body"
            v-bind="{ filterValue, filterChange, selectedValues, name }"
          >
            <div
              class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <InputCheckbox
                :text="filterValue.name"
                v-model="selectedValues"
                :value="filterValue.value"
                :id="`${name}-${filterValue.value}`"
                @change="filterChange"
              ></InputCheckbox>
            </div>
          </slot>
        </template>
      </FilterParamBody>
    </slot>
  </component>
</template>

<style scoped>
.filter__param {
}
</style>
