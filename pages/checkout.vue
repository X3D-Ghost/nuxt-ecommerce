<script setup lang="ts">
const deliveryOptions = [
  { label: "Самовывоз", value: "pickup" },
  { label: "Доставка курьером", value: "delivery" },
  { label: "Доставка почтой", value: "post" },
];
</script>

<template>
  <!-- Checkout Start -->
  <div class="container-fluid">
    <div class="row px-xl-5">
      <div class="col-lg-8">
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary pe-3">Billing Address</span>
        </h5>
        <div class="bg-light p-30 mb-5">
          <div class="grid">
            <InputField class="g-col-md-6" label="Имя" placeholder="Ваше имя" />
            <InputField
              class="g-col-md-6"
              label="Фамилия"
              placeholder="Ваша фамилия"
            />
            <InputField
              class="g-col-md-6"
              label="E-mail"
              placeholder="example@mail.ru"
              type="email"
            />
            <InputField
              class="g-col-md-6"
              label="Номер телефона"
              placeholder="+7(***)-***-**-**"
              type="tel"
            />
            <InputSelect
              class="g-col-md-12"
              label="Способ получения"
              :options="deliveryOptions"
            />
            <InputField class="g-col-md-6" label="Город" placeholder="" />
            <InputField class="g-col-md-6" label="Адрес" placeholder="" />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary pe-3">Сумма заказа</span>
        </h5>
        <div class="bg-light p-30 mb-5">
          <div class="border-bottom">
            <h6 class="mb-3">Товары</h6>
            <div class="d-flex justify-content-between">
              <p>Product Name 1</p>
              <p>$150</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Product Name 2</p>
              <p>$150</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Product Name 3</p>
              <p>$150</p>
            </div>
          </div>
          <div class="border-bottom pt-3 pb-2">
            <div class="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>$150</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="fw-medium">Shipping</h6>
              <h6 class="fw-medium">$10</h6>
            </div>
          </div>
          <div class="pt-2">
            <div class="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>$160</h5>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <h5 class="section-title position-relative text-uppercase mb-3">
            <span class="bg-secondary pe-3">Payment</span>
          </h5>
          <div class="bg-light p-30">
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="paypal"
                />
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="directcheck"
                />
                <label class="custom-control-label" for="directcheck"
                  >Direct Check</label
                >
              </div>
            </div>
            <div class="form-group mb-4">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="banktransfer"
                />
                <label class="custom-control-label" for="banktransfer"
                  >Bank Transfer</label
                >
              </div>
            </div>
            <button class="btn btn-block btn-primary fw-bold py-3">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Checkout End -->
</template>

<style scoped></style>
