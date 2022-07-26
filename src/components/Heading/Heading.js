import React from 'react';
import NavTabs from './NavTabs';
import './Heading.css';

export default function Heading ( {isLoggedIn, userId, logout } ) {
    return (
        <div className="Header">
            <NavTabs isLoggedIn={isLoggedIn} userId={userId} logout={logout}/>
            <h1>Expense Tracker</h1>
        </div>
    )
}