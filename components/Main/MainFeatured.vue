<script setup lang="ts">
const activeTab = ref(29);

const { data: featured, refresh } = await useFeatured({
  category: activeTab,
});

watch(activeTab, () => refresh());
</script>

<template>
  <section class="container-fluid pt-5">
    <div class="grid px-xl-5 pb-3">
      <div class="g-col-lg-3 g-col-md-6 g-col-12">
        <div class="d-flex align-items-center bg-light mb-4 p-5 h-100">
          <Icon :icon="['fas', 'check']" class="text-primary me-3" size="2xl" />
          <span class="h5 fw-semi-bold m-0">Качественная продукция</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
