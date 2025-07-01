import React, { useState } from 'react'
import Sidebar from './Sidebar'
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation()
  const [showSideBar, setShowSideBar] = useState(false);
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
              <Link className={location.pathname === link.path? "active": " "} to={link.path} key={link.name}>{link.name}</Link>
            ))
          }
            
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
