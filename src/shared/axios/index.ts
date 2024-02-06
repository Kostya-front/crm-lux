import router from "@/router";
import axios from "axios";


export const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 5000,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
})

instance.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const originalRequest = error.config
  console.log(originalRequest)

  if(error.response.status === 401 && !originalRequest._isRetry ) {
    originalRequest._isRetry = true

    try {
      const {data} = await instance.get('auth/refresh')
      localStorage.setItem('accessToken', data.accessToken)
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
      return instance(originalRequest)
    } catch (e) {
      return await router.push('/auth')
    }
  }
})

// instance.interceptors.response.use((response) => {
//   return response
// }, async (error) => {
//   const originalRequest = error.config;
//   if(error.response.status === 401 && !originalRequest._isRetry) {
//     originalRequest._isRetry = true
//     try {
//       const {data} = await instance.get('auth/refresh')
//       localStorage.setItem('accessToken', data.accessToken)
//       originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
//       return instance(originalRequest);
//     }
//     catch (e) {
//       return await router.push('/auth')
//     }
//   }
// })