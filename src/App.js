import React, {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userId, setUserId] = useState(null);
  // const [token, setToken] = useState(null);

  // // check local storage for token on page load
  // useEffect(()=>{
  //   const storedToken = localStorage.getItem("token")
  //   if (storedToken) {
  //     setToken(storedToken)
  //   }
  // }, [])

  // // if there is a token, verify it using API route. set isloggedin to true and set user id. 
  // useEffect(()=> {
  //     if(token) {
  //       API.verify(token)
  //       .then(userData => {
  //         if (userData.userId){
  //           setIsLoggedIn(true);
  //           setUserId(userData.userId)
  //         } else {
  //           setIsLoggedIn(false);
  //           setUserId(null)
  //         }
  //       }).catch((err) => console.log(err))
  //     } else {
  //       setIsLoggedIn(false);
  //       setUserId(null)
  //     }
  //   }, [token])

  //   // on log in, set token in local storage 
  //   const handleLoginSubmit = (loginData) => {
  //     API.login(loginData)
  //     .then(data => {
  //       console.log(data)
  //       if (data.token) {
  //         setToken(data.token);
  //         localStorage.setItem("token", data.token);
  //         window.location.href = "/dashboard"
  //       } else {
  //         setErrorMessage('Login failed; please try again.')
  //       }
  //     })
  //     .catch ((err) => console.log(err))
  //   }
  
  //   // on sign up, set token in local storage
  //   const handleSignupSubmit = (signupData) => {
  //     API.signup(signupData)
  //     .then(data => {
  //       if (data.token) {
  //         setToken(data.token)
  //         localStorage.setItem("token", data.token);
  //         window.location.href = "/dashboard"
  //       } else {
  //         setErrorMessage('Signup failed; please try again.')
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //   }
  
  //   // logout by removing the token
  //   const logout = () => {
  //     setToken(null);
  //     localStorage.removeItem('token');
  //   }
    

  return (
<BrowserRouter>
  {/* <Header
    isLoggedIn={isLoggedIn}
    userId={userId}
    logout={logout}
  /> */}
  <Routes>
    <Route
      path='/'
      element={<Home
        // isLoggedIn={isLoggedIn}
      />} 
    />
    <Route 
      path='*' 
      element={<Home />} 
      />
  </Routes>
</BrowserRouter>
  );
}

export default App;
