import { Link } from 'react-router-dom';
import './AboutInfoStyles.css';

import react from '../../assets/react1.jpg';
import js from '../../assets/react2.webp';

import React from 'react'

export const AboutInfo = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>About Me</h1>
            <p>I am a Front-End developer. I create responsive secure websites</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
               <div className="img-stack top">
                    <img 
                        className='img'
                        src={react} 
                        alt="react" 
                    />
                </div> 

                <div className="img-stack bottom">
                    <img 
                        className='img'
                        src={js} 
                        alt="js" 
                    />
                </div> 
            </div>
        </div>
    </div>
  )
}

