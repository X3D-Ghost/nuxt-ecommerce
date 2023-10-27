<script setup lang="ts">
const route = useRoute();
const product = await useProduct();
const productData = product.data.value[0];
const variant = await useProductVariants(productData.id);
const variants = ref(null);
const variableAttributes = ref(variant.attributes);

console.debug(variants.value);
const count = ref(1);
const currentTab = ref(1);

const breadcrumbItems = [
  { text: "Главная", href: "/" },
  { text: "Каталог", href: "/catalog" },
];
</script>

<template>
  <!-- Shop Detail Start -->
  <!--  <p v-if="error && error.data">
    {{ error.data }}
  </p>-->
  <!--  <p v-else-if="data">
    {{ data[0] }}
  </p>-->
  <div class="container">
    <Breadcrumbs :items="breadcrumbItems" />
    <PageTitle> {{ productData.name }} </PageTitle>
    <PageTitle :title="productData.name" />
  </div>
  <div class="container pb-5">
    <div class="grid px-xl-5">
      <div class="g-col-12 g-col-md-6 mb-30">
        <ProductImageCarousel
          v-if="productData && productData.images"
          :images="productData.images"
        />
      </div>
      <div class="g-col-12 g-col-md-6 h-auto mb-30">
        <div class="card h-100 bg-light">
          <div class="card-body">
            <ProductPrice
              :price="productData.price"
              :oldPrice="productData.oldPrice"
              :discount="productData.discount"
            />
            <ProductVariants :items="variableAttributes"></ProductVariants>
            <!--            <p class="mb-4">
              {{ productData.short_description }}
            </p>-->
            <!--            <div class="d-flex mb-3">
              <strong class="text-dark me-3">Размер:</strong>
              <template
                v-for="(size, i) in productData.sizes"
                :key="size.value"
              >
                <InputRadio
                  v-model="currentSize"
                  :value="size.value"
                  :id="`${size.value}-${i}`"
                  name="size"
                >
                  {{ size.title }}
                </InputRadio>
              </template>
            </div>-->
            <!--            <div class="d-flex mb-4">
              <strong class="text-dark me-3">Цвет:</strong>
              <template
                v-for="(color, i) in productData.colors"
                :key="color.value"
              >
                <InputRadio
                  v-model="currentColor"
                  :value="color.value"
                  :id="`${color.value}-${i}`"
                  name="size"
                >
                  <span :style="{ backgroundColor: color.value }">
                    {{ color.title || color.value }}
                  </span>
                </InputRadio>
              </template>
              <div class="btn-group">
                <a
                  href="/"
                  class="btn"
                  v-for="(color, i) in productData.colors"
                  :key="color.value"
                  :style="{ backgroundColor: color.value }"
                >
                  {{ color.title || color.value }}
                </a>
              </div>
            </div>-->
            <div class="d-flex align-items-center mb-4 mt-auto pt-2">
              <!--          <div class="mb-4 pt-2">-->
              <InputCounter :value="1" />
              <!--              <div class="btn-group">-->
              <button class="btn btn-primary px-3 me-3">
                <!--                <Icon
                  name="fa-solid fa-plus"
                  icon="fa-solid fa-plus me-1"
                ></Icon>-->
                В корзину
                <!--                <Icon icon="fa-solid fa-shopping-cart ms-1"></Icon>-->
              </button>
              <button class="btn btn-outline-primary px-3">
                <!--                <Icon icon="fa-regular fa-heart"></Icon>-->
              </button>
              <!--              </div>-->
            </div>
            <ProductQuickBuy />
            <small>Минимальный заказ 1 м.</small>
          </div>
          <div class="card-footer">
            <ProductShare />
          </div>
        </div>
      </div>
    </div>
    <section>
      <ProductAttributes :items="productData.attributes" />
    </section>
    <div class="row px-xl-5">
      <div class="col">
        <Tabs class="bg-light p-30">
          <div class="nav nav-tabs mb-4">
            <Tab
              label="Описание"
              id="tab-desc"
              data-bs-target="#tab-description"
            />
            <Tab
              label="Характеристики"
              id="tab-desc"
              data-bs-target="#tab-attributes"
            />
            <Tab label="Отзывы" id="tab-desc" data-bs-target="#tab-reviews" />
          </div>
          <TabsContent>
            <!--            <TabPanel id="tab-description">
              <h4 class="mb-3">Описание</h4>
              <div v-html="productData.description"></div>
            </TabPanel>-->
            <!--            <TabPanel id="tab-attributes">
              <ProductAttributes :items="productData.attributes" />
            </TabPanel>-->
            <TabPanel id="tab-reviews">
              <div class="row">
                <div class="col-md-6">
                  <h4 class="mb-4">1 review for "Product Name"</h4>
                  <div class="media mb-4">
                    <img
                      src="/img/user.jpg"
                      alt="Image"
                      class="img-fluid me-3 mt-1"
                      style="width: 45px"
                    />
                    <div class="media-body">
                      <h6>
                        John Doe<small> - <i>01 Jan 2045</i></small>
                      </h6>
                      <div class="text-primary mb-2">
                        <!--                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star-half-alt"></Icon>
                        <Icon icon="fa-regular fa-star"></Icon>-->
                      </div>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h4 class="mb-4">Leave a review</h4>
                  <small
                    >Your email address will not be published. Required fields
                    are marked *</small
                  >
                  <div class="d-flex my-3">
                    <p class="mb-0 me-2">Your Rating * :</p>
                    <div class="text-primary">
                      <!--                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>-->
                    </div>
                  </div>
                  <form>
                    <div class="form-group">
                      <label for="message">Your Review *</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label for="name">Your Name *</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="form-group">
                      <label for="email">Your Email *</label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group mb-0">
                      <input
                        type="submit"
                        value="Leave Your Review"
                        class="btn btn-primary px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </TabPanel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </div>
  <!-- Shop Detail End -->

  <!-- Products Start -->
  <div class="container-fluid py-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pe-3">You May Also Like</span>
    </h2>
  </div>
  <!-- Products End -->
</template>

<style scoped></style>
