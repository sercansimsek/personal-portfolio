import { ProjectCards } from '../ProjectCards/ProjectCards';
import { ProjectCardData } from './ProjectCardData';
import '../ProjectCards/ProjectCardStyles.css';

import React from 'react'

export const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">  
            {ProjectCardData.map((card, index) => {
                return (
                    <ProjectCards
                        key={index}
                        imgsrc={card.imgsrc} 
                        title={card.title}
                        text={card.text}
                        view={card.view}
                        source={card.source}
                    />
                );
            })}    
        </div>
    </div>
  )
}
