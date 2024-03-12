type ContactData = {
  name?: string;
  phone?: string;
  email?: string;
  text?: string;
  description?: string;
};

type optionsType = {
  url?: string;
  params: object;
  requestMethod?: "POST" | "GET";
};

export const useContactForm = (options?: optionsType) => {
  const runtimeConfig = useRuntimeConfig();
  const BACKEND_API_URL = runtimeConfig.public.BACKEND_API_URL;
  const url: string = options?.url || `${BACKEND_API_URL}/wc/v3/orders`;

  const requestMethod: "POST" | "GET" = options?.requestMethod || "POST";

  async function send(formData: ContactData) {
    return await $fetch(url, {
      method: requestMethod,
      body: formData,
      onRequestError({ request, response, options }) {
        console.warn(response);
      },
    });
  }

  return { send };
};
