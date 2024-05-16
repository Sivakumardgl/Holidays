/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (

    <div className="head">
      <div className="logo">
        {/* <img src={logo} /> */}
      </div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Order"}>Booking</NavLink>
        <NavLink to={"/About"}>About</NavLink>

      </div>
      <div>
        <div className='head12'>
       
           <li><NavLink to='/signu'>Signup</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          
        </div>
        {/* <div>
        <NavLink to={"/Logout"}>Logout</NavLink>
        </div> */}




      </div>
    </div>
  );
}