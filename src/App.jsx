import { Routes, Route, useNavigate  } from "react-router-dom"
import Layout from "./components/Pages/Layout"
import Login from "./components/Pages/Login"
import ProtectedRoute from "./components/protectedRoute"
import Home from "./components/Pages/Home"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { changeUser } from "./features/userSlice"
import { useEffect } from "react"



const App = ()=>{
  const {user}= useSelector((state)=>state.auth)
const auth = getAuth();
const navigate = useNavigate();
const dispatch = useDispatch();
useEffect (()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    navigate("/home")
    dispatch(changeUser({uid: user.uid,
    email: user.email,
    displayName: user.displayName,}));
  } else {
    dispatch(changeUser(null));
  }
});
return ()=> unsubscribe();   // cleanup function
},[]);


  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Login></Login>}></Route>
        <Route element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home></Home>} ></Route>
        </Route>
      </Route>
    </Routes>
    
  )
}

export default App