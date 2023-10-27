<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
  },
});
</script>

<template>
  <div class="product-attributes">
    <slot name="title">
      <h4 class="mb-3">Характеристики</h4>
    </slot>
    <div class="">
      <template v-for="item in items">
        <slot v-bind="item">
          <dl>
            <dt>
              <p>{{ item.name }}</p>
            </dt>
            <dd>{{ item.value ?? item.options.join(", ") }}</dd>
          </dl>
        </slot>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
