<script setup>
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
  `http://wootest.dev/wp-json/wp/v2/pages`,
  {
    query: {
      slug: slug.value,
    },
  }
);
console.log({ route });
console.log({ data, pending, error, refresh });
</script>
<template>
  <main>
    {{ data }}
    <article
      v-if="data"
      v-html="data && data[0] && data[0].content.rendered"
    ></article>
  </main>
</template>
