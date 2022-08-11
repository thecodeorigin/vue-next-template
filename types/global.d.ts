import { AxiosInstance } from "axios";

declare global {
  interface Window {
    $http: AxiosInstance;
  }

  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    $http: AxiosInstance;
  }
}
