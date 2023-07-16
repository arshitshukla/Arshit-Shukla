import React from 'react';
import "./Footer.css";
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='address'>
                    <FaHome size={20} style={{color: "white", marginRight : '2rem'}}/>
                    <div>
                        <p>145 B/20 Chandpur, Salori,</p>
                        <p>Prayagraj</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color: "white", marginRight : '2rem'}} />
                    <p>+91 8957905633</p>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color: "white", marginRight : '2rem'}} />
                    <p>shuklaarshit@gmail.com</p>
                </div>
            </div>
            <div className='footer-right'>
                <h4>About me</h4>
                <p>I am skilled in C/C++ programming languages and Frontend Development with the help of HTML,CSS,JavaScript,ReactJS and Bootstrap. You can look at my works in the project section.</p>
                <div className='social'>
                    <Link to="https://instagram.com/arshitshukla?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram className="icon" size={30} style={{color: "white", marginRight : '1rem'}}/></Link>
                    <Link to="https://www.linkedin.com/in/arshit-shukla-b41a2a228/"><FaLinkedin className="icon" size={30} style={{color: "white", marginRight : '1rem'}}/></Link>
                    <Link to="https://github.com/arshitshukla"><FaGithub className="icon" size={30} style={{color: "white", marginRight : '1rem'}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;