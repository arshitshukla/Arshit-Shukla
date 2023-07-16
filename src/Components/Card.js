import React from 'react';
import './ProjectCard.css';
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div className='Project-card'>
        <h2 className='Project-title'>{props.title}</h2>
        <div className='Project-text'>
            <p>{props.text}</p>
            <p className='up'>Technologies Used : <p className='low'>{props.tech}</p></p>
            <div className='Project-btns'>
                <Link to={props.view} className="btn">View</Link>
                <Link to={props.source} className="btn">Source</Link>
            </div>
        </div>
    </div>
  )
}

export default Card;
