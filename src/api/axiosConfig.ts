import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fake-api.tractian.com",
});
