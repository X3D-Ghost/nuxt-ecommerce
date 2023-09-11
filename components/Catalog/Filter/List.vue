<script setup lang="ts">
const props = defineProps({
  params: {
    type: Array,
    requied: true,
    default: () => [],
  },
});
const emits = defineEmits(["change", "update"]);
const filters = computed(() => {
  return props.params.map((item) => ({
    ...item,
  }));
});

function filterChange(param) {
  // console.log("changed", values);
  // console.log("changed", values.join(","));
  emits("update", param);
}
</script>

<template>
  <div class="catalog-filter">
    <CatalogFilterParam
      v-for="filter in filters"
      v-bind="filter"
      @change="filterChange"
    >
    </CatalogFilterParam>
  </div>
</template>

<style scoped></style>
