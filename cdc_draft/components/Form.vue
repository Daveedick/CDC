<template>
  <section id="from">
    <TitleSecondary :title="text.title" :subtitle="text.subtitle" class="un-mb-5" />

    <!-- INPUTS -->
    <form class="flex un-flex-col sm:un-flex-row sm:un-flex-wrap un-gap-4 un-justify-center">
      <input type="text" name="name" id="name" placeholder="Имя"
        class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2">
      <input type="text" name="tel" id="tel" placeholder="Телефон"
        class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2">
      <Button label="Отправить"
        class="un-w-full sm:un-w-68 un-py-4 un-px-23 cdc-gradient purple to-green un-border-none un-rd-2" />
    </form>
  </section>
</template>

<script setup lang="ts">
const text = {
  title: 'Хотите узнать больше о нашем сервисе?',
  subtitle: 'Если у вас есть вопросы, оставьте свои контакты: мы позвоним, чтобы ответить на все ваши вопросы'
}
</script>
