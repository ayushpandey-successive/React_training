import React,{useContext,useState} from 'react'
import { loginContext } from './Parent'

const Child = () => {
    const {login,setLogin} = useContext(loginContext)
    const [username,setusername] =useState("")
    
  return (
    <div>

        {
            login?(<h1>Welcome {username}! </h1>):(<h1>Please log in.</h1>)
        }
        {login?<button onClick={()=>setLogin(false)}>Sign Out</button>:(<div><input type="text" disabled={login} onChange={(e)=> setusername(e.target.value)}/>
         <button onClick={()=>{setLogin(true)}}>Enter</button></div>
            )
        
        
        
        }
        
      
    </div>
  )
}

export default Child
