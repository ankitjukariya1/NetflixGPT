import { useQueries, useQuery } from "@tanstack/react-query";
import { getMainMovieVideo, getPopularMovie, getTopRatedMovie, getTrendingMovie } from "../api/movieApi";
import { getMainMovie } from "../services/MainMovie";
import { MainVideoShimmer } from "../components/homePage components/MainVideoShimmer";


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
   const mainMovievideo = useQuery({
      queryKey: ['mainMovie', trending.data?.data.results[0].id],
      queryFn: getMainMovieVideo,
      enabled: !!trending.data,
      gcTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000
   })
   console.log(mainMovievideo.data?.results[0]);
   const mainMovie = trending.data && getMainMovie(trending.data.data.results);
    const trailerMovie = mainMovievideo.data?.results.find(d=>{
      return d.type==="Trailer"});

   return (
      <div className="homePage">
         {mainMovievideo.isFetching || trending.isFetching ? <MainVideoShimmer></MainVideoShimmer> : <div className="mainMovie">
            <div className="video p-25 ">
               <iframe width="360"
                  height="350" src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1`} allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" 
                  ></iframe>
            </div>
            <h1 className="title"></h1>
            <p className="description"></p>
         </div>}


      </div>
   )

}
export default Home