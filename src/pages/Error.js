import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './Error.css'

export default function Error() {
    const navigate= useNavigate()
  return (
    <div className='errorpage'>
      <h1 className='Error'>ERROR PAGE</h1>
      <p className='error-p'>Page not found, kindly return to the home page.</p>
      <button className="error-btn" onClick={()=>{
        navigate("/")
      }}>Go Back Home</button>
    </div>
  )
}
