import { useEffect, useState } from "react"
import authenticationValidation from "../../utils/validation/authenticationValidation";
import { changeError, login, signUp } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

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


const Login = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(state => state.auth);
  const [formType, setFormType] = useState('Sign In');
  const [invalidationError, setInvalidationError] = useState({});
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
    dispatch(changeError(null));
  }

  //  signup/signIn

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = authenticationValidation(formInput);
    setInvalidationError(result)
    // If not any error only than data will console
    if (Object.keys(result).length === 0) {
      const response = formType === "Sign Up" ?
        await dispatch(signUp({ email: formInput.emailAddress, password: formInput.password })) :
        await dispatch(login({ email: formInput.emailAddress, password: formInput.password }));

      console.log(response);
      !response.error && setFormInput({
        name: "",
        emailAddress: "",
        password: ""

      })
    }


  }


  const HandleRegisterClick = () => {
    formType === 'Sign In' ? setFormType('Sign Up') : setFormType('Sign In');
    dispatch(changeError(null))
    setFormInput({
      name: "",
      emailAddress: "",
      password: ""
    })

  }
  useEffect(() => {
    console.log(loading);
  }, [loading])

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
      <h1 className="font-bold text-2xl" >{formType} </h1>
      <form onSubmit={handleFormSubmit} className="space-y-3" >

        {formData.map(d => {
          return (d.show === formType || d.show === "both") && <div key={d.inputName}  > <input
            onChange={handleInputChange}
            className="bg-gray-900 p-2 w-full rounded-lg"
            name={d.name}
            type={d.type}
            value={formInput[d.name]}
            placeholder={d.inputName} />

            {invalidationError[d.name] && <p className="text-red-600 font-extralight">{invalidationError[d.name]}</p>}
          </div>
        })}
        {error ? <p className="text-red-600 font-extralight">{error}</p> : ""}
        <button className="w-full p-2 rounded-lg bg-red-700 cursor-pointer active:scale-97 transition duration-300 ">{loading ? "Submiting..." : "Submit"}</button>
      </form>
      <p className="cursor-pointer" onClick={HandleRegisterClick} >{formType === "Sign In" ? "Not Registered? Register Here" : "Alerady registered? Sign in Here"}</p>
    </div>
  </div>
  )
}

export default Login