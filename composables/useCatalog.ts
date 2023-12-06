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
  console.debug({ options });
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
  console.debug({ additionalParams });
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

  // async function get() {
  const { data, pending, error, refresh } = await useAsyncData(
    // "categoryProducts",
    `categoryProducts-${slug}`,
    // "",
    async () =>
      await $fetch(url, {
        query: {
          cat: slug.value,
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
          // Handle the response errors
          console.error(response);
        },
        onResponse({ response }) {
          if (process.client && response?._data) {
            let { items, ...category } = response?._data;
            products.value = items;
            Object.assign(categoryData, category);
            // categoryData.id = response._data.id;
            // categoryData.name = response._data.name;
            // categoryData.slug = response._data.slug;
            // categoryData.description = response._data.description;
            // categoryData.parent = response._data.parent;
            // categoryData.count = response._data.count;
          }
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
          console.error(response);
        },
      }),
    {
      watch: [slug, query, "options.params"],
      initialCache: false,
      server: true,
    }
  );
  /*products.value = data.value && data.value.items;
  categoryData.id = data.value.id;
  categoryData.name = data.value.name;
  categoryData.slug = data.value.slug;
  categoryData.description = data.value.description;
  categoryData.parent = data.value.parent;
  categoryData.count = data.value.count;*/
  if (data) {
    let { items, ...category } = data?.value;
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
