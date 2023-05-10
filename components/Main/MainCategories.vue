<script setup>
const { data } = await useAsyncData("/categories", () =>
  queryContent("/categories").findOne()
);
const items = data.value?.body;
</script>

<template>
  <div class="container-fluid pt-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pe-3">Категории</span>
    </h2>
    <div class="grid px-xl-5 pb-3">
      <div v-for="item in items" class="g-col-lg-2 g-col-md-4 g-col-6">
        <a class="text-decoration-none" :href="`category/${item.title}`">
          <div class="cat-item d-flex align-items-center">
            <div class="overflow-hidden" style="width: 100px; height: 100px">
              <img class="img-fluid" :src="item.imgSrc" :alt="item.title" />
            </div>
            <div class="flex-fill ps-3">
              <h6>{{ item.title }}</h6>
              <small class="text-body">{{ item.count }} продуктов</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
