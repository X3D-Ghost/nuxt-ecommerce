<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const slug = ref("");

if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1;
  if (!route.params.slug[lastIndex]) {
    slug.value = encodeURIComponent(route.params.slug[lastIndex - 1]);
  } else {
    slug.value = encodeURIComponent(route.params.slug[lastIndex]);
  }
} else {
  slug.value = "";
}
console.debug(encodeURIComponent(slug.value));
const categories = await useFetch(
  `http://wootest.dev/wp-json/wc/v3/products/categories`,
  {
    query: {},
    onResponse({ response }) {
      console.debug({ response });
    },
    onResponseError({ request, response, options }) {
      console.error(request, response, options);
    },
  }
);

console.debug(categories.data.value);
const getCatData = () =>
  categories.data.value.find((result) => {
    return result.slug === encodeURIComponent(slug.value).toLowerCase();
  });

// const categoryData = computed(() => getCatData() ?? { count: 15, id: 17 });
const categoryData = reactive({ count: 0 });

const page = computed(() => Number(route.query.page ?? 1));

const perPage = ref(8);

const products = ref([]);

const pagesTotal = computed(() => categoryData.count / perPage.value);

const getProducts = () => {
  console.log("get products");
  return $fetch(`http://wootest.dev/wp-json/wc/v3/products/category`, {
    query: {
      cat: slug.value,
      per_page: perPage.value,
      ...useRoute().query,
    },
    // server: false,
    onResponse({ response }) {
      // console.log(response._data);
      // products.value = response._data;
      // Object.assign(products.value, response._data.items);
      products.value = response._data.items;
      categoryData.id = response._data.id;
      categoryData.name = response._data.name;
      categoryData.slug = response._data.slug;
      categoryData.description = response._data.description;
      categoryData.parent = response._data.parent;
      categoryData.count = response._data.count;
      if (process.server) {
        console.log(response._data);
      }
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      console.error(response);
    },
  });
};
getProducts();
function refresh() {
  getProducts();
}
/*watch(page, (newPage) => {
  // refresh();
  console.log({ newPage });
});*/
watch(
  () => useRoute().query,
  (newRoute) => {
    console.log({ newRoute });
    refresh();
  }
);

const attributes = await useFetch(
  `http://wootest.dev/wp-json/wc/v3/products/filters`,
  {
    query: {
      // slug: slug.value,
    },
    server: false,
    onResponseError({ request, response, options }) {
      // Handle the response errors
      console.error(response);
    },
  }
);
const queryAttributes = computed(() => {});
const filterParams = computed(() => {
  const returnData = attributes.data.value ?? [];
  returnData.forEach((item) => {
    console.log({ item });
    item.value = route.query[`filter[${item.slug}]`]
      ? route.query[`filter[${item.slug}]`].split(",")
      : [];
  });
  return returnData;
});

function filterUpdate(param) {
  console.log(param);
  console.log(typeof param);
  const queryParam = `filter[${param.name}]`;
  const queryValue = param.value.join(",");
  console.log(param.value);
  if (param.value && param.value.length > 0) {
    const newQuery = { ...route.query, [queryParam]: queryValue };
    router.push({ query: newQuery, replace: true });
  } else {
    const newQuery = route.query;
    console.log(newQuery);
    delete newQuery[queryParam];
    // newQuery[queryParam] = undefined;
    // delete route.query[queryParam];
    // route.query[queryParam] = null;
    console.log(newQuery);
    router.replace({ query: newQuery });
  }
  // refresh();
}
</script>

<template>
  <div class="container-fluid">
    <div class="grid">
      <div class="g-col-2">
        <client-only>
          <CatalogFilterCategories :items="categories.data.value" />
          <CatalogFilterList :params="filterParams" @update="filterUpdate" />
        </client-only>
        <!--        <button @click.prevent="tryRefresh()">Обновить</button>-->
        <!--        <button @click.prevent="categories.refresh">Обновить</button>-->
        <!--        <button @click.prevent="attributes.refresh">Обновить</button>-->
      </div>
      <div class="g-col-10">
        <!--        <client-only>
          <p v-if="pending">Загружаю, ждите</p>
          <p v-if="error">{{ error }}</p>
          <p>status: {{ status }}</p></client-only
        >-->
        <CatalogProductList :items="products" />
        <!--        {{ data }}-->
        <Pagination :count="pagesTotal" :current="page" />
        <input type="number" v-model="perPage" />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>
