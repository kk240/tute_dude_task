import React from 'react'
import "./enrolled.css"
import BackArrow from "../../assets/images/back_arrow.svg"
import EnrolledFriends from "../../data/enrolledFriends.json"
 
const Enrolled = ({handleReferralActive}) => {
   

  return (
    <div>
        <section>
            <p className='para' >UI/UX &gt;<span id='back' onClick={handleReferralActive}> Refer & Earn </span>&gt; Friends Referred</p>
            <div className='backlink' onClick={handleReferralActive}  >
                <img src={BackArrow} alt="click to go referral detail page" />
                <span >go back</span>
            </div>
            <div className='wallet-detail'> 
                <div className='code-detail'>
                    <p>Your Referral Code </p>
                    <button >EDCHA</button>
                </div>
                <div className='balance-detail' >
                    <p className='balance-text'>wallet Balance</p>
                    <p className='balance-number' >&#8377; 500 </p>
                </div>
            </div>
        </section>
        <h1 className='headlights'>Friends who enrolled &#40;3&#41; </h1>
        <section className='friends-card' >
            {EnrolledFriends.map( (friend, index) => {
                const courses= friend.courses;
                return(
                    <div className='card' key={index}>
                <div className='card-detail'>
                    <p className='name'>{friend.name}</p>
                    <p className='date'>{friend.date}</p>
                </div>
                <p className='course-count'>courses Enrolled  &#40;{friend.courseCount}&#41; </p>
                <div className='courses'>
                    {courses.map( (course, index)=> {
                        return(
                          <p key={index}>{course}</p>  
                        )
                    })}
                    
                </div>
                <div className='earning'>
                    <p className='amount'> Refferal Amount <span>&#8377;{friend.refferalAmount}</span></p>
                </div>
            </div> 
                )
            })}
          
        </section>
        <p className='terms'>Terms & Conditions</p>
    </div>
  )
}

export default Enrolled