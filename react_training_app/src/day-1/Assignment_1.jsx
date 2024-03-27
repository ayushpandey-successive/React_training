import React from 'react'
import Greetings from './Ques-1/Greetings'
import UserCard from './Ques-2/UserCard'
import "./Ques-2/card.css"
import Weather from './Ques-3/Weather'
const users=[{name:"Ayush Pandey",
 email:"ayushji3sep@gmail.com", 
 image:"https://avatar.iran.liara.run/public/job/doctor/male"},

 {name:"Anant Mishra",
 email:"AnantMishra@gmail.com", 
 image:"https://avatar.iran.liara.run/public/job/police/male"},
]

const Assignment_1 = () => {
  return (
    <div>
      <Greetings/>
      <div className="user">
      {users.map((user)=>{
       return <UserCard user={user}/>
      })}
      </div>
      <Weather temp = {7} />
 <Weather temp = {28} /> 
 <Weather temp = {12} />
    </div>
  )
}

export default Assignment_1
