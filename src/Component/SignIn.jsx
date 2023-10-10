import React from 'react';
import './SignIn.css';
import logo from '../images/logo.png'
import google from '../images/google.png'
import { Link } from 'react-router-dom';



function SignIn() {
  return (
    <div className='SignIn'>

      <div className='SignIn-border'>
          <div className='logoImage1'>
                <img src={logo} alt="" />
          </div>

          <h1>Sign In</h1>

          <div className='email'>
              <p>Enter Your Email</p>
              <input type="email" />
          </div>

          <div className='password'>
              <p>Password</p>
              <input type="password" />
          </div>

          <div className='checkbox'>
            <input type='checkbox' />
            <p>Remember Me</p>
          </div>

          <div className='signIn-btn'>
              <Link to={'/Dashboard'}><button>Sign In </button></Link>
              <p>OR</p>
              <div className='google'>
                  <img src={google} alt="" />
              </div>
          </div>

          <div className='createAcct'>
              <p>Don’t Have An Account?   
                  <Link to={'/signUp'}>
                  <span>
                    &nbsp;&nbsp;Click Here.....
                    </span>
                  </Link>
              </p>
            
          </div>

          <div className='signIn-footer'>
              <Link to={'/'}><p>← Back To Home</p></Link>
              <p>|</p>
              <p>Privacy & Policy</p>
              <p>|</p>
              <p>Terms & Condition</p>

          </div>
      </div>
    </div>
  )
}

export default SignIn
