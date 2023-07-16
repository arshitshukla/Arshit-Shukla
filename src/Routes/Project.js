import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import ProjectCards from '../Components/ProjectCards'
import { useEffect } from 'react';

export const Project = () => {
  
  useEffect(()=>{
    document.title='Arshit Shukla | Projects';
  },[]);

  return (
    <>
      <Navbar/>
      <HeroImage2 heading="Projects" text="Some of my recent works"/>
      <ProjectCards/>
      <Footer/>
    </>
  )
}
