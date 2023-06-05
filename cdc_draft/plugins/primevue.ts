import { defineNuxtPlugin } from "#app";
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Ripple from 'primevue/ripple';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
	nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.directive('ripple', Ripple);
})
