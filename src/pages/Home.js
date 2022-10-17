import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers,Userdelete,Edituser,Getindex } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import "./Home.css"





// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



const Home = () => {
 const select = useSelector((state)=>{

  return state.data.users
 })
  const user = useSelector((state)=>{ 
    return state.data.user
  })
  const [state, setState] = useState(false);

console.log(user);  
console.log(select);

 const dispatch = useDispatch();
 const navigate = useNavigate();
//  const historya = useHistory();

 useEffect(()=>{
   dispatch(loadUsers());

 },[])

 function Navigatetoadduser(){
    navigate("/adduser")
 }
 function Navigatetoedituser(id){
   dispatch(Getindex(id));
  navigate("/edituser");
}







  

  // 




   
 

let datas = select.map(function(items){
   return ( <tr>
    <td>{items.name}</td>
    <td>{items.email}</td>
    <td>{items.address}</td>
    <td>{items.salary}</td>
    <td>{items.contact}</td>
    <td><button  className='rounded-lg p-1 pl-2 pr-2 bg-primarycolor hover:bg-green-600 text-white' onClick={()=>Navigatetoedituser(items.id)}>edit</button></td>
    <td><button  className='rounded-lg p-1 pl-2 pr-2 bg-redcolor hover:bg-red-900 text-white' onClick={()=> Userdelete(items.id)}>delete</button></td>
  </tr>)
})


  return (
    <div>Home
         <div className='h-[100vh] bg-gray-200'>
      <div className='tablediv flex justify-center'>
      <table className=' text-center w-full'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Salary</th>
          <th>Contact</th>
          <th>
            <button onClick={()=>setState((prevstate)=>!prevstate)}>sortby {state? "^" : "▼"}</button>
           {/* {state ?  <div className='z-20 block absolute bg-gray-200 w-32 h-32 ml-5 mt-3'>
              <button onClick={sortAccending} className='mt-4 text-l font-200'>accending</button><br/>
              <button className='mt-2' onClick={SortDecendingOrder} >decending</button><br/>
              <button onClick={Sortsalary} className='mt-2'>salary  </button>

            </div> : null}  */}
            




          </th>
      
        </tr>
        {datas}

      </table>
      </div>
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
    <div><button className='text-black' onClick={Navigatetoadduser}>navigate</button></div>
    <div><button className='text-black' onClick={Navigatetoedituser}>edit</button></div>
    {/* <div><button className='text-black' onClick={()=> dispatch(Edituser())}>check</button></div> */}
    </div>
  )
}

export default Home