import React from 'react'
import "./navbar.css"
import Logo from "../../assets/images/logo.svg"
import ProfileImg from "../../assets/images/profile.svg"

const Navbar = () => {
  return (
    <nav>
        <img className='logo' src={Logo} alt="tute dude logo" />
        <ul>
            <li className='assignment'>My Assignment</li>
            <li className='chat'>Chat with Mentor</li>
            <li className='profile'>
                <img src={ProfileImg} alt="user profile" />
                <p>ProfileName</p>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar