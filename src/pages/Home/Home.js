import React, {useState} from 'react';
import './Home.css'

function Home(
  // {isLoggedIn}
  ) {

  return (
    <div>
      <header className="header">
        Welcome to my expense tracking application!
      </header>
      <p className="description"> The goal of this app is to allow you to custom build your expense tracker. While there are many expense trackers out there, I aim to create one that is customizable and gives you the ability to track your expenses in any manner you desire.</p>
      {/* {!isLoggedIn ? (
        <button className='enter' onClick={(e) => {window.location.href = "/login"}}>Login</button>
          ) : (
        <button className='enter' onClick={(e) => {window.location.href = "/dashboard"}}>Dashboard</button>
      )} */}
    </div>
  );
}

export default Home;
