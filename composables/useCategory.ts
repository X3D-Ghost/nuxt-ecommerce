export const useCategory = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  function get() {}
  // const items = ref(null);
  // async function getAll() {
  const {
    data: items,
    pending,
    error,
  } = await useFetch(`${BACKEND_API_URL}/wc/v3/products/categories`, {
    query: {
      // slug: slug.value,
    },
    lazy: true,
    server: false,
    onResponseError({ request, response, options }) {
      // Handle the response errors
      console.error(response);
    },
    onResponse({ response }) {
      // items.value = response._data;
      // items.push(...response._data);
    },
  });
  console.log({ items });
  // items.value = items.value;
  // }
  // await getAll();

  return {
    get,
    // getAll,
    items,
    pending,
    error,
  };
};
