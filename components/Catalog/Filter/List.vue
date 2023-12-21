<script setup lang="ts">
const props = defineProps({
  params: {
    type: Array,
    requied: true,
    default: () => [],
  },
  listComponent: {
    type: [Object, String],
    default: "div",
  },
  itemComponent: {
    type: [Object, String],
    default: "div",
  },
  listComponentProps: {
    type: Array,
  },
  itemComponentProps: {
    type: Array,
  },
  itemNoTitle: Boolean,
  openParamClass: {
    type: String,
    default: "open",
  },
});
const emits = defineEmits(["change", "update"]);
console.log(props.params);
const filters = computed(() => {
  console.log(props.params);
  return (
    props.params &&
    props.params.map((item) => ({
      ...item,
    }))
  );
});

function filterChange(param) {
  emits("update", param);
}
</script>

<template>
  <div class="filter">
    <slot name="before" :filters="filters" :filterChange="filterChange"></slot>
    <component :is="listComponent" v-bind="listComponentProps">
      <!--      <template v-for="filter in filters">-->
      <!--        <slot v-bind="{ filter, filterChange }" @change="filterChange">-->
      <component
        v-for="filter in filters"
        :key="filter.name"
        :is="itemComponent"
        v-bind="itemComponentProps"
      >
        <CatalogFilterParam
          v-bind="filter"
          :open-class="openParamClass"
          :no-title="itemNoTitle"
          @change="filterChange"
        >
          <template #header="{ header, showToggle, isOpen }">
            <slot
              name="header"
              :header="header"
              :showToggle="showToggle"
              :isOpen="isOpen"
            ></slot>
          </template>
        </CatalogFilterParam>
      </component>
      <!--        </slot>-->
      <!--      </template>-->
    </component>
    <slot name="after" :filters="filters" :filterChange="filterChange"></slot>
  </div>
</template>

<style scoped></style>
