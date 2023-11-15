export const useFeatured = async (params: object) => {
  const nuxtApp = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/products`;

  const { data, pending, error, refresh } = await useAsyncData(
    // "featuredProducts",
    `featuredProducts-${params.category}`,
    // "",
    async () =>
      await $fetch(url, {
        query: {
          // category: params.category,
          featured: "1",
          ...params,
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
      watch: [params],
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
