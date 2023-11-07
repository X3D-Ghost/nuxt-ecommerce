export const useFiltering = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const router = useRouter();
  const attributes = ref(null);
  const filterParams = ref(null);
  const activeParams = ref(null);
  provide("activeFilters", activeParams);
  async function get() {
    // watchEffect(() => {
    await useFetch(`${BACKEND_API_URL}/wc/v3/products/filters`, {
      query: {
        // slug: slug.value,
      },
      server: false,
      onResponseError({ request, response, options }) {
        // Handle the response errors
        console.error(response);
      },
      onResponse({ response }) {
        // console.log("onResponse", response._data);
        attributes.value = response._data;
        getFilterParams();
        activeParams.value = getActiveParams();
        // attributes.push(...response._data);
      },
    });
    // });
  }
  get();
  const getFilterParams = () => {
    const returnData = attributes.value ?? [];
    // console.log({ returnData });
    returnData.forEach((item) => {
      // console.log({ item });
      // console.log(route.query[`f[${item.slug}]`]);
      // console.log(typeof route.query[`f[${item.slug}]`]);
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
      // console.log(item.value);
    });
    // return returnData;
    // console.log({ returnData });
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
    // refresh();
  }

  watch(
    () => useRoute().query,
    (newRoute) => {
      console.log({ newRoute });
      // get();
      getFilterParams();
      activeParams.value = getActiveParams();
    }
  );

  function getActiveParams() {
    /*console.log(
      attributes.value.filter((item) => item.value && item.value.length)
    );*/
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
