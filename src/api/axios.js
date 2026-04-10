import axios from "axios";
export const movieApi =axios.create({
  baseURL:"https://netflixgpt-server-rn42.onrender.com/",
  timeout:"30000",
})
