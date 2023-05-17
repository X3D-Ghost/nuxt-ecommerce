<script setup lang="ts">
const props = defineProps({
  current: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
});
const pages = computed(() => {
  const arr = [];
  for (let i = 0; i < props.count; i++) {
    arr[i] = i + 1;
  }
  return arr;
});
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-show="current === 0" class="page-item disabled">
        <nuxt-link class="page-link" href="#"> &lt; </nuxt-link>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        :class="['page-item', page === current ? 'active' : '']"
      >
        <nuxt-link class="page-link" :href="`?p=${page}`">{{ page }}</nuxt-link>
      </li>
      <li v-show="current != count - 1" class="page-item">
        <nuxt-link class="page-link" href="#"> > </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
