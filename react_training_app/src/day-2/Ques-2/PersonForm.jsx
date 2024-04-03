/*Create a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields.*/

import { useState } from "react";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [show,setShow] = useState(false);
 
  const handleSubmit = () => {
  
    setShow(true)
    
    
  };
  return (
    
    
    <div style={{display:"flex", flexDirection:"column"}}>
        <div>
        <label htmlFor="first name">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="last name">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="age">Age</label>
      &nbsp;&nbsp;&nbsp;&nbsp;<input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
       
       
       </div>
       <div>
       <button type="submit" onClick={handleSubmit}>Submit</button>
       </div>
    
      
      
      
      {show && <div>
        <p>First Name:<strong>{firstName}</strong></p>
        <p>Second Name:<strong>{lastName}</strong></p>
        <p>Age:<strong>{age}</strong></p>
      
      </div>}
      
    
    </div>
  );
};

export default PersonForm;