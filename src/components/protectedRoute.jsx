import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"


   

const ProtectedRoute= ({loading})=>{
  const {user} = useSelector(a=>a.auth)


if (loading) return <div className="h-dvh bg-red-700 text-9xl text-white">Loading...</div> 
return user?<Outlet></Outlet>:<Navigate to={"/"} ></Navigate>}


export default ProtectedRoute