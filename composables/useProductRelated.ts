export const useProductRelated = async (ids) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wc/v3/products`,
    {
      query: {
        // slug: encodeURIComponent(slug.value),
        include: ids.join(","),
      },
    }
  );
  console.log({ data });
  return { data, pending, error };
};
