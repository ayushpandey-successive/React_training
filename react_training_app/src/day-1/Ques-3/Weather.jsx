/*Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.*/
import React from "react";

function Weather(props) {
  let message = "";
  if (props.temp > 25) message = `It is Sunny today. `;
  else if (props.temp < 10) message = `It is Cold today. `;
  else message = `It is pleasant weather today. `;
  return (
    <div>
      <h3>{message}</h3>
      <h4>Temperature: {props.temp}</h4>
    </div>
  );
}

export default Weather;
