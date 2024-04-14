import React, { Fragment, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import profile from "./profile.jpg"
import { useNavigate } from "react-router-dom";
import { CheckUserDetails } from './Rest';
const Login = () => {


    function handleUsernameChange(ev)
{
   // console.log(ev.target.value)
   setUsername(ev.target.value)
}
const[message,setMessage]=useState("");
const[Username,setUsername]=useState("");
const[Password,setPassword]=useState("");
const navigate=useNavigate()
     
let handleSubmit=(ev)=>{
    ev.preventDefault();
CheckUserDetails(Username,Password).then(
  res=>
  {
    console.log(res)

    if(res.status){

      if(res.data==1)
  {
    sessionStorage.setItem('isUserLoggedIn',true)
    setMessage("Login successful");
    navigate('/DashBoard')
  }
    else{
      setMessage("Login failed")
    }  
  }

    })
  

}



  return (



      <div className='Login'>
<form onSubmit={handleSubmit} >
 <div className='profilepic'>
  
<img src={profile}></img>
  </div> 
 
  
   <input type="text" id='username'  placeholder='Username' onChange={handleUsernameChange}></input><br></br>
 <input type="password"   id='username'  placeholder='Password' onChange={(e)=>setPassword(e.target.value)} ></input><br></br>
<button className="button " type='submit'> Login</button>

<p className='login-message'> {message}</p> 
  </form>

      </div>
   

  )
}

export default Login