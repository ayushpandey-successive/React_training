/*Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.*/

import React from 'react'

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = React.useState(null)
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ]
    const handleChange = (event) => {
        setSelectedOption(event.target.value)
    }
    return (
        <>
        <select value={selectedOption} onChange={handleChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            

        </select>
        <p>Selelcted Value is {selectedOption}</p>
        </>

    )
  
}

export default Dropdown
