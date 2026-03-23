import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"auth",
  initialState:{
  },
  reducers:{
    signUp :  async (state,action)=>{
         console.log(action.payload);
       try {
    const user = (await createUserWithEmailAndPassword(auth, payload.email, payload.password)).user;
    return user;
  } catch (error){
    console.log( error.message)
    return error;
  }

    },
    login : (state,payload)=>{
       
    },
    signOut : (state,payload)=>{

    }
  }
})

export   const  {signUp,login,signOut} = userSlice.actions;
export default userSlice.reducer;