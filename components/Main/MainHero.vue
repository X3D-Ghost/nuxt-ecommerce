<script setup lang="ts">
onMounted(() => {
  const { $bootstrap } = useNuxtApp();
  const carousel = new $bootstrap.Carousel("#header-carousel");
});
const slides = [
  "/img/carousel-1.jpg",
  "/img/carousel-2.jpg",
  "/img/carousel-3.jpg",
];
</script>

<template>
  <div class="container-fluid mb-3">
    <div class="grid px-xl-5 hero-grid" style="--bs-rows: 2">
      <div class="g-col-lg-8" style="grid-row: span 2">
        <Carousel :autoplay="2000" :wrap-around="true" class="hero-carousel">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item hero-carousel__item">
              <img class="" :src="slide" />
              <div
                class="hero-carousel__caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    Men Fashion
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                    duo stet amet amet ndiam elitr ipsum diam
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
          </Slide>

          <!--          <template #addons>-->
          <!--            <Pagination />-->
          <!--          </template>-->
        </Carousel>
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mb-lg-0"
          data-bs-ride="carousel"
          style="display: none"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              class="carousel-item position-relative active"
              style="height: 430px"
            >
              <img
                class="position-absolute w-100 h-100"
                src="/img/carousel-1.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    Men Fashion
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                    duo stet amet amet ndiam elitr ipsum diam
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="/img/carousel-2.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    Women Fashion
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                    duo stet amet amet ndiam elitr ipsum diam
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="/img/carousel-3.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    Kids Fashion
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                    duo stet amet amet ndiam elitr ipsum diam
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-col-lg-4">
        <div class="product-offer h-100">
          <img class="img-fluid" src="/img/offer-1.jpg" alt="" />
          <div class="offer-text">
            <h6 class="text-white text-uppercase">Save 20%</h6>
            <h3 class="text-white mb-3">Special Offer</h3>
            <a href="" class="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div class="g-col-lg-4">
        <div class="product-offer h-100">
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
</template>

<style lang="scss">
.hero-grid {
  height: 430px;
  grid-template-rows: 1fr 1fr;
}

.hero-carousel {
  &__item {
    position: relative;
    height: 100%;
    width: 100%;
  }
  img {
    width: 100%;
    height: 430px;
    object-fit: cover;
    //position: absolute;
  }
  &__caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(61, 70, 77, 0.5);
    z-index: 1;

    position: absolute;
    //right: 15%;
    //bottom: 1.25rem;
    //left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center;
  }
}

.carousel-indicators {
  //li {
  //    width: 15px;
  //    height: 15px;
  //    margin: 0 3px 12px 3px;
  //    background: transparent;
  //    border: 1px solid #FFFFFF;
  //    transition: .5s;
  //}
  .active {
    //width: 30px;
    //background: #FFFFFF;
  }
}
</style>
