import React from 'react'
import './Planpage.css'
import Props from './Planprops.jsx'
import { Link } from 'react-router-dom'

function PlanPage() {
  return (
    <div className='planpage'>
        <div className='planborder'>
            <div className='plantext'>
                <h1>Choose Your Plan.</h1>
                <p>Choose  Your Prefered Package And Press The Continue Button.</p>
            </div>
            <div className='packagePlan'>
                <Props
                    myplan = "myplan1"

                    plan ="Weekly Plan"
                    price ="#2,400"
                    feature1 ="5 winners"
                    feature2 ="15 question per day"
                    feature3 ="winners get 20k each"
                    feature4 ="5 winners"

                />
                <Props
                    myplan = "myplan2"

                    plan ="Monthly Plan"
                    price ="#4,600"
                    feature1 ="available for 6 month"
                    feature2 ="team support"
                    feature3 ="15 question per day"
                    feature4 ="1st get 100k, 2nd get 75k, 3rd get 50k"
                    feature5 ="3 winners"

                />
            </div>

            <Link to='/Dashboard'><button className='planbtn'>Continue</button></Link>

            <div className='signUp-footer'>
                <Link to ={'/'}><p>← Back To Home</p></Link>
                <p>|</p>
                <p>Privacy & Policy</p>
                <p>|</p>
                <p>Terms & Condition</p>
          </div>
        </div>
    </div>
  )
}

export default PlanPage