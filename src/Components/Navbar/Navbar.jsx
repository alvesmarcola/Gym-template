import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import './Navbar.css'; 

const Navbar = ({ toggleTheme, theme }) => {
    return (
        <nav className='nav'>
            <Link to="main" className='logo' smooth={true} duration={2000} >
                 <img src={logo} alt="Logo" /> 
            </Link>

            <input type="checkbox" className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' htmlFor="menu-btn">
                <span className='nav-icon'></span>
            </label>

            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={2000}>Home</Link></li>
                <li><Link to='features' smooth={true} duration={2000}>Serviços</Link></li>
                <li><Link to='offer' smooth={true} duration={2000}>Sobre</Link></li>
                <li><Link to='about' smooth={true} duration={2000}>Agendamento</Link></li>
                <li><Link to='contact' smooth={true} duration={2000}>Contato</Link></li>
            </ul>

            <button className="toggle-mode-btn icons" onClick={toggleTheme}>
                {theme === 'dark' ? <UilSun color="#fff" size="25" background="transparent" /> : <UilMoon color="black" size="25" />}
            </button>
        </nav>
    );
};

export default Navbar;
