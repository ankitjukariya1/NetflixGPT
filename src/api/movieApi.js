import { movieApi } from "./axios";


export const getPopularMovie = async()=>{
try {
  return await movieApi.get("/movies/popular")
} catch (error) {
   console.log(error.message);
}
}

export const getTrendingMovie = async()=>{
try {
  return await movieApi.get("/movies/trending")
} catch (error) {
   console.log(error.message);
}
}

export const getTopRatedMovie = async()=>{
try {
  return await movieApi.get("/movies/top_rated")
} catch (error) {
   console.log(error.message);
}
}

export const getMainMovieVideo = async ({queryKey})=>{
  try {
    const [,movieId]=queryKey;
    const result= await movieApi.get(`/mainMovie/video/${movieId}`)
    return result.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
