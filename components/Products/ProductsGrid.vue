<script setup lang="ts">
import ProductCard from "~/components/Products/ProductCard.vue";
</script>

<template>
  <div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pe-3">Featured Products</span>
    </h2>
    <div class="grid px-xl-5">
      <div class="g-col-lg-3 g-col-md-4 g-col-6">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
