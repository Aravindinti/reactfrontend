import React from 'react'

import { Link, Navigate } from "react-router-dom";
import SideBar from './SideBar';
import MainDashBoard from './MainDashBoard';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='DashBoard'>
    <SideBar></SideBar>
<MainDashBoard></MainDashBoard>
    </div>
  )
}

export default Dashboard