import axios from 'axios'
import { store } from '@store'
import { dev } from '@utils/functions/dev'
// Create a custom axios instance
export const authApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  },
})

// Add a request interceptor
authApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer ' + store?.state?.auth?.data?.token
    dev.log('DevOnly | Authenticated API executed')
    // Must return config
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
authApi.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export const authApiPlugin = {
  install(app) {
    // Inject to context as $authApi
    app.config.globalProperties.$authApi = authApi
  },
}
