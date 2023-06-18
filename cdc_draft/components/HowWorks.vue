<template>
  <section id="howWorks">
    <TitleSecondary :title="texts.titleSec.title" :subtitle="texts.titleSec.subtitle" class="un-mb-8 lg:un-mb-20" />

    <!-- DESKTOP -->
    <div class="flex un-flex-col-reverse md:un-flex-row">
      <!-- CARDS -->
      <div class="un-max-w-131 md:un-mr-4 un-mt-2">
        <ul class="list-none p-0 m-0">
          <li v-for="(item, index) in texts.cards" :key="index" v-ripple
            class="un-cursor-pointer un-p-6 un-transition-all transition-duration-500 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-white un-text-black un-rd-2': active === index, 'un-text-white hover:un-bg-white un-rd-4': active !== index }"
            @click="active = index">
            <div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">{{ item.title }}</div>
            <div class="un-fw-normal un-lh-5">{{ item.description }}</div>
          </li>
        </ul>
      </div>

      <!-- SWIPER -->
      <SwiperSetup class="flex un-w-full un-h-70 md:un-h-130">

        <Swiper-slide v-for="src in srcs" :key="src" class="flex un-justify-center">
          <img :src="src.path" :alt="src.alt" class="un-h-85% un-wa">
        </Swiper-slide>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-next i-mdi:chevron-right-circle un-text-size-12 un-text-white"></div>
        <div class="swiper-button-prev i-mdi:chevron-left-circle un-text-size-12 un-text-white"></div>
      </SwiperSetup>
    </div>

    <!-- MOBILE -->
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const texts = {
      titleSec: {
        title: 'Как это работает?',
        subtitle: 'Всего 4 простых действия, чтобы получить уникальную вещь на рынке одежды'
      },
      cards: [
        {
          title: 'Выберите основу',
          description: 'Клиент выбирает понравившееся изделие из вашего каталога моделей и переходит в примерочную',
        },
        {
          title: 'Меняйте детали и цвета',
          description: 'В конструкторе клиент изменяет доступные детали изделия и их цвета в режиме онлайн',
        },
        {
          title: 'Получите визуализацию в 3D',
          description: 'В итоге клиент получает полноценную визуализацию своего готового дизайна в 3D',
        },
        {
          title: 'Оформляйте заказ онлайн',
          description: 'Для оформления заказа клиент выбирает рост, количество размеров и единиц в заказе, а далее получает итоговую стоимость партии',
        },
      ]
    };

    const active = ref(0);

    const srcs = {
      1: { path: 'images/sample1.jpg', alt: '1' },
      2: { path: 'images/sample2.jpg', alt: '2' },
      3: { path: 'images/sample3.jpg', alt: '3' },
    };

    return {
      texts,
      active,
      srcs,
    };
  },
};
</script>

