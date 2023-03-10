import clickOutside from "~/directives/click-ouside"
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutside)
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log(error);
    console.log(context);
  };
})