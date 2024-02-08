

import { ChatPage } from "./ChatPage"
import { SideBar } from "./SideBar"


export const HomePage = () => {

  return (
    <div className="w-screen h-screen bg-zinc-900 flex flex-col md:flex-row ">
        
        <SideBar/>
        <ChatPage/>
    </div>
  )
}
