import React, { useState } from 'react'
import { GiEagleEmblem } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import imagehand from '../../assets/imagehand.jpeg'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='top' className='navbar'>
        <div className="container">
        <div className='navbar-left'>
        <div className='hand'>
          <img src={imagehand} alt="Hand Image" />
        </div>
            <div className="logo">
            <h1>VYUHA</h1>
            </div>
            </div>
            <div className='navbar-right'>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Portfolio'>portfolio</Link></li>
                <li><Link to='/Ourcontent'>Our content</Link> </li>
                <li><Link to='/aboutus'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li> <Link to='/signin'><button>Sign in / Login</button></Link></li>
                <li> <Link to='/logout'> log out</Link></li>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
            </div>
        </div>
    </div>
    </div>

    );
}

export default Navbar
