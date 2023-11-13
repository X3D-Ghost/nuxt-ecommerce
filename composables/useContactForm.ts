export const useContactForm = () => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = `${BACKEND_API_URL}/wc/v3/orders`;

  const requestMethod: "POST" | "GET" = "POST";

  async function create(orderData: orderDataType) {
    await $fetch(url, {
      method: requestMethod,
      body: orderData,
      onRequest(context) {
        // console.log("create order");
        console.log({ context });
        // Promise.resolve();
      },
      onRequestError({ request, response, options }) {
        // Handle the response errors
        console.error(response);
        Promise.reject();
      },
      onResponse({ response }) {
        Promise.resolve();
      },
    });
    // return { data, pending, error, refresh };
  }

  return { create };
};
