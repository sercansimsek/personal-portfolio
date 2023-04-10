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
                    <p>
                        <a href='https://goo.gl/maps/8RAYjeRMNtvYb3g57'>Jilemnického 871/11 031 01<br />Liptovsky Mikulas.
                        </a> 
                    </p>
                    
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>    
                        <a href="tel:+421 951 472 283">+421 951 472 283</a> 
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>    
                        <a href="mailto:sercan.simsek@outlook.com">sercan.simsek@outlook.com</a>
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod incidunt, quibusdam animi nesciunt dolores eveniet blanditiis sed quae praesentium in beatae, voluptatem aliquam pariatur. Sit fuga non suscipit quod.</p>
                    <a href="https://www.linkedin.com/in/sercan-simsek593152/"><FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/></a>
                    
                    <a href="https://github.com/sercansimsek"> <FaGithub size={30} style={{color: '#fff', marginRight: '1rem'}}/></a>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
