  import React from 'react'
  import './About.css'

  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import MailIcon from '@mui/icons-material/Mail';
  import GitHubIcon from '@mui/icons-material/GitHub';
  const About = () => {
    return (
   

  <div className='aboutme-container-text'>
    <h1 className='aboutmeheading'>About me</h1>
    <p c>
        Hi there! I'm a passionate software developer with a keen interest in web technologies and a love for problem-solving. With a background in [Your Background, e.g., "Computer Science"], I have honed my skills in creating dynamic and responsive web applications using modern technologies like JavaScript, React, and Node.js. I thrive in collaborative environments and enjoy turning ideas into reality through code.
      </p>
     
        In my free time, I love exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always excited to take on new challenges and grow both personally and professionally.
      
      <ul className='aboutus-sociallinks'>
          <li><LinkedInIcon fontSize="large" /></li> 
                <li><MailIcon  fontSize="large"/></li>
          <li><GitHubIcon  fontSize="large"/></li>
      </ul>
      <div className='downloadbutton'>
      <button>
        Download Resume
      </button>
      </div>
  </div>
    )
  }

  export default About