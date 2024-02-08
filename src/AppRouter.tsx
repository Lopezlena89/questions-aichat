import { HomePage } from './components/ui/HomePage';
import { ErrorPage } from './components/ui/ErrorPage';

import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
  
} from "react-router-dom";
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { useEffect } from 'react';
import { useAuthStore } from './hooks/useAuthStore';


const noAuthenticated = createBrowserRouter([
    
    {
    path: "/auth/*",
    element:<LoginPage/>,
    },
    {
    path: "/auth/new/*",
    element:<RegisterPage/>,
    },
    {
    path: "/*",
    element:<Navigate to='/auth'/>,
    errorElement:<ErrorPage/>
    },
    
    ]);
const authenticated = createBrowserRouter([
    
    {
    path: "/",
    element:<HomePage/>,
    },
    {
    path: "/:id",
    element:<HomePage/>,
    },
    {
    path: "/*",
    element:<Navigate to='/'/>,
    errorElement:<ErrorPage/>
    },
    
    ]);


export const AppRouter = () => {
    const {status,checkAuthToken} = useAuthStore();

    useEffect(() => {
      checkAuthToken()
    }, [])
    

    if(status === 'checking'){
      return(
        <h3>Cargando...</h3>
      )
    }
    

  return (
    <>
    {
         (status === 'not-authenticated')
         ?
         <RouterProvider router={noAuthenticated} />
         :
         <RouterProvider router={authenticated} />

    }
    </>
  ) 
}
