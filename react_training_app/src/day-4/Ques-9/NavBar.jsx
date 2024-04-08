/*Implement a responsive sidebar navigation using Material-UI's Drawer component. Include links that allow users to navigate between different sections of your web app.*/

import React from 'react'
import "./styles.css"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import { Route,BrowserRouter , Routes } from 'react-router-dom';
import Home from "./Home";

import About from './About';
import Profile from './Profile';
import Settings from './Settings';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";


const NavBar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar className="app">
            <Menu>
              <MenuItem 
               component={<Link to="/" className="link" />}
              className="menu1"
              icon={
                <MenuRoundedIcon
                className='icon'
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
              >

                <h2>NavBar</h2>
              </MenuItem>
              <MenuItem
              component={<Link to="/" className="link" />}
              >HOME  </MenuItem>
              <MenuItem
              component={<Link to="/about" className="link" />}
              > ABOUT</MenuItem>
              <MenuItem
              component={<Link to="/profile" className="link" />}
              > PROFILE </MenuItem>
              <MenuItem
              component={<Link to="/setting" className="link" />}
              > SETTINGS </MenuItem>
              
            </Menu>
          </Sidebar>
          
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="setting" element={<Settings/>} />
          
        </Routes>
        
        </div>
      );
      
  
}

export default NavBar
