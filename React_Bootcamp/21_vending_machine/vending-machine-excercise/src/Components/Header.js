import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <nav className='Navbar'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/soda'}>soda</NavLink>
                <NavLink to={'/chips'}>chips</NavLink>
                <NavLink to={'/sardines'}>Sardines</NavLink>
            </nav>
        </header>
    )
}

export default Header