import './ProjectCardStyles.css';
import pro1 from '../../assets/bose.png';
import pro2 from '../../assets/quiz.png';
import pro3 from '../../assets/todos.png';

import React from 'react'
import { NavLink } from 'react-router-dom';

export const ProjectCards = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="img" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam alias quo beatae sequi animi a similique cupiditate nemo dolor.
                    </p>
                    <div className="pro-btns">
                        <NavLink to='url.com' className='btn'>View</NavLink>
                        <NavLink to='url.com' className='btn'>Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
