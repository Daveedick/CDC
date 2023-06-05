<template>
  <div class="un-mt-8 un-mx-20 un-ma">
    <div class="relative" style="min-height: 20rem">
      <Navbar />
      <Hero />
      <HowWorks />
    </div>
  </div>
</template>

<style>
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #111212;
  line-height: 1.5rem;
}

/* SCROLLBAR */
/* Width */
::-webkit-scrollbar {
  width: .2rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(126, 34, 206);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #22c55e;
}
</style>
