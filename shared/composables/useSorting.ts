export const useSorting = () => {
  const route = useRoute();

  const { order, orderby } = route.query;

  return { order, orderby };
};
