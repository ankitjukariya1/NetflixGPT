import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovie, getTopRatedMovie, getTrendingMovie } from "../api/movieApi";


export const popularMovie = createAsyncThunk("movies/popular",
  async()=>{
         const popualaMovieResult =   await getPopularMovie();
         return popualaMovieResult;
});
export const trendingMovie = createAsyncThunk("movies/trending",
  async()=>{
       const trendingMovieResult = await getTrendingMovie();
       return trendingMovieResult;
})
export const topratedMovie = createAsyncThunk("movies/topratedMovie",
  async ()=>{
       const topratedMovieResult = await getTopRatedMovie();
       return topratedMovieResult;
  }
)

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
      popularMovieData : null,
      popularMovieLoading:false,
      trendingMovie : null,
      trendingMovieLoading:false,
      topratedMovie:null,
      topratedMovieLoading:false
  },

  extraReducers: (builder)=>{
    builder.addCase(popularMovie.pending,(state)=>{
        state.popularMovieLoading = true;
    })
    builder.addCase(popularMovie.fulfilled,(state,action)=>{
       console.log(action.payload.data.results)
      state.popularMovieLoading = false;
      state.popularMovieData= action.payload.data.results;
    })
    builder.addCase(popularMovie.rejected,(state)=>{
      state.popularMovieLoading = false;
      console.log("rejected popular movies");
    })
     // trending movies
    builder.addCase(trendingMovie.pending,(state)=>{
        state.trendingMovieLoading = true;
    })
    builder.addCase(trendingMovie.fulfilled,(state,action)=>{
      state.trendingMovieLoading = false;
      state.trendingMovie= action.payload;
    })
    builder.addCase(trendingMovie.rejected,(state)=>{
      state.trendingMovieLoading = false;
      console.log("rejected trending movies");
    })

    // top rated movies 

    builder.addCase(topratedMovie.pending,(state)=>{
        state.topratedMovieLoading = true;
    })
    builder.addCase(topratedMovie.fulfilled,(state,action)=>{
       state.topratedMovieLoading = false;
      state.topratedMovie= action.payload;
    })
    builder.addCase(topratedMovie.rejected,(state)=>{
       state.topratedMovieLoading = false;
      console.log("rejected top rated movies");
    })

 
  }
  }
)

export const movieSlicereducer = movieSlice.reducer;