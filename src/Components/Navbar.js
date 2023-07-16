import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar() {

  const [onClick,SetOnClick]=useState(true);
  
  const handleClick=()=>{
      SetOnClick(!onClick);
  }

  const[navbg,SetNavbg]=useState(false);
  const changeBg=()=>{
    if(window.scrollY>=100)
      SetNavbg(true);
    else
      SetNavbg(false);
  }

  window.addEventListener("scroll",changeBg);
  return (
    <>
      <div className={navbg ? "Header Header-bg" : "Header"} >
        <Link to="/">
          <h1>Arshit Shukla</h1>
        </Link>
        <ul className={onClick ? "nav-elements" : "nav-elements active"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {onClick ?(
          <FaBars size={20} style={{color:"#fff"}}/>
          ):(
            <FaTimes size={20} style={{color:"#fff"}}/>
          )};
        </div>
      </div>
    </>
  );
}
