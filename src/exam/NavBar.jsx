import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import APIdemo from './APIdemo'
import EmployeeRegistration from './EmployeeRegistration'
import RegisteredEmployee from './RegisteredEmployee'
import Home from './Home'

export default function NavBar() 
{
  return (
    <div>

        <h2> Employee </h2>
        <Link to="/" style={{marginRight: "20px"}} > Home </Link>
        <Link to="/empregistration" style={{marginRight: "20px"}}> Employee Registration </Link>
        <Link to="/registeredemp" style={{marginRight: "20px"}}> Registered Employees </Link>
        <Link to="/api" style={{marginRight: "20px"}} > API Demo </Link>


        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/empregistration' element={<EmployeeRegistration/>}/>
            <Route path='/registeredemp' element={<RegisteredEmployee/>}/>
            <Route path='/api' element={<APIdemo/>}/>
            <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>

    </div>
  )
}