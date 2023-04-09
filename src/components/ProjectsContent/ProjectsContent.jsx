import './ProjectsContentStyles.css';

import React from 'react'

export const ProjectsContent = ({ heading, text }) => {
  return (
    <div className='bcg-img'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

