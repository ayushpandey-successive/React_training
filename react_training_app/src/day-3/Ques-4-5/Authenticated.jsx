import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
const Authenticated = () => {
    const {login,setLogin,username,setUsername,password,setPassword} =useContext(AuthContext)
    //console.log(login)
  //let auth = {'token':true}
return (
    login ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default Authenticated