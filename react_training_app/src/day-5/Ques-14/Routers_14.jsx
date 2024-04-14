import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedComponent from './ProtectedComponent';
import Login from './Login';
import BaseComponent from './BaseComponent';

const Routers_14 = () => {
  return (
   <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route  element={<ProtectedComponent/>} >
   <Route path='page' element={<BaseComponent/>} />
        </Route>
       
      </Routes>
      </Router>
   
  );
};

export default Routers_14;