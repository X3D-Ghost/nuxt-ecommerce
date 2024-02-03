<script setup lang="ts"></script>

<template>
  <form class="quick-buy" v-bind="$attrs">
    <slot name="before"></slot>
    <slot>
      <button>Купить в 1 клик</button>
    </slot>
  </form>
</template>

<style scoped></style>
