import React, {useState} from 'react'
import './SettingPage.css'
import './Dashboard.css'
import logo from '../images/logo.png';
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
// import Props from './Earnings';
// import './Features2.css'
import { Link } from 'react-router-dom';
import{BiMenu} from 'react-icons/bi';
// import {AiOutlineClose} from 'react-icons/ai';
import chrismi from '../images/chrismi.jpeg'
import Asidebar from './Asidebar';



function SettingPage() {
    const[menuHide,setMenuHide] = useState(false);
   const openMenu=()=>{
        setMenuHide(true);
   }
   const closeMenu=()=>{
        setMenuHide(false)
   }
  return (
    <div className='SettingPage'>
        <Asidebar/>

        <div className='SettingRightSide'>
            <div className='SettingTop'>
                <button onClick={openMenu}><BiMenu/></button>
                <h1>Settings</h1>
                <p>manage all your settings  in here.</p>
                <div className='SettingProfilePics'>
                    <img src={chrismi} alt="" />
                </div>
            </div>
            <div className='SettingInput'>
                <div className='SettingUsername'>
                    <p>Username</p>
                    <input type="text"/>
                </div>
                <div className='SettingUsername'>
                    <p>Your Email</p>
                    <input type="email"/>
                </div>
            </div>
            <div className='Settingbtn'>
                <button>Save</button>
                <button>Log Out</button>
            </div>
        </div>

        <div className={menuHide?"mobile" : 'mobile2'}>
                    <div className='first-mobile'>
                        <Link to={'/'}>
                        <div className='dashboard-logo'>
                            <img src={logo} alt="" />
                        </div>
                        </Link>
                        <button onClick={closeMenu}>X</button>

                        {/* <button onClick={closeMenu}>ttt</button> */}
                    </div>
                    <Link to={'/Dashboard'}>
                        <div className='second-mobile'>
                            <div className='dashboard-logo2'>
                                <img src={clock} alt="" />
                            </div>
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link to={'/QuizPage'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={run} alt="" />
                            </div>
                            <p>Quiz Competition</p>

                        </div>
                    </Link>
                    <Link to={'/Leaderboard'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={leader} alt="" />
                            </div>
                            <p>Quiz Leaderboard</p>
                        </div>
                    </Link>
                    <Link to={'/Course'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={win} alt="" />
                            </div>
                            <p>Spin To Win</p>
                        </div>
                    </Link>
                    <Link to={'/Course'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={course} alt="" />
                            </div>
                            <p>Courses</p>
                        </div>
                    </Link>
                    <Link to={'/PaymentPage'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={payment} alt="" />
                            </div>
                            <p>Payment</p>
                        </div>
                    </Link>
                    <Link to={'/ReferralPage'}>
                        <div className='third-mobile'>
                            <div className='dashboard-logo3'>
                                <img src={referral} alt="" />
                            </div>
                            <p>Referrals History</p>
                        </div>
                    </Link>
                    <Link to={'/Dashboard'}> 
                    <div className='third-mobile'>
                        <div className='dashboard-logo3'>
                            <img src={earning} alt="" />
                        </div>
                       <p>Earnings History</p>
                    </div>
                    </Link>
                    <Link to={'/SettingPage'}>
                        <div className='fourth-mobile'>
                            <div className='dashboard-logo4'>
                                <img src={setting} alt="" />
                            </div>
                            <p>Settings</p>
                        </div>
                    </Link>
                    <Link to={'/Gethelp'}>
                        <div className='fourth-mobile'>
                            <div className='dashboard-logo4'>
                                <img src={help} alt="" />
                            </div>
                            <p>Get Help</p>
                        </div>
                    </Link>
                    <Link to={'/CommunityPage'}>
                        <div className='fourth-mobile'>
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

export default SettingPage