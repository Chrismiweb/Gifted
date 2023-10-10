import React from 'react'
import dashboard from '../images/dashboard.png'
import './GetStarted.css';
import { Link } from 'react-router-dom';


function GetStarted(){
    return(
            <div className='getStarted'>
                <div className='text'>
                    <h1>We Breed And Reward Intellectuals</h1>
                    <p>Earn And Learn Unlimitedly As A Member...</p>
                    <Link to={''}><button>Get Started</button></Link>
                </div>

                <div className='dashboardImg'>
                    <img src={dashboard} alt="" />
                </div>
            </div>
    )
}

export default GetStarted