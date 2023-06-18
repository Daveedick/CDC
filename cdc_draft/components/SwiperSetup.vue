<template>
  <Swiper :modules="[SwiperEffectCreative, SwiperMousewheel, SwiperNavigation, SwiperPagination]" :effect="'creative'"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }" :pagination="{
  el: '.swiper-pagination', clickable: true
}" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :mousewheel="{ forceToAxis: true, sensitivity: 100 }" :loop="true" :slides-per-view="1">

    <slot />

  </Swiper>
</template>
