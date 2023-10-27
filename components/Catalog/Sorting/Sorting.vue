<script setup lang="ts">
const props = defineProps({
  items: Array,
});
</script>

<template>
  <div>
    <slot name="before"></slot>
    <div>
      <slot>
        <template v-for="item in items">
          <slot name="item" :item="item">
            <!--            <NuxtLink
              :to="{ query: { orderby: item.slug, order: item.order } }"
              >{{ item.name }}</NuxtLink
            >-->
            <CatalogSortingItem v-bind="item"></CatalogSortingItem>
          </slot>
        </template>
      </slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<style scoped></style>
