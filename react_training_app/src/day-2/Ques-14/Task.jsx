import React from 'react'

const Task = (props) => {
  
 
  return (
    <div>
        
      <h2>{props.title}</h2>
      {props.completed? <h3>Complete</h3> :<h3>Incomplete</h3> }
      <button onClick={()=>props.handleClick(props.id)}>Completed</button>
    </div>
  )
}

export default React.memo(Task)
