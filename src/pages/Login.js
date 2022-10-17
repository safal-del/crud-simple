import React from 'react'

const Login = () => {
  return (
    <div>
         <div className='main text-white bg-primarycolor h-[100vh]'>
      <h1 className='pt-10 text-center text-2xl'> Use email as ram@gmail.com and password as rambahadurA@1 to login or you can redirected to the regiter page</h1>
     
        <div className='flex flex-col justify-center items-center h-96'>
        <h1 className='text-center text-3xl'>Login to your EMS account</h1>
           <div className='w-56 mt-10 '>
            <label className='text-lg font-semibold'>Email:</label><input className='border-lg text-black w-60 h-10 border-2 rounded border-black'  type= "text" placeholder='email' id= "email" required/><br/>
           </div>
           <div className='mt-5  w-56 '>
          <label className='text-lg font-semibold' > Password:</label><input className='border-lg text-black w-60 h-10 border-2 rounded border-black ' type="password" placeholder='password' id= "password" required />
           </div>
           <div><h1>dont have an account?<Link to="/adduser" className='hover:text-black'> Register here</Link></h1></div>
           <div className='ml-44 mt-5  justify-end  '> <button  className=' pl-4 pr-4 pt-2  pb-2 bg-secondarycolor rounded' onClick={ChangeTheLoginState}> Login </button></div>
            
             </div>
             <h1 className=' text-center text-white text-lg font-bold'>{error}</h1>
    </div>
    </div>
  )
}

export default Login