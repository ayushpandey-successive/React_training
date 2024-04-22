/*create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.*/


import React,{useCallback,useState} from'react';
import Task from './Task';

const Tasks = () => {
    const[task,setTask]=useState([
        {
            id:1,
            title:'Task 1',
            completed:false
        },
        {
            id:2,
            title:'Task 2',
            completed:false
        },
        {
            id:3,
            title:'Task 3',
            completed:false
        },
      
    ])
    const [data,setData]=useState("")

    const handleClick=useCallback((id)=>{
        

        if(task[id-1].completed===false)
        {
            
        setTask(task.map((item)=>{
            if(item.id===id && item.completed===false){
                return{
                   ...item,
                    completed:!item.completed
                }
            }
            return item
        }))
    }
    },[task])
    const addTask=()=>{
        
        setTask([...task,{id:Date.now().toString(36),title:data,completed:false}])
        
        setData("")
    }
    return (
        <div>
            <input type="text" onChange={(e)=>{setData(e.target.value)}} value={data} />
            <button onClick={()=> addTask()}>Add Task</button>
            {task.map((item)=>{
                return <Task key={item.id} title={item.title} completed={item.completed} handleClick={handleClick} id={item.id}/>
            })}
            
            
            
            
        </div>
    )

}
export default Tasks