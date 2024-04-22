/*Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked.*/

import React,{useState} from 'react';



const CounterWithStep = () => {
    const [count,setCount]=useState(0)
    const [step,setStep]=useState(1)
    const handleIncrement=()=>{
        let setpValue=Number(step)
      setCount(count+setpValue)
    }
    const handleDecrement=()=>{
      setCount(count-step)
    }
  return (
    <div>
        <h2>Count value</h2>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br/>
        <label htmlFor="step">Step Value</label>
        <input type="number" value={step} onChange={(e)=>setStep(e.target.value)}/>
      
    </div>
  )
}

export default CounterWithStep
