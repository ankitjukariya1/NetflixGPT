import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"


   

const ProtectedRoute= ()=>{
 const { user } = useSelector((state) => state.auth);
const navigate = useNavigate();
 useEffect(()=>{
    if (!user){
     return navigate("/")
    }  
    },[user])

 return(
  <Outlet></Outlet>
 )   

}

export default ProtectedRoute