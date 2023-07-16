import React from 'react';
import './ProjectCard.css';
import Card from './Card';
import CardData from './CardData';

const ProjectCards = () => {
  return (
    <>
      <div className='card'>
        <div className='Project-container'>
          {CardData.map((val,ind)=>{
            return(
              <Card
              key={ind}
              title={val.title}
              text={val.text}
              tech={val.tech}
              view={val.view}
              source={val.source}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProjectCards;