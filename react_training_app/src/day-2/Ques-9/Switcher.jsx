/*Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.*/

import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Theme";
import "./theme.css"






const Switcher = () => {
  const { toggle,toggleFunction } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleFunction}>Toggle Theme</button>
      {toggle? (
        <div className="dark-theme">
          <h1>Dark Theme</h1>
        </div>
      ) : (
        <div className="light-theme">
          <h1>Light Theme</h1>
        </div>
      )}
      
    </div>
  )
}

export default Switcher
