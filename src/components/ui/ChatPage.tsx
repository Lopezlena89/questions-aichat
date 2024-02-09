
import {  useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageUser } from "./MessageUser";
import { MessageAI } from "./MessageAI";
import { Navbar } from "./Navbar";
import { LoadingPage } from "./LoadingPage";
import { LuSendHorizonal } from "react-icons/lu";


export const ChatPage = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_GOOGLE_KEY);
  const [textUser, setTextUser] = useState<string>('');
  const [booleanAi, setBooleanAi] = useState(false);
  const [arrayMessage, setArrayMessage] = useState<JSX.Element[]>([]);
  
  
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
      <div className="h-[85%] mt-10 w-full flex flex-col justify-between   ease-in-out duration-700 ">
        <div className="w-full h-5/6 flex justify-center items-center  ">
          <div className="w-5/6 p-7 h-full border boder-solid border-zinc-800 rounded-xl overflow-auto scroll-sidebar md:w-4/6">
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
        <div className="w-full  flex justify-center items-center mb-5  " >
          <form onSubmit={(e)=>onSubmit(e)}  className="formulario w-4/6 h-10 relative flex justify-center">
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
