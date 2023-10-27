<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

const categories = await useFetch(
  `${BACKEND_API_URL}/wc/v3/products/categories`,
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
      <CatalogCategories
        :items="categories.data.value"
        class="g-col-lg-2 g-col-md-4 g-col-6"
      />
    </div>
  </div>
</template>

<style scoped></style>
