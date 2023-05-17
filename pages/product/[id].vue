<script setup lang="ts">
const productData = {
  title: "Ткань",
  price: 450,
  images: [
    { src: "product/product-1_1.jpg" },
    { src: "product/product-1_2.jpg" },
    { src: "product/product-1_3.jpg" },
    { src: "product/product-1_4.jpg" },
  ],
  sizes: [
    { title: "140 см", value: 140 },
    { title: "100 см", value: 100 },
    { title: "200 см", value: 200 },
  ],
  colors: [
    { value: "white" },
    { value: "blue" },
    { value: "beige" },
    { value: "red" },
  ],
  description_short: `
  Жаккардовая ткань является одной из самых красивых и востребованных
            тканей для пошива постельного белья. Она мягкая, приятная на ощупь,
            прочная, устойчива к стиркам. В состав ткани входит только
            натуральный хлопок. Благодаря этому постельное белье из жаккарда
            дышит, пропускает воздух, обеспечивает комфортный сон. Жаккард имеет
            сложный рисунок, который получается в процессе плетения.
  `,
  description: `
 Ткань в рулонах — нетканое переплетение волокон, которые образуют плотный и прочный материал.
Рулоны ткани — это рулон материала, который имеет стандартную ширину, определенную в соответствии с требованиями заказчика, но обычно это ширина около 6 футов.
Для производства ткани в рулоне используются природные материалы и синтетические материалы.
Большинство натуральных тканей, используемых для производства рулона, производятся из растительных материалов, таких как хлопок, лен, шерсть и шелк.
Ткань в рулонах для пошива одежды
Рулон ткани может использоваться в различных целях.
Он может быть использован для создания одежды, ковров, штор и т. Д. Ткань в рулоне обычно бывает шириной около 6 футов и имеет длину около 150 футов.
Если у вас есть заказ на ткань в рулоне, вы можете выбрать рулоны шириной 3 фута или 4 фута.
В рулоне могут быть использованы только натуральные волокна.
Это обычно изготавливается из шелка, хлопка, шерсти, льна и других материалов.
`,
  attributes: [
    {
      label: "Ширина, см",
      value: 130,
    },
    {
      label: "Бренд",
      value: "Брэд",
    },
    {
      label: "Страна-изготовитель",
      value: "Китай",
    },
    {
      label: "Материал",
      value: "Микровелюр",
    },
  ],
};

const count = ref(1);
const currentSize = ref(productData.sizes[0].value);
const currentColor = ref(productData.colors[0].value);
</script>

<template>
  <!-- Shop Detail Start -->
  <div class="container-fluid pb-5">
    <div class="row px-xl-5">
      <div class="col-lg-5 mb-30">
        <ProductImageCarousel :images="productData.images" />
      </div>

      <div class="col-lg-7 h-auto mb-30">
        <div class="h-100 bg-light p-30">
          <h3>{{ productData.title }}</h3>
          <h3 class="fw-semi-bold mb-4">{{ productData.price }}</h3>
          <p class="mb-4">
            {{ productData.description_short }}
          </p>
          <div class="d-flex mb-3">
            <strong class="text-dark me-3">Размер:</strong>
            <template v-for="(size, i) in productData.sizes" :key="size.value">
              <InputRadio
                v-model="currentSize"
                :value="size.value"
                :id="`${size.value}-${i}`"
                name="size"
              >
                {{ size.title }}
              </InputRadio>
            </template>
          </div>
          <div class="d-flex mb-4">
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
          </div>
          <div class="d-flex align-items-center mb-4 pt-2">
            <div class="input-group quantity me-3" style="width: 130px">
              <div class="input-group-btn">
                <button class="btn btn-primary btn-minus">
                  <Icon icon="fa-solid fa-minus"></Icon>
                </button>
              </div>
              <input
                type="text"
                class="form-control bg-secondary border-0 text-center"
                :value="count"
              />
              <div class="input-group-btn">
                <button class="btn btn-primary btn-plus">
                  <Icon icon="fa-solid fa-plus"></Icon>
                </button>
              </div>
            </div>
            <button class="btn btn-primary px-3">
              <Icon icon="fa-solid fa-shopping-cart me-1"></Icon>
              В корзину
            </button>
          </div>
          <div class="d-flex pt-2">
            <strong class="text-dark me-2">Поделиться:</strong>
            <div class="d-inline-flex">
              <a class="text-dark px-2" href="">
                <Icon
                  icon="fa-brands fa-facebook"
                  class="text-dark"
                  size="2x"
                />
              </a>
              <a class="text-dark px-2" href="">
                <Icon icon="fa-brands fa-twitter" size="2x"></Icon>
              </a>
              <a class="text-dark px-2" href="">
                <Icon icon="fa-brands fa-linkedin-in" size="2x"></Icon>
              </a>
              <a class="text-dark px-2" href="">
                <Icon icon="fa-brands fa-pinterest" size="2x"></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <TabPanel id="tab-description">
              <h4 class="mb-3">Описание</h4>
              <p>
                {{ productData.description }}
              </p>
            </TabPanel>
            <TabPanel id="tab-attributes">
              <h4 class="mb-3">Характеристики</h4>
              <div class="col-md-6">
                <dl v-for="item in productData.attributes">
                  <dt>{{ item.label }}</dt>
                  <dd>{{ item.value }}</dd>
                </dl>
              </div>
            </TabPanel>
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
                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star"></Icon>
                        <Icon icon="fa-solid fa-star-half-alt"></Icon>
                        <Icon icon="fa-regular fa-star"></Icon>
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
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
                      <Icon icon="fa-regular fa-star"></Icon>
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
