<template>
  <section id="howWorks">
    <TitleSecondary :title="text.title" :subtitle="text.subtitle" class="un-mb-20" />
    <div class="flex un-flex-col-reverse md:un-flex-row">
      <!-- CARDS -->
      <div class="un-max-w-131 md:un-mr-4 un-mt-2">
        <ul class="list-none p-0 m-0">
          <li v-ripple class="un-cursor-pointer un-p-6 un-transition-all transition-duration-500 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-white un-text-black un-rd-2': active === 0, 'un-text-white hover:un-bg-white un-rd-4': active !== 0 }"
            @click="active = 0">
            <div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">Выберите основу</div>
            <div class="un-fw-normal un-lh-5">Клиент выбирает понравившееся изделие из&nbsp;вашего каталога моделей
              и&nbsp;переходит
              в&nbsp;примерочную</div>
          </li>
          <li v-ripple class="un-cursor-pointer un-p-6 un-transition-all transition-duration-500 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-white un-text-black un-rd-2': active === 1, 'un-text-white hover:un-bg-white un-rd-4': active !== 1 }"
            @click="active = 1">
            <div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">Меняйте детали и&nbsp;цвета</div>
            <div class="un-fw-normal un-lh-5">В&nbsp;конструкторе клиент изменяет доступные детали изделия
              и&nbsp;их&nbsp;цвета в&nbsp;режиме онлайн</div>
          </li>
          <li v-ripple class="un-cursor-pointer un-p-6 un-transition-all transition-duration-500 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-white un-text-black un-rd-2': active === 2, 'un-text-white hover:un-bg-white un-rd-4': active !== 2 }"
            @click="active = 2">
            <div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">Получите визуализацию в&nbsp;3D</div>
            <div class="un-fw-normal un-lh-5">В&nbsp;итоге клиент получает полноценную визуализацию своего готового
              дизайна
              в&nbsp;3D</div>
          </li>
          <li v-ripple class="un-cursor-pointer un-p-6 un-transition-all transition-duration-500 p-ripple"
            style="--un-bg-opacity: .1;"
            :class="{ 'bg-white un-text-black un-rd-2': active === 3, 'un-text-white hover:un-bg-white un-rd-4': active !== 3 }"
            @click="active = 3">
            <div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">Оформляйте заказ онлайн</div>
            <div class="un-fw-normal un-lh-5">Для оформления заказа клиент выбирает рост, количество размеров
              и&nbsp;единиц
              в&nbsp;заказе, а&nbsp;далее получает итоговую стоимость партии</div>
          </li>
        </ul>
      </div>
      <!-- SLIDER -->
      <div class="un-w-full un-h-70 md:un-h-130 un-bg-white" style="--un-bg-opacity: .05;"></div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  setup() {
    const text = {
      title: 'Как это работает?',
      subtitle: 'Всего 4 простых действия, чтобы получить уникальную вещь на рынке одежды'
    }
    let active = ref(0);
    return { text, active }
  }
}
</script>
