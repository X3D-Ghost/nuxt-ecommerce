<script setup lang="ts">
const props = defineProps({
  items: Array,
  title: {
    type: String,
    default: "Категория",
  },
});
const arrayToTree = (arr, parent = 0) =>
  arr
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.id) }));
const nestedItems = arrayToTree(props.items);
</script>

<template>
  <div class="filter-categories">
    <slot name="header">
      <p>{{ title }}</p>
    </slot>
    <slot name="before-list"></slot>
    <slot name="list">
      <ul class="categories-list">
        <template v-for="item in nestedItems">
          <li>
            <slot name="item" v-bind="item">
              <CatalogFilterCategoresItem v-bind="item" />
            </slot>
          </li>
        </template>
      </ul>
    </slot>
    <slot name="after-list"></slot>
  </div>
</template>

<style scoped>
.categories-list {
  padding: 0;
  list-style: none;
}
</style>
