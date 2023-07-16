import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Form from '../Components/Form';
import { useEffect } from 'react';

const Contact = () => {

  useEffect(()=>{
    document.title='Arshit Shukla | Contact';
  },[]);

  return (
    <>
      <Navbar/>
      <HeroImage2 heading="Contacts" text="Submit the form below to send me your message"/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact;