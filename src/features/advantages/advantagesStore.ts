import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";
import {AxiosError} from "axios";
import {instance} from "@/shared/axios";
import {ICategory} from "@/features/categories/categoriesStore";

export interface IAdvantage {
  id: number
  title: string
  description: string
  url: string
}

export interface ICreateAdvantage {
  title: string
  description: string
  url: string
}

export interface IUpdateAdvantage {
  id: number
  title: string
  description: string
  url: string
}


export const useAdvantagesStore = defineStore('advantages', () => {
  const advantages = ref<IAdvantage[]>([])

  const creatingAdvantage = reactive<ICreateAdvantage>({
    title: '',
    description: '',
    url: ''
  })

  const updatingAdvantage = reactive<IUpdateAdvantage>({
    id: 0,
    title: '',
    description: '',
    url: ''
  })

  const errorMessage = ref('')

  function fillEditForm(id: number) {
    const foundCategory = advantages.value.find(advantage => advantage.id === id)

    if(foundCategory) {
      updatingAdvantage.id = foundCategory.id
      updatingAdvantage.title = foundCategory.title
      updatingAdvantage.url = foundCategory.url
    }
  }

  async function getAll() {
    try {
      const {data} = await instance.get('advantages')
      advantages.value = data;
    } catch (e: AxiosError | any){
      errorHandler(e)
    }
  }

  async function create() {
    try{

      validationClientError([
        {condition: !creatingAdvantage.title || !creatingAdvantage.url, message:'Все поля должны быть заполнены' },
        {condition: creatingAdvantage.title.length <= 3, message:'Заголовок должен быть больше 3 символов'},
      ])

      const {data} = await instance.post<IAdvantage>('/advantages', creatingAdvantage)
      advantages.value.push({...data})

      resetForm()

    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  async function editAdvantage() {
    try {
      validationClientError([
        {condition: !updatingAdvantage.title || !updatingAdvantage.url, message:'Все поля должны быть заполнены' },
        {condition: updatingAdvantage.title.length <= 3, message:'Заголовок должен быть больше 3 символов'},
      ])

      await instance.patch(`advantages/${updatingAdvantage.id}`, updatingAdvantage)

      advantages.value = advantages.value.map(advantage => {
        if(advantage.id === updatingAdvantage.id) {
          advantage.title = updatingAdvantage.title
          advantage.url = updatingAdvantage.url
          return advantage
        }
        return  advantage
      })
    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  async function editDescription() {
    try {
      validationClientError([{condition: updatingAdvantage.description.length < 4, message: 'Не должно быть пустым'}])

      await instance.patch(`advantages/${updatingAdvantage.id}`, updatingAdvantage)

      advantages.value = advantages.value.map(advantage => {
        if(advantage.id === updatingAdvantage.id) {
          advantage.description = updatingAdvantage.description
          return advantage
        }
        return advantage
      })
    } catch (e) {
      errorHandler(e)
    }
  }

  async function deleteAdvantage(id: number) {
    try {
      await instance.delete(`advantages/${id}`)
      advantages.value = advantages.value.filter(advantage => advantage.id !== id)
    } catch (e: AxiosError | any) {
      errorHandler(e)
    }
  }

  function resetForm() {
    creatingAdvantage.title = ''
    creatingAdvantage.url = ''
    creatingAdvantage.url = ''
    errorMessage.value = ''
  }

  function validationClientError(errors: {condition: any, message: string}[]) {
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
    advantages,
    creatingAdvantage,
    updatingAdvantage,
    errorMessage,
    getAll,
    create,
    editAdvantage,
    deleteAdvantage,
    fillEditForm,
    validationClientError,
    errorHandler,
    editDescription
  }
})