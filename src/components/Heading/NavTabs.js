import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavTabs({ isLoggedIn, userId, logout }) {

    return (
        <nav className='navBar'>
            {isLoggedIn ? (
                <ul>
                    <li className='navItem'>
                        <Link className="pageLink" to='/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link className="pageLink" to='/settings'>
                            Settings
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link className="pageLink" to='/' onClick={logout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className='navItem'>
                        <Link className="pageLink" to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default NavTabs;
