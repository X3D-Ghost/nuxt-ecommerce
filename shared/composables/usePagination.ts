export const usePagination = () => {
  const route = useRoute();
  const page = route.query.page;
  const perPage = route.query.per_page ?? 12;
  return { page, perPage };
};
