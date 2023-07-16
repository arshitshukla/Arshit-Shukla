import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import AboutImage from  '../Images/AboutImage.jpg';
import AboutImage2 from '../Images/AboutImage2.jpg'; 
const AboutContent = () => {
  return (
    <>
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <h1>Skills</h1>
            <div className='skills'>
                <div className='skill_inner'>C/C++</div>
                <div className='skill_inner'>Data Structures</div>
                <div className='skill_inner'>Algorithms</div>
                <div className='skill_inner'>HTML</div>
                <div className='skill_inner'>CSS</div>
                <div className='skill_inner'>JavaScript</div>
                <div className='skill_inner'>ReactJS</div>
                <div className='skill_inner'>Bootstrap</div>
                <div className='skill_inner'>OOPS</div>
                <div className='skill_inner'>Computer Networks</div>
            </div>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='top'>
                    <img src={AboutImage} className='img' alt='about me'/>
                </div>
                <div className='bottom'>
                    <img src={AboutImage2} className='img' alt='about me'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutContent