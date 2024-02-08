
import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthStore } from "../../hooks/useAuthStore";


type FormInputs = {
  name: string;
  email: string;
  password: string;  
}

export const LoginPage = () => {

  const { startLogin } = useAuthStore();

  const { register, handleSubmit,} = useForm<FormInputs>();

  const onSubmit:SubmitHandler<FormInputs> = (data) =>{
    
    const {  email, password } = data;
   
    startLogin({email:email,password:password});
    
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-4/6 p-5 flex flex-col items-center justify-center sm:w-7/12  lg:w-5/12 xl:w-4/12">
          <div className="flex flex-col justify-center items-center h-1/3">
              <h1 
                className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
              >
                Questions to AI
              </h1>
              <h3 className="mt-3 text-3xl font-medium">Log in to  your account</h3>
              <span className="mt-3 text-lg font-thin">Welcome back! Please enter your details</span>
          </div>
          <div className="h-2/3  flex flex-col  items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-start">
              <label htmlFor="email" className="font-light">Email</label>
              <input 
                type="text" 
                className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  
                placeholder="Enter your email"
                { ...register('email', { required: true }) }
              />
              <label htmlFor="password" className="mt-3 font-light">Password</label>
              <input 
                type="password" 
                className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md " 
                placeholder="Enter your password"
                { ...register('password', { required: true }) }
              />
              <button type="submit" className="mt-3 text-white w-full h-10 bg-pink-400 rounded-md">Login</button>
            </form>
            <div className="m-10">
              <span className="font-thin">Don’t have an account? <Link to='new' className="font-normal text-pink-400">Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
