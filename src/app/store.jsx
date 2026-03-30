import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/userSlice"
import { movieSlicereducer } from '../features/movieSlice'


export default configureStore({
  reducer: {
    auth:authReducer,
    movie:movieSlicereducer
  }
})