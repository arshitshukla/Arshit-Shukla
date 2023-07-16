import React from 'react';
import './ProjectCard.css';

const Card = (props) => {
  return (
    <div className='Project-card'>
        <h2 className='Project-title'>{props.title}</h2>
        <div className='Project-text'>
            <p>{props.text}</p>
            <p className='up'>Technologies Used : <p className='low'>{props.tech}</p></p>
            <div className='Project-btns'>
                <a href={props.view} className="btn">View</a>
                <a href={props.source} className="btn">Source</a>
            </div>
        </div>
    </div>
  )
}

export default Card;
