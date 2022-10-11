import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'
const Navbar = ({ onTextChange }) => {
    return (
        <div className='navbar'>
            <span className='nav-title'>Recipe finder</span>
            <img
                src={logo}
                className="img"
                alt="logo"
            />
            <div className="userSearch">
                <input
                    type="search"
                    className='search'
                    placeholder='Enter the dish name or main ingredient'
                    onChange={onTextChange} />
            </div>
        </div>
    )
}

export default Navbar