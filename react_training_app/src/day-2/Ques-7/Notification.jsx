/*Create a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.*/


import React,{ useState} from 'react'

const Notification = () => {
const [message,setMessage]=useState("");

const [show,setShow]=useState(false)


const messageShow=()=>{
  setShow(true);
  setTimeout(() => {
    setShow(false);
  }, 5000);

  
 
  

}

  return (
    <div>
        <label htmlFor="message">Type Message</label>
        <input type="text" name='message' value={message} onChange={(e)=>setMessage(e.target.value)} />
        <button onClick={messageShow}> Send</button>

      {show && <div>{message}</div>}
    </div>
  )
}

export default Notification
