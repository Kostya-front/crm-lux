import {defineStore} from "pinia";
import {ref} from "vue";


export const usePopupStore = defineStore('popup', () => {
  const isVisible = ref(false)

  function togglePopup() {
    isVisible.value = !isVisible.value
  }

  return {
    isVisible,
    togglePopup
  }
})