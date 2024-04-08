/*Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.*/


import React from 'react'

const ControlledInput = () => {
    const [inputValue, setInputValue] = React.useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
        <input
            value={inputValue}
            onChange={handleInputChange}
        />
        <h2>{inputValue}</h2>
        </>
    )
  
}

export default ControlledInput
