<script setup lang="ts"></script>

<template>
  <div class="container-fluid pt-5">
    <div class="grid px-xl-5 pb-3">
      <div class="g-col-lg-3 g-col-md-6 g-col-12">
        <div class="d-flex align-items-center bg-light mb-4 p-5 h-100">
          <Icon :icon="['fas', 'check']" class="text-primary me-3" size="2xl" />
          <span class="h5 fw-semi-bold m-0">Качественная продукция</span>
        </div>
      </div>
      <div class="g-col-lg-3 g-col-md-6 g-col-12">
        <div class="d-flex align-items-center bg-light mb-4 p-5 h-100">
          <Icon
            :icon="['fas', 'truck-fast']"
            class="text-primary me-2"
            size="2xl"
          />
          <h5 class="fw-semi-bold m-0">Бесплатная доставка</h5>
        </div>
      </div>
      <div class="g-col-lg-3 g-col-md-6 g-col-12">
        <div class="d-flex align-items-center bg-light mb-4 p-5 h-100">
          <Icon
            icon="fa-solid fa-exchange-alt"
            class="text-primary me-3"
            size="2xl"
          />
          <h5 class="fw-semi-bold m-0">14 Дней на возврат</h5>
        </div>
      </div>
      <div class="g-col-lg-3 g-col-md-6 g-col-12">
        <div class="d-flex align-items-center bg-light mb-4 p-5 h-100">
          <Icon
            icon="fa-solid fa-phone-volume"
            class="text-primary me-3"
            size="2xl"
          />
          <h5 class="fw-semi-bold m-0">24/7 Поддержка</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
