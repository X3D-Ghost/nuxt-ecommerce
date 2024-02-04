<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
  },
});
</script>

<template>
  <nav class="mb-30" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <template v-for="item in items">
        <slot :item="item">
          <li class="breadcrumb-item">
            <nuxt-link class="text-dark" :to="item.url">
              {{ item.label }}
            </nuxt-link>
          </li>
        </slot>
      </template>
    </ol>
  </nav>
</template>

<style scoped></style>
