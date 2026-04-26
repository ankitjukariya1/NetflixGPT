

import { useQuery } from "@tanstack/react-query";
import { getPopularMovie, getTopRatedMovie, getTrendingMovie } from "../api/movieApi";
import MainMovie from "../components/homePage components/MainMovie";
import MovieContainer from "../components/homePage components/MovieContainer";
import { MovieContainerShimmer } from "../components/homePage components/MovieContainerShimmer";



const Home = () => {
   const popular = useQuery({
         queryKey: ['popular'],
         queryFn: getPopularMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      })

      const topRated = useQuery({
         queryKey: ['topRated'],
         queryFn: getTopRatedMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      })
         const trending = useQuery( {
         queryKey: ['trending'],
         queryFn: getTrendingMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      })

  
   return (
      <div className="homePage bg-black relative ">
         <MainMovie trending={trending} />
        
            <div className="text-white font-semibold ml-4">
               <p>Top 10 Popular Movies in Netflix Today</p>
            </div>
            <MovieContainer data={popular} />
         
         <div className="text-white font-semibold mt-4 ml-4">
            <p>Top 10 Top Rated Movies</p>
         </div>
        <MovieContainer data={topRated}></MovieContainer>
         <div className="text-white font-semibold mt-4 ml-4">
            <p>Trending Movies</p></div>
            <MovieContainer data={trending}></MovieContainer>
         
      </div>
   )

}
export default Home