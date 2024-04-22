import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>Count</h1>
      <h2>{props.count}</h2>
      <button onClick={()=> props.incrementCount()}>increment</button>
      <button onClick={()=> props.setCount(0)}>Reset</button>
    </div>
  )
}

export default Child
