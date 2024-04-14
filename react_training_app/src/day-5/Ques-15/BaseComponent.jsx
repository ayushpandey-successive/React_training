import React from 'react'
import WithLogger from './WithLogger'

const BaseComponent = (props) => {
  return (
    <div>
      This is a component
      <h1>{props.count}</h1>
      <button onClick={()=>props.setCount(props.count+1)}>Increase Count</button>
    </div>
  )
}

export default WithLogger(BaseComponent)
