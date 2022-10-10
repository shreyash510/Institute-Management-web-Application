import axios from "axios";


// console.log(token)
export const getAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        token: token
    },
  });
};