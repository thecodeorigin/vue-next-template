import axios from 'axios'
import { axiosConfig } from './config'
// import store from '../store'
// Using composition API, we don't install axios as a plugin

export const $authApi = axios.create(axiosConfig)

// $authApi.defaults.headers.common['Authorization'] = store.auth.data.token;
// $authApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// The code below will be run in the initial state of the app, therefore the export const above will also this configuration
// Add a request interceptor
$authApi.interceptors.request.use(
  (config) => config,
  (error) => {
    throw new Error(error)
  }
)

// Add a response interceptor
$authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(error)
  }
)

export const authApiPlugin = {
  install(app) {
    app.config.globalProperties.$authApi = $authApi
  },
}
