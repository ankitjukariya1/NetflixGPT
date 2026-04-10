import { useQuery } from "@tanstack/react-query";
import { getMainMovieVideo } from "../../api/movieApi";

const MainMovie = ({ movie }) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["mainMovieVideo", movie.id],
    queryFn: getMainMovieVideo,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000
  })
  !isLoading && console.log(data);
  return isLoading ? <p>Loading....</p> : <p>Congrats got data</p>
}

export default MainMovie