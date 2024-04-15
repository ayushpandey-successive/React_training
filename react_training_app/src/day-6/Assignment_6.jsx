import React from 'react'
import RouteComponent from './Ques-1/RouteComponent'
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from 'react-router-dom';
import Counter from '../day-6/Ques-3/Counter';
import LoginForm from './Ques-4/LoginForm';
import PropManager from './Ques-5/PropManager';

const Assignment_6 = () => {
  return (
    <div>
        {/* <ErrorBoundary fallback={<h1>Error Loading Page</h1>}>
        <BrowserRouter>
      <RouteComponent/>
      </BrowserRouter>
      </ErrorBoundary> */}
      {/* <Counter/>
      <LoginForm/> */}
      <PropManager/>
    </div>
  )
}

export default Assignment_6
