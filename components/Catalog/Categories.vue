<script setup lang="ts">
const props = defineProps({
  items: Array,
});
</script>

<template>
  <div v-for="item in items">
    <a class="text-decoration-none" :href="`catalog/${item.slug}`">
      <div class="cat-item d-flex align-items-center">
        <div class="overflow-hidden" style="width: 100px; height: 100px">
          <img
            v-if="item.image"
            class="img-fluid"
            :src="item.image.src"
            :alt="item.image.name"
          />
        </div>
        <div class="flex-fill ps-3">
          <h6>{{ item.name }}</h6>
          <small class="text-body">{{ item.count }} продуктов</small>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped></style>
