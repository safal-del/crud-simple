import * as types from "./actionType";
import axios from "axios";



const getUser =(user)=>{
    return{
        type:types.GET_USERS,
        payload:user
     
      
    }
}

const deleteuser =()=>{
    return{
        type:types.DEL_USER,
        

    }
}
const userAdd =()=>{
    return{
        type:types.ADD_USER,
    }
}


export const loadUsers = () =>{

    return (dispatch) =>{
       axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
         console.log("res" + res)
         (dispatch(getUser(res.data)));
       }).catch((error)=>
        console.log(error)
       );
        

    }

}

export const DelUser = (id) =>{

    return (dispatch) =>{
       axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
         console.log("res" + res)
         dispatch(deleteuser());
         dispatch(loadUsers())
       }).catch((error)=>
        console.log(error)
       );   
        

    }

}

export const Adduser = (user) =>{

    return (dispatch) =>{
       axios.post(`${process.env.REACT_APP_API}`,user)
       .then((res)=>{
          
         console.log("res" + res)
           

         dispatch(userAdd());
        
         
       }).catch((error)=>
        console.log(error)
       );   
        

    }

}