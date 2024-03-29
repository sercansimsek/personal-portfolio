import './ProjectCardStyles.css';

import React from 'react'
import { NavLink } from 'react-router-dom';

export const ProjectCards = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="img" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
        <p>{props.text}
        </p>
        <div className="pro-btns">
            <NavLink to={props.view} className='btn-light'>View</NavLink>
            <NavLink to={props.source} className='btn-light'>Source</NavLink>
        </div>
    </div>
</div>
  )
}
