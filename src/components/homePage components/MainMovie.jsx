import { useQuery } from "@tanstack/react-query";
import { getMainMovieVideo } from "../../api/movieApi";
import { useState } from "react";
import { MainVideoShimmer } from "./MainVideoShimmer";
import { getMainMovie } from "../../services/MainMovie"

const MainMovie = ({ trending }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const mainMovievideo = useQuery({
    queryKey: ['mainMovie', trending.data?.results[0].id],
    queryFn: getMainMovieVideo,
    enabled: !!trending.data,
    gcTime: 5 * 60 * 1000,
    staleTime: 5 * 60 * 1000
  })
  const trailerMovie = mainMovievideo.data?.results.find(d => {
    return d.type === "Trailer"
  });
  const mainMovie = trending.data && getMainMovie(trending.data?.results);
  const isDataReady = trending.data && trailerMovie && !trending.isFetching && !mainMovievideo.isFetching;
  return <div className="relative w-full overflow-hidden aspect-auto md:aspect-video ">
    {/* Iframe renders underneath, always in DOM once data is ready */}
    {isDataReady && (
      <div className="mainMovie relative flex flex-col justify-center aspect-square lg:aspect-video w-full  " onLoad={() => setIsIframeLoaded(true)} >

        <iframe
          className="video 
          pointer-events-none
          w-full h-full block border-0 "
          src={`https://www.youtube.com/embed/${trailerMovie?.key}?loop=1&playlist=${trailerMovie?.key}&autoplay=1&mute=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"

        ></iframe>
        <div className="textContainer absolute ml-5  md:ml-10 lg:ml-30">
          <h1 className="title text-white ml-6 md:ml-0 font-bold  md:text-4xl  ">{mainMovie?.title}</h1>
          <p className="description hidden md:block max-w-[50%] lg:max-w-95 overflow-hidden text-white ">
            {mainMovie?.overview}
          </p>
          <button className="py-1 px-4 md:py-2 md:px-8   hover:cursor-pointer z-20 bg-white/50 rounded m-2">
            Play
          </button>
          <button className=" py-1 px-4 md:py-2 md:px-8 hover:cursor-pointer  bg-white/50 rounded m-2" >
            View info
          </button>
        </div>

      </div>
    )}

    {/* Shimmer overlays on top, fades out smoothly when iframe is loaded */}

    <MainVideoShimmer data={isDataReady} frame={isIframeLoaded} ></MainVideoShimmer>

  </div>
}

export default MainMovie