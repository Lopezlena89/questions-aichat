
import { closeSideMenu } from "../../redux/closeOpenSide";
import { RootState } from "../../redux/store";

import { useGroupMessageStore } from "../../hooks/useGroupMessage";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { onIdSelect } from "../../redux/idSelect";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MessageInterface } from "./ChatPage";
import { useSelector } from "react-redux";
import clsx from "clsx";


export const MiniSidebar = () => {
  const {isSideMenuOpen} = useSelector((state:RootState) => state.closeOpenSide);
  
 
  return (
    <>
       <div className=" md:hidden">
        {isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          )}

          {/* Blur */}
          {isSideMenuOpen && (
              <div
             
              className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
              />
          )}

          <div
            className={clsx(
              "fixed p-2 right-0 top-0 w-3/6 h-screen bg-zinc-800 z-20 shadow-2xl transform transition-all duration-300 sm:w-2/6  flex flex-col ",
              {
                "translate-x-full": !isSideMenuOpen,
              }
            )}
          >
            <div className="w-full h-14 flex items-center justify-center">
              <span className="ml-2 text-white font-light ">New Chat</span>
              <HiMiniPencilSquare size={20} className='text-white  ml-3 cursor-pointer hover:text-pink-500 duration-300'  />
            </div>
            <div className='scroll-sidebar flex flex-col w-full h-[80%] overflow-auto mt-5'>
                        <div className=' w-full full flex flex-col items-center' >
                            
                        </div>
                    </div>  
          </div>
       </div>
    </>
  )
}
