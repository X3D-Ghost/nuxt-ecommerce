<script setup lang="ts">
const props = defineProps({
  items: Array,
});

const sorting = useSorting();

const { order, orderby } = sorting;
</script>

<template>
  <div class="sorting">
    <slot name="before"></slot>
    <div class="sorting__list">
      <slot>
        <template v-for="(item, i) in items" :key="item.key ?? i">
          <slot name="item" :item="item">
            <CatalogSortingItem v-bind="item">
              <template #icon>
                <slot
                  :name="item.key ? `icon-${item.key}` : 'default-icon'"
                ></slot>
              </template>
            </CatalogSortingItem>
          </slot>
        </template>
      </slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<style lang="scss">
.sorting {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
