import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import Notification_icon from '../../assets/Notification.png'
import profile from '../../assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
  return (
    <>
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev==false?true:false)} src={menu_icon} alt="" />
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>

            <div className="nav-middle flex-div">

              <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search} alt="srch" />
              </div>
                
            </div>  

            <div className="nav-right flex-div">
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={Notification_icon} alt="" />
                <img className='user-icon' src={profile} alt="" />
            </div>
        </nav>
    </>
  )
}

export default Navbar