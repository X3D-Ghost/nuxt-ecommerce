type optionsType = {
  url?: string;
  params: object;
};

export const useFiltering = async (options?: optionsType) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const router = useRouter();
  const attributes = ref(null);
  const filterParams = ref(null);
  const activeParams = ref(null);
  provide("activeFilters", activeParams);
  async function get(params?: object) {
    await useFetch(`${BACKEND_API_URL}/wc/v3/products/filters`, {
      query: {
        ...options?.params,
      },
      lazy: true,
      server: false,
      onResponseError({ request, response, options }) {
        console.error(response);
      },
      onResponse({ response }) {
        attributes.value = response._data;
        getFilterParams();
        activeParams.value = getActiveParams();
      },
    });
  }
  get();
  const getFilterParams = () => {
    const returnData = attributes.value ?? [];
    returnData.forEach((item) => {
      item.value =
        typeof route.query[`f[${item.slug}]`] === "string"
          ? route.query[`f[${item.slug}]`].split(",")
          : route.query[`f[${item.slug}]`] ?? [];
      item.value.forEach((val, i, arr) => {
        if (parseFloat(val)) {
          arr[i] = parseFloat(val);
        }
      });
      item.value.map((val) => (parseFloat(val) ? parseFloat(val) : val));
    });
    filterParams.value = returnData;
  };

  function update(param) {
    const value = param.value;
    const queryParam = `f[${param.name}]`;
    const queryValue = typeof value === "string" ? value : value.join(",");
    if (value && value.length > 0) {
      const newQuery = { ...route.query, [queryParam]: queryValue };
      router.push({ query: newQuery, replace: true });
    } else {
      const newQuery = { ...route.query };
      delete newQuery[queryParam];
      router.push({ query: newQuery, replace: true });
    }
  }

  watch(
    () => useRoute().query,
    (newRoute) => {
      getFilterParams();
      activeParams.value = getActiveParams();
    }
  );

  function getActiveParams() {
    return attributes.value
      .filter((item) => item.value && item.value.length)
      .map((item) => {
        return {
          title: item.name,
          slug: item.slug,
          values: item.value.map((val) =>
            item.values.find((deepVal) => val === deepVal.id)
          ),
        };
      });
  }

  function clear() {
    router.push({ query: {}, replace: true });
    getFilterParams();
  }

  return {
    get,
    attributes,
    getFilterParams,
    filterParams,
    update,
    getActiveParams,
    activeParams,
    clear,
  };
};
