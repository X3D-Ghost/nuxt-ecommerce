<script setup lang="ts">
onMounted(() => {
  const { $bootstrap } = useNuxtApp();
  const carousel = new $bootstrap.Carousel("#header-carousel");
});
</script>

<template>
  <div class="container-fluid mb-3">
    <div class="grid px-xl-5" style="--bs-rows: 2">
      <div class="g-col-lg-8" style="grid-row: span 2">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mb-lg-0"
          data-bs-ride="carousel"
        >
          <!--          <ol class="carousel-indicators">
            <li
              data-bs-target="#header-carousel"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li data-bs-target="#header-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#header-carousel" data-bs-slide-to="2"></li>
          </ol>-->
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

<style scoped></style>
