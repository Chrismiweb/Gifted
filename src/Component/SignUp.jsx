import React from 'react';
import './SignUp.css';
import logo from '../images/logo.png'
import google from '../images/google.png'
import { Link } from 'react-router-dom';



function SignUp() {
  return (
    <div className='SignUp'>

      <div className='SignIn-border'>
          <div className='logoImage'>
                <img src={logo} alt="" />
          </div>

          <h1>Sign Up</h1>

          <div className='email'>
              <p>Username</p>
              <input type="email" />
          </div>
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
            <p>I Have Agree To The Terms 
              & Conditions And The Privacy 
              & Policy Of This Website.</p>
          </div>

          <div className='signUp-btn'>
              <Link to={'/Planpage'}><button>Sign Up </button></Link>
              <p>OR</p>
              <div className='google'>
                  <img src={google} alt="" />
              </div>
          </div>

          <div className='createAcct'>
              <p>Already Have An Existing Account?   
                  <Link to={'/sign'}>
                  <span>
                    &nbsp;&nbsp;Click Here.....
                    </span>
                  </Link>
              </p>
            
          </div>

          <div className='signUp-footer'>
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

export default SignUp
