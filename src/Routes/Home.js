import React from 'react';
import Navbar from '../Components/Navbar';
import HeroImage from '../Components/HeroImage';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

export const Home = () => {
  
  useEffect(()=>{
    document.title='Arshit Shukla | Home';
  },[]);

  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Footer />
    </div>
  )
}
