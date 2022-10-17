import * as types from "./actionType";
import axios from "axios";
import { useDispatch } from "react-redux";


export const Getindex=(id)=>{
   return{
      type:types.GET_INDEX,
      payload:id,

   }
}

const getUser =(user)=>{
    return{
        type:types.GET_USERS,
        payload:user
     
      
    }
}
const Editusers=()=>{
    return{
        type:types.EDIT_USER,
    
    }
}

const userData =(user)=>{
    return {
        type:types.GET_DATA,
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

export const Loaduser= ()=>{
  
    return (dispatch)=>{
        axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
            console.log(res)
             dispatch(userData(res.data))
        }).catch((error)=>console.log(error))
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

// export const DelUser = (id) =>{
//     console.log("what the hell is going on")
//     console.log(id)
    
//     return (dispatch)=>{
//         console.log("kldfha")
//         axios.delete(`${process.env.REACT_APP_API}/${id}`,{
            
//         }).then((res)=>{
//             console.log(res);
//             dispatch(deleteuser());
//             dispatch(loadUsers());
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }
    
//     // return () =>{
//     //     console.log("lamo");
//     //     console.log("jkhuj")
//     //     console.log(id)
        
     
//     // //    axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
//     // //      console.log(res.data)
//     // //      dispatch(deleteuser());
//     // //      dispatch(loadUsers())
//     // //    }).catch((error)=>
//     // //     console.log(error)
//     // //    );   
        

//     // }

// }

export const Userdelete =(id)=>{
    console.log("yoo");

   
        console.log("yoo");
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
            console.log(res.data);
           
              window.location.reload();
        }).catch((error)=>{
            console.log(error);
            
        })
    
}

export const Adduser = (user) =>{

    return (dispatch) =>{
        console.log("addimg user");
       axios.post(`${process.env.REACT_APP_API}`,user)
       .then((res)=>{
          if(res.data.map(function(items){
            console.log(items)
            return items.email===user.email})){
                return false
             }        
        else{ dispatch(userAdd());}
        
         
       }).catch((error)=>
        console.log(error)
       );   
        

    }


}

export const Edituser=(state,id)=>{   
     return (dispatch)=>{
       
    
        axios.put(`${process.env.REACT_APP_API}/${id}`,{
            name:state.name,
            email:state.email,
            contact:state.contact,
            address:state.address,
            salary:state.salary,
            password:state.password


        }).then((res)=>{
        
          console.log(res.data);
          dispatch(Editusers())
        dispatch(loadUsers());
            
        }).catch((error)=>
         console.log(error)
        );   
    }
         
 
     

}