<script setup lang="ts"></script>

<template>
  <MainHero />
  <MainFeatured />
  <BaseSection title="Каты">
    <template #title>Категории</template>
    <MainCategories />
  </BaseSection>
  <div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pe-3">Featured Products</span>
    </h2>
  </div>
  <div class="container-fluid pt-5 pb-3">
    <div class="row px-xl-5">
      <div class="col-md-6">
        <div class="product-offer mb-30" style="height: 300px">
          <img class="img-fluid" src="/img/offer-1.jpg" alt="" />
          <div class="offer-text">
            <h6 class="text-white text-uppercase">Save 20%</h6>
            <h3 class="text-white mb-3">Special Offer</h3>
            <a href="" class="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-offer mb-30" style="height: 300px">
          <img class="img-fluid" src="/img/offer-2.jpg" alt="" />
          <div class="offer-text">
            <h6 class="text-white text-uppercase">Save 20%</h6>
            <h3 class="text-white mb-3">Special Offer</h3>
            <a href="" class="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CommonVendorList />
</template>

<style scoped></style>
