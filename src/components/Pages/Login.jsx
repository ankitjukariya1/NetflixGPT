import { useEffect, useState } from "react"


const Login = () => {

  const [formInput, setFormInput] = useState({
    name: "",
    emailAddress: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormInput({
      ...formInput,
      [name]: value
    })

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
     console.log(state , formInput)
         
    setFormInput({

      name: "",
      emailAddress: "",
      password: ""

    })

  }

  const [state, setState] = useState('Sign In')
  const formData = [
    {
      inputName: "Name",
      name: "name",
      show: "Sign Up",
      type: "text"

    },
    {
      inputName: "Email Address",
      name: "emailAddress",
      show: "both",
      type: "text"
    },
    {
      inputName: "Password",
      name: "password",
      show: "both",
      type: "password"
    },

  ]

  const HandleRegisterClick = () => {
    state === 'Sign In' ? setState('Sign Up') : setState('Sign In');
  }

  return (<div
    className="min-h-screen bg-cover bg-center relative z-40 flex justify-center items-center"
    style={{
      backgroundImage:
        "url('https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 z-50 bg-linear-to-b from-black/80 to-black/40"></div>

    {/* Login / signup  */}
    <div className=" bg-black/70 w-[25%] min-w-75 px px-5 z-60 py-8 space-y-5 rounded-2xl  text-white">
      <h1 className="font-bold text-2xl" >{state} </h1>
      <form onSubmit={handleFormSubmit} className="space-y-3" >

        {formData.map(d => {
          return (d.show === state || d.show === "both") && <input onChange={handleInputChange} key={d.inputName} className="bg-gray-900 p-2 w-full rounded-lg" name={d.name} type={d.type} value={formInput[d.name]} placeholder={d.inputName} />
        })}
        <button className="w-full p-2 rounded-lg bg-red-700 cursor-pointer active:scale-97 transition duration-300 ">Submit</button>
      </form>
      <p className="cursor-pointer" onClick={HandleRegisterClick} >{state==="Sign In"?"Not Registered? Register Here":"Alerady registered? Sign in Here" }</p>
    </div>
  </div>
  )
}

export default Login;