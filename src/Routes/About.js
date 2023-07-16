import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import AboutContent from '../Components/AboutContent';
import { useEffect } from 'react';

const About = () => {
  useEffect(()=>{
    document.title='Arshit Shukla | About';
  },[]);
  
  return (
    <>
      <Navbar/>
      <HeroImage2 heading="About" text="Get to know about me"/>
      <AboutContent/>
      <Footer/>
    </>
  )
}

export default About;