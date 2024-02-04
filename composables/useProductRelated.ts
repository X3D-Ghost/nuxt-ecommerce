export const useProductRelated = async (ids) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wc/v3/products`,
    {
      server: false,
      lazy: true,
      query: {
        include: ids.join(","),
      },
    }
  );
  return { data, pending, error };
};
