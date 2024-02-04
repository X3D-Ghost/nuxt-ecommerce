export const useProduct = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const slug = computed(() => {
    if (route.params.slug) {
      let lastIndex = route.params.slug.length - 1;
      if (!route.params.slug[lastIndex]) {
        return encodeURIComponent(route.params.slug[lastIndex - 1]);
      } else {
        return encodeURIComponent(route.params.slug[lastIndex]);
      }
    } else {
      return "";
    }
  });

  const { data, pending, error, refresh } = await useAsyncData(
    `product-${slug.value}`,
    async () =>
      $fetch(`${BACKEND_API_URL}/wc/v3/products`, {
        query: {
          slug: slug.value,
        },
        onResponse({ response }) {},
        onResponseError(context) {
          console.error("product page: onResponseError");
          console.error(context);
        },
      }),
    {
      server: true,
    }
  );

  return {
    data: data.value && data.value[0],
    pending,
    error,
  };
};
