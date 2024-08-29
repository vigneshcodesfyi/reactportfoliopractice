  import React from 'react'
  import './About.css'

  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import MailIcon from '@mui/icons-material/Mail';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import resume from './Resume-Vignesh.pdf'
  const About = () => {
    return (
   

  <div className='aboutme-container-text'>
<h1 className='aboutmeheading'>About me</h1>

     <div className='aboutimage'>
         <p className='aboutme-text'>
    In my free time, I love exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always excited to take on new challenges and grow both personally and professionally.
    
    In my free time, I love exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always excited to take on new challenges and grow both personally and professionally.
    In my free time, I love exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always excited to take on new challenges and grow both personally and professionally.
    In my free time, I love exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always excited to take on new challenges and grow both personally and professionally.
    </p>
    <ul className='aboutus-sociallinks'>
          <li>      <a href='https://www.linkedin.com/in/vignesh-s-9b4626229/' target='_blank'><LinkedInIcon fontSize="large" /></a></li> 
                <li> <a href=' https://mail.google.com/mail/u/0/?hl=en/#inbox?compose=new' target='_blank'><MailIcon  fontSize="large"/></a></li>
          <li>  <a href='https://github.com/vigneshcodesfyi' target='_blank'><GitHubIcon  fontSize="large"/></a></li>
      </ul>
      <div className='downloadbutton'>
      <a href={resume} download={resume}>
  <button>
    Download Resume
  </button>
</a>
      </div>

    </div>


      
   
     
      
     
   
  </div>
    )
  }

  export default About