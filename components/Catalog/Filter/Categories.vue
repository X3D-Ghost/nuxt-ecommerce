<script setup lang="ts">
const props = defineProps({
  items: Array,
});
// console.log(props.items);
/*const { data } = await useAsyncData("/categories", () =>
  queryContent("/categories").findOne()
);
const items = data.value.body;*/
const arrayToTree = (arr, parent = 0) =>
  arr
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.id) }));
const nestedItems = arrayToTree(props.items);
</script>

<template>
  <slot name="list">
    <ul>
      <slot name="item">
        <CatalogFilterCategoresItem v-for="item in nestedItems" v-bind="item" />
      </slot>
    </ul>
  </slot>
</template>

<style scoped></style>
