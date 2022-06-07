import { AxiosInstance } from "axios";

declare global {
  interface Window {
    $http: AxiosInstance;
  }
}
