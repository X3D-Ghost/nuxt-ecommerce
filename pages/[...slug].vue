<script setup>
const { pageData } = await usePage();
</script>
<template>
  <main>
    <div class="container">
      <PageTitle>{{ pageData?.title.rendered }}</PageTitle>
    </div>
    <div class="container">
      <article
        v-if="pageData"
        v-html="pageData && pageData.content.rendered"
      ></article>
    </div>
  </main>
</template>
