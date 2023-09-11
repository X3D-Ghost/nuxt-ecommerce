<script setup>
const colorMode = useColorMode();
</script>

<template>
  <!-- Topbar Start -->
  <div class="container-fluid">
    <div class="row bg-secondary py-1 px-xl-5">
      <div class="col-lg-6 d-none d-lg-block">
        <div class="d-inline-flex align-items-center h-100">
          <nuxt-link class="text-body me-3" href="/">О нас</nuxt-link>
          <nuxt-link class="text-body me-3" href="/contact">
            Связь с нами
          </nuxt-link>
          <nuxt-link class="text-body me-3" href="/">Помощь</nuxt-link>
          <nuxt-link class="text-body me-3" href="/">FAQ</nuxt-link>
        </div>
      </div>
      <div class="col-lg-6 text-center text-lg-end">
        <div class="d-inline-flex align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Мой профиль
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <button class="dropdown-item" type="button">Войти</button>
              <button class="dropdown-item" type="button">Регистрация</button>
            </div>
          </div>
          <!--          <div class="btn-group mx-2">
            <button
              type="button"
              class="btn btn-sm btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              USD
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <button class="dropdown-item" type="button">RUB</button>
              <button class="dropdown-item" type="button">EUR</button>
              <button class="dropdown-item" type="button">GBP</button>
              <button class="dropdown-item" type="button">CAD</button>
            </div>
          </div>-->
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              RU
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <button class="dropdown-item" type="button">FR</button>
              <button class="dropdown-item" type="button">AR</button>
              <button class="dropdown-item" type="button">EN</button>
            </div>
          </div>
        </div>
        <div class="d-inline-flex align-items-center d-block d-lg-none">
          <a href="" class="btn px-0 ms-2">
            <Icon icon="fa-solid fa-heart" class="text-dark" />
            <span
              class="badge text-dark border border-dark rounded-circle"
              style="padding-bottom: 2px"
              >0</span
            >
          </a>
          <a href="" class="btn px-0 ms-2">
            <Icon icon="fa-solid fa-shopping-cart" class="text-dark" />
            <span
              class="badge text-dark border border-dark rounded-circle"
              style="padding-bottom: 2px"
              >0</span
            >
          </a>
        </div>
      </div>
    </div>
    <div
      :class="[`bg-${colorMode}`]"
      class="row align-items-center py-3 px-xl-5 d-none d-lg-flex"
    >
      <div class="col-lg-4">
        <nuxt-link to="/" class="text-decoration-none">
          <span class="h1 text-uppercase text-primary bg-dark px-2">Текс</span>
          <span class="h1 text-uppercase text-dark bg-primary px-2 ms-n1"
            >шоп</span
          >
        </nuxt-link>
      </div>
      <div class="col-lg-4 col-6 text-start">
        <form action="">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="Поиск продукции"
              aria-label="Поиск"
            />
            <!--            <div class="input-group-append">-->
            <!--            <span class="input-group-text bg-transparent text-primary">
              &lt;!&ndash;                <i class="fa fa-search"></i>&ndash;&gt;
              <Icon icon="fa-soli fa-search" />
            </span>-->
            <!--            </div>-->
            <button class="btn">
              <Icon icon="fa-soli fa-search" />
            </button>
          </div>
        </form>
      </div>
      <div class="col-lg-4 col-6 text-end">
        <p class="m-0">Служба поддержки</p>
        <h5 class="m-0">+7 800 555 3535</h5>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      <div class="col-lg-3 d-none d-lg-block position-relative">
        <a
          class="btn d-flex align-items-center justify-content-between bg-primary w-100 px-4"
          data-bs-toggle="collapse"
          href="#navbar-vertical"
          style="height: 65px"
        >
          <h6 class="text-dark m-0">
            <Icon icon="fa-solid fa-bars" class="me-2" />Каталог товаров
          </h6>
          <Icon icon="fa-solid fa-angle-down" class="text-dark" />
        </a>
        <nav
          class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style="width: calc(100% - 30px); z-index: 999"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown dropright">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Dresses <i class="fa fa-angle-right float-end mt-1"></i
              ></a>
              <div
                class="dropdown-menu position-absolute rounded-0 border-0 m-0"
              >
                <a href="" class="dropdown-item">Men's Dresses</a>
                <a href="" class="dropdown-item">Women's Dresses</a>
                <a href="" class="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href="" class="nav-item nav-link">Shirts</a>
            <a href="" class="nav-item nav-link">Jeans</a>
            <a href="" class="nav-item nav-link">Swimwear</a>
            <a href="" class="nav-item nav-link">Sleepwear</a>
            <a href="" class="nav-item nav-link">Sportswear</a>
            <a href="" class="nav-item nav-link">Jumpsuits</a>
            <a href="" class="nav-item nav-link">Blazers</a>
            <a href="" class="nav-item nav-link">Jackets</a>
            <a href="" class="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0"
        >
          <a href="" class="text-decoration-none d-block d-lg-none">
            <span class="h1 text-uppercase text-dark bg-light px-2">Текс</span>
            <span class="h1 text-uppercase text-light bg-primary px-2 ms-n1"
              >Шоп</span
            >
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav me-auto py-0">
              <nuxt-link
                href="/"
                class="nav-item nav-link"
                active-class="active"
                >Главная</nuxt-link
              >
              <nuxt-link
                href="/shop"
                class="nav-item nav-link"
                active-class="active"
                >Магазин</nuxt-link
              >
              <nuxt-link
                to="/catalog"
                class="nav-item nav-link"
                active-class="active"
                >Каталог</nuxt-link
              >
              <nuxt-link
                href="/product/1"
                class="nav-item nav-link"
                active-class="active"
                >Товар</nuxt-link
              >
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Страницы
                  <!--                  <i class="fa fa-angle-down mt-1"></i>-->
                  <Icon icon="fa-solid fa-angle-down" class="my-1" />
                </a>
                <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <nuxt-link
                    href="/cart"
                    class="dropdown-item"
                    active-class="active"
                    >Корзина</nuxt-link
                  >
                  <nuxt-link
                    href="/checkout"
                    class="dropdown-item"
                    active-class="active"
                    >Оформление</nuxt-link
                  >
                </div>
              </div>
              <nuxt-link
                href="/contact"
                class="nav-item nav-link"
                active-class="active"
                >Связь с нами</nuxt-link
              >
            </div>
            <div class="navbar-nav ms-auto py-0 d-none d-lg-block">
              <a href="" class="btn px-0">
                <Icon icon="fa-solid fa-heart" class="text-primary" />
                <span
                  class="badge text-secondary border border-secondary rounded-circle"
                  >0</span
                >
              </a>
              <a href="" class="btn px-0 ms-3">
                <Icon icon="fa-solid fa-shopping-cart" class="text-primary" />
                <span
                  class="badge text-secondary border border-secondary rounded-circle"
                  >0</span
                >
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- Navbar End -->
</template>
