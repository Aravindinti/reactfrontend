import React, { useState } from 'react'
import './SideBar.css'
import { Sidebardata } from './Data.js'
import vwits from "./vwits.jpg"
const SideBar = () => {
    const [selected,SetSelected]=useState(0)
  return (
   <div className="Sidebar">
    <div className="logo">
        <img src={vwits}></img>
    </div>
    <div className="menu">
      {
        Sidebardata.map((item,index)=>{
        return (
            <div className={selected===index?'menuItem active ':'menuItem'}
            key={index}

            onClick={()=>SetSelected(index)}


            >
   <item.icon/>
   <span>
    {
        item.heading
    }
   </span>
            </div>
        )})
      }
    </div>
   </div>
  )
}

export default SideBar
