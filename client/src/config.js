import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mern-shop11.herokuapp.com/api/",
});
