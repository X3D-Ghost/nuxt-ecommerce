<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  slug: String,
  price: String,
  images: {
    type: Array,
    default: () => [],
  },
});
const image = props.images && props.images[0];
</script>

<template>
  <div class="card product-item">
    <div class="product-img position-relative overflow-hidden">
      <img
        v-if="image"
        class="img-fluid w-100"
        :src="image.src"
        :alt="image.alt"
      />
      <div class="product-action">
        <a class="btn btn-outline-dark btn-square" href="">
          <Icon icon="fa-solid fa-shopping-cart" />
        </a>
        <a class="btn btn-outline-dark btn-square" href="">
          <Icon icon="fa-regular fa-heart" />
        </a>
        <a class="btn btn-outline-dark btn-square" href="">
          <Icon icon="fa-solid fa-sync-alt" />
        </a>
        <a class="btn btn-outline-dark btn-square" href="">
          <Icon icon="fa-solid fa-search" />
        </a>
      </div>
    </div>
    <div class="text-center py-4">
      <nuxt-link
        class="h6 text-decoration-none text-truncate"
        :to="`/product/${slug}`"
      >
        {{ name }}
      </nuxt-link>
      <div class="d-flex align-items-center justify-content-center mt-2">
        <h5>{{ price }}</h5>
        <h6 class="text-muted ms-2"><del>$123.00</del></h6>
      </div>
      <div class="d-flex align-items-center justify-content-center mb-1">
        <Icon icon="fa-solid fa-star" class="text-primary me-1" />
        <Icon icon="fa-solid fa-star" class="text-primary me-1" />
        <Icon icon="fa-solid fa-star" class="text-primary me-1" />
        <Icon icon="fa-solid fa-star" class="text-primary me-1" />
        <Icon icon="fa-solid fa-star" class="text-primary me-1" />
        <small>(99)</small>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
