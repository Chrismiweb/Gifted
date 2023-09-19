import React from 'react'
import Navbar from './Navbar'
import GetStarted from './GetStarted'
import About from './About'
import Work from './Work'
import Learn from './Learn'
import Course from './Course'
import Participate from './Participate'
import Feature from './Feature'
import Quiz from './Quiz'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <GetStarted />
        <About />
        <Work />
        <Learn />
        <Course />
        <Participate />
        <Feature />
        <Quiz />
        <Footer />
    </div>
  )
}

export default LandingPage