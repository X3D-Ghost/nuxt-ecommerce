<script setup lang="ts">
const { data: inQuery } = await useAsyncData("in", () => {
  return queryContent("/vendors").find();
});
</script>

<template>
  <div class="container-fluid py-5">
    <div class="px-xl-5">
      <div class="carousel vendor-carousel grid" style="--bs-columns: 8">
        <div
          v-for="item in inQuery"
          class="card bg-light p-4 g-col-2 g-col-lg-1"
        >
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
