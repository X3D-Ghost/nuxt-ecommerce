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

  // let pending = null;

  /*  if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;
    if (!route.params.slug[lastIndex]) {
      slug.value = encodeURIComponent(route.params.slug[lastIndex - 1]);
    } else {
      slug.value = encodeURIComponent(route.params.slug[lastIndex]);
    }
  } else {
    slug.value = "";
  }*/

  /*    const { data, error, pending } = await useFetch('/api/data', {
        getCachedData(key) {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
    });*/

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
          ...options?.params,
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
          /*products.value = response._data.items;
            categoryData.id = response._data.id;
            categoryData.name = response._data.name;
            categoryData.slug = response._data.slug;
            categoryData.description = response._data.description;
            categoryData.parent = response._data.parent;
            categoryData.count = response._data.count;*/
          if (process.client) {
            products.value = response._data.items;
            categoryData.id = response._data.id;
            categoryData.name = response._data.name;
            categoryData.slug = response._data.slug;
            categoryData.description = response._data.description;
            categoryData.parent = response._data.parent;
            categoryData.count = response._data.count;
          }
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
          console.error(response);
        },
      }),
    {
      watch: [slug, query],
      initialCache: false,
      server: true,
      // lazy: true,
      // deep: false,
      /*getCachedData(key) {
        console.log("cache");
        console.log([nuxtApp.payload.data[key], nuxtApp.static.data[key]]);
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      },*/
    }
  );
  console.log("response ok");
  console.log({ data });
  products.value = data.value && data.value.items;
  categoryData.id = data.value.id;
  categoryData.name = data.value.name;
  categoryData.slug = data.value.slug;
  categoryData.description = data.value.description;
  categoryData.parent = data.value.parent;
  categoryData.count = data.value.count;
  // console.log(categoryData);
  // console.log(data.value);
  // console.log({ data, pending, error, refresh });
  // return { pending, refresh };
  // }
  // const { pending, refresh } = await get();

  /*  function getItems() {
    return products;
  }*/

  /* function getCategoryData() {
    return categoryData;
  }*/

  /*function refresh() {
    get();
  }*/
  /*  watch(
    async () => useRoute().query,
    // () => query,
    // route.query,
    // query,
    (newRoute, oldRoute) => {
      console.log({ newRoute, oldRoute });
      // console.log(useRoute().query);
      // console.log(refresh);
      // console.log(newRoute. );
      // refresh();
      // await get();
      nextTick(() => {
        refresh();
      });
    }
  );*/

  return {
    // get,
    // getItems,
    // getCategoryData,
    data,
    pending,
    refresh,
    // products: data && data.value && data.value.items ? data.value.items : null,
    products,
    categoryData,
  };
};
