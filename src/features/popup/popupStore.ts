import {defineStore} from "pinia";
import {ref, watch} from "vue";
import router from "@/router";


export const usePopupStore = defineStore('popup', () => {
  const isVisible = ref(false)



  function togglePopup() {
    isVisible.value = !isVisible.value
  }


  return {
    isVisible,
    togglePopup,
  }
})