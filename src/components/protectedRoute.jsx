import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"


   

const ProtectedRoute= ()=>{
 const { user } = useSelector((state) => state.auth);
const navigate = useNavigate();
    if (user){
     return <Outlet></Outlet>
    }  
    else{
      useEffect(()=>{
        navigate("/")
      },[user])
      
    }

}

export default ProtectedRoute