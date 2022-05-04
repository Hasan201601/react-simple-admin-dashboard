import React, { useState } from 'react'
import logo from "../imgs/logo.png"
import "./Sidebar.css"

import {UilEstate} from "@iconscout/react-unicons"

import { SidebarData } from '../Data/Data'

import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected,setSelected]=useState(0)
  console.log(selected);

  return (
    <div className="sidebar">
      {/* logo */}
      <div className='logo'>
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {
          SidebarData.map((item,index)=><div 
          key={index}
          className={selected ===index ? "menu-item active":"menu-item"}
          onClick={()=>setSelected(index)}
          >
            <div>
              {<item.icon/>}
            </div>
            <span>
              {item.heading}
            </span>
        </div>
        )}
        {/* signoutIcon */}
        <div className="menu-item">
          <UilSignOutAlt />
        </div>
      </div>


    </div>
  )
}

export default Sidebar