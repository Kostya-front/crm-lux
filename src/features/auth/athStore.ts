import {defineStore} from "pinia";
import {nextTick, reactive, ref, watch} from "vue";
import {instance} from "@/shared/axios";
import {useRouter} from "vue-router";


export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false)
  const router = useRouter()
  const message = ref('')
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

  async function activateUser(key: string) {
    try {
      await instance.patch(`auth/activate/${key}`)
      message.value = 'Активация прошла успешна, можете войти в свой ЛК'
    } catch (e) {
      message.value = 'Активация не удалась'
    }
  }

  function setLocalStorage(token: string) {
    localStorage.setItem('accessToken', token)
  }

  function toLogin() {
    isAuth.value = true
  }

  function logoutUser() {
    localStorage.removeItem('accessToken')
    document.cookie = ''
    isAuth.value = false
  }

  async function check() {
    try {
      const {status, statusText} = await instance.get('auth/check')
      isAuth.value = true
      return true
    } catch {
      isAuth.value = false
      throw new Error('error')
    }
		}

  return {
    isAuth,
    authorizationForm,
    loginForm,
    register, 
    login,
    toLogin,
    logoutUser,
    activateUser,
    check
  }

})