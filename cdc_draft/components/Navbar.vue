<template>
  <section id="navbar">
    <div class="flex un-justify-between un-items-center un-z-100 un-relative un-mb-8 md:un-mb-40">
      <!-- LOGO -->
      <img src="/images/logo.svg" alt="Logo" class="un-w-23 un-h-6 md:un-w-32.5 md:un-h-16">

      <!-- DESCTOP -->
      <ul
        class="hidden lg:flex list-none un-m-0 un-rd-2 un-p-2 overflow-x-auto select-none un-bg-white un-backdrop-filter fixed un-right-22"
        style="--un-bg-opacity: .05; --un-backdrop-blur: blur(.5rem);">
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-4 un-py-3 flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors p-ripple"
            style="--un-bg-opacity: .1;" :class="{ 'un-bg-white': anchor === 0 }" @click="anchor = 0">
            <span class="font-medium">Как это работает</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors p-ripple"
            style="--un-bg-opacity: .1;" :class="{ 'un-bg-white': anchor === 1 }" @click="anchor = 1">
            <span class="font-medium">Примеры</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors p-ripple"
            style="--un-bg-opacity: .1;" :class="{ 'un-bg-white': anchor === 2 }" @click="anchor = 2">
            <span class="font-medium">Отзывы</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors p-ripple"
            style="--un-bg-opacity: .1;" :class="{ 'un-bg-white': anchor === 3 }" @click="anchor = 3">
            <span class="font-medium">Контакты</span>
          </a>
        </li>
        <li>
          <a to="/" v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex un-decoration-none align-items-center cdc-gradient purple to-green text-white un-rd-2 un-transition-all p-ripple">
            <span class="font-medium">В конструктор</span>
          </a>
        </li>
      </ul>

      <!-- MOBILE -->
      <div class="flex md:hidden">

      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  setup() {
    const anchor = ref();
    return {
      anchor
    }
  }
}
</script>
