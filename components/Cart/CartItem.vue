<script setup lang="ts">
const props = defineProps({
  id: Number,
  title: String,
  quantity: Number,
  price: Number,
  oldPrice: Number,
});
const emit = defineEmits({
  input: null,
  change: null,
  delete: (id) => {
    return true;
  },
});

let quantity = computed({
  get() {
    return props.quantity;
  },
  set(value) {
    emit("change", parseInt(value));
  },
});

const total = computed(() =>
  props.price && props.quantity ? props.price * props.quantity : "-"
);

const removeItem = () => {
  emit("delete", props.id);
};
</script>

<template>
  <tr>
    <td class="align-middle">
      <img src="/img/product/product-1_1.jpg" alt="" style="width: 50px" />
      {{ title }}
    </td>
    <td class="align-middle">
      <strong
        class=""
        :class="{
          'text-danger': !!oldPrice,
        }"
        >{{ price }}
      </strong>
      <small
        v-if="oldPrice"
        class="text-decoration-line-through text-dark-emphasis"
        >{{ oldPrice }}
      </small>
    </td>
    <td class="align-middle">
      <InputCounter :value="quantity" @change="(e) => (quantity = e)" />
    </td>
    <td class="align-middle">{{ total }}</td>
    <td class="align-middle">
      <button class="btn btn-sm btn-outline-danger" @click="removeItem">
        <Icon icon="fa-solid fa-xmark" />
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
