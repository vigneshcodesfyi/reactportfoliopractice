import React from 'react'
import './Profile.css';
import profileimage from './Untitled Project.jpg'
const Profile = () => {
  return (
    <>
<div className='profile'>
    <div className='profile-section-image'>
      
    <img src={profileimage} alt='Profile' />

    </div>



    <div className='profile-section-details'>
      
      <h5>Front End Developer</h5>
    <h1>HI , I am <span className='name'>Vignesh</span></h1>
    <br></br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
   </div>


   
</div>

    </>
  )
}

export default Profile;