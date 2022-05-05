import React, { useState } from "react";
import logo from "../imgs/logo.png";
import "./Sidebar.css";
import { motion } from "framer-motion";

import { UilEstate } from "@iconscout/react-unicons";

import { SidebarData } from "../Data/Data";

import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  console.log(selected);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-65%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "65%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              key={index}
              className={selected === index ? "menu-item active" : "menu-item"}
              onClick={() => setSelected(index)}
            >
              <div>{<item.icon />}</div>
              <span>{item.heading}</span>
            </div>
          ))}
          {/* signoutIcon */}
          <div className="menu-item">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
