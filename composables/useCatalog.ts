export const useCatalog = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const router = useRouter();
  const slug = ref("");
  const products = ref([]);
  const categoryData = reactive({ count: 0 });
  const page = route.query.page;
  const perPage = ref(400);

  // let pending = null;

  if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;
    if (!route.params.slug[lastIndex]) {
      slug.value = encodeURIComponent(route.params.slug[lastIndex - 1]);
    } else {
      slug.value = encodeURIComponent(route.params.slug[lastIndex]);
    }
  } else {
    slug.value = "";
  }

  async function get() {
    const { data, pending, error, refresh } = await useAsyncData(
      "category",
      () =>
        $fetch(`${BACKEND_API_URL}/wc/v3/products/category`, {
          query: {
            cat: slug.value,
            per_page: perPage.value,
            ...useRoute().query,
          },
          onRequest(context) {
            console.log("get catalog");
          },
          onRequestError({ request, response, options }) {
            // Handle the response errors
            console.error(response);
          },
          onResponse({ response }) {
            /*products.value = response._data.items;
            categoryData.id = response._data.id;
            categoryData.name = response._data.name;
            categoryData.slug = response._data.slug;
            categoryData.description = response._data.description;
            categoryData.parent = response._data.parent;
            categoryData.count = response._data.count;*/
          },
          onResponseError({ request, response, options }) {
            // Handle the response errors
            console.error(response);
          },
        }),
      {
        watch: [route.query],
        lazy: true,
      }
    );
    products.value = data.value.items;
    categoryData.id = data.value.id;
    categoryData.name = data.value.name;
    categoryData.slug = data.value.slug;
    categoryData.description = data.value.description;
    categoryData.parent = data.value.parent;
    categoryData.count = data.value.count;
    console.log({ data, pending, error, refresh });
    return { pending };
  }
  const { pending } = await get();

  /*  function getItems() {
    return products;
  }*/

  /* function getCategoryData() {
    return categoryData;
  }*/

  /*function refresh() {
    get();
  }*/

  watch(
    async () => useRoute().query,
    async (newRoute) => {
      console.log({ newRoute });
      console.log(useRoute().query);
      // console.log(newRoute. );
      // refresh();
      await get();
    }
  );

  return {
    get,
    // getItems,
    // getCategoryData,
    pending,
    products,
    categoryData,
  };
};
