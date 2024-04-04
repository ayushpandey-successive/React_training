import React,{createContext,useState} from 'react'
import Login from './Login'
import Authenticated from './Authenticated'

const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [login,setLogin] = useState(false)
    const [username,setUsername] = useState("")
    const [password,setPassword] =useState("")
  return (
    <div>
      <AuthContext.Provider value={{login,setLogin,username,setUsername,password,setPassword}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
export {AuthContext}
