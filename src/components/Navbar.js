import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <h2><Link to='/'>MovieDB</Link></h2>
                    </div>
                    <div className="links">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
