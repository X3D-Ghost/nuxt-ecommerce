<script setup lang="ts">
const catalog = useCatalog();

const filter = await useFiltering();
const category = await useCategory();

const products = ref(catalog.products);
const categoryData = reactive(catalog.categoryData);
const categories = category.items;
const filterParams = filter.filterParams;

function filterUpdate(param) {
  filter.update(param);
}

const sortingItems = [
  { label: "Сначала дешевые", slug: "price", order: "asc" },
  { label: "Сначала дорогие", slug: "price", order: "desc" },
  { label: "Новинки", slug: "date", order: "desc" },
];
const breadcrumbItems = [{ text: "Главная", href: "/" }, { text: "Каталог" }];
</script>

<template>
  <div class="container">
    <Breadcrumbs :items="breadcrumbItems" />
    <PageTitle> {{ categoryData?.name }} </PageTitle>
    <div class="grid">
      <aside class="g-col-12 g-col-lg-3">
        <LazyCatalogFilterCategories v-if="categories" :items="categories">
          <template #item="{ slug, name }"> </template>
        </LazyCatalogFilterCategories>
        <LazyCatalogFilterList
          v-if="filterParams"
          :params="filterParams"
          @update="filterUpdate"
        >
          <template #title="{ title }">{{ title }} </template>
        </LazyCatalogFilterList>
      </aside>
      <div class="g-col-12 g-col-lg-9">
        <CatalogSorting :items="sortingItems" />
        <CatalogProductList :items="products" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
