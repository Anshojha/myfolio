import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';


const Navbar = () => {
    return(
       <nav className='navbar'>
           <img src={logo} alt="LOGO"  className='logo'/>
           <div className="desktopMenu">
              <Link className="desktopMenuListItme">Home</Link>
              <Link className="desktopMenuListItme">About</Link>
              <Link className="desktopMenuListItme">Portfolio</Link>
              <Link className="desktopMenuListItme">Client</Link>
           </div>
           <button className="desktopButton">
            <img src={contactImg} className='desktopMenuImg' alt="" /> Contact Me
           </button>
       </nav>
    )
}


export default Navbar;