<script setup lang="ts">
const modules = []; // TODO: replace for composable
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
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
  carouselComponent: {
    type: [Object, String],
    default: "div",
  },
  itemComponent: {
    type: [Object, String],
    default: "div",
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
      <component
        :is="carouselComponent"
        direction="vertical"
        :modules="modules"
        watch-slides-progress
        :slides-per-view="5"
        free-mode
        :pagination="{
          clickable: true,
        }"
        class="image-carousel__thumb-track"
        slide-active-class="active"
        @swiper="setThumbsSwiper"
      >
        <component
          :is="itemComponent"
          v-for="image in images"
          :key="image.src"
          v-slot="{ isActive }"
          class="carousel__item image-carousel__thumb"
          :class="isActive && 'active'"
        >
          <slot name="thumb" :src="image.src" :is-active="isActive">
            <img
              class="image-carousel__thumb-image"
              :class="isActive && 'active'"
              :src="image.src"
              alt="Image"
            />
          </slot>
        </component>
      </component>
    </div>
    <div class="g-col-12 g-col-md-10 image-carousel">
      <component
        :is="carouselComponent"
        ref="carousel"
        :navigation="true"
        autoplay
        prefix="image-carousel"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class=""
      >
        <component :is="itemComponent" v-for="image in images" :key="image.src">
          <div class="carousel__item image-carousel__item">
            <slot name="image" :src="image.src">
              <img class="w-100 h-100" :src="image.src" alt="Image" />
            </slot>
          </div>
        </component>
      </component>
    </div>
  </div>
</template>

<style lang="scss">
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
