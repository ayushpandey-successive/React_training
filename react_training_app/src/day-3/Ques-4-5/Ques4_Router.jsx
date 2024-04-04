import React from 'react'
import { Route,BrowserRouter , Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page404 from './Page404';
import Authenticated from './Authenticated'
import Login from './Login';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Profile from './Profile';

const Ques3_Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route element={<Authenticated/>}>
        <Route path='about' element={<About/>} />
        </Route>
        <Route path="dashboard" element={<Dashboard/>}>
        <Route path='setting' element={<Settings/>} />
        <Route path='profile' element={<Profile/>} />

        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Page404/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ques3_Router
