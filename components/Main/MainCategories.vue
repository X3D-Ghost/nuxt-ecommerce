<script setup>
const { data } = await useAsyncData("/categories", () =>
  queryContent("/categories").findOne()
);
const items = data.value.body;
</script>

<template>
  <div class="grid px-xl-5 pb-3">
    <div v-for="item in items" class="g-col-lg-2 g-col-md-4 g-col-6">
      <a class="text-decoration-none" :href="`category/${item.title}`">
        <div class="cat-item d-flex align-items-center">
          <div class="overflow-hidden" style="width: 100px; height: 100px">
            <img class="img-fluid" :src="item.imgSrc" :alt="item.title" />
          </div>
          <div class="flex-fill ps-3">
            <h6>{{ item.title }}</h6>
            <!--              <small class="text-body">{{ item.count }} продуктов</small>-->
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
