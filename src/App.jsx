import { Routes, Route } from "react-router-dom"
import Layout from "./components/Pages/Layout"
import Login from "./components/Pages/Login"


const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Login></Login>}></Route>
        {/* <Route element={<ProtectedRoute/>}>

        </Route> */}
      </Route>
    </Routes>
    
  )
}

export default App