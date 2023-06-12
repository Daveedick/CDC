<template>
  <section id="testimonials" class="">
    <TitleSecondary :title="text.title" :subtitle="text.subtitle" class="un-mb-12 md:un-mb-8" />

    <div id="testimonialSlider" class="un-max-w-200 un-ma">
      <div class="un-mb-8 md:un-mb-12 un-p-6 md:un-p-12 md:un-text-8 un-lh-10 un-bg-white un-rd-4 md:un-rd-8">
        <p>Классный сервис, инновационно, современно, советуем всем. Данная платформа - шаг в будущее.
          Великолепно, супер!
        </p>
      </div>
      <div class="slider-control flex un-justify-between ">
        <i class="i-mdi:chevron-left-circle un-text-white un-text-10"></i>
        <div id="userAvatar" class="flex un-flex-col un-items-center">
          <i class="i-mdi:incognito-circle un-mb-4 un-text-white un-text-16"></i>
          <p class="un-fw-700 un-text-white">John Doe</p>
          <p class="un-mb-10 un-text-white">Jesus Christ Journal</p>
          <div class="flex un-items-center">
            <i class="i-mdi:circle-small un-text-white un-text-6"></i>
            <i class="i-mdi:circle-outline un-text-white un-text-4"></i>
            <i class="i-mdi:circle-small un-text-white un-text-6"></i>
            <i class="i-mdi:circle-small un-text-white un-text-6"></i>
            <i class="i-mdi:circle-small un-text-white un-text-6"></i>
            <i class="i-mdi:circle-small un-text-white un-text-6"></i>
          </div>
        </div>
        <i class="i-mdi:chevron-right-circle un-text-white un-text-10"></i>
      </div>
    </div>

  </section>
</template>


<script lang="ts">
export default {
  setup() {
    const text = {
      title: 'О нас пишут',
      subtitle: 'Создание одежды еще никогда не было таким простым'
    }
    return { text }
  }
}
</script>
