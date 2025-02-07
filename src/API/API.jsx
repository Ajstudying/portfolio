import axios from "axios";
const BASE_URL = "/portfolio/data/";

export const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: localStorage.getItem("accessToken"),
  },
});
