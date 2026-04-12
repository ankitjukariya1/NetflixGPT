import { movieApi } from "./axios";


export const getPopularMovie = async()=>{
try {
  const result = await movieApi.get("/movies/popular")
  return result.data
} catch (error) {
  console.log(error.message);
  throw error
   
}
}

export const getTrendingMovie = async()=>{
try {
  const result = await movieApi.get("/movies/trending")
  return result.data
} catch (error) {
  console.log(error.message);
  throw error;
   
}
}

export const getTopRatedMovie = async()=>{
try {
  const result= await movieApi.get("/movies/top_rated")
  return result.data
} catch (error) {
  console.log(error.message);
  throw error;
   
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
