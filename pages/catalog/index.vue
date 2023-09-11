<script setup lang="ts">
const categories = await useFetch(
  `http://wootest.dev/wp-json/wc/v3/products/categories`,
  {
    query: {
      // slug: slug.value,
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      console.error(response);
    },
  }
);
</script>

<template>
  <div class="container-fluid">
    <div class="grid">
      <CatalogCategories :items="categories.data.value" />
    </div>
  </div>
</template>

<style scoped></style>
