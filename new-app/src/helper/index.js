import axios from "axios";

const token = localStorage.getItem("token");

export const getAxios = () => {
  return axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        token: token
    },
  });
};