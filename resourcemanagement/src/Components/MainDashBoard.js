import React from 'react'
import { Link } from 'react-router-dom'
import './MainDashBoard.css'
const MainDashBoard = () => {
  return (
    <div>
 Dashboard
    <button className='button' ><Link to="/login">LogOut</Link></button>
    

    </div>
   
  )
}

export default MainDashBoard