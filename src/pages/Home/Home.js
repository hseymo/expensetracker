import React, {useState} from 'react';
import './Home.css'

function Home({isLoggedIn}) {

  return (
    <div className='homeContainer'>
      <header className="homeHeader">
        Welcome to my expense tracking application!
      </header>
      <div className='homeSectionContainer'>
      <p className="homeDescription"> The goal of this app is to allow you to custom build your expense tracker. While there are many expense trackers out there, I aim to create one that is customizable and gives you the ability to track your expenses in any manner you desire.</p>
      <button className='homeLoginButton' onClick={(e) => {window.location.href = "/login"}}>Login</button>
      {/* {!isLoggedIn ? (
        <button className='enter' onClick={(e) => {window.location.href = "/login"}}>Login</button>
          ) : (
        <button className='enter' onClick={(e) => {window.location.href = "/dashboard"}}>Dashboard</button>
      )} */}
      </div>
    </div>
  );
}

export default Home;
