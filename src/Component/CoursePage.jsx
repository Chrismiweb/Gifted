import React, {useState} from 'react';
import './CoursePage.css';
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
import{VscTriangleDown} from 'react-icons/vsc';
import crypto from '../images/crypto.png';
import uxdesign from '../images/UXdesign.png';
import frontend from '../images/frontend.png';
import backend from '../images/backend.png';
import africa from '../images/africa.png';
import page from '../images/pageman.png';
import herb from '../images/herbs.png';
import skincare from '../images/skincare.png';
import Asidebar from './Asidebar';



function CoursePage() {
  const[menuHide,setMenuHide] = useState(false);
   const openMenu=()=>{
        setMenuHide(true);
   }
   const closeMenu=()=>{
        setMenuHide(false)
   }
   const[category, setCategory] = useState(false);
   const openCategory=()=>{
        setCategory(!category);
   }

  const ourCourses = [
    {
      image: crypto,
      course: "Advanced Cryptocurrency",
      price: "#20,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: uxdesign,
      course: "UI/UX Design",
      price: "#18,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: frontend,
      course: "Front-end Development",
      price: "#14,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: backend,
      course: "Back-end Development",
      price: "#15,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
  ]
  const ourCourses2 = [
    {
      image: skincare,
      course: "Skin Care Production",
      price: "#20,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: page,
      course: "Page Management",
      price: "#18,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: africa,
      course: "True Africa History",
      price: "#14,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
    {
      image: herb,
      course: "Africa Healing and Herbs Methodolgy",
      price: "#15,000",
      SQP: "200SQP",
      enroll: "Enroll Now",
    },
  ]
  return (
    <div className='coursePage'>
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

        

      <div className='courseRight'>
          <div className='courseTopbar'>
              <button onClick={openMenu}><BiMenu/></button>
              <div className='explore'>
                  <h1>Explore Your Prefered Course</h1>
                  <p>Choose Your Favorite Course To Acquire, And Be The Best In Your Niche.</p>
              </div>

              
                  <div className='category'>
                      <h1>Category</h1>
                      <p onClick={openCategory}><VscTriangleDown/></p>
                  </div>
          </div>
          <div className='listofcourse'>
                <div className={category? "categoryShow1": 'categoryShow2'}>
                              <p>Advanced Cryptocurrency</p>
                              <div className='line'></div>
                              <p>UI/UX design</p>
                              <div className='line'></div>
                              <p>Front-end developer</p>
                              <div className='line'></div>
                              <p>Back-end Development</p>
                              <div className='line'></div>
                              <p>skin care production</p>
                              <div className='line'></div>
                              <p>Page Management</p>
                              <div className='line'></div>
                              <p>True Africa History</p>
                              <div className='line'></div>
                              <p>Africa Healing And Herbs Methodolgy</p>
                  </div>

                  <div className='tech'>
                        <div className='techMechanics'>
                          <h1>Tech & Mechanics</h1>
                          <p>See...</p>
                        </div>

                        <div className='coursesBody'>
                          {ourCourses.map((crs)=>(
                              <div className='courseBorder'>
                                  <div className='courseImage'>
                                    <img src={crs.image} alt="" />
                                  </div>
                                  <h1>{crs.course}</h1>
                                  <p>{crs.price}</p>
                                  <div className='coursebutton'>
                                    <button className='sqpBtn'>{crs.SQP}</button>
                                    <button className='enrollBtn'>{crs.enroll}</button>
                                  </div>
                              </div>
                          ))}  
                        </div>
                        
                  </div>
                  

                  <div className='history'>
                      <div className='techMechanics'>
                        <h1>History & Health</h1>
                        <p>See...</p>
                      </div>
                      <div className='coursesBody'>
                        {ourCourses2.map((crs)=>(
                            <div className='courseBorder'>
                                <div className='courseImage'>
                                  <img src={crs.image} alt="" />
                                </div>
                                <h1>{crs.course}</h1>
                                <p>{crs.price}</p>
                                <div className='coursebutton'>
                                  <button className='sqpBtn'>{crs.SQP}</button>
                                  <button className='enrollBtn'>{crs.enroll}</button>
                                </div>
                            </div>
                        ))}  
                      </div>
                  </div>
          </div>
      </div>




    </div>
  )
}

export default CoursePage