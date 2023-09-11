import "vue3-carousel/dist/carousel.css";
import {
  Carousel,
  Slide,
  Pagination as CarouselPagination,
  Navigation as CarouselNavigation,
} from "vue3-carousel";
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.component("Carousel", Carousel);
  NuxtApp.vueApp.component("CarouselSlide", Slide);
  NuxtApp.vueApp.component("CarouselPagination", CarouselPagination);
  NuxtApp.vueApp.component("CarouselNavigation", CarouselNavigation);
});
