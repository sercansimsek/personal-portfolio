import './HomeContentStyles.css';
import IntroImng from '../../assets/intro-bg.jpg';

import React from 'react'
import { Link } from 'react-router-dom';

export const HomeContent = () => {
  return (
    <div className="home">
        <div className="mask">
            <img 
                className='intro-img'
                src={IntroImng} 
                alt="home-bcg" 
            />
        </div>

        <div className="content">
            <p>HI, I'M SERCAN</p>
            <h1>Frontend Developer</h1>
            <div>
                <Link to='/projects' className='btn'>
                    Projects
                </Link>

                <Link to='/contact' className='btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  );
};
