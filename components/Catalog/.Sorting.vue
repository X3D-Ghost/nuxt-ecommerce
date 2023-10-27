<script setup lang="ts"></script>

<template>
  <div class="d-flex align-items-center justify-content-between mb-4">
    <div>
      <button class="btn btn-sm btn-light">
        <Icon icon="fa-solid fa-th-large" />
      </button>
      <button class="btn btn-sm btn-light ms-2">
        <Icon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div class="ms-2">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-sm btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Sorting
        </button>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">Latest</a>
          <a class="dropdown-item" href="#">Popularity</a>
          <a class="dropdown-item" href="#">Best Rating</a>
        </div>
      </div>
      <div class="btn-group ms-2">
        <button
          type="button"
          class="btn btn-sm btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Showing
        </button>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">10</a>
          <a class="dropdown-item" href="#">20</a>
          <a class="dropdown-item" href="#">30</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
