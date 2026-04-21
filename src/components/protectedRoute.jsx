import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"


   

const ProtectedRoute= ({loading})=>{
  const {user, loading: authLoading} = useSelector(a=>a.auth)


if (loading || authLoading) return <div className="h-dvh bg-black"></div> 
return user?<Outlet></Outlet>:<Navigate to={"/"} ></Navigate>}


export default ProtectedRoute