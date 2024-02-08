import { useDispatch, useSelector } from "react-redux";
import geminiapi from "../api/gemini-api";
import { getGroup, addMessageGroup } from '../redux/groupMessageSlice';
import type { RootState } from '../redux/store'



export const useGroupMessageStore = () => {
    
    const { id} = useSelector((state:RootState) => state.groupMessage);
    
    const dispatch = useDispatch();


    const getGroupMessage = async() =>{
        if(!localStorage.getItem('token'))return;
       
        try {
            const {data} = await geminiapi.get('/group',);
            console.log(data);
            
            if(!data.groupMessages ){
                await crearGroupEmply();
                return;
            }
            dispatch(getGroup(data));
            
            
           
        } catch (error) {
           
           console.log(error)
        }
    }
    const crearGroupEmply = async()=>{
        const {data} = await geminiapi.post(`/group/`);
            
            if(!data)return 
            dispatch(addMessageGroup(data))
    }

    const crearMessageGroup = async(textUser:string,textAi:string) =>{

        try {
            const {data} = await geminiapi.post(`/group/${id}`,{messageUser:textUser,messageAi:textAi});
            await getGroupMessage();
            
            if(!data)return 
            dispatch(addMessageGroup(data))
           
           
        } catch (error) {
           
           console.log(error)
        }
    }


    const deleteGroup = async() =>{
        try {
            await geminiapi.delete(`/group/${id}`);
            await crearGroupEmply();
        } catch (error) {
           
           console.log(error)
        }
    }
    const deleteGroupMessage = async(messageId:string) =>{
        try {
            await geminiapi.delete(`/group/${id}/${messageId}`);
            await getGroupMessage();
        } catch (error) {
            console.log(error)
        }
    }


    return{
        crearGroupEmply,
        getGroupMessage,
        deleteGroup,
        crearMessageGroup,
        deleteGroupMessage
    }
}
