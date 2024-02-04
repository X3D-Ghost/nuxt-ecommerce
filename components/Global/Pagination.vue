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
const pages = Array(props.count);
const { query } = useRoute();
const router = useRoute();

const prevPage = computed(() => props.current - 1);
const nextPage = computed(() => props.current + 1);
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li
        v-show="current === 0"
        class="page-item"
        :class="{ disabled: current === 1 }"
      >
        <nuxt-link
          class="page-link"
          :to="{ pathname: router.path, query: { ...query, page: prevPage } }"
          :disabled="current === 1"
          replace
        >
          &lt;
        </nuxt-link>
      </li>
      <li
        v-for="page in count"
        :key="`pagination-link-${page}`"
        :class="['page-item', page === current ? 'active' : '']"
      >
        <nuxt-link
          class="page-link"
          :class="{ active: current === page }"
          :to="{ pathname: router.path, query: { ...query, page: page } }"
          replace
          >{{ page }}</nuxt-link
        >
      </li>
      <li v-show="current != count - 1" class="page-item">
        <nuxt-link
          class="page-link"
          :to="{ pathname: router.path, query: { ...query, page: nextPage } }"
          replace
        >
          >
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
