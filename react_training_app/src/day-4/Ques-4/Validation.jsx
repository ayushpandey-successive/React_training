/*4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.*/

import React, { useState } from "react"


const Validation = () => {
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    

    const handleSubmit = ()=>{
      if(confirmPassword===password) {
        alert("Form Submitted Successfully")
        setConfirmPassword("")
        setPassword("")
      }
        
    }


  return (
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

      <button onClick={handleSubmit}>Submit</button>
      
      
    </div>
  )
}

export default Validation
