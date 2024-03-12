export const usePage = async () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;

  const route = useRoute();
  const slug = ref("");
  if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;

    if (!route.params.slug[lastIndex]) {
      slug.value = route.params.slug[lastIndex - 1];
    } else {
      slug.value = route.params.slug[lastIndex];
    }
  } else {
    slug.value = "home";
  }
  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wp/v2/pages`,
    {
      query: {
        slug: slug.value,
      },
    }
  );
  return {
    slug,
    pageData: data.value && data.value[0] ? data.value[0] : null,
    pending,
    error,
  };
};
