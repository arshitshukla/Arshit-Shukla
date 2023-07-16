import React from 'react';
import "./HeroImage.css";
import { Link } from 'react-router-dom';
import IntroImg from '../Images/HeroImage2.jpg';

const HeroImage = () => {
  return (
    <div className='Hero'>
        <div className='mask'>
            <img src={IntroImg} alt='Hero img' className='hero-img'/>
        </div>
        <div className='content'>
            <p>Hi, I am Arshit Shukla</p>
            <h1>A Frontend Developer</h1>
            <div className='button'>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;