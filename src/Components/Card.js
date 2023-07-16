import React from 'react';
import './ProjectCard.css';
import {NavLink} from "react-router-dom";

const Card = (props) => {
  return (
    <div className='Project-card'>
        <h2 className='Project-title'>{props.title}</h2>
        <div className='Project-text'>
            <p>{props.text}</p>
            <p className='up'>Technologies Used : <p className='low'>{props.tech}</p></p>
            <div className='Project-btns'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Card;