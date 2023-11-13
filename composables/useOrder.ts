type itemsType = {
  product_id: number;
  variation_id?: number;
  quantity: number;
};

type billingType = {
  first_name?: string;
  last_name?: string;
  address_1?: string;
  address_2?: string;
  state?: string;
  postcode?: string;
  country?: string;
  email: string;
  phone?: string;
  city?: string;
};

type orderDataType = {
  payment_method: string;
  payment_method_title: string;
  billing: billingType;
  line_items: itemsType[];
};

export const useOrder = () => {
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
