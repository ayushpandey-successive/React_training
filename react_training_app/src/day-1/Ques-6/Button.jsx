/*Create a functional component named Button that accepts props for text and color.
Style the button using inline styles or CSS classes based on the color prop.
Import and render the Button component in the App component with different text and color props.*/

import React from "react";

const Button = ({ text, color }) => {
  return <button style={{ backgroundColor: color }}>{text}</button>;
};

export default Button;
