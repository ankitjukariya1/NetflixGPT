import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../services/authService";

export  const signUp  = createAsyncThunk("auth/signUp",
  async({email,password},thunkApi)=>{
      try {
        return await signupUser(email,password);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
})

// login 
export  const login  = createAsyncThunk("auth/login",
  async({email,password},thunkApi)=>{
      try {
        return await  loginUser(email,password);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
})

export const authSlice = createSlice({
  name:"auth",
  initialState:{
    loading:false,
    error:null,
    user:null
  },
  reducers:{
    changeError : (state,action)=>{
        state.error = action.payload;
    },
    changeUser : (state,action)=>{
        state.user = action.payload;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(signUp.pending,(state)=>{
       state.loading=true;
    })
    builder.addCase(signUp.fulfilled,(state,action)=>{
      state.loading=false,
      state.user=action.payload
    })
    builder.addCase(signUp.rejected,(state,action)=>{
       state.error = action.payload,
       state.loading=false
    })

    //login
    builder.addCase(login.pending,(state,action)=>{
           state.loading=true
    })
    
     builder.addCase(login.fulfilled,(state,action)=>{
        state.loading=false;
        state.user = action.payload;
     })
    builder.addCase(login.rejected,(state,action)=>{
      state.loading=false;
        state.error = action.payload;
    })
  }
})

export const {changeError,changeUser}= authSlice.actions
export default authSlice.reducer;