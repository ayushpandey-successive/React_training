/*Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.*/


import React,{useState} from 'react'
import HiddenComponent from './HiddenComponent'

const InputComponent = () => {
    const [inputValue,setInputValue] = useState('')
    const [show,setShow]=useState(false)
    const handleSubmit = () => {
        console.log(inputValue)
        if(inputValue==="show") {
            setShow(true)
        } else {
            setInputValue("")
        }
       
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            {show?<HiddenComponent/>:null}
        </div>
            
    )
  
}

export default InputComponent
