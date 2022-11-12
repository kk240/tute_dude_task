import React, { useState } from 'react'
import Enrolled from '../friendsEnrolled/Enrolled'
import Refferal from '../referral-section/Refferal'
import "./main.css"



const Main = () => {
  const [refferalActive, setRefferalActive] = useState(false)
  // const [enrollActive, setEnrollActive] = useState(false)


  const handleReferralActive = () => {
    setRefferalActive(true);
    console.log(refferalActive);
  }
  const handleEnrollActive = () => {
    setRefferalActive(false)
    window.scroll(0,0)
    // setEnrollActive(true)
    // console.log(enrollActive);
  }
  return (
    <div className='container'>
      {
        refferalActive 
        ? <Refferal handleEnrollActive={handleEnrollActive} /> 
        : <Enrolled handleReferralActive= {handleReferralActive} />
      }
    </div>
  )
}

export default Main