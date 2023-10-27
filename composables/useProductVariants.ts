export const useProductVariants = async (id) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wc/v3/products/${id}/variations`,
    {
      query: {
        // slug: encodeURIComponent(slug.value),
      },
    }
  );

  const options = [];
  const attributes = [
    {
      id: 1,
      name: "Цвет",
    },
    {
      id: 2,
      name: "Размер",
    },
    {
      id: 5,
      name: "цвет-стекла",
    },
    {
      id: 14,
      name: "нестандарт",
    },
  ];

  function getAttributeOptions(id) {
    const items = [];
    console.log(data.value);
    data.value.forEach((item) => {
      let option = item.attributes.find((result) => result.id === id);
      // console.log({ id, option: option });
      // if (items.find(result) => result.option)
      if (!items.includes(decodeURIComponent(option.option))) {
        items.push(decodeURIComponent(option.option));
      }
    });
    // data.attributes.reduce(acc);
    return items;
  }

  Object.assign(
    attributes,
    attributes.map((item) => ({
      text: item.name,
      id: item.id,
      options: getAttributeOptions(item.id),
    }))
  );

  return { data, pending, error, refresh, attributes };
};
