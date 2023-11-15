export const useFeatured = async (params: object) => {
  const nuxtApp = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/products`;
  const queryParams = ref(params);

  const { data, pending, error, refresh } = await useAsyncData(
    // "featuredProducts",
    `featuredProducts-${queryParams.value.category}`,
    // "",
    async () =>
      await $fetch(url, {
        query: {
          // category: params.category,
          featured: "1",
          category: queryParams.value.category.value,
          ...queryParams.value,
        },
        onRequest(context) {
          // console.log({ context });
        },
        onRequestError({ request, response, options }) {
          // Handle the response errors
          console.error(response);
        },
        onResponse({ response }) {
          /*if (process.client) {
            products.value = response._data.items;
          }*/
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
          console.error(response);
        },
      }),
    {
      watch: [queryParams],
      initialCache: false,
      server: false,
      lazy: true,
      // deep: false,
      /*getCachedData(key) {
              console.log("cache");
              console.log([nuxtApp.payload.data[key], nuxtApp.static.data[key]]);
              return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
            },*/
    }
  );
  return { data, pending, error, refresh };
};
