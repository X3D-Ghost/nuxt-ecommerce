<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <ClientOnly>
    <FontAwesomeIcon v-bind="$attrs" />
  </ClientOnly>
</template>
