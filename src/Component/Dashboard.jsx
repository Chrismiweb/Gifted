import React, { useState } from 'react';
import './Dashboard.css'
import logo from '../images/logo.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
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
import bell from '../images/bell.png';
import man from '../images/man.png';
// import Props from './Earnings';
// import './Features2.css'
import Props from './Earnings'
import { Link } from 'react-router-dom';
import{BiMenu} from 'react-icons/bi';
import Asidebar from './Asidebar';
// import {AiOutlineClose} from 'react-icons/ai';



function Dashboard() {
   const[menuHide,setMenuHide] = useState(false);
   const openMenu=()=>{
        setMenuHide(true);
   }
   const closeMenu=()=>{
        setMenuHide(false)
   }

//    const closeMenu =()=>{
//     setMenuHide(false)
//    }
 
    return (
    <div className='dashboard'>
        <Asidebar/>



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






      
           

                
        


        

               
            
        <div className='right-side'>
            <div className='top-bar'>
                <button onClick={openMenu}><BiMenu/></button>
                <h1>Dashboard</h1>
                <input type="search" />
                <div className='bellimg'>
                    <img src={bell} alt="" />
                </div>
                <div className='manimg'>
                    <img src={man} alt="" />
                </div>
            </div>

            <div className='welcome'>
                <h1 className='welcometext'>Welcome, Chrismi</h1>
               <div className='earning'>
                    <Props
                        heading ="Total Earning"
                        amount="#203,978"
                        box="box1"
                    />
                     <Props
                        heading ="Total Points"
                        amount="2000SQP"
                        box="box2"
                    /> 
                    <Props
                    heading ="Referrals Earnings"
                    amount="#12,000"
                    box="box3"
                />
               </div>




            </div>

            <table>
                <h1>Earning History</h1>
                <tr className='header'>
                  <td>Task</td>
                  <td>Total Answered</td>
                  <td>Points</td>
                </tr>
                <tr className='profile'>
                  <td>1. What Is UI/UX Design</td>
                  <td>15</td>
                  <td>20pts</td>
                </tr>
                <tr className='profile'>
                   <td>2. Principle Of Design</td>
                  <td>15</td>
                  <td>40pts</td>
                </tr>
                <tr className='profile'>
                   <td>3. Interaction Design</td>
                  <td>15</td>
                  <td>20pts</td>
                </tr>
                <tr className='profile'>
                   <td>4. User Research</td>
                  <td>15</td>
                  <td>50pts</td>
                </tr>
                <tr className='profile'>
                   <td>5. Prototype</td>
                  <td>15</td>
                  <td>40pts</td>
                </tr>
                <tr className='profile'>
                   <td>6. Data Analysis</td>
                  <td>15</td>
                  <td>80pts</td>
                </tr>
            </table>

        </div>

        
        


    </div>
  )
}

export default Dashboard