
import { useQueries} from "@tanstack/react-query";
import { getPopularMovie, getTopRatedMovie, getTrendingMovie } from "../api/movieApi";
import MainMovie from "../components/homePage components/MainMovie";
import MovieContainer from "../components/homePage components/MovieContainer";



const Home = () => {
 
   const result = useQueries({
      queries: [{
         queryKey: ['popular'],
         queryFn: getPopularMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      },
      {
         queryKey: ['topRated'],
         queryFn: getTopRatedMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      },
      {
         queryKey: ['trending'],
         queryFn: getTrendingMovie,
         gcTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
      },
      ]
   })

   const popular = result[0];
   const topRated = result[1];
   const trending = result[2];
   return (
      <div className="homePage bg-black min-h-dvh">
        <MainMovie trending={trending} />
        <div className="text-white font-semibold mt-4 ml-4">
         <p>Top 10 Popular Movies in Netflix Today</p>
        </div>
        <MovieContainer data ={popular} />
        <div className="text-white font-semibold mt-4 ml-4">
         <p>Top 10 Top Rated Movies</p>
        </div>
        <MovieContainer data={topRated}></MovieContainer>
        <div className="text-white font-semibold mt-4 ml-4">
         <p>Trending Movies</p>
         <MovieContainer data={trending}></MovieContainer>
        </div>
      </div>
   )

}
export default Home