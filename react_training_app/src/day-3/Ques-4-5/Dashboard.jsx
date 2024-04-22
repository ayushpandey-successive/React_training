import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Link } from "react-router-dom";


const Dashboard = () => {
    const {login,setLogin,username,setUsername,password,setPassword} =useContext(AuthContext)
  return (
    <div>
      {
        login?(
            <div>
        <nav>
            <ul>
              <li>
                <NavLink to="profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="setting">Setting</NavLink>
              </li>
              
     
              
            </ul>
          </nav>
          <Outlet/>
          
          </div>
          
          ):<Navigate to='/login'/>
      }
    </div>
  )
}

export default Dashboard
