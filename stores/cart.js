export const useCartStore = defineStore("cart", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const items = ref([
    { id: 13, title: "Шкура", quantity: 1, price: 250, oldPrice: 255 },
    { id: 144, title: "Тряпки", quantity: 4, price: 400 },
    { id: 22, title: "Шерсть", quantity: 1, price: 500, oldPrice: 601 },
    { id: 96, title: "Вельвет", quantity: 1, price: 120 },
  ]);
  const doubleCount = computed(() => count.value * 2);

  const getTotalQuantity = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0)
  );

  const getTotalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  const getTotalDiscount = computed(() =>
    items.value.reduce(
      (total, item) =>
        item.oldPrice
          ? total + (item.oldPrice - item.price) * item.quantity
          : total,
      0
    )
  );
  function increment() {
    count.value++;
  }

  function addItem(item) {
    const foundProduct = items.value.find((result) => item.id === result.id);
    if (foundProduct) {
      foundProduct.quantity += 1;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  }

  function changeQuantity(itemId, quantity) {
    const foundProduct = items.value.find((result) => itemId === result.id);
    if (foundProduct) {
      foundProduct.quantity = quantity;
    }
  }

  function removeProduct(product) {
    items.value.splice(items.value.indexOf(product), 1);
  }

  function clearCart() {}

  return {
    count,
    name,
    doubleCount,
    items,
    increment,
    addItem,
    changeQuantity,
    removeProduct,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    getTotalDiscount,
  };
});
