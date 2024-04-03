/*Problem Statement: Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked.*/

import React,{useState} from 'react'

const RandomNumberGenerator= () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));
  const handleClick=()=>{
    setRandomNumber(Math.floor(Math.random() * 100));
  }
  return (
    <div>
      <h2>Random Number</h2>
      <h3>{randomNumber}</h3>
      <button onClick={handleClick}>Random Number</button>
    </div>
  )
}

export default RandomNumberGenerator


