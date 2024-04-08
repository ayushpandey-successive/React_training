import React from 'react'
import ControlledInput from './Ques-1/ControlledInput'
import InputComponent from './Ques-3/InputComponent'

import Validation from './Ques-4/Validation'
import Dropdown from './Ques-5/Dropdown'
import Todo from './Ques-6/Todo'
import Temperature from './Ques-8/Temperature'
import NavBar from './Ques-9/NavBar'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom'
import Forms from "./Ques-10/Forms"
import ButtonDialog from './Ques-11/ButtonDialog'
import DataTable from './Ques-12/Table'
import Login from './Ques-13/Login'
import { FormValidation } from './Ques-14/FormValidation'
import SearchFilter from './Ques-7/SearchFilter'


const Assignment_4 = () => {
  return (
    <div>
      {/* <ControlledInput/>
      <Form/>
      <InputComponent/>
      <Validation/>
      <Dropdown/>
      <Todo/>
      <SearchFilter/>
      <Temperature/> */}
      {/* <ProSidebarProvider>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
      </ProSidebarProvider> */}
      {/* <Forms /> */}
      <ButtonDialog/>
      <DataTable/>
      <Login/>
      <FormValidation/>
      
      
    
      
      
    </div>
  )
}

export default Assignment_4
