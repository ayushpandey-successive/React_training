import Counter from "./Ques-1/Counter";
import PersonForm from "./Ques-2/PersonForm";
import ToDoList from "./Ques-3/ToDoList"
import RandomNumberGenerator from "./Ques-4/RandomNumberGenerator"
import CounterWithStep from "./Ques-5/CounterWithStep";
import Clock from "./Ques-6/Clock";
import Notification from "./Ques-7/Notification";
import { ThemeProvider } from "./Ques-9/Theme";
import Switcher from "./Ques-9/Switcher";
import { LanguageProvider } from "./Ques-10/Provider.js";
import LanguageSwitcher from "./Ques-10/LanguageSwitcher";
import { ShoppingCartProvider } from "./Ques-11/CartContext.jsx";
import ShoppingCart from "./Ques-11/ShoppingCart.jsx";
import Voting from "./Ques-12/Voting.jsx";
import Parent from "./Ques-13/Parent.jsx";
import Tasks from "./Ques-14/Tasks.jsx"
import StudentList from "./Ques-15/StudentList.jsx";
import EmployeeSalary from "./Ques-16/EmployeeSalary.jsx";
import CopyButton from "./Ques-17/CopyButton.jsx";
import Storage from "./Ques-18/Storage.jsx"
import Timer from "./Ques-19/Timer.jsx";

import React from 'react'
import Slideshow from "./Ques-8/SlideShow.jsx";
const imageUrls = 
["https://avatar.iran.liara.run/public/job/police/male",
"https://avatar.iran.liara.run/public/job/police/female",
"https://avatar.iran.liara.run/public/job/lawyer/male"]

const Assignment_2 = () => {
  return (
    <div>
      <h1>Question 1</h1>
      <Counter/>
      <h1>Question 2</h1>
      <PersonForm/>
      <h1>Question 3</h1>
      <ToDoList/>
      <h1>Question 4</h1>
      <RandomNumberGenerator/>
      <h1>Question 5</h1>
      <CounterWithStep/>
      <h1>Question 6</h1>
      <Clock/>
      <h1>Question 7</h1>
      <Notification/>
      <h1>Question 8</h1>
      <Slideshow images={imageUrls}/>
      <h1>Question 9</h1>
      <ThemeProvider>
      <Switcher/>
      </ThemeProvider>
      <h1>Question 10</h1>
      <LanguageProvider>
      <LanguageSwitcher/>
      </LanguageProvider>
      <h1>Question 11</h1>
      <ShoppingCartProvider>
      <ShoppingCart/>
      </ShoppingCartProvider>
      <h1>Question 12</h1>
      <Voting/>
      <h1>Question 13</h1>
      <Parent/>
      <h1>Question 14</h1>
      <Tasks/>
      <h1>Question 15</h1>
      <StudentList/>
      <h1>Question 16</h1>
      <EmployeeSalary/>
      <h1>Question 17</h1>
      <CopyButton/>
      <h1>Question 18</h1>
      <Storage/>
      <h1>Question 19</h1>
      <Timer/>

    </div>
  )
}

export default Assignment_2
