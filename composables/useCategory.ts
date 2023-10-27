export const useCategory = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  function get() {}
  const items = ref(null);
  async function getAll() {
    await useFetch(`${BACKEND_API_URL}/wc/v3/products/categories`, {
      query: {
        // slug: slug.value,
      },
      server: false,
      onResponseError({ request, response, options }) {
        // Handle the response errors
        console.error(response);
      },
      onResponse({ response }) {
        items.value = response._data;
        // items.push(...response._data);
      },
    });
  }
  getAll();

  return {
    get,
    getAll,
    items,
  };
};
