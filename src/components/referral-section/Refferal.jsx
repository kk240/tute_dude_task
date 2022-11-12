import React from 'react'
import faqs from "../../data/data.json"

const Refferal = ({handleEnrollActive}) => {
  return (
    <>
    
        <p className='lead'>UI/UX &gt; Refer & Earn </p>
    <section className='referral-section'>
        <div className='referral-details'>
            <div className='detail'>
                <p className='detail-text'>
                    Refferal Earning
                </p>
                <p className='numbers'>
                    &#8377; 2500
                </p>
            </div>
            <div className='detail'>
                <p className='detail-text'>
                    Total Referral
                </p>
                <p className='numbers'>
                    7
                </p>
            </div>
            <div className='detail'>
                <p className='detail-text'>
                    wallet Balance
                </p>
                <p className='numbers'>
                    &#8377; 500
                </p>
            </div>
            <div className='withdraw'>
                <button>
                    Withdraw Balance
                </button>
            </div>
        </div>
        <div className='referral-code'>
            <p>Your Referral Code </p>
            <button className='refer-btn'></button>
        </div>
        </section>                   
        <section className='referral-faq'>
            <h1>How does it work ?</h1>
           
            <div className='faqs'>
            {
                faqs.map( (faq, index) => {
                    return(
                        <div className='faq' key={index}>
                        <div className='img-container'>
                            <img src={faq.icon} alt="people " />
                        </div>
                        <div className='question-container'>
                            <h2 className='question'>{faq.question}</h2>
                            <p className='answer'>{faq.answer}</p>
                        </div>
                    </div>
                    )
                })
            }
              
            </div>
        <div className='links'>
            <p onClick={handleEnrollActive} className='friends-enrolled'>Friends Who Enrolled</p>
            <p className='terms'>Terms & Conditions</p>
        </div>
    </section>
    </>
  )
}

export default Refferal