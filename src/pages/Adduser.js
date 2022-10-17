import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Adduser } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Addusers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] =useState({
        name:"",
        email:"",
        contact:"",
        address:"",
        salary:"",
        password:""
    })
    const [error, setError] = useState("")
    const {name, email,contact,address,salary,password} = state;

       const formHandling =(e) =>{
        e.preventDefault();
        let{name, value} = e.target;
         setState({...state, [name]:value})

       }
       const handleSubmit=(e)=>{
        e.preventDefault();
        let validating = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(password.match(validating) && email.length>0 && contact.length<=10){
           dispatch(Adduser(state));

          
          // toast("user added")
          setTimeout(()=>{
            navigate("/");
          },2000)
    
    
        }
        else{
          setError("Fill up with requirement");
        }
        
    
       }

  return (
    <div className='bg-primarycolor h-[100vh] text-white'>
    <h1 className='text-center text-3xl'>Add new user</h1>
      <h2 className='text-center text-white'> password must be 8-15 character and must contain one numeric value and one uppercase</h2>
  <div className='w-full items-center flex justify-center p-5'>
  <div className='flex flex-col gap-3 w-[60%] justify-center'>
      <label>Name:</label><input className='rounded-lg text-black' type="text"  onChange={formHandling} id= "name" name='name' value={name} />
      <label>Email:</label><input className='rounded-lg text-black' type = "text"  onChange={formHandling} id= "email" name='email' value={email}/>
      <label>Address:</label><input className='rounded-lg text-black' type = "text"  onChange={formHandling} id = "address" name='address' value={address}/>
      <label>Salary:</label><input className='rounded-lg text-black' type="text"  onChange={formHandling} id= "salary" name='salary' value={salary}/>
      <label>Password:</label><input className='rounded-lg text-black' type="text"  onChange={formHandling} id = "password" name='password' value={password}/>
      <label>Phonenumber:</label><input className='rounded-lg text-black' type="number"  onChange={formHandling} id= "contact" name='contact' value={contact}/>
      <button className='bg-secondarycolor p-2 mt-1 rounded-lg text-black'  onClick={handleSubmit}>Add user</button>
      

        
     </div>
  </div>
  <p className='text-center text-white'>{error}</p>
  {/* <ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/> */}
    
</div>
  )
}

export default Addusers