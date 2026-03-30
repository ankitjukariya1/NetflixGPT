import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { popularMovie } from "../../features/movieSlice";

const Home = ()=>{
   const dispatch = useDispatch();
   const {popularMovieData,popularMovieLoading} = useSelector((s)=> s.movie)
  useEffect(()=>{
     dispatch(popularMovie())
},[])

return <>
{popularMovieLoading?<p>Loading...</p>:<p>loaded movie</p> }
</>
}
export default Home