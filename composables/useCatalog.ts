type categoryDataType = {
  id: number;
  description: string;
  name: string;
  parent: number;
  slug: string;
  count: number;
  items: itemType[];
};
type itemType = { id: number; slug: string; description: string };

type optionsType = {
  url?: string;
  params: object;
};

export const useCatalog = async (options?: optionsType) => {
  const nuxtApp = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/products/category`;

  const route = useRoute();
  const query = computed(() => useRoute().query);
  const additionalParams = computed(() => options?.params);
  const price = computed(() => ({
    min_price: useRoute()?.query?.price?.split("-")[0],
    max_price: useRoute()?.query?.price?.split("-")[1],
  }));
  const router = useRouter();
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
  const products = ref([]);
  const categoryData = reactive({ count: 0 });
  const page = route.query.page;
  const perPage = ref(400);

  const { data, pending, error, refresh } = await useAsyncData(
    `categoryProducts-${slug}`,
    async () =>
      await $fetch(url, {
        query: {
          cat: slug.value ?? null,
          per_page: perPage.value,
          ...useRoute().query,
          ...additionalParams.value,
          ...price.value,
        },
        onRequest(context) {
          console.log("get catalog");
          console.log({ context });
        },
        onRequestError({ request, response, options }) {
          console.error(response);
        },
        onResponse({ response }) {
          if (process.client && response?._data) {
            let { items, ...category } = response?._data;
            products.value = items;
            Object.assign(categoryData, category);
          }
        },
        onResponseError({ request, response, options }) {
          console.error(response);
        },
      }),
    {
      watch: [slug, query, "options.params"],
      initialCache: false,
      server: true,
    }
  );
  if (data) {
    let { items, ...category } = data?.value || { items: [] };
    products.value = items;
    Object.assign(categoryData, category);
  }

  return {
    data,
    pending,
    refresh,
    products,
    categoryData,
  };
};
