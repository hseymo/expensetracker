import React, {useState} from 'react';
import './Login.css'

function Login(props) {
    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: ''
      })
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
      })
    const [errorMessage, setErrorMessage] = useState('')
    
    
    const loginSubmit = e => {
        e.preventDefault();
        if (loginData.username == '' || loginData.password == '') {
            setErrorMessage('Please enter your username and password')
        } else {
            props.login(loginData)
            setLoginData({
                username: '',
                password: ''
              })
            setErrorMessage('')
        }

    }

    const signupSubmit = e => {
        e.preventDefault();
        if (!signupData.email) {
            setErrorMessage('Please enter valid email address')
        } else if (!signupData.username) {
            setErrorMessage('Please enter your desired username.')
        } else if (!signupData.password.length < 8 ) {
            setErrorMessage("Please enter password with at least 8 characters.")
        } else {
            props.signup(signupData)
            setSignupData({
                email: '',
                username: '',
                password: ''
            })
            setErrorMessage('')
        }

    }

  return (
    <div className='loginPage'>
        <h1>Please log in or sign up!</h1>
        <div className='loginContainer'>
            <div className='loginSectionContainer'>
                <h2>Login</h2>
                <form className='loginForm' onSubmit={loginSubmit}>
                    <div className='formGroup'>
                        <label htmlFor='loginUsername'>Username</label>
                        <input
                            name="loginUsername"
                            // value={loginData.username}
                            type='text'
                            placeholder='username'
                            onChange={(e) => setLoginData({...loginData, username: e.target.value})}
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
                <form className='signupForm' onSubmit={signupSubmit}>
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
                            onChange={(e) => setSignupData({...signupData, username: e.target.value})}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='signupPassword'>Password</label>
                        <input
                            name="signupPassword"
                            // value={signupData.password}
                            type='text'
                            placeholder='password (min 8 char)'
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
