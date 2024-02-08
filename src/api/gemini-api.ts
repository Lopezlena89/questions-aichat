import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()

const geminiapi = axios.create({
    baseURL: VITE_API_URL,
    headers:{
        'x-token': localStorage.getItem('token'),
        
    },
    

});

// Todo: configurar interceptores
// geminiapi.interceptors.request.use( config => {

//     config.headers = {
//         ...config.headers,
//         'x-token': localStorage.getItem('token')
//     }

//     return config;
// })


export default geminiapi;





