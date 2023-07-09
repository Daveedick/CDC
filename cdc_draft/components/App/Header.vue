<template>
  <div class="">
    <div
      class="flex un-justify-between un-items-center un-max-w-320 un-mx-4 md:un-mx-20 un-relative un-mt-2 lg:un-mt-8 un-mb-8 lg:un-mb-40"
    >
      <!-- LOGO -->
      <img
        :src="store.data.logo.imgURL"
        :alt="store.data.logo.imgURL"
        class="un-w-23 un-h-6 md:un-w-32.5 md:un-h-16"
      >

      <Nav />

    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from '~/components/App/Nav.vue';

import { useHeaderStore } from '~/store/header';

const store = useHeaderStore();
</script>
