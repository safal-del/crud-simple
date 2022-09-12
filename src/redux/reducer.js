import * as types from "./actionType"


const initialState = {
    users:[],
    user:{
        title:"",
        detail:""
    },
    loading:false,

}

function handler(data){
  if(!initialState.users.includes(data)){
    initialState.users.push(data)
  }
}

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
        
        case types.ADD_USER:{
            return{
                ...state,
                loading:false
            }
        }
       
         default:{
            return state;

        }
    }




}
export default userReducer;