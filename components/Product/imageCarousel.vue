<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array,
  },
});
const currentSlide = ref(0);
</script>

<template>
  <div class="grid image-carousel__wrapper">
    <div class="g-col-2 image-carousel__thumbs">
      <div class="grid image-carousel__thumb-track">
        <div
          v-for="(image, i) in images"
          :key="image.src"
          class="carousel__item image-carousel__thumb"
          :class="i === currentSlide && 'active'"
          @click="currentSlide = i"
        >
          <img
            class="image-carousel__thumb-image"
            :src="`/img/${image.src}`"
            alt="Image"
          />
        </div>
      </div>
    </div>
    <Carousel
      :autoplay="2000"
      :wrap-around="true"
      v-model="currentSlide"
      class="g-col-10 image-carousel"
    >
      <Slide v-for="image in images" :key="image.src">
        <div class="carousel__item image-carousel__item">
          <img class="w-100 h-100" :src="`/img/${image.src}`" alt="Image" />
        </div>
      </Slide>

      <!--      <template #addons>
        <Pagination />
      </template>-->
    </Carousel>

    <!--    <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner bg-light">
        <div
          v-for="(image, i) in images"
          class="carousel-item"
          :class="i === 0 && 'active'"
        >
          <img class="w-100 h-100" :src="`/img/${image.src}`" alt="Image" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        href="#product-carousel"
        data-slide="prev"
      >
        <Icon icon="fa-solid fa-angle-left" class="text-dark" size="2x" />
      </button>
      <button
        class="carousel-control-next"
        href="#product-carousel"
        data-slide="next"
      >
        <Icon icon="fa-solid fa-angle-right" class="text-dark" size="2x" />
      </button>
    </div>-->
  </div>
</template>

<style lang="scss">
.image-carousel {
  &__wrapper {
    display: grid;
  }
  &__thumbs {
    //display: flex;
    //flex-direction: column;
  }
  &__thumb-track {
    //display: flex;
    --bs-columns: 1;
  }
  &__thumb {
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    cursor: pointer;
    &.active {
      border: 2px solid $primary;
    }
  }
  &__thumb-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
