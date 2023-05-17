import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.component("Carousel", Carousel);
  NuxtApp.vueApp.component("Slide", Slide);
  NuxtApp.vueApp.component("Pagination", Pagination);
  NuxtApp.vueApp.component("Navigation", Navigation);
});
