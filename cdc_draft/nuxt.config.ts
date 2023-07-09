// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [
      "primevue/resources/themes/lara-light-blue/theme.css",
      "primevue/resources/primevue.css",
      "primeflex/primeflex.css",
      "@/assets/global.scss"
  ],
  build: {
    transpile: ["primevue"]
  },
  modules: [
    '@unocss/nuxt',
    // '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',

  ],
  pinia: {
		autoImports: ['defineStore', 'storeToRefs']
	},
  // imports: {
  //   autoImport: false
  // },
  // components: false
})
