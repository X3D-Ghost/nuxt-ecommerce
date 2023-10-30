export const useProduct = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const slug = ref("");
  const variants = ref(null);
  // console.log({ runtimeConfig });
  // console.log({ BACKEND_API_URL });
  if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;

    if (!route.params.slug[lastIndex]) {
      slug.value = route.params.slug[lastIndex - 1];
    } else {
      slug.value = route.params.slug[lastIndex];
    }
  } else {
    slug.value = "home";
  }

  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wc/v3/products`,
    {
      query: {
        slug: encodeURIComponent(slug.value),
      },
      onResponse({ response }) {
        console.debug({ response });
      },
      onRequest(context: FetchContext): Promise<void> | void {
        console.debug({ context });
      },
      onRequestError(
        context: FetchContext & { error: Error }
      ): Promise<void> | void {
        console.debug(context);
      },
    }
  );

  function get() {}
  /*function getVariants() {
    useFetch(
      `${BACKEND_API_URL}/wc/v3/products/${data.value[0].id}/variations`,
      {
        query: {
          // slug: encodeURIComponent(slug.value),
        },
        onResponse({ response }) {
          console.debug({ response });
          variants.value = response._data;
        },
      }
    );
  }*/

  return { get, /*getVariants,*/ data, pending, error, variants };
};
