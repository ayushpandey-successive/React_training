/*Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.*/

import React from "react";

const TaskList = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
