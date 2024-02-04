<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const store = useCartStore();
const { getTotalPrice, getTotalDiscount } = storeToRefs(store);
const { increment, items, changeQuantity, removeProduct } = store;

const shippingCost = ref(500);
const totalSum = computed(() => shippingCost.value + getTotalPrice.value);
</script>

<template>
  <div class="row px-xl-5">
    <div class="col-lg-8 table-responsive mb-5">
      <table
        class="table table-light table-borderless table-hover text-center mb-0"
      >
        <thead class="thead-dark">
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <CartItem
            v-for="item in items"
            v-bind="item"
            @change="(val) => changeQuantity(item.id, val)"
            @delete="(id) => removeProduct(id)"
          />
        </tbody>
      </table>
    </div>
    <div class="col-lg-4">
      <div class="bg-light p-30 mb-5">
        <div class="border-bottom pb-2">
          <div class="d-flex justify-content-between mb-3">
            <h6>Итого</h6>
            <h6>{{ getTotalPrice }}</h6>
          </div>
          <div class="d-flex justify-content-between mb-3">
            <h6>Общий размер скидки</h6>
            <h6>{{ getTotalDiscount }}</h6>
          </div>
        </div>
        <div class="pt-2">
          <form class="mb-3" action="">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 p-2"
                placeholder="Промокод"
              />
              <button class="btn btn-primary">Применить</button>
            </div>
          </form>
          <button class="btn btn-block w-100 btn-primary fw-bold my-2 py-2">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
