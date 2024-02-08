import { Link } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore";
import { SubmitHandler,useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;  
}


export const RegisterPage = () => {

  const { startRegister } = useAuthStore();

  const { register, handleSubmit,} = useForm<FormInputs>();

  const onSubmit:SubmitHandler<FormInputs> = (data) =>{
    
    const { name, email, password } = data;
   
    startRegister({name:name,email:email,password:password});
   
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-5/6 p-5 flex flex-col items-center justify-center sm:w-7/12  lg:w-5/12 xl:w-4/12">
          <div className="flex flex-col justify-center items-center h-1/3">
              <h1 
                className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
              >
                Questions to AI
              </h1>
              <h3 className="mt-3 text-xl font-medium">Create an account</h3>
              
          </div>
          <div className="h-2/3 flex flex-col items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-start">
              <label htmlFor="name" className="font-light">Name</label>
              <input 
                type="text" 
                className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  
                placeholder="Enter your full name"
                { ...register('name', { required: true }) }
              />
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
              <button className="mt-3 text-white w-full h-10 bg-pink-400 rounded-md">Get started</button>
            </form>
            <div className="m-10">
              <span className="font-thin">Don’t have an account? <Link to='/auth' className="font-normal text-pink-400">Log in</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
