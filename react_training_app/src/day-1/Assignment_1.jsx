import React from "react";
import Greetings from "./Ques-1/Greetings";
import UserCard from "./Ques-2/UserCard";
import "./Ques-2/card.css";
import Weather from "./Ques-3/Weather";
import Counter from "./Ques-4/Counter ";
import TaskList from "./Ques-5/TaskList";
import Button from "./Ques-6/Button";

const users = [
  {
    name: "Ayush Pandey",
    email: "ayushji3sep@gmail.com",
    image: "https://avatar.iran.liara.run/public/job/doctor/male",
  },

  {
    name: "Anant Mishra",
    email: "AnantMishra@gmail.com",
    image: "https://avatar.iran.liara.run/public/job/police/male",
  },
];
const Tasks=[
    {
        id: 1,
        title: "Task 1",
        
    },
    {
        id: 2,
        title: "Task 2",
        
    },
    {
        id: 3,
        title: "Task 3",
        
    },
    {
        id: 4,
        title: "Task 4",
        
    },
   
]

const Assignment_1 = () => {
  return (
    <div>
      <h1>Question: 1</h1>
      <Greetings />
      <h1>Question: 2</h1>
      <div className="user">
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
      <h1>Question: 3</h1>
      <Weather temp={17} />
      <Weather temp={38} />
      <Weather temp={29} />
      <h1>Question: 4</h1>
      <Counter />
      <h1>Question: 5</h1>
      <TaskList list={Tasks}/>
      <h1>Question: 6</h1>
      <Button text="Click Me" color="red" />
      <Button text="Click Me" color="green" />
    </div>
  );
};

export default Assignment_1;
