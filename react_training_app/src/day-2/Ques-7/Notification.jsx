/*Create a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.*/


import React,{useEffect, useState} from 'react'

const Notification = () => {
const [message,setMessage]=useState("");
const [data,setData]=useState("")
const [show,setShow]=useState(true)

useEffect(()=>{
   
       
       
  
        
        setTimeout(() => {
          setShow(false);
        }, 5000);

        
       
        setShow(true);
        
  
        
        
    
    

},[message])

  return (
    <div>
        <label htmlFor="message">Type Message</label>
        <input type="text" name='message' value={data} onChange={(e)=>setData(e.target.value)} />
        <button onClick={()=>{setMessage(data) 
            setData("")}}> Send</button>

      {show && <div>{message}</div>}
    </div>
  )
}

export default Notification
