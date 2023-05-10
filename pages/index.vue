<script setup lang="ts">
import MainHero from "~/components/Main/MainHero.vue";
import MainFeatured from "~/components/Main/MainFeatured.vue";
import MainCategories from "~/components/Main/MainCategories.vue";
import ProductsGrid from "~/components/Products/ProductsGrid.vue";
import VendorList from "~/components/Common/VendorList.vue";
</script>

<template>
  <!-- Carousel Start -->
  <MainHero />
  <!-- Carousel End -->

  <!-- Featured Start -->
  <MainFeatured />
  <!-- Featured End -->

  <!-- Categories Start -->
  <MainCategories />
  <!-- Categories End -->

  <!-- Products Start -->
  <ProductsGrid />
  <!-- Products End -->

  <!-- Offer Start -->
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
  <!-- Offer End -->

  <!-- Vendor Start -->
  <VendorList />
  <!-- Vendor End -->
</template>

<style scoped></style>
