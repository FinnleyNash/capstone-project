import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.jpg';

const Nav = () => {
    const [menuOpen, steMenuOpen] = useState(false);

    const toggleMenu = () => {
        steMenuOpen(!menuOpen);
    }

    return (
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'></img>
            </a>

    <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
    </div>

    <ul className={'nav-links ${menuOpen ? "visible" :""}'}>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>Reservations</a>
        </li>
        <li>
            <a href='/'>Menu</a>
        </li>
        <li>
            <a href='/'>Order Online</a>
        </li>
        <li>
            <a href='/'>About</a>
        </li>
        <li>
            <a href='/'>Login</a>
        </li>
    </ul>


        </nav>
    )
}

export default Nav;


