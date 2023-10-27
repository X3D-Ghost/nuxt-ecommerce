<script setup></script>
<template>
  <keep-alive>
    <BaseHeader />
  </keep-alive>
  <!-- Breadcrumb Start -->
  <div class="container-fluid px-5">
    <Breadcrumbs />
  </div>
  <!-- Breadcrumb End -->
  <slot />
  <keep-alive> <BaseFooter /></keep-alive>
  <!-- Back to Top -->
  <a href="#" class="btn btn-primary back-to-top"
    ><i class="fa fa-angle-double-up"></i
  ></a>
</template>

<style scoped></style>
