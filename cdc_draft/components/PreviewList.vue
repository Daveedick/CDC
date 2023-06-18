<template>
  <!-- DESKTOP -->
  <!-- <div class="grid">
    <div v-for="item in previewItems" :key="item" class="col-12 lg:col-4">
      <div class="un-py-8 un-px-11 un-rd-4 shadow-2 flex align-items-center un-bg-white un-hover-scale"
        style="--un-bg-opacity: .05;">
        <div style="width:48px;height:48px;border-radius:10px"
          class="inline-flex align-items-center justify-content-center un-mr-4">
          <i :class="item.icon + ' un-text-white un-text-12'"></i>
        </div>
        <div>
          <p class="un-m-0 un-fw-medium un-text-white">{{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div> -->

  <!-- MOBILE -->
  <div class="un-p-4 un-bg-white un-rd-2" style="--un-bg-opacity: .05;">
    <div v-for="item in previewItems" :key="item" class="flex un-p-2 un-text-white">
      <i :class="item.icon + ' un-mr-4 un-text-12'"></i>
      <p class="un-text-3.5 un-lh-5">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const previewItems = {
      1: {
        icon: 'i-mdi:chart-timeline-variant-shimmer',
        description: 'Увеличьте объём продаж и охватывайте больше клиентов',
      },
      2: {
        icon: 'i-mdi:robot-industrial-outline',
        description: 'Автоматизируйте процесс утверждения дизайна онлайн',
      },
      3: {
        icon: 'i-mdi:lightning-bolt-outline',
        description: 'Ускорьте запуск пошива партии у себя на производстве',
      },
    }

    return {
      previewItems
    }
  }
}
</script>
