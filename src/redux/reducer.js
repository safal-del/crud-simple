import * as types from "./actionType"


const initialState = {
    users:[],
    user:[],
    loading:false,
    index:0,

}

// function handler(data){
//   if(!initialState.users.includes(data)){
//     initialState.users.push(data)
//   }
// }

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.GET_USERS:{
            return{
                ...state,
                 users: action.payload,             
                 loading:false
                
            };
        }
        case types.DEL_USER:{
            return{
                 ...state,
                loading:false
            }
        }
        case types.GET_DATA:{
            return{
                ...state,
                 user: action.payload.map(function(items){
                     console.log(items.data)
                    return items.data;
                 })
            }
        }
        
        case types.ADD_USER:{
            return{
                ...state,
                loading:false
            }
        }
        case types.EDIT_USER:{
            return {
                ...state
            }
        }
        case types.GET_INDEX:{
            return {
                ...state,
                 index:action.payload
            }
             

        } 
        
        
       
         default:{
            return state;

        }
    }




}
export default userReducer;