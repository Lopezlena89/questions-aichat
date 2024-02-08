import { useDispatch } from "react-redux";
import geminiapi from "../api/gemini-api";
import { onSaveMessage } from "../redux/messageSlice";

// import type { RootState } from '../redux/store'


export const useMessageStore = () => {
    
    // const { id,message} = useSelector((state:RootState) => state.message);
    const dispatch = useDispatch();


    const saveMessage = async(text:string) =>{
        if(!text)return;
        try {
            const {data} = await geminiapi.post('/',{message:text});
            console.log({data})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', String(new Date().getTime()));
            dispatch(onSaveMessage({name:data.name,uid:data.uid}));
            
        } catch (error) {
           
           console.log(error)
        }
    }


    return{
        saveMessage,
    }
}
