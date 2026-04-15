import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"
import ProtectedRoute from "./components/protectedRoute"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { changeUser } from "./features/userSlice"
import { useEffect } from "react"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout";

const App = () => {
  const { user } = useSelector((state) => state.auth)
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home")
        dispatch(changeUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
      } else {
        navigate("/")
        dispatch(changeUser(null));
      }
    });
    return () => unsubscribe();   // cleanup function
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Login></Login>}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home></Home>} ></Route>
        </Route>
      </Route>
    </Routes>

  )
}

export default App