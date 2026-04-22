import { TMDB_IMG_PREFIX } from "../../constants/constants";

const MovieCard =({movie})=>{
  
   return <div className="movieCard hover:cursor-pointer w-20 md:w-40 lg:w-60  shrink-0 rounded-2xl transition-all  duration-500 hover:scale-102 ">
      <div className="poster "  ><img className="rounded-2xl" src={`${TMDB_IMG_PREFIX}/w300/${movie?.poster_path
}`} alt="movie image" /></div>
      
   </div>
}

export default MovieCard;