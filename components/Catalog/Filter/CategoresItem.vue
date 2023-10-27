<script setup lang="ts">
const props = defineProps({
  name: String,
  slug: String,
  children: Array,
});
</script>

<template>
  <div>
    <nuxt-link :to="slug">
      <slot v-bind="{ name, slug }">
        <p>
          {{ name }}
        </p>
      </slot>
    </nuxt-link>
    <slot name="children" v-bind="children">
      <ul>
        <CategoresItem v-for="child in children" v-bind="child"></CategoresItem>
      </ul>
    </slot>
  </div>
</template>

<style scoped></style>
