import {defineStore} from "pinia";
import {reactive, ref} from "vue";



export interface ICategory {
  id: number
  title: string
  urlImage: string
}

export interface ICategorySend {
  title: string
  urlImage: string
}

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategorySend[]>([])
  const category = reactive<ICategorySend>({
    title: '',
    urlImage: ''
  })

  function createCategory() {
    categories.value.push({...category})
    category.title = ''
    category.urlImage = ''
  }

  function deleteCategory(title: string) {
    categories.value = categories.value.filter(category => category.title !== title)
  }

  return {
    categories,
    category,
    createCategory,
    deleteCategory
  }
})