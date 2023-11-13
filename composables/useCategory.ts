export const useCategory = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/products/categories`;
  function get() {}
  const {
    data: items,
    pending,
    error,
  } = await useFetch(url, {
    query: {},
    lazy: true,
    server: false,
    onResponseError({ request, response, options }) {
      console.error(response);
    },
    onResponse({ response }) {},
  });
  console.log({ items });

  return {
    get,
    // getAll,
    items,
    pending,
    error,
  };
};
