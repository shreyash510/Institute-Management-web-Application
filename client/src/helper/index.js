import axios from "axios";

const token = localStorage.getItem("token");
// console.log(token)
export const getAxios = () => {
  return axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        token: token
    },
  });
};