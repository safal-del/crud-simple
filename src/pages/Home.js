import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers,DelUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';





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
 console.log(select);
 const dispatch = useDispatch();
 const navigate = useNavigate();
//  const historya = useHistory();

 useEffect(()=>{
   dispatch(loadUsers());

 },[])

let datas = select.map(function(items){
   return (<div style={{display:"flex"}}>
           <p>{items.name}</p>
           <p>{items.address}</p>
           <p>{items.email}</p>
           <p>{items.contact}</p>
           <button onClick={()=>dispatch(DelUser(items.id))}>del</button>
           <button onClick={()=>navigate(`/edituser${items.id}`)}>Edit</button>

   </div>)
})

  return (
    <div>Home
        <div>
          <button onClick={()=>navigate("/adduser")}>Add user</button>
          {datas}
          

        </div>
    </div>
  )
}

export default Home