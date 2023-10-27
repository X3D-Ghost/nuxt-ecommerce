<script setup lang="ts">
import { Thumbs } from "swiper/modules";
const props = defineProps({
  images: {
    type: Array,
  },
});
const currentSlide = ref(0);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const carousel = ref(null);
</script>

<template>
  <div class="grid image-carousel__wrapper gap-0">
    <div class="g-col-12 g-col-md-2 image-carousel__thumbs">
      <!--      <div class="grid image-carousel__thumb-track">
        <div
          v-for="(image, i) in images"
          :key="image.src"
          class="carousel__item image-carousel__thumb"
          :class="i === currentSlide && 'active'"
          @click="currentSlide = i"
        >
          <img
            class="image-carousel__thumb-image"
            :src="image.src"
            alt="Image"
          />
        </div>
      </div>-->
      <Swiper
        :modules="[Thumbs]"
        watch-slides-progress
        @swiper="setThumbsSwiper"
        vertical
      >
        <SwiperSlide v-for="(image, i) in images">
          <div
            v-for="(image, i) in images"
            :key="image.src"
            class="carousel__item image-carousel__thumb"
            :class="i === currentSlide && 'active'"
            @click="currentSlide = i"
          >
            <slot name="thumb" :src="image.src">
              <img
                class="image-carousel__thumb-image"
                :src="image.src"
                alt="Image"
              />
            </slot>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="g-col-12 g-col-md-10 image-carousel">
      <Swiper
        ref="carousel"
        autoplay
        :wrap-around="true"
        v-model="currentSlide"
        :zoom="true"
        prefix="image-carousel"
        :activeIndex="currentSlide"
        :thumbs="{ swiper: thumbsSwiper || null }"
        :modules="[Thumbs]"
        class=""
      >
        <SwiperSlide v-for="image in images" :key="image.src">
          <div class="carousel__item image-carousel__item">
            <slot name="image" :src="image.src">
              <img class="w-100 h-100" :src="image.src" alt="Image" />
            </slot>
          </div>
        </SwiperSlide>
        <!--      <template #addons>
				&lt;!&ndash;        <CarouselPagination />&ndash;&gt;
				&lt;!&ndash;        <Carouselnavigation />&ndash;&gt;
							</template>-->
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/mixins";
.image-carousel {
  &__wrapper {
    display: grid;
  }
  &__thumbs {
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
