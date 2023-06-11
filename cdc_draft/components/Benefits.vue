<template>
  <div id="benefits">
    <TitleSecondary :title="text.title" :subtitle="text.subtitle" class="un-mb-8 md:un-mb-16" />

    <!-- CARDS -->
    <div class="un-flex un-h-143 un-gap-8">
      <!-- 1 -->
      <div class="un-grid un-gap-8" style="grid-template-rows: 1fr;">
        <div class="un-p-8 cdc-gradient purple un-rd-4 un-hover-scale">
          <div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">Удобный сервис</div>
          <div class="un-text-white">Привлекайте новых клиентов удобным и&nbsp;современным сервисом, который
            не&nbsp;требует дополнительных знаний и&nbsp;навыков</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="un-grid un-gap-8" style="grid-template-rows: 1fr 1fr;">
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">Профессиональная визуализация</div>
          <div>Демонстрируйте разнообразные дизайны в&nbsp;3D, и&nbsp;упрощайте процесс согласований и&nbsp;доработок
            клиентов</div>
        </div>
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">Быстрый цикл сделки</div>
          <div>Сокращайте цикл сделки заказа без пошива образца, увеличивая маржинальность партии</div>
        </div>
      </div>
      <!-- 3 -->
      <div class="un-grid un-gap-8" style="grid-template-rows: 2fr 1fr;">
        <div class="un-p-8 cdc-gradient purple un-rd-4 un-hover-scale">
          <div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">Ускоренный запуск</div>
          <div class="un-text-white">Ускоряйте процессы по&nbsp;запуску пошива, утверждая цветовое сочетание будущей
            партии клиента прямо у&nbsp;нас в&nbsp;сервисе</div>
        </div>
        <div class="un-p-8 un-bg-#DADFE5 un-rd-4 un-hover-scale">
          <div class="un-text-6 un-lh-8 un-fw-bold un-mb-2">Рост продаж</div>
          <div>Увеличивайте количество продаж, оперативно обрабатывая заказы клиентов в&nbsp;режиме онлайн</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const text = {
  title: 'Выгода для вашего бизнеса',
  subtitle: 'Увеличьте свою прибыль за счёт нашего автоматизированного сервиса'
}
</script>
