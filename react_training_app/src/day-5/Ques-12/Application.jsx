//Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.
import React,{useState} from 'react'
import Button from './Button'

function Application1() {
    const [count,setCount]=useState(0)
    function onClickHandler()
    {
        setCount(count+1)
    }
  return (
    <div>
       <Button color={"green"} onClickHandler={onClickHandler} count={count}/>
    </div>
  )
}

export default Application1