
import MovieCard from "../common/MovieCard"


const MovieContainer = ({ data }) => {
   const Movies = data.data && data.data?.results
   console.log(Movies);
   return <div className="ml-2 overflow-hidden popular scrollbar-hide mt-4 gap-2 flex overflow-x-auto  ">
      {Movies && Movies.map((m) => {
         return <MovieCard movie={m} key={m.id} ></MovieCard>
      })}
   </div>
}

export default MovieContainer