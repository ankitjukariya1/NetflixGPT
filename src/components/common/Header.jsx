import { Link,NavLink } from "react-router-dom"
import { FaUserSecret } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { signOut } from "../../features/userSlice";
import { header_logo } from "../../constants/constants";


//handle signOut


const Header = ()=>{
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth)
    const [userContainer , setUserContainer] = useState(false);
    const userContainerref = useRef(null);
    
 const handleUserContainer = ()=>{
   setUserContainer(!userContainer);
}

const handleSignOut = ()=>{
     setUserContainer(!userContainer)
    const result = confirm("You want to logout")
  if (result){;
    dispatch(signOut());}
}


// to handle closing user dropdown if we click anywhere in window
useEffect(()=>{
const handleclick= (e)=>{
 if (userContainerref.current && !userContainerref.current.contains(e.target)) {
        setUserContainer(false);
      }
}

   document.addEventListener("click",handleclick)

   return ()=>{document.removeEventListener("click",handleclick)}
},[])

  return (<><div className={`Nav-Container justify-between absolute inset-x-0 px-2 h-15 md:px-25 z-10 bg-linear-to-b from-black/40 to-black/1 flex `}>
      <div className="logo ">
        <Link to={"/"} >
        <img className=" w-30 lg:w-48" src={header_logo} alt="Logo" />
        </Link>
         </div>

        {user&&<div ref={userContainerref} className="relative">
          <div onClick={handleUserContainer} className="userContainer text-2xl m-3 text-red-700 cursor-pointer">
              < FaUserSecret ></FaUserSecret>
           </div>

            <div className={`userContainer  absolute  rounded-b-2xl bg-linear-to-b  from-red-500 to-red-300  w-50 flex flex-col overflow-hidden  transition-all duration-300  space-y-1 -right-20 ${userContainer?"h-40" :"h-0 p-0"} `}>
              <button onClick={handleSignOut} className="cursor-pointer" >Sign Out </button>
              
            </div>
        </div>} 
  </div>
  
   </>
  )
}

export default Header