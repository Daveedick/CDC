<template>
  <div>
    <BaseLayer>
      <NavBar />
      <Hero />
      <HowWorks />
    </BaseLayer>
    <UpperLayer>
      <Benefits />
    </UpperLayer>
    <BaseLayer>
      <Form />
    </BaseLayer>
    <UpperLayer>
      <Benefits />
    </UpperLayer>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const activateScrollbar = (element: HTMLElement) => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      const percentage = ref(scrollPercentRounded)
      element.style.height = `${percentage.value}%`
    }

    const createCustomScrollbar = () => {
      const customScrollbar = document.createElement('div');
      customScrollbar.id = 'customScrollbar';
      customScrollbar.className = 'un-bg-black'
      const scrollbar = document.createElement('div');
      scrollbar.className = 'cdc-gradient purple';
      customScrollbar.append(scrollbar);
      document.getElementById('__nuxt')?.prepend(customScrollbar);
    }


    onMounted(() => {
      createCustomScrollbar();
      const scrollbar: HTMLElement = document.querySelector('#customScrollbar > div')!;
      window.addEventListener("scroll", () => {
        activateScrollbar(scrollbar);
      });
    })

  }
}
</script>
