<script setup lang="ts">
const props = defineProps({
  params: Array,
});
const filters = [
  {
    title: "По цене",
    type: "checkbox",
    values: [
      {
        title: "0-100",
        value: "0-100",
      },
      {
        title: "100-200",
        value: "100-200",
      },
      {
        title: "200-300",
        value: "200-300",
      },
    ],
  },
];
</script>

<template>
  <div>
    <!-- Price Start -->
    <CatalogFilterParamTitle> По цене </CatalogFilterParamTitle>
    <div class="bg-light p-4 mb-30">
      <form>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input
            type="checkbox"
            class="custom-control-input"
            checked
            id="price-all"
          />
          <label class="custom-control-label" for="price-all">All Price</label>
          <span class="badge border fw-normal">1000</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="price-1" />
          <label class="custom-control-label" for="price-1">$0 - $100</label>
          <span class="badge border fw-normal">150</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="price-2" />
          <label class="custom-control-label" for="price-2">$100 - $200</label>
          <span class="badge border fw-normal">295</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="price-3" />
          <label class="custom-control-label" for="price-3">$200 - $300</label>
          <span class="badge border fw-normal">246</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="price-4" />
          <label class="custom-control-label" for="price-4">$300 - $400</label>
          <span class="badge border fw-normal">145</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between"
        >
          <input type="checkbox" class="custom-control-input" id="price-5" />
          <label class="custom-control-label" for="price-5">$400 - $500</label>
          <span class="badge border fw-normal">168</span>
        </div>
      </form>
    </div>
    <!-- Price End -->

    <!-- Color Start -->
    <CatalogFilterParamTitle> По цвету </CatalogFilterParamTitle>
    <div class="bg-light p-4 mb-30">
      <form>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input
            type="checkbox"
            class="custom-control-input"
            checked
            id="color-all"
          />
          <label class="custom-control-label" for="price-all">All Color</label>
          <span class="badge border fw-normal">1000</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="color-1" />
          <label class="custom-control-label" for="color-1">Black</label>
          <span class="badge border fw-normal">150</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="color-2" />
          <label class="custom-control-label" for="color-2">White</label>
          <span class="badge border fw-normal">295</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="color-3" />
          <label class="custom-control-label" for="color-3">Red</label>
          <span class="badge border fw-normal">246</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="color-4" />
          <label class="custom-control-label" for="color-4">Blue</label>
          <span class="badge border fw-normal">145</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between"
        >
          <input type="checkbox" class="custom-control-input" id="color-5" />
          <label class="custom-control-label" for="color-5">Green</label>
          <span class="badge border fw-normal">168</span>
        </div>
      </form>
    </div>
    <!-- Color End -->

    <!-- Size Start -->
    <CatalogFilterParamTitle> По размеру </CatalogFilterParamTitle>
    <div class="bg-light p-4 mb-30">
      <form>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input
            type="checkbox"
            class="custom-control-input"
            checked
            id="size-all"
          />
          <label class="custom-control-label" for="size-all">All Size</label>
          <span class="badge border fw-normal">1000</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="size-1" />
          <label class="custom-control-label" for="size-1">XS</label>
          <span class="badge border fw-normal">150</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="size-2" />
          <label class="custom-control-label" for="size-2">S</label>
          <span class="badge border fw-normal">295</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="size-3" />
          <label class="custom-control-label" for="size-3">M</label>
          <span class="badge border fw-normal">246</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
        >
          <input type="checkbox" class="custom-control-input" id="size-4" />
          <label class="custom-control-label" for="size-4">L</label>
          <span class="badge border fw-normal">145</span>
        </div>
        <div
          class="custom-control custom-checkbox d-flex align-items-center justify-content-between"
        >
          <input type="checkbox" class="custom-control-input" id="size-5" />
          <label class="custom-control-label" for="size-5">XL</label>
          <span class="badge border fw-normal">168</span>
        </div>
      </form>
    </div>
    <!-- Size End -->
  </div>
</template>

<style scoped></style>
