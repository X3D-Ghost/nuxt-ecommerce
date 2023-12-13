<script setup lang="ts">
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const modules = [FreeMode, Navigation, Thumbs];
const props = defineProps({
  images: {
    type: Array,
  },
  showThumbs: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: "vertical",
    validator(value: string): boolean {
      return ["horizontal", "vertical"].includes(value);
    },
  },
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const carousel = ref(null);
</script>

<template>
  <div class="grid image-carousel__wrapper gap-0">
    <div v-if="showThumbs" class="g-col-12 g-col-md-2 image-carousel__thumbs">
      <Swiper
        direction="vertical"
        :modules="modules"
        watchSlidesProgress
        :slidesPerView="5"
        freeMode
        :pagination="{
          clickable: true,
        }"
        class="image-carousel__thumb-track"
        @swiper="setThumbsSwiper"
      >
        <SwiperSlide
          v-for="(image, i) in images"
          :key="image.src"
          class="carousel__item image-carousel__thumb"
        >
          <slot name="thumb" :src="image.src">
            <img
              class="image-carousel__thumb-image"
              :src="image.src"
              alt="Image"
            />
          </slot>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="g-col-12 g-col-md-10 image-carousel">
      <Swiper
        :navigation="true"
        ref="carousel"
        autoplay
        prefix="image-carousel"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class=""
      >
        <SwiperSlide v-for="image in images" :key="image.src">
          <div class="carousel__item image-carousel__item">
            <slot name="image" :src="image.src">
              <img class="w-100 h-100" :src="image.src" alt="Image" />
            </slot>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/mixins";
.image-carousel {
  &__wrapper {
    display: grid;
    max-height: 50vh;
  }
  &__thumbs {
    max-height: 100%;
    @include media-breakpoint-down(md) {
      grid-row: 2;
      overflow-x: scroll;
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
