export const useCatalog = () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const router = useRouter();
  const slug = ref("");
  const products = ref([]);
  const categoryData = reactive({ count: 0 });
  const page = route.query.page;
  const perPage = ref(400);

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

  function get() {
    console.log("get products");
    return $fetch(`${BACKEND_API_URL}/wc/v3/products/category`, {
      query: {
        cat: slug.value,
        per_page: perPage.value,
        ...useRoute().query,
      },
      // server: false,
      onResponse({ response }) {
        // console.log(response._data);
        // products.value = response._data;
        // Object.assign(products.value, response._data.items);
        products.value = response._data.items;
        categoryData.id = response._data.id;
        categoryData.name = response._data.name;
        categoryData.slug = response._data.slug;
        categoryData.description = response._data.description;
        categoryData.parent = response._data.parent;
        categoryData.count = response._data.count;
        if (process.server) {
          console.log(response._data);
        }
      },
      onResponseError({ request, response, options }) {
        // Handle the response errors
        console.error(response);
      },
    });
  }
  get();

  function getItems() {
    return products;
  }

  function getCategoryData() {
    return categoryData;
  }

  function refresh() {
    get();
  }

  watch(
    () => useRoute().query,
    (newRoute) => {
      console.log({ newRoute });
      refresh();
    }
  );

  return {
    get,
    getItems,
    getCategoryData,
    products,
    categoryData,
  };
};
