import axios from 'axios'
import { axiosConfig } from './config'
// Using composition API, we don't install axios as a plugin

/**
 * Client api call with Axios
 */
export const $clientApi = axios.create(axiosConfig)
// $clientApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// The code below will be run in the initial state of the app, therefore the export const above will also this configuration
// Add a request interceptor
$clientApi.interceptors.request.use(
  (config) => config,
  (error) => {
    throw new Error(error)
  }
)

// Add a response interceptor
$clientApi.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(error)
  }
)

export const clientApiPlugin = {
  install(app) {
    app.config.globalProperties.$authApi = $clientApi
  },
}
