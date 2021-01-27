import axios from "axios";
import { axiosConfig } from "./config";
// Using composition API, we don't install axios as a plugin

/**
 * Client api call with Axios
 */
const clientApi = axios.create(axiosConfig);
// clientApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
clientApi.interceptors.request.use(
  config => config,
  error => {
    throw new Error(error);
  }
);

// Add a response interceptor
clientApi.interceptors.response.use(
  response => response,
  error => {
    throw new Error(error);
  }
);

export { clientApi };
