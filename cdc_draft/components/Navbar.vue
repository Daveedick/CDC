<template>
  <section id="navbar">
    <div class="flex un-justify-between un-items-center un-z-100 un-relative un-mb-40">
      <img src="../public/images/logo.svg" alt="Logo">
      <ul
        class="list-none un-m-0 un-rd-2 un-p-2 flex overflow-x-auto select-none un-bg-white un-backdrop-filter fixed un-right-0 un-translate-x--20"
        style="--un-bg-opacity: .05; --un-backdrop-blur: blur(.5rem);">
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-4 un-py-3 flex align-items-center hover:un-bg-white text-white border-round transition-colors transition-duration-150 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-primary hover:bg-primary': active2 === 0, 'text-700': active2 !== 0 }" @click="active2 = 0">
            <span class="font-medium">Как это работает</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white border-round transition-colors transition-duration-150 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-primary hover:bg-primary': active2 === 1, 'text-700': active2 !== 1 }" @click="active2 = 1">
            <span class="font-medium">Примеры</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white border-round transition-colors transition-duration-150 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-primary hover:bg-primary': active2 === 2, 'text-700': active2 !== 2 }" @click="active2 = 2">
            <span class="font-medium">Отзывы</span>
          </a>
        </li>
        <li class="mr-2">
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center hover:un-bg-white text-white border-round transition-colors transition-duration-150 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-primary hover:bg-primary': active2 === 3, 'text-700': active2 !== 3 }" @click="active2 = 3">
            <span class="font-medium">Контакты</span>
          </a>
        </li>
        <li>
          <a v-ripple
            class="cursor-pointer un-px-16px un-py-12px flex align-items-center bg-purple-700 text-white hover:bg-green-500 border-round transition-colors transition-duration-150 p-ripple"
            :class="{ 'bg-primary hover:bg-primary': active2 === 4, 'text-700': active2 !== 4 }" @click="active2 = 4">
            <span class="font-medium">В конструктор</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scopes>
#navbar {
  // ul {
  //   background-color: rgba(255, 255, 255, .05);
  // }

}
</style>
