import React from 'react'
import './CommunityPage.css'
import logo from '../images/logo.png';
import {BsArrowRight} from 'react-icons/bs';

import clock from '../images/clock.png'
import run from '../images/run.png';
import leader from '../images/leader.png';
import win from '../images/win.png'
import course from '../images/course.png';
import payment from '../images/payment.png';
import referral from '../images/referral.png';
import earning from '../images/earning.png';
import setting from '../images/setting.png';
import community from '../images/community.png';
import help from '../images/help.png';
import { Link } from 'react-router-dom';
// import{BiMenu} from 'react-icons/bi';
// import {AiOutlineClose} from 'react-icons/ai';

const Asidebar = () => {
  return (
    <div>
        <div className='leftSide'> 
            <div className='first-line'>
                <Link to={'/'}>
                <div className='dashboard-logo'>
                    <img src={logo} alt="" />
                </div>
                </Link>
                <p><BsArrowRight/></p>
            </div>

            <Link to={'/Dashboard'}>
                <div className='second-line'>
                    <div className='dashboard-logo2'>
                        <img src={clock} alt="" />
                    </div>
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link to={'/QuizPage'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={run} alt="" />
                    </div>
                    <p>Quiz Competition</p>
                
                </div>
            </Link>
            <Link to={'/Leaderboard'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={leader} alt="" />
                    </div>
                    <p>Quiz Leaderboard</p>
                    
                </div>
            </Link>
            <Link to={'/Course'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={win} alt="" />
                    </div>
                    <p>Spin To Win</p>
                    
                </div>
            </Link>
            <Link to={'/Course'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={course} alt="" />
                    </div>
                <p>Courses</p>
                    
                </div>
            </Link>
            <Link to={'/PaymentPage'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={payment} alt="" />
                    </div>
                    <p>Payment</p>
                    
                </div>
            </Link>
            <Link to={'/ReferralPage'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={referral} alt="" />
                    </div>
                    <p>Referral History</p>
                </div>
            </Link>
            <Link to={'/Dashboard'}>
                <div className='third-line'>
                    <div className='dashboard-logo3'>
                        <img src={earning} alt="" />
                    </div>
                    <p>Earning History</p>
                </div>
            </Link>

            <Link to={'/SettingPage'}>
                <div className='fourth-line'>
                    <div className='dashboard-logo4'>
                        <img src={setting} alt="" />
                    </div>
                <p>Settings</p>
                </div>
            </Link>
            <Link to={'/Gethelp'}>
                <div className='fourth-line'>
                    <div className='dashboard-logo4'>
                        <img src={help} alt="" />
                    </div>
                    <p>Get Help</p>
                </div>
            </Link>
            <Link to={'/CommunityPage'}>
                <div className='fourth-line'>
                    <div className='dashboard-logo4'>
                        <img src={community} alt="" />
                    </div>
                    <p>Community</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Asidebar