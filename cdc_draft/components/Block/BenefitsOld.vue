<template>
  <div id="benefits">
    <TitleSecondary
      :title="texts.titleSecondary.title"
      :subtitle="texts.titleSecondary.subtitle"
      class="un-mb-8 md:un-mb-16"
    />

    <!-- CARDS DESKTOP -->
    <div class="flex un-h-143 un-gap-8">
      <!-- 1 -->
      <div
        class="un-grid un-gap-8"
        style="grid-template-rows: 1fr;"
      >
        <div class="un-p-8 cdc-gradient purple un-rd-4 un-hover-scale">
          <div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ texts.cards.card1.title }}</div>
          <div class="un-text-white">{{ texts.cards.card1.description }}</div>
        </div>
      </div>
      <!-- 2 -->
      <div
        class="un-grid un-gap-8"
        style="grid-template-rows: 1fr 1fr;"
      >
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ texts.cards.card2.title }}</div>
          <div>{{ texts.cards.card2.description }}</div>
        </div>
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ texts.cards.card3.title }}</div>
          <div>{{ texts.cards.card3.description }}</div>
        </div>
      </div>
      <!-- 3 -->
      <div
        class="un-grid un-gap-8"
        style="grid-template-rows: 2fr 1fr;"
      >
        <div class="un-p-8 cdc-gradient purple un-rd-4 un-hover-scale">
          <div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ texts.cards.card4.title }}</div>
          <div class="un-text-white">{{ texts.cards.card4.description }}</div>
        </div>
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ texts.cards.card5.title }}</div>
          <div>{{ texts.cards.card5.description }}</div>
        </div>
      </div>
    </div>

    <!-- CARDS MOBILE -->
    <SwiperSetup
      :loop="false"
      :centeredSlides="true"
      class="un-max-w-90 swiper-mobile"
    >
      <SwiperSlide
        v-for="card in texts.cards"
        :key="card.title"
        class="un-h-88  un-ma un-mb-8 un-p-8 cdc-gradient purple un-rd-4"
      >
        <div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ card.title }}</div>
        <div class="un-text-white">{{ card.description }}</div>
      </SwiperSlide>
      <div class="swiper-pagination relative flex un-justify-center un-items-center"></div>
    </SwiperSetup>

  </div>
</template>

<script setup lang="ts">

const texts = {
  titleSecondary: {
    title: 'Выгода для вашего бизнеса',
    subtitle: 'Увеличьте свою прибыль за счёт нашего автоматизированного сервиса'
  },
  cards: {
    card1: {
      title: 'Удобный сервис',
      description: 'Привлекайте новых клиентов удобным и современным сервисом, который не требует дополнительных знаний и навыков',
    },
    card2: {
      title: 'Профессиональная визуализация',
      description: 'Демонстрируйте разнообразные дизайны в 3D, и упрощайте процесс согласований и доработок клиентов',
    },
    card3: {
      title: 'Быстрый цикл сделки',
      description: 'Сокращайте цикл сделки заказа без пошива образца, увеличивая маржинальность партии',
    },
    card4: {
      title: 'Ускоренный запуск',
      description: 'Ускоряйте процессы по запуску пошива, утверждая цветовое сочетание будущей партии клиента прямо у нас в сервисе',
    },
    card5: {
      title: 'Рост продаж',
      description: 'Увеличивайте количество продаж, оперативно обрабатывая заказы клиентов в режиме онлайн',
    },
  }
}
</script>

<style lang="scss">
#benefits {
  .swiper-mobile {
    .swiper-pagination-bullet-active {
      border-color: #9D75F3;
    }
  }
}
</style>
