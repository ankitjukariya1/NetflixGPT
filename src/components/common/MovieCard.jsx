import { useState } from "react";
import { TMDB_IMG_PREFIX } from "../../constants/constants";

const MovieCard = ({ movie }) => {
    const [loading,setloading] =useState(true);
  return <div className={`movieCard hover:cursor-pointer w-20 md:w-40 lg:w-60  shrink-0 rounded-2xl transition-all aspect-[2/3]  duration-500 hover:scale-102 ${loading&&'bg-white/20 '}`}>
    <div className="poster "  ><img onLoad={() => setloading(false)}  className="rounded-2xl " src={`${TMDB_IMG_PREFIX}/w300/${movie?.poster_path
      }`} alt="movie image" /></div>

  </div>
}

export default MovieCard;