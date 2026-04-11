import { useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getMainMovieVideo, getPopularMovie, getTopRatedMovie, getTrendingMovie } from "../api/movieApi";
import { getMainMovie } from "../services/MainMovie";
import { MainVideoShimmer } from "../components/homePage components/MainVideoShimmer";


const Home = () => {
   const [isIframeLoaded, setIsIframeLoaded] = useState(false);

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
   const mainMovie = trending.data && getMainMovie(trending.data.data.results);
   const trailerMovie = mainMovievideo.data?.results.find(d => {
      return d.type === "Trailer"
   });

   const isDataReady = trending.data && trailerMovie && !trending.isFetching && !mainMovievideo.isFetching;

   return (
      <div className="homePage min-h-dvh">
         <div  className="relative w-screen overflow-hidden h-[90dvh]">
            {/* Iframe renders underneath, always in DOM once data is ready */}
            {isDataReady && (
               <div className="mainMovie relative w-full h-[90dvh]" onLoad={() => setIsIframeLoaded(true)} >
                  <iframe
                     className="video absolute inset-0 w-full h-full block border-0"
                     src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1`}
                     allow="autoplay; encrypted-media"
                     allowFullScreen
                     frameBorder="0"

                  ></iframe>
                  <h1 className="title text-white absolute top-60 font-bold text-4xl left-70 ">{mainMovie?.title}</h1>
                  <p className="descriptin max-w-60 text-white absolute top-72 left-70 ">
                     {mainMovie?.overview}
                  </p>
               </div>
            )}

            {/* Shimmer overlays on top, fades out smoothly when iframe is loaded */}
            
               <MainVideoShimmer data = {isDataReady} frame ={isIframeLoaded} ></MainVideoShimmer>
            
         </div>
      </div>
   )

}
export default Home