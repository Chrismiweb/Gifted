import React, {useState} from 'react';
import './QuizPage.css'
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

import { Link } from 'react-router-dom';
import Asidebar from './Asidebar';

function QuizPage() {
    const[menuHide,setMenuHide] = useState(false);
    const openMenu=()=>{
         setMenuHide(true);
    }
    const closeMenu=()=>{
         setMenuHide(false)
    }
  return (
    <div className='QuizPage'>
         <Asidebar/>

        <div className='QuizRight'>
            <div className='QuizTop'>
                <button onClick={openMenu}>=</button>
                <div className='Topright'>
                    <h1>Play And Win Big Time</h1>
                    <p>Test Your Knowledge With Quiz And Earn SQP Points.</p>
                </div>
                <div className='QuizSeeAll'>
                    <p>See All...</p>
                </div>
            </div>
            <div className='Quiztable'>
                <div className='Quizcourse'>
                    <p>Advance In Cryptocurrency</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>UI/UX Design</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p> Front-end Development</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>Back-End Development</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>Page Management</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>True Africa History</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>Skin Care Productions</p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
                <div className='Quizline'></div>
                <div className='Quizcourse'>
                    <p>Africa Healing And Herbs Methodology </p>
                    <div className='Quizbtn'>
                        <button className='moreinfo'>More Info</button>
                        <button className='playnow'>Play Now</button>
                    </div>
                </div>
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

export default QuizPage