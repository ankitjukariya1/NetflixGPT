import { Routes, Route } from "react-router-dom"
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
const dispatch = useDispatch();
useEffect (()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
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