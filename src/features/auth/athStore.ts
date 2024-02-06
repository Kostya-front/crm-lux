import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {instance} from "@/shared/axios";
import {useRouter} from "vue-router";


export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false)
  const router = useRouter()
  const authorizationForm = reactive({
    email:'',
    nickname:'',
    password: ''
  })

  const loginForm = reactive({
    email:'',
    password: ''
  })

  async function register() {
    try {

      const {data} = await instance.post('auth/register', authorizationForm)
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    } catch (e) {

    }
  }

  async function login() {
    try {
      const {data} = await instance.post('/auth/login', {...loginForm})
      setLocalStorage(data.accessToken)
    } catch (e) {
      console.log(e)
    }
  }

  function setLocalStorage(token: string) {
    localStorage.setItem('accessToken', token)
  }

  return {
    isAuth,
    authorizationForm,
    loginForm,
    register, 
    login
  }
})