import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Adduser } from '../redux/action';

const Editusers = () => {
    const dispatch = useDispatch();


    const [state, setState] =useState({
        name:"",
        email:"",
        contact:"",
        address:""
    })
    const [error, setError] = useState("")
    const {name, email,contact,address} = state;

       const formHandling =(e) =>{
        e.preventDefault();
        let{name, value} = e.target;
         setState({...state, [name]:value})

       }
       const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email ||!address || !contact){
            setError("please input all the field")

        }
        else{
            dispatch(Adduser(state))

        }
       }

  return (
    <div>
        <h2>Add user</h2>

        <div>
            <h3>{error}</h3>
            <form onSubmit={handleSubmit}>
          Name:<input type="text" value={name} onChange={formHandling} name="name"/><br />
          Email:<input type="text" value={email} onChange={formHandling} name="email"/><br />
          Contact:<input type="text" value={contact} onChange={formHandling} name= "contact" /><br />
          Address:<input type="text" value={address} onChange={formHandling} name= "address" /><br />
           <button type='submit'>add</button>
          </form>



        </div>
    </div>
  )
}

export default Editusers