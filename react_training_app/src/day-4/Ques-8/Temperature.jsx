/*Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.*/

import React from 'react'

const Temperature = () => {
    const [celsius, setCelsius] = React.useState(0)
    const [fahrenheit, setFahrenheit] = React.useState(0)
    const convertCelsiusToFahrenheit = () => {
        setFahrenheit(celsius * 9 / 5 + 32)
    }
    const convertFahrenheitToCelsius = () => {
        setCelsius((fahrenheit - 32) * 5 / 9)
    }
    return (
        <div>
            <label>Enter Celsius:</label>
            <input type="number" placeholder="Celsius" onChange={(e) => {setCelsius(e.target.value)
            convertCelsiusToFahrenheit(e.target.value)}} value={celsius}/>
            <label>Enter Fahrenheit:</label>
            <input type="number" placeholder="Fahrenheit"  onChange={(e) => {setFahrenheit(e.target.value) 
                convertFahrenheitToCelsius(e.target.value)}} value={fahrenheit} />
            
            
        </div>
    )
  
}

export default Temperature
