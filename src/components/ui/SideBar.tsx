import { useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import type { RootState } from '../../redux/store'

import { useAuthStore } from "../../hooks/useAuthStore";
import { useGroupMessageStore } from "../../hooks/useGroupMessage";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { onIdSelect } from '../../redux/idSelect';
import { MessageInterface } from './ChatPage';



export const SideBar = () => {
    
    
   
    const {startLogout} = useAuthStore();
    
    const {getGroupMessage,deleteGroup} = useGroupMessageStore()
    
    useEffect(() => {
      getGroupMessage()
    }, [])
    
    

  return (
    <>
        <div className='hidden md:block'>
            <div className="w-52 h-full bg-zinc-800 flex flex-col justify-between items-center px-3  lg:w-80">
                <div className=" w-full h-full flex flex-col ">
                    <div className="w-full h-1/6 flex items-center justify-between">
                        <div className='flex flex-col w-full h-20 items-center pl-2'>
                            <div className='w-full flex justify-center my-4 relative'>
                                <h1 
                                    className="text-xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                                >
                                    Questions to AI
                                </h1>
                                
                                
                            </div>
                            <div className='flex w-full justify-between items-center '>
                                <div className='flex'>
                                    <div className="boton-menu w-7 h-7 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer  ">
                                        <FaUser size={14} className="text-white "/>
                                    </div>
                                    
                                    <span className="ml-2 text-white font-light ">New Chat</span>
                                </div>
                            
                                <HiMiniPencilSquare size={20} className='text-white  mr-3 cursor-pointer hover:text-pink-500 duration-300' onClick={()=>deleteGroup()} />
                            
                            </div>
                        </div>
                    </div>
                    
                    {/* <div 
                        className="boton-menu w-7 h-7 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer"
                        onClick={()=>dispatch(changeToogleMenu())}
                    >
                    <IoMdChatbubbles className="text-white" size={14} />
                    </div> */}
                    <div className='scroll-sidebar flex flex-col w-full h-[80%] overflow-auto mt-5'>
                        <div className=' w-full full flex flex-col items-center' >
                            
                        </div>
                    </div>  
                </div>
                
                <div className="w-full  flex flex-col justify-end pl-2 ">

                    <div 
                        className="boton-menu w-7 h-7  mb-6 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer"
                        onClick={()=>startLogout()}
                    >
                        <IoExitOutline size={14}  className="text-white"/>
                    </div>
            
                </div>
            </div>
        </div>
        {
            // isSideMenuOpen &&
            // <div 
            //     className={`sideTransition h-full bg-zinc-800 ${isSideMenuOpen ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}
               
            // >
            //     {/* <div className="w-full h-10 bg-white p-3 " >
                     
            //         <button onClick={()=>deleteGroupMessage()}>delete</button>
            //     </div>     */}
            //     {
            //         groupMessage.map((messages,index) =>(
            //             <>
            //                 <div key={index} className=" w-full m-1 p-2 h-6 bg-zinc-700 text-white font-thin overflow-hidden flex  items-center">
            //                     <span className="w-4/5 h-[10px] overflow-hidden">{messages.message}</span>
            //                 </div>
            //                 <RiDeleteBin6Line size={14}/>
            //             </>
            //         ))
            //     }
            // </div>
            

        }
    </>
  )
}

