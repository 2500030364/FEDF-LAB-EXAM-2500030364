import React, { useEffect, useState } from 'react'

export default function RegisteredEmployees() 
{
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees =
    JSON.parse(localStorage.getItem("EmployeeRegistrations")) || []
    setEmployees(storedEmployees)

  }, [])

  return (
    <div>

      <h2><u>Registered Employees</u></h2>

      {
        employees.length === 0 ?
        <b>No Employees Registered</b> :
        <table border={1}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
          </thead>
          <tbody>
          {
            employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.fullName}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>{emp.location}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      }
    </div>
  )
}