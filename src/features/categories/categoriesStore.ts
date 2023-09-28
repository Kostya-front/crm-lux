import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {instance} from "@/shared/axios";



export interface ICategory {
  id: number
  title: string
  url: string
}

export interface ICategorySend {
  title: string
  url: string
}

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])

  const category = reactive<ICategorySend>({
    title: '',
    url: ''
  })

  const editingCategory = reactive<ICategory>({
    id: 0,
    title: '',
    url: ''
  })

  function fillEditForm(id: number) {
    const foundCategory = categories.value.find(category => category.id === id)

    if(foundCategory) {
      editingCategory.id = foundCategory.id
      editingCategory.title = foundCategory.title
      editingCategory.url = foundCategory.url
    }
  }

  async function getAll() {
    const {data} = await instance.get('categories')
    categories.value = data
  }

  async function createCategory() {
    const {data} = await instance.post<ICategory>('/categories', category)
    categories.value.push({...data})
    category.title = ''
    category.url = ''
  }

  async function editCategory() {
    await instance.patch(`categories/${editingCategory.id}`, editingCategory)
    categories.value = categories.value.map(category => {
      if(category.id === editingCategory.id) {
        category.title = editingCategory.title
        category.url = editingCategory.url
        return category
      }

      return  category
    })
  }

  async function deleteCategory(id: number) {
    await instance.delete(`categories/${id}`)
    categories.value = categories.value.filter(category => category.id !== id)
  }

  return {
    categories,
    category,
    editingCategory,
    createCategory,
    deleteCategory,
    editCategory,
    fillEditForm,
    getAll
  }
})