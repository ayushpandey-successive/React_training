import React from 'react'
import { Route,BrowserRouter , Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page404 from './Page404';

const Ques3_Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Page404/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ques3_Router
