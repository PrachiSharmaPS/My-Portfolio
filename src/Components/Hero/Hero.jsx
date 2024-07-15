import React from 'react';
import './Hero.css'
import profile_img from '../../assets/about_profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/myResume.pdf';

const Hero=()=>{

  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Prachi-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return(
    <div id='home' className='hero'>
     <img src={profile_img} alt=''/>
     <h1> <span> I'm Prachi Sharama,</span> Web Developer based in India.</h1>
     <p>I specializing in JavaScript, Node.js, MongoDB, React.js, MySQL, PostgreSQL, Express, HTML, and CSS</p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#conect'> Connect with me </AnchorLink></div>
            <div onClick={handleDownload} className="hero-resume">My resume</div>

       
     </div>
    </div>
  )

}

export default Hero