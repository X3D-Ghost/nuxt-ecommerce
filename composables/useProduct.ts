import { R } from "vite-node/types-516036fa";

export const useProduct = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  // const slug = ref("");
  // const variants = ref(null);
  // console.log({ runtimeConfig });
  // console.log({ BACKEND_API_URL });
  /*if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;

    if (!route.params.slug[lastIndex]) {
      slug.value = route.params.slug[lastIndex - 1];
    } else {
      slug.value = route.params.slug[lastIndex];
    }
  } else {
    slug.value = "home";
  }*/
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
        onResponse({ response }) {
          // console.debug("onResponse");
          // console.debug({ response });
          // console.debug(response._data);
        },
        /*onRequest(context): Promise<void> | void {
          console.debug("onRequest");
          console.debug({ context });
        },*/
        /*onRequestError(context): Promise<void> | void {
        console.error(context);
      },*/
        onResponseError(context) {
          console.error("product page: onResponseError");
          console.error(context);
        },
      }),
    {
      // initialCache: false,
      server: true,
      // watch: [slug],
    }
  );

  // function get() {}
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

  return {
    data: data.value && data.value[0],
    // product,
    pending,
    error,
  };
};
