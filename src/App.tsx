

import { HomePage } from './components/ui/HomePage';

import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";



export const App = () => {
 
    
  
  return (
    <HashRouter>
      <Routes>
         
        (
          <>
            <Route path='/' element={<HomePage/>}/>
            
            <Route path="/*" element={<Navigate to='/'/>}/>
          </>
        )
       
          
          
          
      </Routes>
    </HashRouter>
  )
}
