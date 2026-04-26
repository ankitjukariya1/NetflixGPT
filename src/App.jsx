import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"
import ProtectedRoute from "./components/protectedRoute"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { changeUser } from "./features/userSlice"
import { useEffect, useState } from "react"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout";

const auth = getAuth();  // puting outside of component because it return same value always so no need to render every time
const App = () => {
  const [loading , setLoading] = useState(true);
 
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(changeUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
      } else {
        dispatch(changeUser(null));
      }
      setLoading(false)
    });
    return () => unsubscribe();   // cleanup function
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Login></Login>}></Route>
        <Route element={<ProtectedRoute loading={loading} />}>
          <Route path="/home" element={<Home></Home>} ></Route>
        </Route>
      </Route>
    </Routes>

  )
}

export default App