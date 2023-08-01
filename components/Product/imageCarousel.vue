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
    <div class="g-col-12 g-col-md-2 image-carousel__thumbs">
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
      class="g-col-12 g-col-md-10 image-carousel"
    >
      <Slide v-for="image in images" :key="image.src">
        <div class="carousel__item image-carousel__item">
          <img class="w-100 h-100" :src="`/img/${image.src}`" alt="Image" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/mixins";
.image-carousel {
  &__wrapper {
    display: grid;
  }
  &__thumbs {
    overflow-x: scroll;
    @include media-breakpoint-down(md) {
      grid-row: 2;
    }
  }
  &__thumb-track {
    @include media-breakpoint-up(md) {
      --bs-columns: 1;
    }
    @include media-breakpoint-down(md) {
      grid-auto-columns: 100px;
    }
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
