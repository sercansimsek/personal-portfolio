import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import './FooterStyles.css';

import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <p>Jilemnického 871/11</p> 
                    <p>Liptovsky Mikulas.</p>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>    
                        +421 951 472 283
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>    
                        sercan.simsek@outlook.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod incidunt, quibusdam animi nesciunt dolores eveniet blanditiis sed quae praesentium in beatae, voluptatem aliquam pariatur. Sit fuga non suscipit quod.</p>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/>    
                    <FaGithub size={30} style={{color: '#fff', marginRight: '1rem'}}/>    
                </div>
            </div>
        </div>
    </div>
  )
}
