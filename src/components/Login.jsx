import {useNavigate} from "react-router-dom";
import {useState} from "react";
import AuthService from "../services/auth.service.js";
import { Audio } from 'react-loader-spinner'
const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    const validationErrors = {}
    if(!formData.email.trim()) {
      validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
      validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
      validationErrors.password = "password should be at least 6 char"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
      AuthService.login(formData.email, formData.password).then(
          () => {
            navigate("/app/dashboard");
          },
          error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage)
          }
      );
    } else {
      setLoading(false)
    }

  }
  return (
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <a href="#" className="text-2xl font-bold text-blue-600"> BlackLister . </a>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back <br />
              to <span className="text-blue-600">BlackLister</span>
            </p>
            <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>

            <form className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" name="email" onChange={handleChange} />
                </div>
                {errors.email && <span style={{color: "red", textTransform: "capitalize"}}>{errors.email}</span>}

              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" name="password" onChange={handleChange}/>
                </div>
                {errors.password && <span style={{color: "red", textTransform: "capitalize"}}>{errors.password}</span>}

              </div>
              <a href="#" className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left">Forgot password?</a>
              <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">
                {
                  loading ? <Audio
                      height="80"
                      width="80"
                      radius="9"
                      color="green"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                  /> :
                      <span>Sign in</span>
                }
              </button>
            </form>
            {message}
            <div className="py-12 text-center">
              <p className="text-gray-600">
                Don{"'"}t have an account?
                <a href="#" className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4">Sign up for free.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
          <div className="py-16 px-8 text-white xl:w-[40rem]">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
            <p className="my-6 text-3xl font-semibold leading-10">Black List items <span className="abg-white whitespace-nowrap py-2 text-cyan-300">in real time</span>.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
            <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
          </div>
          <img className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
               src="https://scanbot.io/wp-content/uploads/2024/02/demo-apps-feature-barcode-768x717.png" />
        </div>
      </div>

  );
}

export default Login;