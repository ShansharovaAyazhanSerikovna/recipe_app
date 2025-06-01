import React, { useState } from 'react'
import Sidebar from './Sidebar'
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const links = [
    {name: "Home",
    path:"/", 
    icon: faHome
    },
    {name: "Recipes",
    path:"/recipes",
    icon:  faList
    },
    {name: "Settings",
    path:"/settings",
    icon: faCog
    }

  ]

  function closeSideBar(){
    setShowSideBar(false)
  }
  return (
    <>
    <div className='navbar container'>
        <a className="logo" href='#!'>F<span>oo</span>diesHub</a>
        <div className="nav-links">
          {
            links.map(link => (
              <a href='#!' key={link.name}>{link.name}</a>
            ))
          }
            {/* <a href='#!'className='active'>Home</a>
            <a href='#!'>Recipes</a>
            <a href='#!'>Settings</a> */}
        </div>
        <div onClick = {()=>setShowSideBar(true)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    {showSideBar && <Sidebar close = {closeSideBar} links = {links}/>}
    </>
  )
}
