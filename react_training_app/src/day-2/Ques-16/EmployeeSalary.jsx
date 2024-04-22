/*Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries.*/

import React,{useMemo,useState} from 'react'

const employeeData=[{
    id:1,
    name:"Ayush Pandey",
    salary:100000

},{
    id:2,
    name:"Anant Mishra",
    salary:90000

},
{
    id:3,
    name:"Udit Senger",
    salary:80000

},
]
const EmployeeSalary = () => {
    const [employee,setEmployee] =useState(employeeData)
    const averageSalary=useMemo(()=>{
        const sum=employee.reduce((acc,ele)=>{
            return acc+ele.salary;
        },0)
        const length= employee.length

        return sum/length;
    },[employee])

  return (
    <div>
        <h1>Average Salary</h1>
      {averageSalary}
    </div>
  )
}

export default EmployeeSalary
