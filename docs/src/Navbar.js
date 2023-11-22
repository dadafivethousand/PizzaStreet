import React, { useState } from 'react'
import {  FaBars, FaTimes } from 'react-icons/fa'
 //FaInstagram, FaFacebookF, FaTwitter
 
import logo from './Images/logo.png'
import { Link } from 'react-scroll'

import './Stylesheets/Navbar.css'

export default function Navbar(){
//setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
// change nav color when scrolling
const [color, setColor] = useState(false)
const changeColor = () => {
    if (window.scrollY >= 90) {
        setColor(true)
    } else {
        setColor(false)
    }
}

window.addEventListener('scroll', changeColor)
//close menu on click
const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg':'header'}>
            <nav className='navbar'>
                <div>
                <Link to='hero' syp={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                    <img className='logo' src={logo} alt='logo' />
                </Link>
          
              
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to='hero' syp={true} smooth={true}   duration={500} onClick={closeMenu}>Home  </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='about' syp={true} smooth={true}  duration={500} onClick={closeMenu}>About  </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='menu' syp={true} smooth={true}   duration={500} onClick={closeMenu}>Menu  </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://www.ubereats.com/store/food-street-toronto/6EaysfLnVH-EftuNpmlU8w?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Order</a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://www.google.com/maps/place/Food+Street+Toronto/@43.8805911,-79.3819457,11z/data=!4m6!3m5!1s0x89d4d152db16f37f:0xcd7251c597a0d2a4!8m2!3d43.7693609!4d-79.2815096!16s%2Fg%2F11l2v60zy5?entry=ttu" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
 