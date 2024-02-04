<script setup lang="ts"></script>

<template>
  <!-- Shop Start -->
  <div class="container-fluid">
    <div class="grid px-xl-5">
      <!-- Shop Sidebar Start -->
      <div class="g-col-xxl-2 g-col-lg-3 g-col-md-4">
        <CatalogFilterList />
      </div>
      <!-- Shop Sidebar End -->

      <!-- Shop Product Start -->
      <div class="g-col-xxl-10 g-col-lg-9 g-col-md-8">
        <CatalogSorting />
      </div>
      <div class="g-col-xxl-10 g-col-lg-9 g-col-md-8">
        <Pagination :count="5" :current="1" />
      </div>
      <!-- Shop Product End -->
    </div>
  </div>
  <!-- Shop End -->
</template>

<style scoped></style>
