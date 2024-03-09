export const useCatalogPage = async (params) => {
  // const catalog = await useCatalog({ params: priceForFilter.value });
  const catalog = await useCatalog({ params });

  return { catalog };
};
