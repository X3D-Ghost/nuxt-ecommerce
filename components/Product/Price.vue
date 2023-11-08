<script setup lang="ts">
const props = defineProps({
  price: {
    type: [String, Number],
    default: 0,
  },
  oldPrice: {
    type: [String, Number],
    default: null,
  },
  discount: {
    type: [String, Number],
    default: null,
  },
  currency: {
    type: String,
    default: "руб",
  },
  discountComponent: {
    type: [String, Object],
    default: "span",
  },
});
</script>

<template>
  <div class="product-price__wrapper">
    <slot name="price" v-bind="{ price }">
      <span class="product-price__value product-price__value_new">
        {{ price }} {{ currency }}
      </span>
    </slot>
    <slot name="discount" v-bind="{ discount }">
      <component
        :is="discountComponent"
        class="product-price__discount text-light"
        pill
        variant="danger"
      >
        -30%
      </component>
    </slot>
    <slot v-if="oldPrice" name="oldPrice" v-bind="{ oldPrice }">
      <span class="product-price__value product-price__value_old">
        {{ oldPrice }} {{ currency }}
      </span>
    </slot>
  </div>
</template>

<style lang="scss">
.product-price__wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  @include media-breakpoint-up(md) {
    gap: 0.5rem;
    grid-template-columns: auto auto 1fr;
  }
}
.product-price {
  &__value {
    &_new {
      font-size: 14px;
      font-weight: 700;
      @include media-breakpoint-up(lg) {
        font-size: 20px;
      }
    }
    &_old {
      font-size: 14px;
      position: relative;
      text-decoration: line-through;
      text-decoration-color: red;
      @include media-breakpoint-up(lg) {
        text-align: right;
      }
    }
  }
  &__discount {
    background-color: $red;
    border-color: $red;
    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    padding: 4px;
    line-height: 1;
    @include media-breakpoint-down(lg) {
      grid-row: 1/3;
      grid-column-end: 3;
      padding: 0.5rem;
    }
  }
}
</style>
