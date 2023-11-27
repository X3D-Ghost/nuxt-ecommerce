type attributeType = {
  id: number;
  name: string;
  options?: attributeOptionsType[];
  option?: string | number;
};

type attributeOptionsType = {
  name: string;
  value: string | number;
};

type ParamsType = {
  id: number;
  value: string | number;
};

export const useProductVariants = async ({ id, attrs }) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const route = useRoute();
  const options = [];
  const rawAttrs = ref([]);
  const attributes: Ref<attributeType[]> = ref([]);
  const variations = ref([]);
  const attributesList: Ref<attributeType[]> = ref([]);
  const currentVariant: Ref<number | null> = ref(null);

  currentVariant.value = parseInt(route.query.variant);

  const currentParams: object = reactive({});

  watch(
    () => currentParams,
    (value, oldValue) => {
      console.log(value, oldValue);
      console.log("params changed");
    },
    { deep: true }
  );

  const { data, pending, error, refresh } = await useLazyFetch(
    `${BACKEND_API_URL}/wc/v3/products/${id}/variations`,
    {
      server: false,
      // lazy: true,
      query: {
        // slug: encodeURIComponent(slug.value),
      },
      onResponse({ response }) {
        rawAttrs.value = response._data;
        variations.value = response._data;
        attributesList.value = response._data[0].attributes.map(
          ({ id, name }) => ({ id, name })
        );
        attributesList.value.forEach((item) => {
          const options = getAttributeOptions(item.id);
          if (options.length) {
            attributes.value.push({
              text: item.name,
              id: item.id,
              options,
            });
          }
        });
        if (currentVariant.value) {
          Object.values(attributesList.value).forEach(({ id }) => {
            const foundProduct = variations.value.find(
              (res) => res.id === currentVariant.value
            );
            console.log(currentVariant.value);
            console.log({ foundProduct });
            const foundValue = foundProduct?.attributes.find(
              (el) => el.id === id
            ).option;
            // console.log({ foundValue });
            // console.log(currentParams[id]);
            // currentParams[id].value = foundValue;
            Object.assign(currentParams, {
              [id]: decodeURIComponent(foundValue),
            });
            // console.log({ currentParams });
          });
        }
        // console.log(attributes.value);
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

  function getAttributeOptions(id: number) {
    const items: attributeOptionsType[] = [];
    rawAttrs.value.forEach((item) => {
      let option = item.attributes.find((result) => result.id === id);
      if (!items.includes(decodeURIComponent(option.option))) {
        items.push(decodeURIComponent(option.option));
      }
    });
    return items;
  }

  return {
    data,
    variations,
    pending,
    error,
    refresh,
    attributes,
    currentVariant,
    currentParams,
  };
};
