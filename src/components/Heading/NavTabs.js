import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi'
import './NavTabs.css'


function NavTabs({ isLoggedIn, userId, logout }) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(true)
    }

    return (

        <nav className='navBar'>
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
                {isLoggedIn ? (
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li className="nav-item">
                                <Link className="pageLink" to='/dashboard' onClick={closeMenu}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/settings' onClick={closeMenu}>Settings</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="pageLink" to='/' onClick={logout}>Logout</Link>
                            </li>
                        </ul>
                ) : (
                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <li className='nav-item'>
                            <Link className="pageLink" to='/login'>Login</Link>
                        </li>
                    </ul>
                )}
            </button>
        </nav>
    );
}

export default NavTabs;
