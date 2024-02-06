import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {instance} from "@/shared/axios";
import {AxiosError} from "axios";



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

  const errorMessage = ref('')

  const category = reactive<ICategorySend>({
    title: '',
    url: ''
  })

  const editingCategory = reactive<ICategory>({
    id: 0,
    title: '',
    url: '',
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
    try {
      const {data} = await instance.get('categories')
      categories.value = data;
    } catch (e: AxiosError | any){
      errorHandler(e)
    }

  }

  async function createCategory() {
    try{

      validationClientError([
        {condition: !category.title || !category.url, message:'Все поля должны быть заполнены' },
        {condition: category.title.length <= 3, message:'Заголовок должен быть больше 3 символов'},
      ])

      const {data} = await instance.post<ICategory>('/categories', category)
      categories.value.push({...data})

      resetForm()

    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  async function editCategory() {
    try {
      validationClientError([
        {condition: !editingCategory.title || !editingCategory.url, message:'Все поля должны быть заполнены' },
        {condition: editingCategory.title.length <= 3, message:'Заголовок должен быть больше 3 символов'},
      ])

      await instance.patch(`categories/${editingCategory.id}`, editingCategory)

      categories.value = categories.value.map(category => {
        if(category.id === editingCategory.id) {
          category.title = editingCategory.title
          category.url = editingCategory.url
          return category
        }
        return  category
      })
    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  async function deleteCategory(id: number) {
    try {
      await instance.delete(`categories/${id}`)
      categories.value = categories.value.filter(category => category.id !== id)
    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  function resetForm() {
    category.title = ''
    category.url = ''
    errorMessage.value = ''
  }

  function validationClientError(errors: {condition: boolean, message: string}[]) {
    errors.forEach(error => {
      if(error.condition) {
        throw new Error(error.message)
      }
    })
  }

  function errorHandler(e: AxiosError | any) {
    if(e instanceof AxiosError) {
      const error = e.response?.data?.message || e.message
      return errorMessage.value = error
    }

    const error = e.message

    errorMessage.value = error
  }

  return {
    categories,
    category,
    errorMessage,
    editingCategory,
    createCategory,
    deleteCategory,
    validationClientError,
    resetForm,
    errorHandler,
    editCategory,
    fillEditForm,
    getAll
  }
})