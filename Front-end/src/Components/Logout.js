import React,{useState} from 'react'
import './Logout.css'

export default function Logout() {
    const[action,setAction]=useState('')

    const handleLogin = () => {
        setAction(false)
      }
  return (
    <div>
      <button type='Submit' className={action === "Login" ? "submit gray" : "submit"} onClick={handleLogin}>Sign Up</button>
    </div>
    
  )
}
