import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'
const Navbar = ({ setQuery, getRecipe }) => {
    return (
        <div className='navbar'>
            <span className='nav-title'>Recipe finder</span>
            <img
                src={logo}
                className="img"
                // style={{
                //     height: "80px",
                //     width: "70px"
                // }}
                alt="logo"
            />
            <div className="userSearch">
                <input
                    type="search"
                    className='search'
                    placeholder='Enter the dish name or main ingredient'
                    onChange={(e) =>
                        setQuery(e.target.value)}
                />
                <button
                    onClick={getRecipe}
                    className="searchBtn"
                >
                    Go
                </button>
            </div>
        </div>
    )
}

export default Navbar