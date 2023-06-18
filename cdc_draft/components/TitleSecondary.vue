<template>
  <div class="text-center un-cursor-default">
    <div id="title" class="text-white font-bold un-text-11 lg:un-text-12 un-lh-14 un-mb-4"> {{ title }}</div>
    <div id="subtitle" class="un-text-white" style="--un-text-opacity: .75;">
      {{ subtitle }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'subtitle']
}
</script>
