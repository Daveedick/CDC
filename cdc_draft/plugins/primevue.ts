import { defineNuxtPlugin } from "#app";
import Button from "primevue/button";
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
	nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.directive('ripple', Ripple);
  nuxtApp.vueApp.directive('styleclass', StyleClass);
})
