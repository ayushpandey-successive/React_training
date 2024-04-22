/*Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).*/

import React, { useState} from "react";

const tasks = [
  { id: 1, name: "Training" },
  { id: 2, name: "Coding" },
  { id: 3, name: "Playing" },
  { id: 4, name: "Developing" },
];

function Todo() {
  const [todos, setTodos] = useState(tasks);
  const [task,setTask] =useState("")
  
  
  const handleChange=()=>{
    
    setTodos([...todos,{id:Date.now().toString(36), name:task}])
    setTask("")
  }

  const Delete = (id) => {
    const updatedTodo = todos.filter((ele) => {
      return ele.id !== id;
    });
    setTodos(updatedTodo);
  };
  return (
    <div>
        <label>Enter Task:</label>
        <input type="text" placeholder="Task" onChange={(e) => setTask(e.target.value)} value={task}/>
        <button onClick={handleChange}>Add Task</button>
        
      {todos.map((todo) => (
        <h3 key={todo.id}>
          {todo.name} <button onClick={() => Delete(todo.id)}> Delete</button>{" "}
          <input type="checkbox" />{" "}
        </h3>
      ))}
    </div>
  );
}

export default Todo;
