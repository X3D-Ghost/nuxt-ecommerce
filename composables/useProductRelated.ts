import { R } from "vite-node/types-516036fa";

export const useProductRelated = async (ids) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  // console.log({ ids });
  // console.log(ids.join(","));

  const { data, pending, error, refresh } = await useFetch(
    `${BACKEND_API_URL}/wc/v3/products`,
    {
      server: false,
      lazy: true,
      query: {
        // slug: encodeURIComponent(slug.value),
        include: ids.join(","),
      },
      onRequest(context: FetchContext): Promise<void> | void {
        // console.log("onRequest");
        // console.log(context);
      },
      onRequestError(
        context: FetchContext & { error: Error }
      ): Promise<void> | void {
        // console.log("onRequestError");
        // console.log(context);
      },
      onResponse(
        context: FetchContext & { response: FetchResponse<R> }
      ): Promise<void> | void {
        // console.log("onResponse");
        // console.log(context);
      },
      onResponseError(
        context: FetchContext & { response: FetchResponse<R> }
      ): Promise<void> | void {
        // console.log("onResponseError");
        // console.log(context);
      },
    }
  );
  // console.log({ data });
  return { data, pending, error };
};
