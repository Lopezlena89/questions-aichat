import {  useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageUser } from "./MessageUser";
// import { useGroupMessageStore } from "../../hooks/useGroupMessage";
import { MessageAI } from "./MessageAI";
// import { RootState } from "../../redux/store";
// import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { LoadingPage } from "./LoadingPage";

export interface MessageInterface{
  messageAi:string,
  messageUser:string,
  _id:string,

}

export const ChatPage = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_GOOGLE_KEY);
  
  // const {groupMessage} = useSelector((state:RootState) => state.groupMessage);

  const [textUser, setTextUser] = useState<string>('');
  const [booleanAi, setBooleanAi] = useState(false);
  const [arrayMessage, setArrayMessage] = useState<JSX.Element[]>([]);
  // const { crearMessageGroup } = useGroupMessageStore();
  
  const onSubmit = async(data:React.FormEvent<HTMLFormElement>) =>{

    data.preventDefault();
    setBooleanAi(true);
    console.log(arrayMessage);
    const prompt = textUser; //useState
    setArrayMessage([...arrayMessage,<MessageUser message={prompt}/>])
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContentStream(prompt);
    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
    }
    setTextUser('');
    setArrayMessage([...arrayMessage,<MessageUser message={prompt}/>,<MessageAI message={text}/>])
    // await crearMessageGroup(textUser,text);
    setBooleanAi(false);

  }
  return (
    <div className="w-screen h-screen flex flex-col  text-white">
      <Navbar/>
      <div className="h-[85%] mt-10 w-full flex flex-col justify-between   ease-in-out duration-700 md:h-[90%]">
        <div className="w-full h-5/6 flex justify-center items-center  ">
          <div className=" w-5/6 p-7 h-full border boder-solid border-zinc-800 rounded-xl overflow-auto scroll-sidebar">
            
            {/* {
              groupMessage.map((messages:MessageInterface,index) => ( 
                  <div key={index} className="box-animate" >
                    <MessageUser message={messages.messageUser}/>
                    <MessageAI message={messages.messageAi}/>
                  </div>
              ))
            } */}
            {
              arrayMessage.map((message,key) =>(
                <div key={key}>
                  {message}
                </div>
              ))
            }
            {booleanAi && <LoadingPage/>}
              
          </div>
        </div>
        <div className="w-full  flex justify-center items-center mb-10 md:mb-0  " >
          <form onSubmit={(e)=>onSubmit(e)}  className="formulario w-5/6 h-10 relative flex justify-center">
            <input 
              type="text" 
              placeholder="Message Ai" 
              value={textUser}
              className="boton-menu input-text p-5 pr-12 w-full h-10 border boder-solid border-zinc-700 rounded-2xl bg-zinc-900 outline-none text-pink-600 md:w-4/6 duration-500 " 
              onChange={({target})=>setTextUser(target.value)}
            />
            <div className="enviar relative">
              <button type="submit"><LuSendHorizonal className="absolute right-5 top-3 cursor-pointer hover:text-pink-600 duration-300" size={20}/></button>
            <div  className="texto tooltip bg-zinc-900 text-white">Enviar Mensaje</div>
            </div>
          </form>
          
        </div>
      </div>
      
    </div>
  )
}
