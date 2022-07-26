import React, {useState} from 'react';
import './Login.css'

function Login(
  // {isLoggedIn}
  ) {
    const [signupData, setSignupData] = useState({
        email: '',
        userName: '',
        password: ''
      })
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
      })

  return (
    <div className='loginPage'>
        <h1>Please log in or sign up!</h1>
        <div className='loginContainer'>
            <div className='loginSectionContainer'>
                <h2>Login</h2>
                <form className='loginForm'>
                    <div className='formGroup'>
                        <label htmlFor='loginUsername'>Username</label>
                        <input
                            name="loginUsername"
                            // value={loginData.username}
                            type='text'
                            placeholder='username'
                            onChange={(e) => setLoginData({...loginData, userName: e.target.value})}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='loginPassword'>Password</label>
                        <input
                            name="loginPassword"
                            // value={loginData.password}
                            type='text'
                            placeholder='password'
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        />
                    </div>
                    <button type="submit" className='submitbutton'>Submit</button>
                </form>
            </div>
            <div className='signupSectionContainer'>
                <h2>Signup</h2>
                <form className='signupForm'>
                    <div className='formGroup'>
                        <label htmlFor='signupEmail'>Email</label>
                        <input
                            name="signupEmail"
                            // value={signupData.email}
                            type='email'
                            placeholder='email'
                            onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='signupUsername'>Username</label>
                        <input
                            name="signupUsername"
                            // value={signupData.username}
                            type='text'
                            placeholder='username'
                            onChange={(e) => setSignupData({...signupData, userName: e.target.value})}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='signupPassword'>Password</label>
                        <input
                            name="signupPassword"
                            // value={signupData.password}
                            type='text'
                            placeholder='password'
                            onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                        />
                    </div>
                    <button type="submit" className='submitbutton'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;
