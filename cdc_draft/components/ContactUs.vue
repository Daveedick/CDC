<template>
  <section id="contactUs">
    <div class="un-p-20 un-bg-gray un-rd-16">

      <div class="un-relative un-mb-16 un-p-16 cdc-gradient purple un-rd-4">

        <!-- Title -->
        <div id="title" class="un-mr-8">
          <div class="text-white font-bold un-text-12 un-lh-14 un-mb-2">Свяжитесь с&nbsp;нами</div>
          <div class="un-text-white" style="--un-text-opacity: .75;">
            Оставьте свои контакты, чтобы мы&nbsp;могли больше рассказать вам о&nbsp;преимуществах и&nbsp;выгодах нашего
            сервиса для вашего бизнеса</div>
        </div>

        <!-- Form -->
        <form class="un-absolute un-top-20 un-right-10 un-p-8 un-bg-white un-rd-4">
          <div class="un-mb-4 un-text-6 un-lh-10 un-fw-700">Ваши контакты</div>
          <input type="text" id="name" placeholder="Имя"
            class="un-w-full un-mb-4 un-p-4 un-bg-black un-border-none un-rd-2" style="--un-bg-opacity: .05;">
          <input type="text" name="tel" id="tel" placeholder="Телефон"
            class="un-w-full un-mb-4 un-p-4 un-bg-black un-border-none un-rd-2" style="--un-bg-opacity: .05;">
          <div class="un-mb-4 un-text-black" style="--un-text-opacity: .5;">Нажимая &laquo;Отправить&raquo;
            вы&nbsp;соглашаетесь
            на&nbsp;обработку персональных данных</div>
          <Button label="Отправить"
            class="un-w-full un-py-4 un-px-23 cdc-gradient purple to-green un-border-none un-rd-2" />
        </form>
      </div>


    </div>
  </section>
</template>

<style scoped lang="scss">
#contactUs {
  --form-width: 21rem;

  #title {
    max-width: calc(100% - var(--form-width));
  }

  form {
    max-width: var(--form-width);
  }
}
</style>
