import { UPDATEUSER } from "../actions/useractions";


export default function userreducer(state='', { type, payload }) {
    switch(type){
        case UPDATEUSER:
         return payload;
        break;
        default : 
       return state;
    }
        
    
    
    
    }