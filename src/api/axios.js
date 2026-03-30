import axios from "axios";
const movieApi =axios.create({
  baseURL:"https://netflixgpt-server-rn42.onrender.com/",
  timeout:"30000",
})

export default movieApi;
