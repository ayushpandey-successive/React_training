import React from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Home = () => {
    const {login,setLogin,username,setUsername,password,setPassword} =useContext(AuthContext)
  return (
    <div>
      <Navbar/>
      <h1>HOME PAGE</h1>
      {
        username===""?null:<h2>Hello {username}</h2>
      }
      
    </div>
  )
}

export default Home
