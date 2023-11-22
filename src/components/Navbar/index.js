import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState('Home')
    const navbar = [
        {title: 'Home', link: '/'},
        { title: 'Notification', link: '/notification'},
        {title: 'Profile', link: '/profile'}
    ]

   
  return (
  <div className='navbar'>
    {navbar.map((nav)=>{
        return <Link to={nav.link}><div className={`navbar-box ${active === nav.title && 'navbar-box-active'} `} onClick={()=> setActive(nav.title)}> {nav.title}</div></Link>
    })}
  </div>
    
  )
}

export default Navbar
