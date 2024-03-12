type cartItem = {
  id: number;
  count: number;
};
const items: cartItem[] = reactive([]);
export const useCart = () => {
  function add(id: number): void {
    items.push({ id, count: 1 });
  }

  function inc(id: number): void {
    items.find((item) => item.id === id)?.count += 1;
  }
  function dec(id: number): void {
    items.find((item) => item.id === id)?.count -= 1;
  }

  function changeCount(id: number, val: number): void {
    if (val === 0) {
      remove(id);
    }
    items.find((item) => item.id === id)?.count = val;
  }

  function remove(id: number): void {
    items.splice(
      items.findIndex((item) => item.id === id),
      1,
    );
  }

  return {
    items,
    add,
    inc,
    dec,
    changeCount,
    remove,
  };
};
