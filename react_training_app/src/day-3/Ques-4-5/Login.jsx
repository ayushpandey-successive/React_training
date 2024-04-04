import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'


const Login = () => {
  const {login,setLogin,username,setUsername,password,setPassword} =useContext(AuthContext)
   
    
    const handleClick=()=>{
      console.log(username)
      console.log(password)
      if(username==="Ayush" && password==="123")
      {
        console.log(login)
        setLogin(true)
      }
    }

  return (
    <div>
      <h2>Username</h2>
      <input type="text" onChange={(e)=> setUsername(e.target.value)} />
      <h2>Password</h2>
      <input type="text" onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      {
        login?<Navigate to='/'/>:<Navigate to='/login'/>
      }
      
    </div>
  )
}

export default Login
