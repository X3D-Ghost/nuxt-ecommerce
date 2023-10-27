<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const props = defineProps({ items: Array });
const emit = defineEmits(["remove"]);
const activeParams = inject("activeFilters");
const computedItems = computed(() => {
  const tmp_arr = [];
  if (activeParams.value)
    activeParams.value.forEach((item) => {
      item.values.forEach((valItem) => {
        tmp_arr.push({
          slug: item.slug,
          value: valItem.value,
          title: item.title,
          valueTitle: valItem.name,
        });
      });
    });
  return tmp_arr;
  /*activeParams.reduce((item, acc) => {
    })*/
});

function remove(param, value) {
  emit("remove", { param, value });
  console.log({ param, value });
  const queryParam = `f[${param.slug}]`;
  console.log(route.query[`f[${param.slug}]`]);
  const newQuery = { ...route.query };
  delete newQuery[queryParam];
  console.log(route.query);
  router.push({ query: newQuery, replace: true });
}
</script>

<template>
  <div class="filter-active-params">
    <slot name="before"></slot>
    <template v-for="item in computedItems" :key="`${item.slug}-${item.value}`">
      <slot name="item" v-bind="{ ...item, remove }">
        <button @click="remove(item.slug, item.value)">
          <span>{{ item.title }}: {{ item.valueTitle }}</span>
        </button>
      </slot>
    </template>
    <slot name="after"></slot>
  </div>
</template>

<style scoped>
.filter-active-params {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
