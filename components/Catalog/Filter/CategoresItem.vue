<script setup lang="ts">
const props = defineProps({
  name: String,
  slug: String,
  children: Array,
});
</script>

<template>
  <li>
    <nuxt-link :to="slug">{{ name }}</nuxt-link>
    <slot></slot>
    <ul>
      <CategoresItem v-for="child in children" v-bind="child"></CategoresItem>
    </ul>
  </li>
</template>

<style scoped></style>
