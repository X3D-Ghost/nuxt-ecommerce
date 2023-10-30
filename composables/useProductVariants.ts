export const useProductVariants = async ({ id, attrs }) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const options = [];
  const rawAttrs = ref([]);
  const attributes = ref([]);

  const { data, pending, error, refresh } = await useLazyFetch(
    `${BACKEND_API_URL}/wc/v3/products/${id}/variations`,
    {
      server: false,
      // lazy: true,
      query: {
        // slug: encodeURIComponent(slug.value),
      },
      onResponse({ response }) {
        // console.log("useProductVariants onResponse");
        // console.log(response._data);
        // console.log("data:", data);
        rawAttrs.value = response._data;
        /*Object.assign(
          attributes.value,
          attrs.map((item) => ({
            text: item.name,
            id: item.id,
            options: getAttributeOptions(item.id),
          }))
        );*/
        attrs.forEach((item) => {
          attributes.value.push({
            text: item.name,
            id: item.id,
            options: getAttributeOptions(item.id),
          });
        });
        console.log(attributes.value);
      },
      /*onRequestError(
        context: FetchContext & { error: Error }
      ): Promise<void> | void {
        console.log("onRequestError");
        console.error(context);
      },*/
      /*onResponse(
        context: FetchContext & { response: FetchResponse<R> }
      ): Promise<void> | void {
        console.log("onResponse");
        console.log(context);
      },*/
      /*onResponseError(
        context: FetchContext & { response: FetchResponse<R> }
      ): Promise<void> | void {
        console.log("onResponseError");
        console.error(context);
      },*/
    }
  );

  function getAttributeOptions(id) {
    const items = [];
    console.log("getAttributeOptions", rawAttrs);
    rawAttrs.value.forEach((item) => {
      let option = item.attributes.find((result) => result.id === id);
      // console.log({ id, option: option });
      // if (items.find(result) => result.option)
      if (!items.includes(decodeURIComponent(option.option))) {
        items.push(decodeURIComponent(option.option));
      }
    });
    // data.attributes.reduce(acc);
    return items;
  }

  return { data, pending, error, refresh, attributes };
};
