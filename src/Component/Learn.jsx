import React from 'react'
import './Learn.css';
// import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';


function Learn() {
    const learn = [
        {
            icon : icon3 ,
            headig: "Learn",
            content: " You’ll Be Taught By Our Experience And Qualified Teachers, And Get Update Through Our Website, Telegram Page And Newsletters.",
            learnMore: "Learn More ->",
        },
        {
            icon : icon2 ,
            headig: "Quiz",
            content: "Test Your Intellectual Growth And Win Weekly/Monthly Prizes Respectively.",
            learnMore: "Learn More ->",
        },
        {
            icon : icon3,
            headig: "Earn",
            content: "You’ll Earn Reward By Daily Incentive, Affiliate Commission And The Quiz You Completed.",
            learnMore: "Learn More ->",
        },
    ]
  return (
    <div className='learn'>
        <div className='learnMap'>
            {learn.map((lrn)=>(
                <div className='learn-border'>
                    <div className='learnIcon'>
                        <img src={lrn.icon} alt="" />
                    </div>
                    <h1>{lrn.headig}</h1>
                    <p>{lrn.content}</p>
                    <button>{lrn.learnMore}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Learn