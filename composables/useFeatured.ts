export const useFeatured = async (params: object) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/products`;
  const queryParams = ref(params);

  const { data, pending, error, refresh } = await useAsyncData(
    `featuredProducts-${queryParams.value.category}`,
    async () =>
      await $fetch(url, {
        query: {
          featured: "1",
          category: queryParams.value.category.value,
          ...queryParams.value,
        },
        onRequestError({ request, response, options }) {
          // Handle the response errors
          console.error(response);
        },
        onResponseError({ request, response, options }) {
          console.error(response);
        },
      }),
    {
      watch: [queryParams],
      initialCache: false,
      server: false,
      lazy: true,
    }
  );
  return { data, pending, error, refresh };
};
